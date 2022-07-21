"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShard = void 0;
const identify_1 = require("./identify");
const handleMessage_1 = require("./handleMessage");
const types_1 = require("./types");
const startHeartbeating_1 = require("./startHeartbeating");
const stopHeartbeating_1 = require("./stopHeartbeating");
const resume_1 = require("./resume");
const bucket_1 = require("../../util/bucket");
const calculateSafeRequests_1 = require("./calculateSafeRequests");
const send_1 = require("./send");
const handleClose_1 = require("./handleClose");
const connect_1 = require("./connect");
const close_1 = require("./close");
const shutdown_1 = require("./shutdown");
const isOpen_1 = require("./isOpen");
const constants_1 = require("../../util/constants");
// TODO: debug
// TODO: function overwrite
// TODO: improve shard event resolving
/** */
function createShard(options) {
    // This is done for performance reasons
    const calculateSafeRequestsOverwritten = options.calculateSafeRequests ?? calculateSafeRequests_1.calculateSafeRequests;
    const closeOverwritten = options.close ?? close_1.close;
    const connectOverwritten = options.connect ?? connect_1.connect;
    const identifyOverwritten = options.identify ?? identify_1.identify;
    const sendOverwritten = options.send ?? send_1.send;
    const shutdownOverwritten = options.shutdown ?? shutdown_1.shutdown;
    const resumeOverwritten = options.resume ?? resume_1.resume;
    const handleCloseOverwritten = options.handleClose ?? handleClose_1.handleClose;
    const handleMessageOverwritten = options.handleMessage ?? handleMessage_1.handleMessage;
    const isOpenOverwritten = options.isOpen ?? isOpen_1.isOpen;
    const startHeartbeatingOverwritten = options.startHeartbeating ?? startHeartbeating_1.startHeartbeating;
    const stopHeartbeatingOverwritten = options.stopHeartbeating ?? stopHeartbeating_1.stopHeartbeating;
    return {
        // ----------
        // PROPERTIES
        // ----------
        /** The gateway configuration which is used to connect to Discord. */
        gatewayConfig: {
            compress: options.gatewayConfig.compress ?? false,
            intents: options.gatewayConfig.intents ?? 0,
            properties: {
                os: options.gatewayConfig?.properties?.os ?? 'linux',
                browser: options.gatewayConfig?.properties?.browser ?? 'Discordeno',
                device: options.gatewayConfig?.properties?.device ?? 'Discordeno',
            },
            token: options.gatewayConfig.token,
            url: options.gatewayConfig.url ?? 'wss://gateway.discord.gg',
            version: options.gatewayConfig.version ?? constants_1.API_VERSION,
        },
        /** This contains all the heartbeat information */
        heart: {
            acknowledged: false,
            interval: types_1.DEFAULT_HEARTBEAT_INTERVAL,
        },
        /** Id of the shard. */
        id: options.id,
        /** The maximum of requests which can be send to discord per rate limit tick.
         * Typically this value should not be changed.
         */
        maxRequestsPerRateLimitTick: types_1.MAX_GATEWAY_REQUESTS_PER_INTERVAL,
        /** The previous payload sequence number. */
        previousSequenceNumber: options.previousSequenceNumber || null,
        /** In which interval (in milliseconds) the gateway resets it's rate limit. */
        rateLimitResetInterval: types_1.GATEWAY_RATE_LIMIT_RESET_INTERVAL,
        /** Current session id of the shard if present. */
        sessionId: undefined,
        /** This contains the WebSocket connection to Discord, if currently connected. */
        socket: undefined,
        /** Current internal state of the shard. */
        state: types_1.ShardState.Offline,
        /** The total amount of shards which are used to communicate with Discord. */
        totalShards: options.totalShards,
        // ----------
        // METHODS
        // ----------
        /** The shard related event handlers. */
        events: options.events ?? {},
        /** Calculate the amount of requests which can safely be made per rate limit interval,
         * before the gateway gets disconnected due to an exceeded rate limit.
         */
        calculateSafeRequests() {
            return calculateSafeRequestsOverwritten(this);
        },
        /** Close the socket connection to discord if present. */
        close(code, reason) {
            return closeOverwritten(this, code, reason);
        },
        /** Connect the shard with the gateway and start heartbeating.
         * This will not identify the shard to the gateway.
         */
        async connect() {
            return await connectOverwritten(this);
        },
        /** Identify the shard to the gateway.
         * If not connected, this will also connect the shard to the gateway.
         */
        async identify() {
            return await identifyOverwritten(this);
        },
        /** Check whether the connection to Discord is currently open. */
        isOpen() {
            return isOpenOverwritten(this);
        },
        /** Function which can be overwritten in order to get the shards presence. */
        // This function allows to be async, in case the devs create the presence based on eg. database values.
        // Passing the shard's id there to make it easier for the dev to use this function.
        makePresence: options.makePresence,
        /** Attempt to resume the previous shards session with the gateway. */
        async resume() {
            return await resumeOverwritten(this);
        },
        /** Send a message to Discord.
         * @param {boolean} [highPriority=false] - Whether this message should be send asap.
         */
        async send(message, highPriority = false) {
            return await sendOverwritten(this, message, highPriority);
        },
        /** Shutdown the shard.
         * Forcefully disconnect the shard from Discord.
         * The shard may not attempt to reconnect with Discord.
         */
        async shutdown() {
            return await shutdownOverwritten(this);
        },
        /** @private Internal shard bucket.
         * Only access this if you know what you are doing.
         *
         * Bucket for handling shard request rate limits.
         */
        bucket: (0, bucket_1.createLeakyBucket)({
            max: types_1.MAX_GATEWAY_REQUESTS_PER_INTERVAL,
            refillInterval: types_1.GATEWAY_RATE_LIMIT_RESET_INTERVAL,
            refillAmount: types_1.MAX_GATEWAY_REQUESTS_PER_INTERVAL,
        }),
        /** @private Internal shard function.
         * Only use this function if you know what you are doing.
         *
         * Handle a gateway connection close.
         */
        async handleClose(close) {
            return await handleCloseOverwritten(this, close);
        },
        /** @private Internal shard function.
         * Only use this function if you know what you are doing.
         *
         * Handle an incoming gateway message.
         */
        async handleMessage(message) {
            return await handleMessageOverwritten(this, message);
        },
        /** This function communicates with the management process, in order to know whether its free to identify. */
        async requestIdentify() {
            return await options.requestIdentify(this.id);
        },
        /** @private Internal state.
         * Only use this if you know what you are doing.
         *
         * Cache for pending gateway requests which should have been send while the gateway went offline.
         */
        offlineSendQueue: [],
        /** @private Internal shard map.
         * Only use this map if you know what you are doing.
         *
         * This is used to resolve internal waiting states.
         * Mapped by SelectedEvents => ResolveFunction
         */
        resolves: new Map(),
        /** @private Internal shard function.
         * Only use this function if you know what you are doing.
         *
         * Start sending heartbeat payloads to Discord in the provided interval.
         */
        startHeartbeating(interval) {
            return startHeartbeatingOverwritten(this, interval);
        },
        /** @private Internal shard function.
         * Only use this function if you know what you are doing.
         *
         * Stop the heartbeating process with discord.
         */
        stopHeartbeating() {
            return stopHeartbeatingOverwritten(this);
        },
    };
}
exports.createShard = createShard;

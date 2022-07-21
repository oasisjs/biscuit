import { identify } from './identify';
import { handleMessage } from './handleMessage';
import { Shard, ShardEvents, ShardGatewayConfig, ShardHeart, ShardSocketRequest, ShardState } from './types';
import { startHeartbeating } from './startHeartbeating';
import { stopHeartbeating } from './stopHeartbeating';
import { resume } from './resume';
import { LeakyBucket } from '../../util/bucket';
import { calculateSafeRequests } from './calculateSafeRequests';
import { send } from './send';
import { handleClose } from './handleClose';
import { connect } from './connect';
import { close } from './close';
import { shutdown } from './shutdown';
import { isOpen } from './isOpen';
import { DiscordGatewayPayload, DiscordStatusUpdate } from '../../../api-types/discord';
import { PickPartial } from '../../../api-types/shared';
/** */
export declare function createShard(options: CreateShard): {
    /** The gateway configuration which is used to connect to Discord. */
    gatewayConfig: ShardGatewayConfig;
    /** This contains all the heartbeat information */
    heart: ShardHeart;
    /** Id of the shard. */
    id: number;
    /** The maximum of requests which can be send to discord per rate limit tick.
     * Typically this value should not be changed.
     */
    maxRequestsPerRateLimitTick: number;
    /** The previous payload sequence number. */
    previousSequenceNumber: number | null;
    /** In which interval (in milliseconds) the gateway resets it's rate limit. */
    rateLimitResetInterval: number;
    /** Current session id of the shard if present. */
    sessionId: string | undefined;
    /** This contains the WebSocket connection to Discord, if currently connected. */
    socket: WebSocket | undefined;
    /** Current internal state of the shard. */
    state: ShardState;
    /** The total amount of shards which are used to communicate with Discord. */
    totalShards: number;
    /** The shard related event handlers. */
    events: ShardEvents;
    /** Calculate the amount of requests which can safely be made per rate limit interval,
     * before the gateway gets disconnected due to an exceeded rate limit.
     */
    calculateSafeRequests: () => number;
    /** Close the socket connection to discord if present. */
    close: (code: number, reason: string) => void;
    /** Connect the shard with the gateway and start heartbeating.
     * This will not identify the shard to the gateway.
     */
    connect: () => Promise<void>;
    /** Identify the shard to the gateway.
     * If not connected, this will also connect the shard to the gateway.
     */
    identify: () => Promise<void>;
    /** Check whether the connection to Discord is currently open. */
    isOpen: () => boolean;
    /** Function which can be overwritten in order to get the shards presence. */
    makePresence: ((shardId: number) => DiscordStatusUpdate | Promise<DiscordStatusUpdate>) | undefined;
    /** Attempt to resume the previous shards session with the gateway. */
    resume: () => Promise<void>;
    /** Send a message to Discord.
     * @param {boolean} [highPriority=false] - Whether this message should be send asap.
     */
    send: (message: ShardSocketRequest, highPriority?: boolean) => Promise<void>;
    /** Shutdown the shard.
     * Forcefully disconnect the shard from Discord.
     * The shard may not attempt to reconnect with Discord.
     */
    shutdown: () => Promise<void>;
    /** @private Internal shard bucket.
     * Only access this if you know what you are doing.
     *
     * Bucket for handling shard request rate limits.
     */
    bucket: LeakyBucket;
    /** @private Internal shard function.
     * Only use this function if you know what you are doing.
     *
     * Handle a gateway connection close.
     */
    handleClose: (close: CloseEvent) => Promise<void>;
    /** @private Internal shard function.
     * Only use this function if you know what you are doing.
     *
     * Handle an incoming gateway message.
     */
    handleMessage: (message: MessageEvent<any>) => Promise<void>;
    /** This function communicates with the management process, in order to know whether its free to identify. */
    requestIdentify: () => Promise<void>;
    /** @private Internal state.
     * Only use this if you know what you are doing.
     *
     * Cache for pending gateway requests which should have been send while the gateway went offline.
     */
    offlineSendQueue: ((_?: unknown) => void)[];
    /** @private Internal shard map.
     * Only use this map if you know what you are doing.
     *
     * This is used to resolve internal waiting states.
     * Mapped by SelectedEvents => ResolveFunction
     */
    resolves: Map<"READY" | "RESUMED" | "INVALID_SESSION", (payload: DiscordGatewayPayload) => void>;
    /** @private Internal shard function.
     * Only use this function if you know what you are doing.
     *
     * Start sending heartbeat payloads to Discord in the provided interval.
     */
    startHeartbeating: (interval: number) => void;
    /** @private Internal shard function.
     * Only use this function if you know what you are doing.
     *
     * Stop the heartbeating process with discord.
     */
    stopHeartbeating: () => void;
};
export interface CreateShard {
    /** Id of the shard which should be created. */
    id: number;
    /** Gateway configuration for the shard. */
    gatewayConfig: PickPartial<ShardGatewayConfig, 'token'>;
    /** The total amount of shards which are used to communicate with Discord. */
    totalShards: number;
    /** This function communicates with the management process, in order to know whether its free to identify.
     * When this function resolves, this means that the shard is allowed to send an identify payload to discord.
     */
    requestIdentify: (shardId: number) => Promise<void>;
    /** Calculate the amount of requests which can safely be made per rate limit interval,
     * before the gateway gets disconnected due to an exceeded rate limit.
     */
    calculateSafeRequests?: typeof calculateSafeRequests;
    /** Close the socket connection to discord if present. */
    close?: typeof close;
    /** Connect the shard with the gateway and start heartbeating.
     * This will not identify the shard to the gateway.
     */
    connect?: typeof connect;
    /** @private Internal shard function.
     * Only use this function if you know what you are doing.
     *
     * Handle a gateway connection close.
     */
    handleClose?: typeof handleClose;
    /** @private Internal shard function.
     * Only use this function if you know what you are doing.
     *
     * Handle an incoming gateway message.
     */
    handleMessage?: typeof handleMessage;
    /** Identify the shard to the gateway.
     * If not connected, this will also connect the shard to the gateway.
     */
    identify?: typeof identify;
    /** Check whether the connection to Discord is currently open. */
    isOpen?: typeof isOpen;
    /** Function which can be overwritten in order to get the shards presence. */
    makePresence?(shardId: number): Promise<DiscordStatusUpdate> | DiscordStatusUpdate;
    /** The maximum of requests which can be send to discord per rate limit tick.
     * Typically this value should not be changed.
     */
    maxRequestsPerRateLimitTick?: number;
    /** The previous payload sequence number. */
    previousSequenceNumber?: number;
    /** In which interval (in milliseconds) the gateway resets it's rate limit. */
    rateLimitResetInterval?: number;
    /** Attempt to resume the previous shards session with the gateway. */
    resume?: typeof resume;
    /** Send a message to Discord.
     * @param {boolean} [highPriority=false] - Whether this message should be send asap.
     */
    send?: typeof send;
    /** Shutdown the shard.
     * Forcefully disconnect the shard from Discord.
     * The shard may not attempt to reconnect with Discord.
     */
    shutdown?: typeof shutdown;
    /** @private Internal shard function.
     * Only use this function if you know what you are doing.
     *
     * Start sending heartbeat payloads to Discord in the provided interval.
     */
    startHeartbeating?: typeof startHeartbeating;
    /** Current internal state of the shard. */
    state?: ShardState;
    /** @private Internal shard function.
     * Only use this function if you know what you are doing.
     *
     * Stop the heartbeating process with discord.
     */
    stopHeartbeating?: typeof stopHeartbeating;
    /** The shard related event handlers. */
    events?: ShardEvents;
    /** This contains all the heartbeat information */
    heart?: ShardHeart;
    /** Bucket for handling shard request rate limits. */
    bucket?: LeakyBucket;
    /** Cache for pending gateway requests which should have been send while the gateway went offline. */
    offlineSendQueue?: ShardSocketRequest[];
    /** This is used to resolve internal waiting states.
     * Mapped by SelectedEvents => ResolveFunction
     */
    resolves?: Shard['resolves'];
}

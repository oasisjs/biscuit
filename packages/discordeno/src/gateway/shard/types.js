"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShardSocketCloseCodes = exports.ShardState = exports.DEFAULT_HEARTBEAT_INTERVAL = exports.GATEWAY_RATE_LIMIT_RESET_INTERVAL = exports.MAX_GATEWAY_REQUESTS_PER_INTERVAL = void 0;
// TODO: think whether we also need an identifiedShard function
exports.MAX_GATEWAY_REQUESTS_PER_INTERVAL = 120;
exports.GATEWAY_RATE_LIMIT_RESET_INTERVAL = 60_000; // 60 seconds
exports.DEFAULT_HEARTBEAT_INTERVAL = 45000;
var ShardState;
(function (ShardState) {
    /** Shard is fully connected to the gateway and receiving events from Discord. */
    ShardState[ShardState["Connected"] = 0] = "Connected";
    /** Shard started to connect to the gateway.
     * This is only used if the shard is not currently trying to identify or resume.
     */
    ShardState[ShardState["Connecting"] = 1] = "Connecting";
    /** Shard got disconnected and reconnection actions have been started. */
    ShardState[ShardState["Disconnected"] = 2] = "Disconnected";
    /** The shard is connected to the gateway but only heartbeating.
     * At this state the shard has not been identified with discord.
     */
    ShardState[ShardState["Unidentified"] = 3] = "Unidentified";
    /** Shard is trying to identify with the gateway to create a new session. */
    ShardState[ShardState["Identifying"] = 4] = "Identifying";
    /** Shard is trying to resume a session with the gateway. */
    ShardState[ShardState["Resuming"] = 5] = "Resuming";
    /** Shard got shut down studied or due to a not (self) fixable error and may not attempt to reconnect on its own. */
    ShardState[ShardState["Offline"] = 6] = "Offline";
})(ShardState = exports.ShardState || (exports.ShardState = {}));
var ShardSocketCloseCodes;
(function (ShardSocketCloseCodes) {
    /** A regular Shard shutdown. */
    ShardSocketCloseCodes[ShardSocketCloseCodes["Shutdown"] = 3000] = "Shutdown";
    /** A resume has been requested and therefore the old connection needs to be closed. */
    ShardSocketCloseCodes[ShardSocketCloseCodes["ResumeClosingOldConnection"] = 3024] = "ResumeClosingOldConnection";
    /** Did not receive a heartbeat ACK in time.
     * Closing the shard and creating a new session.
     */
    ShardSocketCloseCodes[ShardSocketCloseCodes["ZombiedConnection"] = 3010] = "ZombiedConnection";
    /** Discordeno's gateway tests hae been finished, therefore the Shard can be turned off. */
    ShardSocketCloseCodes[ShardSocketCloseCodes["TestingFinished"] = 3064] = "TestingFinished";
    /** Special close code reserved for Discordeno's zero-downtime resharding system. */
    ShardSocketCloseCodes[ShardSocketCloseCodes["Resharded"] = 3065] = "Resharded";
    /** Shard is re-identifying therefore the old connection needs to be closed. */
    ShardSocketCloseCodes[ShardSocketCloseCodes["ReIdentifying"] = 3066] = "ReIdentifying";
})(ShardSocketCloseCodes = exports.ShardSocketCloseCodes || (exports.ShardSocketCloseCodes = {}));

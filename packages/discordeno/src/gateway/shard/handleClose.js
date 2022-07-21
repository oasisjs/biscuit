"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleClose = void 0;
const api_types_1 = require("@biscuit/api-types");
const types_1 = require("./types");
async function handleClose(shard, close) {
    //   gateway.debug("GW CLOSED", { shardId, payload: event });
    shard.stopHeartbeating();
    switch (close.code) {
        case types_1.ShardSocketCloseCodes.TestingFinished: {
            shard.state = types_1.ShardState.Offline;
            shard.events.disconnected?.(shard);
            return;
        }
        // On these codes a manual start will be done.
        case types_1.ShardSocketCloseCodes.Shutdown:
        case types_1.ShardSocketCloseCodes.ReIdentifying:
        case types_1.ShardSocketCloseCodes.Resharded:
        case types_1.ShardSocketCloseCodes.ResumeClosingOldConnection:
        case types_1.ShardSocketCloseCodes.ZombiedConnection: {
            shard.state = types_1.ShardState.Disconnected;
            shard.events.disconnected?.(shard);
            // gateway.debug("GW CLOSED_RECONNECT", { shardId, payload: event });
            return;
        }
        // Gateway connection closes which require a new identify.
        case api_types_1.GatewayCloseEventCodes.UnknownOpcode:
        case api_types_1.GatewayCloseEventCodes.NotAuthenticated:
        case api_types_1.GatewayCloseEventCodes.InvalidSeq:
        case api_types_1.GatewayCloseEventCodes.RateLimited:
        case api_types_1.GatewayCloseEventCodes.SessionTimedOut: {
            shard.state = types_1.ShardState.Identifying;
            shard.events.disconnected?.(shard);
            return await shard.identify();
        }
        // When these codes are received something went really wrong.
        // On those we cannot start a reconnect attempt.
        case api_types_1.GatewayCloseEventCodes.AuthenticationFailed:
        case api_types_1.GatewayCloseEventCodes.InvalidShard:
        case api_types_1.GatewayCloseEventCodes.ShardingRequired:
        case api_types_1.GatewayCloseEventCodes.InvalidApiVersion:
        case api_types_1.GatewayCloseEventCodes.InvalidIntents:
        case api_types_1.GatewayCloseEventCodes.DisallowedIntents: {
            shard.state = types_1.ShardState.Offline;
            shard.events.disconnected?.(shard);
            throw new Error(close.reason || 'Discord gave no reason! GG! You broke Discord!');
        }
        // Gateway connection closes on which a resume is allowed.
        case api_types_1.GatewayCloseEventCodes.UnknownError:
        case api_types_1.GatewayCloseEventCodes.DecodeError:
        case api_types_1.GatewayCloseEventCodes.AlreadyAuthenticated:
        default: {
            shard.state = types_1.ShardState.Resuming;
            shard.events.disconnected?.(shard);
            return await shard.resume();
        }
    }
}
exports.handleClose = handleClose;

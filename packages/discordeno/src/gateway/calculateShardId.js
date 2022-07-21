"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateShardId = void 0;
function calculateShardId(gateway, guildId) {
    if (gateway.manager.totalShards === 1) {
        return 0;
    }
    return Number((guildId >> 22n) % BigInt(gateway.manager.totalShards - 1));
}
exports.calculateShardId = calculateShardId;

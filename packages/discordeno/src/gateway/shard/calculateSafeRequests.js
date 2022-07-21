"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSafeRequests = void 0;
function calculateSafeRequests(shard) {
    // * 2 adds extra safety layer for discords OP 1 requests that we need to respond to
    const safeRequests = shard.maxRequestsPerRateLimitTick -
        Math.ceil(shard.rateLimitResetInterval / shard.heart.interval) * 2;
    return safeRequests < 0 ? 0 : safeRequests;
}
exports.calculateSafeRequests = calculateSafeRequests;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopHeartbeating = void 0;
function stopHeartbeating(shard) {
    // Clear the regular heartbeat interval.
    clearInterval(shard.heart.intervalId);
    // It's possible that the Shard got closed before the first jittered heartbeat.
    // To go safe we should clear the related timeout too.
    clearTimeout(shard.heart.timeoutId);
}
exports.stopHeartbeating = stopHeartbeating;

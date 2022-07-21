"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateWorkerId = void 0;
function calculateWorkerId(manager, shardId) {
    // Ignore decimal numbers.
    let workerId = Math.floor(shardId / manager.shardsPerWorker);
    // If the workerId overflows the maximal allowed workers we by default just use to last worker.
    if (workerId >= manager.totalWorkers) {
        // The Id of the last available worker is total -1
        workerId = manager.totalWorkers - 1;
    }
    return workerId;
}
exports.calculateWorkerId = calculateWorkerId;

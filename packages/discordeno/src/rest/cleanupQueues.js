"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupQueues = void 0;
/** Cleans up the queues by checking if there is nothing left and removing it. */
function cleanupQueues(rest) {
    for (const [key, queue] of rest.pathQueues) {
        rest.debug(`[REST - cleanupQueues] Running for of loop. ${key}`);
        if (queue.requests.length) {
            continue;
        }
        // REMOVE IT FROM CACHE
        rest.pathQueues.delete(key);
    }
    // NO QUEUE LEFT, DISABLE THE QUEUE
    if (!rest.pathQueues.size) {
        rest.processingQueue = false;
    }
}
exports.cleanupQueues = cleanupQueues;

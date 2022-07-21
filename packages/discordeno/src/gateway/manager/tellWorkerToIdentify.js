"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tellWorkerToIdentify = void 0;
/** Allows users to hook in and change to communicate to different workers across different servers or anything they like. For example using redis pubsub to talk to other servers. */
async function tellWorkerToIdentify(gateway, _workerId, shardId, _bucketId) {
    return await gateway.manager.identify(shardId);
}
exports.tellWorkerToIdentify = tellWorkerToIdentify;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shutdown = void 0;
const types_1 = require("./types");
async function shutdown(shard) {
    shard.close(types_1.ShardSocketCloseCodes.Shutdown, 'Shard shutting down.');
    shard.state = types_1.ShardState.Offline;
}
exports.shutdown = shutdown;

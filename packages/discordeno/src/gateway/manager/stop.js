"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stop = void 0;
const delay_1 = require("../../util/delay");
async function stop(gateway, code, reason) {
    // eslint-disable-next-line arrow-parens
    gateway.manager.shards.forEach((shard) => shard.close(code, reason));
    await (0, delay_1.delay)(5000);
}
exports.stop = stop;

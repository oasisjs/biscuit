"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const types_1 = require("./types");
const ws_1 = __importDefault(require("ws"));
// TODO: Remove code marked WSL GATEWAY PATCH once a bug in bun is fixed:
//   `https://github.com/Jarred-Sumner/bun/issues/521`
async function connect(shard) {
    let gotHello = false;
    // Only set the shard to `Connecting` state,
    // if the connection request does not come from an identify or resume action.
    if (![types_1.ShardState.Identifying, types_1.ShardState.Resuming].includes(shard.state)) {
        shard.state = types_1.ShardState.Connecting;
    }
    shard.events.connecting?.(shard);
    // Explicitly setting the encoding to json, since we do not support ETF.
    const socket = new ws_1.default(`${shard.gatewayConfig.url}/?v=${shard.gatewayConfig.version}&encoding=json`);
    shard.socket = socket;
    // TODO: proper event handling
    socket.onerror = (event) => console.log({ error: event });
    socket.onclose = (event) => shard.handleClose(event);
    socket.onmessage = (message) => {
        // START WSL GATEWAY PATCH
        gotHello = true;
        // END WSL GATEWAY PATCH
        shard.handleMessage(message);
    };
    return new Promise((resolve) => {
        socket.onopen = () => {
            // START WSL GATEWAY PATCH
            setTimeout(() => {
                if (!gotHello) {
                    shard.handleMessage({
                        data: JSON.stringify({
                            t: null,
                            s: null,
                            op: 10,
                            d: { heartbeat_interval: 41250 },
                        }),
                    });
                }
            }, 250);
            // END WSL GATEWAY PATCH
            // Only set the shard to `Unidentified` state,
            // if the connection request does not come from an identify or resume action.
            if (![types_1.ShardState.Identifying, types_1.ShardState.Resuming].includes(shard.state)) {
                shard.state = types_1.ShardState.Unidentified;
            }
            shard.events.connected?.(shard);
            resolve();
        };
    });
}
exports.connect = connect;

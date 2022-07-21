"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = void 0;
const ws_1 = __importDefault(require("ws"));
function close(shard, code, reason) {
    if (shard.socket?.readyState !== ws_1.default.OPEN) {
        return;
    }
    return shard.socket?.close(code, reason);
}
exports.close = close;

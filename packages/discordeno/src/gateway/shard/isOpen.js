"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOpen = void 0;
const ws_1 = __importDefault(require("ws"));
function isOpen(shard) {
    return shard.socket?.readyState === ws_1.default.OPEN;
}
exports.isOpen = isOpen;

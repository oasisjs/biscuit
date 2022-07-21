"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadMember = void 0;
const Routes = __importStar(require("../Routes"));
/**
 * A member that comes from a thread
 * @link https://discord.com/developers/docs/resources/channel#thread-member-object
 * * */
class ThreadMember {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.flags = data.flags;
        this.timestamp = Date.parse(data.join_timestamp);
    }
    session;
    id;
    flags;
    timestamp;
    get threadId() {
        return this.id;
    }
    async quitThread(memberId = this.session.botId) {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.THREAD_USER(this.id, memberId));
    }
    async fetchMember(memberId = this.session.botId) {
        const member = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.THREAD_USER(this.id, memberId));
        return new ThreadMember(this.session, member);
    }
}
exports.ThreadMember = ThreadMember;
exports.default = ThreadMember;

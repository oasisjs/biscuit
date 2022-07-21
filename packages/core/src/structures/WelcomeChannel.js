"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeChannel = void 0;
const Emoji_1 = __importDefault(require("./Emoji"));
/**
 * Not a channel
 * @link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
class WelcomeChannel {
    constructor(session, data) {
        this.session = session;
        this.channelId = data.channel_id;
        this.description = data.description;
        this.emoji = new Emoji_1.default(session, {
            name: data.emoji_name ? data.emoji_name : undefined,
            id: data.emoji_id ? data.emoji_id : undefined,
        });
    }
    session;
    channelId;
    description;
    emoji;
    /** alias for WelcomeScreenChannel.channelId */
    get id() {
        return this.channelId;
    }
}
exports.WelcomeChannel = WelcomeChannel;
exports.default = WelcomeChannel;

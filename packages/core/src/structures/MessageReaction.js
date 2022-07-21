"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReaction = exports.NewMessageReactionAdd = void 0;
const Emoji_1 = __importDefault(require("./Emoji"));
const Member_1 = __importDefault(require("./Member"));
/**
 * Creates a new MessageReactionAdd object.
 * @param session - Current application session.
 * @param data - Discord message reaction to parse.
 */
function NewMessageReactionAdd(session, data) {
    return {
        userId: data.user_id,
        channelId: data.channel_id,
        messageId: data.message_id,
        guildId: data.guild_id,
        member: data.member
            ? new Member_1.default(session, data.member, data.guild_id || '')
            : undefined,
        emoji: new Emoji_1.default(session, data.emoji),
    };
}
exports.NewMessageReactionAdd = NewMessageReactionAdd;
/**
 * Represents a reaction
 * @link https://discord.com/developers/docs/resources/channel#reaction-object
 */
class MessageReaction {
    constructor(session, data) {
        this.session = session;
        this.me = data.me;
        this.count = data.count;
        this.emoji = new Emoji_1.default(session, data.emoji);
    }
    session;
    me;
    count;
    emoji;
}
exports.MessageReaction = MessageReaction;
exports.default = MessageReaction;

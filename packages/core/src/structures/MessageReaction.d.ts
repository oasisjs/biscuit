import type { Session } from '../Session';
import type { DiscordMessageReactionAdd, DiscordReaction } from '@biscuit/api-types';
import Emoji from './Emoji';
import Member from './Member';
/**
 * Represents when a new reaction was added to a message.
 * @link https://discord.com/developers/docs/topics/gateway#message-reaction-add
 * */
export interface MessageReactionAdd {
    userId: string;
    channelId: string;
    messageId: string;
    guildId?: string;
    member?: Member;
    emoji: Partial<Emoji>;
}
/**
 * Represents when a reaction was removed from a message.
 * Equal to MessageReactionAdd but without 'member' property.
 * @see {@link MessageReactionAdd}
 * @link https://discord.com/developers/docs/topics/gateway#message-reaction-remove-message-reaction-remove-event-fields
 */
export declare type MessageReactionRemove = Omit<MessageReactionAdd, 'member'>;
/**
 * Represents when all reactions were removed from a message.
 * Equals to MessageReactionAdd but with 'channelId', 'messageId' and 'guildId' properties guaranteed.
 * @see {@link MessageReactionAdd}
 * @link https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all
 */
export declare type MessageReactionRemoveAll = Pick<MessageReactionAdd, 'channelId' | 'messageId' | 'guildId'>;
/**
 * Represents when a reaction-emoji was removed from a message.
 * Equals to MessageReactionAdd but with 'channelId', 'messageId', 'emoji' and 'guildId' properties guaranteed.
 * @see {@link MessageReactionRemove}
 * @see {@link Emoji}
 * @link https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji
 */
export declare type MessageReactionRemoveEmoji = Pick<MessageReactionAdd, 'channelId' | 'guildId' | 'messageId' | 'emoji'>;
/**
 * Creates a new MessageReactionAdd object.
 * @param session - Current application session.
 * @param data - Discord message reaction to parse.
 */
export declare function NewMessageReactionAdd(session: Session, data: DiscordMessageReactionAdd): MessageReactionAdd;
/**
 * Represents a reaction
 * @link https://discord.com/developers/docs/resources/channel#reaction-object
 */
export declare class MessageReaction {
    constructor(session: Session, data: DiscordReaction);
    readonly session: Session;
    me: boolean;
    count: number;
    emoji: Emoji;
}
export default MessageReaction;

import type { Model } from './Base';
import type { Session } from '../Session';
import type { AllowedMentionsTypes, DiscordEmbed, DiscordMessage, DiscordMessageComponents, FileContent, MessageActivityTypes, MessageTypes } from '@biscuit/api-types';
import type { Channel } from './channels';
import type { Component } from './components/Component';
import type { GetReactions } from '../Routes';
import type { MessageInteraction } from './interactions/InteractionFactory';
import { MessageFlags } from '../Util';
import { Snowflake } from '../Snowflake';
import { ThreadChannel } from './channels';
import User from './User';
import Member from './Member';
import Attachment from './Attachment';
import MessageReaction from './MessageReaction';
import Application from './Application';
import type { StickerItem } from './Sticker';
/**
 * @link https://discord.com/developers/docs/resources/channel#allowed-mentions-object
 */
export interface AllowedMentions {
    parse?: AllowedMentionsTypes[];
    repliedUser?: boolean;
    roles?: Snowflake[];
    users?: Snowflake[];
}
/**
 * @link https://github.com/denoland/deno_doc/blob/main/lib/types.d
 * channelId is optional when creating a reply, but will always be present when receiving an event/response that includes this data model.
 */
export interface CreateMessageReference {
    messageId: Snowflake;
    channelId?: Snowflake;
    guildId?: Snowflake;
    failIfNotExists?: boolean;
}
/**
 * @link https://discord.com/developers/docs/resources/channel#create-message-json-params
 * Posts a message to a guild text or DM channel. Returns a message object. Fires a Message Create Gateway event.
 */
export interface CreateMessage {
    embeds?: DiscordEmbed[];
    content?: string;
    allowedMentions?: AllowedMentions;
    files?: FileContent[];
    messageReference?: CreateMessageReference;
    tts?: boolean;
    components?: DiscordMessageComponents;
}
/**
 * @link https://discord.com/developers/docs/resources/channel#edit-message-json-params
 * Edit a previously sent message.
 * Returns a {@link Message} object. Fires a Message Update Gateway event.
 */
export interface EditMessage extends Partial<CreateMessage> {
    flags?: MessageFlags;
}
/**
 * Represents a guild or unicode {@link Emoji}
 */
export declare type EmojiResolvable = string | {
    name: string;
    id: Snowflake;
};
/**
 * A partial {@link User} to represent the author of a message sent by a webhook
 */
export interface WebhookAuthor {
    id: string;
    username: string;
    discriminator: string;
    avatar?: bigint;
}
/**
 * @link https://discord.com/developers/docs/resources/channel#message-object
 * Represents a message
 */
export declare class Message implements Model {
    constructor(session: Session, data: DiscordMessage);
    /** Reference to the client that instantiated this Message */
    readonly session: Session;
    /** id of the message */
    readonly id: Snowflake;
    /** type of message */
    type: MessageTypes;
    /** id of the channel the message was sent in */
    channelId: Snowflake;
    /** id of the guild the message was sent in, this should exist on MESSAGE_CREATE and MESSAGE_UPDATE events */
    guildId?: Snowflake;
    /** if the message is an Interaction or application-owned webhook, this is the id of the application */
    applicationId?: Snowflake;
    /** mentions if any */
    mentions: {
        /** users specifically mentioned in the message */
        users: User[];
        /** roles specifically mentioned in this message */
        roleIds: Snowflake[];
        /** channels specifically mentioned in the message */
        channels: Channel[];
    };
    /** sent if the message is a response to an Interaction */
    interaction?: MessageInteraction;
    /** the author of this message, this field is **not** sent on webhook messages */
    author: User;
    /** message flags combined as a bitfield */
    flags?: MessageFlags;
    /** whether this message is pinned */
    pinned: boolean;
    /** whether this was a TTS message */
    tts: boolean;
    /** contents of the message */
    content: string;
    /** used for validating a message was sent */
    nonce?: string | number;
    /** whether this message mentions everyone */
    mentionEveryone: boolean;
    /** when this message was sent */
    timestamp: number;
    /** when this message was edited */
    editedTimestamp?: number;
    /**
     * sent if the message contains stickers
     * **this contains sticker items not stickers**
     */
    stickers?: StickerItem[];
    /** reactions to the message */
    reactions: MessageReaction[];
    /** any attached files */
    attachments: Attachment[];
    /** any embedded content */
    embeds: DiscordEmbed[];
    /** member properties for this message's author */
    member?: Member;
    /** the thread that was started from this message, includes {@link ThreadMember} */
    thread?: ThreadChannel;
    /** sent if the message contains components like buttons, action rows, or other interactive components */
    components: Component[];
    /** if the message is generated by a webhook, this is the webhook's author data */
    webhook?: WebhookAuthor;
    /** sent with Rich Presence-related chat embeds */
    application?: Partial<Application>;
    /** sent with Rich Presence-related chat embeds */
    activity?: {
        partyId?: Snowflake;
        type: MessageActivityTypes;
    };
    /** gets the timestamp of this message, this does not requires the timestamp field */
    get createdTimestamp(): number;
    /** gets the timestamp of this message as a Date */
    get createdAt(): Date;
    /** gets the timestamp of this message (sent by the API) */
    get sentAt(): Date;
    /** gets the edited timestamp as a Date */
    get editedAt(): Date | undefined;
    /** whether this message was edited */
    get edited(): number | undefined;
    /** gets the url of the message that points to the message */
    get url(): string;
    /**
     * Compatibility with Discordeno
     * same as Message.author.bot
     */
    get isBot(): boolean;
    /**
     * Pins this message
     */
    pin(): Promise<void>;
    /**
     * Unpins this message
     */
    unpin(): Promise<void>;
    /** Edits the current message */
    edit(options: EditMessage): Promise<Message>;
    /** edits the current message flags to supress its embeds */
    suppressEmbeds(suppress: true): Promise<Message>;
    suppressEmbeds(suppress: false): Promise<Message | undefined>;
    /** deletes this message */
    delete(reason?: string): Promise<Message>;
    /** Replies directly in the channel where the message was sent */
    reply(options: CreateMessage): Promise<Message>;
    /** alias for Message.addReaction */
    get react(): (reaction: EmojiResolvable) => Promise<void>;
    /** adds a Reaction */
    addReaction(reaction: EmojiResolvable): Promise<void>;
    /** removes a reaction from someone */
    removeReaction(reaction: EmojiResolvable, options?: {
        userId: Snowflake;
    }): Promise<void>;
    /**
     * Get users who reacted with this emoji
     * not recommended since the cache handles reactions already
     */
    fetchReactions(reaction: EmojiResolvable, options?: GetReactions): Promise<User[]>;
    /**
     * same as Message.removeReaction but removes using a unicode emoji
     */
    removeReactionEmoji(reaction: EmojiResolvable): Promise<void>;
    /** nukes every reaction on the message */
    nukeReactions(): Promise<void>;
    /** publishes/crossposts a message to all followers */
    crosspost(): Promise<Message>;
    /** fetches this message, meant to be used with Function.call since its redundant */
    fetch(): Promise<Message | undefined>;
    /** alias of Message.crosspost */
    get publish(): () => Promise<Message>;
    /** wheter the message comes from a guild **/
    inGuild(): this is Message & {
        guildId: Snowflake;
    };
    /** wheter the messages comes from a Webhook */
    isWebhookMessage(): this is Message & {
        author: Partial<User>;
        webhook: WebhookAuthor;
        member: undefined;
    };
}
export default Message;

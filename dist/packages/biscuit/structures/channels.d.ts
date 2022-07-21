/** Types */
import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type { PermissionsOverwrites } from '../Util';
/** External from vendor */
import { ChannelTypes, DiscordChannel, DiscordOverwrite, TargetTypes, VideoQualityModes } from '../../discordeno/mod';
/** Classes and routes */
import * as Routes from '../Routes';
import Message, { CreateMessage, EditMessage, EmojiResolvable } from './Message';
import Invite from './Invite';
import Webhook from './Webhook';
import User from './User';
import ThreadMember from './ThreadMember';
/**
 * Abstract class that represents the base for creating a new channel.
 */
export declare abstract class BaseChannel implements Model {
    constructor(session: Session, data: DiscordChannel);
    /** id's refers to the identification of the channel */
    readonly id: Snowflake;
    /** The session that instantiated the channel */
    readonly session: Session;
    /** Channel name defined by the entity */
    name?: string;
    /** Refers to the possible channel type implemented (Guild, DM, Voice, News, etc...) */
    type: ChannelTypes;
    /** If the channel is a TextChannel */
    isText(): this is TextChannel;
    /** If the channel is a VoiceChannel */
    isVoice(): this is VoiceChannel;
    /** If the channel is a DMChannel */
    isDM(): this is DMChannel;
    /** If the channel is a NewChannel */
    isNews(): this is NewsChannel;
    /** If the channel is a ThreadChannel */
    isThread(): this is ThreadChannel;
    /** If the channel is a StageChannel */
    isStage(): this is StageChannel;
    toString(): string;
}
/**
 * Represents a category channel.
 */
export declare class CategoryChannel extends BaseChannel {
    constructor(session: Session, data: DiscordChannel);
    id: Snowflake;
    parentId?: string;
    name: string;
    permissionOverwrites: PermissionsOverwrites[];
    nsfw: boolean;
    guildId?: Snowflake;
    position?: number;
}
/** TextChannel */
/**
 * @link https://discord.com/developers/docs/resources/channel#create-channel-invite-json-params
 * Represents the options object to create an invitation
 */
export interface DiscordInviteOptions {
    /** duration of invite in seconds before expiry, or 0 for never. between 0 and 604800 (7 days) */
    maxAge?: number;
    /** max number of uses or 0 for unlimited. between 0 and 100 */
    maxUses?: number;
    /** if the invitation is unique. If it's true, don't try to reuse a similar invite (useful for creating many unique one time use invites) */
    unique?: boolean;
    /** whether this invite only grants temporary membership */
    temporary: boolean;
    reason?: string;
    /** the type of target for this voice channel invite */
    targetType?: TargetTypes;
    /** the id of the user whose stream to display for this invite, required if targetType is 1, the user must be streaming in the channel */
    targetUserId?: Snowflake;
    /** the id of the embedded application to open for this invite, required if targetType is 2, the application must have the EMBEDDED flag */
    targetApplicationId?: Snowflake;
}
/** Webhook create object */
export interface CreateWebhook {
    /** name of the webhook (1-80 characters) */
    name: string;
    /** image for the default webhook avatar */
    avatar?: string;
    reason?: string;
}
/** Available text-channel-types list */
export declare const textBasedChannels: ChannelTypes[];
/** Available text-channel-types */
export declare type TextBasedChannels = ChannelTypes.DM | ChannelTypes.GroupDm | ChannelTypes.GuildPrivateThread | ChannelTypes.GuildPublicThread | ChannelTypes.GuildNews | ChannelTypes.GuildVoice | ChannelTypes.GuildText;
/**
 * Represents a text channel.
 */
export declare class TextChannel {
    constructor(session: Session, data: DiscordChannel);
    /** The session that instantiated the channel */
    readonly session: Session;
    /** id's refers to the identification of the channel */
    readonly id: Snowflake;
    /** Current channel name */
    name?: string;
    /** The type of the channel */
    type: TextBasedChannels;
    /** The id of the last message sent in this channel (or thread for GUILD_FORUM channels) (may not point to an existing or valid message or thread) */
    lastMessageId?: Snowflake;
    /** When the last pinned message was pinned. This may be undefined in events such as GUILD_CREATE when a message is not pinned. */
    lastPinTimestamp?: string;
    /** Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected */
    rateLimitPerUser: number;
    /** If the channel is NSFW (Not-Safe-For-Work content) */
    nsfw: boolean;
    /**
     * Mixin
     */
    static applyTo(klass: Function, ignore?: Array<keyof TextChannel>): void;
    /**
     * fetchPins makes an asynchronous request and gets the current channel pins.
     * @returns A promise that resolves with an array of Message objects.
     */
    fetchPins(): Promise<Message[] | []>;
    /**
     * createInvite makes an asynchronous request to create a new invitation.
     * @param options - The options to create the invitation
     * @returns The created invite
     */
    createInvite(options?: DiscordInviteOptions): Promise<Invite>;
    /**
     * fetchMessages makes an asynchronous request and gets the channel messages
     * @param options - The options to get the messages
     * @returns The messages
     */
    fetchMessages(options?: Routes.GetMessagesOptions): Promise<Message[] | []>;
    /** sendTyping sends a typing POST request */
    sendTyping(): Promise<void>;
    /**
     * pinMessage pins a channel message.
     * Same as Message.pin().
     * @param messageId - The id of the message to pin
     * @returns The promise that resolves when the request is complete
     */
    pinMessage(messageId: Snowflake): Promise<void>;
    /**
     * unpinMessage unpin a channel message.
     * Same as Message.unpin()
     * @param messageId - The id of the message to unpin
     * @returns The promise of the request
     */
    unpinMessage(messageId: Snowflake): Promise<void>;
    /**
     * addReaction adds a reaction to the message.
     * Same as Message.addReaction().
     * @param messageId - The message to add the reaction to
     * @param reaction - The reaction to add
     * @returns The promise of the request
     */
    addReaction(messageId: Snowflake, reaction: EmojiResolvable): Promise<void>;
    /**
     * removeReaction removes a reaction from the message.
     * Same as Message.removeReaction().
     * @param messageId - The id of the message to remove the reaction from
     * @param reaction - The reaction to remove
     * @param options - The user to remove the reaction from
     */
    removeReaction(messageId: Snowflake, reaction: EmojiResolvable, options?: {
        userId: Snowflake;
    }): Promise<void>;
    /**
     * removeReactionEmoji removes an emoji reaction from the messageId provided.
     * Same as Message.removeReactionEmoji().
     * @param messageId - The message id to remove the reaction from.
     * @param emoji - The emoji to remove.
     * @param userId - The user id to remove the reaction from.
     */
    removeReactionEmoji(messageId: Snowflake, reaction: EmojiResolvable): Promise<void>;
    /** nukeReactions nukes every reaction on the message.
     * Same as Message.nukeReactions().
     * @param messageId The message id to nuke reactions from.
     * @returns A promise that resolves when the reactions are nuked.
     */
    nukeReactions(messageId: Snowflake): Promise<void>;
    /**
     * fetchReactions gets the users who reacted with this emoji on the message.
     * Same as Message.fetchReactions().
     * @param messageId - The message id to get the reactions from.
     * @param reaction - The emoji to get the reactions from.
     * @param options - The options to get the reactions with.
     * @returns The users who reacted with this emoji on the message.
     */
    fetchReactions(messageId: Snowflake, reaction: EmojiResolvable, options?: Routes.GetReactions): Promise<User[]>;
    /**
     * sendMessage sends a message to the channel.
     * Same as Message.reply().
     * @param options - Options for a new message.
     * @returns The sent message.
     */
    sendMessage(options: CreateMessage): Promise<Message>;
    /**
     * editMessage edits a message.
     * Same as Message.edit().
     * @param messageId - Message ID.
     * @param options - Options for edit a message.
     * @returns The edited message.
     */
    editMessage(messageId: Snowflake, options: EditMessage): Promise<Message>;
    /**
     * createWebhook creates a webhook.
     * @param options - Options for a new webhook.
     * @returns The created webhook.
     */
    createWebhook(options: CreateWebhook): Promise<Webhook>;
}
/** GuildChannel */
/**
 * Represent the options object to create a thread channel
 * @link https://discord.com/developers/docs/resources/channel#start-thread-without-message
 */
export interface ThreadCreateOptions {
    name: string;
    autoArchiveDuration?: 60 | 1440 | 4320 | 10080;
    type: 10 | 11 | 12;
    invitable?: boolean;
    rateLimitPerUser?: number;
    reason?: string;
}
/**
 * Representations of the objects to edit a guild channel
 * @link https://discord.com/developers/docs/resources/channel#modify-channel-json-params-guild-channel
 */
export interface EditGuildChannelOptions {
    name?: string;
    position?: number;
    permissionOverwrites?: PermissionsOverwrites[];
}
export interface EditNewsChannelOptions extends EditGuildChannelOptions {
    type?: ChannelTypes.GuildNews | ChannelTypes.GuildText;
    topic?: string | null;
    nfsw?: boolean | null;
    parentId?: Snowflake | null;
    defaultAutoArchiveDuration?: number | null;
}
export interface EditGuildTextChannelOptions extends EditNewsChannelOptions {
    rateLimitPerUser?: number | null;
}
export interface EditStageChannelOptions extends EditGuildChannelOptions {
    bitrate?: number | null;
    rtcRegion?: Snowflake | null;
}
export interface EditVoiceChannelOptions extends EditStageChannelOptions {
    nsfw?: boolean | null;
    userLimit?: number | null;
    parentId?: Snowflake | null;
    videoQualityMode?: VideoQualityModes | null;
}
/**
 * Represents the option object to create a thread channel from a message
 * @link https://discord.com/developers/docs/resources/channel#start-thread-from-message
 */
export interface ThreadCreateOptions {
    name: string;
    autoArchiveDuration?: 60 | 1440 | 4320 | 10080;
    rateLimitPerUser?: number;
    messageId: Snowflake;
}
/**
 * @link https://discord.com/developers/docs/resources/channel#list-public-archived-threads-response-body
 */
export interface ReturnThreadsArchive {
    threads: Record<Snowflake, ThreadChannel>;
    members: Record<Snowflake, ThreadMember>;
    hasMore: boolean;
}
export declare class GuildChannel extends BaseChannel implements Model {
    constructor(session: Session, data: DiscordChannel, guildId: Snowflake);
    type: Exclude<ChannelTypes, ChannelTypes.DM | ChannelTypes.GroupDm>;
    guildId: Snowflake;
    topic?: string;
    position?: number;
    parentId?: Snowflake;
    permissionOverwrites: PermissionsOverwrites[];
    fetchInvites(): Promise<Invite[]>;
    edit(options: EditNewsChannelOptions): Promise<NewsChannel>;
    edit(options: EditStageChannelOptions): Promise<StageChannel>;
    edit(options: EditVoiceChannelOptions): Promise<VoiceChannel>;
    getArchivedThreads(options: Routes.ListArchivedThreads & {
        type: 'public' | 'private' | 'privateJoinedThreads';
    }): Promise<ReturnThreadsArchive>;
    createThread(options: ThreadCreateOptions): Promise<ThreadChannel>;
}
/** BaseVoiceChannel */
/**
 * @link https://discord.com/developers/docs/topics/gateway#update-voice-state
 */
export interface UpdateVoiceState {
    guildId: string;
    channelId?: string;
    selfMute: boolean;
    selfDeaf: boolean;
}
export declare abstract class BaseVoiceChannel extends GuildChannel {
    constructor(session: Session, data: DiscordChannel, guildId: Snowflake);
    type: ChannelTypes.GuildVoice | ChannelTypes.GuildStageVoice;
    bitRate?: number;
    userLimit: number;
    rtcRegion?: Snowflake;
    videoQuality?: VideoQualityModes;
    nsfw: boolean;
    /**
     * This function was gathered from Discordeno it may not work
     */
    connect(options?: UpdateVoiceState): Promise<void>;
}
/** DMChannel */
export declare class DMChannel extends BaseChannel implements Model {
    constructor(session: Session, data: DiscordChannel);
    type: ChannelTypes.DM | ChannelTypes.GroupDm;
    user: User;
    lastMessageId?: Snowflake;
    close(): Promise<DMChannel>;
}
export interface DMChannel extends Omit<TextChannel, 'type'>, Omit<BaseChannel, 'type'> {
}
/** VoiceChannel */
export declare class VoiceChannel extends BaseVoiceChannel {
    constructor(session: Session, data: DiscordChannel, guildId: Snowflake);
    type: ChannelTypes.GuildVoice;
}
export interface VoiceChannel extends TextChannel, BaseVoiceChannel {
}
/** NewsChannel */
export declare class NewsChannel extends GuildChannel {
    constructor(session: Session, data: DiscordChannel, guildId: Snowflake);
    type: ChannelTypes.GuildNews;
    defaultAutoArchiveDuration?: number;
    crosspostMessage(messageId: Snowflake): Promise<Message>;
    get publishMessage(): (messageId: string) => Promise<Message>;
}
export interface NewsChannel extends TextChannel, GuildChannel {
}
/** StageChannel */
export declare class StageChannel extends BaseVoiceChannel {
    constructor(session: Session, data: DiscordChannel, guildId: Snowflake);
    type: ChannelTypes.GuildStageVoice;
    topic?: string;
}
/** ThreadChannel */
export declare class ThreadChannel extends GuildChannel implements Model {
    constructor(session: Session, data: DiscordChannel, guildId: Snowflake);
    type: ChannelTypes.GuildNewsThread | ChannelTypes.GuildPrivateThread | ChannelTypes.GuildPublicThread;
    archived?: boolean;
    archiveTimestamp?: string;
    autoArchiveDuration?: number;
    locked?: boolean;
    messageCount?: number;
    memberCount?: number;
    member?: ThreadMember;
    ownerId?: Snowflake;
    joinThread(): Promise<void>;
    addToThread(guildMemberId: Snowflake): Promise<void>;
    leaveToThread(guildMemberId: Snowflake): Promise<void>;
    removeMember(memberId?: Snowflake): Promise<void>;
    fetchMember(memberId?: Snowflake): Promise<ThreadMember>;
    fetchMembers(): Promise<ThreadMember[]>;
}
export interface ThreadChannel extends Omit<GuildChannel, 'type'>, Omit<TextChannel, 'type'> {
}
export declare class GuildTextChannel extends GuildChannel {
    constructor(session: Session, data: DiscordChannel, guildId: Snowflake);
    type: ChannelTypes.GuildText;
}
export interface GuildTextChannel extends GuildChannel, TextChannel {
}
/** ChannelFactory */
export declare type Channel = GuildTextChannel | TextChannel | VoiceChannel | DMChannel | NewsChannel | ThreadChannel | StageChannel | CategoryChannel;
export declare type ChannelInGuild = GuildTextChannel | VoiceChannel | StageChannel | NewsChannel | ThreadChannel;
export declare type ChannelWithMessages = GuildTextChannel | VoiceChannel | DMChannel | NewsChannel | ThreadChannel;
export declare type ChannelWithMessagesInGuild = Exclude<ChannelWithMessages, DMChannel>;
export declare type PartialChannel = {
    id: string;
    name: string;
    position: number;
};
export declare class ChannelFactory {
    static fromGuildChannel(session: Session, channel: DiscordChannel): ChannelInGuild;
    static from(session: Session, channel: DiscordChannel): Channel;
    static permissionOverwrites(overwrites: DiscordOverwrite[]): PermissionsOverwrites[];
}

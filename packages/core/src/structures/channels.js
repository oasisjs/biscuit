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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelFactory = exports.GuildTextChannel = exports.ThreadChannel = exports.StageChannel = exports.NewsChannel = exports.VoiceChannel = exports.DMChannel = exports.BaseVoiceChannel = exports.GuildChannel = exports.TextChannel = exports.textBasedChannels = exports.CategoryChannel = exports.BaseChannel = void 0;
const api_types_1 = require("@biscuit/api-types");
/** Functions and others */
const discordeno_1 = require("@biscuit/discordeno");
const urlToBase64_1 = require("../util/urlToBase64");
/** Classes and routes */
const Routes = __importStar(require("../Routes"));
const Message_1 = __importDefault(require("./Message"));
const Invite_1 = __importDefault(require("./Invite"));
const Webhook_1 = __importDefault(require("./Webhook"));
const User_1 = __importDefault(require("./User"));
const ThreadMember_1 = __importDefault(require("./ThreadMember"));
const Permissions_1 = __importDefault(require("./Permissions"));
/**
 * Abstract class that represents the base for creating a new channel.
 */
class BaseChannel {
    constructor(session, data) {
        this.id = data.id;
        this.session = session;
        this.name = data.name;
        this.type = data.type;
    }
    /** id's refers to the identification of the channel */
    id;
    /** The session that instantiated the channel */
    session;
    /** Channel name defined by the entity */
    name;
    /** Refers to the possible channel type implemented (Guild, DM, Voice, News, etc...) */
    type;
    /** If the channel is a TextChannel */
    isText() {
        return exports.textBasedChannels.includes(this.type);
    }
    /** If the channel is a VoiceChannel */
    isVoice() {
        return this.type === api_types_1.ChannelTypes.GuildVoice;
    }
    /** If the channel is a DMChannel */
    isDM() {
        return this.type === api_types_1.ChannelTypes.DM;
    }
    /** If the channel is a NewChannel */
    isNews() {
        return this.type === api_types_1.ChannelTypes.GuildNews;
    }
    /** If the channel is a ThreadChannel */
    isThread() {
        return (this.type === api_types_1.ChannelTypes.GuildPublicThread ||
            this.type === api_types_1.ChannelTypes.GuildPrivateThread);
    }
    /** If the channel is a StageChannel */
    isStage() {
        return this.type === api_types_1.ChannelTypes.GuildStageVoice;
    }
    toString() {
        return `<#${this.id}>`;
    }
}
exports.BaseChannel = BaseChannel;
/**
 * Represents a category channel.
 */
class CategoryChannel extends BaseChannel {
    constructor(session, data) {
        super(session, data);
        this.id = data.id;
        this.name = data.name ? data.name : '';
        this.nsfw = data.nsfw ? data.nsfw : false;
        this.guildId = data.guild_id ? data.guild_id : undefined;
        this.type = api_types_1.ChannelTypes.GuildCategory;
        this.position = data.position ? data.position : undefined;
        this.parentId = data.parent_id ? data.parent_id : undefined;
        this.permissionOverwrites = data.permission_overwrites
            ? ChannelFactory.permissionOverwrites(data.permission_overwrites)
            : [];
    }
    id;
    parentId;
    name;
    permissionOverwrites;
    nsfw;
    guildId;
    position;
}
exports.CategoryChannel = CategoryChannel;
/** Available text-channel-types list */
exports.textBasedChannels = [
    api_types_1.ChannelTypes.DM,
    api_types_1.ChannelTypes.GroupDm,
    api_types_1.ChannelTypes.GuildPrivateThread,
    api_types_1.ChannelTypes.GuildPublicThread,
    api_types_1.ChannelTypes.GuildNews,
    api_types_1.ChannelTypes.GuildVoice,
    api_types_1.ChannelTypes.GuildText,
];
/**
 * Represents a text channel.
 */
class TextChannel {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
        this.rateLimitPerUser = data.rate_limit_per_user ?? 0;
        this.nsfw = !!data.nsfw ?? false;
        if (data.last_message_id) {
            this.lastMessageId = data.last_message_id;
        }
        if (data.last_pin_timestamp) {
            this.lastPinTimestamp = data.last_pin_timestamp;
        }
    }
    /** The session that instantiated the channel */
    session;
    /** id's refers to the identification of the channel */
    id;
    /** Current channel name */
    name;
    /** The type of the channel */
    type;
    /** The id of the last message sent in this channel (or thread for GUILD_FORUM channels) (may not point to an existing or valid message or thread) */
    lastMessageId;
    /** When the last pinned message was pinned. This may be undefined in events such as GUILD_CREATE when a message is not pinned. */
    lastPinTimestamp;
    /** Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected */
    rateLimitPerUser;
    /** If the channel is NSFW (Not-Safe-For-Work content) */
    nsfw;
    /**
     * Mixin
     */
    // deno-lint-ignore ban-types
    static applyTo(klass, ignore = []) {
        const methods = [
            'fetchPins',
            'createInvite',
            'fetchMessages',
            'sendTyping',
            'pinMessage',
            'unpinMessage',
            'addReaction',
            'removeReaction',
            'nukeReactions',
            'fetchPins',
            'sendMessage',
            'editMessage',
            'createWebhook',
        ];
        for (const method of methods) {
            if (ignore.includes(method)) {
                continue;
            }
            klass.prototype[method] = TextChannel.prototype[method];
        }
    }
    /**
     * fetchPins makes an asynchronous request and gets the current channel pins.
     * @returns A promise that resolves with an array of Message objects.
     */
    async fetchPins() {
        const messages = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.CHANNEL_PINS(this.id));
        return messages[0]
            ? messages.map((x) => new Message_1.default(this.session, x))
            : [];
    }
    /**
     * createInvite makes an asynchronous request to create a new invitation.
     * @param options - The options to create the invitation
     * @returns The created invite
     */
    async createInvite(options) {
        const invite = await this.session.rest.runMethod(this.session.rest, 'POST', Routes.CHANNEL_INVITES(this.id), options
            ? {
                max_age: options.maxAge,
                max_uses: options.maxUses,
                temporary: options.temporary,
                unique: options.unique,
                target_type: options.targetType,
                target_user_id: options.targetUserId,
                target_application_id: options.targetApplicationId,
            }
            : {});
        return new Invite_1.default(this.session, invite);
    }
    /**
     * fetchMessages makes an asynchronous request and gets the channel messages
     * @param options - The options to get the messages
     * @returns The messages
     */
    async fetchMessages(options) {
        if (options?.limit > 100) {
            throw Error('Values must be between 0-100');
        }
        const messages = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.CHANNEL_MESSAGES(this.id, options));
        return messages[0]
            ? messages.map((x) => new Message_1.default(this.session, x))
            : [];
    }
    /** sendTyping sends a typing POST request */
    async sendTyping() {
        await this.session.rest.runMethod(this.session.rest, 'POST', Routes.CHANNEL_TYPING(this.id));
    }
    /**
     * pinMessage pins a channel message.
     * Same as Message.pin().
     * @param messageId - The id of the message to pin
     * @returns The promise that resolves when the request is complete
     */
    async pinMessage(messageId) {
        await Message_1.default.prototype.pin.call({
            id: messageId,
            channelId: this.id,
            session: this.session,
        });
    }
    /**
     * unpinMessage unpin a channel message.
     * Same as Message.unpin()
     * @param messageId - The id of the message to unpin
     * @returns The promise of the request
     */
    async unpinMessage(messageId) {
        await Message_1.default.prototype.unpin.call({
            id: messageId,
            channelId: this.id,
            session: this.session,
        });
    }
    /**
     * addReaction adds a reaction to the message.
     * Same as Message.addReaction().
     * @param messageId - The message to add the reaction to
     * @param reaction - The reaction to add
     * @returns The promise of the request
     */
    async addReaction(messageId, reaction) {
        await Message_1.default.prototype.addReaction.call({ channelId: this.id, id: messageId, session: this.session }, reaction);
    }
    /**
     * removeReaction removes a reaction from the message.
     * Same as Message.removeReaction().
     * @param messageId - The id of the message to remove the reaction from
     * @param reaction - The reaction to remove
     * @param options - The user to remove the reaction from
     */
    async removeReaction(messageId, reaction, options) {
        await Message_1.default.prototype.removeReaction.call({ channelId: this.id, id: messageId, session: this.session }, reaction, options);
    }
    /**
     * removeReactionEmoji removes an emoji reaction from the messageId provided.
     * Same as Message.removeReactionEmoji().
     * @param messageId - The message id to remove the reaction from.
     * @param emoji - The emoji to remove.
     * @param userId - The user id to remove the reaction from.
     */
    async removeReactionEmoji(messageId, reaction) {
        await Message_1.default.prototype.removeReactionEmoji.call({ channelId: this.id, id: messageId, session: this.session }, reaction);
    }
    /** nukeReactions nukes every reaction on the message.
     * Same as Message.nukeReactions().
     * @param messageId The message id to nuke reactions from.
     * @returns A promise that resolves when the reactions are nuked.
     */
    async nukeReactions(messageId) {
        await Message_1.default.prototype.nukeReactions.call({
            channelId: this.id,
            id: messageId,
        });
    }
    /**
     * fetchReactions gets the users who reacted with this emoji on the message.
     * Same as Message.fetchReactions().
     * @param messageId - The message id to get the reactions from.
     * @param reaction - The emoji to get the reactions from.
     * @param options - The options to get the reactions with.
     * @returns The users who reacted with this emoji on the message.
     */
    async fetchReactions(messageId, reaction, options) {
        const users = await Message_1.default.prototype.fetchReactions.call({ channelId: this.id, id: messageId, session: this.session }, reaction, options);
        return users;
    }
    /**
     * sendMessage sends a message to the channel.
     * Same as Message.reply().
     * @param options - Options for a new message.
     * @returns The sent message.
     */
    sendMessage(options) {
        return Message_1.default.prototype.reply.call({ channelId: this.id, session: this.session }, options);
    }
    /**
     * editMessage edits a message.
     * Same as Message.edit().
     * @param messageId - Message ID.
     * @param options - Options for edit a message.
     * @returns The edited message.
     */
    editMessage(messageId, options) {
        return Message_1.default.prototype.edit.call({ channelId: this.id, id: messageId, session: this.session }, options);
    }
    /**
     * createWebhook creates a webhook.
     * @param options - Options for a new webhook.
     * @returns The created webhook.
     */
    async createWebhook(options) {
        const webhook = await this.session.rest.runMethod(this.session.rest, 'POST', Routes.CHANNEL_WEBHOOKS(this.id), {
            name: options.name,
            avatar: options.avatar
                ? (0, urlToBase64_1.urlToBase64)(options.avatar)
                : undefined,
            reason: options.reason,
        });
        return new Webhook_1.default(this.session, webhook);
    }
}
exports.TextChannel = TextChannel;
class GuildChannel extends BaseChannel {
    constructor(session, data, guildId) {
        super(session, data);
        this.type = data.type;
        this.guildId = guildId;
        this.position = data.position;
        data.topic ? (this.topic = data.topic) : null;
        data.parent_id ? (this.parentId = data.parent_id) : undefined;
        this.permissionOverwrites = data.permission_overwrites
            ? ChannelFactory.permissionOverwrites(data.permission_overwrites)
            : [];
    }
    type;
    guildId;
    topic;
    position;
    parentId;
    permissionOverwrites;
    async fetchInvites() {
        const invites = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.CHANNEL_INVITES(this.id));
        return invites.map((invite) => new Invite_1.default(this.session, invite));
    }
    async edit(options) {
        const channel = await this.session.rest.runMethod(this.session.rest, 'PATCH', Routes.CHANNEL(this.id), {
            name: options.name,
            type: 'type' in options ? options.type : undefined,
            position: options.position,
            topic: 'topic' in options ? options.topic : undefined,
            nsfw: 'nfsw' in options ? options.nfsw : undefined,
            rate_limit_per_user: 'rateLimitPerUser' in options
                ? options.rateLimitPerUser
                : undefined,
            bitrate: 'bitrate' in options ? options.bitrate : undefined,
            user_limit: 'userLimit' in options ? options.userLimit : undefined,
            permissions_overwrites: options.permissionOverwrites,
            parent_id: 'parentId' in options ? options.parentId : undefined,
            rtc_region: 'rtcRegion' in options ? options.rtcRegion : undefined,
            video_quality_mode: 'videoQualityMode' in options
                ? options.videoQualityMode
                : undefined,
            default_auto_archive_duration: 'defaultAutoArchiveDuration' in options
                ? options.defaultAutoArchiveDuration
                : undefined,
        });
        return ChannelFactory.from(this.session, channel);
    }
    async getArchivedThreads(options) {
        let func;
        switch (options.type) {
            case 'public':
                func = Routes.THREAD_ARCHIVED_PUBLIC;
                break;
            case 'private':
                func = Routes.THREAD_START_PRIVATE;
                break;
            case 'privateJoinedThreads':
                func = Routes.THREAD_ARCHIVED_PRIVATE_JOINED;
                break;
        }
        const { threads, members, has_more } = await this.session.rest.runMethod(this.session.rest, 'GET', func(this.id, options));
        return {
            threads: Object.fromEntries(threads.map((thread) => [
                thread.id,
                new ThreadChannel(this.session, thread, this.id),
            ])),
            members: Object.fromEntries(members.map((threadMember) => [
                threadMember.id,
                new ThreadMember_1.default(this.session, threadMember),
            ])),
            hasMore: has_more,
        };
    }
    async createThread(options) {
        const thread = await this.session.rest.runMethod(this.session.rest, 'POST', 'messageId' in options
            ? Routes.THREAD_START_PUBLIC(this.id, options.messageId)
            : Routes.THREAD_START_PRIVATE(this.id), {
            name: options.name,
            auto_archive_duration: options.autoArchiveDuration,
        });
        return new ThreadChannel(this.session, thread, thread.guild_id ?? this.guildId);
    }
}
exports.GuildChannel = GuildChannel;
class BaseVoiceChannel extends GuildChannel {
    constructor(session, data, guildId) {
        super(session, data, guildId);
        this.bitRate = data.bitrate;
        this.userLimit = data.user_limit ?? 0;
        this.videoQuality = data.video_quality_mode;
        this.nsfw = !!data.nsfw;
        this.type = data.type;
        if (data.rtc_region) {
            this.rtcRegion = data.rtc_region;
        }
    }
    type;
    bitRate;
    userLimit;
    rtcRegion;
    videoQuality;
    nsfw;
    /**
     * This function was gathered from Discordeno it may not work
     */
    async connect(options) {
        const shardId = (0, discordeno_1.calculateShardId)(this.session.gateway, BigInt(super.guildId));
        const shard = this.session.gateway.manager.shards.get(shardId);
        if (!shard) {
            throw new Error(`Shard (id: ${shardId} not found`);
        }
        await shard.send({
            op: api_types_1.GatewayOpcodes.VoiceStateUpdate,
            d: {
                guild_id: super.guildId,
                channel_id: super.id,
                self_mute: Boolean(options?.selfMute),
                self_deaf: options?.selfDeaf ?? true,
            },
        });
    }
}
exports.BaseVoiceChannel = BaseVoiceChannel;
/** DMChannel */
class DMChannel extends BaseChannel {
    constructor(session, data) {
        super(session, data);
        this.user = new User_1.default(this.session, data.recipents.find((r) => r.id !== this.session.botId));
        this.type = data.type;
        if (data.last_message_id) {
            this.lastMessageId = data.last_message_id;
        }
    }
    type;
    user;
    lastMessageId;
    async close() {
        const channel = await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.CHANNEL(this.id));
        return new DMChannel(this.session, channel);
    }
}
exports.DMChannel = DMChannel;
TextChannel.applyTo(DMChannel);
/** VoiceChannel */
class VoiceChannel extends BaseVoiceChannel {
    constructor(session, data, guildId) {
        super(session, data, guildId);
        this.type = data.type;
    }
    type;
}
exports.VoiceChannel = VoiceChannel;
TextChannel.applyTo(VoiceChannel);
/** NewsChannel */
class NewsChannel extends GuildChannel {
    constructor(session, data, guildId) {
        super(session, data, guildId);
        this.type = data.type;
        this.defaultAutoArchiveDuration = data.default_auto_archive_duration;
    }
    type;
    defaultAutoArchiveDuration;
    crosspostMessage(messageId) {
        return Message_1.default.prototype.crosspost.call({
            id: messageId,
            channelId: this.id,
            session: this.session,
        });
    }
    get publishMessage() {
        return this.crosspostMessage;
    }
}
exports.NewsChannel = NewsChannel;
TextChannel.applyTo(NewsChannel);
/** StageChannel */
class StageChannel extends BaseVoiceChannel {
    constructor(session, data, guildId) {
        super(session, data, guildId);
        this.type = data.type;
        this.topic = data.topic ? data.topic : undefined;
    }
    type;
    topic;
}
exports.StageChannel = StageChannel;
/** ThreadChannel */
class ThreadChannel extends GuildChannel {
    constructor(session, data, guildId) {
        super(session, data, guildId);
        this.type = data.type;
        this.archived = !!data.thread_metadata?.archived;
        this.archiveTimestamp = data.thread_metadata?.archive_timestamp;
        this.autoArchiveDuration = data.thread_metadata?.auto_archive_duration;
        this.locked = !!data.thread_metadata?.locked;
        this.messageCount = data.message_count;
        this.memberCount = data.member_count;
        this.ownerId = data.owner_id;
        if (data.member) {
            this.member = new ThreadMember_1.default(session, data.member);
        }
    }
    type;
    archived;
    archiveTimestamp;
    autoArchiveDuration;
    locked;
    messageCount;
    memberCount;
    member;
    ownerId;
    async joinThread() {
        await this.session.rest.runMethod(this.session.rest, 'PUT', Routes.THREAD_ME(this.id));
    }
    async addToThread(guildMemberId) {
        await this.session.rest.runMethod(this.session.rest, 'PUT', Routes.THREAD_USER(this.id, guildMemberId));
    }
    async leaveToThread(guildMemberId) {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.THREAD_USER(this.id, guildMemberId));
    }
    removeMember(memberId = this.session.botId) {
        return ThreadMember_1.default.prototype.quitThread.call({ id: this.id, session: this.session }, memberId);
    }
    fetchMember(memberId = this.session.botId) {
        return ThreadMember_1.default.prototype.fetchMember.call({ id: this.id, session: this.session }, memberId);
    }
    async fetchMembers() {
        const members = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.THREAD_MEMBERS(this.id));
        return members.map((threadMember) => new ThreadMember_1.default(this.session, threadMember));
    }
}
exports.ThreadChannel = ThreadChannel;
TextChannel.applyTo(ThreadChannel);
class GuildTextChannel extends GuildChannel {
    constructor(session, data, guildId) {
        super(session, data, guildId);
        this.type = data.type;
    }
    type;
}
exports.GuildTextChannel = GuildTextChannel;
TextChannel.applyTo(GuildTextChannel);
class ChannelFactory {
    static fromGuildChannel(session, channel) {
        switch (channel.type) {
            case api_types_1.ChannelTypes.GuildPublicThread:
            case api_types_1.ChannelTypes.GuildPrivateThread:
                return new ThreadChannel(session, channel, channel.guild_id);
            case api_types_1.ChannelTypes.GuildText:
                return new GuildTextChannel(session, channel, channel.guild_id);
            case api_types_1.ChannelTypes.GuildNews:
                return new NewsChannel(session, channel, channel.guild_id);
            case api_types_1.ChannelTypes.GuildVoice:
                return new VoiceChannel(session, channel, channel.guild_id);
            case api_types_1.ChannelTypes.GuildStageVoice:
                return new StageChannel(session, channel, channel.guild_id);
            default:
                throw new Error('Channel was not implemented');
        }
    }
    static from(session, channel) {
        switch (channel.type) {
            case api_types_1.ChannelTypes.GuildPublicThread:
            case api_types_1.ChannelTypes.GuildPrivateThread:
                return new ThreadChannel(session, channel, channel.guild_id);
            case api_types_1.ChannelTypes.GuildText:
                return new GuildTextChannel(session, channel, channel.guild_id);
            case api_types_1.ChannelTypes.GuildNews:
                return new NewsChannel(session, channel, channel.guild_id);
            case api_types_1.ChannelTypes.DM:
                return new DMChannel(session, channel);
            case api_types_1.ChannelTypes.GuildVoice:
                return new VoiceChannel(session, channel, channel.guild_id);
            case api_types_1.ChannelTypes.GuildStageVoice:
                return new StageChannel(session, channel, channel.guild_id);
            case api_types_1.ChannelTypes.GuildCategory:
                return new CategoryChannel(session, channel);
            default:
                if (exports.textBasedChannels.includes(channel.type)) {
                    return new TextChannel(session, channel);
                }
                throw new Error('Channel was not implemented');
        }
    }
    static permissionOverwrites(overwrites) {
        return overwrites.map((v) => {
            return {
                id: v.id,
                type: v.type,
                allow: new Permissions_1.default(parseInt(v.allow)),
                deny: new Permissions_1.default(parseInt(v.deny)),
            };
        });
    }
}
exports.ChannelFactory = ChannelFactory;

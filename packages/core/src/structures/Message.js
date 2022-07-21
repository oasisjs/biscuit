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
exports.Message = void 0;
const Util_1 = require("../Util");
const Snowflake_1 = require("../Snowflake");
const channels_1 = require("./channels");
const Util_2 = __importDefault(require("../Util"));
const User_1 = __importDefault(require("./User"));
const Member_1 = __importDefault(require("./Member"));
const Attachment_1 = __importDefault(require("./Attachment"));
const ComponentFactory_1 = __importDefault(require("./components/ComponentFactory"));
const MessageReaction_1 = __importDefault(require("./MessageReaction"));
const Application_1 = __importStar(require("./Application"));
const InteractionFactory_1 = __importDefault(require("./interactions/InteractionFactory"));
const Routes = __importStar(require("../Routes"));
/**
 * @link https://discord.com/developers/docs/resources/channel#message-object
 * Represents a message
 */
class Message {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.type = data.type;
        this.channelId = data.channel_id;
        this.guildId = data.guild_id;
        this.applicationId = data.application_id;
        this.mentions = {
            users: data.mentions?.map((user) => new User_1.default(session, user)) ?? [],
            roleIds: data.mention_roles ?? [],
            channels: data.mention_channels?.map((channel) => channels_1.ChannelFactory.from(session, channel)) ?? [],
        };
        if (!data.webhook_id) {
            this.author = new User_1.default(session, data.author);
        }
        this.flags = data.flags;
        this.pinned = !!data.pinned;
        this.tts = !!data.tts;
        this.content = data.content;
        this.nonce = data.nonce;
        this.mentionEveryone = data.mention_everyone;
        this.timestamp = Date.parse(data.timestamp);
        this.editedTimestamp = data.edited_timestamp
            ? Date.parse(data.edited_timestamp)
            : undefined;
        this.reactions =
            data.reactions?.map((react) => new MessageReaction_1.default(session, react)) ?? [];
        this.attachments = data.attachments.map((attachment) => new Attachment_1.default(session, attachment));
        this.embeds = data.embeds;
        if (data.interaction) {
            this.interaction = InteractionFactory_1.default.fromMessage(session, data.interaction, data.guild_id);
        }
        if (data.thread && data.guild_id) {
            this.thread = new channels_1.ThreadChannel(session, data.thread, data.guild_id);
        }
        // webhook handling
        if (data.webhook_id && data.author.discriminator === '0000') {
            this.webhook = {
                id: data.webhook_id,
                username: data.author.username,
                discriminator: data.author.discriminator,
                avatar: data.author.avatar
                    ? Util_2.default.iconHashToBigInt(data.author.avatar)
                    : undefined,
            };
        }
        // user is always null on MessageCreate and its replaced with author
        if (data.guild_id && data.member && !this.isWebhookMessage()) {
            this.member = new Member_1.default(session, { ...data.member, user: data.author }, data.guild_id);
        }
        this.components =
            data.components?.map((component) => ComponentFactory_1.default.from(session, component)) ?? [];
        if (data.activity) {
            this.activity = {
                partyId: data.activity.party_id,
                type: data.activity.type,
            };
        }
        if (data.sticker_items) {
            this.stickers = data.sticker_items.map((si) => {
                return {
                    id: si.id,
                    name: si.name,
                    formatType: si.format_type,
                };
            });
        }
        if (data.application) {
            const application = {
                id: data.application.id,
                icon: data.application.icon ? data.application.icon : undefined,
                name: data.application.name,
                guildId: data.application.guild_id,
                flags: data.application.flags,
                botPublic: data.application.bot_public,
                owner: data.application.owner
                    ? new User_1.default(session, data.application.owner)
                    : undefined,
                botRequireCodeGrant: data.application.bot_require_code_grant,
                coverImage: data.application.cover_image,
                customInstallURL: data.application.custom_install_url,
                description: data.application.description,
                installParams: data.application.install_params,
                tags: data.application.tags,
                verifyKey: data.application.verify_key,
                team: data.application.team
                    ? (0, Application_1.NewTeam)(session, data.application.team)
                    : undefined,
                primarySkuId: data.application.primary_sku_id,
                privacyPolicyURL: data.application.privacy_policy_url,
                rpcOrigins: data.application.rpc_origins,
                slug: data.application.slug,
            };
            Object.setPrototypeOf(application, Application_1.default.prototype);
            this.application = application;
        }
    }
    /** Reference to the client that instantiated this Message */
    session;
    /** id of the message */
    id;
    /** type of message */
    type;
    /** id of the channel the message was sent in */
    channelId;
    /** id of the guild the message was sent in, this should exist on MESSAGE_CREATE and MESSAGE_UPDATE events */
    guildId;
    /** if the message is an Interaction or application-owned webhook, this is the id of the application */
    applicationId;
    /** mentions if any */
    mentions;
    /** sent if the message is a response to an Interaction */
    interaction;
    /** the author of this message, this field is **not** sent on webhook messages */
    author;
    /** message flags combined as a bitfield */
    flags;
    /** whether this message is pinned */
    pinned;
    /** whether this was a TTS message */
    tts;
    /** contents of the message */
    content;
    /** used for validating a message was sent */
    nonce;
    /** whether this message mentions everyone */
    mentionEveryone;
    /** when this message was sent */
    timestamp;
    /** when this message was edited */
    editedTimestamp;
    /**
     * sent if the message contains stickers
     * **this contains sticker items not stickers**
     */
    stickers;
    /** reactions to the message */
    reactions;
    /** any attached files */
    attachments;
    /** any embedded content */
    embeds;
    /** member properties for this message's author */
    member;
    /** the thread that was started from this message, includes {@link ThreadMember} */
    thread;
    /** sent if the message contains components like buttons, action rows, or other interactive components */
    components;
    /** if the message is generated by a webhook, this is the webhook's author data */
    webhook;
    /** sent with Rich Presence-related chat embeds */
    application;
    /** sent with Rich Presence-related chat embeds */
    activity;
    /** gets the timestamp of this message, this does not requires the timestamp field */
    get createdTimestamp() {
        return Snowflake_1.Snowflake.snowflakeToTimestamp(this.id);
    }
    /** gets the timestamp of this message as a Date */
    get createdAt() {
        return new Date(this.createdTimestamp);
    }
    /** gets the timestamp of this message (sent by the API) */
    get sentAt() {
        return new Date(this.timestamp);
    }
    /** gets the edited timestamp as a Date */
    get editedAt() {
        return this.editedTimestamp
            ? new Date(this.editedTimestamp)
            : undefined;
    }
    /** whether this message was edited */
    get edited() {
        return this.editedTimestamp;
    }
    /** gets the url of the message that points to the message */
    get url() {
        return `https://discord.com/channels/${this.guildId ?? '@me'}/${this.channelId}/${this.id}`;
    }
    /**
     * Compatibility with Discordeno
     * same as Message.author.bot
     */
    get isBot() {
        return this.author.bot;
    }
    /**
     * Pins this message
     */
    async pin() {
        await this.session.rest.runMethod(this.session.rest, 'PUT', Routes.CHANNEL_PIN(this.channelId, this.id));
    }
    /**
     * Unpins this message
     */
    async unpin() {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.CHANNEL_PIN(this.channelId, this.id));
    }
    /** Edits the current message */
    async edit(options) {
        const message = await this.session.rest.runMethod(this.session.rest, 'POST', Routes.CHANNEL_MESSAGE(this.id, this.channelId), {
            content: options.content,
            allowed_mentions: {
                parse: options.allowedMentions?.parse,
                roles: options.allowedMentions?.roles,
                users: options.allowedMentions?.users,
                replied_user: options.allowedMentions?.repliedUser,
            },
            flags: options.flags,
            embeds: options.embeds,
        });
        return message;
    }
    async suppressEmbeds(suppress = true) {
        if (this.flags === Util_1.MessageFlags.SupressEmbeds && suppress === false) {
            return;
        }
        const message = await this.edit({ flags: Util_1.MessageFlags.SupressEmbeds });
        return message;
    }
    /** deletes this message */
    async delete(reason) {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.CHANNEL_MESSAGE(this.channelId, this.id), { reason });
        return this;
    }
    /** Replies directly in the channel where the message was sent */
    async reply(options) {
        const message = await this.session.rest.runMethod(this.session.rest, 'POST', Routes.CHANNEL_MESSAGES(this.channelId), {
            content: options.content,
            file: options.files,
            allowed_mentions: {
                parse: options.allowedMentions?.parse,
                roles: options.allowedMentions?.roles,
                users: options.allowedMentions?.users,
                replied_user: options.allowedMentions?.repliedUser,
            },
            message_reference: options.messageReference
                ? {
                    message_id: options.messageReference.messageId,
                    channel_id: options.messageReference.channelId,
                    guild_id: options.messageReference.guildId,
                    fail_if_not_exists: options.messageReference.failIfNotExists ??
                        true,
                }
                : undefined,
            embeds: options.embeds,
            tts: options.tts,
            components: options.components,
        });
        return new Message(this.session, message);
    }
    /** alias for Message.addReaction */
    get react() {
        return this.addReaction;
    }
    /** adds a Reaction */
    async addReaction(reaction) {
        const r = typeof reaction === 'string'
            ? reaction
            : `${reaction.name}:${reaction.id}`;
        await this.session.rest.runMethod(this.session.rest, 'PUT', Routes.CHANNEL_MESSAGE_REACTION_ME(this.channelId, this.id, r), {});
    }
    /** removes a reaction from someone */
    async removeReaction(reaction, options) {
        const r = typeof reaction === 'string'
            ? reaction
            : `${reaction.name}:${reaction.id}`;
        await this.session.rest.runMethod(this.session.rest, 'DELETE', options?.userId
            ? Routes.CHANNEL_MESSAGE_REACTION_USER(this.channelId, this.id, r, options.userId)
            : Routes.CHANNEL_MESSAGE_REACTION_ME(this.channelId, this.id, r));
    }
    /**
     * Get users who reacted with this emoji
     * not recommended since the cache handles reactions already
     */
    async fetchReactions(reaction, options) {
        const r = typeof reaction === 'string'
            ? reaction
            : `${reaction.name}:${reaction.id}`;
        const users = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.CHANNEL_MESSAGE_REACTION(this.channelId, this.id, encodeURIComponent(r), options));
        return users.map((user) => new User_1.default(this.session, user));
    }
    /**
     * same as Message.removeReaction but removes using a unicode emoji
     */
    async removeReactionEmoji(reaction) {
        const r = typeof reaction === 'string'
            ? reaction
            : `${reaction.name}:${reaction.id}`;
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.CHANNEL_MESSAGE_REACTION(this.channelId, this.id, r));
    }
    /** nukes every reaction on the message */
    async nukeReactions() {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.CHANNEL_MESSAGE_REACTIONS(this.channelId, this.id));
    }
    /** publishes/crossposts a message to all followers */
    async crosspost() {
        const message = await this.session.rest.runMethod(this.session.rest, 'POST', Routes.CHANNEL_MESSAGE_CROSSPOST(this.channelId, this.id));
        return new Message(this.session, message);
    }
    /** fetches this message, meant to be used with Function.call since its redundant */
    async fetch() {
        const message = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.CHANNEL_MESSAGE(this.channelId, this.id));
        if (!message?.id) {
            return;
        }
        return new Message(this.session, message);
    }
    /** alias of Message.crosspost */
    get publish() {
        return this.crosspost;
    }
    /** wheter the message comes from a guild **/
    inGuild() {
        return !!this.guildId;
    }
    /** wheter the messages comes from a Webhook */
    isWebhookMessage() {
        return !!this.webhook;
    }
}
exports.Message = Message;
exports.default = Message;

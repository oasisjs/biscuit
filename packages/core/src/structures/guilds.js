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
exports.Guild = exports.GuildPreview = exports.InviteGuild = exports.AnonymousGuild = exports.BaseGuild = void 0;
const api_types_1 = require("@biscuit/api-types");
const Snowflake_1 = require("../Snowflake");
const Util_1 = __importDefault(require("../Util"));
const Routes = __importStar(require("../Routes"));
const WelcomeScreen_1 = __importDefault(require("./WelcomeScreen"));
const channels_1 = require("./channels");
const ThreadMember_1 = __importDefault(require("./ThreadMember"));
const Member_1 = __importDefault(require("./Member"));
const Role_1 = __importDefault(require("./Role"));
const GuildEmoji_1 = __importDefault(require("./GuildEmoji"));
const urlToBase64_1 = require("../util/urlToBase64");
const Invite_1 = __importDefault(require("./Invite"));
const User_1 = __importDefault(require("./User"));
const Widget_1 = require("./Widget");
const Sticker_1 = __importDefault(require("./Sticker"));
/** BaseGuild */
/**
 * Class for {@link Guild} and {@link AnonymousGuild}
 */
class BaseGuild {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.name = data.name;
        this.iconHash = data.icon
            ? Util_1.default.iconHashToBigInt(data.icon)
            : undefined;
        this.features = data.features;
    }
    /** The session that instantiated the guild. */
    session;
    /** Guild id. */
    id;
    /** Guild name. */
    name;
    /**
     * Icon hash. Discord uses ids and hashes to render images in the client.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    iconHash;
    /**
     * Enabled guild features (animated banner, news, auto moderation, etc).
     * @see {@link GuildFeatures}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    features;
    /** createdTimestamp gets the current guild timestamp. */
    get createdTimestamp() {
        return Snowflake_1.Snowflake.snowflakeToTimestamp(this.id);
    }
    /** createdAt gets the creation Date object of the guild. */
    get createdAt() {
        return new Date(this.createdTimestamp);
    }
    /**
     * If the guild features includes partnered.
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    get partnered() {
        return this.features.includes(api_types_1.GuildFeatures.Partnered);
    }
    /**
     * If the guild is verified.
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    get verified() {
        return this.features.includes(api_types_1.GuildFeatures.Verified);
    }
    /**
     * iconURL gets the current guild icon.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    iconURL(options = { size: 128 }) {
        if (this.iconHash) {
            return Util_1.default.formatImageURL(Routes.GUILD_ICON(this.id, Util_1.default.iconBigintToHash(this.iconHash)), options.size, options.format);
        }
    }
    /** toString gets the guild name */
    toString() {
        return this.name;
    }
}
exports.BaseGuild = BaseGuild;
/** AnonymousGuild */
/**
 * Class for anonymous guilds.
 * @see {@link BaseGuild}
 * @link https://discord.com/developers/docs/resources/guild#guild-resource
 */
class AnonymousGuild extends BaseGuild {
    constructor(session, data) {
        super(session, data);
        this.splashHash = data.splash
            ? Util_1.default.iconHashToBigInt(data.splash)
            : undefined;
        this.bannerHash = data.banner
            ? Util_1.default.iconHashToBigInt(data.banner)
            : undefined;
        this.verificationLevel = data.verification_level;
        this.vanityUrlCode = data.vanity_url_code
            ? data.vanity_url_code
            : undefined;
        this.nsfwLevel = data.nsfw_level;
        this.description = data.description ? data.description : undefined;
        this.premiumSubscriptionCount = data.premium_subscription_count;
    }
    /**
     * The guild's splash hash.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    splashHash;
    /**
     * The guild's banner hash.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    bannerHash;
    /**
     * The guild's verification level.
     * @see {@link VerificationLevels}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-verification-level
     */
    verificationLevel;
    /** The guild's vanity url code. */
    vanityUrlCode;
    /**
     * The guild's nsfw level.
     * @see {@link GuildNsfwLevel}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
     */
    nsfwLevel;
    /** The guild's description. */
    description;
    /** The number of boosts this guild currently has. */
    premiumSubscriptionCount;
    /**
     * splashURL gets the current guild splash as a string.
     * @link https://discord.com/developers/docs/reference#image-formatting
     * @param options - Image options for the splash url.
     * @returns Splash url or void.
     */
    splashURL(options = { size: 128 }) {
        if (this.splashHash) {
            return Util_1.default.formatImageURL(Routes.GUILD_SPLASH(this.id, Util_1.default.iconBigintToHash(this.splashHash)), options.size, options.format);
        }
    }
    /**
     * bannerURL gets the current guild banner as a string.
     * @link https://discord.com/developers/docs/reference#image-formatting
     * @param options - Image options for the banner url.
     * @returns Banner url or void
     */
    bannerURL(options = { size: 128 }) {
        if (this.bannerHash) {
            return Util_1.default.formatImageURL(Routes.GUILD_BANNER(this.id, Util_1.default.iconBigintToHash(this.bannerHash)), options.size, options.format);
        }
    }
}
exports.AnonymousGuild = AnonymousGuild;
/** InviteGuild */
class InviteGuild extends AnonymousGuild {
    constructor(session, data) {
        super(session, data);
        if (data.welcome_screen) {
            this.welcomeScreen = new WelcomeScreen_1.default(session, data.welcome_screen);
        }
    }
    welcomeScreen;
}
exports.InviteGuild = InviteGuild;
/**
 * Represent Discord Guild Preview Object
 * @link https://discord.com/developers/docs/resources/guild#guild-preview-object
 */
class GuildPreview {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.name = data.name;
        this.description = data.description ?? undefined;
        this.iconHash = data.icon
            ? Util_1.default.iconHashToBigInt(data.icon)
            : undefined;
        this.splashHash = data.splash
            ? Util_1.default.iconHashToBigInt(data.splash)
            : undefined;
        this.discoverySplashHash = data.discovery_splash
            ? Util_1.default.iconHashToBigInt(data.discovery_splash)
            : undefined;
        this.emojis = data.emojis.map((x) => new GuildEmoji_1.default(this.session, x, this.id));
        this.features = data.features;
        this.approximateMemberCount = data.approximate_member_count;
        this.approximatePresenceCount = data.approximate_presence_count;
        this.stickers = data.stickers.map((x) => new Sticker_1.default(this.session, x));
    }
    session;
    /** guild id */
    id;
    /** guild name (2-100 characters) */
    name;
    iconHash;
    splashHash;
    discoverySplashHash;
    /** custom guild emojis */
    emojis;
    /** enabled guild features */
    features;
    /** approximate number of members in this guild */
    approximateMemberCount;
    /** approximate number of online members in this guild */
    approximatePresenceCount;
    /** the description for the guild */
    description;
    /** custom guild stickers */
    stickers;
}
exports.GuildPreview = GuildPreview;
/**
 * Represents a guild.
 * @see {@link BaseGuild}.
 * @link https://discord.com/developers/docs/resources/guild#guild-object
 */
class Guild extends BaseGuild {
    constructor(session, data) {
        super(session, data);
        this.splashHash = data.splash
            ? Util_1.default.iconHashToBigInt(data.splash)
            : undefined;
        this.discoverySplashHash = data.discovery_splash
            ? Util_1.default.iconHashToBigInt(data.discovery_splash)
            : undefined;
        this.ownerId = data.owner_id;
        this.widgetEnabled = !!data.widget_enabled;
        this.widgetChannelId = data.widget_channel_id
            ? data.widget_channel_id
            : undefined;
        this.vefificationLevel = data.verification_level;
        this.defaultMessageNotificationLevel =
            data.default_message_notifications;
        this.explicitContentFilterLevel = data.explicit_content_filter;
        this.premiumTier = data.premium_tier;
        this.members = new Map(data.members?.map((member) => [
            data.id,
            new Member_1.default(session, { ...member, user: member.user }, data.id),
        ]));
        this.roles = new Map(data.roles.map((role) => [
            data.id,
            new Role_1.default(session, role, data.id),
        ]));
        this.emojis = new Map(data.emojis.map((guildEmoji) => [
            guildEmoji.id,
            new GuildEmoji_1.default(session, guildEmoji, data.id),
        ]));
        this.channels = new Map(data.channels?.map((guildChannel) => [
            guildChannel.id,
            new channels_1.GuildChannel(session, guildChannel, data.id),
        ]));
    }
    /**
     * The guild's splash hash.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    splashHash;
    /**
     * Only present for guilds with the "DISCOVERABLE" feature
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    discoverySplashHash;
    /** ID of the guild owner. */
    ownerId;
    /** True if the server widget is enabled */
    widgetEnabled;
    /** The channel id that the widget will generate an invite to, or undefined if set to no invite. */
    widgetChannelId;
    /**
     * Verification level required for the guild.
     * @see {@link VerificationLevels}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-verification-level
     */
    vefificationLevel;
    /**
     * The default message notification level.
     * @see {@link DefaultMessageNotificationLevels}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
     */
    defaultMessageNotificationLevel;
    /**
     * The explicit content filter level.
     * @see {@link ExplicitContentFilterLevels}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
     */
    explicitContentFilterLevel;
    /**
     * Premium tier (Server Boost level).
     * @see {@link PremiumTiers}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
     */
    premiumTier;
    /**
     * A map with the guild's members.
     * @see {@link Member}
     * @link https://discord.com/developers/docs/resources/guild#guild-member-object
     */
    members;
    /**
     * A map with the guild's roles.
     * @see {@link Role}
     * @link https://discord.com/developers/docs/topics/permissions#role-object
     */
    roles;
    /**
     * A map with the guild's emojis.
     * @see {@link GuildEmoji}
     * @link https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
     */
    emojis;
    /**
     * A map with the guild's channels.
     * @see {@link GuildChannel}
     * @link https://discord.com/developers/docs/resources/channel#channel-object
     */
    channels;
    /**
     * Returns the maximum number of emoji slots
     */
    get maxEmojis() {
        switch (this.premiumTier) {
            case 1:
                return 100;
            case 2:
                return 150;
            case 3:
                return 250;
            default:
                return 50;
        }
    }
    /**
     * Returns the maximum number of custom sticker slots
     */
    get maxStickers() {
        switch (this.premiumTier) {
            case 1:
                return 15;
            case 2:
                return 30;
            case 3:
                return 60;
            default:
                return 5;
        }
    }
    /**
     * edits the bot's nickname in the guild.
     * 'null' would reset the nickname.
     */
    async editBotNickname(options) {
        const result = await this.session.rest.runMethod(this.session.rest, 'PATCH', Routes.USER_NICK(this.id), options);
        return result?.nick;
    }
    /**
     * creates an emoji in the guild.
     * @see {@link CreateGuildEmoji}
     * @see {@link GuildEmoji}
     * @param options The options to create a emoji.
     * @returns A promise that resolves to the guild's new emoji.
     */
    async createEmoji(options) {
        if (options.image && !options.image.startsWith('data:image/')) {
            options.image = await (0, urlToBase64_1.urlToBase64)(options.image);
        }
        const emoji = await this.session.rest.runMethod(this.session.rest, 'POST', Routes.GUILD_EMOJIS(this.id), options);
        return new GuildEmoji_1.default(this.session, emoji, this.id);
    }
    /**
     * deletes an emoji from the guild.
     * @param id - The id of the emoji to delete.
     * @param reason - The reason for deleting the emoji.
     */
    async deleteEmoji(id, { reason } = {}) {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.GUILD_EMOJI(this.id, id), { reason });
    }
    /**
     * edits an emoji in the guild.
     * @see {@link ModifyGuildEmoji}
     * @see {@link GuildEmoji}
     * @param id - The id of the emoji to edit.
     * @param options - Options to modify the emoji.
     * @returns A promise that resolves to the edited emoji.
     */
    async editEmoji(id, options) {
        const emoji = await this.session.rest.runMethod(this.session.rest, 'PATCH', Routes.GUILD_EMOJI(this.id, id), options);
        return new GuildEmoji_1.default(this.session, emoji, this.id);
    }
    /**
     * creates a role in the guild.
     * @see {@link CreateRole}
     * @see {@link Role}
     * @param options - Options to create a new role.
     */
    async createRole(options) {
        let icon;
        if (options.iconHash) {
            if (typeof options.iconHash === 'string') {
                icon = options.iconHash;
            }
            else {
                icon = Util_1.default.iconBigintToHash(options.iconHash);
            }
        }
        const role = await this.session.rest.runMethod(this.session.rest, 'PUT', Routes.GUILD_ROLES(this.id), {
            name: options.name,
            color: options.color,
            icon,
            unicode_emoji: options.unicodeEmoji,
            hoist: options.hoist,
            mentionable: options.mentionable,
        });
        return new Role_1.default(this.session, role, this.id);
    }
    /**
     * deletes a role from the guild.
     * @param roleId - The id of the role to delete.
     */
    async deleteRole(roleId) {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.GUILD_ROLE(this.id, roleId));
    }
    /**
     * edits a role in the guild.
     * @see {@link ModifyGuildRole}
     * @see {@link Role}
     * @param roleId - The id of the role to edit.
     * @param options - Options to modify the role.
     */
    async editRole(roleId, options) {
        const role = await this.session.rest.runMethod(this.session.rest, 'PATCH', Routes.GUILD_ROLE(this.id, roleId), {
            name: options.name,
            color: options.color,
            hoist: options.hoist,
            mentionable: options.mentionable,
        });
        return new Role_1.default(this.session, role, this.id);
    }
    /**
     * adds a role to a user in the guild.
     * @param memberId - The id of the member to add a role to.
     * @param roleId - The id of the role to add.
     * @param reason - The reason for adding the role to the member.
     */
    async addRole(memberId, roleId, { reason } = {}) {
        await this.session.rest.runMethod(this.session.rest, 'PUT', Routes.GUILD_MEMBER_ROLE(this.id, memberId, roleId), { reason });
    }
    /**
     * removes a role from a user in the guild.
     * @param memberId - The id of the member to remove a role from.
     * @param roleId - The id of the role to remove.
     * @param reason - The reason for removing the role from the member.
     */
    async removeRole(memberId, roleId, { reason } = {}) {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.GUILD_MEMBER_ROLE(this.id, memberId, roleId), { reason });
    }
    /**
     * the roles moved.
     * @see {@link ModifyRolePositions}
     * @see {@link Role}
     * @param options - Options to modify the roles.
     */
    async moveRoles(options) {
        const roles = await this.session.rest.runMethod(this.session.rest, 'PATCH', Routes.GUILD_ROLES(this.id), options);
        return roles.map((role) => new Role_1.default(this.session, role, this.id));
    }
    /**
     * deletes an invite from the guild.
     * @param inviteCode - The invite code to get the invite for.
     */
    async deleteInvite(inviteCode) {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.INVITE(inviteCode), {});
    }
    /**
     * gets an invite from the guild.
     * @see {@link Routes.GetInvite}
     * @see {@link Invite}
     * @param inviteCode - The invite code to get the invite for.
     * @param options - Options to get the invite.
     * @returns Promise resolving to the invite.
     */
    async fetchInvite(inviteCode, options) {
        const inviteMetadata = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.INVITE(inviteCode, options));
        return new Invite_1.default(this.session, inviteMetadata);
    }
    /**
     * gets all invites from the guild.
     * @see {@link Invite}
     * @returns A promise that resolves to the guild's invites.
     */
    async fetchInvites() {
        const invites = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.GUILD_INVITES(this.id));
        return invites.map((invite) => new Invite_1.default(this.session, invite));
    }
    /**
     * bans a member from the guild.
     * @see {@link CreateGuildBan}
     * @param memberId - The id of the member to ban.
     * @param options - Options to ban the member.
     */
    async banMember(memberId, options) {
        await this.session.rest.runMethod(this.session.rest, 'PUT', Routes.GUILD_BAN(this.id, memberId), options
            ? {
                delete_message_days: options.deleteMessageDays,
                reason: options.reason,
            }
            : {});
    }
    /**
     * kicks a member from the guild.
     * @param memberId - The id of the member to kick.
     * @param reason - The reason for kicking the member.
     */
    async kickMember(memberId, { reason }) {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.GUILD_MEMBER(this.id, memberId), { reason });
    }
    /**
     * unbans a member from the guild.
     * @param memberId - The id of the member to get.
     */
    async unbanMember(memberId) {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.GUILD_BAN(this.id, memberId));
    }
    /**
     * edits a member in the guild.
     * @see {@link ModifyGuildMember}
     * @see {@link Member}
     * @param memberId - The id of the member to get.
     * @param options - Options to edit the member.
     * @returns Promise resolving to the edited member.
     */
    async editMember(memberId, options) {
        const member = await this.session.rest.runMethod(this.session.rest, 'PATCH', Routes.GUILD_MEMBER(this.id, memberId), {
            nick: options.nick,
            roles: options.roles,
            mute: options.mute,
            deaf: options.deaf,
            channel_id: options.channelId,
            communication_disabled_until: options.communicationDisabledUntil
                ? new Date(options.communicationDisabledUntil).toISOString()
                : undefined,
        });
        return new Member_1.default(this.session, member, this.id);
    }
    /**
     * prunes members from the guild.
     * @see {@link BeginGuildPrune}
     * @param options - Options to prune the members.
     * @returns A promise that resolves to the number of members pruned.
     */
    async pruneMembers(options) {
        const result = await this.session.rest.runMethod(this.session.rest, 'POST', Routes.GUILD_PRUNE(this.id), {
            days: options.days,
            compute_prune_count: options.computePruneCount,
            include_roles: options.includeRoles,
        });
        return result.pruned;
    }
    /**
     * gets the number of members that would be pruned.
     * @returns A promise that resolves to the number of members that would be pruned.
     */
    async getPruneCount() {
        const result = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.GUILD_PRUNE(this.id));
        return result.pruned;
    }
    /**
     * gets the active threads in the guild.
     * @see {@link ReturnThreadsArchive}
     * @returns Promise resolving a ReturnThreadsArchive without hasMore property.
     */
    async getActiveThreads() {
        const { threads, members } = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.THREAD_ACTIVE(this.id));
        return {
            threads: Object.fromEntries(threads.map((thread) => [
                thread.id,
                new channels_1.ThreadChannel(this.session, thread, this.id),
            ])),
            members: Object.fromEntries(members.map((threadMember) => [
                threadMember.id,
                new ThreadMember_1.default(this.session, threadMember),
            ])),
        };
    }
    /** *
     * Deletes the guild.
     */
    async delete() {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.GUILDS(this.id));
    }
    /**
     * Leaves the guild.
     */
    async leave() {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.USER_GUILDS(this.id));
    }
    /**
     * Creates a guild and returns its data, the bot joins the guild
     * This was modified from discord.js to make it compatible
     * precondition: Bot should be in less than 10 servers
     * @see {@link Session}
     * @see {@link GuildCreateOptions}
     * @see {@link Guild}
     * @param session - The session the guild should be created in.
     * @param options - Options to create the guild.
     * @returns A promise that resolves to the created guild.
     */
    static async create(session, options) {
        const guild = await session.rest.runMethod(session.rest, 'POST', Routes.GUILDS(), {
            name: options.name,
            afk_channel_id: options.afkChannelId,
            afk_timeout: options.afkTimeout,
            default_message_notifications: options.defaultMessageNotifications,
            explicit_content_filter: options.explicitContentFilter,
            system_channel_flags: options.systemChannelFlags,
            verification_level: options.verificationLevel,
            icon: 'iconURL' in options
                ? options.iconURL && (0, urlToBase64_1.urlToBase64)(options.iconURL)
                : options.iconHash &&
                    Util_1.default.iconBigintToHash(options.iconHash),
            channels: options.channels?.map((channel) => ({
                name: channel.name,
                nsfw: channel.nsfw,
                id: channel.id,
                bitrate: channel.bitrate,
                parent_id: channel.parentId,
                permission_overwrites: channel.permissionOverwrites,
                rtc_region: channel.rtcRegion,
                user_limit: channel.userLimit,
                video_quality_mode: channel.videoQualityMode,
                rate_limit_per_user: channel.rateLimitPerUser,
            })),
            roles: options.roles?.map((role) => ({
                name: role.name,
                id: role.id,
                color: role.color,
                mentionable: role.mentionable,
                hoist: role.hoist,
                position: role.position,
                unicode_emoji: role.unicodeEmoji,
                icon: options.iconURL && (0, urlToBase64_1.urlToBase64)(options.iconURL),
            })),
        });
        return new Guild(session, guild);
    }
    /**
     * sets a new splash for the guild. Same as Guild.edit({..., splash: 'splashURL'})
     * @see {@link Guild}
     */
    setSplash(splashURL) {
        return this.edit({ splashURL });
    }
    /**
     * sets a new banner for the guild. Same as Guild.edit({..., banner: 'bannerURL'})
     * @see {@link Guild}
     */
    setBanner(bannerURL) {
        return this.edit({ bannerURL });
    }
    /**
     * Sets a new guild discovery splash image. Same as Guild.edit({..., discoverySplashURL: 'discoverySplashURL'})
     * @see {@link Guild}
     */
    setDiscoverySplash(discoverySplashURL) {
        return this.edit({ discoverySplashURL });
    }
    /**
     * Edits a guild and returns its data.
     * @see {@link Guild}
     * @see {@link GuildEditOptions}
     * @param options - Options to edit the guild.
     * @returns A promise that resolves to the edited guild.
     */
    async edit(options) {
        const guild = await this.session.rest.runMethod(this.session.rest, 'PATCH', Routes.GUILDS(), {
            name: options.name,
            afk_channel_id: options.afkChannelId,
            afk_timeout: options.afkTimeout,
            default_message_notifications: options.defaultMessageNotifications,
            explicit_content_filter: options.explicitContentFilter,
            system_channel_flags: options.systemChannelFlags,
            verification_level: options.verificationLevel,
            icon: 'iconURL' in options
                ? options.iconURL && (0, urlToBase64_1.urlToBase64)(options.iconURL)
                : options.iconHash &&
                    Util_1.default.iconBigintToHash(options.iconHash),
            // extra props
            splash: 'splashURL' in options
                ? options.splashURL && (0, urlToBase64_1.urlToBase64)(options.splashURL)
                : options.iconHash &&
                    Util_1.default.iconBigintToHash(options.iconHash),
            banner: 'bannerURL' in options
                ? options.bannerURL && (0, urlToBase64_1.urlToBase64)(options.bannerURL)
                : options.bannerHash &&
                    Util_1.default.iconBigintToHash(options.bannerHash),
            discovery_splash: 'discoverySplashURL' in options
                ? options.discoverySplashURL &&
                    (0, urlToBase64_1.urlToBase64)(options.discoverySplashURL)
                : options.discoverySplashHash &&
                    Util_1.default.iconBigintToHash(options.discoverySplashHash),
            owner_id: options.ownerId,
            rules_channel_id: options.rulesChannelId,
            public_updates_channel_id: options.publicUpdatesChannelId,
            preferred_locale: options.preferredLocale,
            features: options.features,
            description: options.description,
            premiumProgressBarEnabled: options.premiumProgressBarEnabled,
        });
        return new Guild(this.session, guild);
    }
    /**
     * gets the voice regions available for the guild.
     * @see {@link DiscordVoiceRegion}
     * @returns Promise that resolves to an array of voice regions.
     */
    async fetchVoiceRegions() {
        return await this.session.rest.runMethod(this.session.rest, 'GET', Routes.GUILD_VOICE_REGIONS(this.id));
    }
    /**
     * Fetches user ban in the guild
     * @param userId The user id
     * @returns Resolves Discord Ban
     */
    async fetchBan(userId) {
        const ban = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.GUILD_BAN(this.id, userId));
        return {
            reason: ban.reason ?? undefined,
            user: new User_1.default(this.session, ban.user),
        };
    }
    /**
     * Fetches bans in the guild
     * @param options
     * @returns Resolve with list of bans
     */
    async fetchBans(options) {
        const bans = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.GUILD_BANS(this.id, options));
        return bans.map((x) => {
            return {
                reason: x.reason ?? undefined,
                user: new User_1.default(this.session, x.user),
            };
        });
    }
    /**
     * Fetches settings for {@link Widget} in the guild
     * @returns Resolves with the settings
     */
    async fetchWidgetSettings() {
        const widget = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.GUILD_WIDGET(this.id));
        return {
            enabled: !!widget.enabled,
            channelId: widget.channel_id ?? undefined,
        };
    }
    /**
     * Fetches widget in the guild
     * @returns Resolves with the Widget
     */
    async fetchWidget() {
        const widget = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.GUILD_WIDGET(this.id, { get: 'json' }));
        return new Widget_1.Widget(this.session, widget);
    }
    /**
     * Fetches vanity url invite
     * @see {@link Invite}
     * @returns Resolves a Invite
     */
    async fetchVanityURL() {
        const vanity = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.GUILD_VANITY(this.id));
        return new Invite_1.default(this.session, vanity);
    }
    /**
     * Fetches preview of the guild
     * @returns Resolves a Guild Preview object
     */
    async fetchGuildPreview() {
        const preview = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.GUILD_PREVIEW(this.id));
        return new GuildPreview(this.session, preview);
    }
}
exports.Guild = Guild;
exports.default = Guild;

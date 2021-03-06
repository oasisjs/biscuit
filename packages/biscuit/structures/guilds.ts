import type { Model } from './Base.ts';
import type { Session } from '../Session.ts';
import type {
    ChannelTypes,
    DefaultMessageNotificationLevels,
    DiscordBan,
    DiscordEmoji,
    DiscordGuild,
    DiscordGuildPreview,
    DiscordGuildWidget,
    DiscordGuildWidgetSettings,
    DiscordInvite,
    DiscordInviteMetadata,
    DiscordListActiveThreads,
    DiscordMemberWithUser,
    DiscordOverwrite,
    DiscordRole,
    DiscordVoiceRegion,
    ExplicitContentFilterLevels,
    GuildNsfwLevel,
    MakeRequired,
    SystemChannelFlags,
    VerificationLevels,
    VideoQualityModes,
} from '../../discordeno/mod.ts';
import type { ImageFormat, ImageSize } from '../Util.ts';
import { GuildFeatures, PremiumTiers } from '../../discordeno/mod.ts';
import { Snowflake } from '../Snowflake.ts';
import Util from '../Util.ts';
import * as Routes from '../Routes.ts';
import WelcomeScreen from './WelcomeScreen.ts';
import { GuildChannel, ReturnThreadsArchive, ThreadChannel } from './channels.ts';
import ThreadMember from './ThreadMember.ts';
import Member from './Member.ts';
import Role from './Role.ts';
import GuildEmoji from './GuildEmoji.ts';
import { urlToBase64 } from '../util/urlToBase64.ts';
import Invite from './Invite.ts';
import User from './User.ts';
import { Widget } from './Widget.ts';
import Sticker from './Sticker.ts';

/** BaseGuild */
/**
 * Class for {@link Guild} and {@link AnonymousGuild}
 */
export abstract class BaseGuild implements Model {
    constructor(session: Session, data: DiscordGuild) {
        this.session = session;
        this.id = data.id;

        this.name = data.name;
        this.iconHash = data.icon ? Util.iconHashToBigInt(data.icon) : undefined;

        this.features = data.features;
    }

    /** The session that instantiated the guild. */
    readonly session: Session;
    /** Guild id. */
    readonly id: Snowflake;
    /** Guild name. */
    name: string;
    /**
     * Icon hash. Discord uses ids and hashes to render images in the client.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    iconHash?: bigint;
    /**
     * Enabled guild features (animated banner, news, auto moderation, etc).
     * @see {@link GuildFeatures}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    features: GuildFeatures[];

    /** createdTimestamp gets the current guild timestamp. */
    get createdTimestamp(): number {
        return Snowflake.snowflakeToTimestamp(this.id);
    }

    /** createdAt gets the creation Date object of the guild. */
    get createdAt(): Date {
        return new Date(this.createdTimestamp);
    }

    /**
     * If the guild features includes partnered.
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    get partnered(): boolean {
        return this.features.includes(GuildFeatures.Partnered);
    }

    /**
     * If the guild is verified.
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    get verified(): boolean {
        return this.features.includes(GuildFeatures.Verified);
    }

    /**
     * iconURL gets the current guild icon.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    iconURL(options: { size?: ImageSize; format?: ImageFormat } = { size: 128 }): string | void {
        if (this.iconHash) {
            return Util.formatImageURL(
                Routes.GUILD_ICON(this.id, Util.iconBigintToHash(this.iconHash)),
                options.size,
                options.format,
            );
        }
    }

    /** toString gets the guild name */
    toString(): string {
        return this.name;
    }
}

/** AnonymousGuild */
/**
 * Class for anonymous guilds.
 * @see {@link BaseGuild}
 * @link https://discord.com/developers/docs/resources/guild#guild-resource
 */
export class AnonymousGuild extends BaseGuild implements Model {
    constructor(session: Session, data: Partial<DiscordGuild>); // TODO: Improve this type (name and id are required)
    constructor(session: Session, data: DiscordGuild) {
        super(session, data);

        this.splashHash = data.splash ? Util.iconHashToBigInt(data.splash) : undefined;
        this.bannerHash = data.banner ? Util.iconHashToBigInt(data.banner) : undefined;

        this.verificationLevel = data.verification_level;
        this.vanityUrlCode = data.vanity_url_code ? data.vanity_url_code : undefined;
        this.nsfwLevel = data.nsfw_level;
        this.description = data.description ? data.description : undefined;
        this.premiumSubscriptionCount = data.premium_subscription_count;
    }

    /**
     * The guild's splash hash.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    splashHash?: bigint;
    /**
     * The guild's banner hash.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    bannerHash?: bigint;
    /**
     * The guild's verification level.
     * @see {@link VerificationLevels}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-verification-level
     */
    verificationLevel: VerificationLevels;
    /** The guild's vanity url code. */
    vanityUrlCode?: string;
    /**
     * The guild's nsfw level.
     * @see {@link GuildNsfwLevel}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
     */
    nsfwLevel: GuildNsfwLevel;
    /** The guild's description. */
    description?: string;
    /** The number of boosts this guild currently has. */
    premiumSubscriptionCount?: number;

    /**
     * splashURL gets the current guild splash as a string.
     * @link https://discord.com/developers/docs/reference#image-formatting
     * @param options - Image options for the splash url.
     * @returns Splash url or void.
     */
    splashURL(options: { size?: ImageSize; format?: ImageFormat } = { size: 128 }): string | void {
        if (this.splashHash) {
            return Util.formatImageURL(
                Routes.GUILD_SPLASH(this.id, Util.iconBigintToHash(this.splashHash)),
                options.size,
                options.format,
            );
        }
    }

    /**
     * bannerURL gets the current guild banner as a string.
     * @link https://discord.com/developers/docs/reference#image-formatting
     * @param options - Image options for the banner url.
     * @returns Banner url or void
     */
    bannerURL(options: { size?: ImageSize; format?: ImageFormat } = { size: 128 }): string | void {
        if (this.bannerHash) {
            return Util.formatImageURL(
                Routes.GUILD_BANNER(this.id, Util.iconBigintToHash(this.bannerHash)),
                options.size,
                options.format,
            );
        }
    }
}

/** InviteGuild */
export class InviteGuild extends AnonymousGuild implements Model {
    constructor(session: Session, data: Partial<DiscordGuild>) {
        super(session, data);

        if (data.welcome_screen) {
            this.welcomeScreen = new WelcomeScreen(session, data.welcome_screen);
        }
    }

    welcomeScreen?: WelcomeScreen;
}

/**
 * Represent Discord Guild Preview Object
 * @link https://discord.com/developers/docs/resources/guild#guild-preview-object
 */
export class GuildPreview implements Model {
    constructor(session: Session, data: DiscordGuildPreview) {
        this.session = session;
        this.id = data.id;
        this.name = data.name;
        this.description = data.description ?? undefined;
        this.iconHash = data.icon ? Util.iconHashToBigInt(data.icon) : undefined;
        this.splashHash = data.splash ? Util.iconHashToBigInt(data.splash) : undefined;
        this.discoverySplashHash = data.discovery_splash ? Util.iconHashToBigInt(data.discovery_splash) : undefined;
        this.emojis = data.emojis.map((x) => new GuildEmoji(this.session, x, this.id));
        this.features = data.features;
        this.approximateMemberCount = data.approximate_member_count;
        this.approximatePresenceCount = data.approximate_presence_count;
        this.stickers = data.stickers.map((x) => new Sticker(this.session, x));
    }
    session: Session;
    /** guild id */
    id: Snowflake;
    /** guild name (2-100 characters) */
    name: string;
    iconHash?: bigint;
    splashHash?: bigint;
    discoverySplashHash?: bigint;
    /** custom guild emojis */
    emojis: GuildEmoji[];
    /** enabled guild features */
    features: GuildFeatures[];
    /** approximate number of members in this guild */
    approximateMemberCount: number;
    /** approximate number of online members in this guild */
    approximatePresenceCount: number;
    /** the description for the guild */
    description?: string;
    /** custom guild stickers */
    stickers: Sticker[];
}

// Guild
/** Maximun custom guild emojis per level */
export type maximunEmojis = 50 | 100 | 150 | 250;
/** Maximun custom guild stickers per level */
export type maximunStickers = 5 | 15 | 30 | 60;

export type editBotNickOptions = { nick: string | null; reason?: string };

export interface CreateRole {
    name?: string;
    color?: number;
    iconHash?: string | bigint;
    unicodeEmoji?: string;
    hoist?: boolean;
    mentionable?: boolean;
}

export interface ModifyGuildRole {
    name?: string;
    color?: number;
    hoist?: boolean;
    mentionable?: boolean;
    unicodeEmoji?: string;
}

export interface CreateGuildEmoji {
    name: string;
    image: string;
    roles?: Snowflake[];
    reason?: string;
}

export interface ModifyGuildEmoji {
    name?: string;
    roles?: Snowflake[];
}

/**
 * @link https://discord.com/developers/docs/resources/guild#create-guild-ban
 */
export interface CreateGuildBan {
    deleteMessageDays?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    reason?: string;
}

/**
 * @link https://discord.com/developers/docs/resources/guild#ban-object
 */
export interface GuildBan {
    reason?: string;
    user: User;
}

/**
 * @link https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure
 */
export interface GuildWidgetSettings {
    enabled: boolean;
    channelId?: Snowflake;
}

export interface PartialVanityURL {
    code: string;
    uses: number;
}

/**
 * @link https://discord.com/developers/docs/resources/guild#modify-guild-member
 */
export interface ModifyGuildMember {
    nick?: string;
    roles?: Snowflake[];
    mute?: boolean;
    deaf?: boolean;
    channelId?: Snowflake;
    communicationDisabledUntil?: number;
}

/**
 * @link https://discord.com/developers/docs/resources/guild#begin-guild-prune
 */
export interface BeginGuildPrune {
    days?: number;
    computePruneCount?: boolean;
    includeRoles?: Snowflake[];
}

export interface ModifyRolePositions {
    id: Snowflake;
    position?: number | null;
}

export interface GuildCreateOptionsRole {
    id: Snowflake;
    name?: string;
    color?: number;
    hoist?: boolean;
    position?: number;
    permissions?: bigint;
    mentionable?: boolean;
    iconURL?: string;
    unicodeEmoji?: string | null;
}

export interface GuildCreateOptionsRole {
    id: Snowflake;
    name?: string;
    color?: number;
    hoist?: boolean;
    position?: number;
    permissions?: bigint;
    mentionable?: boolean;
    iconHash?: bigint;
    unicodeEmoji?: string | null;
}

export interface GuildCreateOptionsChannel {
    id?: Snowflake;
    parentId?: Snowflake;
    type?: ChannelTypes.GuildText | ChannelTypes.GuildVoice | ChannelTypes.GuildCategory;
    name: string;
    topic?: string | null;
    nsfw?: boolean;
    bitrate?: number;
    userLimit?: number;
    rtcRegion?: string | null;
    videoQualityMode?: VideoQualityModes;
    permissionOverwrites?: MakeRequired<Partial<DiscordOverwrite>, 'id'>[];
    rateLimitPerUser?: number;
}

/**
 * @link https://discord.com/developers/docs/resources/guild#create-guild
 */
export interface GuildCreateOptions {
    name: string;
    afkChannelId?: Snowflake;
    afkTimeout?: number;
    channels?: GuildCreateOptionsChannel[];
    defaultMessageNotifications?: DefaultMessageNotificationLevels;
    explicitContentFilter?: ExplicitContentFilterLevels;
    iconURL?: string;
    roles?: GuildCreateOptionsRole[];
    systemChannelFlags?: SystemChannelFlags;
    systemChannelId?: Snowflake;
    verificationLevel?: VerificationLevels;
}

export interface GuildCreateOptions {
    name: string;
    afkChannelId?: Snowflake;
    afkTimeout?: number;
    channels?: GuildCreateOptionsChannel[];
    defaultMessageNotifications?: DefaultMessageNotificationLevels;
    explicitContentFilter?: ExplicitContentFilterLevels;
    iconHash?: bigint;
    roles?: GuildCreateOptionsRole[];
    systemChannelFlags?: SystemChannelFlags;
    systemChannelId?: Snowflake;
    verificationLevel?: VerificationLevels;
}

/**
 * @link https://discord.com/developers/docs/resources/guild#modify-guild-json-params
 */
export interface GuildEditOptions extends Partial<GuildCreateOptions> {
    ownerId?: Snowflake;
    splashURL?: string;
    bannerURL?: string;
    discoverySplashURL?: string;
    features?: GuildFeatures[];
    rulesChannelId?: Snowflake;
    description?: string;
    premiumProgressBarEnabled?: boolean;
}

export interface GuildEditOptions extends Partial<GuildCreateOptions> {
    ownerId?: Snowflake;
    splashHash?: bigint;
    bannerHash?: bigint;
    discoverySplashHash?: bigint;
    features?: GuildFeatures[];
    rulesChannelId?: Snowflake;
    publicUpdatesChannelId?: Snowflake;
    preferredLocale?: string | null;
    description?: string;
    premiumProgressBarEnabled?: boolean;
}

/**
 * Represents a guild.
 * @see {@link BaseGuild}.
 * @link https://discord.com/developers/docs/resources/guild#guild-object
 */
export class Guild extends BaseGuild implements Model {
    constructor(session: Session, data: DiscordGuild) {
        super(session, data);

        this.splashHash = data.splash ? Util.iconHashToBigInt(data.splash) : undefined;
        this.discoverySplashHash = data.discovery_splash ? Util.iconHashToBigInt(data.discovery_splash) : undefined;
        this.ownerId = data.owner_id;
        this.widgetEnabled = !!data.widget_enabled;
        this.widgetChannelId = data.widget_channel_id ? data.widget_channel_id : undefined;
        this.vefificationLevel = data.verification_level;
        this.defaultMessageNotificationLevel = data.default_message_notifications;
        this.explicitContentFilterLevel = data.explicit_content_filter;
        this.premiumTier = data.premium_tier;
        this.members = new Map(
            data.members?.map((member) => [data.id, new Member(session, { ...member, user: member.user! }, data.id)]),
        );

        this.roles = new Map(
            data.roles.map((role) => [data.id, new Role(session, role, data.id)]),
        );

        this.emojis = new Map(
            data.emojis.map((guildEmoji) => [guildEmoji.id!, new GuildEmoji(session, guildEmoji, data.id)]),
        );

        this.channels = new Map(
            data.channels?.map((guildChannel) => [guildChannel.id, new GuildChannel(session, guildChannel, data.id)]),
        );
    }

    /**
     * The guild's splash hash.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    splashHash?: bigint;
    /**
     * Only present for guilds with the "DISCOVERABLE" feature
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    discoverySplashHash?: bigint;
    /** ID of the guild owner. */
    ownerId: Snowflake;
    /** True if the server widget is enabled */
    widgetEnabled: boolean;
    /** The channel id that the widget will generate an invite to, or undefined if set to no invite. */
    widgetChannelId?: Snowflake;
    /**
     * Verification level required for the guild.
     * @see {@link VerificationLevels}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-verification-level
     */
    vefificationLevel: VerificationLevels;
    /**
     * The default message notification level.
     * @see {@link DefaultMessageNotificationLevels}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
     */
    defaultMessageNotificationLevel: DefaultMessageNotificationLevels;
    /**
     * The explicit content filter level.
     * @see {@link ExplicitContentFilterLevels}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
     */
    explicitContentFilterLevel: ExplicitContentFilterLevels;
    /**
     * Premium tier (Server Boost level).
     * @see {@link PremiumTiers}
     * @link https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
     */
    premiumTier: PremiumTiers;
    /**
     * A map with the guild's members.
     * @see {@link Member}
     * @link https://discord.com/developers/docs/resources/guild#guild-member-object
     */
    members: Map<Snowflake, Member>;
    /**
     * A map with the guild's roles.
     * @see {@link Role}
     * @link https://discord.com/developers/docs/topics/permissions#role-object
     */
    roles: Map<Snowflake, Role>;
    /**
     * A map with the guild's emojis.
     * @see {@link GuildEmoji}
     * @link https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
     */
    emojis: Map<Snowflake, GuildEmoji>;
    /**
     * A map with the guild's channels.
     * @see {@link GuildChannel}
     * @link https://discord.com/developers/docs/resources/channel#channel-object
     */
    channels: Map<Snowflake, GuildChannel>;

    /**
     * Returns the maximum number of emoji slots
     */
    get maxEmojis(): maximunEmojis {
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
    get maxStickers(): maximunStickers {
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
    async editBotNickname(options: editBotNickOptions): Promise<(string | undefined)> {
        const result = await this.session.rest.runMethod<{ nick?: string } | undefined>(
            this.session.rest,
            'PATCH',
            Routes.USER_NICK(this.id),
            options,
        );

        return result?.nick;
    }

    /**
     * creates an emoji in the guild.
     * @see {@link CreateGuildEmoji}
     * @see {@link GuildEmoji}
     * @param options The options to create a emoji.
     * @returns A promise that resolves to the guild's new emoji.
     */
    async createEmoji(options: CreateGuildEmoji): Promise<GuildEmoji> {
        if (options.image && !options.image.startsWith('data:image/')) {
            options.image = await urlToBase64(options.image);
        }

        const emoji = await this.session.rest.runMethod<DiscordEmoji>(
            this.session.rest,
            'POST',
            Routes.GUILD_EMOJIS(this.id),
            options,
        );

        return new GuildEmoji(this.session, emoji, this.id);
    }

    /**
     * deletes an emoji from the guild.
     * @param id - The id of the emoji to delete.
     * @param reason - The reason for deleting the emoji.
     */
    async deleteEmoji(id: Snowflake, reason?: string): Promise<void> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            'DELETE',
            Routes.GUILD_EMOJI(this.id, id),
            { reason },
        );
    }

    /**
     * edits an emoji in the guild.
     * @see {@link ModifyGuildEmoji}
     * @see {@link GuildEmoji}
     * @param id - The id of the emoji to edit.
     * @param options - Options to modify the emoji.
     * @returns A promise that resolves to the edited emoji.
     */
    async editEmoji(id: Snowflake, options: ModifyGuildEmoji): Promise<GuildEmoji> {
        const emoji = await this.session.rest.runMethod<DiscordEmoji>(
            this.session.rest,
            'PATCH',
            Routes.GUILD_EMOJI(this.id, id),
            options,
        );

        return new GuildEmoji(this.session, emoji, this.id);
    }

    /**
     * creates a role in the guild.
     * @see {@link CreateRole}
     * @see {@link Role}
     * @param options - Options to create a new role.
     */
    async createRole(options: CreateRole): Promise<Role> {
        let icon: string | undefined;

        if (options.iconHash) {
            if (typeof options.iconHash === 'string') {
                icon = options.iconHash;
            } else {
                icon = Util.iconBigintToHash(options.iconHash);
            }
        }

        const role = await this.session.rest.runMethod<DiscordRole>(
            this.session.rest,
            'PUT',
            Routes.GUILD_ROLES(this.id),
            {
                name: options.name,
                color: options.color,
                icon,
                unicode_emoji: options.unicodeEmoji,
                hoist: options.hoist,
                mentionable: options.mentionable,
            },
        );

        return new Role(this.session, role, this.id);
    }

    /**
     * deletes a role from the guild.
     * @param roleId - The id of the role to delete.
     */
    async deleteRole(roleId: Snowflake): Promise<void> {
        await this.session.rest.runMethod<undefined>(this.session.rest, 'DELETE', Routes.GUILD_ROLE(this.id, roleId));
    }

    /**
     * edits a role in the guild.
     * @see {@link ModifyGuildRole}
     * @see {@link Role}
     * @param roleId - The id of the role to edit.
     * @param options - Options to modify the role.
     */
    async editRole(roleId: Snowflake, options: ModifyGuildRole): Promise<Role> {
        const role = await this.session.rest.runMethod<DiscordRole>(
            this.session.rest,
            'PATCH',
            Routes.GUILD_ROLE(this.id, roleId),
            {
                name: options.name,
                color: options.color,
                hoist: options.hoist,
                mentionable: options.mentionable,
            },
        );

        return new Role(this.session, role, this.id);
    }

    /**
     * adds a role to a user in the guild.
     * @param memberId - The id of the member to add a role to.
     * @param roleId - The id of the role to add.
     * @param reason - The reason for adding the role to the member.
     */
    async addRole(memberId: Snowflake, roleId: Snowflake, reason?: string): Promise<void> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            'PUT',
            Routes.GUILD_MEMBER_ROLE(this.id, memberId, roleId),
            { reason },
        );
    }

    /**
     * removes a role from a user in the guild.
     * @param memberId - The id of the member to remove a role from.
     * @param roleId - The id of the role to remove.
     * @param reason - The reason for removing the role from the member.
     */
    async removeRole(memberId: Snowflake, roleId: Snowflake, reason?: string): Promise<void> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            'DELETE',
            Routes.GUILD_MEMBER_ROLE(this.id, memberId, roleId),
            { reason },
        );
    }

    /**
     * the roles moved.
     * @see {@link ModifyRolePositions}
     * @see {@link Role}
     * @param options - Options to modify the roles.
     */
    async moveRoles(options: ModifyRolePositions[]): Promise<Role[]> {
        const roles = await this.session.rest.runMethod<DiscordRole[]>(
            this.session.rest,
            'PATCH',
            Routes.GUILD_ROLES(this.id),
            options,
        );

        return roles.map((role) => new Role(this.session, role, this.id));
    }

    /**
     * deletes an invite from the guild.
     * @param inviteCode - The invite code to get the invite for.
     */
    async deleteInvite(inviteCode: string): Promise<void> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            'DELETE',
            Routes.INVITE(inviteCode),
            {},
        );
    }

    /**
     * gets an invite from the guild.
     * @see {@link Routes.GetInvite}
     * @see {@link Invite}
     * @param inviteCode - The invite code to get the invite for.
     * @param options - Options to get the invite.
     * @returns Promise resolving to the invite.
     */
    async fetchInvite(inviteCode: string, options: Routes.GetInvite): Promise<Invite> {
        const inviteMetadata = await this.session.rest.runMethod<DiscordInviteMetadata>(
            this.session.rest,
            'GET',
            Routes.INVITE(inviteCode, options),
        );

        return new Invite(this.session, inviteMetadata);
    }

    /**
     * gets all invites from the guild.
     * @see {@link Invite}
     * @returns A promise that resolves to the guild's invites.
     */
    async fetchInvites(): Promise<Invite[]> {
        const invites = await this.session.rest.runMethod<DiscordInviteMetadata[]>(
            this.session.rest,
            'GET',
            Routes.GUILD_INVITES(this.id),
        );

        return invites.map((invite) => new Invite(this.session, invite));
    }

    /**
     * bans a member from the guild.
     * @see {@link CreateGuildBan}
     * @param memberId - The id of the member to ban.
     * @param options - Options to ban the member.
     */
    async banMember(memberId: Snowflake, options: CreateGuildBan): Promise<void> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            'PUT',
            Routes.GUILD_BAN(this.id, memberId),
            options
                ? {
                    delete_message_days: options.deleteMessageDays,
                    reason: options.reason,
                }
                : {},
        );
    }

    /**
     * kicks a member from the guild.
     * @param memberId - The id of the member to kick.
     * @param reason - The reason for kicking the member.
     */
    async kickMember(memberId: Snowflake, reason?: string): Promise<void> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            'DELETE',
            Routes.GUILD_MEMBER(this.id, memberId),
            { reason },
        );
    }

    /**
     * unbans a member from the guild.
     * @param memberId - The id of the member to get.
     */
    async unbanMember(memberId: Snowflake): Promise<void> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            'DELETE',
            Routes.GUILD_BAN(this.id, memberId),
        );
    }

    /**
     * edits a member in the guild.
     * @see {@link ModifyGuildMember}
     * @see {@link Member}
     * @param memberId - The id of the member to get.
     * @param options - Options to edit the member.
     * @returns Promise resolving to the edited member.
     */
    async editMember(memberId: Snowflake, options: ModifyGuildMember): Promise<Member> {
        const member = await this.session.rest.runMethod<DiscordMemberWithUser>(
            this.session.rest,
            'PATCH',
            Routes.GUILD_MEMBER(this.id, memberId),
            {
                nick: options.nick,
                roles: options.roles,
                mute: options.mute,
                deaf: options.deaf,
                channel_id: options.channelId,
                communication_disabled_until: options.communicationDisabledUntil
                    ? new Date(options.communicationDisabledUntil).toISOString()
                    : undefined,
            },
        );

        return new Member(this.session, member, this.id);
    }

    /**
     * prunes members from the guild.
     * @see {@link BeginGuildPrune}
     * @param options - Options to prune the members.
     * @returns A promise that resolves to the number of members pruned.
     */
    async pruneMembers(options: BeginGuildPrune): Promise<number> {
        const result = await this.session.rest.runMethod<{ pruned: number }>(
            this.session.rest,
            'POST',
            Routes.GUILD_PRUNE(this.id),
            {
                days: options.days,
                compute_prune_count: options.computePruneCount,
                include_roles: options.includeRoles,
            },
        );

        return result.pruned;
    }

    /**
     * gets the number of members that would be pruned.
     * @returns A promise that resolves to the number of members that would be pruned.
     */
    async getPruneCount(): Promise<number> {
        const result = await this.session.rest.runMethod<{ pruned: number }>(
            this.session.rest,
            'GET',
            Routes.GUILD_PRUNE(this.id),
        );

        return result.pruned;
    }

    /**
     * gets the active threads in the guild.
     * @see {@link ReturnThreadsArchive}
     * @returns Promise resolving a ReturnThreadsArchive without hasMore property.
     */
    async getActiveThreads(): Promise<Omit<ReturnThreadsArchive, 'hasMore'>> {
        const { threads, members } = await this.session.rest.runMethod<DiscordListActiveThreads>(
            this.session.rest,
            'GET',
            Routes.THREAD_ACTIVE(this.id),
        );

        return {
            threads: Object.fromEntries(
                threads.map((thread) => [thread.id, new ThreadChannel(this.session, thread, this.id)]),
            ),
            members: Object.fromEntries(
                members.map((threadMember) => [threadMember.id, new ThreadMember(this.session, threadMember)]),
            ),
        };
    }

    /** *
     * Deletes the guild.
     */
    async delete(): Promise<void> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            'DELETE',
            Routes.GUILDS(this.id),
        );
    }

    /**
     * Leaves the guild.
     */
    async leave(): Promise<void> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            'DELETE',
            Routes.USER_GUILDS(this.id),
        );
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
    static async create(session: Session, options: GuildCreateOptions): Promise<Guild> {
        const guild = await session.rest.runMethod<DiscordGuild>(session.rest, 'POST', Routes.GUILDS(), {
            name: options.name,
            afk_channel_id: options.afkChannelId,
            afk_timeout: options.afkTimeout,
            default_message_notifications: options.defaultMessageNotifications,
            explicit_content_filter: options.explicitContentFilter,
            system_channel_flags: options.systemChannelFlags,
            verification_level: options.verificationLevel,
            icon: 'iconURL' in options
                ? options.iconURL && urlToBase64(options.iconURL)
                : options.iconHash && Util.iconBigintToHash(options.iconHash),
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
                icon: options.iconURL && urlToBase64(options.iconURL),
            })),
        });

        return new Guild(session, guild);
    }

    /**
     * sets a new splash for the guild. Same as Guild.edit({..., splash: 'splashURL'})
     * @see {@link Guild}
     */
    setSplash(splashURL: string): Promise<Guild> {
        return this.edit({ splashURL });
    }

    /**
     * sets a new banner for the guild. Same as Guild.edit({..., banner: 'bannerURL'})
     * @see {@link Guild}
     */
    setBanner(bannerURL: string): Promise<Guild> {
        return this.edit({ bannerURL });
    }

    /**
     * Sets a new guild discovery splash image. Same as Guild.edit({..., discoverySplashURL: 'discoverySplashURL'})
     * @see {@link Guild}
     */
    setDiscoverySplash(discoverySplashURL: string): Promise<Guild> {
        return this.edit({ discoverySplashURL });
    }

    /**
     * Edits a guild and returns its data.
     * @see {@link Guild}
     * @see {@link GuildEditOptions}
     * @param options - Options to edit the guild.
     * @returns A promise that resolves to the edited guild.
     */
    async edit(options: GuildEditOptions): Promise<Guild> {
        const guild = await this.session.rest.runMethod<DiscordGuild>(this.session.rest, 'PATCH', Routes.GUILDS(), {
            name: options.name,
            afk_channel_id: options.afkChannelId,
            afk_timeout: options.afkTimeout,
            default_message_notifications: options.defaultMessageNotifications,
            explicit_content_filter: options.explicitContentFilter,
            system_channel_flags: options.systemChannelFlags,
            verification_level: options.verificationLevel,
            icon: 'iconURL' in options
                ? options.iconURL && urlToBase64(options.iconURL)
                : options.iconHash && Util.iconBigintToHash(options.iconHash),
            // extra props
            splash: 'splashURL' in options
                ? options.splashURL && urlToBase64(options.splashURL)
                : options.iconHash && Util.iconBigintToHash(options.iconHash),
            banner: 'bannerURL' in options
                ? options.bannerURL && urlToBase64(options.bannerURL)
                : options.bannerHash && Util.iconBigintToHash(options.bannerHash),
            discovery_splash: 'discoverySplashURL' in options
                ? options.discoverySplashURL && urlToBase64(options.discoverySplashURL)
                : options.discoverySplashHash && Util.iconBigintToHash(options.discoverySplashHash),
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
    async fetchVoiceRegions(): Promise<DiscordVoiceRegion[]> {
        return await this.session.rest.runMethod<DiscordVoiceRegion[]>(
            this.session.rest,
            'GET',
            Routes.GUILD_VOICE_REGIONS(this.id),
        );
    }

    /**
     * Fetches user ban in the guild
     * @param userId The user id
     * @returns Resolves Discord Ban
     */
    async fetchBan(userId: Snowflake): Promise<GuildBan> {
        const ban = await this.session.rest.runMethod<DiscordBan>(
            this.session.rest,
            'GET',
            Routes.GUILD_BAN(this.id, userId),
        );
        return { reason: ban.reason ?? undefined, user: new User(this.session, ban.user) };
    }

    /**
     * Fetches bans in the guild
     * @param options
     * @returns Resolve with list of bans
     */
    async fetchBans(options?: Routes.GetBans): Promise<GuildBan[]> {
        const bans = await this.session.rest.runMethod<DiscordBan[]>(
            this.session.rest,
            'GET',
            Routes.GUILD_BANS(this.id, options),
        );
        return bans.map((x) => {
            return { reason: x.reason ?? undefined, user: new User(this.session, x.user) };
        });
    }

    /**
     * Fetches settings for {@link Widget} in the guild
     * @returns Resolves with the settings
     */
    async fetchWidgetSettings(): Promise<GuildWidgetSettings> {
        const widget = await this.session.rest.runMethod<DiscordGuildWidgetSettings>(
            this.session.rest,
            'GET',
            Routes.GUILD_WIDGET(this.id),
        );
        return {
            enabled: !!widget.enabled,
            channelId: widget.channel_id ?? undefined,
        };
    }

    /**
     * Fetches widget in the guild
     * @returns Resolves with the Widget
     */
    async fetchWidget(): Promise<Widget> {
        const widget = await this.session.rest.runMethod<DiscordGuildWidget>(
            this.session.rest,
            'GET',
            Routes.GUILD_WIDGET(this.id, { get: 'json' }),
        );
        return new Widget(this.session, widget);
    }

    /**
     * Fetches vanity url invite
     * @see {@link Invite}
     * @returns Resolves a Invite
     */
    async fetchVanityURL(): Promise<Partial<Invite>> {
        const vanity = await this.session.rest.runMethod<DiscordInvite>(
            this.session.rest,
            'GET',
            Routes.GUILD_VANITY(this.id),
        );
        return new Invite(this.session, vanity);
    }

    /**
     * Fetches preview of the guild
     * @returns Resolves a Guild Preview object
     */
    async fetchGuildPreview(): Promise<GuildPreview> {
        const preview = await this.session.rest.runMethod<DiscordGuildPreview>(
            this.session.rest,
            'GET',
            Routes.GUILD_PREVIEW(this.id),
        );
        return new GuildPreview(this.session, preview);
    }
}

export default Guild;

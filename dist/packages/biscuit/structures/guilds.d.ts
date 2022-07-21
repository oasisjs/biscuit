import type { Model } from './Base';
import type { Session } from '../Session';
import type { ChannelTypes, DefaultMessageNotificationLevels, DiscordGuild, DiscordOverwrite, DiscordVoiceRegion, ExplicitContentFilterLevels, GuildNsfwLevel, MakeRequired, SystemChannelFlags, VerificationLevels, VideoQualityModes, DiscordGuildPreview } from '../../discordeno/mod';
import type { ImageFormat, ImageSize } from '../Util';
import { GuildFeatures, PremiumTiers } from '../../discordeno/mod';
import { Snowflake } from '../Snowflake';
import * as Routes from '../Routes';
import WelcomeScreen from './WelcomeScreen';
import { GuildChannel, ReturnThreadsArchive } from './channels';
import Member from './Member';
import Role from './Role';
import GuildEmoji from './GuildEmoji';
import Invite from './Invite';
import User from './User';
import { Widget } from './Widget';
import Sticker from './Sticker';
/** BaseGuild */
/**
 * Class for {@link Guild} and {@link AnonymousGuild}
 */
export declare abstract class BaseGuild implements Model {
    constructor(session: Session, data: DiscordGuild);
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
    get createdTimestamp(): number;
    /** createdAt gets the creation Date object of the guild. */
    get createdAt(): Date;
    /**
     * If the guild features includes partnered.
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    get partnered(): boolean;
    /**
     * If the guild is verified.
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    get verified(): boolean;
    /**
     * iconURL gets the current guild icon.
     * @link https://discord.com/developers/docs/reference#image-formatting
     */
    iconURL(options?: {
        size?: ImageSize;
        format?: ImageFormat;
    }): string | void;
    /** toString gets the guild name */
    toString(): string;
}
/** AnonymousGuild */
/**
 * Class for anonymous guilds.
 * @see {@link BaseGuild}
 * @link https://discord.com/developers/docs/resources/guild#guild-resource
 */
export declare class AnonymousGuild extends BaseGuild implements Model {
    constructor(session: Session, data: Partial<DiscordGuild>);
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
    splashURL(options?: {
        size?: ImageSize;
        format?: ImageFormat;
    }): string | void;
    /**
     * bannerURL gets the current guild banner as a string.
     * @link https://discord.com/developers/docs/reference#image-formatting
     * @param options - Image options for the banner url.
     * @returns Banner url or void
     */
    bannerURL(options?: {
        size?: ImageSize;
        format?: ImageFormat;
    }): string | void;
}
/** InviteGuild */
export declare class InviteGuild extends AnonymousGuild implements Model {
    constructor(session: Session, data: Partial<DiscordGuild>);
    welcomeScreen?: WelcomeScreen;
}
/**
 * Represent Discord Guild Preview Object
 * @link https://discord.com/developers/docs/resources/guild#guild-preview-object
 */
export declare class GuildPreview implements Model {
    constructor(session: Session, data: DiscordGuildPreview);
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
/** Guild */
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
export declare class Guild extends BaseGuild implements Model {
    constructor(session: Session, data: DiscordGuild);
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
    get maxEmojis(): 50 | 100 | 150 | 250;
    /**
     * Returns the maximum number of custom sticker slots
     */
    get maxStickers(): 5 | 15 | 30 | 60;
    /**
     * edits the bot's nickname in the guild.
     * 'null' would reset the nickname.
     */
    editBotNickname(options: {
        nick: string | null;
        reason?: string;
    }): Promise<(string | undefined)>;
    /**
     * creates an emoji in the guild.
     * @see {@link CreateGuildEmoji}
     * @see {@link GuildEmoji}
     * @param options The options to create a emoji.
     * @returns A promise that resolves to the guild's new emoji.
     */
    createEmoji(options: CreateGuildEmoji): Promise<GuildEmoji>;
    /**
     * deletes an emoji from the guild.
     * @param id - The id of the emoji to delete.
     * @param reason - The reason for deleting the emoji.
     */
    deleteEmoji(id: Snowflake, { reason }?: {
        reason?: string;
    }): Promise<void>;
    /**
     * edits an emoji in the guild.
     * @see {@link ModifyGuildEmoji}
     * @see {@link GuildEmoji}
     * @param id - The id of the emoji to edit.
     * @param options - Options to modify the emoji.
     * @returns A promise that resolves to the edited emoji.
     */
    editEmoji(id: Snowflake, options: ModifyGuildEmoji): Promise<GuildEmoji>;
    /**
     * creates a role in the guild.
     * @see {@link CreateRole}
     * @see {@link Role}
     * @param options - Options to create a new role.
     */
    createRole(options: CreateRole): Promise<Role>;
    /**
     * deletes a role from the guild.
     * @param roleId - The id of the role to delete.
     */
    deleteRole(roleId: Snowflake): Promise<void>;
    /**
     * edits a role in the guild.
     * @see {@link ModifyGuildRole}
     * @see {@link Role}
     * @param roleId - The id of the role to edit.
     * @param options - Options to modify the role.
     */
    editRole(roleId: Snowflake, options: ModifyGuildRole): Promise<Role>;
    /**
     * adds a role to a user in the guild.
     * @param memberId - The id of the member to add a role to.
     * @param roleId - The id of the role to add.
     * @param reason - The reason for adding the role to the member.
     */
    addRole(memberId: Snowflake, roleId: Snowflake, { reason }?: {
        reason?: string;
    }): Promise<void>;
    /**
     * removes a role from a user in the guild.
     * @param memberId - The id of the member to remove a role from.
     * @param roleId - The id of the role to remove.
     * @param reason - The reason for removing the role from the member.
     */
    removeRole(memberId: Snowflake, roleId: Snowflake, { reason }?: {
        reason?: string;
    }): Promise<void>;
    /**
     * the roles moved.
     * @see {@link ModifyRolePositions}
     * @see {@link Role}
     * @param options - Options to modify the roles.
     */
    moveRoles(options: ModifyRolePositions[]): Promise<Role[]>;
    /**
     * deletes an invite from the guild.
     * @param inviteCode - The invite code to get the invite for.
     */
    deleteInvite(inviteCode: string): Promise<void>;
    /**
     * gets an invite from the guild.
     * @see {@link Routes.GetInvite}
     * @see {@link Invite}
     * @param inviteCode - The invite code to get the invite for.
     * @param options - Options to get the invite.
     * @returns Promise resolving to the invite.
     */
    fetchInvite(inviteCode: string, options: Routes.GetInvite): Promise<Invite>;
    /**
     * gets all invites from the guild.
     * @see {@link Invite}
     * @returns A promise that resolves to the guild's invites.
     */
    fetchInvites(): Promise<Invite[]>;
    /**
     * bans a member from the guild.
     * @see {@link CreateGuildBan}
     * @param memberId - The id of the member to ban.
     * @param options - Options to ban the member.
     */
    banMember(memberId: Snowflake, options: CreateGuildBan): Promise<void>;
    /**
     * kicks a member from the guild.
     * @param memberId - The id of the member to kick.
     * @param reason - The reason for kicking the member.
     */
    kickMember(memberId: Snowflake, { reason }: {
        reason?: string;
    }): Promise<void>;
    /**
     * unbans a member from the guild.
     * @param memberId - The id of the member to get.
     */
    unbanMember(memberId: Snowflake): Promise<void>;
    /**
     * edits a member in the guild.
     * @see {@link ModifyGuildMember}
     * @see {@link Member}
     * @param memberId - The id of the member to get.
     * @param options - Options to edit the member.
     * @returns Promise resolving to the edited member.
     */
    editMember(memberId: Snowflake, options: ModifyGuildMember): Promise<Member>;
    /**
     * prunes members from the guild.
     * @see {@link BeginGuildPrune}
     * @param options - Options to prune the members.
     * @returns A promise that resolves to the number of members pruned.
     */
    pruneMembers(options: BeginGuildPrune): Promise<number>;
    /**
     * gets the number of members that would be pruned.
     * @returns A promise that resolves to the number of members that would be pruned.
     */
    getPruneCount(): Promise<number>;
    /**
     * gets the active threads in the guild.
     * @see {@link ReturnThreadsArchive}
     * @returns Promise resolving a ReturnThreadsArchive without hasMore property.
     */
    getActiveThreads(): Promise<Omit<ReturnThreadsArchive, 'hasMore'>>;
    /** *
     * Deletes the guild.
     */
    delete(): Promise<void>;
    /**
     * Leaves the guild.
     */
    leave(): Promise<void>;
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
    static create(session: Session, options: GuildCreateOptions): Promise<Guild>;
    /**
     * sets a new splash for the guild. Same as Guild.edit({..., splash: 'splashURL'})
     * @see {@link Guild}
     */
    setSplash(splashURL: string): Promise<Guild>;
    /**
     * sets a new banner for the guild. Same as Guild.edit({..., banner: 'bannerURL'})
     * @see {@link Guild}
     */
    setBanner(bannerURL: string): Promise<Guild>;
    /**
     * Sets a new guild discovery splash image. Same as Guild.edit({..., discoverySplashURL: 'discoverySplashURL'})
     * @see {@link Guild}
     */
    setDiscoverySplash(discoverySplashURL: string): Promise<Guild>;
    /**
     * Edits a guild and returns its data.
     * @see {@link Guild}
     * @see {@link GuildEditOptions}
     * @param options - Options to edit the guild.
     * @returns A promise that resolves to the edited guild.
     */
    edit(options: GuildEditOptions): Promise<Guild>;
    /**
     * gets the voice regions available for the guild.
     * @see {@link DiscordVoiceRegion}
     * @returns Promise that resolves to an array of voice regions.
     */
    fetchVoiceRegions(): Promise<DiscordVoiceRegion[]>;
    /**
     * Fetches user ban in the guild
     * @param userId The user id
     * @returns Resolves Discord Ban
     */
    fetchBan(userId: Snowflake): Promise<GuildBan>;
    /**
     * Fetches bans in the guild
     * @param options
     * @returns Resolve with list of bans
     */
    fetchBans(options?: Routes.GetBans): Promise<GuildBan[]>;
    /**
     * Fetches settings for {@link Widget} in the guild
     * @returns Resolves with the settings
     */
    fetchWidgetSettings(): Promise<GuildWidgetSettings>;
    /**
     * Fetches widget in the guild
     * @returns Resolves with the Widget
     */
    fetchWidget(): Promise<Widget>;
    /**
     * Fetches vanity url invite
     * @see {@link Invite}
     * @returns Resolves a Invite
     */
    fetchVanityURL(): Promise<Partial<Invite>>;
    /**
     * Fetches preview of the guild
     * @returns Resolves a Guild Preview object
     */
    fetchGuildPreview(): Promise<GuildPreview>;
}
export default Guild;

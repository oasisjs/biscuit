import type { Snowflake } from './Snowflake';
export * from './Cdn';
export declare function USER(userId?: Snowflake): string;
export declare function GATEWAY_BOT(): string;
export interface GetMessagesOptions {
    limit?: number;
}
export interface GetMessagesOptions {
    around?: Snowflake;
    limit?: number;
}
export interface GetMessagesOptions {
    before?: Snowflake;
    limit?: number;
}
export interface GetMessagesOptions {
    after?: Snowflake;
    limit?: number;
}
export declare function CHANNEL(channelId: Snowflake): string;
export declare function CHANNEL_INVITES(channelId: Snowflake): string;
export declare function CHANNEL_TYPING(channelId: Snowflake): string;
export declare function CHANNEL_CREATE_THREAD(channelId: Snowflake): string;
export declare function MESSAGE_CREATE_THREAD(channelId: Snowflake, messageId: Snowflake): string;
/** used to send messages */
export declare function CHANNEL_MESSAGES(channelId: Snowflake, options?: GetMessagesOptions): string;
/** used to edit messages */
export declare function CHANNEL_MESSAGE(channelId: Snowflake, messageId: Snowflake): string;
/** used to kick members */
export declare function GUILD_MEMBER(guildId: Snowflake, userId: Snowflake): string;
/** used to ban members */
export declare function GUILD_BAN(guildId: Snowflake, userId: Snowflake): string;
export interface GetBans {
    limit?: number;
    before?: Snowflake;
    after?: Snowflake;
}
/** used to unban members */
export declare function GUILD_BANS(guildId: Snowflake, options?: GetBans): string;
export declare function GUILD_ROLE(guildId: Snowflake, roleId: Snowflake): string;
export declare function GUILD_ROLES(guildId: Snowflake): string;
export declare function USER_GUILDS(guildId?: Snowflake): string;
export declare function USER_DM(): string;
export declare function GUILD_EMOJIS(guildId: Snowflake): string;
export declare function GUILD_EMOJI(guildId: Snowflake, emojiId: Snowflake): string;
export interface GetInvite {
    withCounts?: boolean;
    withExpiration?: boolean;
    scheduledEventId?: Snowflake;
}
export declare function GUILDS(guildId?: Snowflake): string;
export declare function AUTO_MODERATION_RULES(guildId: Snowflake, ruleId?: Snowflake): string;
export declare function INVITE(inviteCode: string, options?: GetInvite): string;
export declare function GUILD_INVITES(guildId: Snowflake): string;
export declare function INTERACTION_ID_TOKEN(interactionId: Snowflake, token: string): string;
export declare function WEBHOOK_MESSAGE_ORIGINAL(webhookId: Snowflake, token: string, options?: {
    threadId?: bigint;
}): string;
export declare function WEBHOOK_MESSAGE(webhookId: Snowflake, token: string, messageId: Snowflake, options?: {
    threadId?: Snowflake;
}): string;
export declare function WEBHOOK_TOKEN(webhookId: Snowflake, token?: string): string;
export interface WebhookOptions {
    wait?: boolean;
    threadId?: Snowflake;
}
export declare function WEBHOOK(webhookId: Snowflake, token: string, options?: WebhookOptions): string;
export declare function USER_NICK(guildId: Snowflake): string;
/**
 * @link https://discord.com/developers/docs/resources/guild#get-guild-prune-count
 */
export interface GetGuildPruneCountQuery {
    days?: number;
    includeRoles?: Snowflake | Snowflake[];
}
export declare function GUILD_PRUNE(guildId: Snowflake, options?: GetGuildPruneCountQuery): string;
export declare function CHANNEL_PIN(channelId: Snowflake, messageId: Snowflake): string;
export declare function CHANNEL_PINS(channelId: Snowflake): string;
export declare function CHANNEL_MESSAGE_REACTION_ME(channelId: Snowflake, messageId: Snowflake, emoji: string): string;
export declare function CHANNEL_MESSAGE_REACTION_USER(channelId: Snowflake, messageId: Snowflake, emoji: string, userId: Snowflake): string;
export declare function CHANNEL_MESSAGE_REACTIONS(channelId: Snowflake, messageId: Snowflake): string;
/**
 * @link https://discord.com/developers/docs/resources/channel#get-reactions-query-string-params
 */
export interface GetReactions {
    after?: string;
    limit?: number;
}
export declare function CHANNEL_MESSAGE_REACTION(channelId: Snowflake, messageId: Snowflake, emoji: string, options?: GetReactions): string;
export declare function CHANNEL_MESSAGE_CROSSPOST(channelId: Snowflake, messageId: Snowflake): string;
export declare function GUILD_MEMBER_ROLE(guildId: Snowflake, memberId: Snowflake, roleId: Snowflake): string;
export declare function CHANNEL_WEBHOOKS(channelId: Snowflake): string;
export declare function THREAD_START_PUBLIC(channelId: Snowflake, messageId: Snowflake): string;
export declare function THREAD_START_PRIVATE(channelId: Snowflake): string;
export declare function THREAD_ACTIVE(guildId: Snowflake): string;
export interface ListArchivedThreads {
    before?: number;
    limit?: number;
}
export declare function THREAD_ME(channelId: Snowflake): string;
export declare function THREAD_MEMBERS(channelId: Snowflake): string;
export declare function THREAD_USER(channelId: Snowflake, userId: Snowflake): string;
export declare function THREAD_ARCHIVED(channelId: Snowflake): string;
export declare function THREAD_ARCHIVED_PUBLIC(channelId: Snowflake, options?: ListArchivedThreads): string;
export declare function THREAD_ARCHIVED_PRIVATE(channelId: Snowflake, options?: ListArchivedThreads): string;
export declare function THREAD_ARCHIVED_PRIVATE_JOINED(channelId: Snowflake, options?: ListArchivedThreads): string;
export declare function FORUM_START(channelId: Snowflake): string;
export declare function STAGE_INSTANCES(): string;
export declare function STAGE_INSTANCE(channelId: Snowflake): string;
export declare function APPLICATION_COMMANDS(appId: Snowflake, commandId?: Snowflake): string;
export declare function GUILD_APPLICATION_COMMANDS(appId: Snowflake, guildId: Snowflake, commandId?: Snowflake): string;
export declare function GUILD_APPLICATION_COMMANDS_PERMISSIONS(appId: Snowflake, guildId: Snowflake, commandId?: Snowflake): string;
export declare function APPLICATION_COMMANDS_LOCALIZATIONS(appId: Snowflake, commandId: Snowflake, withLocalizations?: boolean): string;
export declare function GUILD_APPLICATION_COMMANDS_LOCALIZATIONS(appId: Snowflake, guildId: Snowflake, commandId: Snowflake, withLocalizations?: boolean): string;
export declare function STICKER(id: Snowflake): string;
export declare function STICKER_PACKS(): string;
export declare function GUILD_STICKERS(guildId: Snowflake, stickerId?: Snowflake): string;
/**
 * Return the widget for the guild.
 * @link https://discord.com/developers/docs/resources/guild#get-guild-widget-settings
 */
export interface GetWidget {
    get: 'json' | 'image' | 'settings';
}
/**
 * /guilds/{guildId}/widget
 * @link https://discord.com/developers/docs/resources/guild#get-guild-widget-settings
 */
export declare function GUILD_WIDGET(guildId: Snowflake, options?: GetWidget): string;
/** @link https://discord.com/developers/docs/resources/guild#get-guild-voice-regions */
export declare function GUILD_VOICE_REGIONS(guildId: Snowflake): string;
/**
 * @link https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
 * @param guildId The guild
 * @returns Get vanity URL
 */
export declare function GUILD_VANITY(guildId: Snowflake): string;
/**
 * @link https://discord.com/developers/docs/resources/guild#get-guild-preview
 * @param guildId The guild
 * @returns Get guild preview url
 */
export declare function GUILD_PREVIEW(guildId: Snowflake): string;

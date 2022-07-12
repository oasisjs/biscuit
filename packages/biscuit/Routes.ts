import type { Snowflake } from "./Snowflake.ts";

// cdn endpoints
export * from "./Cdn.ts";

export function GATEWAY_BOT() {
    return "/gateway/bot";
}

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

export function CHANNEL(channelId: Snowflake) {
    return `/channels/${channelId}`;
}

export function CHANNEL_INVITES(channelId: Snowflake) {
    return `/channels/${channelId}/invites`;
}

export function CHANNEL_TYPING(channelId: Snowflake) {
    return `/channels/${channelId}/typing`;
}

export function CHANNEL_CREATE_THREAD(channelId: Snowflake) {
    return `/channels/${channelId}/threads`;
}

export function MESSAGE_CREATE_THREAD(channelId: Snowflake, messageId: Snowflake) {
    return `/channels/${channelId}/messages/${messageId}/threads`;
}

/** used to send messages */
export function CHANNEL_MESSAGES(channelId: Snowflake, options?: GetMessagesOptions) {
    let url = `/channels/${channelId}/messages?`;

    if (options) {
        if (options.after) url += `after=${options.after}`;
        if (options.before) url += `&before=${options.before}`;
        if (options.around) url += `&around=${options.around}`;
        if (options.limit) url += `&limit=${options.limit}`;
    }

    return url;
}

/** used to edit messages */
export function CHANNEL_MESSAGE(channelId: Snowflake, messageId: Snowflake) {
    return `/channels/${channelId}/messages/${messageId}`;
}

/** used to kick members */
export function GUILD_MEMBER(guildId: Snowflake, userId: Snowflake) {
    return `/guilds/${guildId}/members/${userId}`;
}

/** used to ban members */
export function GUILD_BAN(guildId: Snowflake, userId: Snowflake) {
    return `/guilds/${guildId}/bans/${userId}`;
}

export interface GetBans {
    limit?: number;
    before?: Snowflake;
    after?: Snowflake;
}

/** used to unban members */
export function GUILD_BANS(guildId: Snowflake, options?: GetBans) {
    let url = `/guilds/${guildId}/bans?`;

    if (options) {
        if (options.limit) url += `limit=${options.limit}`;
        if (options.after) url += `&after=${options.after}`;
        if (options.before) url += `&before=${options.before}`;
    }

    return url;
}

export function GUILD_ROLE(guildId: Snowflake, roleId: Snowflake) {
    return `/guilds/${guildId}/roles/${roleId}`;
}

export function GUILD_ROLES(guildId: Snowflake) {
    return `/guilds/${guildId}/roles`;
}

export function USER_DM() {
    return `/users/@me/channels`;
}

export function GUILD_EMOJIS(guildId: Snowflake) {
    return `/guilds/${guildId}/emojis`;
}

export function GUILD_EMOJI(guildId: Snowflake, emojiId: Snowflake) {
    return `/guilds/${guildId}/emojis/${emojiId}`;
}

export interface GetInvite {
    withCounts?: boolean;
    withExpiration?: boolean;
    scheduledEventId?: Snowflake;
}

export function GUILDS() {
    return `/guilds`;
}

export function AUTO_MODERATION_RULES(guildId: Snowflake, ruleId?: Snowflake) {
    if (ruleId) {
        return `/guilds/${guildId}/auto-moderation/rules/${ruleId}`;
    }
    return `/guilds/${guildId}/auto-moderation/rules`;
}

export function INVITE(inviteCode: string, options?: GetInvite) {
    let url = `/invites/${inviteCode}?`;

    if (options) {
        if (options.withCounts) url += `with_counts=${options.withCounts}`;
        if (options.withExpiration) url += `&with_expiration=${options.withExpiration}`;
        if (options.scheduledEventId) url += `&guild_scheduled_event_id=${options.scheduledEventId}`;
    }

    return url;
}

export function GUILD_INVITES(guildId: Snowflake) {
    return `/guilds/${guildId}/invites`;
}

export function INTERACTION_ID_TOKEN(interactionId: Snowflake, token: string) {
    return `/interactions/${interactionId}/${token}/callback`;
}

export function WEBHOOK_MESSAGE(webhookId: Snowflake, token: string, messageId: Snowflake) {
    return `/webhooks/${webhookId}/${token}/messages/${messageId}`;
}

export function WEBHOOK_TOKEN(webhookId: Snowflake, token?: string) {
    if (!token) return `/webhooks/${webhookId}`;
    return `/webhooks/${webhookId}/${token}`;
}

export interface WebhookOptions {
    wait?: boolean;
    threadId?: Snowflake;
}

export function WEBHOOK(webhookId: Snowflake, token: string, options?: WebhookOptions) {
    let url = `/webhooks/${webhookId}/${token}`;

    if (options?.wait) url += `?wait=${options.wait}`;
    if (options?.threadId) url += `?threadId=${options.threadId}`;
    if (options?.wait && options.threadId) url += `?wait=${options.wait}&threadId=${options.threadId}`;

    return url;
}

export function USER_NICK(guildId: Snowflake) {
    return `/guilds/${guildId}/members/@me`;
}

/**
 * @link https://discord.com/developers/docs/resources/guild#get-guild-prune-count
 */
export interface GetGuildPruneCountQuery {
    days?: number;
    includeRoles?: Snowflake | Snowflake[];
}

export function GUILD_PRUNE(guildId: Snowflake, options?: GetGuildPruneCountQuery) {
    let url = `/guilds/${guildId}/prune?`;

    if (options?.days) url += `days=${options.days}`;
    if (options?.includeRoles) url += `&include_roles=${options.includeRoles}`;

    return url;
}

export function CHANNEL_PIN(channelId: Snowflake, messageId: Snowflake) {
    return `/channels/${channelId}/pins/${messageId}`;
}

export function CHANNEL_PINS(channelId: Snowflake) {
    return `/channels/${channelId}/pins`;
}

export function CHANNEL_MESSAGE_REACTION_ME(channelId: Snowflake, messageId: Snowflake, emoji: string) {
    return `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}/@me`;
}

export function CHANNEL_MESSAGE_REACTION_USER(
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
    userId: Snowflake,
) {
    return `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}/${userId}`;
}

export function CHANNEL_MESSAGE_REACTIONS(channelId: Snowflake, messageId: Snowflake) {
    return `/channels/${channelId}/messages/${messageId}/reactions`;
}

/**
 * @link https://discord.com/developers/docs/resources/channel#get-reactions-query-string-params
 */
export interface GetReactions {
    after?: string;
    limit?: number;
}

export function CHANNEL_MESSAGE_REACTION(
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
    options?: GetReactions,
) {
    let url = `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}?`;

    if (options?.after) url += `after=${options.after}`;
    if (options?.limit) url += `&limit=${options.limit}`;

    return url;
}

export function CHANNEL_MESSAGE_CROSSPOST(channelId: Snowflake, messageId: Snowflake) {
    return `/channels/${channelId}/messages/${messageId}/crosspost`;
}

export function GUILD_MEMBER_ROLE(guildId: Snowflake, memberId: Snowflake, roleId: Snowflake) {
    return `/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
}

export function CHANNEL_WEBHOOKS(channelId: Snowflake) {
    return `/channels/${channelId}/webhooks`;
}

export function THREAD_START_PUBLIC(channelId: Snowflake, messageId: Snowflake) {
    return `/channels/${channelId}/messages/${messageId}/threads`;
}

export function THREAD_START_PRIVATE(channelId: Snowflake) {
    return `/channels/${channelId}/threads`;
}

export function THREAD_ACTIVE(guildId: Snowflake) {
    return `/guilds/${guildId}/threads/active`;
}

export interface ListArchivedThreads {
    before?: number;
    limit?: number;
}

export function THREAD_ME(channelId: Snowflake) {
    return `/channels/${channelId}/thread-members/@me`;
}

export function THREAD_MEMBERS(channelId: Snowflake) {
    return `/channels/${channelId}/thread-members`;
}

export function THREAD_USER(channelId: Snowflake, userId: Snowflake) {
    return `/channels/${channelId}/thread-members/${userId}`;
}

export function THREAD_ARCHIVED(channelId: Snowflake) {
    return `/channels/${channelId}/threads/archived`;
}

export function THREAD_ARCHIVED_PUBLIC(channelId: Snowflake, options?: ListArchivedThreads) {
    let url = `/channels/${channelId}/threads/archived/public?`;

    if (options) {
        if (options.before) url += `before=${new Date(options.before).toISOString()}`;
        if (options.limit) url += `&limit=${options.limit}`;
    }

    return url;
}

export function THREAD_ARCHIVED_PRIVATE(channelId: Snowflake, options?: ListArchivedThreads) {
    let url = `/channels/${channelId}/threads/archived/private?`;

    if (options) {
        if (options.before) url += `before=${new Date(options.before).toISOString()}`;
        if (options.limit) url += `&limit=${options.limit}`;
    }

    return url;
}

export function THREAD_ARCHIVED_PRIVATE_JOINED(channelId: Snowflake, options?: ListArchivedThreads) {
    let url = `/channels/${channelId}/users/@me/threads/archived/private?`;

    if (options) {
        if (options.before) url += `before=${new Date(options.before).toISOString()}`;
        if (options.limit) url += `&limit=${options.limit}`;
    }

    return url;
}

export function FORUM_START(channelId: Snowflake) {
    return `/channels/${channelId}/threads?has_message=true`;
}

export function STAGE_INSTANCES() {
    return `/stage-instances`;
}

export function STAGE_INSTANCE(channelId: Snowflake) {
    return `/stage-instances/${channelId}`;
}

export function APPLICATION_COMMANDS(appId: Snowflake, commandId?: Snowflake) {
    if (commandId) return `/applications/${appId}/commands/${commandId}`;
    return `/applications/${appId}/commands`;
}

export function GUILD_APPLICATION_COMMANDS(appId: Snowflake, guildId: Snowflake, commandId?: Snowflake) {
    if (commandId) return `/applications/${appId}/guilds/${guildId}/commands/${commandId}`;
    return `/applications/${appId}/guilds/${guildId}/commands`;
}

export function GUILD_APPLICATION_COMMANDS_PERMISSIONS(appId: Snowflake, guildId: Snowflake, commandId?: Snowflake) {
    if (commandId) return `/applications/${appId}/guilds/${guildId}/commands/${commandId}/permissions`;
    return `/applications/${appId}/guilds/${guildId}/commands/permissions`;
}

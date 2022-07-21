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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STAGE_INSTANCES = exports.FORUM_START = exports.THREAD_ARCHIVED_PRIVATE_JOINED = exports.THREAD_ARCHIVED_PRIVATE = exports.THREAD_ARCHIVED_PUBLIC = exports.THREAD_ARCHIVED = exports.THREAD_USER = exports.THREAD_MEMBERS = exports.THREAD_ME = exports.THREAD_ACTIVE = exports.THREAD_START_PRIVATE = exports.THREAD_START_PUBLIC = exports.CHANNEL_WEBHOOKS = exports.GUILD_MEMBER_ROLE = exports.CHANNEL_MESSAGE_CROSSPOST = exports.CHANNEL_MESSAGE_REACTION = exports.CHANNEL_MESSAGE_REACTIONS = exports.CHANNEL_MESSAGE_REACTION_USER = exports.CHANNEL_MESSAGE_REACTION_ME = exports.CHANNEL_PINS = exports.CHANNEL_PIN = exports.GUILD_PRUNE = exports.USER_NICK = exports.WEBHOOK = exports.WEBHOOK_TOKEN = exports.WEBHOOK_MESSAGE = exports.WEBHOOK_MESSAGE_ORIGINAL = exports.INTERACTION_ID_TOKEN = exports.GUILD_INVITES = exports.INVITE = exports.AUTO_MODERATION_RULES = exports.GUILDS = exports.GUILD_EMOJI = exports.GUILD_EMOJIS = exports.USER_DM = exports.USER_GUILDS = exports.GUILD_ROLES = exports.GUILD_ROLE = exports.GUILD_BANS = exports.GUILD_BAN = exports.GUILD_MEMBER = exports.CHANNEL_MESSAGE = exports.CHANNEL_MESSAGES = exports.MESSAGE_CREATE_THREAD = exports.CHANNEL_CREATE_THREAD = exports.CHANNEL_TYPING = exports.CHANNEL_INVITES = exports.CHANNEL = exports.GATEWAY_BOT = exports.USER = void 0;
exports.GUILD_PREVIEW = exports.GUILD_VANITY = exports.GUILD_VOICE_REGIONS = exports.GUILD_WIDGET = exports.GUILD_STICKERS = exports.STICKER_PACKS = exports.STICKER = exports.GUILD_APPLICATION_COMMANDS_LOCALIZATIONS = exports.APPLICATION_COMMANDS_LOCALIZATIONS = exports.GUILD_APPLICATION_COMMANDS_PERMISSIONS = exports.GUILD_APPLICATION_COMMANDS = exports.APPLICATION_COMMANDS = exports.STAGE_INSTANCE = void 0;
// cdn endpoints
__exportStar(require("./Cdn"), exports);
function USER(userId) {
    if (!userId) {
        return '/users/@me';
    }
    return `/users/${userId}`;
}
exports.USER = USER;
function GATEWAY_BOT() {
    return '/gateway/bot';
}
exports.GATEWAY_BOT = GATEWAY_BOT;
function CHANNEL(channelId) {
    return `/channels/${channelId}`;
}
exports.CHANNEL = CHANNEL;
function CHANNEL_INVITES(channelId) {
    return `/channels/${channelId}/invites`;
}
exports.CHANNEL_INVITES = CHANNEL_INVITES;
function CHANNEL_TYPING(channelId) {
    return `/channels/${channelId}/typing`;
}
exports.CHANNEL_TYPING = CHANNEL_TYPING;
function CHANNEL_CREATE_THREAD(channelId) {
    return `/channels/${channelId}/threads`;
}
exports.CHANNEL_CREATE_THREAD = CHANNEL_CREATE_THREAD;
function MESSAGE_CREATE_THREAD(channelId, messageId) {
    return `/channels/${channelId}/messages/${messageId}/threads`;
}
exports.MESSAGE_CREATE_THREAD = MESSAGE_CREATE_THREAD;
/** used to send messages */
function CHANNEL_MESSAGES(channelId, options) {
    let url = `/channels/${channelId}/messages?`;
    if (options) {
        if (options.after) {
            url += `after=${options.after}`;
        }
        if (options.before) {
            url += `&before=${options.before}`;
        }
        if (options.around) {
            url += `&around=${options.around}`;
        }
        if (options.limit) {
            url += `&limit=${options.limit}`;
        }
    }
    return url;
}
exports.CHANNEL_MESSAGES = CHANNEL_MESSAGES;
/** used to edit messages */
function CHANNEL_MESSAGE(channelId, messageId) {
    return `/channels/${channelId}/messages/${messageId}`;
}
exports.CHANNEL_MESSAGE = CHANNEL_MESSAGE;
/** used to kick members */
function GUILD_MEMBER(guildId, userId) {
    return `/guilds/${guildId}/members/${userId}`;
}
exports.GUILD_MEMBER = GUILD_MEMBER;
/** used to ban members */
function GUILD_BAN(guildId, userId) {
    return `/guilds/${guildId}/bans/${userId}`;
}
exports.GUILD_BAN = GUILD_BAN;
/** used to unban members */
function GUILD_BANS(guildId, options) {
    let url = `/guilds/${guildId}/bans?`;
    if (options) {
        if (options.limit) {
            url += `limit=${options.limit}`;
        }
        if (options.after) {
            url += `&after=${options.after}`;
        }
        if (options.before) {
            url += `&before=${options.before}`;
        }
    }
    return url;
}
exports.GUILD_BANS = GUILD_BANS;
function GUILD_ROLE(guildId, roleId) {
    return `/guilds/${guildId}/roles/${roleId}`;
}
exports.GUILD_ROLE = GUILD_ROLE;
function GUILD_ROLES(guildId) {
    return `/guilds/${guildId}/roles`;
}
exports.GUILD_ROLES = GUILD_ROLES;
function USER_GUILDS(guildId) {
    if (guildId) {
        return `/users/@me/guilds/${guildId}`;
    }
    return `/users/@me/guilds/`;
}
exports.USER_GUILDS = USER_GUILDS;
function USER_DM() {
    return `/users/@me/channels`;
}
exports.USER_DM = USER_DM;
function GUILD_EMOJIS(guildId) {
    return `/guilds/${guildId}/emojis`;
}
exports.GUILD_EMOJIS = GUILD_EMOJIS;
function GUILD_EMOJI(guildId, emojiId) {
    return `/guilds/${guildId}/emojis/${emojiId}`;
}
exports.GUILD_EMOJI = GUILD_EMOJI;
function GUILDS(guildId) {
    if (guildId) {
        return `/guilds/${guildId}`;
    }
    return `/guilds`;
}
exports.GUILDS = GUILDS;
function AUTO_MODERATION_RULES(guildId, ruleId) {
    if (ruleId) {
        return `/guilds/${guildId}/auto-moderation/rules/${ruleId}`;
    }
    return `/guilds/${guildId}/auto-moderation/rules`;
}
exports.AUTO_MODERATION_RULES = AUTO_MODERATION_RULES;
function INVITE(inviteCode, options) {
    let url = `/invites/${inviteCode}?`;
    if (options) {
        if (options.withCounts) {
            url += `with_counts=${options.withCounts}`;
        }
        if (options.withExpiration) {
            url += `&with_expiration=${options.withExpiration}`;
        }
        if (options.scheduledEventId) {
            url += `&guild_scheduled_event_id=${options.scheduledEventId}`;
        }
    }
    return url;
}
exports.INVITE = INVITE;
function GUILD_INVITES(guildId) {
    return `/guilds/${guildId}/invites`;
}
exports.GUILD_INVITES = GUILD_INVITES;
function INTERACTION_ID_TOKEN(interactionId, token) {
    return `/interactions/${interactionId}/${token}/callback`;
}
exports.INTERACTION_ID_TOKEN = INTERACTION_ID_TOKEN;
function WEBHOOK_MESSAGE_ORIGINAL(webhookId, token, options) {
    let url = `/webhooks/${webhookId}/${token}/messages/@original?`;
    if (options) {
        if (options.threadId) {
            url += `threadId=${options.threadId}`;
        }
    }
    return url;
}
exports.WEBHOOK_MESSAGE_ORIGINAL = WEBHOOK_MESSAGE_ORIGINAL;
function WEBHOOK_MESSAGE(webhookId, token, messageId, options) {
    let url = `/webhooks/${webhookId}/${token}/messages/${messageId}?`;
    if (options) {
        if (options.threadId) {
            url += `threadId=${options.threadId}`;
        }
    }
    return url;
}
exports.WEBHOOK_MESSAGE = WEBHOOK_MESSAGE;
function WEBHOOK_TOKEN(webhookId, token) {
    if (!token) {
        return `/webhooks/${webhookId}`;
    }
    return `/webhooks/${webhookId}/${token}`;
}
exports.WEBHOOK_TOKEN = WEBHOOK_TOKEN;
function WEBHOOK(webhookId, token, options) {
    let url = `/webhooks/${webhookId}/${token}`;
    if (options?.wait) {
        url += `?wait=${options.wait}`;
    }
    if (options?.threadId) {
        url += `?threadId=${options.threadId}`;
    }
    if (options?.wait && options.threadId) {
        url += `?wait=${options.wait}&threadId=${options.threadId}`;
    }
    return url;
}
exports.WEBHOOK = WEBHOOK;
function USER_NICK(guildId) {
    return `/guilds/${guildId}/members/@me`;
}
exports.USER_NICK = USER_NICK;
function GUILD_PRUNE(guildId, options) {
    let url = `/guilds/${guildId}/prune?`;
    if (options?.days) {
        url += `days=${options.days}`;
    }
    if (options?.includeRoles) {
        url += `&include_roles=${options.includeRoles}`;
    }
    return url;
}
exports.GUILD_PRUNE = GUILD_PRUNE;
function CHANNEL_PIN(channelId, messageId) {
    return `/channels/${channelId}/pins/${messageId}`;
}
exports.CHANNEL_PIN = CHANNEL_PIN;
function CHANNEL_PINS(channelId) {
    return `/channels/${channelId}/pins`;
}
exports.CHANNEL_PINS = CHANNEL_PINS;
function CHANNEL_MESSAGE_REACTION_ME(channelId, messageId, emoji) {
    return `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}/@me`;
}
exports.CHANNEL_MESSAGE_REACTION_ME = CHANNEL_MESSAGE_REACTION_ME;
function CHANNEL_MESSAGE_REACTION_USER(channelId, messageId, emoji, userId) {
    return `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}/${userId}`;
}
exports.CHANNEL_MESSAGE_REACTION_USER = CHANNEL_MESSAGE_REACTION_USER;
function CHANNEL_MESSAGE_REACTIONS(channelId, messageId) {
    return `/channels/${channelId}/messages/${messageId}/reactions`;
}
exports.CHANNEL_MESSAGE_REACTIONS = CHANNEL_MESSAGE_REACTIONS;
function CHANNEL_MESSAGE_REACTION(channelId, messageId, emoji, options) {
    let url = `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}?`;
    if (options?.after) {
        url += `after=${options.after}`;
    }
    if (options?.limit) {
        url += `&limit=${options.limit}`;
    }
    return url;
}
exports.CHANNEL_MESSAGE_REACTION = CHANNEL_MESSAGE_REACTION;
function CHANNEL_MESSAGE_CROSSPOST(channelId, messageId) {
    return `/channels/${channelId}/messages/${messageId}/crosspost`;
}
exports.CHANNEL_MESSAGE_CROSSPOST = CHANNEL_MESSAGE_CROSSPOST;
function GUILD_MEMBER_ROLE(guildId, memberId, roleId) {
    return `/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
}
exports.GUILD_MEMBER_ROLE = GUILD_MEMBER_ROLE;
function CHANNEL_WEBHOOKS(channelId) {
    return `/channels/${channelId}/webhooks`;
}
exports.CHANNEL_WEBHOOKS = CHANNEL_WEBHOOKS;
function THREAD_START_PUBLIC(channelId, messageId) {
    return `/channels/${channelId}/messages/${messageId}/threads`;
}
exports.THREAD_START_PUBLIC = THREAD_START_PUBLIC;
function THREAD_START_PRIVATE(channelId) {
    return `/channels/${channelId}/threads`;
}
exports.THREAD_START_PRIVATE = THREAD_START_PRIVATE;
function THREAD_ACTIVE(guildId) {
    return `/guilds/${guildId}/threads/active`;
}
exports.THREAD_ACTIVE = THREAD_ACTIVE;
function THREAD_ME(channelId) {
    return `/channels/${channelId}/thread-members/@me`;
}
exports.THREAD_ME = THREAD_ME;
function THREAD_MEMBERS(channelId) {
    return `/channels/${channelId}/thread-members`;
}
exports.THREAD_MEMBERS = THREAD_MEMBERS;
function THREAD_USER(channelId, userId) {
    return `/channels/${channelId}/thread-members/${userId}`;
}
exports.THREAD_USER = THREAD_USER;
function THREAD_ARCHIVED(channelId) {
    return `/channels/${channelId}/threads/archived`;
}
exports.THREAD_ARCHIVED = THREAD_ARCHIVED;
function THREAD_ARCHIVED_PUBLIC(channelId, options) {
    let url = `/channels/${channelId}/threads/archived/public?`;
    if (options) {
        if (options.before) {
            url += `before=${new Date(options.before).toISOString()}`;
        }
        if (options.limit) {
            url += `&limit=${options.limit}`;
        }
    }
    return url;
}
exports.THREAD_ARCHIVED_PUBLIC = THREAD_ARCHIVED_PUBLIC;
function THREAD_ARCHIVED_PRIVATE(channelId, options) {
    let url = `/channels/${channelId}/threads/archived/private?`;
    if (options) {
        if (options.before) {
            url += `before=${new Date(options.before).toISOString()}`;
        }
        if (options.limit) {
            url += `&limit=${options.limit}`;
        }
    }
    return url;
}
exports.THREAD_ARCHIVED_PRIVATE = THREAD_ARCHIVED_PRIVATE;
function THREAD_ARCHIVED_PRIVATE_JOINED(channelId, options) {
    let url = `/channels/${channelId}/users/@me/threads/archived/private?`;
    if (options) {
        if (options.before) {
            url += `before=${new Date(options.before).toISOString()}`;
        }
        if (options.limit) {
            url += `&limit=${options.limit}`;
        }
    }
    return url;
}
exports.THREAD_ARCHIVED_PRIVATE_JOINED = THREAD_ARCHIVED_PRIVATE_JOINED;
function FORUM_START(channelId) {
    return `/channels/${channelId}/threads?has_message=true`;
}
exports.FORUM_START = FORUM_START;
function STAGE_INSTANCES() {
    return `/stage-instances`;
}
exports.STAGE_INSTANCES = STAGE_INSTANCES;
function STAGE_INSTANCE(channelId) {
    return `/stage-instances/${channelId}`;
}
exports.STAGE_INSTANCE = STAGE_INSTANCE;
function APPLICATION_COMMANDS(appId, commandId) {
    if (commandId) {
        return `/applications/${appId}/commands/${commandId}`;
    }
    return `/applications/${appId}/commands`;
}
exports.APPLICATION_COMMANDS = APPLICATION_COMMANDS;
function GUILD_APPLICATION_COMMANDS(appId, guildId, commandId) {
    if (commandId) {
        return `/applications/${appId}/guilds/${guildId}/commands/${commandId}`;
    }
    return `/applications/${appId}/guilds/${guildId}/commands`;
}
exports.GUILD_APPLICATION_COMMANDS = GUILD_APPLICATION_COMMANDS;
function GUILD_APPLICATION_COMMANDS_PERMISSIONS(appId, guildId, commandId) {
    if (commandId) {
        return `/applications/${appId}/guilds/${guildId}/commands/${commandId}/permissions`;
    }
    return `/applications/${appId}/guilds/${guildId}/commands/permissions`;
}
exports.GUILD_APPLICATION_COMMANDS_PERMISSIONS = GUILD_APPLICATION_COMMANDS_PERMISSIONS;
function APPLICATION_COMMANDS_LOCALIZATIONS(appId, commandId, withLocalizations) {
    let url = `/applications/${appId}/commands/${commandId}?`;
    if (withLocalizations !== undefined) {
        url += `withLocalizations=${withLocalizations}`;
    }
    return url;
}
exports.APPLICATION_COMMANDS_LOCALIZATIONS = APPLICATION_COMMANDS_LOCALIZATIONS;
function GUILD_APPLICATION_COMMANDS_LOCALIZATIONS(appId, guildId, commandId, withLocalizations) {
    let url = `/applications/${appId}/guilds/${guildId}/commands/${commandId}?`;
    if (withLocalizations !== undefined) {
        url += `with_localizations=${withLocalizations}`;
    }
    return url;
}
exports.GUILD_APPLICATION_COMMANDS_LOCALIZATIONS = GUILD_APPLICATION_COMMANDS_LOCALIZATIONS;
function STICKER(id) {
    return `stickers/${id}`;
}
exports.STICKER = STICKER;
function STICKER_PACKS() {
    return `stickers-packs`;
}
exports.STICKER_PACKS = STICKER_PACKS;
function GUILD_STICKERS(guildId, stickerId) {
    if (stickerId) {
        return `/guilds/${guildId}/stickers/${stickerId}`;
    }
    return `/guilds/${guildId}/stickers`;
}
exports.GUILD_STICKERS = GUILD_STICKERS;
/**
 * /guilds/{guildId}/widget
 * @link https://discord.com/developers/docs/resources/guild#get-guild-widget-settings
 */
function GUILD_WIDGET(guildId, options = { get: 'settings' }) {
    let url = `/guilds/${guildId}/widget`;
    if (options.get === 'json') {
        url += '.json';
    }
    else if (options.get === 'image') {
        url += '.png';
    }
    return url;
}
exports.GUILD_WIDGET = GUILD_WIDGET;
/** @link https://discord.com/developers/docs/resources/guild#get-guild-voice-regions */
function GUILD_VOICE_REGIONS(guildId) {
    return `/guilds/${guildId}/regions`;
}
exports.GUILD_VOICE_REGIONS = GUILD_VOICE_REGIONS;
/**
 * @link https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
 * @param guildId The guild
 * @returns Get vanity URL
 */
function GUILD_VANITY(guildId) {
    return `/guilds/${guildId}/vanity-url`;
}
exports.GUILD_VANITY = GUILD_VANITY;
/**
 * @link https://discord.com/developers/docs/resources/guild#get-guild-preview
 * @param guildId The guild
 * @returns Get guild preview url
 */
function GUILD_PREVIEW(guildId) {
    return `/guilds/${guildId}/preview`;
}
exports.GUILD_PREVIEW = GUILD_PREVIEW;

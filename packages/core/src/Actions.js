"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUILD_SCHEDULED_EVENT_USER_ADD = exports.GUILD_SCHEDULED_EVENT_DELETE = exports.GUILD_SCHEDULED_EVENT_UPDATE = exports.GUILD_SCHEDULED_EVENT_CREATE = exports.STAGE_INSTANCE_DELETE = exports.STAGE_INSTANCE_UPDATE = exports.STAGE_INSTANCE_CREATE = exports.INVITE_DELETE = exports.INVITE_CREATE = exports.MESSAGE_REACTION_REMOVE_EMOJI = exports.MESSAGE_REACTION_REMOVE_ALL = exports.MESSAGE_REACTION_REMOVE = exports.MESSAGE_REACTION_ADD = exports.AUTO_MODERATION_ACTION_EXECUTE = exports.AUTO_MODERATION_RULE_DELETE = exports.AUTO_MODERATION_RULE_UPDATE = exports.AUTO_MODERATION_RULE_CREATE = exports.INTEGRATION_DELETE = exports.INTEGRATION_UPDATE = exports.INTEGRATION_CREATE = exports.WEBHOOKS_UPDATE = exports.PRESENCE_UPDATE = exports.USER_UPDATE = exports.CHANNEL_PINS_UPDATE = exports.THREAD_LIST_SYNC = exports.THREAD_MEMBERS_UPDATE = exports.THREAD_MEMBER_UPDATE = exports.THREAD_DELETE = exports.THREAD_UPDATE = exports.THREAD_CREATE = exports.CHANNEL_DELETE = exports.CHANNEL_UPDATE = exports.CHANNEL_CREATE = exports.INTERACTION_CREATE = exports.TYPING_START = exports.GUILD_ROLE_DELETE = exports.GUILD_ROLE_UPDATE = exports.GUILD_ROLE_CREATE = exports.GUILD_EMOJIS_UPDATE = exports.GUILD_BAN_REMOVE = exports.GUILD_BAN_ADD = exports.GUILD_MEMBER_REMOVE = exports.GUILD_MEMBER_UPDATE = exports.GUILD_MEMBER_ADD = exports.GUILD_DELETE = exports.GUILD_CREATE = exports.MESSAGE_DELETE = exports.MESSAGE_UPDATE = exports.MESSAGE_CREATE = exports.READY = void 0;
exports.raw = exports.GUILD_SCHEDULED_EVENT_USER_REMOVE = void 0;
const AutoModerationRule_1 = require("./structures/AutoModerationRule");
const AutoModerationExecution_1 = require("./structures/AutoModerationExecution");
const channels_1 = require("./structures/channels");
const StageInstance_1 = require("./structures/StageInstance");
const GuildScheduledEvent_1 = require("./structures/GuildScheduledEvent");
const Presence_1 = require("./structures/Presence");
const ThreadMember_1 = __importDefault(require("./structures/ThreadMember"));
const Member_1 = __importDefault(require("./structures/Member"));
const Message_1 = __importDefault(require("./structures/Message"));
const User_1 = __importDefault(require("./structures/User"));
const Integration_1 = __importDefault(require("./structures/Integration"));
const guilds_1 = require("./structures/guilds");
const InteractionFactory_1 = __importDefault(require("./structures/interactions/InteractionFactory"));
const Invite_1 = require("./structures/Invite");
const MessageReaction_1 = require("./structures/MessageReaction");
const READY = (session, shardId, payload) => {
    session.applicationId = payload.application.id;
    session.botId = payload.user.id;
    session.emit('ready', { ...payload, user: new User_1.default(session, payload.user) }, shardId);
};
exports.READY = READY;
const MESSAGE_CREATE = (session, _shardId, message) => {
    session.emit('messageCreate', new Message_1.default(session, message));
};
exports.MESSAGE_CREATE = MESSAGE_CREATE;
const MESSAGE_UPDATE = (session, _shardId, new_message) => {
    // message is partial
    if (!new_message.edited_timestamp) {
        const message = {
            // TODO: improve this
            // ...new_message,
            session,
            id: new_message.id,
            guildId: new_message.guild_id,
            channelId: new_message.channel_id,
        };
        // all methods of Message can run on partial messages
        // we aknowledge people that their callback could be partial but giving them all functions of Message
        Object.setPrototypeOf(message, Message_1.default.prototype);
        session.emit('messageUpdate', message);
        return;
    }
    session.emit('messageUpdate', new Message_1.default(session, new_message));
};
exports.MESSAGE_UPDATE = MESSAGE_UPDATE;
const MESSAGE_DELETE = (session, _shardId, { id, channel_id, guild_id }) => {
    session.emit('messageDelete', {
        id,
        channelId: channel_id,
        guildId: guild_id,
    });
};
exports.MESSAGE_DELETE = MESSAGE_DELETE;
const GUILD_CREATE = (session, _shardId, guild) => {
    session.emit('guildCreate', new guilds_1.Guild(session, guild));
};
exports.GUILD_CREATE = GUILD_CREATE;
const GUILD_DELETE = (session, _shardId, guild) => {
    session.emit('guildDelete', { id: guild.id, unavailable: true });
};
exports.GUILD_DELETE = GUILD_DELETE;
const GUILD_MEMBER_ADD = (session, _shardId, member) => {
    session.emit('guildMemberAdd', new Member_1.default(session, member, member.guild_id));
};
exports.GUILD_MEMBER_ADD = GUILD_MEMBER_ADD;
const GUILD_MEMBER_UPDATE = (session, _shardId, member) => {
    session.emit('guildMemberUpdate', new Member_1.default(session, member, member.guild_id));
};
exports.GUILD_MEMBER_UPDATE = GUILD_MEMBER_UPDATE;
const GUILD_MEMBER_REMOVE = (session, _shardId, member) => {
    session.emit('guildMemberRemove', new User_1.default(session, member.user), member.guild_id);
};
exports.GUILD_MEMBER_REMOVE = GUILD_MEMBER_REMOVE;
const GUILD_BAN_ADD = (session, _shardId, data) => {
    session.emit('guildBanAdd', { guildId: data.guild_id, user: data.user });
};
exports.GUILD_BAN_ADD = GUILD_BAN_ADD;
const GUILD_BAN_REMOVE = (session, _shardId, data) => {
    session.emit('guildBanRemove', { guildId: data.guild_id, user: data.user });
};
exports.GUILD_BAN_REMOVE = GUILD_BAN_REMOVE;
const GUILD_EMOJIS_UPDATE = (session, _shardId, data) => {
    session.emit('guildEmojisUpdate', {
        guildId: data.guild_id,
        emojis: data.emojis,
    });
};
exports.GUILD_EMOJIS_UPDATE = GUILD_EMOJIS_UPDATE;
const GUILD_ROLE_CREATE = (session, _shardId, data) => {
    session.emit('guildRoleCreate', {
        guildId: data.guild_id,
        role: data.role,
    });
};
exports.GUILD_ROLE_CREATE = GUILD_ROLE_CREATE;
const GUILD_ROLE_UPDATE = (session, _shardId, data) => {
    session.emit('guildRoleUpdate', {
        guildId: data.guild_id,
        role: data.role,
    });
};
exports.GUILD_ROLE_UPDATE = GUILD_ROLE_UPDATE;
const GUILD_ROLE_DELETE = (session, _shardId, data) => {
    session.emit('guildRoleDelete', {
        guildId: data.guild_id,
        roleId: data.role_id,
    });
};
exports.GUILD_ROLE_DELETE = GUILD_ROLE_DELETE;
const TYPING_START = (session, _shardId, payload) => {
    session.emit('typingStart', {
        channelId: payload.channel_id,
        guildId: payload.guild_id ? payload.guild_id : undefined,
        userId: payload.user_id,
        timestamp: payload.timestamp,
        member: payload.guild_id
            ? new Member_1.default(session, payload.member, payload.guild_id)
            : undefined,
    });
};
exports.TYPING_START = TYPING_START;
const INTERACTION_CREATE = (session, _shardId, interaction) => {
    session.emit('interactionCreate', InteractionFactory_1.default.from(session, interaction));
};
exports.INTERACTION_CREATE = INTERACTION_CREATE;
const CHANNEL_CREATE = (session, _shardId, channel) => {
    session.emit('channelCreate', channels_1.ChannelFactory.from(session, channel));
};
exports.CHANNEL_CREATE = CHANNEL_CREATE;
const CHANNEL_UPDATE = (session, _shardId, channel) => {
    session.emit('channelUpdate', channels_1.ChannelFactory.from(session, channel));
};
exports.CHANNEL_UPDATE = CHANNEL_UPDATE;
const CHANNEL_DELETE = (session, _shardId, channel) => {
    if (!channel.guild_id) {
        return;
    }
    session.emit('channelDelete', new channels_1.GuildChannel(session, channel, channel.guild_id));
};
exports.CHANNEL_DELETE = CHANNEL_DELETE;
const THREAD_CREATE = (session, _shardId, channel) => {
    if (!channel.guild_id) {
        return;
    }
    session.emit('threadCreate', new channels_1.ThreadChannel(session, channel, channel.guild_id));
};
exports.THREAD_CREATE = THREAD_CREATE;
const THREAD_UPDATE = (session, _shardId, channel) => {
    if (!channel.guild_id) {
        return;
    }
    session.emit('threadUpdate', new channels_1.ThreadChannel(session, channel, channel.guild_id));
};
exports.THREAD_UPDATE = THREAD_UPDATE;
const THREAD_DELETE = (session, _shardId, channel) => {
    if (!channel.guild_id) {
        return;
    }
    session.emit('threadDelete', new channels_1.ThreadChannel(session, channel, channel.guild_id));
};
exports.THREAD_DELETE = THREAD_DELETE;
const THREAD_MEMBER_UPDATE = (session, _shardId, payload) => {
    session.emit('threadMemberUpdate', {
        guildId: payload.guild_id,
        id: payload.id,
        userId: payload.user_id,
        joinedAt: payload.joined_at,
        flags: payload.flags,
    });
};
exports.THREAD_MEMBER_UPDATE = THREAD_MEMBER_UPDATE;
const THREAD_MEMBERS_UPDATE = (session, _shardId, payload) => {
    session.emit('threadMembersUpdate', {
        memberCount: payload.member_count,
        addedMembers: payload.added_members
            ? payload.added_members.map((tm) => new ThreadMember_1.default(session, tm))
            : undefined,
        removedMemberIds: payload.removed_member_ids
            ? payload.removed_member_ids
            : undefined,
        guildId: payload.guild_id,
        id: payload.id,
    });
};
exports.THREAD_MEMBERS_UPDATE = THREAD_MEMBERS_UPDATE;
const THREAD_LIST_SYNC = (session, _shardId, payload) => {
    session.emit('threadListSync', {
        guildId: payload.guild_id,
        channelIds: payload.channel_ids ?? [],
        threads: payload.threads.map((channel) => new channels_1.ThreadChannel(session, channel, payload.guild_id)),
        members: payload.members.map((member) => new ThreadMember_1.default(session, member)),
    });
};
exports.THREAD_LIST_SYNC = THREAD_LIST_SYNC;
const CHANNEL_PINS_UPDATE = (session, _shardId, payload) => {
    session.emit('channelPinsUpdate', {
        guildId: payload.guild_id,
        channelId: payload.channel_id,
        lastPinTimestamp: payload.last_pin_timestamp
            ? Date.parse(payload.last_pin_timestamp)
            : undefined,
    });
};
exports.CHANNEL_PINS_UPDATE = CHANNEL_PINS_UPDATE;
const USER_UPDATE = (session, _shardId, payload) => {
    session.emit('userUpdate', new User_1.default(session, payload));
};
exports.USER_UPDATE = USER_UPDATE;
const PRESENCE_UPDATE = (session, _shardId, payload) => {
    session.emit('presenceUpdate', new Presence_1.Presence(session, payload));
};
exports.PRESENCE_UPDATE = PRESENCE_UPDATE;
const WEBHOOKS_UPDATE = (session, _shardId, webhook) => {
    session.emit('webhooksUpdate', {
        guildId: webhook.guild_id,
        channelId: webhook.channel_id,
    });
};
exports.WEBHOOKS_UPDATE = WEBHOOKS_UPDATE;
const INTEGRATION_CREATE = (session, _shardId, payload) => {
    session.emit('integrationCreate', new Integration_1.default(session, payload));
};
exports.INTEGRATION_CREATE = INTEGRATION_CREATE;
const INTEGRATION_UPDATE = (session, _shardId, payload) => {
    session.emit('integrationCreate', new Integration_1.default(session, payload));
};
exports.INTEGRATION_UPDATE = INTEGRATION_UPDATE;
const INTEGRATION_DELETE = (session, _shardId, payload) => {
    session.emit('integrationDelete', {
        id: payload.id,
        guildId: payload.guild_id,
        applicationId: payload.application_id,
    });
};
exports.INTEGRATION_DELETE = INTEGRATION_DELETE;
const AUTO_MODERATION_RULE_CREATE = (session, _shardId, payload) => {
    session.emit('autoModerationRuleCreate', new AutoModerationRule_1.AutoModerationRule(session, payload));
};
exports.AUTO_MODERATION_RULE_CREATE = AUTO_MODERATION_RULE_CREATE;
const AUTO_MODERATION_RULE_UPDATE = (session, _shardId, payload) => {
    session.emit('autoModerationRuleUpdate', new AutoModerationRule_1.AutoModerationRule(session, payload));
};
exports.AUTO_MODERATION_RULE_UPDATE = AUTO_MODERATION_RULE_UPDATE;
const AUTO_MODERATION_RULE_DELETE = (session, _shardId, payload) => {
    session.emit('autoModerationRuleDelete', new AutoModerationRule_1.AutoModerationRule(session, payload));
};
exports.AUTO_MODERATION_RULE_DELETE = AUTO_MODERATION_RULE_DELETE;
const AUTO_MODERATION_ACTION_EXECUTE = (session, _shardId, payload) => {
    session.emit('autoModerationActionExecution', new AutoModerationExecution_1.AutoModerationExecution(session, payload));
};
exports.AUTO_MODERATION_ACTION_EXECUTE = AUTO_MODERATION_ACTION_EXECUTE;
const MESSAGE_REACTION_ADD = (session, _shardId, reaction) => {
    session.emit('messageReactionAdd', (0, MessageReaction_1.NewMessageReactionAdd)(session, reaction));
};
exports.MESSAGE_REACTION_ADD = MESSAGE_REACTION_ADD;
const MESSAGE_REACTION_REMOVE = (session, _shardId, reaction) => {
    session.emit('messageReactionRemove', (0, MessageReaction_1.NewMessageReactionAdd)(session, reaction));
};
exports.MESSAGE_REACTION_REMOVE = MESSAGE_REACTION_REMOVE;
const MESSAGE_REACTION_REMOVE_ALL = (session, _shardId, reaction) => {
    session.emit('messageReactionRemoveAll', (0, MessageReaction_1.NewMessageReactionAdd)(session, reaction));
};
exports.MESSAGE_REACTION_REMOVE_ALL = MESSAGE_REACTION_REMOVE_ALL;
const MESSAGE_REACTION_REMOVE_EMOJI = (session, _shardId, reaction) => {
    session.emit('messageReactionRemoveEmoji', (0, MessageReaction_1.NewMessageReactionAdd)(session, reaction));
};
exports.MESSAGE_REACTION_REMOVE_EMOJI = MESSAGE_REACTION_REMOVE_EMOJI;
const INVITE_CREATE = (session, _shardId, invite) => {
    session.emit('inviteCreate', (0, Invite_1.NewInviteCreate)(session, invite));
};
exports.INVITE_CREATE = INVITE_CREATE;
const INVITE_DELETE = (session, _shardId, data) => {
    session.emit('inviteDelete', {
        channelId: data.channel_id,
        guildId: data.guild_id,
        code: data.code,
    });
};
exports.INVITE_DELETE = INVITE_DELETE;
const STAGE_INSTANCE_CREATE = (session, _shardId, payload) => {
    session.emit('stageInstanceCreate', new StageInstance_1.StageInstance(session, payload));
};
exports.STAGE_INSTANCE_CREATE = STAGE_INSTANCE_CREATE;
const STAGE_INSTANCE_UPDATE = (session, _shardId, payload) => {
    session.emit('stageInstanceUpdate', new StageInstance_1.StageInstance(session, payload));
};
exports.STAGE_INSTANCE_UPDATE = STAGE_INSTANCE_UPDATE;
const STAGE_INSTANCE_DELETE = (session, _shardId, payload) => {
    session.emit('stageInstanceDelete', new StageInstance_1.StageInstance(session, payload));
};
exports.STAGE_INSTANCE_DELETE = STAGE_INSTANCE_DELETE;
const GUILD_SCHEDULED_EVENT_CREATE = (session, _shardId, payload) => {
    session.emit('guildScheduledEventCreate', new GuildScheduledEvent_1.ScheduledEvent(session, payload));
};
exports.GUILD_SCHEDULED_EVENT_CREATE = GUILD_SCHEDULED_EVENT_CREATE;
const GUILD_SCHEDULED_EVENT_UPDATE = (session, _shardId, payload) => {
    session.emit('guildScheduledEventUpdate', new GuildScheduledEvent_1.ScheduledEvent(session, payload));
};
exports.GUILD_SCHEDULED_EVENT_UPDATE = GUILD_SCHEDULED_EVENT_UPDATE;
const GUILD_SCHEDULED_EVENT_DELETE = (session, _shardId, payload) => {
    session.emit('guildScheduledEventDelete', new GuildScheduledEvent_1.ScheduledEvent(session, payload));
};
exports.GUILD_SCHEDULED_EVENT_DELETE = GUILD_SCHEDULED_EVENT_DELETE;
const GUILD_SCHEDULED_EVENT_USER_ADD = (session, _shardId, payload) => {
    session.emit('guildScheduledEventUserAdd', {
        scheduledEventId: payload.guild_scheduled_event_id,
        userId: payload.user_id,
        guildId: payload.guild_id,
    });
};
exports.GUILD_SCHEDULED_EVENT_USER_ADD = GUILD_SCHEDULED_EVENT_USER_ADD;
const GUILD_SCHEDULED_EVENT_USER_REMOVE = (session, _shardId, payload) => {
    session.emit('guildScheduledEventUserRemove', {
        scheduledEventId: payload.guild_scheduled_event_id,
        userId: payload.user_id,
        guildId: payload.guild_id,
    });
};
exports.GUILD_SCHEDULED_EVENT_USER_REMOVE = GUILD_SCHEDULED_EVENT_USER_REMOVE;
const raw = (session, shardId, data) => {
    session.emit('raw', data, shardId);
};
exports.raw = raw;

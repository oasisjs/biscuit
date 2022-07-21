import type { DiscordAutoModerationActionExecution, DiscordAutoModerationRule, DiscordChannel, DiscordChannelPinsUpdate, DiscordEmoji, DiscordGuild, DiscordGuildBanAddRemove, DiscordGuildEmojisUpdate, DiscordGuildMemberAdd, DiscordGuildMemberRemove, DiscordGuildMemberUpdate, DiscordGuildRoleCreate, DiscordGuildRoleDelete, DiscordGuildRoleUpdate, DiscordIntegration, DiscordIntegrationDelete, DiscordInteraction, DiscordInviteCreate, DiscordInviteDelete, DiscordMessage, DiscordMessageDelete, DiscordMessageReactionAdd, DiscordMessageReactionRemove, DiscordMessageReactionRemoveAll, DiscordMessageReactionRemoveEmoji, DiscordPresenceUpdate, DiscordReady, DiscordRole, DiscordScheduledEvent, DiscordScheduledEventUserAdd, DiscordScheduledEventUserRemove, DiscordThreadListSync, DiscordThreadMembersUpdate, DiscordThreadMemberUpdate, DiscordTypingStart, DiscordUser, DiscordWebhookUpdate } from '@biscuit/api-types';
import type { Snowflake } from './Snowflake';
import type { Session } from './Session';
import type { Interaction } from './structures/interactions/InteractionFactory';
import { AutoModerationRule } from './structures/AutoModerationRule';
import { AutoModerationExecution } from './structures/AutoModerationExecution';
import { type Channel, GuildChannel, ThreadChannel } from './structures/channels';
import { type DiscordStageInstanceB, StageInstance } from './structures/StageInstance';
import { ScheduledEvent } from './structures/GuildScheduledEvent';
import { Presence } from './structures/Presence';
import ThreadMember from './structures/ThreadMember';
import Member from './structures/Member';
import Message from './structures/Message';
import User from './structures/User';
import Integration from './structures/Integration';
import { Guild } from './structures/guilds';
import type { InviteCreate } from './structures/Invite';
import type { MessageReactionAdd, MessageReactionRemove, MessageReactionRemoveAll, MessageReactionRemoveEmoji } from './structures/MessageReaction';
export declare type RawHandler<T> = (...args: [Session, number, T]) => void;
export declare type Handler<T extends [obj?: unknown, ddy?: unknown]> = (...args: T) => unknown;
export declare const READY: RawHandler<DiscordReady>;
export declare const MESSAGE_CREATE: RawHandler<DiscordMessage>;
export declare const MESSAGE_UPDATE: RawHandler<DiscordMessage>;
export declare const MESSAGE_DELETE: RawHandler<DiscordMessageDelete>;
export declare const GUILD_CREATE: RawHandler<DiscordGuild>;
export declare const GUILD_DELETE: RawHandler<DiscordGuild>;
export declare const GUILD_MEMBER_ADD: RawHandler<DiscordGuildMemberAdd>;
export declare const GUILD_MEMBER_UPDATE: RawHandler<DiscordGuildMemberUpdate>;
export declare const GUILD_MEMBER_REMOVE: RawHandler<DiscordGuildMemberRemove>;
export declare const GUILD_BAN_ADD: RawHandler<DiscordGuildBanAddRemove>;
export declare const GUILD_BAN_REMOVE: RawHandler<DiscordGuildBanAddRemove>;
export declare const GUILD_EMOJIS_UPDATE: RawHandler<DiscordGuildEmojisUpdate>;
export declare const GUILD_ROLE_CREATE: RawHandler<DiscordGuildRoleCreate>;
export declare const GUILD_ROLE_UPDATE: RawHandler<DiscordGuildRoleUpdate>;
export declare const GUILD_ROLE_DELETE: RawHandler<DiscordGuildRoleDelete>;
export declare const TYPING_START: RawHandler<DiscordTypingStart>;
export declare const INTERACTION_CREATE: RawHandler<DiscordInteraction>;
export declare const CHANNEL_CREATE: RawHandler<DiscordChannel>;
export declare const CHANNEL_UPDATE: RawHandler<DiscordChannel>;
export declare const CHANNEL_DELETE: RawHandler<DiscordChannel>;
export declare const THREAD_CREATE: RawHandler<DiscordChannel>;
export declare const THREAD_UPDATE: RawHandler<DiscordChannel>;
export declare const THREAD_DELETE: RawHandler<DiscordChannel>;
export declare const THREAD_MEMBER_UPDATE: RawHandler<DiscordThreadMemberUpdate>;
export declare const THREAD_MEMBERS_UPDATE: RawHandler<DiscordThreadMembersUpdate>;
export declare const THREAD_LIST_SYNC: RawHandler<DiscordThreadListSync>;
export declare const CHANNEL_PINS_UPDATE: RawHandler<DiscordChannelPinsUpdate>;
export declare const USER_UPDATE: RawHandler<DiscordUser>;
export declare const PRESENCE_UPDATE: RawHandler<DiscordPresenceUpdate>;
export declare const WEBHOOKS_UPDATE: RawHandler<DiscordWebhookUpdate>;
export declare const INTEGRATION_CREATE: RawHandler<DiscordIntegration & {
    guildId?: Snowflake;
}>;
export declare const INTEGRATION_UPDATE: RawHandler<DiscordIntegration & {
    guildId?: Snowflake;
}>;
export declare const INTEGRATION_DELETE: RawHandler<DiscordIntegrationDelete>;
export declare const AUTO_MODERATION_RULE_CREATE: RawHandler<DiscordAutoModerationRule>;
export declare const AUTO_MODERATION_RULE_UPDATE: RawHandler<DiscordAutoModerationRule>;
export declare const AUTO_MODERATION_RULE_DELETE: RawHandler<DiscordAutoModerationRule>;
export declare const AUTO_MODERATION_ACTION_EXECUTE: RawHandler<DiscordAutoModerationActionExecution>;
export declare const MESSAGE_REACTION_ADD: RawHandler<DiscordMessageReactionAdd>;
export declare const MESSAGE_REACTION_REMOVE: RawHandler<DiscordMessageReactionRemove>;
export declare const MESSAGE_REACTION_REMOVE_ALL: RawHandler<DiscordMessageReactionRemoveAll>;
export declare const MESSAGE_REACTION_REMOVE_EMOJI: RawHandler<DiscordMessageReactionRemoveEmoji>;
export declare const INVITE_CREATE: RawHandler<DiscordInviteCreate>;
export declare const INVITE_DELETE: RawHandler<DiscordInviteDelete>;
export declare const STAGE_INSTANCE_CREATE: RawHandler<DiscordStageInstanceB>;
export declare const STAGE_INSTANCE_UPDATE: RawHandler<DiscordStageInstanceB>;
export declare const STAGE_INSTANCE_DELETE: RawHandler<DiscordStageInstanceB>;
export declare const GUILD_SCHEDULED_EVENT_CREATE: RawHandler<DiscordScheduledEvent>;
export declare const GUILD_SCHEDULED_EVENT_UPDATE: RawHandler<DiscordScheduledEvent>;
export declare const GUILD_SCHEDULED_EVENT_DELETE: RawHandler<DiscordScheduledEvent>;
export declare const GUILD_SCHEDULED_EVENT_USER_ADD: RawHandler<DiscordScheduledEventUserAdd>;
export declare const GUILD_SCHEDULED_EVENT_USER_REMOVE: RawHandler<DiscordScheduledEventUserRemove>;
export declare const raw: RawHandler<unknown>;
export interface Ready extends Omit<DiscordReady, 'user'> {
    user: User;
}
export interface Events {
    ready: Handler<[Ready, number]>;
    messageCreate: Handler<[Message]>;
    messageUpdate: Handler<[Partial<Message>]>;
    messageDelete: Handler<[
        {
            id: Snowflake;
            channelId: Snowflake;
            guildId?: Snowflake;
        }
    ]>;
    messageReactionAdd: Handler<[MessageReactionAdd]>;
    messageReactionRemove: Handler<[MessageReactionRemove]>;
    messageReactionRemoveAll: Handler<[MessageReactionRemoveAll]>;
    messageReactionRemoveEmoji: Handler<[MessageReactionRemoveEmoji]>;
    guildCreate: Handler<[Guild]>;
    guildDelete: Handler<[{
        id: Snowflake;
        unavailable: boolean;
    }]>;
    guildMemberAdd: Handler<[Member]>;
    guildMemberUpdate: Handler<[Member]>;
    guildMemberRemove: Handler<[User, Snowflake]>;
    guildBanAdd: Handler<[{
        guildId: Snowflake;
        user: DiscordUser;
    }]>;
    guildBanRemove: Handler<[{
        guildId: Snowflake;
        user: DiscordUser;
    }]>;
    guildEmojisUpdate: Handler<[
        {
            guildId: Snowflake;
            emojis: DiscordEmoji[];
        }
    ]>;
    guildRoleCreate: Handler<[{
        guildId: Snowflake;
        role: DiscordRole;
    }]>;
    guildRoleUpdate: Handler<[{
        guildId: Snowflake;
        role: DiscordRole;
    }]>;
    guildRoleDelete: Handler<[{
        guildId: Snowflake;
        roleId: Snowflake;
    }]>;
    typingStart: Handler<[
        {
            channelId: Snowflake;
            guildId?: Snowflake;
            userId: Snowflake;
            timestamp: number;
            member?: Member;
        }
    ]>;
    channelCreate: Handler<[Channel]>;
    channelUpdate: Handler<[Channel]>;
    channelDelete: Handler<[GuildChannel]>;
    channelPinsUpdate: Handler<[
        {
            guildId?: Snowflake;
            channelId: Snowflake;
            lastPinTimestamp?: number;
        }
    ]>;
    threadCreate: Handler<[ThreadChannel]>;
    threadUpdate: Handler<[ThreadChannel]>;
    threadDelete: Handler<[ThreadChannel]>;
    threadListSync: Handler<[
        {
            guildId: Snowflake;
            channelIds: Snowflake[];
            threads: ThreadChannel[];
            members: ThreadMember[];
        }
    ]>;
    threadMemberUpdate: Handler<[
        {
            id: Snowflake;
            userId: Snowflake;
            guildId: Snowflake;
            joinedAt: string;
            flags: number;
        }
    ]>;
    threadMembersUpdate: Handler<[
        {
            id: Snowflake;
            memberCount: number;
            addedMembers?: ThreadMember[];
            guildId: Snowflake;
            removedMemberIds?: Snowflake[];
        }
    ]>;
    interactionCreate: Handler<[Interaction]>;
    integrationCreate: Handler<[Integration]>;
    integrationUpdate: Handler<[Integration]>;
    integrationDelete: Handler<[
        {
            id: Snowflake;
            guildId?: Snowflake;
            applicationId?: Snowflake;
        }
    ]>;
    inviteCreate: Handler<[InviteCreate]>;
    inviteDelete: Handler<[
        {
            channelId: string;
            guildId?: string;
            code: string;
        }
    ]>;
    autoModerationRuleCreate: Handler<[AutoModerationRule]>;
    autoModerationRuleUpdate: Handler<[AutoModerationRule]>;
    autoModerationRuleDelete: Handler<[AutoModerationRule]>;
    autoModerationActionExecution: Handler<[AutoModerationExecution]>;
    stageInstanceCreate: Handler<[StageInstance]>;
    stageInstanceUpdate: Handler<[StageInstance]>;
    stageInstanceDelete: Handler<[StageInstance]>;
    guildScheduledEventCreate: Handler<[ScheduledEvent]>;
    guildScheduledEventUpdate: Handler<[ScheduledEvent]>;
    guildScheduledEventDelete: Handler<[ScheduledEvent]>;
    guildScheduledEventUserAdd: Handler<[
        {
            scheduledEventId: Snowflake;
            userId: Snowflake;
            guildId: Snowflake;
        }
    ]>;
    guildScheduledEventUserRemove: Handler<[
        {
            scheduledEventId: Snowflake;
            userId: Snowflake;
            guildId: Snowflake;
        }
    ]>;
    raw: Handler<[{
        t: string;
        d: unknown;
    }, number]>;
    webhooksUpdate: Handler<[{
        guildId: Snowflake;
        channelId: Snowflake;
    }]>;
    userUpdate: Handler<[User]>;
    presenceUpdate: Handler<[Presence]>;
    debug: Handler<[string]>;
}

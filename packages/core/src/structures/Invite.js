"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invite = exports.NewInviteCreate = void 0;
const channels_1 = require("./channels");
const Member_1 = require("./Member");
const guilds_1 = require("./guilds");
const User_1 = __importDefault(require("./User"));
const Application_1 = __importDefault(require("./Application"));
function NewInviteCreate(session, invite) {
    return {
        channelId: invite.channel_id,
        code: invite.code,
        createdAt: invite.created_at,
        guildId: invite.guild_id,
        inviter: invite.inviter ? new User_1.default(session, invite.inviter) : undefined,
        maxAge: invite.max_age,
        maxUses: invite.max_uses,
        targetType: invite.target_type,
        targetUser: invite.target_user
            ? new User_1.default(session, invite.target_user)
            : undefined,
        targetApplication: invite.target_application &&
            new Application_1.default(session, invite.target_application),
        temporary: invite.temporary,
        uses: invite.uses,
    };
}
exports.NewInviteCreate = NewInviteCreate;
/**
 * @link https://discord.com/developers/docs/resources/invite#invite-object
 */
class Invite {
    constructor(session, data) {
        this.session = session;
        this.guild = data.guild
            ? new guilds_1.InviteGuild(session, data.guild)
            : undefined;
        this.approximateMemberCount = data.approximate_member_count
            ? data.approximate_member_count
            : undefined;
        this.approximatePresenceCount = data.approximate_presence_count
            ? data.approximate_presence_count
            : undefined;
        this.code = data.code;
        this.expiresAt = data.expires_at
            ? Number.parseInt(data.expires_at)
            : undefined;
        this.inviter = data.inviter
            ? new User_1.default(session, data.inviter)
            : undefined;
        this.targetUser = data.target_user
            ? new User_1.default(session, data.target_user)
            : undefined;
        this.targetApplication = data.target_application
            ? new Application_1.default(session, data.target_application)
            : undefined;
        this.targetType = data.target_type;
        if (data.channel) {
            const guildId = data.guild && data.guild?.id ? data.guild.id : '';
            this.channel = new channels_1.GuildChannel(session, data.channel, guildId);
        }
        if (data.guild_scheduled_event) {
            this.guildScheduledEvent = {
                id: data.guild_scheduled_event.id,
                guildId: data.guild_scheduled_event.guild_id,
                channelId: data.guild_scheduled_event.channel_id
                    ? data.guild_scheduled_event.channel_id
                    : undefined,
                creatorId: data.guild_scheduled_event.creator_id
                    ? data.guild_scheduled_event.creator_id
                    : undefined,
                name: data.guild_scheduled_event.name,
                description: data.guild_scheduled_event.description
                    ? data.guild_scheduled_event.description
                    : undefined,
                scheduledStartTime: data.guild_scheduled_event.scheduled_start_time,
                scheduledEndTime: data.guild_scheduled_event.scheduled_end_time
                    ? data.guild_scheduled_event.scheduled_end_time
                    : undefined,
                privacyLevel: data.guild_scheduled_event.privacy_level,
                status: data.guild_scheduled_event.status,
                entityType: data.guild_scheduled_event.entity_type,
                entityId: data.guild ? data.guild.id : undefined,
                entityMetadata: data.guild_scheduled_event.entity_metadata
                    ? data.guild_scheduled_event.entity_metadata
                    : undefined,
                creator: data.guild_scheduled_event.creator
                    ? new User_1.default(session, data.guild_scheduled_event.creator)
                    : undefined,
                userCount: data.guild_scheduled_event.user_count
                    ? data.guild_scheduled_event.user_count
                    : undefined,
                image: data.guild_scheduled_event.image
                    ? data.guild_scheduled_event.image
                    : undefined,
            };
        }
        if (data.stage_instance) {
            const guildId = data.guild && data.guild?.id ? data.guild.id : '';
            this.stageInstance = {
                members: data.stage_instance.members.map((m) => new Member_1.Member(session, m, guildId)),
                participantCount: data.stage_instance.participant_count,
                speakerCount: data.stage_instance.speaker_count,
                topic: data.stage_instance.topic,
            };
        }
    }
    session;
    guild;
    approximateMemberCount;
    approximatePresenceCount;
    code;
    expiresAt;
    inviter;
    targetUser;
    targetType;
    channel;
    stageInstance;
    guildScheduledEvent;
    targetApplication;
    async delete() {
        await guilds_1.Guild.prototype.deleteInvite.call(this.guild, this.code);
        return this;
    }
}
exports.Invite = Invite;
exports.default = Invite;

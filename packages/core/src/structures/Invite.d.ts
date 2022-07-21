import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
import type { DiscordInvite, DiscordInviteCreate, DiscordScheduledEventEntityMetadata, ScheduledEventEntityType, ScheduledEventPrivacyLevel, ScheduledEventStatus, TargetTypes } from '@biscuit/api-types';
import { GuildChannel } from './channels';
import { Member } from './Member';
import { InviteGuild } from './guilds';
import User from './User';
import Application from './Application';
export interface InviteStageInstance {
    /** The members speaking in the Stage */
    members: Partial<Member>[];
    /** The number of users in the Stage */
    participantCount: number;
    /** The number of users speaking in the Stage */
    speakerCount: number;
    /** The topic of the Stage instance (1-120 characters) */
    topic: string;
}
export interface InviteScheduledEvent {
    id: Snowflake;
    guildId: string;
    channelId?: string;
    creatorId?: string;
    name: string;
    description?: string;
    scheduledStartTime: string;
    scheduledEndTime?: string;
    privacyLevel: ScheduledEventPrivacyLevel;
    status: ScheduledEventStatus;
    entityType: ScheduledEventEntityType;
    entityId?: string;
    entityMetadata?: DiscordScheduledEventEntityMetadata;
    creator?: User;
    userCount?: number;
    image?: string;
}
export interface InviteCreate {
    channelId: string;
    code: string;
    createdAt: string;
    guildId?: string;
    inviter?: User;
    maxAge: number;
    maxUses: number;
    targetType: TargetTypes;
    targetUser?: User;
    targetApplication?: Partial<Application>;
    temporary: boolean;
    uses: number;
}
export declare function NewInviteCreate(session: Session, invite: DiscordInviteCreate): InviteCreate;
/**
 * @link https://discord.com/developers/docs/resources/invite#invite-object
 */
export declare class Invite {
    constructor(session: Session, data: DiscordInvite);
    readonly session: Session;
    guild?: InviteGuild;
    approximateMemberCount?: number;
    approximatePresenceCount?: number;
    code: string;
    expiresAt?: number;
    inviter?: User;
    targetUser?: User;
    targetType?: TargetTypes;
    channel?: Partial<GuildChannel>;
    stageInstance?: InviteStageInstance;
    guildScheduledEvent?: InviteScheduledEvent;
    targetApplication?: Partial<Application>;
    delete(): Promise<Invite>;
}
export default Invite;

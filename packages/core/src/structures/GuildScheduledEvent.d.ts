import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import { PrivacyLevels } from './StageInstance';
import type { DiscordScheduledEvent, DiscordScheduledEventEntityMetadata, ScheduledEventEntityType, ScheduledEventStatus } from '@biscuit/api-types';
import User from './User';
export declare class ScheduledEvent implements Model {
    constructor(session: Session, data: DiscordScheduledEvent);
    session: Session;
    id: Snowflake;
    guildId: Snowflake;
    channelId: Snowflake | null;
    creatorId?: Snowflake;
    name: string;
    description?: string;
    scheduledStartTime: string;
    scheduledEndTime: string | null;
    privacyLevel: PrivacyLevels;
    status: ScheduledEventStatus;
    entityType: ScheduledEventEntityType;
    entityMetadata?: DiscordScheduledEventEntityMetadata;
    creator?: User;
    userCount?: number;
    image?: string;
}

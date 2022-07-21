import type { Model } from './Base';
import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
import type { DiscordStageInstance as DiscordAutoClosingStageInstance } from '@biscuit/api-types';
export interface DiscordStageInstanceB extends DiscordAutoClosingStageInstance {
    privacy_level: PrivacyLevels;
    discoverable_disabled: boolean;
    guild_scheduled_event_id: Snowflake;
}
export declare enum PrivacyLevels {
    Public = 1,
    GuildOnly = 2
}
export declare class StageInstance implements Model {
    constructor(session: Session, data: DiscordStageInstanceB);
    readonly session: Session;
    readonly id: Snowflake;
    channelId: Snowflake;
    guildId: Snowflake;
    topic: string;
    privacyLevel: PrivacyLevels;
    discoverableDisabled: boolean;
    guildScheduledEventId: Snowflake;
    edit(options: {
        topic?: string;
        privacyLevel?: PrivacyLevels;
    }): Promise<StageInstance>;
    delete(): Promise<void>;
}
export default StageInstance;

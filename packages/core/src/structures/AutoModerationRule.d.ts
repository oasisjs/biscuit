import type { AutoModerationActionType, AutoModerationEventTypes, AutoModerationTriggerTypes, DiscordAutoModerationRule, DiscordAutoModerationRuleTriggerMetadataPresets } from '@biscuit/api-types';
import type { Model } from './Base';
import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
export interface AutoModerationRuleTriggerMetadata {
    keywordFilter?: string[];
    presets?: DiscordAutoModerationRuleTriggerMetadataPresets[];
}
export interface ActionMetadata {
    channelId: Snowflake;
    durationSeconds: number;
}
export interface AutoModerationAction {
    type: AutoModerationActionType;
    metadata: ActionMetadata;
}
export declare class AutoModerationRule implements Model {
    constructor(session: Session, data: DiscordAutoModerationRule);
    session: Session;
    id: Snowflake;
    guildId: Snowflake;
    name: string;
    creatorId: Snowflake;
    eventType: AutoModerationEventTypes;
    triggerType: AutoModerationTriggerTypes;
    triggerMetadata: AutoModerationRuleTriggerMetadata;
    actions: AutoModerationAction[];
    enabled: boolean;
    exemptRoles: Snowflake[];
    exemptChannels: Snowflake[];
}

import type { AutoModerationTriggerTypes, DiscordAutoModerationActionExecution } from '@biscuit/api-types';
import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
import type { AutoModerationAction } from './AutoModerationRule';
export declare class AutoModerationExecution {
    constructor(session: Session, data: DiscordAutoModerationActionExecution);
    session: Session;
    guildId: Snowflake;
    action: AutoModerationAction;
    ruleId: Snowflake;
    ruleTriggerType: AutoModerationTriggerTypes;
    userId: Snowflake;
    channelId?: Snowflake;
    messageId?: Snowflake;
    alertSystemMessageId?: Snowflake;
    content?: string;
    matchedKeyword?: string;
    matched_content?: string;
}

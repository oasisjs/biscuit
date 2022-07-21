import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type { DiscordIntegration, IntegrationExpireBehaviors } from '../../discordeno/mod';
import User from './User';
export interface IntegrationAccount {
    id: Snowflake;
    name: string;
}
export interface IntegrationApplication {
    id: Snowflake;
    name: string;
    icon?: string;
    description: string;
    bot?: User;
}
export declare class Integration implements Model {
    constructor(session: Session, data: DiscordIntegration & {
        guild_id?: Snowflake;
    });
    readonly session: Session;
    id: Snowflake;
    guildId?: Snowflake;
    name: string;
    type: 'twitch' | 'youtube' | 'discord';
    enabled?: boolean;
    syncing?: boolean;
    roleId?: string;
    enableEmoticons?: boolean;
    expireBehavior?: IntegrationExpireBehaviors;
    expireGracePeriod?: number;
    syncedAt?: string;
    subscriberCount?: number;
    revoked?: boolean;
    user?: User;
    account: IntegrationAccount;
    application?: IntegrationApplication;
}
export default Integration;

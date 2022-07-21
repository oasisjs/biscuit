import type { ActivityTypes, DiscordActivityButton, DiscordActivitySecrets, DiscordClientStatus, DiscordPresenceUpdate } from '../../discordeno/mod';
import type { Session } from '../Session';
import { User } from './User';
import { Snowflake } from '../Snowflake';
import type { ComponentEmoji } from '../Util';
export interface ActivityAssets {
    largeImage?: string;
    largeText?: string;
    smallImage?: string;
    smallText?: string;
}
export interface Activities {
    name: string;
    type: ActivityTypes;
    url?: string;
    createdAt: number;
    timestamps?: {
        start?: number;
        end?: number;
    };
    applicationId?: Snowflake;
    details?: string;
    state?: string;
    emoji?: ComponentEmoji;
    party?: {
        id?: string;
        size?: number[];
    };
    assets?: ActivityAssets;
    secrets?: DiscordActivitySecrets;
    instance?: boolean;
    flags?: number;
    buttons?: DiscordActivityButton;
}
export declare enum StatusTypes {
    online = 0,
    dnd = 1,
    idle = 2,
    invisible = 3,
    offline = 4
}
export declare class Presence {
    constructor(session: Session, data: DiscordPresenceUpdate);
    session: Session;
    user: User;
    guildId: Snowflake;
    status: StatusTypes;
    activities: Activities[];
    clientStatus: DiscordClientStatus;
}

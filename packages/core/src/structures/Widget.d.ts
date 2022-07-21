import type { DiscordGuildWidget } from '@biscuit/api-types';
import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
import type { Model } from './Base';
import type { PartialChannel } from './channels';
export interface WidgetMember {
    id?: string;
    username: string;
    avatar?: string | null;
    status: string;
    avatarURL: string;
}
export declare class Widget implements Model {
    constructor(session: Session, data: DiscordGuildWidget);
    session: Session;
    id: Snowflake;
    name: string;
    instantInvite?: string;
    channels: PartialChannel[];
    members: WidgetMember[];
    presenceCount: number;
}

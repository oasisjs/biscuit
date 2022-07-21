import { DiscordGuildWidget } from "../../api-types/discord";
import { Session } from "../Session";
import { Snowflake } from "../Snowflake";
import { Model } from "./Base";
import { PartialChannel } from './channels';
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

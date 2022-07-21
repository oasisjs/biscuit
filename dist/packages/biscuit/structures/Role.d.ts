import type { Model } from './Base';
import type { DiscordRole } from '../../discordeno/mod';
import type { Session } from '../Session';
import { Snowflake } from '../Snowflake';
import { type ModifyGuildRole } from './guilds';
import Permissions from './Permissions';
export declare class Role implements Model {
    constructor(session: Session, data: DiscordRole, guildId: Snowflake);
    readonly session: Session;
    readonly id: Snowflake;
    readonly guildId: Snowflake;
    hoist: boolean;
    iconHash?: bigint;
    color: number;
    name: string;
    unicodeEmoji?: string;
    mentionable: boolean;
    managed: boolean;
    permissions: Permissions;
    get createdTimestamp(): number;
    get createdAt(): Date;
    get hexColor(): string;
    delete(): Promise<void>;
    edit(options: ModifyGuildRole): Promise<Role>;
    add(memberId: Snowflake, options?: {
        reason?: string;
    }): Promise<void>;
    remove(memberId: Snowflake, options?: {
        reason?: string;
    }): Promise<void>;
    toString(): string;
}
export default Role;

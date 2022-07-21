import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type { DiscordMemberWithUser } from '../../discordeno/mod';
import type { ImageFormat, ImageSize } from '../Util';
import type { CreateGuildBan, ModifyGuildMember } from './guilds';
import User from './User';
/**
 * @link https://discord.com/developers/docs/resources/guild#guild-member-object
 * Represents a guild member
 */
export declare class Member implements Model {
    constructor(session: Session, data: DiscordMemberWithUser, guildId: Snowflake);
    /** the session that instantiated this member */
    readonly session: Session;
    /** the user this guild member represents */
    user: User;
    /** the choosen guild id */
    guildId: Snowflake;
    /** the member's guild avatar hash optimized as a bigint */
    avatarHash?: bigint;
    /** this user's guild nickname */
    nickname?: string;
    /** when the user started boosting the guild */
    premiumSince?: number;
    /** when the user joined the guild */
    joinedTimestamp: number;
    /** array of role object ids */
    roles: Snowflake[];
    /** whether the user is deafened in voice channels */
    deaf: boolean;
    /** whether the user is muted in voice channels */
    mute: boolean;
    /** whether the user has not yet passed the guild's Membership Screening requirements */
    pending: boolean;
    /** when the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out */
    communicationDisabledUntilTimestamp?: number;
    /** shorthand to User.id */
    get id(): Snowflake;
    /** gets the nickname or the username */
    get nicknameOrUsername(): string;
    /** gets the joinedAt timestamp as a Date */
    get joinedAt(): Date;
    /** bans a member from this guild and delete previous messages sent by the member */
    ban(options: CreateGuildBan): Promise<Member>;
    /** kicks a member from this guild */
    kick(options: {
        reason?: string;
    }): Promise<Member>;
    /** unbans a member from this guild */
    unban(): Promise<void>;
    /** edits member's nickname, roles, etc */
    edit(options: ModifyGuildMember): Promise<Member>;
    /** adds a role to this member */
    addRole(roleId: Snowflake, options?: {
        reason?: string;
    }): Promise<void>;
    /** removes a role from this member */
    removeRole(roleId: Snowflake, options?: {
        reason?: string;
    }): Promise<void>;
    /** gets the members's guild avatar, not to be confused with Member.user.avatarURL() */
    avatarURL(options?: {
        format?: ImageFormat;
        size?: ImageSize;
    }): string;
    toString(): string;
}
export default Member;

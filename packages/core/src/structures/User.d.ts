import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type { DiscordUser, PremiumTypes, UserFlags } from '@biscuit/api-types';
import type { ImageFormat, ImageSize } from '../Util';
/**
 * @link https://discord.com/developers/docs/resources/user#user-object
 * Represents a user
 */
export declare class User implements Model {
    constructor(session: Session, data: DiscordUser);
    /** the session that instantiated this User */
    readonly session: Session;
    /** the user's id */
    readonly id: Snowflake;
    /** the user's username, not unique across the platform */
    username: string;
    /** the user's 4-digit discord-tag */
    discriminator: string;
    /** the user's avatar hash optimized as a bigint */
    avatarHash?: bigint;
    /** the user's banner color encoded as an integer representation of hexadecimal color code */
    accentColor?: number;
    /** whether the user belongs to an OAuth2 application */
    bot: boolean;
    /** whether the user is an Official Discord System user (part of the urgent message system) */
    system: boolean;
    /** the user's banner hash optimized as a bigint */
    banner?: bigint;
    /** whether the user has two factor enabled on their account */
    mfaEnabled: boolean;
    /** the user's chosen language option */
    locale?: string;
    /** the user's email */
    email?: string;
    /** the flags on a user's account */
    flags?: UserFlags;
    /** whether the email on this account has been verified */
    verified?: boolean;
    /** the type of Nitro subscription on a user's account */
    premiumType?: PremiumTypes;
    /** the public flags on a user's account */
    publicFlags?: UserFlags;
    /** gets the user's username#discriminator */
    get tag(): string;
    /** fetches this user */
    fetch(): Promise<User | undefined>;
    /** gets the user's avatar */
    avatarURL(options?: {
        format?: ImageFormat;
        size?: ImageSize;
    }): string;
    toString(): string;
}
export default User;

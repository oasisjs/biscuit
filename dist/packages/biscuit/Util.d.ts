import type { ButtonBuilder, InputTextBuilder, SelectMenuBuilder } from './mod';
import type { Permissions } from './structures/Permissions';
import type { Snowflake } from './Snowflake';
export interface SymCache {
    readonly cache: symbol;
}
export declare enum MessageFlags {
    /** this message has been published to subscribed channels (via Channel Following) */
    CrossPosted = 1,
    /** this message originated from a message in another channel (via Channel Following) */
    IsCrosspost = 2,
    /** do not include any embeds when serializing this message */
    SupressEmbeds = 4,
    /** the source message for this crosspost has been deleted (via Channel Following) */
    SourceMessageDeleted = 8,
    /** this message came from the urgent message system */
    Urgent = 16,
    /** this message has an associated thread, with the same id as the message */
    HasThread = 32,
    /** this message is only visible to the user who invoked the Interaction */
    Ephemeral = 64,
    /** this message is an Interaction Response and the bot is "thinking" */
    Loading = 128,
    /** this message failed to mention some roles and add their members to the thread */
    FailedToMentionSomeRolesInThread = 256
}
export declare type ComponentBuilder = InputTextBuilder | SelectMenuBuilder | ButtonBuilder;
/** *
 * Utility type
 */
export declare type ComponentEmoji = {
    id: Snowflake;
    name: string;
    animated?: boolean;
};
/**
 * Utility type
 */
export interface PermissionsOverwrites {
    id: Snowflake;
    type: 0 | 1;
    allow: Permissions;
    deny: Permissions;
}
/**
 * @link https://discord.com/developers/docs/reference#image-formatting
 */
export declare type ImageFormat = 'jpg' | 'jpeg' | 'png' | 'webp' | 'gif' | 'json';
/**
 * @link https://discord.com/developers/docs/reference#image-formatting
 */
export declare type ImageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
/**
 * Utility functions
 */
export declare class Util {
    static formatImageURL(url: string, size?: ImageSize, format?: ImageFormat): string;
    static iconHashToBigInt(hash: string): bigint;
    static iconBigintToHash(icon: bigint): string;
}
export default Util;

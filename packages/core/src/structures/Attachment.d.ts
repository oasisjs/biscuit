import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type { DiscordAttachment } from '@biscuit/api-types';
/**
 * Represents an attachment
 * @link https://discord.com/developers/docs/resources/channel#attachment-object
 */
export declare class Attachment implements Model {
    constructor(session: Session, data: DiscordAttachment);
    readonly session: Session;
    readonly id: Snowflake;
    contentType?: string;
    attachment: string;
    proxyUrl: string;
    name: string;
    size: number;
    height?: number;
    width?: number;
    ephemeral: boolean;
}
export default Attachment;

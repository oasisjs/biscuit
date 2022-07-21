import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type { DiscordAttachment } from '@biscuit/api-types';

/**
 * Represents an attachment
 * @link https://discord.com/developers/docs/resources/channel#attachment-object
 */
export class Attachment implements Model {
	constructor(session: Session, data: DiscordAttachment) {
		this.session = session;
		this.id = data.id;

		this.contentType = data.content_type ? data.content_type : undefined;
		this.attachment = data.url;
		this.proxyUrl = data.proxy_url;
		this.name = data.filename;
		this.size = data.size;
		this.height = data.height ? data.height : undefined;
		this.width = data.width ? data.width : undefined;
		this.ephemeral = !!data.ephemeral;
	}

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

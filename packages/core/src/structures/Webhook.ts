import type { Model } from './Base';
import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
import type {
	DiscordEmbed,
	DiscordMessage,
	DiscordMessageComponents,
	DiscordWebhook,
	FileContent,
	WebhookTypes,
} from '@biscuit/api-types';
import type { WebhookOptions } from '../Routes';
import type { Attachment } from './Attachment';
import type { AllowedMentions, CreateMessage } from './Message';
import Util from '../Util';
import User from './User';
import Message from './Message';
import * as Routes from '../Routes';

/**
 * @link https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params
 */
export interface EditWebhookMessage {
	content?: string;
	embeds?: DiscordEmbed[];
	files?: FileContent[];
	allowedMentions?: AllowedMentions;
	attachments?: Attachment[];
	components?: DiscordMessageComponents;
}

export class Webhook implements Model {
	constructor(session: Session, data: DiscordWebhook) {
		this.session = session;
		this.id = data.id;
		this.type = data.type;
		this.token = data.token;

		if (data.avatar) {
			this.avatar = Util.iconHashToBigInt(data.avatar);
		}

		if (data.user) {
			this.user = new User(session, data.user);
		}

		if (data.guild_id) {
			this.guildId = data.guild_id;
		}

		if (data.channel_id) {
			this.channelId = data.channel_id;
		}

		if (data.application_id) {
			this.applicationId = data.application_id;
		}
	}

	readonly session: Session;
	readonly id: Snowflake;
	type: WebhookTypes;
	token?: string;
	avatar?: bigint;
	applicationId?: Snowflake;
	channelId?: Snowflake;
	guildId?: Snowflake;
	user?: User;

	async execute(
		options?: WebhookOptions &
			CreateMessage & { avatarUrl?: string; username?: string }
	): Promise<Message | undefined> {
		if (!this.token) {
			return;
		}

		const data = {
			content: options?.content,
			embeds: options?.embeds,
			tts: options?.tts,
			allowed_mentions: options?.allowedMentions,
			components: options?.components,
			file: options?.files,
		};

		const message = this.session.rest.sendRequest<DiscordMessage>(
			this.session.rest,
			{
				url: Routes.WEBHOOK(this.id, this.token!, {
					wait: options?.wait,
					threadId: options?.threadId,
				}),
				method: 'POST',
				payload: this.session.rest.createRequestBody(
					this.session.rest,
					{
						method: 'POST',
						body: {
							...data,
						},
					}
				),
			}
		);

		return options?.wait ?? true
			? new Message(this.session, await message)
			: undefined;
	}

	async fetch(): Promise<Webhook> {
		const message = await this.session.rest.runMethod<DiscordWebhook>(
			this.session.rest,
			'GET',
			Routes.WEBHOOK_TOKEN(this.id, this.token)
		);

		return new Webhook(this.session, message);
	}

	async fetchMessage(
		messageId: Snowflake,
		options?: { threadId?: Snowflake }
	): Promise<Message | undefined> {
		if (!this.token) {
			return;
		}

		const message = await this.session.rest.runMethod<DiscordMessage>(
			this.session.rest,
			'GET',
			Routes.WEBHOOK_MESSAGE(this.id, this.token, messageId, options)
		);

		return new Message(this.session, message);
	}

	async deleteMessage(
		messageId: Snowflake,
		options?: { threadId?: Snowflake }
	): Promise<void> {
		if (!this.token) {
			throw new Error('No token found');
		}

		await this.session.rest.runMethod<undefined>(
			this.session.rest,
			'DELETE',
			Routes.WEBHOOK_MESSAGE(this.id, this.token, messageId, options)
		);
	}

	async editMessage(
		messageId?: Snowflake,
		options?: EditWebhookMessage & { threadId?: Snowflake }
	): Promise<Message> {
		if (!this.token) {
			throw new Error('No token found');
		}

		const message = await this.session.rest.runMethod<DiscordMessage>(
			this.session.rest,
			'PATCH',
			messageId
				? Routes.WEBHOOK_MESSAGE(this.id, this.token, messageId)
				: Routes.WEBHOOK_MESSAGE_ORIGINAL(this.id, this.token),
			{
				content: options?.content,
				embeds: options?.embeds,
				file: options?.files,
				components: options?.components,
				allowed_mentions: options?.allowedMentions && {
					parse: options?.allowedMentions.parse,
					replied_user: options?.allowedMentions.repliedUser,
					users: options?.allowedMentions.users,
					roles: options?.allowedMentions.roles,
				},
				attachments: options?.attachments?.map(attachment => {
					return {
						id: attachment.id,
						filename: attachment.name,
						content_type: attachment.contentType,
						size: attachment.size,
						url: attachment.attachment,
						proxy_url: attachment.proxyUrl,
						height: attachment.height,
						width: attachment.width,
						ephemeral: attachment.ephemeral,
					};
				}),
			}
		);

		return new Message(this.session, message);
	}
}

export default Webhook;

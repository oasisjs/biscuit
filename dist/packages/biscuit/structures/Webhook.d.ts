import type { Model } from './Base';
import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
import type { DiscordEmbed, DiscordMessageComponents, DiscordWebhook, FileContent, WebhookTypes } from '../../discordeno/mod';
import type { WebhookOptions } from '../Routes';
import type { Attachment } from './Attachment';
import type { AllowedMentions, CreateMessage } from './Message';
import User from './User';
import Message from './Message';
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
export declare class Webhook implements Model {
    constructor(session: Session, data: DiscordWebhook);
    readonly session: Session;
    readonly id: Snowflake;
    type: WebhookTypes;
    token?: string;
    avatar?: bigint;
    applicationId?: Snowflake;
    channelId?: Snowflake;
    guildId?: Snowflake;
    user?: User;
    execute(options?: WebhookOptions & CreateMessage & {
        avatarUrl?: string;
        username?: string;
    }): Promise<(Message | undefined)>;
    fetch(): Promise<Webhook>;
    fetchMessage(messageId: Snowflake, options?: {
        threadId?: Snowflake;
    }): Promise<Message | undefined>;
    deleteMessage(messageId: Snowflake, options?: {
        threadId?: Snowflake;
    }): Promise<void>;
    editMessage(messageId?: Snowflake, options?: EditWebhookMessage & {
        threadId?: Snowflake;
    }): Promise<Message>;
}
export default Webhook;

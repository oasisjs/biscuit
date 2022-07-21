import type { Model } from '../Base';
import type { Session } from '../../Session';
import type { DiscordInteraction, DiscordMessageComponents } from '@biscuit/api-types';
import type CommandInteraction from './CommandInteraction';
import type PingInteraction from './PingInteraction';
import type ComponentInteraction from './ComponentInteraction';
import type ModalSubmitInteraction from './ModalSubmitInteraction';
import type AutoCompleteInteraction from './AutoCompleteInteraction';
import type { CreateMessage } from '../Message';
import type { MessageFlags } from '../../Util';
import type { EditWebhookMessage } from '../Webhook';
import { InteractionResponseTypes, InteractionTypes } from '@biscuit/api-types';
import { Snowflake } from '../../Snowflake';
import User from '../User';
import Member from '../Member';
import Message from '../Message';
import Permsisions from '../Permissions';
/**
 * @link https://discord.com/developers/docs/interactions/slash-commands#interaction-response
 */
export interface InteractionResponse {
    type: InteractionResponseTypes;
    data?: InteractionApplicationCommandCallbackData;
}
/**
 * @link https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactionapplicationcommandcallbackdata
 */
export interface InteractionApplicationCommandCallbackData extends Pick<CreateMessage, 'allowedMentions' | 'content' | 'embeds' | 'files'> {
    customId?: string;
    title?: string;
    components?: DiscordMessageComponents;
    flags?: MessageFlags;
    choices?: ApplicationCommandOptionChoice[];
}
/**
 * @link https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptionchoice
 */
export interface ApplicationCommandOptionChoice {
    name: string;
    value: string | number;
}
export declare abstract class BaseInteraction implements Model {
    constructor(session: Session, data: DiscordInteraction);
    readonly session: Session;
    readonly id: Snowflake;
    readonly token: string;
    type: InteractionTypes;
    guildId?: Snowflake;
    channelId?: Snowflake;
    applicationId?: Snowflake;
    user?: User;
    member?: Member;
    appPermissions?: Permsisions;
    readonly version: 1;
    responded: boolean;
    get createdTimestamp(): number;
    get createdAt(): Date;
    isCommand(): this is CommandInteraction;
    isAutoComplete(): this is AutoCompleteInteraction;
    isComponent(): this is ComponentInteraction;
    isPing(): this is PingInteraction;
    isModalSubmit(): this is ModalSubmitInteraction;
    inGuild(): this is this & {
        guildId: Snowflake;
    };
    editReply(options: EditWebhookMessage & {
        messageId?: Snowflake;
    }): Promise<Message | undefined>;
    sendFollowUp(options: InteractionApplicationCommandCallbackData): Promise<Message>;
    editFollowUp(messageId: Snowflake, options?: {
        threadId: Snowflake;
    }): Promise<Message>;
    deleteFollowUp(messageId: Snowflake, options?: {
        threadId?: Snowflake;
    }): Promise<void>;
    fetchFollowUp(messageId: Snowflake, options?: {
        threadId?: Snowflake;
    }): Promise<Message | undefined>;
    respond(resp: InteractionResponse): Promise<Message | undefined>;
    respond(resp: {
        with: InteractionApplicationCommandCallbackData;
    }): Promise<Message | undefined>;
    respondWith(resp: InteractionApplicationCommandCallbackData): Promise<Message | undefined>;
    defer(): Promise<void>;
    autocomplete(): Promise<void>;
}
export default BaseInteraction;

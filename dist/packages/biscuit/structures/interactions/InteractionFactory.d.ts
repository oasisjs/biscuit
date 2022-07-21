import type { Session } from '../../Session';
import type { Snowflake } from '../../Snowflake';
import type { DiscordInteraction, DiscordMessageInteraction } from '../../../discordeno/mod';
import { InteractionTypes } from '../../../discordeno/mod';
import User from '../User';
import Member from '../Member';
import CommandInteraction from './CommandInteraction';
import ComponentInteraction from './ComponentInteraction';
import PingInteraction from './PingInteraction';
import AutoCompleteInteraction from './AutoCompleteInteraction';
import ModalSubmitInteraction from './ModalSubmitInteraction';
/**
 * @link https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure
 */
export interface MessageInteraction {
    /** id of the interaction */
    id: Snowflake;
    /** type of interaction */
    type: InteractionTypes;
    /** name of the application command, including subcommands and subcommand groups */
    name: string;
    /** user who invoked the interaction */
    user: User;
    /** member who invoked the interaction in the guild */
    member?: Partial<Member>;
}
export declare type Interaction = CommandInteraction | ComponentInteraction | PingInteraction | AutoCompleteInteraction | ModalSubmitInteraction;
export declare class InteractionFactory {
    static from(session: Session, interaction: DiscordInteraction): Interaction;
    static fromMessage(session: Session, interaction: DiscordMessageInteraction, _guildId?: Snowflake): MessageInteraction;
}
export default InteractionFactory;

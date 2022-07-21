import type { Session } from '../../Session';
import type { Snowflake } from '../../Snowflake';
import type {
	DiscordInteraction,
	DiscordMessageInteraction,
} from '../@biscuit/api-types';
import { InteractionTypes } from '../@biscuit/api-types';
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

export type Interaction =
	| CommandInteraction
	| ComponentInteraction
	| PingInteraction
	| AutoCompleteInteraction
	| ModalSubmitInteraction;

export class InteractionFactory {
	static from(
		session: Session,
		interaction: DiscordInteraction
	): Interaction {
		switch (interaction.type) {
			case InteractionTypes.Ping:
				return new PingInteraction(session, interaction);
			case InteractionTypes.ApplicationCommand:
				return new CommandInteraction(session, interaction);
			case InteractionTypes.MessageComponent:
				return new ComponentInteraction(session, interaction);
			case InteractionTypes.ApplicationCommandAutocomplete:
				return new AutoCompleteInteraction(session, interaction);
			case InteractionTypes.ModalSubmit:
				return new ModalSubmitInteraction(session, interaction);
		}
	}

	static fromMessage(
		session: Session,
		interaction: DiscordMessageInteraction,
		_guildId?: Snowflake
	): MessageInteraction {
		const obj = {
			id: interaction.id,
			type: interaction.type,
			name: interaction.name,
			user: new User(session, interaction.user),
			// TODO: Parse member somehow with the guild id passed in message
		};

		return obj;
	}
}

export default InteractionFactory;

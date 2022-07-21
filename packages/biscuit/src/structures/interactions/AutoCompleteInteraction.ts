import type { Model } from '../Base';
import type { Snowflake } from '../../Snowflake';
import type { Session } from '../../Session';
import type {
	ApplicationCommandTypes,
	DiscordInteraction,
	InteractionTypes,
} from '../@biscuit/api-types';
import type { ApplicationCommandOptionChoice } from './BaseInteraction';
import { InteractionResponseTypes } from '../@biscuit/api-types';
import BaseInteraction from './BaseInteraction';
import * as Routes from '../../Routes';

export class AutoCompleteInteraction extends BaseInteraction implements Model {
	constructor(session: Session, data: DiscordInteraction) {
		super(session, data);
		this.type = data.type as number;
		this.commandId = data.data!.id;
		this.commandName = data.data!.name;
		this.commandType = data.data!.type;
		this.commandGuildId = data.data!.guild_id;
	}

	override type: InteractionTypes.ApplicationCommandAutocomplete;
	commandId: Snowflake;
	commandName: string;
	commandType: ApplicationCommandTypes;
	commandGuildId?: Snowflake;

	async respondWithChoices(
		choices: ApplicationCommandOptionChoice[]
	): Promise<void> {
		await this.session.rest.runMethod<undefined>(
			this.session.rest,
			'POST',
			Routes.INTERACTION_ID_TOKEN(this.id, this.token),
			{
				data: { choices },
				type: InteractionResponseTypes.ApplicationCommandAutocompleteResult,
			}
		);
	}
}

export default AutoCompleteInteraction;

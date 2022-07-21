import type { Model } from '../Base';
import type { Snowflake } from '../../Snowflake';
import type { Session } from '../../Session';
import type { ApplicationCommandTypes, DiscordInteraction, InteractionTypes } from '@biscuit/api-types';
import type { ApplicationCommandOptionChoice } from './BaseInteraction';
import BaseInteraction from './BaseInteraction';
export declare class AutoCompleteInteraction extends BaseInteraction implements Model {
    constructor(session: Session, data: DiscordInteraction);
    type: InteractionTypes.ApplicationCommandAutocomplete;
    commandId: Snowflake;
    commandName: string;
    commandType: ApplicationCommandTypes;
    commandGuildId?: Snowflake;
    respondWithChoices(choices: ApplicationCommandOptionChoice[]): Promise<void>;
}
export default AutoCompleteInteraction;

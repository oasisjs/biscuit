import type { Model } from '../Base';
import type { Snowflake } from '../../Snowflake';
import type { Session } from '../../Session';
import type { ApplicationCommandTypes, DiscordInteraction, InteractionTypes } from '@biscuit/api-types';
import BaseInteraction from './BaseInteraction';
export declare class PingInteraction extends BaseInteraction implements Model {
    constructor(session: Session, data: DiscordInteraction);
    type: InteractionTypes.Ping;
    commandId: Snowflake;
    commandName: string;
    commandType: ApplicationCommandTypes;
    commandGuildId?: Snowflake;
    pong(): Promise<void>;
}
export default PingInteraction;

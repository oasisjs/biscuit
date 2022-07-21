import type { Model } from '../Base';
import type { Snowflake } from '../../Snowflake';
import type { Session } from '../../Session';
import type { DiscordInteraction, DiscordMessageComponents, InteractionTypes, MessageComponentTypes } from '../../../discordeno/mod';
import BaseInteraction from './BaseInteraction';
import Message from '../Message';
export declare class ModalSubmitInteraction extends BaseInteraction implements Model {
    constructor(session: Session, data: DiscordInteraction);
    type: InteractionTypes.MessageComponent;
    componentType: MessageComponentTypes;
    customId?: string;
    targetId?: Snowflake;
    values?: string[];
    message?: Message;
    components: {
        type: 1;
        components: {
            customId: string | undefined;
            value: string;
        }[];
    }[] | undefined;
    static transformComponent(component: DiscordMessageComponents[number]): {
        type: 1;
        components: {
            customId: string | undefined;
            value: string;
        }[];
    };
    inMessage(): this is ModalSubmitInteraction & {
        message: Message;
    };
}
export default ModalSubmitInteraction;

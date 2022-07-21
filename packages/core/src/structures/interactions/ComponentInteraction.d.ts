import type { Model } from '../Base';
import type { Snowflake } from '../../Snowflake';
import type { Session } from '../../Session';
import type { DiscordInteraction, InteractionTypes } from '@biscuit/api-types';
import { MessageComponentTypes } from '@biscuit/api-types';
import BaseInteraction from './BaseInteraction';
import Message from '../Message';
export declare class ComponentInteraction extends BaseInteraction implements Model {
    constructor(session: Session, data: DiscordInteraction);
    type: InteractionTypes.MessageComponent;
    componentType: MessageComponentTypes;
    customId?: string;
    targetId?: Snowflake;
    values?: string[];
    message: Message;
    isButton(): boolean;
    isActionRow(): boolean;
    isTextInput(): boolean;
    isSelectMenu(): boolean;
    deferUpdate(): Promise<void>;
}
export default ComponentInteraction;

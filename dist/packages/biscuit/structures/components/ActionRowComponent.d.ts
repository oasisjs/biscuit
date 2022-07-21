import type { Session } from '../../Session';
import type { DiscordComponent } from '../../../discordeno/mod';
import type { ActionRowComponent, Component } from './Component';
import { MessageComponentTypes } from '../../../discordeno/mod';
import BaseComponent from './Component';
export declare class ActionRow extends BaseComponent implements ActionRowComponent {
    constructor(session: Session, data: DiscordComponent);
    readonly session: Session;
    type: MessageComponentTypes.ActionRow;
    components: Array<Exclude<Component, ActionRowComponent>>;
}
export default ActionRow;

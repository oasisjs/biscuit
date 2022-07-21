import type { Session } from '../../Session';
import type { DiscordComponent } from '@biscuit/api-types';
import type { ActionRowComponent, Component } from './Component';
import { MessageComponentTypes } from '@biscuit/api-types';
import BaseComponent from './Component';
export declare class ActionRow extends BaseComponent implements ActionRowComponent {
    constructor(session: Session, data: DiscordComponent);
    readonly session: Session;
    type: MessageComponentTypes.ActionRow;
    components: Exclude<Component, ActionRowComponent>[];
}
export default ActionRow;

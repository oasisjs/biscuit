import type { Session } from '../../Session';
import type { DiscordComponent } from '../../../discordeno/mod';
import type { SelectMenuComponent, SelectMenuOption } from './Component';
import { MessageComponentTypes } from '../../../discordeno/mod';
import BaseComponent from './Component';
export declare class SelectMenu extends BaseComponent implements SelectMenuComponent {
    constructor(session: Session, data: DiscordComponent);
    readonly session: Session;
    type: MessageComponentTypes.SelectMenu;
    customId: string;
    options: SelectMenuOption[];
    placeholder?: string;
    minValues?: number;
    maxValues?: number;
    disabled?: boolean;
}
export default SelectMenu;

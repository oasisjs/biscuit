import { type DiscordSelectMenuComponent, MessageComponentTypes } from '../../../../discordeno/mod';
import type { SelectMenuOptionBuilder } from './SelectMenuOptionBuilder';
export declare class SelectMenuBuilder {
    #private;
    constructor();
    type: MessageComponentTypes.SelectMenu;
    options: SelectMenuOptionBuilder[];
    setPlaceholder(placeholder: string): this;
    setValues(max?: number, min?: number): this;
    setDisabled(disabled?: boolean): this;
    setCustomId(id: string): this;
    setOptions(...options: SelectMenuOptionBuilder[]): this;
    addOptions(...options: SelectMenuOptionBuilder[]): this;
    toJSON(): DiscordSelectMenuComponent;
}

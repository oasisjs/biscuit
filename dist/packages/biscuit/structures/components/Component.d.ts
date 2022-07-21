import type Emoji from '../Emoji';
import { ButtonStyles, MessageComponentTypes, TextStyles } from '../../../discordeno/mod';
export declare class BaseComponent {
    constructor(type: MessageComponentTypes);
    type: MessageComponentTypes;
    isActionRow(): this is ActionRowComponent;
    isButton(): this is ButtonComponent;
    isSelectMenu(): this is SelectMenuComponent;
    isTextInput(): this is TextInputComponent;
}
/** Action Row Component */
export interface ActionRowComponent {
    type: MessageComponentTypes.ActionRow;
    components: Array<Exclude<Component, ActionRowComponent>>;
}
/** All Components */
export declare type Component = ActionRowComponent | ButtonComponent | LinkButtonComponent | SelectMenuComponent | TextInputComponent;
/** Button Component */
export interface ButtonComponent {
    type: MessageComponentTypes.Button;
    style: ButtonStyles.Primary | ButtonStyles.Secondary | ButtonStyles.Success | ButtonStyles.Danger;
    label?: string;
    emoji?: Emoji;
    customId?: string;
    disabled?: boolean;
}
/** Link Button Component */
export interface LinkButtonComponent {
    type: MessageComponentTypes.Button;
    style: ButtonStyles.Link;
    label?: string;
    url: string;
    disabled?: boolean;
}
/** Select Menu Component */
export interface SelectMenuComponent {
    type: MessageComponentTypes.SelectMenu;
    customId: string;
    options: SelectMenuOption[];
    placeholder?: string;
    minValue?: number;
    maxValue?: number;
    disabled?: boolean;
}
/** Text Input Component */
export interface TextInputComponent {
    type: MessageComponentTypes.InputText;
    customId: string;
    style: TextStyles;
    label: string;
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    value?: string;
    placeholder?: string;
}
export interface SelectMenuOption {
    label: string;
    value: string;
    description?: string;
    emoji?: Emoji;
    default?: boolean;
}
export default BaseComponent;

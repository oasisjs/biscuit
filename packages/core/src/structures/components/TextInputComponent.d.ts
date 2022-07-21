import type { Session } from '../../Session';
import type { DiscordInputTextComponent } from '@biscuit/api-types';
import type { TextInputComponent } from './Component';
import { MessageComponentTypes, TextStyles } from '@biscuit/api-types';
import BaseComponent from './Component';
export declare class TextInput extends BaseComponent implements TextInputComponent {
    constructor(session: Session, data: DiscordInputTextComponent);
    readonly session: Session;
    type: MessageComponentTypes.InputText;
    style: TextStyles;
    customId: string;
    label: string;
    placeholder?: string;
    value?: string;
    minLength?: number;
    maxLength?: number;
}
export default TextInput;

import type { Session } from '../../Session';
import type { MessageComponentTypes, ButtonStyles, DiscordComponent } from '@biscuit/api-types';
import type { ButtonComponent } from './Component';
import BaseComponent from './Component';
import Emoji from '../Emoji';
export declare class Button extends BaseComponent implements ButtonComponent {
    constructor(session: Session, data: DiscordComponent);
    readonly session: Session;
    type: MessageComponentTypes.Button;
    customId?: string;
    label?: string;
    style: ButtonStyles.Primary | ButtonStyles.Secondary | ButtonStyles.Success | ButtonStyles.Danger;
    disabled?: boolean;
    emoji?: Emoji;
}
export default Button;

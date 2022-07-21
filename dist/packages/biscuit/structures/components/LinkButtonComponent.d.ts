import type { Session } from '../../Session';
import type { ButtonStyles, DiscordComponent } from '../../../discordeno/mod';
import type { LinkButtonComponent } from './Component';
import { MessageComponentTypes } from '../../../discordeno/mod';
import BaseComponent from './Component';
import Emoji from '../Emoji';
export declare class LinkButton extends BaseComponent implements LinkButtonComponent {
    constructor(session: Session, data: DiscordComponent);
    readonly session: Session;
    type: MessageComponentTypes.Button;
    url: string;
    label?: string;
    style: ButtonStyles.Link;
    disabled?: boolean;
    emoji?: Emoji;
}
export default LinkButton;

import type { Session } from '../../Session';
import type { ButtonStyles, DiscordComponent } from '../@biscuit/api-types';
import type { ButtonComponent } from './Component';
import { MessageComponentTypes } from '../@biscuit/api-types';
import BaseComponent from './Component';
import Emoji from '../Emoji';

export class Button extends BaseComponent implements ButtonComponent {
	constructor(session: Session, data: DiscordComponent) {
		super(data.type);

		this.session = session;
		this.type = data.type as MessageComponentTypes.Button;
		this.customId = data.custom_id;
		this.label = data.label;
		this.style = data.style as number;
		this.disabled = data.disabled;

		if (data.emoji) {
			this.emoji = new Emoji(session, data.emoji);
		}
	}

	readonly session: Session;
	override type: MessageComponentTypes.Button;
	customId?: string;
	label?: string;
	style:
		| ButtonStyles.Primary
		| ButtonStyles.Secondary
		| ButtonStyles.Success
		| ButtonStyles.Danger;
	disabled?: boolean;
	emoji?: Emoji;
}

export default Button;

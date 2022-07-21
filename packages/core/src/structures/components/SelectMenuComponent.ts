import type { Session } from '../../Session';
import type { DiscordComponent, MessageComponentTypes } from '@biscuit/api-types';
import type { SelectMenuComponent, SelectMenuOption } from './Component';
import BaseComponent from './Component';
import Emoji from '../Emoji';

export class SelectMenu extends BaseComponent implements SelectMenuComponent {
	constructor(session: Session, data: DiscordComponent) {
		super(data.type);

		this.session = session;
		this.type = data.type as MessageComponentTypes.SelectMenu;
		this.customId = data.custom_id!;
		this.options = data.options!.map(option => {
			return {
				label: option.label,
				description: option.description,
				emoji: option.emoji || new Emoji(session, option.emoji!),
				value: option.value,
			} as SelectMenuOption;
		});
		this.placeholder = data.placeholder;
		this.minValues = data.min_values;
		this.maxValues = data.max_values;
		this.disabled = data.disabled;
	}

	readonly session: Session;
	override type: MessageComponentTypes.SelectMenu;
	customId: string;
	options: SelectMenuOption[];
	placeholder?: string;
	minValues?: number;
	maxValues?: number;
	disabled?: boolean;
}

export default SelectMenu;

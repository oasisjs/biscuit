import type { Session } from '../../Session';
import type {
	DiscordComponent,
	DiscordInputTextComponent,
} from '@biscuit/api-types';
import type { ActionRowComponent, Component } from './Component';
import { ButtonStyles, MessageComponentTypes } from '@biscuit/api-types';
import BaseComponent from './Component';
import Button from './ButtonComponent';
import LinkButton from './LinkButtonComponent';
import SelectMenu from './SelectMenuComponent';
import InputText from './TextInputComponent';

export class ActionRow extends BaseComponent implements ActionRowComponent {
	constructor(session: Session, data: DiscordComponent) {
		super(data.type);

		this.session = session;
		this.type = data.type as MessageComponentTypes.ActionRow;
		this.components = data.components!.map(component => {
			switch (component.type) {
				case MessageComponentTypes.Button:
					if (component.style === ButtonStyles.Link) {
						return new LinkButton(session, component);
					}
					return new Button(session, component);
				case MessageComponentTypes.SelectMenu:
					return new SelectMenu(session, component);
				case MessageComponentTypes.InputText:
					return new InputText(
						session,
						component as DiscordInputTextComponent
					);
				case MessageComponentTypes.ActionRow:
					throw new Error(
						'Cannot have an action row inside an action row'
					);
			}
		});
	}

	readonly session: Session;
	override type: MessageComponentTypes.ActionRow;
	components: Exclude<Component, ActionRowComponent>[];
}

export default ActionRow;

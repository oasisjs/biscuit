import type { Session } from '../../Session';
import type {
	DiscordComponent,
	DiscordInputTextComponent,
} from '@biscuit/api-types';
import type { Component } from './Component';
import { ButtonStyles, MessageComponentTypes } from '@biscuit/api-types';
import ActionRow from './ActionRowComponent';
import Button from './ButtonComponent';
import LinkButton from './LinkButtonComponent';
import SelectMenu from './SelectMenuComponent';
import TextInput from './TextInputComponent';

export class ComponentFactory {
	/**
	 * Component factory
	 * @internal
	 */
	static from(session: Session, component: DiscordComponent): Component {
		switch (component.type) {
			case MessageComponentTypes.ActionRow:
				return new ActionRow(session, component);
			case MessageComponentTypes.Button:
				if (component.style === ButtonStyles.Link) { return new LinkButton(session, component); }
				return new Button(session, component);
			case MessageComponentTypes.SelectMenu:
				return new SelectMenu(session, component);
			case MessageComponentTypes.InputText:
				return new TextInput(
					session,
					component as DiscordInputTextComponent
				);
		}
	}
}

export default ComponentFactory;

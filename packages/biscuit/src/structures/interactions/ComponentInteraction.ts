import type { Model } from '../Base';
import type { Snowflake } from '../../Snowflake';
import type { Session } from '../../Session';
import type {
	DiscordInteraction,
	InteractionTypes,
} from '../@biscuit/api-types';
import {
	InteractionResponseTypes,
	MessageComponentTypes,
} from '../@biscuit/api-types';
import BaseInteraction from './BaseInteraction';
import Message from '../Message';

export class ComponentInteraction extends BaseInteraction implements Model {
	constructor(session: Session, data: DiscordInteraction) {
		super(session, data);
		this.type = data.type as number;
		this.componentType = data.data!.component_type!;
		this.customId = data.data!.custom_id;
		this.targetId = data.data!.target_id;
		this.values = data.data!.values;
		this.message = new Message(session, data.message!);
	}

	override type: InteractionTypes.MessageComponent;
	componentType: MessageComponentTypes;
	customId?: string;
	targetId?: Snowflake;
	values?: string[];
	message: Message;

	//TODO: create interface/class for components types
	isButton(): boolean {
		return this.componentType === MessageComponentTypes.Button;
	}

	isActionRow(): boolean {
		return this.componentType === MessageComponentTypes.ActionRow;
	}

	isTextInput(): boolean {
		return this.componentType === MessageComponentTypes.InputText;
	}

	isSelectMenu(): boolean {
		return this.componentType === MessageComponentTypes.SelectMenu;
	}

	async deferUpdate() {
		await this.respond({
			type: InteractionResponseTypes.DeferredUpdateMessage,
		});
	}
}

export default ComponentInteraction;

import type { Model } from '../Base';
import type { Snowflake } from '../../Snowflake';
import type { Session } from '../../Session';
import type {
	DiscordInteraction,
	DiscordMessageComponents,
	InteractionTypes,
	MessageComponentTypes,
} from '../@biscuit/api-types';
import BaseInteraction from './BaseInteraction';
import Message from '../Message';

export class ModalSubmitInteraction extends BaseInteraction implements Model {
	constructor(session: Session, data: DiscordInteraction) {
		super(session, data);
		this.type = data.type as number;
		this.componentType = data.data!.component_type!;
		this.customId = data.data!.custom_id;
		this.targetId = data.data!.target_id;
		this.values = data.data!.values;

		this.components = data.data?.components?.map(
			ModalSubmitInteraction.transformComponent
		);

		if (data.message) {
			this.message = new Message(session, data.message);
		}
	}

	override type: InteractionTypes.MessageComponent;
	componentType: MessageComponentTypes;
	customId?: string;
	targetId?: Snowflake;
	values?: string[];
	message?: Message;
	components;

	static transformComponent(component: DiscordMessageComponents[number]) {
		return {
			type: component.type,
			components: component.components.map((component) => {
				return {
					customId: component.custom_id,
					value: (component as typeof component & { value: string })
						.value,
				};
			}),
		};
	}

	inMessage(): this is ModalSubmitInteraction & { message: Message } {
		return !!this.message;
	}
}

export default ModalSubmitInteraction;

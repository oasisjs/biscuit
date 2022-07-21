import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
import type { DiscordEmoji } from '@biscuit/api-types';

export class Emoji {
	constructor(session: Session, data: DiscordEmoji) {
		this.id = data.id;
		this.name = data.name;
		this.animated = !!data.animated;
		this.available = !!data.available;
		this.requireColons = !!data.require_colons;
		this.session = session;
	}
	readonly id?: Snowflake;
	readonly session: Session;

	name?: string;
	animated: boolean;
	available: boolean;
	requireColons: boolean;
}

export default Emoji;

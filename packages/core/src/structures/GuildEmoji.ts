import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type { DiscordEmoji } from '@biscuit/api-types';
import type { ModifyGuildEmoji } from './guilds';
import Guild from './guilds';
import Emoji from './Emoji';
import User from './User';
import * as Routes from '../Routes';

export class GuildEmoji extends Emoji implements Model {
	constructor(session: Session, data: DiscordEmoji, guildId: Snowflake) {
		super(session, data);
		this.guildId = guildId;
		this.roles = data.roles;
		this.user = data.user ? new User(this.session, data.user) : undefined;
		this.managed = !!data.managed;
		this.id = super.id!;
	}

	guildId: Snowflake;
	roles?: Snowflake[];
	user?: User;
	managed?: boolean;

	// id cannot be null in a GuildEmoji
	override id: Snowflake;

	async edit(options: ModifyGuildEmoji): Promise<GuildEmoji> {
		const emoji = await Guild.prototype.editEmoji.call(
			{ id: this.guildId, session: this.session },
			this.id,
			options
		);

		return emoji;
	}

	async delete({ reason }: { reason?: string } = {}): Promise<GuildEmoji> {
		await Guild.prototype.deleteEmoji.call(
			{ id: this.guildId, session: this.session },
			this.id,
			{ reason }
		);

		return this;
	}

	get url(): string {
		return Routes.EMOJI_URL(this.id, this.animated);
	}
}

export default GuildEmoji;

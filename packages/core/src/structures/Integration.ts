import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type {
	DiscordIntegration,
	IntegrationExpireBehaviors,
} from '@biscuit/api-types';
import User from './User';

export interface IntegrationAccount {
	id: Snowflake;
	name: string;
}

export interface IntegrationApplication {
	id: Snowflake;
	name: string;
	icon?: string;
	description: string;
	bot?: User;
}

export class Integration implements Model {
	constructor(
		session: Session,
		data: DiscordIntegration & { guild_id?: Snowflake }
	) {
		this.id = data.id;
		this.session = session;

		data.guild_id ? (this.guildId = data.guild_id) : null;

		this.name = data.name;
		this.type = data.type;
		this.enabled = !!data.enabled;
		this.syncing = !!data.syncing;
		this.roleId = data.role_id;
		this.enableEmoticons = !!data.enable_emoticons;
		this.expireBehavior = data.expire_behavior;
		this.expireGracePeriod = data.expire_grace_period;
		this.syncedAt = data.synced_at;
		this.subscriberCount = data.subscriber_count;
		this.revoked = !!data.revoked;

		this.user = data.user ? new User(session, data.user) : undefined;
		this.account = {
			id: data.account.id,
			name: data.account.name,
		};

		if (data.application) {
			this.application = {
				id: data.application.id,
				name: data.application.name,
				icon: data.application.icon ? data.application.icon : undefined,
				description: data.application.description,
				bot: data.application.bot
					? new User(session, data.application.bot)
					: undefined,
			};
		}
	}

	readonly session: Session;
	id: Snowflake;
	guildId?: Snowflake;

	name: string;
	type: 'twitch' | 'youtube' | 'discord';
	enabled?: boolean;
	syncing?: boolean;
	roleId?: string;
	enableEmoticons?: boolean;
	expireBehavior?: IntegrationExpireBehaviors;
	expireGracePeriod?: number;
	syncedAt?: string;
	subscriberCount?: number;
	revoked?: boolean;

	user?: User;
	account: IntegrationAccount;
	application?: IntegrationApplication;
}

export default Integration;

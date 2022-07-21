import type { Model } from './Base';
import type { DiscordRole } from '@biscuit/api-types';
import type { Session } from '../Session';
import { Snowflake } from '../Snowflake';
import { Guild, type ModifyGuildRole } from './guilds';
import Permissions from './Permissions';
import Util from '../Util';

export class Role implements Model {
	constructor(session: Session, data: DiscordRole, guildId: Snowflake) {
		this.session = session;
		this.id = data.id;
		this.guildId = guildId;
		this.hoist = data.hoist;
		this.iconHash = data.icon
			? Util.iconHashToBigInt(data.icon)
			: undefined;
		this.color = data.color;
		this.name = data.name;
		this.unicodeEmoji = data.unicode_emoji;
		this.mentionable = data.mentionable;
		this.managed = data.managed;
		this.permissions = new Permissions(BigInt(data.permissions));
	}

	readonly session: Session;
	readonly id: Snowflake;

	readonly guildId: Snowflake;

	hoist: boolean;
	iconHash?: bigint;
	color: number;
	name: string;
	unicodeEmoji?: string;
	mentionable: boolean;
	managed: boolean;
	permissions: Permissions;

	get createdTimestamp(): number {
		return Snowflake.snowflakeToTimestamp(this.id);
	}

	get createdAt(): Date {
		return new Date(this.createdTimestamp);
	}

	get hexColor(): string {
		return `#${this.color.toString(16).padStart(6, '0')}`;
	}

	async delete(): Promise<void> {
		await Guild.prototype.deleteRole.call(
			{ id: this.guildId, session: this.session },
			this.id
		);
	}

	async edit(options: ModifyGuildRole): Promise<Role> {
		const role = await Guild.prototype.editRole.call(
			{ id: this.guildId, session: this.session },
			this.id,
			options
		);
		return role;
	}

	async add(
		memberId: Snowflake,
		options: { reason?: string } = {}
	): Promise<void> {
		await Guild.prototype.addRole.call(
			{ id: this.guildId, session: this.session },
			memberId,
			this.id,
			options
		);
	}

	async remove(
		memberId: Snowflake,
		options: { reason?: string } = {}
	): Promise<void> {
		await Guild.prototype.removeRole.call(
			{ id: this.guildId, session: this.session },
			memberId,
			this.id,
			options
		);
	}

	toString(): string {
		switch (this.id) {
			case this.guildId:
				return '@everyone';
			default:
				return `<@&${this.id}>`;
		}
	}
}

export default Role;

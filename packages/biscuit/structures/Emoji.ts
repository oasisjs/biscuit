import type { Session } from '../Session.ts';
import type { Snowflake } from '../Snowflake.ts';
import type { DiscordEmoji } from '../../discordeno/mod.ts';

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

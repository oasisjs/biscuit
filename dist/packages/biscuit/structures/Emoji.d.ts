import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
import type { DiscordEmoji } from '../../discordeno/mod';
export declare class Emoji {
    constructor(session: Session, data: DiscordEmoji);
    readonly id?: Snowflake;
    readonly session: Session;
    name?: string;
    animated: boolean;
    available: boolean;
    requireColons: boolean;
}
export default Emoji;

import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type { DiscordEmoji } from '@biscuit/api-types';
import type { ModifyGuildEmoji } from './guilds';
import Emoji from './Emoji';
import User from './User';
export declare class GuildEmoji extends Emoji implements Model {
    constructor(session: Session, data: DiscordEmoji, guildId: Snowflake);
    guildId: Snowflake;
    roles?: Snowflake[];
    user?: User;
    managed?: boolean;
    id: Snowflake;
    edit(options: ModifyGuildEmoji): Promise<GuildEmoji>;
    delete({ reason }?: {
        reason?: string;
    }): Promise<GuildEmoji>;
    get url(): string;
}
export default GuildEmoji;

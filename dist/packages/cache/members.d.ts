import type { DiscordMemberWithUser, Snowflake } from './deps';
import type { SessionCache } from './mod';
import type { CachedUser } from './users';
import { Member } from './deps';
export interface CachedMember extends Omit<Member, 'user'> {
    userId: Snowflake;
    user?: CachedUser;
}
export declare function memberBootstrapper(cache: SessionCache, member: DiscordMemberWithUser, guildId: Snowflake): void;

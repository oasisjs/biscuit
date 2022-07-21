import type { DiscordUser } from './deps';
import type { SessionCache } from './mod';
import { User } from './deps';
export declare type CachedUser = User;
export declare function userBootstrapper(cache: SessionCache, user: DiscordUser): void;

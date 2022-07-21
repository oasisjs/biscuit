import type { DiscordUser } from './deps';
import type { SessionCache } from './mod';
import { User } from './deps';

export type CachedUser = User;

export function userBootstrapper(cache: SessionCache, user: DiscordUser) {
    cache.users.set(user.id, new User(cache.session, user));
}

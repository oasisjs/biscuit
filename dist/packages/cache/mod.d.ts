import type { Emoji, Session, SymCache } from './deps';
import type { CachedGuild } from './guilds';
import type { CachedUser } from './users';
import type { CachedDMChannel } from './channels';
import { Collection } from './Collection';
export declare const cache_sym: unique symbol;
export interface SessionCache extends SymCache {
    guilds: Collection<CachedGuild>;
    users: Collection<CachedUser>;
    dms: Collection<CachedDMChannel>;
    emojis: Collection<Emoji>;
    session: Session;
}
export declare function enableCache(session: Session): SessionCache;

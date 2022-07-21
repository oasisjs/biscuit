import type { DiscordGuild } from './deps';
import type { SessionCache } from './mod';
import type { CachedMember } from './members';
import type { CachedGuildChannel } from './channels';
import { Guild } from './deps';
import { Collection } from './Collection';
export interface CachedGuild extends Omit<Guild, 'members' | 'channels'> {
    channels: Collection<CachedGuildChannel>;
    members: Collection<CachedMember>;
}
export declare function guildBootstrapper(cache: SessionCache, guild: DiscordGuild): void;

import type { ChannelInGuild, ChannelTypes, ChannelWithMessagesInGuild, DiscordChannel, Snowflake } from './deps';
import type { CachedMessage } from './messages';
import type { CachedGuild } from './guilds';
import type { SessionCache } from './mod';
import { Collection } from './Collection';
import { DMChannel } from './deps';
export interface CachedGuildChannel extends Omit<ChannelWithMessagesInGuild, 'type'> {
    type: ChannelTypes;
    messages: Collection<CachedMessage>;
    guild: CachedGuild;
    guildId: Snowflake;
}
export interface CachedGuildChannel extends Omit<ChannelInGuild, 'type'> {
    type: ChannelTypes;
    guild: CachedGuild;
    guildId: Snowflake;
}
export interface CachedDMChannel extends DMChannel {
    messages: Collection<CachedMessage>;
}
export declare function channelBootstrapper(cache: SessionCache, channel: DiscordChannel): void;

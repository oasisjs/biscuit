import type { ChannelInGuild, ChannelTypes, ChannelWithMessagesInGuild, DiscordChannel, Snowflake } from './deps';
import type { CachedMessage } from './messages';
import type { CachedGuild } from './guilds';
import type { SessionCache } from './mod';
import { Collection } from './Collection';
import { ChannelFactory, DMChannel, textBasedChannels } from './deps';

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

export function channelBootstrapper(cache: SessionCache, channel: DiscordChannel) {
    if (!channel.guild_id) {
        cache.dms.set(
            channel.id,
            Object.assign(new DMChannel(cache.session, channel), {
                messages: new Collection<CachedMessage>(cache.session),
            }),
        );
        return;
    }

    cache.guilds.retrieve(channel.guild_id, (guild) => {
        if (textBasedChannels.includes(channel.type)) {
            guild.channels.set(
                channel.id,
                Object.assign(
                    ChannelFactory.fromGuildChannel(cache.session, channel) as ChannelWithMessagesInGuild,
                    {
                        messages: new Collection<CachedMessage>(cache.session),
                        guildId: channel.guild_id!,
                        get guild(): CachedGuild {
                            return cache.guilds.get(this.guildId)!;
                        },
                    },
                ),
            );
        } else {
            guild.channels.set(
                channel.id,
                <CachedGuildChannel> Object.assign(
                    ChannelFactory.fromGuildChannel(cache.session, channel),
                    {
                        guildId: channel.guild_id!,
                        get guild(): CachedGuild {
                            return cache.guilds.get(this.guildId)!;
                        },
                    },
                ),
            );
        }
    });
}

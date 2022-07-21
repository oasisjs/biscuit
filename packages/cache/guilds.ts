import type { DiscordGuild, DiscordMemberWithUser } from './deps';
import type { SessionCache } from './mod';
import type { CachedMember } from './members';
import type { CachedUser } from './users';
import type { CachedGuildChannel } from './channels';
import { ChannelFactory, Guild, Member } from './deps';
import { Collection } from './Collection';

export interface CachedGuild extends Omit<Guild, 'members' | 'channels'> {
    channels: Collection<CachedGuildChannel>;
    members: Collection<CachedMember>;
}

export function guildBootstrapper(cache: SessionCache, guild: DiscordGuild) {
    const members = new Collection(
        cache.session,
        guild.members?.map((data) => {
            const obj: CachedMember = Object.assign(
                new Member(cache.session, data as DiscordMemberWithUser, guild.id),
                {
                    userId: data.user!.id,
                    get user(): CachedUser | undefined {
                        return cache.users.get(this.userId);
                    },
                },
            );

            return [data.user!.id, obj as CachedMember];
        }),
    );

    const channels = new Collection(
        cache.session,
        guild.channels?.map((data) => {
            const obj = data && Object.assign(ChannelFactory.from(cache.session, data), {
                messages: new Map(),
            });

            return [data.id, obj as CachedGuildChannel];
        }),
    );

    cache.guilds.set(
        guild.id,
        Object.assign(
            new Guild(cache.session, guild),
            { members, channels },
        ),
    );
}

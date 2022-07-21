import type { DiscordMemberWithUser, Snowflake } from './deps';
import type { SessionCache } from './mod';
import type { CachedUser } from './users';
import { Member } from './deps';

export interface CachedMember extends Omit<Member, 'user'> {
    userId: Snowflake;
    user?: CachedUser;
}

export function memberBootstrapper(cache: SessionCache, member: DiscordMemberWithUser, guildId: Snowflake) {
    cache.guilds.retrieve(guildId, (guild) => {
        guild.members.set(
            member.user.id,
            Object.assign(
                new Member(cache.session, member, guildId),
                {
                    userId: member.user.id,
                    get user(): CachedUser | undefined {
                        return cache.users.get(this.userId);
                    },
                },
            ),
        );
    });
}

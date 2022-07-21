import type { Model } from './Base';
import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
import type { DiscordThreadMember } from '../../discordeno/mod';
import * as Routes from '../Routes';

/**
 * A member that comes from a thread
 * @link https://discord.com/developers/docs/resources/channel#thread-member-object
 * * */
export class ThreadMember implements Model {
    constructor(session: Session, data: DiscordThreadMember) {
        this.session = session;
        this.id = data.id;
        this.flags = data.flags;
        this.timestamp = Date.parse(data.join_timestamp);
    }

    readonly session: Session;
    readonly id: Snowflake;
    flags: number;
    timestamp: number;

    get threadId(): Snowflake {
        return this.id;
    }

    async quitThread(memberId: Snowflake = this.session.botId): Promise<void> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            'DELETE',
            Routes.THREAD_USER(this.id, memberId),
        );
    }

    async fetchMember(memberId: Snowflake = this.session.botId): Promise<ThreadMember> {
        const member = await this.session.rest.runMethod<DiscordThreadMember>(
            this.session.rest,
            'GET',
            Routes.THREAD_USER(this.id, memberId),
        );

        return new ThreadMember(this.session, member);
    }
}

export default ThreadMember;

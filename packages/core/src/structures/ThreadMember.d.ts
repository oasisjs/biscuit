import type { Model } from './Base';
import type { Session } from '../Session';
import type { Snowflake } from '../Snowflake';
import type { DiscordThreadMember } from '@biscuit/api-types';
/**
 * A member that comes from a thread
 * @link https://discord.com/developers/docs/resources/channel#thread-member-object
 * * */
export declare class ThreadMember implements Model {
    constructor(session: Session, data: DiscordThreadMember);
    readonly session: Session;
    readonly id: Snowflake;
    flags: number;
    timestamp: number;
    get threadId(): Snowflake;
    quitThread(memberId?: Snowflake): Promise<void>;
    fetchMember(memberId?: Snowflake): Promise<ThreadMember>;
}
export default ThreadMember;

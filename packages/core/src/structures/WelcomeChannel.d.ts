import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type { DiscordWelcomeScreenChannel } from '@biscuit/api-types';
import Emoji from './Emoji';
/**
 * Not a channel
 * @link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
export declare class WelcomeChannel implements Model {
    constructor(session: Session, data: DiscordWelcomeScreenChannel);
    session: Session;
    channelId: Snowflake;
    description: string;
    emoji: Emoji;
    /** alias for WelcomeScreenChannel.channelId */
    get id(): Snowflake;
}
export default WelcomeChannel;

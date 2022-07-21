import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import type { DiscordWelcomeScreenChannel } from '../../discordeno/mod';
import Emoji from './Emoji';

/**
 * Not a channel
 * @link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
export class WelcomeChannel implements Model {
    constructor(session: Session, data: DiscordWelcomeScreenChannel) {
        this.session = session;
        this.channelId = data.channel_id;
        this.description = data.description;
        this.emoji = new Emoji(session, {
            name: data.emoji_name ? data.emoji_name : undefined,
            id: data.emoji_id ? data.emoji_id : undefined,
        });
    }

    session: Session;
    channelId: Snowflake;
    description: string;
    emoji: Emoji;

    /** alias for WelcomeScreenChannel.channelId */
    get id(): Snowflake {
        return this.channelId;
    }
}

export default WelcomeChannel;

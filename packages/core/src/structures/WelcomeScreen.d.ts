import type { Session } from '../Session';
import type { DiscordWelcomeScreen } from '@biscuit/api-types';
import WelcomeChannel from './WelcomeChannel';
/**
 * @link https://discord.com/developers/docs/resources/guild#welcome-screen-object
 */
export declare class WelcomeScreen {
    constructor(session: Session, data: DiscordWelcomeScreen);
    readonly session: Session;
    description?: string;
    welcomeChannels: WelcomeChannel[];
}
export default WelcomeScreen;

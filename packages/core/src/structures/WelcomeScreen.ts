/* eslint-disable arrow-parens */
import type { Session } from '../Session';
import type { DiscordWelcomeScreen } from '@biscuit/api-types';
import WelcomeChannel from './WelcomeChannel';

/**
 * @link https://discord.com/developers/docs/resources/guild#welcome-screen-object
 */
export class WelcomeScreen {
	constructor(session: Session, data: DiscordWelcomeScreen) {
		this.session = session;
		this.welcomeChannels = data.welcome_channels.map(
			(welcomeChannel) => new WelcomeChannel(session, welcomeChannel)
		);

		if (data.description) {
			this.description = data.description;
		}
	}

	readonly session: Session;

	description?: string;
	welcomeChannels: WelcomeChannel[];
}

export default WelcomeScreen;

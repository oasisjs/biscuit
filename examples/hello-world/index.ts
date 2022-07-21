import { GatewayIntents } from '@biscuit/api-types';
import Biscuit from '@biscuit/core';

const intents =
	GatewayIntents.MessageContent |
	GatewayIntents.Guilds |
	GatewayIntents.GuildMessages;

const session = new Biscuit({
	token: '',
	intents,
});

session.on('ready', ({ user }) => {
	console.log('Logged in as:', user.username);
});

session.on('messageCreate', (message) => {
	if (message.content.startsWith('!ping')) {
		message.reply({ content: 'pong!' });
	}
});

session.start();

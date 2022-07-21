import { GatewayIntents } from '@biscuit/api-types';
import Biscuit from '@biscuit/core';

const intents =
	GatewayIntents.MessageContent |
	GatewayIntents.Guilds |
	GatewayIntents.GuildMessages;

const session = new Biscuit({
	token: 'OTk4NzA2MjU4MjA5MTY1MzI0.GXsBx-.EhrIuKkSJezwcUMIqFmePYG-hQVV8fs10akfF0',
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

const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage();
for (let key in used) {
	console.log(
		`${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
	);
}

/**
 * Biscuit node example
 */

// process for get the token
/** @type {NodeJS.Process} process */
import process from 'node:process';

// Session for create a new bot and intents
import { GatewayIntents, Session } from '@oasisjs/biscuit';

// Discord bot token
/** @type {string} token */
const token = process.env.TOKEN || 'YOUR_TOKEN_HERE';

if (token === '') {
    console.log(new Error('Please set the TOKEN environment variable'));
}

const intents = GatewayIntents.MessageContent | GatewayIntents.Guilds | GatewayIntents.GuildMessages;
const session = new Session({ token, intents });

// Command prefix
const PREFIX = '>';

session.on('ready', (data) => {
    console.log('Ready! Let\'s start chatting!');
    console.log('Connected as: ' + data.user.username);
});

session.on('messageCreate', (message) => {
    if (message.author?.bot || !message.content.startsWith(PREFIX)) {
        return;
    }

    const args = message.content.substring(PREFIX.length).trim().split(/\s+/gm);
    const name = args.shift()?.toLowerCase();

    if (name === 'ping') {
        message.reply({ content: 'pong!' });
    }
});

session.start();

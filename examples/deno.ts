/**
 * Deno example
 */

import "https://deno.land/std@0.146.0/dotenv/load.ts";
import { GatewayIntents, Session } from "https://x.nest.land/biscuit@0.1.0/mod.ts";

const token = Deno.env.get("TOKEN") ?? Deno.args[0];

if (!token) {
    throw new Error("Please provide a token");
}

const intents = GatewayIntents.MessageContent | GatewayIntents.Guilds | GatewayIntents.GuildMessages;
const session = new Session({ token, intents });

session.on("ready", (payload) => {
    console.log("Logged in as:", payload.user.username);
});

const PREFIX = ">";

session.on("messageCreate", (message) => {
    if (message.author?.bot || !message.content.startsWith(PREFIX)) {
        return;
    }

    const args = message.content.substring(PREFIX.length).trim().split(/\s+/gm);
    const name = args.shift()?.toLowerCase();

    if (name === "ping") {
        message.reply({ content: "pong!" });
    }
});

await session.start();

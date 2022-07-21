"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISCORD_SNOWFLAKE_REGEX = exports.CHANNEL_MENTION_REGEX = exports.CONTEXT_MENU_COMMANDS_NAME_REGEX = exports.SLASH_COMMANDS_NAME_REGEX = exports.baseEndpoints = exports.IMAGE_BASE_URL = exports.USER_AGENT = exports.DISCORDENO_VERSION = exports.API_VERSION = exports.BASE_URL = void 0;
/** https://discord.com/developers/docs/reference#api-reference-base-url */
exports.BASE_URL = 'https://discord.com/api';
/** https://discord.com/developers/docs/reference#api-versioning-api-versions */
exports.API_VERSION = 10;
// TODO: update this version
/** https://github.com/discordeno/discordeno/releases */
exports.DISCORDENO_VERSION = '13.0.0-rc45';
/** https://discord.com/developers/docs/reference#user-agent */
exports.USER_AGENT = `DiscordBot (https://github.com/discordeno/discordeno, v${exports.DISCORDENO_VERSION})`;
/** https://discord.com/developers/docs/reference#image-formatting-image-base-url */
exports.IMAGE_BASE_URL = 'https://cdn.discordapp.com';
// This can be modified by big brain bots and use a proxy
exports.baseEndpoints = {
    BASE_URL: `${exports.BASE_URL}/v${exports.API_VERSION}`,
    CDN_URL: exports.IMAGE_BASE_URL,
};
exports.SLASH_COMMANDS_NAME_REGEX = /^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$/u;
exports.CONTEXT_MENU_COMMANDS_NAME_REGEX = /^[\w-\s]{1,32}$/;
exports.CHANNEL_MENTION_REGEX = /<#[0-9]+>/g;
exports.DISCORD_SNOWFLAKE_REGEX = /^(?<id>\d{17,19})$/;

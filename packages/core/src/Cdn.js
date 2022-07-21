"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUILD_ICON = exports.GUILD_SPLASH = exports.GUILD_BANNER = exports.USER_DEFAULT_AVATAR = exports.EMOJI_URL = exports.USER_AVATAR = void 0;
const discordeno_1 = require("@biscuit/discordeno");
function USER_AVATAR(userId, icon) {
    return `${discordeno_1.baseEndpoints.CDN_URL}/avatars/${userId}/${icon}`;
}
exports.USER_AVATAR = USER_AVATAR;
function EMOJI_URL(id, animated = false) {
    return `https://cdn.discordapp.com/emojis/${id}.${animated ? 'gif' : 'png'}`;
}
exports.EMOJI_URL = EMOJI_URL;
function USER_DEFAULT_AVATAR(
/** user discriminator */
altIcon) {
    return `${discordeno_1.baseEndpoints.CDN_URL}/embed/avatars/${altIcon}.png`;
}
exports.USER_DEFAULT_AVATAR = USER_DEFAULT_AVATAR;
function GUILD_BANNER(guildId, icon) {
    return `${discordeno_1.baseEndpoints.CDN_URL}/banners/${guildId}/${icon}`;
}
exports.GUILD_BANNER = GUILD_BANNER;
function GUILD_SPLASH(guildId, icon) {
    return `${discordeno_1.baseEndpoints.CDN_URL}/splashes/${guildId}/${icon}`;
}
exports.GUILD_SPLASH = GUILD_SPLASH;
function GUILD_ICON(guildId, icon) {
    return `${discordeno_1.baseEndpoints.CDN_URL}/icons/${guildId}/${icon}`;
}
exports.GUILD_ICON = GUILD_ICON;

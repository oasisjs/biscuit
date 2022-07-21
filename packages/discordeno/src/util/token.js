"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBotIdFromToken = exports.removeTokenPrefix = void 0;
/** Removes the Bot before the token. */
function removeTokenPrefix(token, type = 'REST') {
    // If no token is provided, throw an error
    if (!token) {
        throw new Error(`The ${type} was not given a token. Please provide a token and try again.`);
    }
    // If the token does not have a prefix just return token
    if (!token.startsWith('Bot ')) {
        return token;
    }
    // Remove the prefix and return only the token.
    return token.substring(token.indexOf(' ') + 1);
}
exports.removeTokenPrefix = removeTokenPrefix;
/** Get the bot id from the bot token. WARNING: Discord staff has mentioned this may not be stable forever. Use at your own risk. However, note for over 5 years this has never broken. */
function getBotIdFromToken(token) {
    return BigInt(atob(token.split('.')[0]));
}
exports.getBotIdFromToken = getBotIdFromToken;

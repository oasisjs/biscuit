/** Removes the Bot before the token. */
export declare function removeTokenPrefix(token?: string, type?: 'GATEWAY' | 'REST'): string;
/** Get the bot id from the bot token. WARNING: Discord staff has mentioned this may not be stable forever. Use at your own risk. However, note for over 5 years this has never broken. */
export declare function getBotIdFromToken(token: string): bigint;

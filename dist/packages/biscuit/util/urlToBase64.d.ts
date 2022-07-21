/** Converts a url to base 64. Useful for example, uploading/creating server emojis. */
export declare function urlToBase64(url: string): Promise<string>;
/**
 * CREDIT: https://gist.github.com/enepomnyaschih/72c423f727d395eeaa09697058238727
 * Encodes a given Uint8Array, ArrayBuffer or string into RFC4648 base64 representation
 * @param data
 */
export declare function encode(data: ArrayBuffer | string): string;

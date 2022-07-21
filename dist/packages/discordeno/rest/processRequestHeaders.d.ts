import { RestManager } from './restManager';
/** Processes the rate limit headers and determines if it needs to be rate limited and returns the bucket id if available */
export declare function processRequestHeaders(rest: RestManager, url: string, headers: Headers): string | undefined;

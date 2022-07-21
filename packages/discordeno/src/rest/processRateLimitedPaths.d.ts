import type { RestManager } from './restManager';
/** This will create a infinite loop running in 1 seconds using tail recursion to keep rate limits clean. When a rate limit resets, this will remove it so the queue can proceed. */
export declare function processRateLimitedPaths(rest: RestManager): void;

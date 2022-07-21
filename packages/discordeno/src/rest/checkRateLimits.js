"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRateLimits = void 0;
/** Check the rate limits for a url or a bucket. */
function checkRateLimits(rest, url) {
    const ratelimited = rest.rateLimitedPaths.get(url);
    const global = rest.rateLimitedPaths.get('global');
    const now = Date.now();
    if (ratelimited && now < ratelimited.resetTimestamp) {
        return ratelimited.resetTimestamp - now;
    }
    if (global && now < global.resetTimestamp) {
        return global.resetTimestamp - now;
    }
    return false;
}
exports.checkRateLimits = checkRateLimits;

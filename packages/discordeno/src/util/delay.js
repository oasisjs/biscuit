"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
/** Pause the execution for a given amount of milliseconds. */
function delay(ms) {
    return new Promise((res) => setTimeout(() => {
        res();
    }, ms));
}
exports.delay = delay;

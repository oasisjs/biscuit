"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snowflake = exports.DiscordEpoch = void 0;
/** Discord epoch */
exports.DiscordEpoch = 14200704e5;
/** utilities for Snowflakes */
exports.Snowflake = {
    snowflakeToTimestamp(id) {
        return (Number(id) >> 22) + exports.DiscordEpoch;
    },
};

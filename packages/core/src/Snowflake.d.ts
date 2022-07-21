/** snowflake type */
export declare type Snowflake = string;
/** Discord epoch */
export declare const DiscordEpoch = 1420070400000;
/** utilities for Snowflakes */
export declare const Snowflake: {
    snowflakeToTimestamp(id: Snowflake): number;
};

import type { Snowflake } from './Snowflake';
export declare function USER_AVATAR(userId: Snowflake, icon: string): string;
export declare function EMOJI_URL(id: Snowflake, animated?: boolean): string;
export declare function USER_DEFAULT_AVATAR(
/** user discriminator */
altIcon: number): string;
export declare function GUILD_BANNER(guildId: Snowflake, icon: string): string;
export declare function GUILD_SPLASH(guildId: Snowflake, icon: string): string;
export declare function GUILD_ICON(guildId: Snowflake, icon: string): string;

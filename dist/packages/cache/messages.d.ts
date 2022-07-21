import type { DiscordEmoji, DiscordMessage, DiscordMessageReactionAdd, DiscordMessageReactionRemove, DiscordMessageReactionRemoveAll, Snowflake } from './deps';
import type { CachedUser } from './users';
import type { SessionCache } from './mod';
import { Message } from './deps';
export interface CachedMessage extends Omit<Message, 'author'> {
    authorId: Snowflake;
    author?: CachedUser;
}
export declare function messageBootstrapper(cache: SessionCache, message: DiscordMessage, partial: boolean): void;
export declare function reactionBootstrapper(cache: SessionCache, reaction: DiscordMessageReactionAdd | DiscordMessageReactionRemove, remove: boolean): void;
export declare function reactionBootstrapperDeletions(cache: SessionCache, payload: DiscordMessageReactionRemoveAll): void;
export declare function emojiBootstrapper(cache: SessionCache, emoji: DiscordEmoji, guildId: Snowflake): void;

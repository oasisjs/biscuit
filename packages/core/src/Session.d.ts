import type { ApplicationCommandPermissionTypes, AtLeastOne, DiscordApplicationCommand, DiscordApplicationCommandOption, DiscordGuildApplicationCommandPermissions, GatewayBot, GatewayIntents, Localization } from '@biscuit/api-types';
import type { DiscordGatewayPayload } from '@biscuit/api-types';
import type { Shard } from '@biscuit/discordeno';
import { createGatewayManager, createRestManager } from '@biscuit/discordeno';
import type { Events } from './Actions';
import type { PermissionResolvable } from './structures/Permissions';
import type { Activities, StatusTypes } from './structures/Presence';
import type { Snowflake } from './Snowflake';
import { EventEmitter } from './util/EventEmmiter';
import { ApplicationCommandTypes } from '@biscuit/api-types';
import User from './structures/User';
export declare type DiscordRawEventHandler = (shard: Shard, data: DiscordGatewayPayload) => unknown;
/**
 * @link https://discord.com/developers/docs/interactions/application-commands#endpoints-json-params
 */
export interface CreateApplicationCommand {
    name: string;
    nameLocalizations?: Localization;
    description: string;
    descriptionLocalizations?: Localization;
    type?: ApplicationCommandTypes;
    options?: DiscordApplicationCommandOption[];
    defaultMemberPermissions?: PermissionResolvable;
    dmPermission?: boolean;
}
/**
 * @link https://discord.com/developers/docs/interactions/application-commands#endpoints-json-params
 */
export interface CreateContextApplicationCommand extends Omit<CreateApplicationCommand, 'options'> {
    type: ApplicationCommandTypes.Message | ApplicationCommandTypes.User;
}
/**
 * @link https://discord.com/developers/docs/interactions/application-commands#endpoints-query-string-params
 */
export interface GetApplicationCommand {
    guildId?: Snowflake;
    withLocalizations?: boolean;
}
export interface UpsertApplicationCommands extends CreateApplicationCommand {
    id?: Snowflake;
}
/**
 * @link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions
 */
export interface ApplicationCommandPermissions {
    id: Snowflake;
    type: ApplicationCommandPermissionTypes;
    permission: boolean;
}
/**
 * @link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions
 */
export interface ApplicationCommandPermissions {
    id: Snowflake;
    type: ApplicationCommandPermissionTypes;
    permission: boolean;
}
export interface RestOptions {
    secretKey?: string;
    applicationId?: Snowflake;
}
export interface GatewayOptions {
    botId?: Snowflake;
    data?: GatewayBot;
}
export interface SessionOptions {
    token: string;
    rawHandler?: DiscordRawEventHandler;
    intents?: GatewayIntents;
    rest?: RestOptions;
    gateway?: GatewayOptions;
}
/**
 * @link https://discord.com/developers/docs/topics/gateway#update-status
 */
export interface StatusUpdate {
    activities: Activities[];
    status: StatusTypes;
}
/**
 * Receives a Token, connects
 * Most of the command implementations were adapted from Discordeno (https://github.com/discordeno/discordeno)
 */
export declare class Session extends EventEmitter {
    #private;
    options: SessionOptions;
    rest: ReturnType<typeof createRestManager>;
    gateway: ReturnType<typeof createGatewayManager>;
    set applicationId(id: Snowflake);
    get applicationId(): Snowflake;
    set botId(id: Snowflake);
    get botId(): Snowflake;
    constructor(options: SessionOptions);
    on<K extends keyof Events>(event: K, func: Events[K]): this;
    off<K extends keyof Events>(event: K, func: Events[K]): this;
    once<K extends keyof Events>(event: K, func: Events[K]): this;
    emit<K extends keyof Events>(event: K, ...params: Parameters<Events[K]>): boolean;
    editProfile(nick?: string, avatarURL?: string | null): Promise<User>;
    /**
     * Edit bot's status
     * tip: execute this on the ready event if possible
     * @example
     * for (const { id } of session.gateway.manager.shards) {
     *    session.editStatus(id, data);
     * }
     */
    editStatus(shardId: number, status: StatusUpdate): void;
    fetchUser(id: Snowflake): Promise<User | undefined>;
    createApplicationCommand(options: CreateApplicationCommand | CreateContextApplicationCommand, guildId?: Snowflake): Promise<DiscordApplicationCommand>;
    deleteApplicationCommand(id: Snowflake, guildId?: Snowflake): Promise<undefined>;
    updateApplicationCommandPermissions(guildId: Snowflake, id: Snowflake, bearerToken: string, options: ApplicationCommandPermissions[]): Promise<DiscordGuildApplicationCommandPermissions>;
    fetchApplicationCommand(id: Snowflake, options?: GetApplicationCommand): Promise<DiscordApplicationCommand>;
    fetchApplicationCommandPermissions(guildId: Snowflake): Promise<DiscordGuildApplicationCommandPermissions[]>;
    fetchApplicationCommandPermission(guildId: Snowflake, id: Snowflake): Promise<DiscordGuildApplicationCommandPermissions>;
    upsertApplicationCommand(id: Snowflake, options: AtLeastOne<CreateApplicationCommand> | AtLeastOne<CreateContextApplicationCommand>, guildId?: Snowflake): Promise<DiscordApplicationCommand>;
    upsertApplicationCommands(options: (UpsertApplicationCommands | CreateContextApplicationCommand)[], guildId?: Snowflake): Promise<DiscordApplicationCommand[]>;
    fetchCommands(guildId?: Snowflake): Promise<DiscordApplicationCommand[]>;
    isContextApplicationCommand(cmd: AtLeastOne<CreateContextApplicationCommand> | AtLeastOne<CreateApplicationCommand>): cmd is AtLeastOne<CreateContextApplicationCommand>;
    start(): Promise<void>;
}

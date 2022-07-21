"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const discordeno_1 = require("@biscuit/discordeno");
const Permissions_1 = require("./structures/Permissions");
const EventEmmiter_1 = require("./util/EventEmmiter");
const api_types_1 = require("@biscuit/api-types");
const User_1 = __importDefault(require("./structures/User"));
const urlToBase64_1 = require("./util/urlToBase64");
const Routes = __importStar(require("./Routes"));
const Actions = __importStar(require("./Actions"));
/**
 * Receives a Token, connects
 * Most of the command implementations were adapted from Discordeno (https://github.com/discordeno/discordeno)
 */
class Session extends EventEmmiter_1.EventEmitter {
    options;
    rest;
    gateway;
    #botId;
    #applicationId;
    set applicationId(id) {
        this.#applicationId = id;
    }
    get applicationId() {
        return this.#applicationId;
    }
    set botId(id) {
        this.#botId = id;
    }
    get botId() {
        return this.#botId;
    }
    constructor(options) {
        super();
        this.options = options;
        const defHandler = (shard, data) => {
            Actions.raw(this, shard.id, data);
            if (!data.t || !data.d) {
                return;
            }
            // deno-lint-ignore no-explicit-any
            Actions[data.t]?.(this, shard.id, data.d);
        };
        this.rest = (0, discordeno_1.createRestManager)({
            token: this.options.token,
            debug: (text) => {
                // TODO: set this using the event emitter
                super.rawListeners('debug')?.forEach((fn) => fn(text));
            },
            secretKey: this.options.rest?.secretKey ?? undefined,
        });
        this.gateway = (0, discordeno_1.createGatewayManager)({
            gatewayBot: this.options.gateway?.data ?? {},
            gatewayConfig: {
                token: this.options.token,
                intents: this.options.intents,
            },
            handleDiscordPayload: this.options.rawHandler ?? defHandler,
        });
        this.#botId = (0, discordeno_1.getBotIdFromToken)(options.token).toString();
    }
    on(event, func) {
        return super.on(event, func);
    }
    off(event, func) {
        return super.off(event, func);
    }
    once(event, func) {
        return super.once(event, func);
    }
    emit(event, ...params) {
        return super.emit(event, ...params);
    }
    async editProfile(nick, avatarURL) {
        const avatar = avatarURL ? await (0, urlToBase64_1.urlToBase64)(avatarURL) : avatarURL;
        const user = await this.rest.runMethod(this.rest, 'PATCH', Routes.USER(), {
            username: nick,
            avatar,
        });
        return new User_1.default(this, user);
    }
    /**
     * Edit bot's status
     * tip: execute this on the ready event if possible
     * @example
     * for (const { id } of session.gateway.manager.shards) {
     *    session.editStatus(id, data);
     * }
     */
    editStatus(shardId, status) {
        const shard = this.gateway.manager.shards.get(shardId);
        if (!shard) {
            throw new Error(`Unknown shard ${shardId}`);
        }
        shard.send({
            op: discordeno_1.GatewayOpcodes.PresenceUpdate,
            d: {
                status: status.status,
                since: null,
                afk: false,
                activities: status.activities.map((activity) => {
                    return {
                        name: activity.name,
                        type: activity.type,
                        url: activity.url,
                        created_at: activity.createdAt,
                        timestamps: activity.timestamps,
                        application_id: this.applicationId,
                        details: activity.details,
                        state: activity.state,
                        emoji: activity.emoji && {
                            name: activity.emoji.name,
                            id: activity.emoji.id,
                            animated: activity.emoji.animated,
                        },
                        party: activity.party,
                        assets: activity.assets && {
                            large_image: activity.assets.largeImage,
                            large_text: activity.assets.largeText,
                            small_image: activity.assets.smallImage,
                            small_text: activity.assets.smallText,
                        },
                        secrets: activity.secrets,
                        instance: activity.instance,
                        flags: activity.flags,
                        buttons: activity.buttons,
                    };
                }),
            },
        });
    }
    async fetchUser(id) {
        const user = await this.rest.runMethod(this.rest, 'GET', Routes.USER(id));
        if (!user.id) {
            return;
        }
        return new User_1.default(this, user);
    }
    createApplicationCommand(options, guildId) {
        return this.rest.runMethod(this.rest, 'POST', guildId
            ? Routes.GUILD_APPLICATION_COMMANDS(this.applicationId, guildId)
            : Routes.APPLICATION_COMMANDS(this.applicationId), this.isContextApplicationCommand(options)
            ? {
                name: options.name,
                name_localizations: options.nameLocalizations,
                type: options.type,
            }
            : {
                name: options.name,
                name_localizations: options.nameLocalizations,
                description: options.description,
                description_localizations: options.descriptionLocalizations,
                type: options.type,
                options: options.options,
                default_member_permissions: options.defaultMemberPermissions
                    ? new Permissions_1.Permissions(options.defaultMemberPermissions).bitfield.toString()
                    : undefined,
                dm_permission: options.dmPermission,
            });
    }
    deleteApplicationCommand(id, guildId) {
        return this.rest.runMethod(this.rest, 'DELETE', guildId
            ? Routes.GUILD_APPLICATION_COMMANDS(this.applicationId, guildId, id)
            : Routes.APPLICATION_COMMANDS(this.applicationId, id));
    }
    updateApplicationCommandPermissions(guildId, id, bearerToken, options) {
        return this.rest.runMethod(this.rest, 'PUT', Routes.GUILD_APPLICATION_COMMANDS_PERMISSIONS(this.applicationId, guildId, id), {
            permissions: options,
        }, {
            headers: { authorization: `Bearer ${bearerToken}` },
        });
    }
    fetchApplicationCommand(id, options) {
        return this.rest.runMethod(this.rest, 'GET', options?.guildId
            ? Routes.GUILD_APPLICATION_COMMANDS_LOCALIZATIONS(this.applicationId, options.guildId, id, options?.withLocalizations)
            : Routes.APPLICATION_COMMANDS(this.applicationId, id));
    }
    fetchApplicationCommandPermissions(guildId) {
        return this.rest.runMethod(this.rest, 'GET', Routes.GUILD_APPLICATION_COMMANDS_PERMISSIONS(this.applicationId, guildId));
    }
    fetchApplicationCommandPermission(guildId, id) {
        return this.rest.runMethod(this.rest, 'GET', Routes.GUILD_APPLICATION_COMMANDS_PERMISSIONS(this.applicationId, guildId, id));
    }
    upsertApplicationCommand(id, options, guildId) {
        return this.rest.runMethod(this.rest, 'PATCH', guildId
            ? Routes.GUILD_APPLICATION_COMMANDS(this.applicationId, guildId)
            : Routes.APPLICATION_COMMANDS(this.applicationId, id), this.isContextApplicationCommand(options)
            ? {
                name: options.name,
                type: options.type,
            }
            : {
                name: options.name,
                description: options.description,
                type: options.type,
                options: options.options,
            });
    }
    upsertApplicationCommands(options, guildId) {
        return this.rest.runMethod(this.rest, 'PUT', guildId
            ? Routes.GUILD_APPLICATION_COMMANDS(this.applicationId, guildId)
            : Routes.APPLICATION_COMMANDS(this.applicationId), options.map((o) => this.isContextApplicationCommand(o)
            ? {
                name: o.name,
                type: o.type,
            }
            : {
                name: o.name,
                description: o.description,
                type: o.type,
                options: o.options,
            }));
    }
    fetchCommands(guildId) {
        return this.rest.runMethod(this.rest, 'GET', guildId
            ? Routes.GUILD_APPLICATION_COMMANDS(this.applicationId, guildId)
            : Routes.APPLICATION_COMMANDS(this.applicationId));
    }
    // deno-fmt-ignore
    isContextApplicationCommand(cmd) {
        return (cmd.type === api_types_1.ApplicationCommandTypes.Message ||
            cmd.type === api_types_1.ApplicationCommandTypes.User);
    }
    async start() {
        const getGatewayBot = () => this.rest.runMethod(this.rest, 'GET', Routes.GATEWAY_BOT());
        // check if is empty
        if (!Object.keys(this.options.gateway?.data ?? {}).length) {
            const nonParsed = await getGatewayBot();
            this.gateway.gatewayBot = {
                url: nonParsed.url,
                shards: nonParsed.shards,
                sessionStartLimit: {
                    total: nonParsed.session_start_limit.total,
                    remaining: nonParsed.session_start_limit.remaining,
                    resetAfter: nonParsed.session_start_limit.reset_after,
                    maxConcurrency: nonParsed.session_start_limit.max_concurrency,
                },
            };
            this.gateway.lastShardId = this.gateway.gatewayBot.shards - 1;
            this.gateway.manager.totalShards = this.gateway.gatewayBot.shards;
        }
        this.gateway.spawnShards();
    }
}
exports.Session = Session;

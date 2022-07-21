"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integration = void 0;
const User_1 = __importDefault(require("./User"));
class Integration {
    constructor(session, data) {
        this.id = data.id;
        this.session = session;
        data.guild_id ? (this.guildId = data.guild_id) : null;
        this.name = data.name;
        this.type = data.type;
        this.enabled = !!data.enabled;
        this.syncing = !!data.syncing;
        this.roleId = data.role_id;
        this.enableEmoticons = !!data.enable_emoticons;
        this.expireBehavior = data.expire_behavior;
        this.expireGracePeriod = data.expire_grace_period;
        this.syncedAt = data.synced_at;
        this.subscriberCount = data.subscriber_count;
        this.revoked = !!data.revoked;
        this.user = data.user ? new User_1.default(session, data.user) : undefined;
        this.account = {
            id: data.account.id,
            name: data.account.name,
        };
        if (data.application) {
            this.application = {
                id: data.application.id,
                name: data.application.name,
                icon: data.application.icon ? data.application.icon : undefined,
                description: data.application.description,
                bot: data.application.bot
                    ? new User_1.default(session, data.application.bot)
                    : undefined,
            };
        }
    }
    session;
    id;
    guildId;
    name;
    type;
    enabled;
    syncing;
    roleId;
    enableEmoticons;
    expireBehavior;
    expireGracePeriod;
    syncedAt;
    subscriberCount;
    revoked;
    user;
    account;
    application;
}
exports.Integration = Integration;
exports.default = Integration;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const Snowflake_1 = require("../Snowflake");
const guilds_1 = require("./guilds");
const Permissions_1 = __importDefault(require("./Permissions"));
const Util_1 = __importDefault(require("../Util"));
class Role {
    constructor(session, data, guildId) {
        this.session = session;
        this.id = data.id;
        this.guildId = guildId;
        this.hoist = data.hoist;
        this.iconHash = data.icon
            ? Util_1.default.iconHashToBigInt(data.icon)
            : undefined;
        this.color = data.color;
        this.name = data.name;
        this.unicodeEmoji = data.unicode_emoji;
        this.mentionable = data.mentionable;
        this.managed = data.managed;
        this.permissions = new Permissions_1.default(BigInt(data.permissions));
    }
    session;
    id;
    guildId;
    hoist;
    iconHash;
    color;
    name;
    unicodeEmoji;
    mentionable;
    managed;
    permissions;
    get createdTimestamp() {
        return Snowflake_1.Snowflake.snowflakeToTimestamp(this.id);
    }
    get createdAt() {
        return new Date(this.createdTimestamp);
    }
    get hexColor() {
        return `#${this.color.toString(16).padStart(6, '0')}`;
    }
    async delete() {
        await guilds_1.Guild.prototype.deleteRole.call({ id: this.guildId, session: this.session }, this.id);
    }
    async edit(options) {
        const role = await guilds_1.Guild.prototype.editRole.call({ id: this.guildId, session: this.session }, this.id, options);
        return role;
    }
    async add(memberId, options = {}) {
        await guilds_1.Guild.prototype.addRole.call({ id: this.guildId, session: this.session }, memberId, this.id, options);
    }
    async remove(memberId, options = {}) {
        await guilds_1.Guild.prototype.removeRole.call({ id: this.guildId, session: this.session }, memberId, this.id, options);
    }
    toString() {
        switch (this.id) {
            case this.guildId:
                return '@everyone';
            default:
                return `<@&${this.id}>`;
        }
    }
}
exports.Role = Role;
exports.default = Role;

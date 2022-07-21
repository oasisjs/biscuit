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
exports.Member = void 0;
const guilds_1 = require("./guilds");
const Util_1 = __importDefault(require("../Util"));
const User_1 = __importDefault(require("./User"));
const Routes = __importStar(require("../Routes"));
/**
 * @link https://discord.com/developers/docs/resources/guild#guild-member-object
 * Represents a guild member
 */
class Member {
    constructor(session, data, guildId) {
        this.session = session;
        this.user = new User_1.default(session, data.user);
        this.guildId = guildId;
        this.avatarHash = data.avatar
            ? Util_1.default.iconHashToBigInt(data.avatar)
            : undefined;
        this.nickname = data.nick ? data.nick : undefined;
        this.premiumSince = data.premium_since
            ? Number.parseInt(data.premium_since)
            : undefined;
        this.joinedTimestamp = Number.parseInt(data.joined_at);
        this.roles = data.roles;
        this.deaf = !!data.deaf;
        this.mute = !!data.mute;
        this.pending = !!data.pending;
        this.communicationDisabledUntilTimestamp =
            data.communication_disabled_until
                ? Number.parseInt(data.communication_disabled_until)
                : undefined;
    }
    /** the session that instantiated this member */
    session;
    /** the user this guild member represents */
    user;
    /** the choosen guild id */
    guildId;
    /** the member's guild avatar hash optimized as a bigint */
    avatarHash;
    /** this user's guild nickname */
    nickname;
    /** when the user started boosting the guild */
    premiumSince;
    /** when the user joined the guild */
    joinedTimestamp;
    /** array of role object ids */
    roles;
    /** whether the user is deafened in voice channels */
    deaf;
    /** whether the user is muted in voice channels */
    mute;
    /** whether the user has not yet passed the guild's Membership Screening requirements */
    pending;
    /** when the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out */
    communicationDisabledUntilTimestamp;
    /** shorthand to User.id */
    get id() {
        return this.user.id;
    }
    /** gets the nickname or the username */
    get nicknameOrUsername() {
        return this.nickname ?? this.user.username;
    }
    /** gets the joinedAt timestamp as a Date */
    get joinedAt() {
        return new Date(this.joinedTimestamp);
    }
    /** bans a member from this guild and delete previous messages sent by the member */
    async ban(options) {
        await guilds_1.Guild.prototype.banMember.call({ id: this.guildId, session: this.session }, this.user.id, options);
        return this;
    }
    /** kicks a member from this guild */
    async kick(options) {
        await guilds_1.Guild.prototype.kickMember.call({ id: this.guildId, session: this.session }, this.user.id, options);
        return this;
    }
    /** unbans a member from this guild */
    async unban() {
        await guilds_1.Guild.prototype.unbanMember.call({ id: this.guildId, session: this.session }, this.user.id);
    }
    /** edits member's nickname, roles, etc */
    async edit(options) {
        const member = await guilds_1.Guild.prototype.editMember.call({ id: this.guildId, session: this.session }, this.user.id, options);
        return member;
    }
    /** adds a role to this member */
    async addRole(roleId, options = {}) {
        await guilds_1.Guild.prototype.addRole.call({ id: this.guildId, session: this.session }, this.user.id, roleId, options);
    }
    /** removes a role from this member */
    async removeRole(roleId, options = {}) {
        await guilds_1.Guild.prototype.removeRole.call({ id: this.guildId, session: this.session }, this.user.id, roleId, options);
    }
    /** gets the members's guild avatar, not to be confused with Member.user.avatarURL() */
    avatarURL(options = { size: 128 }) {
        let url;
        if (this.user.bot) {
            return this.user.avatarURL();
        }
        if (!this.avatarHash) {
            url = Routes.USER_DEFAULT_AVATAR(Number(this.user.discriminator) % 5);
        }
        else {
            url = Routes.USER_AVATAR(this.user.id, Util_1.default.iconBigintToHash(this.avatarHash));
        }
        return Util_1.default.formatImageURL(url, options.size, options.format);
    }
    toString() {
        return `<@!${this.user.id}>`;
    }
}
exports.Member = Member;
exports.default = Member;

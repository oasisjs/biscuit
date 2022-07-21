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
exports.User = void 0;
const Util_1 = __importDefault(require("../Util"));
const Routes = __importStar(require("../Routes"));
/**
 * @link https://discord.com/developers/docs/resources/user#user-object
 * Represents a user
 */
class User {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.avatarHash = data.avatar
            ? Util_1.default.iconHashToBigInt(data.avatar)
            : undefined;
        this.accentColor = data.accent_color;
        this.bot = !!data.bot;
        this.system = !!data.system;
        this.banner = data.banner
            ? Util_1.default.iconHashToBigInt(data.banner)
            : undefined;
        this.mfaEnabled = !!data.mfa_enabled;
        this.locale = data.locale;
        this.email = data.email ? data.email : undefined;
        this.verified = data.verified;
        this.flags = data.flags;
    }
    /** the session that instantiated this User */
    session;
    /** the user's id */
    id;
    /** the user's username, not unique across the platform */
    username;
    /** the user's 4-digit discord-tag */
    discriminator;
    /** the user's avatar hash optimized as a bigint */
    avatarHash;
    /** the user's banner color encoded as an integer representation of hexadecimal color code */
    accentColor;
    /** whether the user belongs to an OAuth2 application */
    bot;
    /** whether the user is an Official Discord System user (part of the urgent message system) */
    system;
    /** the user's banner hash optimized as a bigint */
    banner;
    /** whether the user has two factor enabled on their account */
    mfaEnabled;
    /** the user's chosen language option */
    locale;
    /** the user's email */
    email;
    /** the flags on a user's account */
    flags;
    /** whether the email on this account has been verified */
    verified;
    /** the type of Nitro subscription on a user's account */
    premiumType;
    /** the public flags on a user's account */
    publicFlags;
    /** gets the user's username#discriminator */
    get tag() {
        return `${this.username}#${this.discriminator}}`;
    }
    /** fetches this user */
    fetch() {
        return this.session.fetchUser(this.id);
    }
    /** gets the user's avatar */
    avatarURL(options = { size: 128 }) {
        let url;
        if (!this.avatarHash) {
            url = Routes.USER_DEFAULT_AVATAR(Number(this.discriminator) % 5);
        }
        else {
            url = Routes.USER_AVATAR(this.id, Util_1.default.iconBigintToHash(this.avatarHash));
        }
        return Util_1.default.formatImageURL(url, options.size, options.format);
    }
    toString() {
        return `<@${this.id}>`;
    }
}
exports.User = User;
exports.default = User;

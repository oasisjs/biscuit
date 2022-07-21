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
exports.GuildEmoji = void 0;
const guilds_1 = __importDefault(require("./guilds"));
const Emoji_1 = __importDefault(require("./Emoji"));
const User_1 = __importDefault(require("./User"));
const Routes = __importStar(require("../Routes"));
class GuildEmoji extends Emoji_1.default {
    constructor(session, data, guildId) {
        super(session, data);
        this.guildId = guildId;
        this.roles = data.roles;
        this.user = data.user ? new User_1.default(this.session, data.user) : undefined;
        this.managed = !!data.managed;
        this.id = super.id;
    }
    guildId;
    roles;
    user;
    managed;
    // id cannot be null in a GuildEmoji
    id;
    async edit(options) {
        const emoji = await guilds_1.default.prototype.editEmoji.call({ id: this.guildId, session: this.session }, this.id, options);
        return emoji;
    }
    async delete({ reason } = {}) {
        await guilds_1.default.prototype.deleteEmoji.call({ id: this.guildId, session: this.session }, this.id, { reason });
        return this;
    }
    get url() {
        return Routes.EMOJI_URL(this.id, this.animated);
    }
}
exports.GuildEmoji = GuildEmoji;
exports.default = GuildEmoji;

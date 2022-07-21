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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sticker = void 0;
const User_1 = require("./User");
const Routes = __importStar(require("../Routes"));
class Sticker {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.packId = data.pack_id;
        this.name = data.name;
        this.description = data.description;
        this.tags = data.tags.split(',');
        this.type = data.type;
        this.formatType = data.format_type;
        this.available = !!data.available;
        this.guildId = data.guild_id;
        this.user = data.user ? new User_1.User(this.session, data.user) : undefined;
        this.sortValue = data.sort_value;
    }
    session;
    id;
    packId;
    name;
    description;
    tags;
    type;
    formatType;
    available;
    guildId;
    user;
    sortValue;
    async fetchPremiumPack() {
        const data = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.STICKER_PACKS());
        return {
            id: data.id,
            stickers: data.stickers.map((st) => new Sticker(this.session, st)),
            name: data.name,
            skuId: data.sku_id,
            coverStickerId: data.cover_sticker_id,
            description: data.description,
            bannerAssetId: data.banner_asset_id,
        };
    }
}
exports.Sticker = Sticker;
exports.default = Sticker;

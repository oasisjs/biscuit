import type { DiscordSticker, StickerFormatTypes, StickerTypes } from '@biscuit/api-types';
import type { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import { User } from './User';
export interface StickerItem {
    id: Snowflake;
    name: string;
    formatType: StickerFormatTypes;
}
export interface StickerPack {
    id: Snowflake;
    stickers: Sticker[];
    name: string;
    skuId: Snowflake;
    coverStickerId?: Snowflake;
    description: string;
    bannerAssetId?: Snowflake;
}
export declare class Sticker implements Model {
    constructor(session: Session, data: DiscordSticker);
    session: Session;
    id: Snowflake;
    packId?: Snowflake;
    name: string;
    description?: string;
    tags: string[];
    type: StickerTypes;
    formatType: StickerFormatTypes;
    available?: boolean;
    guildId?: Snowflake;
    user?: User;
    sortValue?: number;
    fetchPremiumPack(): Promise<StickerPack>;
}
export default Sticker;

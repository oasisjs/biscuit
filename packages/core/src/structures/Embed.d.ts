import type { DiscordEmbed, EmbedTypes } from '@biscuit/api-types';
export interface Embed {
    title?: string;
    timestamp?: string;
    type?: EmbedTypes;
    url?: string;
    color?: number;
    description?: string;
    author?: {
        name: string;
        iconURL?: string;
        proxyIconURL?: string;
        url?: string;
    };
    footer?: {
        text: string;
        iconURL?: string;
        proxyIconURL?: string;
    };
    fields?: {
        name: string;
        value: string;
        inline?: boolean;
    }[];
    thumbnail?: {
        url: string;
        proxyURL?: string;
        width?: number;
        height?: number;
    };
    video?: {
        url?: string;
        proxyURL?: string;
        width?: number;
        height?: number;
    };
    image?: {
        url: string;
        proxyURL?: string;
        width?: number;
        height?: number;
    };
    provider?: {
        url?: string;
        name?: string;
    };
}
export declare function embed(data: Embed): DiscordEmbed;
export default Embed;

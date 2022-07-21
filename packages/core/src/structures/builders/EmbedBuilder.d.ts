import type { DiscordEmbed, DiscordEmbedField, DiscordEmbedProvider } from '@biscuit/api-types';
export interface EmbedFooter {
    text: string;
    iconUrl?: string;
    proxyIconUrl?: string;
}
export interface EmbedAuthor {
    name: string;
    text?: string;
    url?: string;
    iconUrl?: string;
    proxyIconUrl?: string;
}
export interface EmbedVideo {
    height?: number;
    proxyUrl?: string;
    url?: string;
    width?: number;
}
export declare class EmbedBuilder {
    #private;
    constructor(data?: DiscordEmbed);
    setAuthor(author: EmbedAuthor): EmbedBuilder;
    setColor(color: number): EmbedBuilder;
    setDescription(description: string): EmbedBuilder;
    addField(field: DiscordEmbedField): EmbedBuilder;
    setFooter(footer: EmbedFooter): EmbedBuilder;
    setImage(image: string): EmbedBuilder;
    setProvider(provider: DiscordEmbedProvider): EmbedBuilder;
    setThumbnail(thumbnail: string): EmbedBuilder;
    setTimestamp(timestamp: string | Date): EmbedBuilder;
    setTitle(title: string, url?: string): EmbedBuilder;
    setUrl(url: string): EmbedBuilder;
    setVideo(video: EmbedVideo): EmbedBuilder;
    toJSON(): DiscordEmbed;
}

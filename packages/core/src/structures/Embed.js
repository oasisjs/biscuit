"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embed = void 0;
function embed(data) {
    return {
        title: data.title,
        timestamp: data.timestamp,
        type: data.type,
        url: data.url,
        color: data.color,
        description: data.description,
        author: data.author && {
            name: data.author.name,
            url: data.author.url,
            icon_url: data.author.iconURL,
            proxy_icon_url: data.author.proxyIconURL,
        },
        footer: data.footer && {
            text: data.footer.text,
            icon_url: data.footer.iconURL,
            proxy_icon_url: data.footer.proxyIconURL,
        },
        fields: data.fields?.map((f) => {
            return {
                name: f.name,
                value: f.value,
                inline: f.inline,
            };
        }),
        thumbnail: data.thumbnail && {
            url: data.thumbnail.url,
            proxy_url: data.thumbnail.proxyURL,
            width: data.thumbnail.width,
            height: data.thumbnail.height,
        },
        video: {
            url: data.video?.url,
            proxy_url: data.video?.proxyURL,
            width: data.video?.width,
            height: data.video?.height,
        },
        image: data.image && {
            url: data.image.url,
            proxy_url: data.image.proxyURL,
            width: data.image.width,
            height: data.image.height,
        },
        provider: {
            url: data.provider?.url,
            name: data.provider?.name,
        },
    };
}
exports.embed = embed;

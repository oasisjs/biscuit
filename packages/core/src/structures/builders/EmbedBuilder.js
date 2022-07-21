"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilder = void 0;
class EmbedBuilder {
    #data;
    constructor(data = {}) {
        this.#data = data;
        if (!this.#data.fields) {
            this.#data.fields = [];
        }
    }
    setAuthor(author) {
        this.#data.author = {
            name: author.name,
            icon_url: author.iconUrl,
            proxy_icon_url: author.proxyIconUrl,
            url: author.url,
        };
        return this;
    }
    setColor(color) {
        this.#data.color = color;
        return this;
    }
    setDescription(description) {
        this.#data.description = description;
        return this;
    }
    addField(field) {
        this.#data.fields.push(field);
        return this;
    }
    setFooter(footer) {
        this.#data.footer = {
            text: footer.text,
            icon_url: footer.iconUrl,
            proxy_icon_url: footer.proxyIconUrl,
        };
        return this;
    }
    setImage(image) {
        this.#data.image = { url: image };
        return this;
    }
    setProvider(provider) {
        this.#data.provider = provider;
        return this;
    }
    setThumbnail(thumbnail) {
        this.#data.thumbnail = { url: thumbnail };
        return this;
    }
    setTimestamp(timestamp) {
        this.#data.timestamp =
            timestamp instanceof Date ? timestamp.toISOString() : timestamp;
        return this;
    }
    setTitle(title, url) {
        this.#data.title = title;
        if (url) {
            this.setUrl(url);
        }
        return this;
    }
    setUrl(url) {
        this.#data.url = url;
        return this;
    }
    setVideo(video) {
        this.#data.video = {
            height: video.height,
            proxy_url: video.proxyUrl,
            url: video.url,
            width: video.width,
        };
        return this;
    }
    toJSON() {
        return this.#data;
    }
}
exports.EmbedBuilder = EmbedBuilder;

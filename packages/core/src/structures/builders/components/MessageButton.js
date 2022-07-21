"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBuilder = void 0;
const api_types_1 = require("@biscuit/api-types");
class ButtonBuilder {
    constructor() {
        this.#data = {};
        this.type = api_types_1.MessageComponentTypes.Button;
    }
    #data;
    type;
    setStyle(style) {
        this.#data.style = style;
        return this;
    }
    setLabel(label) {
        this.#data.label = label;
        return this;
    }
    setCustomId(id) {
        this.#data.custom_id = id;
        return this;
    }
    setEmoji(emoji) {
        this.#data.emoji = emoji;
        return this;
    }
    setDisabled(disabled = true) {
        this.#data.disabled = disabled;
        return this;
    }
    setURL(url) {
        this.#data.url = url;
        return this;
    }
    toJSON() {
        return { ...this.#data, type: this.type };
    }
}
exports.ButtonBuilder = ButtonBuilder;

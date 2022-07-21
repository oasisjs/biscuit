"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMenuOptionBuilder = void 0;
class SelectMenuOptionBuilder {
    constructor() {
        this.#data = {};
    }
    #data;
    setLabel(label) {
        this.#data.label = label;
        return this;
    }
    setValue(value) {
        this.#data.value = value;
        return this;
    }
    setDescription(description) {
        this.#data.description = description;
        return this;
    }
    setDefault(Default = true) {
        this.#data.default = Default;
        return this;
    }
    setEmoji(emoji) {
        this.#data.emoji = emoji;
        return this;
    }
    toJSON() {
        return { ...this.#data };
    }
}
exports.SelectMenuOptionBuilder = SelectMenuOptionBuilder;

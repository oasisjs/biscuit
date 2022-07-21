"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputTextBuilder = void 0;
class InputTextBuilder {
    constructor() {
        this.#data = {};
        this.type = 4;
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
    setPlaceholder(placeholder) {
        this.#data.placeholder = placeholder;
        return this;
    }
    setLength(max, min) {
        this.#data.max_length = max;
        this.#data.min_length = min;
        return this;
    }
    setCustomId(id) {
        this.#data.custom_id = id;
        return this;
    }
    setValue(value) {
        this.#data.value = value;
        return this;
    }
    setRequired(required = true) {
        this.#data.required = required;
        return this;
    }
    toJSON() {
        return { ...this.#data, type: this.type };
    }
}
exports.InputTextBuilder = InputTextBuilder;

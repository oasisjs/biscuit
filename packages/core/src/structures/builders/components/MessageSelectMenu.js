"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMenuBuilder = void 0;
/* eslint-disable arrow-parens */
const api_types_1 = require("@biscuit/api-types");
class SelectMenuBuilder {
    constructor() {
        this.#data = {};
        this.type = api_types_1.MessageComponentTypes.SelectMenu;
        this.options = [];
    }
    #data;
    type;
    options;
    setPlaceholder(placeholder) {
        this.#data.placeholder = placeholder;
        return this;
    }
    setValues(max, min) {
        this.#data.max_values = max;
        this.#data.min_values = min;
        return this;
    }
    setDisabled(disabled = true) {
        this.#data.disabled = disabled;
        return this;
    }
    setCustomId(id) {
        this.#data.custom_id = id;
        return this;
    }
    setOptions(...options) {
        this.options.splice(0, this.options.length, ...options);
        return this;
    }
    addOptions(...options) {
        this.options.push(...options);
        return this;
    }
    toJSON() {
        return {
            ...this.#data,
            type: this.type,
            options: this.options.map((option) => option.toJSON()),
        };
    }
}
exports.SelectMenuBuilder = SelectMenuBuilder;

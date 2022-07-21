"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
const api_types_1 = require("@biscuit/api-types");
class BaseComponent {
    constructor(type) {
        this.type = type;
    }
    type;
    isActionRow() {
        return this.type === api_types_1.MessageComponentTypes.ActionRow;
    }
    isButton() {
        return this.type === api_types_1.MessageComponentTypes.Button;
    }
    isSelectMenu() {
        return this.type === api_types_1.MessageComponentTypes.SelectMenu;
    }
    isTextInput() {
        return this.type === api_types_1.MessageComponentTypes.InputText;
    }
}
exports.BaseComponent = BaseComponent;
exports.default = BaseComponent;

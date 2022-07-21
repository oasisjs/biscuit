"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentFactory = void 0;
const api_types_1 = require("@biscuit/api-types");
const ActionRowComponent_1 = __importDefault(require("./ActionRowComponent"));
const ButtonComponent_1 = __importDefault(require("./ButtonComponent"));
const ButtonComponent_2 = __importDefault(require("./ButtonComponent"));
const SelectMenuComponent_1 = __importDefault(require("./SelectMenuComponent"));
const TextInputComponent_1 = __importDefault(require("./TextInputComponent"));
class ComponentFactory {
    /**
     * Component factory
     * @internal
     */
    static from(session, component) {
        switch (component.type) {
            case api_types_1.MessageComponentTypes.ActionRow:
                return new ActionRowComponent_1.default(session, component);
            case api_types_1.MessageComponentTypes.Button:
                if (component.style === api_types_1.ButtonStyles.Link)
                    return new ButtonComponent_2.default(session, component);
                return new ButtonComponent_1.default(session, component);
            case api_types_1.MessageComponentTypes.SelectMenu:
                return new SelectMenuComponent_1.default(session, component);
            case api_types_1.MessageComponentTypes.InputText:
                return new TextInputComponent_1.default(session, component);
        }
    }
}
exports.ComponentFactory = ComponentFactory;
exports.default = ComponentFactory;

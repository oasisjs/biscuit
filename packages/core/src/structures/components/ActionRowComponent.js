"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionRow = void 0;
const api_types_1 = require("@biscuit/api-types");
const Component_1 = __importDefault(require("./Component"));
const ButtonComponent_1 = __importDefault(require("./ButtonComponent"));
const LinkButtonComponent_1 = __importDefault(require("./LinkButtonComponent"));
const SelectMenuComponent_1 = __importDefault(require("./SelectMenuComponent"));
const TextInputComponent_1 = __importDefault(require("./TextInputComponent"));
class ActionRow extends Component_1.default {
    constructor(session, data) {
        super(data.type);
        this.session = session;
        this.type = data.type;
        this.components = data.components.map((component) => {
            switch (component.type) {
                case api_types_1.MessageComponentTypes.Button:
                    if (component.style === api_types_1.ButtonStyles.Link) {
                        return new LinkButtonComponent_1.default(session, component);
                    }
                    return new ButtonComponent_1.default(session, component);
                case api_types_1.MessageComponentTypes.SelectMenu:
                    return new SelectMenuComponent_1.default(session, component);
                case api_types_1.MessageComponentTypes.InputText:
                    return new TextInputComponent_1.default(session, component);
                case api_types_1.MessageComponentTypes.ActionRow:
                    throw new Error('Cannot have an action row inside an action row');
            }
        });
    }
    session;
    type;
    components;
}
exports.ActionRow = ActionRow;
exports.default = ActionRow;

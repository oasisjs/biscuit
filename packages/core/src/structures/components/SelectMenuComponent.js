"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMenu = void 0;
const Component_1 = __importDefault(require("./Component"));
const Emoji_1 = __importDefault(require("../Emoji"));
class SelectMenu extends Component_1.default {
    constructor(session, data) {
        super(data.type);
        this.session = session;
        this.type = data.type;
        this.customId = data.custom_id;
        this.options = data.options.map((option) => {
            return {
                label: option.label,
                description: option.description,
                emoji: option.emoji || new Emoji_1.default(session, option.emoji),
                value: option.value,
            };
        });
        this.placeholder = data.placeholder;
        this.minValues = data.min_values;
        this.maxValues = data.max_values;
        this.disabled = data.disabled;
    }
    session;
    type;
    customId;
    options;
    placeholder;
    minValues;
    maxValues;
    disabled;
}
exports.SelectMenu = SelectMenu;
exports.default = SelectMenu;

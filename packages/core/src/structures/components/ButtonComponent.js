"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Component_1 = __importDefault(require("./Component"));
const Emoji_1 = __importDefault(require("../Emoji"));
class Button extends Component_1.default {
    constructor(session, data) {
        super(data.type);
        this.session = session;
        this.type = data.type;
        this.customId = data.custom_id;
        this.label = data.label;
        this.style = data.style;
        this.disabled = data.disabled;
        if (data.emoji) {
            this.emoji = new Emoji_1.default(session, data.emoji);
        }
    }
    session;
    type;
    customId;
    label;
    style;
    disabled;
    emoji;
}
exports.Button = Button;
exports.default = Button;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkButton = void 0;
const Component_1 = __importDefault(require("./Component"));
const Emoji_1 = __importDefault(require("../Emoji"));
class LinkButton extends Component_1.default {
    constructor(session, data) {
        super(data.type);
        this.session = session;
        this.type = data.type;
        this.url = data.url;
        this.label = data.label;
        this.style = data.style;
        this.disabled = data.disabled;
        if (data.emoji) {
            this.emoji = new Emoji_1.default(session, data.emoji);
        }
    }
    session;
    type;
    url;
    label;
    style;
    disabled;
    emoji;
}
exports.LinkButton = LinkButton;
exports.default = LinkButton;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const Component_1 = __importDefault(require("./Component"));
class TextInput extends Component_1.default {
    constructor(session, data) {
        super(data.type);
        this.session = session;
        this.type = data.type;
        this.customId = data.custom_id;
        this.label = data.label;
        this.style = data.style;
        this.placeholder = data.placeholder;
        this.value = data.value;
        this.minLength = data.min_length;
        this.maxLength = data.max_length;
    }
    session;
    type;
    style;
    customId;
    label;
    placeholder;
    value;
    minLength;
    maxLength;
}
exports.TextInput = TextInput;
exports.default = TextInput;

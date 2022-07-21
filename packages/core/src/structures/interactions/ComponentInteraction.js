"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentInteraction = void 0;
const api_types_1 = require("@biscuit/api-types");
const BaseInteraction_1 = __importDefault(require("./BaseInteraction"));
const Message_1 = __importDefault(require("../Message"));
class ComponentInteraction extends BaseInteraction_1.default {
    constructor(session, data) {
        super(session, data);
        this.type = data.type;
        this.componentType = data.data.component_type;
        this.customId = data.data.custom_id;
        this.targetId = data.data.target_id;
        this.values = data.data.values;
        this.message = new Message_1.default(session, data.message);
    }
    type;
    componentType;
    customId;
    targetId;
    values;
    message;
    // TODO: create interface/class for components types
    isButton() {
        return this.componentType === api_types_1.MessageComponentTypes.Button;
    }
    isActionRow() {
        return this.componentType === api_types_1.MessageComponentTypes.ActionRow;
    }
    isTextInput() {
        return this.componentType === api_types_1.MessageComponentTypes.InputText;
    }
    isSelectMenu() {
        return this.componentType === api_types_1.MessageComponentTypes.SelectMenu;
    }
    async deferUpdate() {
        await this.respond({
            type: api_types_1.InteractionResponseTypes.DeferredUpdateMessage,
        });
    }
}
exports.ComponentInteraction = ComponentInteraction;
exports.default = ComponentInteraction;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalSubmitInteraction = void 0;
const BaseInteraction_1 = __importDefault(require("./BaseInteraction"));
const Message_1 = __importDefault(require("../Message"));
class ModalSubmitInteraction extends BaseInteraction_1.default {
    constructor(session, data) {
        super(session, data);
        this.type = data.type;
        this.componentType = data.data.component_type;
        this.customId = data.data.custom_id;
        this.targetId = data.data.target_id;
        this.values = data.data.values;
        this.components = data.data?.components?.map(ModalSubmitInteraction.transformComponent);
        if (data.message) {
            this.message = new Message_1.default(session, data.message);
        }
    }
    type;
    componentType;
    customId;
    targetId;
    values;
    message;
    components;
    static transformComponent(component) {
        return {
            type: component.type,
            components: component.components.map((component) => {
                return {
                    customId: component.custom_id,
                    value: component
                        .value,
                };
            }),
        };
    }
    inMessage() {
        return !!this.message;
    }
}
exports.ModalSubmitInteraction = ModalSubmitInteraction;
exports.default = ModalSubmitInteraction;

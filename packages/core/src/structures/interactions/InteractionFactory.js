"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionFactory = void 0;
const api_types_1 = require("@biscuit/api-types");
const User_1 = __importDefault(require("../User"));
const CommandInteraction_1 = __importDefault(require("./CommandInteraction"));
const ComponentInteraction_1 = __importDefault(require("./ComponentInteraction"));
const PingInteraction_1 = __importDefault(require("./PingInteraction"));
const AutoCompleteInteraction_1 = __importDefault(require("./AutoCompleteInteraction"));
const ModalSubmitInteraction_1 = __importDefault(require("./ModalSubmitInteraction"));
class InteractionFactory {
    static from(session, interaction) {
        switch (interaction.type) {
            case api_types_1.InteractionTypes.Ping:
                return new PingInteraction_1.default(session, interaction);
            case api_types_1.InteractionTypes.ApplicationCommand:
                return new CommandInteraction_1.default(session, interaction);
            case api_types_1.InteractionTypes.MessageComponent:
                return new ComponentInteraction_1.default(session, interaction);
            case api_types_1.InteractionTypes.ApplicationCommandAutocomplete:
                return new AutoCompleteInteraction_1.default(session, interaction);
            case api_types_1.InteractionTypes.ModalSubmit:
                return new ModalSubmitInteraction_1.default(session, interaction);
        }
    }
    static fromMessage(session, interaction, _guildId) {
        const obj = {
            id: interaction.id,
            type: interaction.type,
            name: interaction.name,
            user: new User_1.default(session, interaction.user),
            // TODO: Parse member somehow with the guild id passed in message
        };
        return obj;
    }
}
exports.InteractionFactory = InteractionFactory;
exports.default = InteractionFactory;

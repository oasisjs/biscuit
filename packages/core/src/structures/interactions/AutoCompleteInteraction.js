"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteInteraction = void 0;
const api_types_1 = require("@biscuit/api-types");
const BaseInteraction_1 = __importDefault(require("./BaseInteraction"));
const Routes = __importStar(require("../../Routes"));
class AutoCompleteInteraction extends BaseInteraction_1.default {
    constructor(session, data) {
        super(session, data);
        this.type = data.type;
        this.commandId = data.data.id;
        this.commandName = data.data.name;
        this.commandType = data.data.type;
        this.commandGuildId = data.data.guild_id;
    }
    type;
    commandId;
    commandName;
    commandType;
    commandGuildId;
    async respondWithChoices(choices) {
        await this.session.rest.runMethod(this.session.rest, 'POST', Routes.INTERACTION_ID_TOKEN(this.id, this.token), {
            data: { choices },
            type: api_types_1.InteractionResponseTypes.ApplicationCommandAutocompleteResult,
        });
    }
}
exports.AutoCompleteInteraction = AutoCompleteInteraction;
exports.default = AutoCompleteInteraction;

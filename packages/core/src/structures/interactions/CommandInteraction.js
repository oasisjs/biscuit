"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandInteraction = void 0;
const BaseInteraction_1 = __importDefault(require("./BaseInteraction"));
const CommandInteractionOptionResolver_1 = __importDefault(require("./CommandInteractionOptionResolver"));
const Attachment_1 = __importDefault(require("../Attachment"));
const User_1 = __importDefault(require("../User"));
const Member_1 = __importDefault(require("../Member"));
const Message_1 = __importDefault(require("../Message"));
const Role_1 = __importDefault(require("../Role"));
class CommandInteraction extends BaseInteraction_1.default {
    constructor(session, data) {
        super(session, data);
        this.type = data.type;
        this.commandId = data.data.id;
        this.commandName = data.data.name;
        this.commandType = data.data.type;
        this.commandGuildId = data.data.guild_id;
        this.options = new CommandInteractionOptionResolver_1.default(data.data.options ?? []);
        this.resolved = {
            users: new Map(),
            members: new Map(),
            roles: new Map(),
            attachments: new Map(),
            messages: new Map(),
        };
        if (data.data.resolved?.users) {
            for (const [id, u] of Object.entries(data.data.resolved.users)) {
                this.resolved.users.set(id, new User_1.default(session, u));
            }
        }
        if (data.data.resolved?.members && !!super.guildId) {
            for (const [id, m] of Object.entries(data.data.resolved.members)) {
                this.resolved.members.set(id, new Member_1.default(session, m, super.guildId));
            }
        }
        if (data.data.resolved?.roles && !!super.guildId) {
            for (const [id, r] of Object.entries(data.data.resolved.roles)) {
                this.resolved.roles.set(id, new Role_1.default(session, r, super.guildId));
            }
        }
        if (data.data.resolved?.attachments) {
            for (const [id, a] of Object.entries(data.data.resolved.attachments)) {
                this.resolved.attachments.set(id, new Attachment_1.default(session, a));
            }
        }
        if (data.data.resolved?.messages) {
            for (const [id, m] of Object.entries(data.data.resolved.messages)) {
                this.resolved.messages.set(id, new Message_1.default(session, m));
            }
        }
    }
    type;
    commandId;
    commandName;
    commandType;
    commandGuildId;
    resolved;
    options;
}
exports.CommandInteraction = CommandInteraction;
exports.default = CommandInteraction;

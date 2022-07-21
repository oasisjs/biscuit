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
exports.BaseInteraction = void 0;
const api_types_1 = require("@biscuit/api-types");
const Snowflake_1 = require("../../Snowflake");
const User_1 = __importDefault(require("../User"));
const Member_1 = __importDefault(require("../Member"));
const Message_1 = __importDefault(require("../Message"));
const Permissions_1 = __importDefault(require("../Permissions"));
const Webhook_1 = __importDefault(require("../Webhook"));
const Routes = __importStar(require("../../Routes"));
class BaseInteraction {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.token = data.token;
        this.type = data.type;
        this.guildId = data.guild_id;
        this.channelId = data.channel_id;
        this.applicationId = data.application_id;
        this.version = data.version;
        // @ts-expect-error: vendor error
        const perms = data.app_permissions;
        if (perms) {
            this.appPermissions = new Permissions_1.default(BigInt(perms));
        }
        if (!data.guild_id) {
            this.user = new User_1.default(session, data.user);
        }
        else {
            this.member = new Member_1.default(session, data.member, data.guild_id);
        }
    }
    session;
    id;
    token;
    type;
    guildId;
    channelId;
    applicationId;
    user;
    member;
    appPermissions;
    version;
    responded = false;
    get createdTimestamp() {
        return Snowflake_1.Snowflake.snowflakeToTimestamp(this.id);
    }
    get createdAt() {
        return new Date(this.createdTimestamp);
    }
    isCommand() {
        return this.type === api_types_1.InteractionTypes.ApplicationCommand;
    }
    isAutoComplete() {
        return this.type === api_types_1.InteractionTypes.ApplicationCommandAutocomplete;
    }
    isComponent() {
        return this.type === api_types_1.InteractionTypes.MessageComponent;
    }
    isPing() {
        return this.type === api_types_1.InteractionTypes.Ping;
    }
    isModalSubmit() {
        return this.type === api_types_1.InteractionTypes.ModalSubmit;
    }
    inGuild() {
        return !!this.guildId;
    }
    // webhooks methods:
    async editReply(options) {
        const message = await this.session.rest.runMethod(this.session.rest, 'PATCH', options.messageId
            ? Routes.WEBHOOK_MESSAGE(this.id, this.token, options.messageId)
            : Routes.WEBHOOK_MESSAGE_ORIGINAL(this.id, this.token), {
            content: options.content,
            embeds: options.embeds,
            file: options.files,
            components: options.components,
            allowed_mentions: options.allowedMentions && {
                parse: options.allowedMentions.parse,
                replied_user: options.allowedMentions.repliedUser,
                users: options.allowedMentions.users,
                roles: options.allowedMentions.roles,
            },
            attachments: options.attachments?.map((attachment) => {
                return {
                    id: attachment.id,
                    filename: attachment.name,
                    content_type: attachment.contentType,
                    size: attachment.size,
                    url: attachment.attachment,
                    proxy_url: attachment.proxyUrl,
                    height: attachment.height,
                    width: attachment.width,
                };
            }),
            message_id: options.messageId,
        });
        if (!message || !options.messageId) {
            return message;
        }
        return new Message_1.default(this.session, message);
    }
    async sendFollowUp(options) {
        const message = await Webhook_1.default.prototype.execute.call({
            id: this.applicationId,
            token: this.token,
            session: this.session,
        }, options);
        return message;
    }
    async editFollowUp(messageId, options) {
        const message = await Webhook_1.default.prototype.editMessage.call({
            id: this.session.applicationId,
            token: this.token,
        }, messageId, options);
        return message;
    }
    async deleteFollowUp(messageId, options) {
        await Webhook_1.default.prototype.deleteMessage.call({
            id: this.session.applicationId,
            token: this.token,
        }, messageId, options);
    }
    async fetchFollowUp(messageId, options) {
        const message = await Webhook_1.default.prototype.fetchMessage.call({
            id: this.session.applicationId,
            token: this.token,
        }, messageId, options);
        return message;
    }
    async respond(resp) {
        const options = 'with' in resp ? resp.with : resp.data;
        const type = 'type' in resp
            ? resp.type
            : api_types_1.InteractionResponseTypes.ChannelMessageWithSource;
        const data = {
            content: options?.content,
            custom_id: options?.customId,
            file: options?.files,
            allowed_mentions: options?.allowedMentions,
            flags: options?.flags,
            chocies: options?.choices,
            embeds: options?.embeds,
            title: options?.title,
            components: options?.components,
        };
        if (!this.responded) {
            await this.session.rest.sendRequest(this.session.rest, {
                url: Routes.INTERACTION_ID_TOKEN(this.id, this.token),
                method: 'POST',
                payload: this.session.rest.createRequestBody(this.session.rest, {
                    method: 'POST',
                    body: { type, data, file: options?.files },
                    headers: { Authorization: '' },
                }),
            });
            this.responded = true;
            return;
        }
        return this.sendFollowUp(data);
    }
    // start custom methods
    async respondWith(resp) {
        const m = await this.respond({ with: resp });
        return m;
    }
    async defer() {
        await this.respond({
            type: api_types_1.InteractionResponseTypes.DeferredChannelMessageWithSource,
        });
    }
    async autocomplete() {
        await this.respond({
            type: api_types_1.InteractionResponseTypes.ApplicationCommandAutocompleteResult,
        });
    }
}
exports.BaseInteraction = BaseInteraction;
exports.default = BaseInteraction;

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
exports.Webhook = void 0;
const Util_1 = __importDefault(require("../Util"));
const User_1 = __importDefault(require("./User"));
const Message_1 = __importDefault(require("./Message"));
const Routes = __importStar(require("../Routes"));
class Webhook {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.type = data.type;
        this.token = data.token;
        if (data.avatar) {
            this.avatar = Util_1.default.iconHashToBigInt(data.avatar);
        }
        if (data.user) {
            this.user = new User_1.default(session, data.user);
        }
        if (data.guild_id) {
            this.guildId = data.guild_id;
        }
        if (data.channel_id) {
            this.channelId = data.channel_id;
        }
        if (data.application_id) {
            this.applicationId = data.application_id;
        }
    }
    session;
    id;
    type;
    token;
    avatar;
    applicationId;
    channelId;
    guildId;
    user;
    async execute(options) {
        if (!this.token) {
            return;
        }
        const data = {
            content: options?.content,
            embeds: options?.embeds,
            tts: options?.tts,
            allowed_mentions: options?.allowedMentions,
            components: options?.components,
            file: options?.files,
        };
        const message = this.session.rest.sendRequest(this.session.rest, {
            url: Routes.WEBHOOK(this.id, this.token, {
                wait: options?.wait,
                threadId: options?.threadId,
            }),
            method: 'POST',
            payload: this.session.rest.createRequestBody(this.session.rest, {
                method: 'POST',
                body: {
                    ...data,
                },
            }),
        });
        return options?.wait ?? true
            ? new Message_1.default(this.session, await message)
            : undefined;
    }
    async fetch() {
        const message = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.WEBHOOK_TOKEN(this.id, this.token));
        return new Webhook(this.session, message);
    }
    async fetchMessage(messageId, options) {
        if (!this.token) {
            return;
        }
        const message = await this.session.rest.runMethod(this.session.rest, 'GET', Routes.WEBHOOK_MESSAGE(this.id, this.token, messageId, options));
        return new Message_1.default(this.session, message);
    }
    async deleteMessage(messageId, options) {
        if (!this.token) {
            throw new Error('No token found');
        }
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.WEBHOOK_MESSAGE(this.id, this.token, messageId, options));
    }
    async editMessage(messageId, options) {
        if (!this.token) {
            throw new Error('No token found');
        }
        const message = await this.session.rest.runMethod(this.session.rest, 'PATCH', messageId
            ? Routes.WEBHOOK_MESSAGE(this.id, this.token, messageId)
            : Routes.WEBHOOK_MESSAGE_ORIGINAL(this.id, this.token), {
            content: options?.content,
            embeds: options?.embeds,
            file: options?.files,
            components: options?.components,
            allowed_mentions: options?.allowedMentions && {
                parse: options?.allowedMentions.parse,
                replied_user: options?.allowedMentions.repliedUser,
                users: options?.allowedMentions.users,
                roles: options?.allowedMentions.roles,
            },
            attachments: options?.attachments?.map((attachment) => {
                return {
                    id: attachment.id,
                    filename: attachment.name,
                    content_type: attachment.contentType,
                    size: attachment.size,
                    url: attachment.attachment,
                    proxy_url: attachment.proxyUrl,
                    height: attachment.height,
                    width: attachment.width,
                    ephemeral: attachment.ephemeral,
                };
            }),
        });
        return new Message_1.default(this.session, message);
    }
}
exports.Webhook = Webhook;
exports.default = Webhook;

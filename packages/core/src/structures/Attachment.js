"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
/**
 * Represents an attachment
 * @link https://discord.com/developers/docs/resources/channel#attachment-object
 */
class Attachment {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.contentType = data.content_type ? data.content_type : undefined;
        this.attachment = data.url;
        this.proxyUrl = data.proxy_url;
        this.name = data.filename;
        this.size = data.size;
        this.height = data.height ? data.height : undefined;
        this.width = data.width ? data.width : undefined;
        this.ephemeral = !!data.ephemeral;
    }
    session;
    id;
    contentType;
    attachment;
    proxyUrl;
    name;
    size;
    height;
    width;
    ephemeral;
}
exports.Attachment = Attachment;
exports.default = Attachment;

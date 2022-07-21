"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = exports.MessageFlags = void 0;
/*
 * @link https://discord.com/developers/docs/resources/channel#message-object-message-flags
 */
var MessageFlags;
(function (MessageFlags) {
    /** this message has been published to subscribed channels (via Channel Following) */
    MessageFlags[MessageFlags["CrossPosted"] = 1] = "CrossPosted";
    /** this message originated from a message in another channel (via Channel Following) */
    MessageFlags[MessageFlags["IsCrosspost"] = 2] = "IsCrosspost";
    /** do not include any embeds when serializing this message */
    MessageFlags[MessageFlags["SupressEmbeds"] = 4] = "SupressEmbeds";
    /** the source message for this crosspost has been deleted (via Channel Following) */
    MessageFlags[MessageFlags["SourceMessageDeleted"] = 8] = "SourceMessageDeleted";
    /** this message came from the urgent message system */
    MessageFlags[MessageFlags["Urgent"] = 16] = "Urgent";
    /** this message has an associated thread, with the same id as the message */
    MessageFlags[MessageFlags["HasThread"] = 32] = "HasThread";
    /** this message is only visible to the user who invoked the Interaction */
    MessageFlags[MessageFlags["Ephemeral"] = 64] = "Ephemeral";
    /** this message is an Interaction Response and the bot is "thinking" */
    MessageFlags[MessageFlags["Loading"] = 128] = "Loading";
    /** this message failed to mention some roles and add their members to the thread */
    MessageFlags[MessageFlags["FailedToMentionSomeRolesInThread"] = 256] = "FailedToMentionSomeRolesInThread";
})(MessageFlags = exports.MessageFlags || (exports.MessageFlags = {}));
/**
 * Utility functions
 */
class Util {
    static formatImageURL(url, size = 128, format) {
        return `${url}.${format || (url.includes('/a_') ? 'gif' : 'jpg')}?size=${size}`;
    }
    static iconHashToBigInt(hash) {
        return BigInt('0x' +
            (hash.startsWith('a_') ? `a${hash.substring(2)}` : `b${hash}`));
    }
    static iconBigintToHash(icon) {
        const hash = icon.toString(16);
        return hash.startsWith('a')
            ? `a_${hash.substring(1)}`
            : hash.substring(1);
    }
}
exports.Util = Util;
exports.default = Util;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoModerationExecution = void 0;
class AutoModerationExecution {
    constructor(session, data) {
        this.session = session;
        this.guildId = data.guild_id;
        this.action = Object.create({
            type: data.action.type,
            metadata: {
                channelId: data.action.metadata.channel_id,
                durationSeconds: data.action.metadata.duration_seconds,
            },
        });
        this.ruleId = data.rule_id;
        this.ruleTriggerType = data.rule_trigger_type;
        this.userId = data.user_id;
        this.content = data.content;
        if (data.channel_id) {
            this.channelId = data.channel_id;
        }
        if (data.message_id) {
            this.messageId = data.message_id;
        }
        if (data.alert_system_message_id) {
            this.alertSystemMessageId = data.alert_system_message_id;
        }
        if (data.matched_keyword) {
            this.matchedKeyword = data.matched_keyword;
        }
        if (data.matched_content) {
            this.matched_content = data.matched_content;
        }
    }
    session;
    guildId;
    action;
    ruleId;
    ruleTriggerType;
    userId;
    channelId;
    messageId;
    alertSystemMessageId;
    content;
    matchedKeyword;
    matched_content;
}
exports.AutoModerationExecution = AutoModerationExecution;

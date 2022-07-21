"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoModerationRule = void 0;
class AutoModerationRule {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.guildId = data.guild_id;
        this.name = data.name;
        this.creatorId = data.creator_id;
        this.eventType = data.event_type;
        this.triggerType = data.trigger_type;
        this.triggerMetadata = {
            keywordFilter: data.trigger_metadata.keyword_filter,
            presets: data.trigger_metadata.presets,
        };
        this.actions = data.actions.map((action) => Object.create({
            type: action.type,
            metadata: {
                channelId: action.metadata.channel_id,
                durationSeconds: action.metadata.duration_seconds,
            },
        }));
        this.enabled = !!data.enabled;
        this.exemptRoles = data.exempt_roles;
        this.exemptChannels = data.exempt_channels;
    }
    session;
    id;
    guildId;
    name;
    creatorId;
    eventType;
    triggerType;
    triggerMetadata;
    actions;
    enabled;
    exemptRoles;
    exemptChannels;
}
exports.AutoModerationRule = AutoModerationRule;

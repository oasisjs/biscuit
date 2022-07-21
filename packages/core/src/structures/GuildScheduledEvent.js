"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduledEvent = void 0;
const StageInstance_1 = require("./StageInstance");
const User_1 = __importDefault(require("./User"));
class ScheduledEvent {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.guildId = data.guild_id;
        this.channelId = data.channel_id;
        this.creatorId = data.creator_id ? data.creator_id : undefined;
        this.name = data.name;
        this.description = data.description;
        this.scheduledStartTime = data.scheduled_start_time;
        this.scheduledEndTime = data.scheduled_end_time;
        this.privacyLevel = StageInstance_1.PrivacyLevels.GuildOnly;
        this.status = data.status;
        this.entityType = data.entity_type;
        this.entityMetadata = data.entity_metadata
            ? data.entity_metadata
            : undefined;
        this.creator = data.creator
            ? new User_1.default(session, data.creator)
            : undefined;
        this.userCount = data.user_count;
        this.image = data.image ? data.image : undefined;
    }
    session;
    id;
    guildId;
    channelId;
    creatorId;
    name;
    description;
    scheduledStartTime;
    scheduledEndTime;
    privacyLevel;
    status;
    entityType;
    entityMetadata;
    creator;
    userCount;
    image;
}
exports.ScheduledEvent = ScheduledEvent;

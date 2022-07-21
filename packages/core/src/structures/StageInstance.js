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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageInstance = exports.PrivacyLevels = void 0;
const Routes = __importStar(require("../Routes"));
var PrivacyLevels;
(function (PrivacyLevels) {
    PrivacyLevels[PrivacyLevels["Public"] = 1] = "Public";
    PrivacyLevels[PrivacyLevels["GuildOnly"] = 2] = "GuildOnly";
})(PrivacyLevels = exports.PrivacyLevels || (exports.PrivacyLevels = {}));
class StageInstance {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.channelId = data.channel_id;
        this.guildId = data.guild_id;
        this.topic = data.topic;
        this.privacyLevel = data.privacy_level;
        this.discoverableDisabled = data.discoverable_disabled;
        this.guildScheduledEventId = data.guild_scheduled_event_id;
    }
    session;
    id;
    channelId;
    guildId;
    topic;
    // TODO: see if this works
    privacyLevel;
    discoverableDisabled;
    guildScheduledEventId;
    async edit(options) {
        const stageInstance = await this.session.rest.runMethod(this.session.rest, 'PATCH', Routes.STAGE_INSTANCE(this.id), {
            topic: options.topic,
            privacy_level: options.privacyLevel,
        });
        return new StageInstance(this.session, stageInstance);
    }
    async delete() {
        await this.session.rest.runMethod(this.session.rest, 'DELETE', Routes.STAGE_INSTANCE(this.id));
    }
}
exports.StageInstance = StageInstance;
exports.default = StageInstance;

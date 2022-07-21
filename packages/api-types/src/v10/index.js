"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoModerationActionType = exports.DiscordAutoModerationRuleTriggerMetadataPresets = exports.AutoModerationTriggerTypes = exports.AutoModerationEventTypes = void 0;
var AutoModerationEventTypes;
(function (AutoModerationEventTypes) {
    /** When a user sends a message */
    AutoModerationEventTypes[AutoModerationEventTypes["MessageSend"] = 1] = "MessageSend";
})(AutoModerationEventTypes = exports.AutoModerationEventTypes || (exports.AutoModerationEventTypes = {}));
var AutoModerationTriggerTypes;
(function (AutoModerationTriggerTypes) {
    AutoModerationTriggerTypes[AutoModerationTriggerTypes["Keyword"] = 1] = "Keyword";
    AutoModerationTriggerTypes[AutoModerationTriggerTypes["HarmfulLink"] = 2] = "HarmfulLink";
    AutoModerationTriggerTypes[AutoModerationTriggerTypes["Spam"] = 3] = "Spam";
    AutoModerationTriggerTypes[AutoModerationTriggerTypes["KeywordPreset"] = 4] = "KeywordPreset";
})(AutoModerationTriggerTypes = exports.AutoModerationTriggerTypes || (exports.AutoModerationTriggerTypes = {}));
var DiscordAutoModerationRuleTriggerMetadataPresets;
(function (DiscordAutoModerationRuleTriggerMetadataPresets) {
    /** Words that may be considered forms of swearing or cursing */
    DiscordAutoModerationRuleTriggerMetadataPresets[DiscordAutoModerationRuleTriggerMetadataPresets["Profanity"] = 1] = "Profanity";
    /** Words that refer to sexually explicit behavior or activity */
    DiscordAutoModerationRuleTriggerMetadataPresets[DiscordAutoModerationRuleTriggerMetadataPresets["SexualContent"] = 2] = "SexualContent";
    /** Personal insults or words that may be considered hate speech */
    DiscordAutoModerationRuleTriggerMetadataPresets[DiscordAutoModerationRuleTriggerMetadataPresets["Slurs"] = 3] = "Slurs";
})(DiscordAutoModerationRuleTriggerMetadataPresets = exports.DiscordAutoModerationRuleTriggerMetadataPresets || (exports.DiscordAutoModerationRuleTriggerMetadataPresets = {}));
var AutoModerationActionType;
(function (AutoModerationActionType) {
    /** Blocks the content of a message according to the rule */
    AutoModerationActionType[AutoModerationActionType["BlockMessage"] = 1] = "BlockMessage";
    /** Logs user content to a specified channel */
    AutoModerationActionType[AutoModerationActionType["SendAlertMessage"] = 2] = "SendAlertMessage";
    /** Times out user for specified duration */
    AutoModerationActionType[AutoModerationActionType["Timeout"] = 3] = "Timeout";
})(AutoModerationActionType = exports.AutoModerationActionType || (exports.AutoModerationActionType = {}));

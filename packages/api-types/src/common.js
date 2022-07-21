"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionResponseTypes = exports.Intents = exports.GatewayIntents = exports.GatewayOpcodes = exports.InviteTargetTypes = exports.GatewayCloseEventCodes = exports.HTTPResponseCodes = exports.RpcCloseEventCodes = exports.RpcErrorCodes = exports.VoiceCloseEventCodes = exports.VoiceOpcodes = exports.BitwisePermissionFlags = exports.ActivityFlags = exports.ApplicationCommandPermissionTypes = exports.ApplicationCommandTypes = exports.TargetTypes = exports.ScheduledEventStatus = exports.ScheduledEventEntityType = exports.ScheduledEventPrivacyLevel = exports.AuditLogEvents = exports.ApplicationCommandOptionTypes = exports.InteractionTypes = exports.StickerFormatTypes = exports.StickerTypes = exports.MessageActivityTypes = exports.MessageTypes = exports.ActivityTypes = exports.VideoQualityModes = exports.OverwriteTypes = exports.ChannelTypes = exports.GuildNsfwLevel = exports.PremiumTiers = exports.SystemChannelFlags = exports.MfaLevels = exports.GuildFeatures = exports.VerificationLevels = exports.ExplicitContentFilterLevels = exports.DefaultMessageNotificationLevels = exports.WebhookTypes = exports.AllowedMentionsTypes = exports.ButtonStyles = exports.TextStyles = exports.MessageComponentTypes = exports.ApplicationFlags = exports.TeamMembershipStates = exports.VisibilityTypes = exports.IntegrationExpireBehaviors = exports.ChannelFlags = exports.UserFlags = exports.PremiumTypes = void 0;
exports.Locales = exports.Errors = void 0;
/* eslint-disable no-mixed-spaces-and-tabs */
/** https://discord.com/developers/docs/resources/user#user-object-premium-types */
var PremiumTypes;
(function (PremiumTypes) {
    PremiumTypes[PremiumTypes["None"] = 0] = "None";
    PremiumTypes[PremiumTypes["NitroClassic"] = 1] = "NitroClassic";
    PremiumTypes[PremiumTypes["Nitro"] = 2] = "Nitro";
})(PremiumTypes = exports.PremiumTypes || (exports.PremiumTypes = {}));
/** https://discord.com/developers/docs/resources/user#user-object-user-flags */
var UserFlags;
(function (UserFlags) {
    UserFlags[UserFlags["DiscordEmployee"] = 1] = "DiscordEmployee";
    UserFlags[UserFlags["PartneredServerOwner"] = 2] = "PartneredServerOwner";
    UserFlags[UserFlags["HypeSquadEventsMember"] = 4] = "HypeSquadEventsMember";
    UserFlags[UserFlags["BugHunterLevel1"] = 8] = "BugHunterLevel1";
    UserFlags[UserFlags["HouseBravery"] = 64] = "HouseBravery";
    UserFlags[UserFlags["HouseBrilliance"] = 128] = "HouseBrilliance";
    UserFlags[UserFlags["HouseBalance"] = 256] = "HouseBalance";
    UserFlags[UserFlags["EarlySupporter"] = 512] = "EarlySupporter";
    UserFlags[UserFlags["TeamUser"] = 1024] = "TeamUser";
    UserFlags[UserFlags["BugHunterLevel2"] = 16384] = "BugHunterLevel2";
    UserFlags[UserFlags["VerifiedBot"] = 65536] = "VerifiedBot";
    UserFlags[UserFlags["EarlyVerifiedBotDeveloper"] = 131072] = "EarlyVerifiedBotDeveloper";
    UserFlags[UserFlags["DiscordCertifiedModerator"] = 262144] = "DiscordCertifiedModerator";
    UserFlags[UserFlags["BotHttpInteractions"] = 524288] = "BotHttpInteractions";
})(UserFlags = exports.UserFlags || (exports.UserFlags = {}));
/** https://discord.com/developers/docs/resources/channel#channels-resource */
var ChannelFlags;
(function (ChannelFlags) {
    ChannelFlags[ChannelFlags["None"] = 0] = "None";
    ChannelFlags[ChannelFlags["Pinned"] = 2] = "Pinned";
})(ChannelFlags = exports.ChannelFlags || (exports.ChannelFlags = {}));
/** https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors */
var IntegrationExpireBehaviors;
(function (IntegrationExpireBehaviors) {
    IntegrationExpireBehaviors[IntegrationExpireBehaviors["RemoveRole"] = 0] = "RemoveRole";
    IntegrationExpireBehaviors[IntegrationExpireBehaviors["Kick"] = 1] = "Kick";
})(IntegrationExpireBehaviors = exports.IntegrationExpireBehaviors || (exports.IntegrationExpireBehaviors = {}));
/** https://discord.com/developers/docs/resources/user#connection-object-visibility-types */
var VisibilityTypes;
(function (VisibilityTypes) {
    /** Invisible to everyone except the user themselves */
    VisibilityTypes[VisibilityTypes["None"] = 0] = "None";
    /** Visible to everyone */
    VisibilityTypes[VisibilityTypes["Everyone"] = 1] = "Everyone";
})(VisibilityTypes = exports.VisibilityTypes || (exports.VisibilityTypes = {}));
/** https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum */
var TeamMembershipStates;
(function (TeamMembershipStates) {
    TeamMembershipStates[TeamMembershipStates["Invited"] = 1] = "Invited";
    TeamMembershipStates[TeamMembershipStates["Accepted"] = 2] = "Accepted";
})(TeamMembershipStates = exports.TeamMembershipStates || (exports.TeamMembershipStates = {}));
/** https://discord.com/developers/docs/topics/oauth2#application-application-flags */
var ApplicationFlags;
(function (ApplicationFlags) {
    /** Intent required for bots in **100 or more servers** to receive [`presence_update` events](#DOCS_TOPICS_GATEWAY/presence-update) */
    ApplicationFlags[ApplicationFlags["GatewayPresence"] = 4096] = "GatewayPresence";
    /** Intent required for bots in under 100 servers to receive [`presence_update` events](#DOCS_TOPICS_GATEWAY/presence-update), found in Bot Settings */
    ApplicationFlags[ApplicationFlags["GatewayPresenceLimited"] = 8192] = "GatewayPresenceLimited";
    /** Intent required for bots in **100 or more servers** to receive member-related events like `guild_member_add`. See list of member-related events [under `GUILD_MEMBERS`](#DOCS_TOPICS_GATEWAY/list-of-intents) */
    ApplicationFlags[ApplicationFlags["GatewayGuildMembers"] = 16384] = "GatewayGuildMembers";
    /** Intent required for bots in under 100 servers to receive member-related events like `guild_member_add`, found in Bot Settings. See list of member-related events [under `GUILD_MEMBERS`](#DOCS_TOPICS_GATEWAY/list-of-intents) */
    ApplicationFlags[ApplicationFlags["GatewayGuildMembersLimited"] = 32768] = "GatewayGuildMembersLimited";
    /** Indicates unusual growth of an app that prevents verification */
    ApplicationFlags[ApplicationFlags["VerificationPendingGuildLimit"] = 65536] = "VerificationPendingGuildLimit";
    /** Indicates if an app is embedded within the Discord client (currently unavailable publicly) */
    ApplicationFlags[ApplicationFlags["Embedded"] = 131072] = "Embedded";
    /** Intent required for bots in **100 or more servers** to receive [message content](https://support-dev.discord.com/hc/en-us/articles/4404772028055) */
    ApplicationFlags[ApplicationFlags["GatewayMessageCount"] = 262144] = "GatewayMessageCount";
    /** Intent required for bots in under 100 servers to receive [message content](https://support-dev.discord.com/hc/en-us/articles/4404772028055), found in Bot Settings */
    ApplicationFlags[ApplicationFlags["GatewayMessageContentLimited"] = 524288] = "GatewayMessageContentLimited";
})(ApplicationFlags = exports.ApplicationFlags || (exports.ApplicationFlags = {}));
/** https://discord.com/developers/docs/interactions/message-components#component-types */
var MessageComponentTypes;
(function (MessageComponentTypes) {
    /** A container for other components */
    MessageComponentTypes[MessageComponentTypes["ActionRow"] = 1] = "ActionRow";
    /** A button object */
    MessageComponentTypes[MessageComponentTypes["Button"] = 2] = "Button";
    /** A select menu for picking from choices */
    MessageComponentTypes[MessageComponentTypes["SelectMenu"] = 3] = "SelectMenu";
    /** A text input object */
    MessageComponentTypes[MessageComponentTypes["InputText"] = 4] = "InputText";
})(MessageComponentTypes = exports.MessageComponentTypes || (exports.MessageComponentTypes = {}));
var TextStyles;
(function (TextStyles) {
    /** Intended for short single-line text */
    TextStyles[TextStyles["Short"] = 1] = "Short";
    /** Intended for much longer inputs */
    TextStyles[TextStyles["Paragraph"] = 2] = "Paragraph";
})(TextStyles = exports.TextStyles || (exports.TextStyles = {}));
/** https://discord.com/developers/docs/interactions/message-components#buttons-button-styles */
var ButtonStyles;
(function (ButtonStyles) {
    /** A blurple button */
    ButtonStyles[ButtonStyles["Primary"] = 1] = "Primary";
    /** A grey button */
    ButtonStyles[ButtonStyles["Secondary"] = 2] = "Secondary";
    /** A green button */
    ButtonStyles[ButtonStyles["Success"] = 3] = "Success";
    /** A red button */
    ButtonStyles[ButtonStyles["Danger"] = 4] = "Danger";
    /** A button that navigates to a URL */
    ButtonStyles[ButtonStyles["Link"] = 5] = "Link";
})(ButtonStyles = exports.ButtonStyles || (exports.ButtonStyles = {}));
/** https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types */
var AllowedMentionsTypes;
(function (AllowedMentionsTypes) {
    /** Controls role mentions */
    AllowedMentionsTypes["RoleMentions"] = "roles";
    /** Controls user mentions */
    AllowedMentionsTypes["UserMentions"] = "users";
    /** Controls @everyone and @here mentions */
    AllowedMentionsTypes["EveryoneMentions"] = "everyone";
})(AllowedMentionsTypes = exports.AllowedMentionsTypes || (exports.AllowedMentionsTypes = {}));
/** https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types */
var WebhookTypes;
(function (WebhookTypes) {
    /** Incoming Webhooks can post messages to channels with a generated token */
    WebhookTypes[WebhookTypes["Incoming"] = 1] = "Incoming";
    /** Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels */
    WebhookTypes[WebhookTypes["ChannelFollower"] = 2] = "ChannelFollower";
    /** Application webhooks are webhooks used with Interactions */
    WebhookTypes[WebhookTypes["Application"] = 3] = "Application";
})(WebhookTypes = exports.WebhookTypes || (exports.WebhookTypes = {}));
/** https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level */
var DefaultMessageNotificationLevels;
(function (DefaultMessageNotificationLevels) {
    /** Members will receive notifications for all messages by default */
    DefaultMessageNotificationLevels[DefaultMessageNotificationLevels["AllMessages"] = 0] = "AllMessages";
    /** Members will receive notifications only for messages that @mention them by default */
    DefaultMessageNotificationLevels[DefaultMessageNotificationLevels["OnlyMentions"] = 1] = "OnlyMentions";
})(DefaultMessageNotificationLevels = exports.DefaultMessageNotificationLevels || (exports.DefaultMessageNotificationLevels = {}));
/** https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level */
var ExplicitContentFilterLevels;
(function (ExplicitContentFilterLevels) {
    /** Media content will not be scanned */
    ExplicitContentFilterLevels[ExplicitContentFilterLevels["Disabled"] = 0] = "Disabled";
    /** Media content sent by members without roles will be scanned */
    ExplicitContentFilterLevels[ExplicitContentFilterLevels["MembersWithoutRoles"] = 1] = "MembersWithoutRoles";
    /** Media content sent by all members will be scanned */
    ExplicitContentFilterLevels[ExplicitContentFilterLevels["AllMembers"] = 2] = "AllMembers";
})(ExplicitContentFilterLevels = exports.ExplicitContentFilterLevels || (exports.ExplicitContentFilterLevels = {}));
/** https://discord.com/developers/docs/resources/guild#guild-object-verification-level */
var VerificationLevels;
(function (VerificationLevels) {
    /** Unrestricted */
    VerificationLevels[VerificationLevels["None"] = 0] = "None";
    /** Must have verified email on account */
    VerificationLevels[VerificationLevels["Low"] = 1] = "Low";
    /** Must be registered on Discord for longer than 5 minutes */
    VerificationLevels[VerificationLevels["Medium"] = 2] = "Medium";
    /** Must be a member of the server for longer than 10 minutes */
    VerificationLevels[VerificationLevels["High"] = 3] = "High";
    /** Must have a verified phone number */
    VerificationLevels[VerificationLevels["VeryHigh"] = 4] = "VeryHigh";
})(VerificationLevels = exports.VerificationLevels || (exports.VerificationLevels = {}));
/** https://discord.com/developers/docs/resources/guild#guild-object-guild-features */
var GuildFeatures;
(function (GuildFeatures) {
    /** Guild has access to set an invite splash background */
    GuildFeatures["InviteSplash"] = "INVITE_SPLASH";
    /** Guild has access to set 384 kbps bitrate in voice (previously VIP voice servers) */
    GuildFeatures["VipRegions"] = "VIP_REGIONS";
    /** Guild has access to set a vanity URL */
    GuildFeatures["VanityUrl"] = "VANITY_URL";
    /** Guild is verified */
    GuildFeatures["Verified"] = "VERIFIED";
    /** Guild is partnered */
    GuildFeatures["Partnered"] = "PARTNERED";
    /** Guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates */
    GuildFeatures["Community"] = "COMMUNITY";
    /** Guild has access to use commerce features (i.e. create store channels) */
    GuildFeatures["Commerce"] = "COMMERCE";
    /** Guild has access to create news channels */
    GuildFeatures["News"] = "NEWS";
    /** Guild is able to be discovered in the directory */
    GuildFeatures["Discoverable"] = "DISCOVERABLE";
    /** guild cannot be discoverable */
    GuildFeatures["DiscoverableDisabled"] = "DISCOVERABLE_DISABLED";
    /** Guild is able to be featured in the directory */
    GuildFeatures["Feature"] = "FEATURABLE";
    /** Guild has access to set an animated guild icon */
    GuildFeatures["AnimatedIcon"] = "ANIMATED_ICON";
    /** Guild has access to set a guild banner image */
    GuildFeatures["Banner"] = "BANNER";
    /** Guild has enabled the welcome screen */
    GuildFeatures["WelcomeScreenEnabled"] = "WELCOME_SCREEN_ENABLED";
    /** Guild has enabled [Membership Screening](https://discord.com/developers/docs/resources/guild#membership-screening-object) */
    GuildFeatures["MemberVerificationGateEnabled"] = "MEMBER_VERIFICATION_GATE_ENABLED";
    /** Guild can be previewed before joining via Membership Screening or the directory */
    GuildFeatures["PreviewEnabled"] = "PREVIEW_ENABLED";
    /** Guild has enabled ticketed events */
    GuildFeatures["TicketedEventsEnabled"] = "TICKETED_EVENTS_ENABLED";
    /** Guild has enabled monetization */
    GuildFeatures["MonetizationEnabled"] = "MONETIZATION_ENABLED";
    /** Guild has increased custom sticker slots */
    GuildFeatures["MoreStickers"] = "MORE_STICKERS";
    /** Guild has access to create private threads */
    GuildFeatures["PrivateThreads"] = "PRIVATE_THREADS";
    /** Guild is able to set role icons */
    GuildFeatures["RoleIcons"] = "ROLE_ICONS";
    /** Guild has set up auto moderation rules */
    GuildFeatures["AutoModeration"] = "AUTO_MODERATION";
})(GuildFeatures = exports.GuildFeatures || (exports.GuildFeatures = {}));
/** https://discord.com/developers/docs/resources/guild#guild-object-mfa-level */
var MfaLevels;
(function (MfaLevels) {
    /** Guild has no MFA/2FA requirement for moderation actions */
    MfaLevels[MfaLevels["None"] = 0] = "None";
    /** Guild has a 2FA requirement for moderation actions */
    MfaLevels[MfaLevels["Elevated"] = 1] = "Elevated";
})(MfaLevels = exports.MfaLevels || (exports.MfaLevels = {}));
/** https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags */
var SystemChannelFlags;
(function (SystemChannelFlags) {
    /** Suppress member join notifications */
    SystemChannelFlags[SystemChannelFlags["SuppressJoinNotifications"] = 1] = "SuppressJoinNotifications";
    /** Suppress server boost notifications */
    SystemChannelFlags[SystemChannelFlags["SuppressPremiumSubscriptions"] = 2] = "SuppressPremiumSubscriptions";
    /** Suppress server setup tips */
    SystemChannelFlags[SystemChannelFlags["SuppressGuildReminderNotifications"] = 4] = "SuppressGuildReminderNotifications";
    /** Hide member join sticker reply buttons */
    SystemChannelFlags[SystemChannelFlags["SuppressJoinNotificationReplies"] = 8] = "SuppressJoinNotificationReplies";
})(SystemChannelFlags = exports.SystemChannelFlags || (exports.SystemChannelFlags = {}));
/** https://discord.com/developers/docs/resources/guild#guild-object-premium-tier */
var PremiumTiers;
(function (PremiumTiers) {
    /** Guild has not unlocked any Server Boost perks */
    PremiumTiers[PremiumTiers["None"] = 0] = "None";
    /** Guild has unlocked Server Boost level 1 perks */
    PremiumTiers[PremiumTiers["Tier1"] = 1] = "Tier1";
    /** Guild has unlocked Server Boost level 2 perks */
    PremiumTiers[PremiumTiers["Tier2"] = 2] = "Tier2";
    /** Guild has unlocked Server Boost level 3 perks */
    PremiumTiers[PremiumTiers["Tier3"] = 3] = "Tier3";
})(PremiumTiers = exports.PremiumTiers || (exports.PremiumTiers = {}));
/** https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level */
var GuildNsfwLevel;
(function (GuildNsfwLevel) {
    GuildNsfwLevel[GuildNsfwLevel["Default"] = 0] = "Default";
    GuildNsfwLevel[GuildNsfwLevel["Explicit"] = 1] = "Explicit";
    GuildNsfwLevel[GuildNsfwLevel["Safe"] = 2] = "Safe";
    GuildNsfwLevel[GuildNsfwLevel["AgeRestricted"] = 3] = "AgeRestricted";
})(GuildNsfwLevel = exports.GuildNsfwLevel || (exports.GuildNsfwLevel = {}));
/** https://discord.com/developers/docs/resources/channel#channel-object-channel-types */
var ChannelTypes;
(function (ChannelTypes) {
    /** A text channel within a server */
    ChannelTypes[ChannelTypes["GuildText"] = 0] = "GuildText";
    /** A direct message between users */
    ChannelTypes[ChannelTypes["DM"] = 1] = "DM";
    /** A voice channel within a server */
    ChannelTypes[ChannelTypes["GuildVoice"] = 2] = "GuildVoice";
    /** A direct message between multiple users */
    ChannelTypes[ChannelTypes["GroupDm"] = 3] = "GroupDm";
    /** An organizational category that contains up to 50 channels */
    ChannelTypes[ChannelTypes["GuildCategory"] = 4] = "GuildCategory";
    /** A channel that users can follow and crosspost into their own server */
    ChannelTypes[ChannelTypes["GuildNews"] = 5] = "GuildNews";
    /** A temporary sub-channel within a GUILD_NEWS channel */
    ChannelTypes[ChannelTypes["GuildNewsThread"] = 10] = "GuildNewsThread";
    /** A temporary sub-channel within a GUILD_TEXT channel */
    ChannelTypes[ChannelTypes["GuildPublicThread"] = 11] = "GuildPublicThread";
    /** A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission */
    ChannelTypes[ChannelTypes["GuildPrivateThread"] = 12] = "GuildPrivateThread";
    /** A voice channel for hosting events with an audience */
    ChannelTypes[ChannelTypes["GuildStageVoice"] = 13] = "GuildStageVoice";
    /** A channel in a hub containing the listed servers */
    ChannelTypes[ChannelTypes["GuildDirectory"] = 14] = "GuildDirectory";
    /** A channel which can only contains threads */
    ChannelTypes[ChannelTypes["GuildForum"] = 15] = "GuildForum";
})(ChannelTypes = exports.ChannelTypes || (exports.ChannelTypes = {}));
var OverwriteTypes;
(function (OverwriteTypes) {
    OverwriteTypes[OverwriteTypes["Role"] = 0] = "Role";
    OverwriteTypes[OverwriteTypes["Member"] = 1] = "Member";
})(OverwriteTypes = exports.OverwriteTypes || (exports.OverwriteTypes = {}));
var VideoQualityModes;
(function (VideoQualityModes) {
    /** Discord chooses the quality for optimal performance */
    VideoQualityModes[VideoQualityModes["Auto"] = 1] = "Auto";
    /** 720p */
    VideoQualityModes[VideoQualityModes["Full"] = 2] = "Full";
})(VideoQualityModes = exports.VideoQualityModes || (exports.VideoQualityModes = {}));
/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-types */
var ActivityTypes;
(function (ActivityTypes) {
    ActivityTypes[ActivityTypes["Game"] = 0] = "Game";
    ActivityTypes[ActivityTypes["Streaming"] = 1] = "Streaming";
    ActivityTypes[ActivityTypes["Listening"] = 2] = "Listening";
    ActivityTypes[ActivityTypes["Watching"] = 3] = "Watching";
    ActivityTypes[ActivityTypes["Custom"] = 4] = "Custom";
    ActivityTypes[ActivityTypes["Competing"] = 5] = "Competing";
})(ActivityTypes = exports.ActivityTypes || (exports.ActivityTypes = {}));
/** https://discord.com/developers/docs/resources/channel#message-object-message-types */
var MessageTypes;
(function (MessageTypes) {
    MessageTypes[MessageTypes["Default"] = 0] = "Default";
    MessageTypes[MessageTypes["RecipientAdd"] = 1] = "RecipientAdd";
    MessageTypes[MessageTypes["RecipientRemove"] = 2] = "RecipientRemove";
    MessageTypes[MessageTypes["Call"] = 3] = "Call";
    MessageTypes[MessageTypes["ChannelNameChange"] = 4] = "ChannelNameChange";
    MessageTypes[MessageTypes["ChannelIconChange"] = 5] = "ChannelIconChange";
    MessageTypes[MessageTypes["ChannelPinnedMessage"] = 6] = "ChannelPinnedMessage";
    MessageTypes[MessageTypes["GuildMemberJoin"] = 7] = "GuildMemberJoin";
    MessageTypes[MessageTypes["UserPremiumGuildSubscription"] = 8] = "UserPremiumGuildSubscription";
    MessageTypes[MessageTypes["UserPremiumGuildSubscriptionTier1"] = 9] = "UserPremiumGuildSubscriptionTier1";
    MessageTypes[MessageTypes["UserPremiumGuildSubscriptionTier2"] = 10] = "UserPremiumGuildSubscriptionTier2";
    MessageTypes[MessageTypes["UserPremiumGuildSubscriptionTier3"] = 11] = "UserPremiumGuildSubscriptionTier3";
    MessageTypes[MessageTypes["ChannelFollowAdd"] = 12] = "ChannelFollowAdd";
    MessageTypes[MessageTypes["GuildDiscoveryDisqualified"] = 14] = "GuildDiscoveryDisqualified";
    MessageTypes[MessageTypes["GuildDiscoveryRequalified"] = 15] = "GuildDiscoveryRequalified";
    MessageTypes[MessageTypes["GuildDiscoveryGracePeriodInitialWarning"] = 16] = "GuildDiscoveryGracePeriodInitialWarning";
    MessageTypes[MessageTypes["GuildDiscoveryGracePeriodFinalWarning"] = 17] = "GuildDiscoveryGracePeriodFinalWarning";
    MessageTypes[MessageTypes["ThreadCreated"] = 18] = "ThreadCreated";
    MessageTypes[MessageTypes["Reply"] = 19] = "Reply";
    MessageTypes[MessageTypes["ChatInputCommand"] = 20] = "ChatInputCommand";
    MessageTypes[MessageTypes["ThreadStarterMessage"] = 21] = "ThreadStarterMessage";
    MessageTypes[MessageTypes["GuildInviteReminder"] = 22] = "GuildInviteReminder";
    MessageTypes[MessageTypes["ContextMenuCommand"] = 23] = "ContextMenuCommand";
    MessageTypes[MessageTypes["AutoModerationAction"] = 24] = "AutoModerationAction";
})(MessageTypes = exports.MessageTypes || (exports.MessageTypes = {}));
/** https://discord.com/developers/docs/resources/channel#message-object-message-activity-types */
var MessageActivityTypes;
(function (MessageActivityTypes) {
    MessageActivityTypes[MessageActivityTypes["Join"] = 1] = "Join";
    MessageActivityTypes[MessageActivityTypes["Spectate"] = 2] = "Spectate";
    MessageActivityTypes[MessageActivityTypes["Listen"] = 3] = "Listen";
    MessageActivityTypes[MessageActivityTypes["JoinRequest"] = 4] = "JoinRequest";
})(MessageActivityTypes = exports.MessageActivityTypes || (exports.MessageActivityTypes = {}));
/** https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types */
var StickerTypes;
(function (StickerTypes) {
    /** an official sticker in a pack, part of Nitro or in a removed purchasable pack */
    StickerTypes[StickerTypes["Standard"] = 1] = "Standard";
    /** a sticker uploaded to a Boosted guild for the guild's members */
    StickerTypes[StickerTypes["Guild"] = 2] = "Guild";
})(StickerTypes = exports.StickerTypes || (exports.StickerTypes = {}));
/** https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types */
var StickerFormatTypes;
(function (StickerFormatTypes) {
    StickerFormatTypes[StickerFormatTypes["Png"] = 1] = "Png";
    StickerFormatTypes[StickerFormatTypes["APng"] = 2] = "APng";
    StickerFormatTypes[StickerFormatTypes["Lottie"] = 3] = "Lottie";
})(StickerFormatTypes = exports.StickerFormatTypes || (exports.StickerFormatTypes = {}));
/** https://discord.com/developers/docs/interactions/slash-commands#interaction-interactiontype */
var InteractionTypes;
(function (InteractionTypes) {
    InteractionTypes[InteractionTypes["Ping"] = 1] = "Ping";
    InteractionTypes[InteractionTypes["ApplicationCommand"] = 2] = "ApplicationCommand";
    InteractionTypes[InteractionTypes["MessageComponent"] = 3] = "MessageComponent";
    InteractionTypes[InteractionTypes["ApplicationCommandAutocomplete"] = 4] = "ApplicationCommandAutocomplete";
    InteractionTypes[InteractionTypes["ModalSubmit"] = 5] = "ModalSubmit";
})(InteractionTypes = exports.InteractionTypes || (exports.InteractionTypes = {}));
/** https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype */
var ApplicationCommandOptionTypes;
(function (ApplicationCommandOptionTypes) {
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["SubCommand"] = 1] = "SubCommand";
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["SubCommandGroup"] = 2] = "SubCommandGroup";
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["String"] = 3] = "String";
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["Integer"] = 4] = "Integer";
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["Boolean"] = 5] = "Boolean";
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["User"] = 6] = "User";
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["Channel"] = 7] = "Channel";
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["Role"] = 8] = "Role";
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["Mentionable"] = 9] = "Mentionable";
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["Number"] = 10] = "Number";
    ApplicationCommandOptionTypes[ApplicationCommandOptionTypes["Attachment"] = 11] = "Attachment";
})(ApplicationCommandOptionTypes = exports.ApplicationCommandOptionTypes || (exports.ApplicationCommandOptionTypes = {}));
/** https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events */
var AuditLogEvents;
(function (AuditLogEvents) {
    /** Server settings were updated */
    AuditLogEvents[AuditLogEvents["GuildUpdate"] = 1] = "GuildUpdate";
    /** Channel was created */
    AuditLogEvents[AuditLogEvents["ChannelCreate"] = 10] = "ChannelCreate";
    /** Channel settings were updated */
    AuditLogEvents[AuditLogEvents["ChannelUpdate"] = 11] = "ChannelUpdate";
    /** Channel was deleted */
    AuditLogEvents[AuditLogEvents["ChannelDelete"] = 12] = "ChannelDelete";
    /** Permission overwrite was added to a channel */
    AuditLogEvents[AuditLogEvents["ChannelOverwriteCreate"] = 13] = "ChannelOverwriteCreate";
    /** Permission overwrite was updated for a channel */
    AuditLogEvents[AuditLogEvents["ChannelOverwriteUpdate"] = 14] = "ChannelOverwriteUpdate";
    /** Permission overwrite was deleted from a channel */
    AuditLogEvents[AuditLogEvents["ChannelOverwriteDelete"] = 15] = "ChannelOverwriteDelete";
    /** Member was removed from server */
    AuditLogEvents[AuditLogEvents["MemberKick"] = 20] = "MemberKick";
    /** Members were pruned from server */
    AuditLogEvents[AuditLogEvents["MemberPrune"] = 21] = "MemberPrune";
    /** Member was banned from server */
    AuditLogEvents[AuditLogEvents["MemberBanAdd"] = 22] = "MemberBanAdd";
    /** Server ban was lifted for a member */
    AuditLogEvents[AuditLogEvents["MemberBanRemove"] = 23] = "MemberBanRemove";
    /** Member was updated in server */
    AuditLogEvents[AuditLogEvents["MemberUpdate"] = 24] = "MemberUpdate";
    /** Member was added or removed from a role */
    AuditLogEvents[AuditLogEvents["MemberRoleUpdate"] = 25] = "MemberRoleUpdate";
    /** Member was moved to a different voice channel */
    AuditLogEvents[AuditLogEvents["MemberMove"] = 26] = "MemberMove";
    /** Member was disconnected from a voice channel */
    AuditLogEvents[AuditLogEvents["MemberDisconnect"] = 27] = "MemberDisconnect";
    /** Bot user was added to server */
    AuditLogEvents[AuditLogEvents["BotAdd"] = 28] = "BotAdd";
    /** Role was created */
    AuditLogEvents[AuditLogEvents["RoleCreate"] = 30] = "RoleCreate";
    /** Role was edited */
    AuditLogEvents[AuditLogEvents["RoleUpdate"] = 31] = "RoleUpdate";
    /** Role was deleted */
    AuditLogEvents[AuditLogEvents["RoleDelete"] = 32] = "RoleDelete";
    /** Server invite was created */
    AuditLogEvents[AuditLogEvents["InviteCreate"] = 40] = "InviteCreate";
    /** Server invite was updated */
    AuditLogEvents[AuditLogEvents["InviteUpdate"] = 41] = "InviteUpdate";
    /** Server invite was deleted */
    AuditLogEvents[AuditLogEvents["InviteDelete"] = 42] = "InviteDelete";
    /** Webhook was created */
    AuditLogEvents[AuditLogEvents["WebhookCreate"] = 50] = "WebhookCreate";
    /** Webhook properties or channel were updated */
    AuditLogEvents[AuditLogEvents["WebhookUpdate"] = 51] = "WebhookUpdate";
    /** Webhook was deleted */
    AuditLogEvents[AuditLogEvents["WebhookDelete"] = 52] = "WebhookDelete";
    /** Emoji was created */
    AuditLogEvents[AuditLogEvents["EmojiCreate"] = 60] = "EmojiCreate";
    /** Emoji name was updated */
    AuditLogEvents[AuditLogEvents["EmojiUpdate"] = 61] = "EmojiUpdate";
    /** Emoji was deleted */
    AuditLogEvents[AuditLogEvents["EmojiDelete"] = 62] = "EmojiDelete";
    /** Single message was deleted */
    AuditLogEvents[AuditLogEvents["MessageDelete"] = 72] = "MessageDelete";
    /** Multiple messages were deleted */
    AuditLogEvents[AuditLogEvents["MessageBulkDelete"] = 73] = "MessageBulkDelete";
    /** Messaged was pinned to a channel */
    AuditLogEvents[AuditLogEvents["MessagePin"] = 74] = "MessagePin";
    /** Message was unpinned from a channel */
    AuditLogEvents[AuditLogEvents["MessageUnpin"] = 75] = "MessageUnpin";
    /** App was added to server */
    AuditLogEvents[AuditLogEvents["IntegrationCreate"] = 80] = "IntegrationCreate";
    /** App was updated (as an example, its scopes were updated) */
    AuditLogEvents[AuditLogEvents["IntegrationUpdate"] = 81] = "IntegrationUpdate";
    /** App was removed from server */
    AuditLogEvents[AuditLogEvents["IntegrationDelete"] = 82] = "IntegrationDelete";
    /** Stage instance was created (stage channel becomes live) */
    AuditLogEvents[AuditLogEvents["StageInstanceCreate"] = 83] = "StageInstanceCreate";
    /** Stage instace details were updated */
    AuditLogEvents[AuditLogEvents["StageInstanceUpdate"] = 84] = "StageInstanceUpdate";
    /** Stage instance was deleted (stage channel no longer live) */
    AuditLogEvents[AuditLogEvents["StageInstanceDelete"] = 85] = "StageInstanceDelete";
    /** Sticker was created */
    AuditLogEvents[AuditLogEvents["StickerCreate"] = 90] = "StickerCreate";
    /** Sticker details were updated */
    AuditLogEvents[AuditLogEvents["StickerUpdate"] = 91] = "StickerUpdate";
    /** Sticker was deleted */
    AuditLogEvents[AuditLogEvents["StickerDelete"] = 92] = "StickerDelete";
    /** Event was created */
    AuditLogEvents[AuditLogEvents["GuildScheduledEventCreate"] = 100] = "GuildScheduledEventCreate";
    /** Event was updated */
    AuditLogEvents[AuditLogEvents["GuildScheduledEventUpdate"] = 101] = "GuildScheduledEventUpdate";
    /** Event was cancelled */
    AuditLogEvents[AuditLogEvents["GuildScheduledEventDelete"] = 102] = "GuildScheduledEventDelete";
    /** Thread was created in a channel */
    AuditLogEvents[AuditLogEvents["ThreadCreate"] = 110] = "ThreadCreate";
    /** Thread was updated */
    AuditLogEvents[AuditLogEvents["ThreadUpdate"] = 111] = "ThreadUpdate";
    /** Thread was deleted */
    AuditLogEvents[AuditLogEvents["ThreadDelete"] = 112] = "ThreadDelete";
    /** Permissions were updated for a command */
    AuditLogEvents[AuditLogEvents["ApplicationCommandPermissionUpdate"] = 121] = "ApplicationCommandPermissionUpdate";
    /** Auto moderation rule was created */
    AuditLogEvents[AuditLogEvents["AutoModerationRuleCreate"] = 140] = "AutoModerationRuleCreate";
    /** Auto moderation rule was updated */
    AuditLogEvents[AuditLogEvents["AutoModerationRuleUpdate"] = 141] = "AutoModerationRuleUpdate";
    /** Auto moderation rule was deleted */
    AuditLogEvents[AuditLogEvents["AutoModerationRuleDelete"] = 142] = "AutoModerationRuleDelete";
    /** Message was blocked by AutoMod according to a rule. */
    AuditLogEvents[AuditLogEvents["AutoModerationBlockMessage"] = 143] = "AutoModerationBlockMessage";
})(AuditLogEvents = exports.AuditLogEvents || (exports.AuditLogEvents = {}));
var ScheduledEventPrivacyLevel;
(function (ScheduledEventPrivacyLevel) {
    /** the scheduled event is public and available in discovery. DISCORD DEVS DISABLED THIS! WILL ERROR IF USED! */
    // Public = 1,
    /** the scheduled event is only accessible to guild members */
    ScheduledEventPrivacyLevel[ScheduledEventPrivacyLevel["GuildOnly"] = 2] = "GuildOnly";
})(ScheduledEventPrivacyLevel = exports.ScheduledEventPrivacyLevel || (exports.ScheduledEventPrivacyLevel = {}));
var ScheduledEventEntityType;
(function (ScheduledEventEntityType) {
    ScheduledEventEntityType[ScheduledEventEntityType["StageInstance"] = 1] = "StageInstance";
    ScheduledEventEntityType[ScheduledEventEntityType["Voice"] = 2] = "Voice";
    ScheduledEventEntityType[ScheduledEventEntityType["External"] = 3] = "External";
})(ScheduledEventEntityType = exports.ScheduledEventEntityType || (exports.ScheduledEventEntityType = {}));
var ScheduledEventStatus;
(function (ScheduledEventStatus) {
    ScheduledEventStatus[ScheduledEventStatus["Scheduled"] = 1] = "Scheduled";
    ScheduledEventStatus[ScheduledEventStatus["Active"] = 2] = "Active";
    ScheduledEventStatus[ScheduledEventStatus["Completed"] = 3] = "Completed";
    ScheduledEventStatus[ScheduledEventStatus["Canceled"] = 4] = "Canceled";
})(ScheduledEventStatus = exports.ScheduledEventStatus || (exports.ScheduledEventStatus = {}));
/** https://discord.com/developers/docs/resources/invite#invite-object-target-user-types */
var TargetTypes;
(function (TargetTypes) {
    TargetTypes[TargetTypes["Stream"] = 1] = "Stream";
    TargetTypes[TargetTypes["EmbeddedApplication"] = 2] = "EmbeddedApplication";
})(TargetTypes = exports.TargetTypes || (exports.TargetTypes = {}));
var ApplicationCommandTypes;
(function (ApplicationCommandTypes) {
    /** A text-based command that shows up when a user types `/` */
    ApplicationCommandTypes[ApplicationCommandTypes["ChatInput"] = 1] = "ChatInput";
    /** A UI-based command that shows up when you right click or tap on a user */
    ApplicationCommandTypes[ApplicationCommandTypes["User"] = 2] = "User";
    /** A UI-based command that shows up when you right click or tap on a message */
    ApplicationCommandTypes[ApplicationCommandTypes["Message"] = 3] = "Message";
})(ApplicationCommandTypes = exports.ApplicationCommandTypes || (exports.ApplicationCommandTypes = {}));
var ApplicationCommandPermissionTypes;
(function (ApplicationCommandPermissionTypes) {
    ApplicationCommandPermissionTypes[ApplicationCommandPermissionTypes["Role"] = 1] = "Role";
    ApplicationCommandPermissionTypes[ApplicationCommandPermissionTypes["User"] = 2] = "User";
    ApplicationCommandPermissionTypes[ApplicationCommandPermissionTypes["Channel"] = 3] = "Channel";
})(ApplicationCommandPermissionTypes = exports.ApplicationCommandPermissionTypes || (exports.ApplicationCommandPermissionTypes = {}));
/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags */
var ActivityFlags;
(function (ActivityFlags) {
    ActivityFlags[ActivityFlags["Instance"] = 1] = "Instance";
    ActivityFlags[ActivityFlags["Join"] = 2] = "Join";
    ActivityFlags[ActivityFlags["Spectate"] = 4] = "Spectate";
    ActivityFlags[ActivityFlags["JoinRequest"] = 8] = "JoinRequest";
    ActivityFlags[ActivityFlags["Sync"] = 16] = "Sync";
    ActivityFlags[ActivityFlags["Play"] = 32] = "Play";
    ActivityFlags[ActivityFlags["PartyPrivacyFriends"] = 64] = "PartyPrivacyFriends";
    ActivityFlags[ActivityFlags["PartyPrivacyVoiceChannel"] = 128] = "PartyPrivacyVoiceChannel";
    ActivityFlags[ActivityFlags["Embedded"] = 256] = "Embedded";
})(ActivityFlags = exports.ActivityFlags || (exports.ActivityFlags = {}));
/** https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags */
var BitwisePermissionFlags;
(function (BitwisePermissionFlags) {
    /** Allows creation of instant invites */
    BitwisePermissionFlags[BitwisePermissionFlags["CREATE_INSTANT_INVITE"] = 1] = "CREATE_INSTANT_INVITE";
    /** Allows kicking members */
    BitwisePermissionFlags[BitwisePermissionFlags["KICK_MEMBERS"] = 2] = "KICK_MEMBERS";
    /** Allows banning members */
    BitwisePermissionFlags[BitwisePermissionFlags["BAN_MEMBERS"] = 4] = "BAN_MEMBERS";
    /** Allows all permissions and bypasses channel permission overwrites */
    BitwisePermissionFlags[BitwisePermissionFlags["ADMINISTRATOR"] = 8] = "ADMINISTRATOR";
    /** Allows management and editing of channels */
    BitwisePermissionFlags[BitwisePermissionFlags["MANAGE_CHANNELS"] = 16] = "MANAGE_CHANNELS";
    /** Allows management and editing of the guild */
    BitwisePermissionFlags[BitwisePermissionFlags["MANAGE_GUILD"] = 32] = "MANAGE_GUILD";
    /** Allows for the addition of reactions to messages */
    BitwisePermissionFlags[BitwisePermissionFlags["ADD_REACTIONS"] = 64] = "ADD_REACTIONS";
    /** Allows for viewing of audit logs */
    BitwisePermissionFlags[BitwisePermissionFlags["VIEW_AUDIT_LOG"] = 128] = "VIEW_AUDIT_LOG";
    /** Allows for using priority speaker in a voice channel */
    BitwisePermissionFlags[BitwisePermissionFlags["PRIORITY_SPEAKER"] = 256] = "PRIORITY_SPEAKER";
    /** Allows the user to go live */
    BitwisePermissionFlags[BitwisePermissionFlags["STREAM"] = 512] = "STREAM";
    /** Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels */
    BitwisePermissionFlags[BitwisePermissionFlags["VIEW_CHANNEL"] = 1024] = "VIEW_CHANNEL";
    /** Allows for sending messages in a channel. (does not allow sending messages in threads) */
    BitwisePermissionFlags[BitwisePermissionFlags["SEND_MESSAGES"] = 2048] = "SEND_MESSAGES";
    /** Allows for sending of /tts messages */
    BitwisePermissionFlags[BitwisePermissionFlags["SEND_TTS_MESSAGES"] = 4096] = "SEND_TTS_MESSAGES";
    /** Allows for deletion of other users messages */
    BitwisePermissionFlags[BitwisePermissionFlags["MANAGE_MESSAGES"] = 8192] = "MANAGE_MESSAGES";
    /** Links sent by users with this permission will be auto-embedded */
    BitwisePermissionFlags[BitwisePermissionFlags["EMBED_LINKS"] = 16384] = "EMBED_LINKS";
    /** Allows for uploading images and files */
    BitwisePermissionFlags[BitwisePermissionFlags["ATTACH_FILES"] = 32768] = "ATTACH_FILES";
    /** Allows for reading of message history */
    BitwisePermissionFlags[BitwisePermissionFlags["READ_MESSAGE_HISTORY"] = 65536] = "READ_MESSAGE_HISTORY";
    /** Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel */
    BitwisePermissionFlags[BitwisePermissionFlags["MENTION_EVERYONE"] = 131072] = "MENTION_EVERYONE";
    /** Allows the usage of custom emojis from other servers */
    BitwisePermissionFlags[BitwisePermissionFlags["USE_EXTERNAL_EMOJIS"] = 262144] = "USE_EXTERNAL_EMOJIS";
    /** Allows for viewing guild insights */
    BitwisePermissionFlags[BitwisePermissionFlags["VIEW_GUILD_INSIGHTS"] = 524288] = "VIEW_GUILD_INSIGHTS";
    /** Allows for joining of a voice channel */
    BitwisePermissionFlags[BitwisePermissionFlags["CONNECT"] = 1048576] = "CONNECT";
    /** Allows for speaking in a voice channel */
    BitwisePermissionFlags[BitwisePermissionFlags["SPEAK"] = 2097152] = "SPEAK";
    /** Allows for muting members in a voice channel */
    BitwisePermissionFlags[BitwisePermissionFlags["MUTE_MEMBERS"] = 4194304] = "MUTE_MEMBERS";
    /** Allows for deafening of members in a voice channel */
    BitwisePermissionFlags[BitwisePermissionFlags["DEAFEN_MEMBERS"] = 8388608] = "DEAFEN_MEMBERS";
    /** Allows for moving of members between voice channels */
    BitwisePermissionFlags[BitwisePermissionFlags["MOVE_MEMBERS"] = 16777216] = "MOVE_MEMBERS";
    /** Allows for using voice-activity-detection in a voice channel */
    BitwisePermissionFlags[BitwisePermissionFlags["USE_VAD"] = 33554432] = "USE_VAD";
    /** Allows for modification of own nickname */
    BitwisePermissionFlags[BitwisePermissionFlags["CHANGE_NICKNAME"] = 67108864] = "CHANGE_NICKNAME";
    /** Allows for modification of other users nicknames */
    BitwisePermissionFlags[BitwisePermissionFlags["MANAGE_NICKNAMES"] = 134217728] = "MANAGE_NICKNAMES";
    /** Allows management and editing of roles */
    BitwisePermissionFlags[BitwisePermissionFlags["MANAGE_ROLES"] = 268435456] = "MANAGE_ROLES";
    /** Allows management and editing of webhooks */
    BitwisePermissionFlags[BitwisePermissionFlags["MANAGE_WEBHOOKS"] = 536870912] = "MANAGE_WEBHOOKS";
    /** Allows management and editing of emojis */
    BitwisePermissionFlags[BitwisePermissionFlags["MANAGE_EMOJIS"] = 1073741824] = "MANAGE_EMOJIS";
    /** Allows members to use application commands in text channels */
    BitwisePermissionFlags[BitwisePermissionFlags["USE_SLASH_COMMANDS"] = 2147483648] = "USE_SLASH_COMMANDS";
    /** Allows for requesting to speak in stage channels. */
    BitwisePermissionFlags[BitwisePermissionFlags["REQUEST_TO_SPEAK"] = 4294967296] = "REQUEST_TO_SPEAK";
    /** Allows for creating, editing, and deleting scheduled events */
    BitwisePermissionFlags[BitwisePermissionFlags["MANAGE_EVENTS"] = 8589934592] = "MANAGE_EVENTS";
    /** Allows for deleting and archiving threads, and viewing all private threads */
    BitwisePermissionFlags[BitwisePermissionFlags["MANAGE_THREADS"] = 17179869184] = "MANAGE_THREADS";
    /** Allows for creating public and announcement threads */
    BitwisePermissionFlags[BitwisePermissionFlags["CREATE_PUBLIC_THREADS"] = 34359738368] = "CREATE_PUBLIC_THREADS";
    /** Allows for creating private threads */
    BitwisePermissionFlags[BitwisePermissionFlags["CREATE_PRIVATE_THREADS"] = 68719476736] = "CREATE_PRIVATE_THREADS";
    /** Allows the usage of custom stickers from other servers */
    BitwisePermissionFlags[BitwisePermissionFlags["USE_EXTERNAL_STICKERS"] = 137438953472] = "USE_EXTERNAL_STICKERS";
    /** Allows for sending messages in threads */
    BitwisePermissionFlags[BitwisePermissionFlags["SEND_MESSAGES_IN_THREADS"] = 274877906944] = "SEND_MESSAGES_IN_THREADS";
    /** Allows for launching activities (applications with the `EMBEDDED` flag) in a voice channel. */
    BitwisePermissionFlags[BitwisePermissionFlags["USE_EMBEDDED_ACTIVITIES"] = 549755813888] = "USE_EMBEDDED_ACTIVITIES";
    /** Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels */
    BitwisePermissionFlags[BitwisePermissionFlags["MODERATE_MEMBERS"] = 1099511627776] = "MODERATE_MEMBERS";
})(BitwisePermissionFlags = exports.BitwisePermissionFlags || (exports.BitwisePermissionFlags = {}));
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice */
var VoiceOpcodes;
(function (VoiceOpcodes) {
    /** Begin a voice websocket connection. */
    VoiceOpcodes[VoiceOpcodes["Identify"] = 0] = "Identify";
    /** Select the voice protocol. */
    VoiceOpcodes[VoiceOpcodes["SelectProtocol"] = 1] = "SelectProtocol";
    /** Complete the websocket handshake. */
    VoiceOpcodes[VoiceOpcodes["Ready"] = 2] = "Ready";
    /** Keep the websocket connection alive. */
    VoiceOpcodes[VoiceOpcodes["Heartbeat"] = 3] = "Heartbeat";
    /** Describe the session. */
    VoiceOpcodes[VoiceOpcodes["SessionDescription"] = 4] = "SessionDescription";
    /** Indicate which users are speaking. */
    VoiceOpcodes[VoiceOpcodes["Speaking"] = 5] = "Speaking";
    /** Sent to acknowledge a received client heartbeat. */
    VoiceOpcodes[VoiceOpcodes["HeartbeatACK"] = 6] = "HeartbeatACK";
    /** Resume a connection. */
    VoiceOpcodes[VoiceOpcodes["Resume"] = 7] = "Resume";
    /** Time to wait between sending heartbeats in milliseconds. */
    VoiceOpcodes[VoiceOpcodes["Hello"] = 8] = "Hello";
    /** Acknowledge a successful session resume. */
    VoiceOpcodes[VoiceOpcodes["Resumed"] = 9] = "Resumed";
    /** A client has disconnected from the voice channel */
    VoiceOpcodes[VoiceOpcodes["ClientDisconnect"] = 13] = "ClientDisconnect";
})(VoiceOpcodes = exports.VoiceOpcodes || (exports.VoiceOpcodes = {}));
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice */
var VoiceCloseEventCodes;
(function (VoiceCloseEventCodes) {
    /** You sent an invalid [opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-opcodes). */
    VoiceCloseEventCodes[VoiceCloseEventCodes["UnknownOpcode"] = 4001] = "UnknownOpcode";
    /** You sent a invalid payload in your [identifying](https://discord.com/developers/docs/topics/gateway#identify) to the Gateway. */
    VoiceCloseEventCodes[VoiceCloseEventCodes["FailedToDecodePayload"] = 4002] = "FailedToDecodePayload";
    /** You sent a payload before [identifying](https://discord.com/developers/docs/topics/gateway#identify) with the Gateway. */
    VoiceCloseEventCodes[VoiceCloseEventCodes["NotAuthenticated"] = 4003] = "NotAuthenticated";
    /** The token you sent in your [identify](https://discord.com/developers/docs/topics/gateway#identify) payload is incorrect. */
    VoiceCloseEventCodes[VoiceCloseEventCodes["AuthenticationFailed"] = 4004] = "AuthenticationFailed";
    /** You sent more than one [identify](https://discord.com/developers/docs/topics/gateway#identify) payload. Stahp. */
    VoiceCloseEventCodes[VoiceCloseEventCodes["AlreadyAuthenticated"] = 4005] = "AlreadyAuthenticated";
    /** Your session is no longer valid. */
    VoiceCloseEventCodes[VoiceCloseEventCodes["SessionNoLongerValid"] = 4006] = "SessionNoLongerValid";
    /** Your session has timed out. */
    VoiceCloseEventCodes[VoiceCloseEventCodes["SessionTimedOut"] = 4009] = "SessionTimedOut";
    /** We can't find the server you're trying to connect to. */
    VoiceCloseEventCodes[VoiceCloseEventCodes["ServerNotFound"] = 4011] = "ServerNotFound";
    /** We didn't recognize the [protocol](https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-example-select-protocol-payload) you sent. */
    VoiceCloseEventCodes[VoiceCloseEventCodes["UnknownProtocol"] = 4012] = "UnknownProtocol";
    /** Channel was deleted, you were kicked, voice server changed, or the main gateway session was dropped. Should not reconnect. */
    VoiceCloseEventCodes[VoiceCloseEventCodes["Disconnect"] = 4014] = "Disconnect";
    /** The server crashed. Our bad! Try [resuming](https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection). */
    VoiceCloseEventCodes[VoiceCloseEventCodes["VoiceServerCrashed"] = 4015] = "VoiceServerCrashed";
    /** We didn't recognize your [encryption](https://discord.com/developers/docs/topics/voice-connections#encrypting-and-sending-voice). */
    VoiceCloseEventCodes[VoiceCloseEventCodes["UnknownEncryptionMode"] = 4016] = "UnknownEncryptionMode";
})(VoiceCloseEventCodes = exports.VoiceCloseEventCodes || (exports.VoiceCloseEventCodes = {}));
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc */
var RpcErrorCodes;
(function (RpcErrorCodes) {
    /** An unknown error occurred. */
    RpcErrorCodes[RpcErrorCodes["UnknownError"] = 1000] = "UnknownError";
    /** You sent an invalid payload. */
    RpcErrorCodes[RpcErrorCodes["InvalidPayload"] = 4000] = "InvalidPayload";
    /** Invalid command name specified. */
    RpcErrorCodes[RpcErrorCodes["InvalidCommand"] = 4002] = "InvalidCommand";
    /** Invalid guild ID specified. */
    RpcErrorCodes[RpcErrorCodes["InvalidGuild"] = 4003] = "InvalidGuild";
    /** Invalid event name specified. */
    RpcErrorCodes[RpcErrorCodes["InvalidEvent"] = 4004] = "InvalidEvent";
    /** Invalid channel ID specified. */
    RpcErrorCodes[RpcErrorCodes["InvalidChannel"] = 4005] = "InvalidChannel";
    /** You lack permissions to access the given resource. */
    RpcErrorCodes[RpcErrorCodes["InvalidPermissions"] = 4006] = "InvalidPermissions";
    /** An invalid OAuth2 application ID was used to authorize or authenticate with. */
    RpcErrorCodes[RpcErrorCodes["InvalidClientId"] = 4007] = "InvalidClientId";
    /** An invalid OAuth2 application origin was used to authorize or authenticate with. */
    RpcErrorCodes[RpcErrorCodes["InvalidOrigin"] = 4008] = "InvalidOrigin";
    /** An invalid OAuth2 token was used to authorize or authenticate with. */
    RpcErrorCodes[RpcErrorCodes["InvalidToken"] = 4009] = "InvalidToken";
    /** The specified user ID was invalid. */
    RpcErrorCodes[RpcErrorCodes["InvalidUser"] = 4010] = "InvalidUser";
    /** A standard OAuth2 error occurred; check the data object for the OAuth2 error details. */
    RpcErrorCodes[RpcErrorCodes["OAuth2Error"] = 5000] = "OAuth2Error";
    /** An asynchronous `SELECT_TEXT_CHANNEL`/`SELECT_VOICE_CHANNEL` command timed out. */
    RpcErrorCodes[RpcErrorCodes["SelectChannelTimedOut"] = 5001] = "SelectChannelTimedOut";
    /** An asynchronous `GET_GUILD` command timed out. */
    RpcErrorCodes[RpcErrorCodes["GetGuildTimedOut"] = 5002] = "GetGuildTimedOut";
    /** You tried to join a user to a voice channel but the user was already in one. */
    RpcErrorCodes[RpcErrorCodes["SelectVoiceForceRequired"] = 5003] = "SelectVoiceForceRequired";
    /** You tried to capture more than one shortcut key at once. */
    RpcErrorCodes[RpcErrorCodes["CaptureShortcutAlreadyListening"] = 5004] = "CaptureShortcutAlreadyListening";
})(RpcErrorCodes = exports.RpcErrorCodes || (exports.RpcErrorCodes = {}));
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc */
var RpcCloseEventCodes;
(function (RpcCloseEventCodes) {
    /** You connected to the RPC server with an invalid client ID. */
    RpcCloseEventCodes[RpcCloseEventCodes["InvalidClientId"] = 4000] = "InvalidClientId";
    /** You connected to the RPC server with an invalid origin. */
    RpcCloseEventCodes[RpcCloseEventCodes["InvalidOrigin"] = 4001] = "InvalidOrigin";
    /** You are being rate limited. */
    RpcCloseEventCodes[RpcCloseEventCodes["RateLimited"] = 4002] = "RateLimited";
    /** The OAuth2 token associated with a connection was revoked, get a new one! */
    RpcCloseEventCodes[RpcCloseEventCodes["TokenRevoked"] = 4003] = "TokenRevoked";
    /** The RPC Server version specified in the connection string was not valid. */
    RpcCloseEventCodes[RpcCloseEventCodes["InvalidVersion"] = 4004] = "InvalidVersion";
    /** The encoding specified in the connection string was not valid. */
    RpcCloseEventCodes[RpcCloseEventCodes["InvalidEncoding"] = 4005] = "InvalidEncoding";
})(RpcCloseEventCodes = exports.RpcCloseEventCodes || (exports.RpcCloseEventCodes = {}));
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#http */
var HTTPResponseCodes;
(function (HTTPResponseCodes) {
    /** The request completed successfully. */
    HTTPResponseCodes[HTTPResponseCodes["Ok"] = 200] = "Ok";
    /** The entity was created successfully. */
    HTTPResponseCodes[HTTPResponseCodes["Created"] = 201] = "Created";
    /** The request completed successfully but returned no content. */
    HTTPResponseCodes[HTTPResponseCodes["NoContent"] = 204] = "NoContent";
    /** The entity was not modified (no action was taken). */
    HTTPResponseCodes[HTTPResponseCodes["NotModified"] = 304] = "NotModified";
    /** The request was improperly formatted, or the server couldn't understand it. */
    HTTPResponseCodes[HTTPResponseCodes["BadRequest"] = 400] = "BadRequest";
    /** The `Authorization` header was missing or invalid. */
    HTTPResponseCodes[HTTPResponseCodes["Unauthorized"] = 401] = "Unauthorized";
    /** The `Authorization` token you passed did not have permission to the resource. */
    HTTPResponseCodes[HTTPResponseCodes["Forbidden"] = 403] = "Forbidden";
    /** The resource at the location specified doesn't exist. */
    HTTPResponseCodes[HTTPResponseCodes["NotFound"] = 404] = "NotFound";
    /** The HTTP method used is not valid for the location specified. */
    HTTPResponseCodes[HTTPResponseCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    /** You are being rate limited, see [Rate Limits](https://discord.com/developers/docs/topics/rate-limits). */
    HTTPResponseCodes[HTTPResponseCodes["TooManyRequests"] = 429] = "TooManyRequests";
    /** There was not a gateway available to process your request. Wait a bit and retry. */
    HTTPResponseCodes[HTTPResponseCodes["GatewayUnavailable"] = 502] = "GatewayUnavailable";
})(HTTPResponseCodes = exports.HTTPResponseCodes || (exports.HTTPResponseCodes = {}));
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#opcodes-and-status-codes */
var GatewayCloseEventCodes;
(function (GatewayCloseEventCodes) {
    /** A normal closure of the gateway.
     * You may attempt to reconnect.
     */
    GatewayCloseEventCodes[GatewayCloseEventCodes["NormalClosure"] = 1000] = "NormalClosure";
    /** We're not sure what went wrong. Try reconnecting? */
    GatewayCloseEventCodes[GatewayCloseEventCodes["UnknownError"] = 4000] = "UnknownError";
    /** You sent an invalid [Gateway opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes) or an invalid payload for an opcode. Don't do that! */
    GatewayCloseEventCodes[GatewayCloseEventCodes["UnknownOpcode"] = 4001] = "UnknownOpcode";
    /** You sent an invalid [payload](https://discord.com/developers/docs/topics/gateway#sending-payloads) to us. Don't do that! */
    GatewayCloseEventCodes[GatewayCloseEventCodes["DecodeError"] = 4002] = "DecodeError";
    /** You sent us a payload prior to [identifying](https://discord.com/developers/docs/topics/gateway#identify). */
    GatewayCloseEventCodes[GatewayCloseEventCodes["NotAuthenticated"] = 4003] = "NotAuthenticated";
    /** The account token sent with your [identify payload](https://discord.com/developers/docs/topics/gateway#identify) is incorrect. */
    GatewayCloseEventCodes[GatewayCloseEventCodes["AuthenticationFailed"] = 4004] = "AuthenticationFailed";
    /** You sent more than one identify payload. Don't do that! */
    GatewayCloseEventCodes[GatewayCloseEventCodes["AlreadyAuthenticated"] = 4005] = "AlreadyAuthenticated";
    /** The sequence sent when [resuming](https://discord.com/developers/docs/topics/gateway#resume) the session was invalid. Reconnect and start a new session. */
    GatewayCloseEventCodes[GatewayCloseEventCodes["InvalidSeq"] = 4007] = "InvalidSeq";
    /** Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this. */
    GatewayCloseEventCodes[GatewayCloseEventCodes["RateLimited"] = 4008] = "RateLimited";
    /** Your session timed out. Reconnect and start a new one. */
    GatewayCloseEventCodes[GatewayCloseEventCodes["SessionTimedOut"] = 4009] = "SessionTimedOut";
    /** You sent us an invalid [shard when identifying](https://discord.com/developers/docs/topics/gateway#sharding). */
    GatewayCloseEventCodes[GatewayCloseEventCodes["InvalidShard"] = 4010] = "InvalidShard";
    /** The session would have handled too many guilds - you are required to [shard](https://discord.com/developers/docs/topics/gateway#sharding) your connection in order to connect. */
    GatewayCloseEventCodes[GatewayCloseEventCodes["ShardingRequired"] = 4011] = "ShardingRequired";
    /** You sent an invalid version for the gateway. */
    GatewayCloseEventCodes[GatewayCloseEventCodes["InvalidApiVersion"] = 4012] = "InvalidApiVersion";
    /** You sent an invalid intent for a [Gateway Intent](https://discord.com/developers/docs/topics/gateway#gateway-intents). You may have incorrectly calculated the bitwise value. */
    GatewayCloseEventCodes[GatewayCloseEventCodes["InvalidIntents"] = 4013] = "InvalidIntents";
    /** You sent a disallowed intent for a [Gateway Intent](https://discord.com/developers/docs/topics/gateway#gateway-intents). You may have tried to specify an intent that you [have not enabled or are not approved for](https://discord.com/developers/docs/topics/gateway#privileged-intents). */
    GatewayCloseEventCodes[GatewayCloseEventCodes["DisallowedIntents"] = 4014] = "DisallowedIntents";
})(GatewayCloseEventCodes = exports.GatewayCloseEventCodes || (exports.GatewayCloseEventCodes = {}));
/** https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types */
var InviteTargetTypes;
(function (InviteTargetTypes) {
    InviteTargetTypes[InviteTargetTypes["Stream"] = 1] = "Stream";
    InviteTargetTypes[InviteTargetTypes["EmbeddedApplication"] = 2] = "EmbeddedApplication";
})(InviteTargetTypes = exports.InviteTargetTypes || (exports.InviteTargetTypes = {}));
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes */
var GatewayOpcodes;
(function (GatewayOpcodes) {
    /** An event was dispatched. */
    GatewayOpcodes[GatewayOpcodes["Dispatch"] = 0] = "Dispatch";
    /** Fired periodically by the client to keep the connection alive. */
    GatewayOpcodes[GatewayOpcodes["Heartbeat"] = 1] = "Heartbeat";
    /** Starts a new session during the initial handshake. */
    GatewayOpcodes[GatewayOpcodes["Identify"] = 2] = "Identify";
    /** Update the client's presence. */
    GatewayOpcodes[GatewayOpcodes["PresenceUpdate"] = 3] = "PresenceUpdate";
    /** Used to join/leave or move between voice channels. */
    GatewayOpcodes[GatewayOpcodes["VoiceStateUpdate"] = 4] = "VoiceStateUpdate";
    /** Resume a previous session that was disconnected. */
    GatewayOpcodes[GatewayOpcodes["Resume"] = 6] = "Resume";
    /** You should attempt to reconnect and resume immediately. */
    GatewayOpcodes[GatewayOpcodes["Reconnect"] = 7] = "Reconnect";
    /** Request information about offline guild members in a large guild. */
    GatewayOpcodes[GatewayOpcodes["RequestGuildMembers"] = 8] = "RequestGuildMembers";
    /** The session has been invalidated. You should reconnect and identify/resume accordingly. */
    GatewayOpcodes[GatewayOpcodes["InvalidSession"] = 9] = "InvalidSession";
    /** Sent immediately after connecting, contains the `heartbeat_interval` to use. */
    GatewayOpcodes[GatewayOpcodes["Hello"] = 10] = "Hello";
    /** Sent in response to receiving a heartbeat to acknowledge that it has been received. */
    GatewayOpcodes[GatewayOpcodes["HeartbeatACK"] = 11] = "HeartbeatACK";
})(GatewayOpcodes = exports.GatewayOpcodes || (exports.GatewayOpcodes = {}));
/** https://discord.com/developers/docs/topics/gateway#list-of-intents */
var GatewayIntents;
(function (GatewayIntents) {
    /**
     * - GUILD_CREATE
     * - GUILD_DELETE
     * - GUILD_ROLE_CREATE
     * - GUILD_ROLE_UPDATE
     * - GUILD_ROLE_DELETE
     * - CHANNEL_CREATE
     * - CHANNEL_UPDATE
     * - CHANNEL_DELETE
     * - CHANNEL_PINS_UPDATE
     * - THREAD_CREATE
     * - THREAD_UPDATE
     * - THREAD_DELETE
     * - THREAD_LIST_SYNC
     * - THREAD_MEMBER_UPDATE
     * - THREAD_MEMBERS_UPDATE
     * - STAGE_INSTANCE_CREATE
     * - STAGE_INSTANCE_UPDATE
     * - STAGE_INSTANCE_DELETE
     */
    GatewayIntents[GatewayIntents["Guilds"] = 1] = "Guilds";
    /**
     * - GUILD_MEMBER_ADD
     * - GUILD_MEMBER_UPDATE
     * - GUILD_MEMBER_REMOVE
     */
    GatewayIntents[GatewayIntents["GuildMembers"] = 2] = "GuildMembers";
    /**
     * - GUILD_BAN_ADD
     * - GUILD_BAN_REMOVE
     */
    GatewayIntents[GatewayIntents["GuildBans"] = 4] = "GuildBans";
    /**
     * - GUILD_EMOJIS_UPDATE
     */
    GatewayIntents[GatewayIntents["GuildEmojis"] = 8] = "GuildEmojis";
    /**
     * - GUILD_INTEGRATIONS_UPDATE
     * - INTEGRATION_CREATE
     * - INTEGRATION_UPDATE
     * - INTEGRATION_DELETE
     */
    GatewayIntents[GatewayIntents["GuildIntegrations"] = 16] = "GuildIntegrations";
    /** Enables the following events:
     * - WEBHOOKS_UPDATE
     */
    GatewayIntents[GatewayIntents["GuildWebhooks"] = 32] = "GuildWebhooks";
    /**
     * - INVITE_CREATE
     * - INVITE_DELETE
     */
    GatewayIntents[GatewayIntents["GuildInvites"] = 64] = "GuildInvites";
    /**
     * - VOICE_STATE_UPDATE
     */
    GatewayIntents[GatewayIntents["GuildVoiceStates"] = 128] = "GuildVoiceStates";
    /**
     * - PRESENCE_UPDATE
     */
    GatewayIntents[GatewayIntents["GuildPresences"] = 256] = "GuildPresences";
    /**
     * - MESSAGE_CREATE
     * - MESSAGE_UPDATE
     * - MESSAGE_DELETE
     */
    GatewayIntents[GatewayIntents["GuildMessages"] = 512] = "GuildMessages";
    /**
     * - MESSAGE_REACTION_ADD
     * - MESSAGE_REACTION_REMOVE
     * - MESSAGE_REACTION_REMOVE_ALL
     * - MESSAGE_REACTION_REMOVE_EMOJI
     */
    GatewayIntents[GatewayIntents["GuildMessageReactions"] = 1024] = "GuildMessageReactions";
    /**
     * - TYPING_START
     */
    GatewayIntents[GatewayIntents["GuildMessageTyping"] = 2048] = "GuildMessageTyping";
    /**
     * - CHANNEL_CREATE
     * - MESSAGE_CREATE
     * - MESSAGE_UPDATE
     * - MESSAGE_DELETE
     * - CHANNEL_PINS_UPDATE
     */
    GatewayIntents[GatewayIntents["DirectMessages"] = 4096] = "DirectMessages";
    /**
     * - MESSAGE_REACTION_ADD
     * - MESSAGE_REACTION_REMOVE
     * - MESSAGE_REACTION_REMOVE_ALL
     * - MESSAGE_REACTION_REMOVE_EMOJI
     */
    GatewayIntents[GatewayIntents["DirectMessageReactions"] = 8192] = "DirectMessageReactions";
    /**
     * - TYPING_START
     */
    GatewayIntents[GatewayIntents["DirectMessageTyping"] = 16384] = "DirectMessageTyping";
    /**
     * This intent will add `content` values to all message objects.
     */
    GatewayIntents[GatewayIntents["MessageContent"] = 32768] = "MessageContent";
    /**
     * - GUILD_SCHEDULED_EVENT_CREATE
     * - GUILD_SCHEDULED_EVENT_UPDATE
     * - GUILD_SCHEDULED_EVENT_DELETE
     * - GUILD_SCHEDULED_EVENT_USER_ADD this is experimental and unstable.
     * - GUILD_SCHEDULED_EVENT_USER_REMOVE this is experimental and unstable.
     */
    GatewayIntents[GatewayIntents["GuildScheduledEvents"] = 65536] = "GuildScheduledEvents";
    /**
     * - AUTO_MODERATION_RULE_CREATE
     * - AUTO_MODERATION_RULE_UPDATE
     * - AUTO_MODERATION_RULE_DELETE
     */
    GatewayIntents[GatewayIntents["AutoModerationConfiguration"] = 1048576] = "AutoModerationConfiguration";
    /**
     * - AUTO_MODERATION_ACTION_EXECUTION
     */
    GatewayIntents[GatewayIntents["AutoModerationExecution"] = 2097152] = "AutoModerationExecution";
})(GatewayIntents = exports.GatewayIntents || (exports.GatewayIntents = {}));
// ALIASES JUST FOR BETTER UX IN THIS CASE
/** https://discord.com/developers/docs/topics/gateway#list-of-intents */
exports.Intents = GatewayIntents;
/** https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactionresponsetype */
var InteractionResponseTypes;
(function (InteractionResponseTypes) {
    /** ACK a `Ping` */
    InteractionResponseTypes[InteractionResponseTypes["Pong"] = 1] = "Pong";
    /** Respond to an interaction with a message */
    InteractionResponseTypes[InteractionResponseTypes["ChannelMessageWithSource"] = 4] = "ChannelMessageWithSource";
    /** ACK an interaction and edit a response later, the user sees a loading state */
    InteractionResponseTypes[InteractionResponseTypes["DeferredChannelMessageWithSource"] = 5] = "DeferredChannelMessageWithSource";
    /** For components, ACK an interaction and edit the original message later; the user does not see a loading state */
    InteractionResponseTypes[InteractionResponseTypes["DeferredUpdateMessage"] = 6] = "DeferredUpdateMessage";
    /** For components, edit the message the component was attached to */
    InteractionResponseTypes[InteractionResponseTypes["UpdateMessage"] = 7] = "UpdateMessage";
    /** For Application Command Options, send an autocomplete result */
    InteractionResponseTypes[InteractionResponseTypes["ApplicationCommandAutocompleteResult"] = 8] = "ApplicationCommandAutocompleteResult";
    /** For Command or Component interactions, send a Modal response */
    InteractionResponseTypes[InteractionResponseTypes["Modal"] = 9] = "Modal";
})(InteractionResponseTypes = exports.InteractionResponseTypes || (exports.InteractionResponseTypes = {}));
var Errors;
(function (Errors) {
    // Bot Role errors
    Errors["BOTS_HIGHEST_ROLE_TOO_LOW"] = "BOTS_HIGHEST_ROLE_TOO_LOW";
    // Channel Errors
    Errors["CHANNEL_NOT_FOUND"] = "CHANNEL_NOT_FOUND";
    Errors["CHANNEL_NOT_IN_GUILD"] = "CHANNEL_NOT_IN_GUILD";
    Errors["CHANNEL_NOT_TEXT_BASED"] = "CHANNEL_NOT_TEXT_BASED";
    Errors["CHANNEL_NOT_STAGE_VOICE"] = "CHANNEL_NOT_STAGE_VOICE";
    Errors["MESSAGE_MAX_LENGTH"] = "MESSAGE_MAX_LENGTH";
    Errors["RULES_CHANNEL_CANNOT_BE_DELETED"] = "RULES_CHANNEL_CANNOT_BE_DELETED";
    Errors["UPDATES_CHANNEL_CANNOT_BE_DELETED"] = "UPDATES_CHANNEL_CANNOT_BE_DELETED";
    Errors["INVALID_TOPIC_LENGTH"] = "INVALID_TOPIC_LENGTH";
    // Guild Errors
    Errors["GUILD_NOT_DISCOVERABLE"] = "GUILD_NOT_DISCOVERABLE";
    Errors["GUILD_WIDGET_NOT_ENABLED"] = "GUILD_WIDGET_NOT_ENABLED";
    Errors["GUILD_NOT_FOUND"] = "GUILD_NOT_FOUND";
    Errors["MEMBER_NOT_FOUND"] = "MEMBER_NOT_FOUND";
    Errors["MEMBER_NOT_IN_VOICE_CHANNEL"] = "MEMBER_NOT_IN_VOICE_CHANNEL";
    Errors["MEMBER_SEARCH_LIMIT_TOO_HIGH"] = "MEMBER_SEARCH_LIMIT_TOO_HIGH";
    Errors["MEMBER_SEARCH_LIMIT_TOO_LOW"] = "MEMBER_SEARCH_LIMIT_TOO_LOW";
    Errors["PRUNE_MAX_DAYS"] = "PRUNE_MAX_DAYS";
    Errors["ROLE_NOT_FOUND"] = "ROLE_NOT_FOUND";
    // Thread errors
    Errors["INVALID_THREAD_PARENT_CHANNEL_TYPE"] = "INVALID_THREAD_PARENT_CHANNEL_TYPE";
    Errors["GUILD_NEWS_CHANNEL_ONLY_SUPPORT_PUBLIC_THREADS"] = "GUILD_NEWS_CHANNEL_ONLY_SUPPORT_PUBLIC_THREADS";
    Errors["NOT_A_THREAD_CHANNEL"] = "NOT_A_THREAD_CHANNEL";
    Errors["MISSING_MANAGE_THREADS_AND_NOT_MEMBER"] = "MISSING_MANAGE_THREADS_AND_NOT_MEMBER";
    Errors["CANNOT_GET_MEMBERS_OF_AN_UNJOINED_PRIVATE_THREAD"] = "CANNOT_GET_MEMBERS_OF_AN_UNJOINED_PRIVATE_THREAD";
    Errors["HAVE_TO_BE_THE_CREATOR_OF_THE_THREAD_OR_HAVE_MANAGE_THREADS_TO_REMOVE_MEMBERS"] = "HAVE_TO_BE_THE_CREATOR_OF_THE_THREAD_OR_HAVE_MANAGE_THREADS_TO_REMOVE_MEMBERS";
    // Message Get Errors
    Errors["INVALID_GET_MESSAGES_LIMIT"] = "INVALID_GET_MESSAGES_LIMIT";
    // Message Delete Errors
    Errors["DELETE_MESSAGES_MIN"] = "DELETE_MESSAGES_MIN";
    Errors["PRUNE_MIN_DAYS"] = "PRUNE_MIN_DAYS";
    // Interaction Errors
    Errors["INVALID_SLASH_DESCRIPTION"] = "INVALID_SLASH_DESCRIPTION";
    Errors["INVALID_SLASH_NAME"] = "INVALID_SLASH_NAME";
    Errors["INVALID_SLASH_OPTIONS"] = "INVALID_SLASH_OPTIONS";
    Errors["INVALID_SLASH_OPTIONS_CHOICES"] = "INVALID_SLASH_OPTIONS_CHOICES";
    Errors["TOO_MANY_SLASH_OPTIONS"] = "TOO_MANY_SLASH_OPTIONS";
    Errors["INVALID_SLASH_OPTION_CHOICE_NAME"] = "INVALID_SLASH_OPTION_CHOICE_NAME";
    Errors["INVALID_SLASH_OPTIONS_CHOICE_VALUE_TYPE"] = "INVALID_SLASH_OPTIONS_CHOICE_VALUE_TYPE";
    Errors["TOO_MANY_SLASH_OPTION_CHOICES"] = "TOO_MANY_SLASH_OPTION_CHOICES";
    Errors["ONLY_STRING_OR_INTEGER_OPTIONS_CAN_HAVE_CHOICES"] = "ONLY_STRING_OR_INTEGER_OPTIONS_CAN_HAVE_CHOICES";
    Errors["INVALID_SLASH_OPTION_NAME"] = "INVALID_SLASH_OPTION_NAME";
    Errors["INVALID_SLASH_OPTION_DESCRIPTION"] = "INVALID_SLASH_OPTION_DESCRIPTION";
    Errors["INVALID_CONTEXT_MENU_COMMAND_NAME"] = "INVALID_CONTEXT_MENU_COMMAND_NAME";
    Errors["INVALID_CONTEXT_MENU_COMMAND_DESCRIPTION"] = "INVALID_CONTEXT_MENU_COMMAND_DESCRIPTION";
    // Webhook Errors
    Errors["INVALID_WEBHOOK_NAME"] = "INVALID_WEBHOOK_NAME";
    Errors["INVALID_WEBHOOK_OPTIONS"] = "INVALID_WEBHOOK_OPTIONS";
    // Permission Errors
    Errors["MISSING_ADD_REACTIONS"] = "MISSING_ADD_REACTIONS";
    Errors["MISSING_ADMINISTRATOR"] = "MISSING_ADMINISTRATOR";
    Errors["MISSING_ATTACH_FILES"] = "MISSING_ATTACH_FILES";
    Errors["MISSING_BAN_MEMBERS"] = "MISSING_BAN_MEMBERS";
    Errors["MISSING_CHANGE_NICKNAME"] = "MISSING_CHANGE_NICKNAME";
    Errors["MISSING_CONNECT"] = "MISSING_CONNECT";
    Errors["MISSING_CREATE_INSTANT_INVITE"] = "MISSING_CREATE_INSTANT_INVITE";
    Errors["MISSING_DEAFEN_MEMBERS"] = "MISSING_DEAFEN_MEMBERS";
    Errors["MISSING_EMBED_LINKS"] = "MISSING_EMBED_LINKS";
    Errors["MISSING_INTENT_GUILD_MEMBERS"] = "MISSING_INTENT_GUILD_MEMBERS";
    Errors["MISSING_KICK_MEMBERS"] = "MISSING_KICK_MEMBERS";
    Errors["MISSING_MANAGE_CHANNELS"] = "MISSING_MANAGE_CHANNELS";
    Errors["MISSING_MANAGE_EMOJIS"] = "MISSING_MANAGE_EMOJIS";
    Errors["MISSING_MANAGE_GUILD"] = "MISSING_MANAGE_GUILD";
    Errors["MISSING_MANAGE_MESSAGES"] = "MISSING_MANAGE_MESSAGES";
    Errors["MISSING_MANAGE_NICKNAMES"] = "MISSING_MANAGE_NICKNAMES";
    Errors["MISSING_MANAGE_ROLES"] = "MISSING_MANAGE_ROLES";
    Errors["MISSING_MANAGE_WEBHOOKS"] = "MISSING_MANAGE_WEBHOOKS";
    Errors["MISSING_MENTION_EVERYONE"] = "MISSING_MENTION_EVERYONE";
    Errors["MISSING_MOVE_MEMBERS"] = "MISSING_MOVE_MEMBERS";
    Errors["MISSING_MUTE_MEMBERS"] = "MISSING_MUTE_MEMBERS";
    Errors["MISSING_PRIORITY_SPEAKER"] = "MISSING_PRIORITY_SPEAKER";
    Errors["MISSING_READ_MESSAGE_HISTORY"] = "MISSING_READ_MESSAGE_HISTORY";
    Errors["MISSING_SEND_MESSAGES"] = "MISSING_SEND_MESSAGES";
    Errors["MISSING_SEND_TTS_MESSAGES"] = "MISSING_SEND_TTS_MESSAGES";
    Errors["MISSING_SPEAK"] = "MISSING_SPEAK";
    Errors["MISSING_STREAM"] = "MISSING_STREAM";
    Errors["MISSING_USE_VAD"] = "MISSING_USE_VAD";
    Errors["MISSING_USE_EXTERNAL_EMOJIS"] = "MISSING_USE_EXTERNAL_EMOJIS";
    Errors["MISSING_VIEW_AUDIT_LOG"] = "MISSING_VIEW_AUDIT_LOG";
    Errors["MISSING_VIEW_CHANNEL"] = "MISSING_VIEW_CHANNEL";
    Errors["MISSING_VIEW_GUILD_INSIGHTS"] = "MISSING_VIEW_GUILD_INSIGHTS";
    // User Errors
    Errors["NICKNAMES_MAX_LENGTH"] = "NICKNAMES_MAX_LENGTH";
    Errors["USERNAME_INVALID_CHARACTER"] = "USERNAME_INVALID_CHARACTER";
    Errors["USERNAME_INVALID_USERNAME"] = "USERNAME_INVALID_USERNAME";
    Errors["USERNAME_MAX_LENGTH"] = "USERNAME_MAX_LENGTH";
    Errors["USERNAME_MIN_LENGTH"] = "USERNAME_MIN_LENGTH";
    Errors["NONCE_TOO_LONG"] = "NONCE_TOO_LONG";
    Errors["INVITE_MAX_AGE_INVALID"] = "INVITE_MAX_AGE_INVALID";
    Errors["INVITE_MAX_USES_INVALID"] = "INVITE_MAX_USES_INVALID";
    // API Errors
    Errors["RATE_LIMIT_RETRY_MAXED"] = "RATE_LIMIT_RETRY_MAXED";
    Errors["REQUEST_CLIENT_ERROR"] = "REQUEST_CLIENT_ERROR";
    Errors["REQUEST_SERVER_ERROR"] = "REQUEST_SERVER_ERROR";
    Errors["REQUEST_UNKNOWN_ERROR"] = "REQUEST_UNKNOWN_ERROR";
    // Component Errors
    Errors["TOO_MANY_COMPONENTS"] = "TOO_MANY_COMPONENTS";
    Errors["TOO_MANY_ACTION_ROWS"] = "TOO_MANY_ACTION_ROWS";
    Errors["LINK_BUTTON_CANNOT_HAVE_CUSTOM_ID"] = "LINK_BUTTON_CANNOT_HAVE_CUSTOM_ID";
    Errors["COMPONENT_LABEL_TOO_BIG"] = "COMPONENT_LABEL_TOO_BIG";
    Errors["COMPONENT_CUSTOM_ID_TOO_BIG"] = "COMPONENT_CUSTOM_ID_TOO_BIG";
    Errors["BUTTON_REQUIRES_CUSTOM_ID"] = "BUTTON_REQUIRES_CUSTOM_ID";
    Errors["COMPONENT_SELECT_MUST_BE_ALONE"] = "COMPONENT_SELECT_MUST_BE_ALONE";
    Errors["COMPONENT_PLACEHOLDER_TOO_BIG"] = "COMPONENT_PLACEHOLDER_TOO_BIG";
    Errors["COMPONENT_SELECT_MIN_VALUE_TOO_LOW"] = "COMPONENT_SELECT_MIN_VALUE_TOO_LOW";
    Errors["COMPONENT_SELECT_MIN_VALUE_TOO_MANY"] = "COMPONENT_SELECT_MIN_VALUE_TOO_MANY";
    Errors["COMPONENT_SELECT_MAX_VALUE_TOO_LOW"] = "COMPONENT_SELECT_MAX_VALUE_TOO_LOW";
    Errors["COMPONENT_SELECT_MAX_VALUE_TOO_MANY"] = "COMPONENT_SELECT_MAX_VALUE_TOO_MANY";
    Errors["COMPONENT_SELECT_OPTIONS_TOO_LOW"] = "COMPONENT_SELECT_OPTIONS_TOO_LOW";
    Errors["COMPONENT_SELECT_OPTIONS_TOO_MANY"] = "COMPONENT_SELECT_OPTIONS_TOO_MANY";
    Errors["SELECT_OPTION_LABEL_TOO_BIG"] = "SELECT_OPTION_LABEL_TOO_BIG";
    Errors["SELECT_OPTION_VALUE_TOO_BIG"] = "SELECT_OPTION_VALUE_TOO_BIG";
    Errors["SELECT_OPTION_TOO_MANY_DEFAULTS"] = "SELECT_OPTION_TOO_MANY_DEFAULTS";
    Errors["COMPONENT_SELECT_MIN_HIGHER_THAN_MAX"] = "COMPONENT_SELECT_MIN_HIGHER_THAN_MAX";
    Errors["CANNOT_ADD_USER_TO_ARCHIVED_THREADS"] = "CANNOT_ADD_USER_TO_ARCHIVED_THREADS";
    Errors["CANNOT_LEAVE_ARCHIVED_THREAD"] = "CANNOT_LEAVE_ARCHIVED_THREAD";
    Errors["CANNOT_REMOVE_FROM_ARCHIVED_THREAD"] = "CANNOT_REMOVE_FROM_ARCHIVED_THREAD";
    Errors["YOU_CAN_NOT_DM_THE_BOT_ITSELF"] = "YOU_CAN_NOT_DM_THE_BOT_ITSELF";
})(Errors = exports.Errors || (exports.Errors = {}));
var Locales;
(function (Locales) {
    Locales["Danish"] = "da";
    Locales["German"] = "de";
    Locales["EnglishUk"] = "en-GB";
    Locales["EnglishUs"] = "en-US";
    Locales["Spanish"] = "es-ES";
    Locales["French"] = "fr";
    Locales["Croatian"] = "hr";
    Locales["Italian"] = "it";
    Locales["Lithuanian"] = "lt";
    Locales["Hungarian"] = "hu";
    Locales["Dutch"] = "nl";
    Locales["Norwegian"] = "no";
    Locales["Polish"] = "pl";
    Locales["PortugueseBrazilian"] = "pt-BR";
    Locales["RomanianRomania"] = "ro";
    Locales["Finnish"] = "fi";
    Locales["Swedish"] = "sv-SE";
    Locales["Vietnamese"] = "vi";
    Locales["Turkish"] = "tr";
    Locales["Czech"] = "cs";
    Locales["Greek"] = "el";
    Locales["Bulgarian"] = "bg";
    Locales["Russian"] = "ru";
    Locales["Ukrainian"] = "uk";
    Locales["Hindi"] = "hi";
    Locales["Thai"] = "th";
    Locales["ChineseChina"] = "zh-CN";
    Locales["Japanese"] = "ja";
    Locales["ChineseTaiwan"] = "zh-TW";
    Locales["Korean"] = "ko";
})(Locales = exports.Locales || (exports.Locales = {}));

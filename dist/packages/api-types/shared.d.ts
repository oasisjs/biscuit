/** https://discord.com/developers/docs/resources/user#user-object-premium-types */
export declare enum PremiumTypes {
    None = 0,
    NitroClassic = 1,
    Nitro = 2
}
/** https://discord.com/developers/docs/resources/user#user-object-user-flags */
export declare enum UserFlags {
    DiscordEmployee = 1,
    PartneredServerOwner = 2,
    HypeSquadEventsMember = 4,
    BugHunterLevel1 = 8,
    HouseBravery = 64,
    HouseBrilliance = 128,
    HouseBalance = 256,
    EarlySupporter = 512,
    TeamUser = 1024,
    BugHunterLevel2 = 16384,
    VerifiedBot = 65536,
    EarlyVerifiedBotDeveloper = 131072,
    DiscordCertifiedModerator = 262144,
    BotHttpInteractions = 524288
}
/** https://discord.com/developers/docs/resources/channel#channels-resource */
export declare enum ChannelFlags {
    None = 0,
    Pinned = 2
}
/** https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors */
export declare enum IntegrationExpireBehaviors {
    RemoveRole = 0,
    Kick = 1
}
/** https://discord.com/developers/docs/resources/user#connection-object-visibility-types */
export declare enum VisibilityTypes {
    /** Invisible to everyone except the user themselves */
    None = 0,
    /** Visible to everyone */
    Everyone = 1
}
/** https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum */
export declare enum TeamMembershipStates {
    Invited = 1,
    Accepted = 2
}
/** https://discord.com/developers/docs/topics/oauth2#application-application-flags */
export declare enum ApplicationFlags {
    /** Intent required for bots in **100 or more servers** to receive [`presence_update` events](#DOCS_TOPICS_GATEWAY/presence-update) */
    GatewayPresence = 4096,
    /** Intent required for bots in under 100 servers to receive [`presence_update` events](#DOCS_TOPICS_GATEWAY/presence-update), found in Bot Settings */
    GatewayPresenceLimited = 8192,
    /** Intent required for bots in **100 or more servers** to receive member-related events like `guild_member_add`. See list of member-related events [under `GUILD_MEMBERS`](#DOCS_TOPICS_GATEWAY/list-of-intents) */
    GatewayGuildMembers = 16384,
    /** Intent required for bots in under 100 servers to receive member-related events like `guild_member_add`, found in Bot Settings. See list of member-related events [under `GUILD_MEMBERS`](#DOCS_TOPICS_GATEWAY/list-of-intents) */
    GatewayGuildMembersLimited = 32768,
    /** Indicates unusual growth of an app that prevents verification */
    VerificationPendingGuildLimit = 65536,
    /** Indicates if an app is embedded within the Discord client (currently unavailable publicly) */
    Embedded = 131072,
    /** Intent required for bots in **100 or more servers** to receive [message content](https://support-dev.discord.com/hc/en-us/articles/4404772028055) */
    GatewayMessageCount = 262144,
    /** Intent required for bots in under 100 servers to receive [message content](https://support-dev.discord.com/hc/en-us/articles/4404772028055), found in Bot Settings */
    GatewayMessageContentLimited = 524288
}
/** https://discord.com/developers/docs/interactions/message-components#component-types */
export declare enum MessageComponentTypes {
    /** A container for other components */
    ActionRow = 1,
    /** A button object */
    Button = 2,
    /** A select menu for picking from choices */
    SelectMenu = 3,
    /** A text input object */
    InputText = 4
}
export declare enum TextStyles {
    /** Intended for short single-line text */
    Short = 1,
    /** Intended for much longer inputs */
    Paragraph = 2
}
/** https://discord.com/developers/docs/interactions/message-components#buttons-button-styles */
export declare enum ButtonStyles {
    /** A blurple button */
    Primary = 1,
    /** A grey button */
    Secondary = 2,
    /** A green button */
    Success = 3,
    /** A red button */
    Danger = 4,
    /** A button that navigates to a URL */
    Link = 5
}
/** https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types */
export declare enum AllowedMentionsTypes {
    /** Controls role mentions */
    RoleMentions = "roles",
    /** Controls user mentions */
    UserMentions = "users",
    /** Controls @everyone and @here mentions */
    EveryoneMentions = "everyone"
}
/** https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types */
export declare enum WebhookTypes {
    /** Incoming Webhooks can post messages to channels with a generated token */
    Incoming = 1,
    /** Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels */
    ChannelFollower = 2,
    /** Application webhooks are webhooks used with Interactions */
    Application = 3
}
/** https://discord.com/developers/docs/resources/channel#embed-object-embed-types */
export declare type EmbedTypes = 'rich' | 'image' | 'video' | 'gifv' | 'article' | 'link';
/** https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level */
export declare enum DefaultMessageNotificationLevels {
    /** Members will receive notifications for all messages by default */
    AllMessages = 0,
    /** Members will receive notifications only for messages that @mention them by default */
    OnlyMentions = 1
}
/** https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level */
export declare enum ExplicitContentFilterLevels {
    /** Media content will not be scanned */
    Disabled = 0,
    /** Media content sent by members without roles will be scanned */
    MembersWithoutRoles = 1,
    /** Media content sent by all members will be scanned */
    AllMembers = 2
}
/** https://discord.com/developers/docs/resources/guild#guild-object-verification-level */
export declare enum VerificationLevels {
    /** Unrestricted */
    None = 0,
    /** Must have verified email on account */
    Low = 1,
    /** Must be registered on Discord for longer than 5 minutes */
    Medium = 2,
    /** Must be a member of the server for longer than 10 minutes */
    High = 3,
    /** Must have a verified phone number */
    VeryHigh = 4
}
/** https://discord.com/developers/docs/topics/permissions#role-object-role-structure */
export interface BaseRole {
    /** Role name */
    name: string;
    /** Integer representation of hexadecimal color code */
    color: number;
    /** Position of this role */
    position: number;
    /** role unicode emoji */
    unicodeEmoji?: string;
}
/** https://discord.com/developers/docs/resources/guild#guild-object-guild-features */
export declare enum GuildFeatures {
    /** Guild has access to set an invite splash background */
    InviteSplash = "INVITE_SPLASH",
    /** Guild has access to set 384 kbps bitrate in voice (previously VIP voice servers) */
    VipRegions = "VIP_REGIONS",
    /** Guild has access to set a vanity URL */
    VanityUrl = "VANITY_URL",
    /** Guild is verified */
    Verified = "VERIFIED",
    /** Guild is partnered */
    Partnered = "PARTNERED",
    /** Guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates */
    Community = "COMMUNITY",
    /** Guild has access to use commerce features (i.e. create store channels) */
    Commerce = "COMMERCE",
    /** Guild has access to create news channels */
    News = "NEWS",
    /** Guild is able to be discovered in the directory */
    Discoverable = "DISCOVERABLE",
    /** guild cannot be discoverable */
    DiscoverableDisabled = "DISCOVERABLE_DISABLED",
    /** Guild is able to be featured in the directory */
    Feature = "FEATURABLE",
    /** Guild has access to set an animated guild icon */
    AnimatedIcon = "ANIMATED_ICON",
    /** Guild has access to set a guild banner image */
    Banner = "BANNER",
    /** Guild has enabled the welcome screen */
    WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
    /** Guild has enabled [Membership Screening](https://discord.com/developers/docs/resources/guild#membership-screening-object) */
    MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
    /** Guild can be previewed before joining via Membership Screening or the directory */
    PreviewEnabled = "PREVIEW_ENABLED",
    /** Guild has enabled ticketed events */
    TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
    /** Guild has enabled monetization */
    MonetizationEnabled = "MONETIZATION_ENABLED",
    /** Guild has increased custom sticker slots */
    MoreStickers = "MORE_STICKERS",
    /** Guild has access to create private threads */
    PrivateThreads = "PRIVATE_THREADS",
    /** Guild is able to set role icons */
    RoleIcons = "ROLE_ICONS",
    /** Guild has set up auto moderation rules */
    AutoModeration = "AUTO_MODERATION"
}
/** https://discord.com/developers/docs/resources/guild#guild-object-mfa-level */
export declare enum MfaLevels {
    /** Guild has no MFA/2FA requirement for moderation actions */
    None = 0,
    /** Guild has a 2FA requirement for moderation actions */
    Elevated = 1
}
/** https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags */
export declare enum SystemChannelFlags {
    /** Suppress member join notifications */
    SuppressJoinNotifications = 1,
    /** Suppress server boost notifications */
    SuppressPremiumSubscriptions = 2,
    /** Suppress server setup tips */
    SuppressGuildReminderNotifications = 4,
    /** Hide member join sticker reply buttons */
    SuppressJoinNotificationReplies = 8
}
/** https://discord.com/developers/docs/resources/guild#guild-object-premium-tier */
export declare enum PremiumTiers {
    /** Guild has not unlocked any Server Boost perks */
    None = 0,
    /** Guild has unlocked Server Boost level 1 perks */
    Tier1 = 1,
    /** Guild has unlocked Server Boost level 2 perks */
    Tier2 = 2,
    /** Guild has unlocked Server Boost level 3 perks */
    Tier3 = 3
}
/** https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level */
export declare enum GuildNsfwLevel {
    Default = 0,
    Explicit = 1,
    Safe = 2,
    AgeRestricted = 3
}
/** https://discord.com/developers/docs/resources/channel#channel-object-channel-types */
export declare enum ChannelTypes {
    /** A text channel within a server */
    GuildText = 0,
    /** A direct message between users */
    DM = 1,
    /** A voice channel within a server */
    GuildVoice = 2,
    /** A direct message between multiple users */
    GroupDm = 3,
    /** An organizational category that contains up to 50 channels */
    GuildCategory = 4,
    /** A channel that users can follow and crosspost into their own server */
    GuildNews = 5,
    /** A temporary sub-channel within a GUILD_NEWS channel */
    GuildNewsThread = 10,
    /** A temporary sub-channel within a GUILD_TEXT channel */
    GuildPublicThread = 11,
    /** A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission */
    GuildPrivateThread = 12,
    /** A voice channel for hosting events with an audience */
    GuildStageVoice = 13,
    /** A channel in a hub containing the listed servers */
    GuildDirectory = 14,
    /** A channel which can only contains threads */
    GuildForum = 15
}
export declare enum OverwriteTypes {
    Role = 0,
    Member = 1
}
export declare enum VideoQualityModes {
    /** Discord chooses the quality for optimal performance */
    Auto = 1,
    /** 720p */
    Full = 2
}
/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-types */
export declare enum ActivityTypes {
    Game = 0,
    Streaming = 1,
    Listening = 2,
    Watching = 3,
    Custom = 4,
    Competing = 5
}
/** https://discord.com/developers/docs/resources/channel#message-object-message-types */
export declare enum MessageTypes {
    Default = 0,
    RecipientAdd = 1,
    RecipientRemove = 2,
    Call = 3,
    ChannelNameChange = 4,
    ChannelIconChange = 5,
    ChannelPinnedMessage = 6,
    GuildMemberJoin = 7,
    UserPremiumGuildSubscription = 8,
    UserPremiumGuildSubscriptionTier1 = 9,
    UserPremiumGuildSubscriptionTier2 = 10,
    UserPremiumGuildSubscriptionTier3 = 11,
    ChannelFollowAdd = 12,
    GuildDiscoveryDisqualified = 14,
    GuildDiscoveryRequalified = 15,
    GuildDiscoveryGracePeriodInitialWarning = 16,
    GuildDiscoveryGracePeriodFinalWarning = 17,
    ThreadCreated = 18,
    Reply = 19,
    ChatInputCommand = 20,
    ThreadStarterMessage = 21,
    GuildInviteReminder = 22,
    ContextMenuCommand = 23,
    AutoModerationAction = 24
}
/** https://discord.com/developers/docs/resources/channel#message-object-message-activity-types */
export declare enum MessageActivityTypes {
    Join = 1,
    Spectate = 2,
    Listen = 3,
    JoinRequest = 4
}
/** https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types */
export declare enum StickerTypes {
    /** an official sticker in a pack, part of Nitro or in a removed purchasable pack */
    Standard = 1,
    /** a sticker uploaded to a Boosted guild for the guild's members */
    Guild = 2
}
/** https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types */
export declare enum StickerFormatTypes {
    Png = 1,
    APng = 2,
    Lottie = 3
}
/** https://discord.com/developers/docs/interactions/slash-commands#interaction-interactiontype */
export declare enum InteractionTypes {
    Ping = 1,
    ApplicationCommand = 2,
    MessageComponent = 3,
    ApplicationCommandAutocomplete = 4,
    ModalSubmit = 5
}
/** https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype */
export declare enum ApplicationCommandOptionTypes {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
    Attachment = 11
}
/** https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events */
export declare enum AuditLogEvents {
    /** Server settings were updated */
    GuildUpdate = 1,
    /** Channel was created */
    ChannelCreate = 10,
    /** Channel settings were updated */
    ChannelUpdate = 11,
    /** Channel was deleted */
    ChannelDelete = 12,
    /** Permission overwrite was added to a channel */
    ChannelOverwriteCreate = 13,
    /** Permission overwrite was updated for a channel */
    ChannelOverwriteUpdate = 14,
    /** Permission overwrite was deleted from a channel */
    ChannelOverwriteDelete = 15,
    /** Member was removed from server */
    MemberKick = 20,
    /** Members were pruned from server */
    MemberPrune = 21,
    /** Member was banned from server */
    MemberBanAdd = 22,
    /** Server ban was lifted for a member */
    MemberBanRemove = 23,
    /** Member was updated in server */
    MemberUpdate = 24,
    /** Member was added or removed from a role */
    MemberRoleUpdate = 25,
    /** Member was moved to a different voice channel */
    MemberMove = 26,
    /** Member was disconnected from a voice channel */
    MemberDisconnect = 27,
    /** Bot user was added to server */
    BotAdd = 28,
    /** Role was created */
    RoleCreate = 30,
    /** Role was edited */
    RoleUpdate = 31,
    /** Role was deleted */
    RoleDelete = 32,
    /** Server invite was created */
    InviteCreate = 40,
    /** Server invite was updated */
    InviteUpdate = 41,
    /** Server invite was deleted */
    InviteDelete = 42,
    /** Webhook was created */
    WebhookCreate = 50,
    /** Webhook properties or channel were updated */
    WebhookUpdate = 51,
    /** Webhook was deleted */
    WebhookDelete = 52,
    /** Emoji was created */
    EmojiCreate = 60,
    /** Emoji name was updated */
    EmojiUpdate = 61,
    /** Emoji was deleted */
    EmojiDelete = 62,
    /** Single message was deleted */
    MessageDelete = 72,
    /** Multiple messages were deleted */
    MessageBulkDelete = 73,
    /** Messaged was pinned to a channel */
    MessagePin = 74,
    /** Message was unpinned from a channel */
    MessageUnpin = 75,
    /** App was added to server */
    IntegrationCreate = 80,
    /** App was updated (as an example, its scopes were updated) */
    IntegrationUpdate = 81,
    /** App was removed from server */
    IntegrationDelete = 82,
    /** Stage instance was created (stage channel becomes live) */
    StageInstanceCreate = 83,
    /** Stage instace details were updated */
    StageInstanceUpdate = 84,
    /** Stage instance was deleted (stage channel no longer live) */
    StageInstanceDelete = 85,
    /** Sticker was created */
    StickerCreate = 90,
    /** Sticker details were updated */
    StickerUpdate = 91,
    /** Sticker was deleted */
    StickerDelete = 92,
    /** Event was created */
    GuildScheduledEventCreate = 100,
    /** Event was updated */
    GuildScheduledEventUpdate = 101,
    /** Event was cancelled */
    GuildScheduledEventDelete = 102,
    /** Thread was created in a channel */
    ThreadCreate = 110,
    /** Thread was updated */
    ThreadUpdate = 111,
    /** Thread was deleted */
    ThreadDelete = 112,
    /** Permissions were updated for a command */
    ApplicationCommandPermissionUpdate = 121,
    /** Auto moderation rule was created */
    AutoModerationRuleCreate = 140,
    /** Auto moderation rule was updated */
    AutoModerationRuleUpdate = 141,
    /** Auto moderation rule was deleted */
    AutoModerationRuleDelete = 142,
    /** Message was blocked by AutoMod according to a rule. */
    AutoModerationBlockMessage = 143
}
export declare enum ScheduledEventPrivacyLevel {
    /** the scheduled event is public and available in discovery. DISCORD DEVS DISABLED THIS! WILL ERROR IF USED! */
    /** the scheduled event is only accessible to guild members */
    GuildOnly = 2
}
export declare enum ScheduledEventEntityType {
    StageInstance = 1,
    Voice = 2,
    External = 3
}
export declare enum ScheduledEventStatus {
    Scheduled = 1,
    Active = 2,
    Completed = 3,
    Canceled = 4
}
/** https://discord.com/developers/docs/resources/invite#invite-object-target-user-types */
export declare enum TargetTypes {
    Stream = 1,
    EmbeddedApplication = 2
}
export declare enum ApplicationCommandTypes {
    /** A text-based command that shows up when a user types `/` */
    ChatInput = 1,
    /** A UI-based command that shows up when you right click or tap on a user */
    User = 2,
    /** A UI-based command that shows up when you right click or tap on a message */
    Message = 3
}
export declare enum ApplicationCommandPermissionTypes {
    Role = 1,
    User = 2,
    Channel = 3
}
/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags */
export declare enum ActivityFlags {
    Instance = 1,
    Join = 2,
    Spectate = 4,
    JoinRequest = 8,
    Sync = 16,
    Play = 32,
    PartyPrivacyFriends = 64,
    PartyPrivacyVoiceChannel = 128,
    Embedded = 256
}
/** https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags */
export declare enum BitwisePermissionFlags {
    /** Allows creation of instant invites */
    CREATE_INSTANT_INVITE = 1,
    /** Allows kicking members */
    KICK_MEMBERS = 2,
    /** Allows banning members */
    BAN_MEMBERS = 4,
    /** Allows all permissions and bypasses channel permission overwrites */
    ADMINISTRATOR = 8,
    /** Allows management and editing of channels */
    MANAGE_CHANNELS = 16,
    /** Allows management and editing of the guild */
    MANAGE_GUILD = 32,
    /** Allows for the addition of reactions to messages */
    ADD_REACTIONS = 64,
    /** Allows for viewing of audit logs */
    VIEW_AUDIT_LOG = 128,
    /** Allows for using priority speaker in a voice channel */
    PRIORITY_SPEAKER = 256,
    /** Allows the user to go live */
    STREAM = 512,
    /** Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels */
    VIEW_CHANNEL = 1024,
    /** Allows for sending messages in a channel. (does not allow sending messages in threads) */
    SEND_MESSAGES = 2048,
    /** Allows for sending of /tts messages */
    SEND_TTS_MESSAGES = 4096,
    /** Allows for deletion of other users messages */
    MANAGE_MESSAGES = 8192,
    /** Links sent by users with this permission will be auto-embedded */
    EMBED_LINKS = 16384,
    /** Allows for uploading images and files */
    ATTACH_FILES = 32768,
    /** Allows for reading of message history */
    READ_MESSAGE_HISTORY = 65536,
    /** Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel */
    MENTION_EVERYONE = 131072,
    /** Allows the usage of custom emojis from other servers */
    USE_EXTERNAL_EMOJIS = 262144,
    /** Allows for viewing guild insights */
    VIEW_GUILD_INSIGHTS = 524288,
    /** Allows for joining of a voice channel */
    CONNECT = 1048576,
    /** Allows for speaking in a voice channel */
    SPEAK = 2097152,
    /** Allows for muting members in a voice channel */
    MUTE_MEMBERS = 4194304,
    /** Allows for deafening of members in a voice channel */
    DEAFEN_MEMBERS = 8388608,
    /** Allows for moving of members between voice channels */
    MOVE_MEMBERS = 16777216,
    /** Allows for using voice-activity-detection in a voice channel */
    USE_VAD = 33554432,
    /** Allows for modification of own nickname */
    CHANGE_NICKNAME = 67108864,
    /** Allows for modification of other users nicknames */
    MANAGE_NICKNAMES = 134217728,
    /** Allows management and editing of roles */
    MANAGE_ROLES = 268435456,
    /** Allows management and editing of webhooks */
    MANAGE_WEBHOOKS = 536870912,
    /** Allows management and editing of emojis */
    MANAGE_EMOJIS = 1073741824,
    /** Allows members to use application commands in text channels */
    USE_SLASH_COMMANDS = 2147483648,
    /** Allows for requesting to speak in stage channels. */
    REQUEST_TO_SPEAK = 4294967296,
    /** Allows for creating, editing, and deleting scheduled events */
    MANAGE_EVENTS = 8589934592,
    /** Allows for deleting and archiving threads, and viewing all private threads */
    MANAGE_THREADS = 17179869184,
    /** Allows for creating public and announcement threads */
    CREATE_PUBLIC_THREADS = 34359738368,
    /** Allows for creating private threads */
    CREATE_PRIVATE_THREADS = 68719476736,
    /** Allows the usage of custom stickers from other servers */
    USE_EXTERNAL_STICKERS = 137438953472,
    /** Allows for sending messages in threads */
    SEND_MESSAGES_IN_THREADS = 274877906944,
    /** Allows for launching activities (applications with the `EMBEDDED` flag) in a voice channel. */
    USE_EMBEDDED_ACTIVITIES = 549755813888,
    /** Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels */
    MODERATE_MEMBERS = 1099511627776
}
export declare type PermissionStrings = keyof typeof BitwisePermissionFlags;
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice */
export declare enum VoiceOpcodes {
    /** Begin a voice websocket connection. */
    Identify = 0,
    /** Select the voice protocol. */
    SelectProtocol = 1,
    /** Complete the websocket handshake. */
    Ready = 2,
    /** Keep the websocket connection alive. */
    Heartbeat = 3,
    /** Describe the session. */
    SessionDescription = 4,
    /** Indicate which users are speaking. */
    Speaking = 5,
    /** Sent to acknowledge a received client heartbeat. */
    HeartbeatACK = 6,
    /** Resume a connection. */
    Resume = 7,
    /** Time to wait between sending heartbeats in milliseconds. */
    Hello = 8,
    /** Acknowledge a successful session resume. */
    Resumed = 9,
    /** A client has disconnected from the voice channel */
    ClientDisconnect = 13
}
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice */
export declare enum VoiceCloseEventCodes {
    /** You sent an invalid [opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-opcodes). */
    UnknownOpcode = 4001,
    /** You sent a invalid payload in your [identifying](https://discord.com/developers/docs/topics/gateway#identify) to the Gateway. */
    FailedToDecodePayload = 4002,
    /** You sent a payload before [identifying](https://discord.com/developers/docs/topics/gateway#identify) with the Gateway. */
    NotAuthenticated = 4003,
    /** The token you sent in your [identify](https://discord.com/developers/docs/topics/gateway#identify) payload is incorrect. */
    AuthenticationFailed = 4004,
    /** You sent more than one [identify](https://discord.com/developers/docs/topics/gateway#identify) payload. Stahp. */
    AlreadyAuthenticated = 4005,
    /** Your session is no longer valid. */
    SessionNoLongerValid = 4006,
    /** Your session has timed out. */
    SessionTimedOut = 4009,
    /** We can't find the server you're trying to connect to. */
    ServerNotFound = 4011,
    /** We didn't recognize the [protocol](https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-example-select-protocol-payload) you sent. */
    UnknownProtocol = 4012,
    /** Channel was deleted, you were kicked, voice server changed, or the main gateway session was dropped. Should not reconnect. */
    Disconnect = 4014,
    /** The server crashed. Our bad! Try [resuming](https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection). */
    VoiceServerCrashed = 4015,
    /** We didn't recognize your [encryption](https://discord.com/developers/docs/topics/voice-connections#encrypting-and-sending-voice). */
    UnknownEncryptionMode = 4016
}
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc */
export declare enum RpcErrorCodes {
    /** An unknown error occurred. */
    UnknownError = 1000,
    /** You sent an invalid payload. */
    InvalidPayload = 4000,
    /** Invalid command name specified. */
    InvalidCommand = 4002,
    /** Invalid guild ID specified. */
    InvalidGuild = 4003,
    /** Invalid event name specified. */
    InvalidEvent = 4004,
    /** Invalid channel ID specified. */
    InvalidChannel = 4005,
    /** You lack permissions to access the given resource. */
    InvalidPermissions = 4006,
    /** An invalid OAuth2 application ID was used to authorize or authenticate with. */
    InvalidClientId = 4007,
    /** An invalid OAuth2 application origin was used to authorize or authenticate with. */
    InvalidOrigin = 4008,
    /** An invalid OAuth2 token was used to authorize or authenticate with. */
    InvalidToken = 4009,
    /** The specified user ID was invalid. */
    InvalidUser = 4010,
    /** A standard OAuth2 error occurred; check the data object for the OAuth2 error details. */
    OAuth2Error = 5000,
    /** An asynchronous `SELECT_TEXT_CHANNEL`/`SELECT_VOICE_CHANNEL` command timed out. */
    SelectChannelTimedOut = 5001,
    /** An asynchronous `GET_GUILD` command timed out. */
    GetGuildTimedOut = 5002,
    /** You tried to join a user to a voice channel but the user was already in one. */
    SelectVoiceForceRequired = 5003,
    /** You tried to capture more than one shortcut key at once. */
    CaptureShortcutAlreadyListening = 5004
}
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc */
export declare enum RpcCloseEventCodes {
    /** You connected to the RPC server with an invalid client ID. */
    InvalidClientId = 4000,
    /** You connected to the RPC server with an invalid origin. */
    InvalidOrigin = 4001,
    /** You are being rate limited. */
    RateLimited = 4002,
    /** The OAuth2 token associated with a connection was revoked, get a new one! */
    TokenRevoked = 4003,
    /** The RPC Server version specified in the connection string was not valid. */
    InvalidVersion = 4004,
    /** The encoding specified in the connection string was not valid. */
    InvalidEncoding = 4005
}
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#http */
export declare enum HTTPResponseCodes {
    /** The request completed successfully. */
    Ok = 200,
    /** The entity was created successfully. */
    Created = 201,
    /** The request completed successfully but returned no content. */
    NoContent = 204,
    /** The entity was not modified (no action was taken). */
    NotModified = 304,
    /** The request was improperly formatted, or the server couldn't understand it. */
    BadRequest = 400,
    /** The `Authorization` header was missing or invalid. */
    Unauthorized = 401,
    /** The `Authorization` token you passed did not have permission to the resource. */
    Forbidden = 403,
    /** The resource at the location specified doesn't exist. */
    NotFound = 404,
    /** The HTTP method used is not valid for the location specified. */
    MethodNotAllowed = 405,
    /** You are being rate limited, see [Rate Limits](https://discord.com/developers/docs/topics/rate-limits). */
    TooManyRequests = 429,
    /** There was not a gateway available to process your request. Wait a bit and retry. */
    GatewayUnavailable = 502
}
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#opcodes-and-status-codes */
export declare enum GatewayCloseEventCodes {
    /** A normal closure of the gateway.
     * You may attempt to reconnect.
     */
    NormalClosure = 1000,
    /** We're not sure what went wrong. Try reconnecting? */
    UnknownError = 4000,
    /** You sent an invalid [Gateway opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes) or an invalid payload for an opcode. Don't do that! */
    UnknownOpcode = 4001,
    /** You sent an invalid [payload](https://discord.com/developers/docs/topics/gateway#sending-payloads) to us. Don't do that! */
    DecodeError = 4002,
    /** You sent us a payload prior to [identifying](https://discord.com/developers/docs/topics/gateway#identify). */
    NotAuthenticated = 4003,
    /** The account token sent with your [identify payload](https://discord.com/developers/docs/topics/gateway#identify) is incorrect. */
    AuthenticationFailed = 4004,
    /** You sent more than one identify payload. Don't do that! */
    AlreadyAuthenticated = 4005,
    /** The sequence sent when [resuming](https://discord.com/developers/docs/topics/gateway#resume) the session was invalid. Reconnect and start a new session. */
    InvalidSeq = 4007,
    /** Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this. */
    RateLimited = 4008,
    /** Your session timed out. Reconnect and start a new one. */
    SessionTimedOut = 4009,
    /** You sent us an invalid [shard when identifying](https://discord.com/developers/docs/topics/gateway#sharding). */
    InvalidShard = 4010,
    /** The session would have handled too many guilds - you are required to [shard](https://discord.com/developers/docs/topics/gateway#sharding) your connection in order to connect. */
    ShardingRequired = 4011,
    /** You sent an invalid version for the gateway. */
    InvalidApiVersion = 4012,
    /** You sent an invalid intent for a [Gateway Intent](https://discord.com/developers/docs/topics/gateway#gateway-intents). You may have incorrectly calculated the bitwise value. */
    InvalidIntents = 4013,
    /** You sent a disallowed intent for a [Gateway Intent](https://discord.com/developers/docs/topics/gateway#gateway-intents). You may have tried to specify an intent that you [have not enabled or are not approved for](https://discord.com/developers/docs/topics/gateway#privileged-intents). */
    DisallowedIntents = 4014
}
/** https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types */
export declare enum InviteTargetTypes {
    Stream = 1,
    EmbeddedApplication = 2
}
/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes */
export declare enum GatewayOpcodes {
    /** An event was dispatched. */
    Dispatch = 0,
    /** Fired periodically by the client to keep the connection alive. */
    Heartbeat = 1,
    /** Starts a new session during the initial handshake. */
    Identify = 2,
    /** Update the client's presence. */
    PresenceUpdate = 3,
    /** Used to join/leave or move between voice channels. */
    VoiceStateUpdate = 4,
    /** Resume a previous session that was disconnected. */
    Resume = 6,
    /** You should attempt to reconnect and resume immediately. */
    Reconnect = 7,
    /** Request information about offline guild members in a large guild. */
    RequestGuildMembers = 8,
    /** The session has been invalidated. You should reconnect and identify/resume accordingly. */
    InvalidSession = 9,
    /** Sent immediately after connecting, contains the `heartbeat_interval` to use. */
    Hello = 10,
    /** Sent in response to receiving a heartbeat to acknowledge that it has been received. */
    HeartbeatACK = 11
}
export declare type GatewayDispatchEventNames = 'READY' | 'CHANNEL_CREATE' | 'CHANNEL_DELETE' | 'CHANNEL_PINS_UPDATE' | 'CHANNEL_UPDATE' | 'GUILD_BAN_ADD' | 'GUILD_BAN_REMOVE' | 'GUILD_CREATE' | 'GUILD_DELETE' | 'GUILD_EMOJIS_UPDATE' | 'GUILD_INTEGRATIONS_UPDATE' | 'GUILD_MEMBER_ADD' | 'GUILD_MEMBER_REMOVE' | 'GUILD_MEMBER_UPDATE' | 'GUILD_MEMBERS_CHUNK' | 'GUILD_ROLE_CREATE' | 'GUILD_ROLE_DELETE' | 'GUILD_ROLE_UPDATE' | 'GUILD_UPDATE' | 'GUILD_SCHEDULED_EVENT_CREATE' | 'GUILD_SCHEDULED_EVENT_DELETE' | 'GUILD_SCHEDULED_EVENT_UPDATE' | 'GUILD_SCHEDULED_EVENT_USER_ADD' | 'GUILD_SCHEDULED_EVENT_USER_REMOVE' | 'INTERACTION_CREATE' | 'INVITE_CREATE' | 'INVITE_DELETE' | 'MESSAGE_CREATE' | 'MESSAGE_DELETE_BULK' | 'MESSAGE_DELETE' | 'MESSAGE_REACTION_ADD' | 'MESSAGE_REACTION_REMOVE_ALL' | 'MESSAGE_REACTION_REMOVE_EMOJI' | 'MESSAGE_REACTION_REMOVE' | 'MESSAGE_UPDATE' | 'PRESENCE_UPDATE' | 'TYPING_START' | 'USER_UPDATE' | 'VOICE_SERVER_UPDATE' | 'VOICE_STATE_UPDATE' | 'WEBHOOKS_UPDATE' | 'INTEGRATION_CREATE' | 'INTEGRATION_UPDATE' | 'INTEGRATION_DELETE' | 'STAGE_INSTANCE_CREATE' | 'STAGE_INSTANCE_UPDATE' | 'STAGE_INSTANCE_DELETE' | 'THREAD_CREATE' | 'THREAD_UPDATE' | 'THREAD_DELETE' | 'THREAD_LIST_SYNC' | 'THREAD_MEMBERS_UPDATE';
export declare type GatewayEventNames = GatewayDispatchEventNames | 'READY' | 'RESUMED' | 'GUILD_LOADED_DD';
/** https://discord.com/developers/docs/topics/gateway#list-of-intents */
export declare enum GatewayIntents {
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
    Guilds = 1,
    /**
     * - GUILD_MEMBER_ADD
     * - GUILD_MEMBER_UPDATE
     * - GUILD_MEMBER_REMOVE
     */
    GuildMembers = 2,
    /**
     * - GUILD_BAN_ADD
     * - GUILD_BAN_REMOVE
     */
    GuildBans = 4,
    /**
     * - GUILD_EMOJIS_UPDATE
     */
    GuildEmojis = 8,
    /**
     * - GUILD_INTEGRATIONS_UPDATE
     * - INTEGRATION_CREATE
     * - INTEGRATION_UPDATE
     * - INTEGRATION_DELETE
     */
    GuildIntegrations = 16,
    /** Enables the following events:
     * - WEBHOOKS_UPDATE
     */
    GuildWebhooks = 32,
    /**
     * - INVITE_CREATE
     * - INVITE_DELETE
     */
    GuildInvites = 64,
    /**
     * - VOICE_STATE_UPDATE
     */
    GuildVoiceStates = 128,
    /**
     * - PRESENCE_UPDATE
     */
    GuildPresences = 256,
    /**
     * - MESSAGE_CREATE
     * - MESSAGE_UPDATE
     * - MESSAGE_DELETE
     */
    GuildMessages = 512,
    /**
     * - MESSAGE_REACTION_ADD
     * - MESSAGE_REACTION_REMOVE
     * - MESSAGE_REACTION_REMOVE_ALL
     * - MESSAGE_REACTION_REMOVE_EMOJI
     */
    GuildMessageReactions = 1024,
    /**
     * - TYPING_START
     */
    GuildMessageTyping = 2048,
    /**
     * - CHANNEL_CREATE
     * - MESSAGE_CREATE
     * - MESSAGE_UPDATE
     * - MESSAGE_DELETE
     * - CHANNEL_PINS_UPDATE
     */
    DirectMessages = 4096,
    /**
     * - MESSAGE_REACTION_ADD
     * - MESSAGE_REACTION_REMOVE
     * - MESSAGE_REACTION_REMOVE_ALL
     * - MESSAGE_REACTION_REMOVE_EMOJI
     */
    DirectMessageReactions = 8192,
    /**
     * - TYPING_START
     */
    DirectMessageTyping = 16384,
    /**
     * This intent will add `content` values to all message objects.
     */
    MessageContent = 32768,
    /**
     * - GUILD_SCHEDULED_EVENT_CREATE
     * - GUILD_SCHEDULED_EVENT_UPDATE
     * - GUILD_SCHEDULED_EVENT_DELETE
     * - GUILD_SCHEDULED_EVENT_USER_ADD this is experimental and unstable.
     * - GUILD_SCHEDULED_EVENT_USER_REMOVE this is experimental and unstable.
     */
    GuildScheduledEvents = 65536,
    /**
     * - AUTO_MODERATION_RULE_CREATE
     * - AUTO_MODERATION_RULE_UPDATE
     * - AUTO_MODERATION_RULE_DELETE
     */
    AutoModerationConfiguration = 1048576,
    /**
     * - AUTO_MODERATION_ACTION_EXECUTION
     */
    AutoModerationExecution = 2097152
}
/** https://discord.com/developers/docs/topics/gateway#list-of-intents */
export declare const Intents: typeof GatewayIntents;
export declare type Intents = GatewayIntents;
/** https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactionresponsetype */
export declare enum InteractionResponseTypes {
    /** ACK a `Ping` */
    Pong = 1,
    /** Respond to an interaction with a message */
    ChannelMessageWithSource = 4,
    /** ACK an interaction and edit a response later, the user sees a loading state */
    DeferredChannelMessageWithSource = 5,
    /** For components, ACK an interaction and edit the original message later; the user does not see a loading state */
    DeferredUpdateMessage = 6,
    /** For components, edit the message the component was attached to */
    UpdateMessage = 7,
    /** For Application Command Options, send an autocomplete result */
    ApplicationCommandAutocompleteResult = 8,
    /** For Command or Component interactions, send a Modal response */
    Modal = 9
}
export declare enum Errors {
    BOTS_HIGHEST_ROLE_TOO_LOW = "BOTS_HIGHEST_ROLE_TOO_LOW",
    CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND",
    CHANNEL_NOT_IN_GUILD = "CHANNEL_NOT_IN_GUILD",
    CHANNEL_NOT_TEXT_BASED = "CHANNEL_NOT_TEXT_BASED",
    CHANNEL_NOT_STAGE_VOICE = "CHANNEL_NOT_STAGE_VOICE",
    MESSAGE_MAX_LENGTH = "MESSAGE_MAX_LENGTH",
    RULES_CHANNEL_CANNOT_BE_DELETED = "RULES_CHANNEL_CANNOT_BE_DELETED",
    UPDATES_CHANNEL_CANNOT_BE_DELETED = "UPDATES_CHANNEL_CANNOT_BE_DELETED",
    INVALID_TOPIC_LENGTH = "INVALID_TOPIC_LENGTH",
    GUILD_NOT_DISCOVERABLE = "GUILD_NOT_DISCOVERABLE",
    GUILD_WIDGET_NOT_ENABLED = "GUILD_WIDGET_NOT_ENABLED",
    GUILD_NOT_FOUND = "GUILD_NOT_FOUND",
    MEMBER_NOT_FOUND = "MEMBER_NOT_FOUND",
    MEMBER_NOT_IN_VOICE_CHANNEL = "MEMBER_NOT_IN_VOICE_CHANNEL",
    MEMBER_SEARCH_LIMIT_TOO_HIGH = "MEMBER_SEARCH_LIMIT_TOO_HIGH",
    MEMBER_SEARCH_LIMIT_TOO_LOW = "MEMBER_SEARCH_LIMIT_TOO_LOW",
    PRUNE_MAX_DAYS = "PRUNE_MAX_DAYS",
    ROLE_NOT_FOUND = "ROLE_NOT_FOUND",
    INVALID_THREAD_PARENT_CHANNEL_TYPE = "INVALID_THREAD_PARENT_CHANNEL_TYPE",
    GUILD_NEWS_CHANNEL_ONLY_SUPPORT_PUBLIC_THREADS = "GUILD_NEWS_CHANNEL_ONLY_SUPPORT_PUBLIC_THREADS",
    NOT_A_THREAD_CHANNEL = "NOT_A_THREAD_CHANNEL",
    MISSING_MANAGE_THREADS_AND_NOT_MEMBER = "MISSING_MANAGE_THREADS_AND_NOT_MEMBER",
    CANNOT_GET_MEMBERS_OF_AN_UNJOINED_PRIVATE_THREAD = "CANNOT_GET_MEMBERS_OF_AN_UNJOINED_PRIVATE_THREAD",
    HAVE_TO_BE_THE_CREATOR_OF_THE_THREAD_OR_HAVE_MANAGE_THREADS_TO_REMOVE_MEMBERS = "HAVE_TO_BE_THE_CREATOR_OF_THE_THREAD_OR_HAVE_MANAGE_THREADS_TO_REMOVE_MEMBERS",
    INVALID_GET_MESSAGES_LIMIT = "INVALID_GET_MESSAGES_LIMIT",
    DELETE_MESSAGES_MIN = "DELETE_MESSAGES_MIN",
    PRUNE_MIN_DAYS = "PRUNE_MIN_DAYS",
    INVALID_SLASH_DESCRIPTION = "INVALID_SLASH_DESCRIPTION",
    INVALID_SLASH_NAME = "INVALID_SLASH_NAME",
    INVALID_SLASH_OPTIONS = "INVALID_SLASH_OPTIONS",
    INVALID_SLASH_OPTIONS_CHOICES = "INVALID_SLASH_OPTIONS_CHOICES",
    TOO_MANY_SLASH_OPTIONS = "TOO_MANY_SLASH_OPTIONS",
    INVALID_SLASH_OPTION_CHOICE_NAME = "INVALID_SLASH_OPTION_CHOICE_NAME",
    INVALID_SLASH_OPTIONS_CHOICE_VALUE_TYPE = "INVALID_SLASH_OPTIONS_CHOICE_VALUE_TYPE",
    TOO_MANY_SLASH_OPTION_CHOICES = "TOO_MANY_SLASH_OPTION_CHOICES",
    ONLY_STRING_OR_INTEGER_OPTIONS_CAN_HAVE_CHOICES = "ONLY_STRING_OR_INTEGER_OPTIONS_CAN_HAVE_CHOICES",
    INVALID_SLASH_OPTION_NAME = "INVALID_SLASH_OPTION_NAME",
    INVALID_SLASH_OPTION_DESCRIPTION = "INVALID_SLASH_OPTION_DESCRIPTION",
    INVALID_CONTEXT_MENU_COMMAND_NAME = "INVALID_CONTEXT_MENU_COMMAND_NAME",
    INVALID_CONTEXT_MENU_COMMAND_DESCRIPTION = "INVALID_CONTEXT_MENU_COMMAND_DESCRIPTION",
    INVALID_WEBHOOK_NAME = "INVALID_WEBHOOK_NAME",
    INVALID_WEBHOOK_OPTIONS = "INVALID_WEBHOOK_OPTIONS",
    MISSING_ADD_REACTIONS = "MISSING_ADD_REACTIONS",
    MISSING_ADMINISTRATOR = "MISSING_ADMINISTRATOR",
    MISSING_ATTACH_FILES = "MISSING_ATTACH_FILES",
    MISSING_BAN_MEMBERS = "MISSING_BAN_MEMBERS",
    MISSING_CHANGE_NICKNAME = "MISSING_CHANGE_NICKNAME",
    MISSING_CONNECT = "MISSING_CONNECT",
    MISSING_CREATE_INSTANT_INVITE = "MISSING_CREATE_INSTANT_INVITE",
    MISSING_DEAFEN_MEMBERS = "MISSING_DEAFEN_MEMBERS",
    MISSING_EMBED_LINKS = "MISSING_EMBED_LINKS",
    MISSING_INTENT_GUILD_MEMBERS = "MISSING_INTENT_GUILD_MEMBERS",
    MISSING_KICK_MEMBERS = "MISSING_KICK_MEMBERS",
    MISSING_MANAGE_CHANNELS = "MISSING_MANAGE_CHANNELS",
    MISSING_MANAGE_EMOJIS = "MISSING_MANAGE_EMOJIS",
    MISSING_MANAGE_GUILD = "MISSING_MANAGE_GUILD",
    MISSING_MANAGE_MESSAGES = "MISSING_MANAGE_MESSAGES",
    MISSING_MANAGE_NICKNAMES = "MISSING_MANAGE_NICKNAMES",
    MISSING_MANAGE_ROLES = "MISSING_MANAGE_ROLES",
    MISSING_MANAGE_WEBHOOKS = "MISSING_MANAGE_WEBHOOKS",
    MISSING_MENTION_EVERYONE = "MISSING_MENTION_EVERYONE",
    MISSING_MOVE_MEMBERS = "MISSING_MOVE_MEMBERS",
    MISSING_MUTE_MEMBERS = "MISSING_MUTE_MEMBERS",
    MISSING_PRIORITY_SPEAKER = "MISSING_PRIORITY_SPEAKER",
    MISSING_READ_MESSAGE_HISTORY = "MISSING_READ_MESSAGE_HISTORY",
    MISSING_SEND_MESSAGES = "MISSING_SEND_MESSAGES",
    MISSING_SEND_TTS_MESSAGES = "MISSING_SEND_TTS_MESSAGES",
    MISSING_SPEAK = "MISSING_SPEAK",
    MISSING_STREAM = "MISSING_STREAM",
    MISSING_USE_VAD = "MISSING_USE_VAD",
    MISSING_USE_EXTERNAL_EMOJIS = "MISSING_USE_EXTERNAL_EMOJIS",
    MISSING_VIEW_AUDIT_LOG = "MISSING_VIEW_AUDIT_LOG",
    MISSING_VIEW_CHANNEL = "MISSING_VIEW_CHANNEL",
    MISSING_VIEW_GUILD_INSIGHTS = "MISSING_VIEW_GUILD_INSIGHTS",
    NICKNAMES_MAX_LENGTH = "NICKNAMES_MAX_LENGTH",
    USERNAME_INVALID_CHARACTER = "USERNAME_INVALID_CHARACTER",
    USERNAME_INVALID_USERNAME = "USERNAME_INVALID_USERNAME",
    USERNAME_MAX_LENGTH = "USERNAME_MAX_LENGTH",
    USERNAME_MIN_LENGTH = "USERNAME_MIN_LENGTH",
    NONCE_TOO_LONG = "NONCE_TOO_LONG",
    INVITE_MAX_AGE_INVALID = "INVITE_MAX_AGE_INVALID",
    INVITE_MAX_USES_INVALID = "INVITE_MAX_USES_INVALID",
    RATE_LIMIT_RETRY_MAXED = "RATE_LIMIT_RETRY_MAXED",
    REQUEST_CLIENT_ERROR = "REQUEST_CLIENT_ERROR",
    REQUEST_SERVER_ERROR = "REQUEST_SERVER_ERROR",
    REQUEST_UNKNOWN_ERROR = "REQUEST_UNKNOWN_ERROR",
    TOO_MANY_COMPONENTS = "TOO_MANY_COMPONENTS",
    TOO_MANY_ACTION_ROWS = "TOO_MANY_ACTION_ROWS",
    LINK_BUTTON_CANNOT_HAVE_CUSTOM_ID = "LINK_BUTTON_CANNOT_HAVE_CUSTOM_ID",
    COMPONENT_LABEL_TOO_BIG = "COMPONENT_LABEL_TOO_BIG",
    COMPONENT_CUSTOM_ID_TOO_BIG = "COMPONENT_CUSTOM_ID_TOO_BIG",
    BUTTON_REQUIRES_CUSTOM_ID = "BUTTON_REQUIRES_CUSTOM_ID",
    COMPONENT_SELECT_MUST_BE_ALONE = "COMPONENT_SELECT_MUST_BE_ALONE",
    COMPONENT_PLACEHOLDER_TOO_BIG = "COMPONENT_PLACEHOLDER_TOO_BIG",
    COMPONENT_SELECT_MIN_VALUE_TOO_LOW = "COMPONENT_SELECT_MIN_VALUE_TOO_LOW",
    COMPONENT_SELECT_MIN_VALUE_TOO_MANY = "COMPONENT_SELECT_MIN_VALUE_TOO_MANY",
    COMPONENT_SELECT_MAX_VALUE_TOO_LOW = "COMPONENT_SELECT_MAX_VALUE_TOO_LOW",
    COMPONENT_SELECT_MAX_VALUE_TOO_MANY = "COMPONENT_SELECT_MAX_VALUE_TOO_MANY",
    COMPONENT_SELECT_OPTIONS_TOO_LOW = "COMPONENT_SELECT_OPTIONS_TOO_LOW",
    COMPONENT_SELECT_OPTIONS_TOO_MANY = "COMPONENT_SELECT_OPTIONS_TOO_MANY",
    SELECT_OPTION_LABEL_TOO_BIG = "SELECT_OPTION_LABEL_TOO_BIG",
    SELECT_OPTION_VALUE_TOO_BIG = "SELECT_OPTION_VALUE_TOO_BIG",
    SELECT_OPTION_TOO_MANY_DEFAULTS = "SELECT_OPTION_TOO_MANY_DEFAULTS",
    COMPONENT_SELECT_MIN_HIGHER_THAN_MAX = "COMPONENT_SELECT_MIN_HIGHER_THAN_MAX",
    CANNOT_ADD_USER_TO_ARCHIVED_THREADS = "CANNOT_ADD_USER_TO_ARCHIVED_THREADS",
    CANNOT_LEAVE_ARCHIVED_THREAD = "CANNOT_LEAVE_ARCHIVED_THREAD",
    CANNOT_REMOVE_FROM_ARCHIVED_THREAD = "CANNOT_REMOVE_FROM_ARCHIVED_THREAD",
    YOU_CAN_NOT_DM_THE_BOT_ITSELF = "YOU_CAN_NOT_DM_THE_BOT_ITSELF"
}
export declare enum Locales {
    Danish = "da",
    German = "de",
    EnglishUk = "en-GB",
    EnglishUs = "en-US",
    Spanish = "es-ES",
    French = "fr",
    Croatian = "hr",
    Italian = "it",
    Lithuanian = "lt",
    Hungarian = "hu",
    Dutch = "nl",
    Norwegian = "no",
    Polish = "pl",
    PortugueseBrazilian = "pt-BR",
    RomanianRomania = "ro",
    Finnish = "fi",
    Swedish = "sv-SE",
    Vietnamese = "vi",
    Turkish = "tr",
    Czech = "cs",
    Greek = "el",
    Bulgarian = "bg",
    Russian = "ru",
    Ukrainian = "uk",
    Hindi = "hi",
    Thai = "th",
    ChineseChina = "zh-CN",
    Japanese = "ja",
    ChineseTaiwan = "zh-TW",
    Korean = "ko"
}
export declare type Localization = Partial<Record<Locales, string>>;
export interface FileContent {
    /** The file blob */
    blob: Blob;
    /** The name of the file */
    name: string;
}
export interface GatewayBot {
    /** The WSS URL that can be used for connecting to the gateway */
    url: string;
    /** The recommended number of shards to use when connecting */
    shards: number;
    /** Information on the current session start limit */
    sessionStartLimit: {
        /** The total number of session starts the current user is allowed */
        total: number;
        /** The remaining number of session starts the current user is allowed */
        remaining: number;
        /** The number of milliseconds after which the limit resets */
        resetAfter: number;
        /** The number of identify requests allowed per 5 seconds */
        maxConcurrency: number;
    };
}
export declare type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export declare type MakeRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
export declare type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}` ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}` : Lowercase<S>;
export declare type Camelize<T> = {
    [K in keyof T as CamelCase<string & K>]: T[K] extends Array<infer U> ? U extends {} ? Array<Camelize<U>> : T[K] : T[K] extends {} ? Camelize<T[K]> : never;
};
export declare type PickPartial<T, K extends keyof T> = {
    [P in keyof T]?: T[P] | undefined;
} & {
    [P in K]: T[P];
};
export declare type OmitFirstFnArg<F> = F extends (x: any, ...args: infer P) => infer R ? (...args: P) => R : never;

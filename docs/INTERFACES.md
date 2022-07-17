# Interfaces

  - [interface SessionCache extends SymCache](#interface-sessioncache-extends-symcache)

  - [interface RestRequest](#interface-restrequest)

  - [interface RestRequestResponse](#interface-restrequestresponse)

  - [interface RestRequestRejection extends RestRequestResponse](#interface-restrequestrejection-extends-restrequestresponse)

  - [interface RestPayload](#interface-restpayload)

  - [interface RestRateLimitedPath](#interface-restratelimitedpath)

  - [interface CreateRequestBodyOptions](#interface-createrequestbodyoptions)

  - [interface RestSendRequestOptions](#interface-restsendrequestoptions)

  - [interface CreateRestManagerOptions](#interface-createrestmanageroptions)

  - [interface CreateShardManager](#interface-createshardmanager)

  - [interface CreateGatewayManager](#interface-creategatewaymanager)

  - [interface ShardGatewayConfig](#interface-shardgatewayconfig)

  - [interface ShardHeart](#interface-shardheart)

  - [interface ShardEvents](#interface-shardevents)

  - [interface ShardSocketRequest](#interface-shardsocketrequest)

  - [interface CreateShard](#interface-createshard)

  - [interface BaseRole](#interface-baserole)

  - [interface FileContent](#interface-filecontent)

  - [interface GatewayBot](#interface-gatewaybot)

  - [interface DiscordUser](#interface-discorduser)

  - [interface DiscordConnection](#interface-discordconnection)

  - [interface DiscordIntegration](#interface-discordintegration)

  - [interface DiscordIntegrationAccount](#interface-discordintegrationaccount)

  - [interface DiscordIntegrationApplication](#interface-discordintegrationapplication)

  - [interface DiscordIntegrationCreateUpdate extends DiscordIntegration](#interface-discordintegrationcreateupdate-extends-discordintegration)

  - [interface DiscordIntegrationDelete](#interface-discordintegrationdelete)

  - [interface DiscordGuildIntegrationsUpdate](#interface-discordguildintegrationsupdate)

  - [interface DiscordTypingStart](#interface-discordtypingstart)

  - [interface DiscordMember](#interface-discordmember)

  - [interface DiscordApplication](#interface-discordapplication)

  - [interface DiscordTeam](#interface-discordteam)

  - [interface DiscordTeamMember](#interface-discordteammember)

  - [interface DiscordWebhookUpdate](#interface-discordwebhookupdate)

  - [interface DiscordAllowedMentions](#interface-discordallowedmentions)

  - [interface DiscordEmbed](#interface-discordembed)

  - [interface DiscordEmbedAuthor](#interface-discordembedauthor)

  - [interface DiscordEmbedField](#interface-discordembedfield)

  - [interface DiscordEmbedFooter](#interface-discordembedfooter)

  - [interface DiscordEmbedImage](#interface-discordembedimage)

  - [interface DiscordEmbedProvider](#interface-discordembedprovider)

  - [interface DiscordEmbedThumbnail](#interface-discordembedthumbnail)

  - [interface DiscordEmbedVideo](#interface-discordembedvideo)

  - [interface DiscordAttachment](#interface-discordattachment)

  - [interface DiscordIncomingWebhook](#interface-discordincomingwebhook)

  - [interface DiscordApplicationWebhook](#interface-discordapplicationwebhook)

  - [interface DiscordGuild](#interface-discordguild)

  - [interface DiscordRole](#interface-discordrole)

  - [interface DiscordRoleTags](#interface-discordroletags)

  - [interface DiscordEmoji](#interface-discordemoji)

  - [interface DiscordVoiceState](#interface-discordvoicestate)

  - [interface DiscordChannel](#interface-discordchannel)

  - [interface DiscordPresenceUpdate](#interface-discordpresenceupdate)

  - [interface DiscordStatusUpdate](#interface-discordstatusupdate)

  - [interface DiscordWelcomeScreen](#interface-discordwelcomescreen)

  - [interface DiscordWelcomeScreenChannel](#interface-discordwelcomescreenchannel)

  - [interface DiscordStageInstance](#interface-discordstageinstance)

  - [interface DiscordThreadMetadata](#interface-discordthreadmetadata)

  - [interface DiscordThreadMemberBase](#interface-discordthreadmemberbase)

  - [interface DiscordThreadMember](#interface-discordthreadmember)

  - [interface DiscordThreadMemberGuildCreate](#interface-discordthreadmemberguildcreate)

  - [interface DiscordActivity](#interface-discordactivity)

  - [interface DiscordClientStatus](#interface-discordclientstatus)

  - [interface DiscordActivityTimestamps](#interface-discordactivitytimestamps)

  - [interface DiscordActivityEmoji](#interface-discordactivityemoji)

  - [interface DiscordActivityParty](#interface-discordactivityparty)

  - [interface DiscordActivityAssets](#interface-discordactivityassets)

  - [interface DiscordActivitySecrets](#interface-discordactivitysecrets)

  - [interface DiscordActivityButton](#interface-discordactivitybutton)

  - [interface DiscordOverwrite](#interface-discordoverwrite)

  - [interface DiscordMemberWithUser extends DiscordMember](#interface-discordmemberwithuser-extends-discordmember)

  - [interface DiscordMessage](#interface-discordmessage)

  - [interface DiscordChannelMention](#interface-discordchannelmention)

  - [interface DiscordReaction](#interface-discordreaction)

  - [interface DiscordMessageActivity](#interface-discordmessageactivity)

  - [interface DiscordMessageReference](#interface-discordmessagereference)

  - [interface DiscordSticker](#interface-discordsticker)

  - [interface DiscordMessageInteraction](#interface-discordmessageinteraction)

  - [interface DiscordActionRow](#interface-discordactionrow)

  - [interface DiscordSelectMenuComponent](#interface-discordselectmenucomponent)

  - [interface DiscordSelectOption](#interface-discordselectoption)

  - [interface DiscordButtonComponent](#interface-discordbuttoncomponent)

  - [interface DiscordInputTextComponent](#interface-discordinputtextcomponent)

  - [interface DiscordStickerItem](#interface-discordstickeritem)

  - [interface DiscordStickerPack](#interface-discordstickerpack)

  - [interface DiscordInteraction](#interface-discordinteraction)

  - [interface DiscordInteractionMember extends DiscordMemberWithUser](#interface-discordinteractionmember-extends-discordmemberwithuser)

  - [interface DiscordInteractionData](#interface-discordinteractiondata)

  - [interface DiscordInteractionDataResolved](#interface-discordinteractiondataresolved)

  - [interface DiscordListActiveThreads](#interface-discordlistactivethreads)

  - [interface DiscordListArchivedThreads extends DiscordListActiveThreads](#interface-discordlistarchivedthreads-extends-discordlistactivethreads)

  - [interface DiscordThreadListSync](#interface-discordthreadlistsync)

  - [interface DiscordAuditLog](#interface-discordauditlog)

  - [interface DiscordAutoModerationRule](#interface-discordautomoderationrule)

  - [interface DiscordAutoModerationRuleTriggerMetadata](#interface-discordautomoderationruletriggermetadata)

  - [interface DiscordAutoModerationAction](#interface-discordautomoderationaction)

  - [interface DiscordAutoModerationActionMetadata](#interface-discordautomoderationactionmetadata)

  - [interface DiscordAutoModerationActionExecution](#interface-discordautomoderationactionexecution)

  - [interface DiscordAuditLogEntry](#interface-discordauditlogentry)

  - [interface DiscordOptionalAuditEntryInfo](#interface-discordoptionalauditentryinfo)

  - [interface DiscordScheduledEvent](#interface-discordscheduledevent)

  - [interface DiscordScheduledEventEntityMetadata](#interface-discordscheduledevententitymetadata)

  - [interface DiscordGetGatewayBot](#interface-discordgetgatewaybot)

  - [interface DiscordSessionStartLimit](#interface-discordsessionstartlimit)

  - [interface DiscordInviteMetadata extends DiscordInvite](#interface-discordinvitemetadata-extends-discordinvite)

  - [interface DiscordInvite](#interface-discordinvite)

  - [interface DiscordInviteStageInstance](#interface-discordinvitestageinstance)

  - [interface DiscordApplicationCommand](#interface-discordapplicationcommand)

  - [interface DiscordApplicationCommandOption](#interface-discordapplicationcommandoption)

  - [interface DiscordApplicationCommandOptionChoice](#interface-discordapplicationcommandoptionchoice)

  - [interface DiscordGuildApplicationCommandPermissions](#interface-discordguildapplicationcommandpermissions)

  - [interface DiscordApplicationCommandPermissions](#interface-discordapplicationcommandpermissions)

  - [interface DiscordGuildWidget](#interface-discordguildwidget)

  - [interface DiscordGuildPreview](#interface-discordguildpreview)

  - [interface DiscordDiscoveryCategory](#interface-discorddiscoverycategory)

  - [interface DiscordDiscoveryName](#interface-discorddiscoveryname)

  - [interface DiscordDiscoveryMetadata](#interface-discorddiscoverymetadata)

  - [interface DiscordFollowedChannel](#interface-discordfollowedchannel)

  - [interface DiscordGatewayPayload](#interface-discordgatewaypayload)

  - [interface DiscordGuildMembersChunk](#interface-discordguildmemberschunk)

  - [interface DiscordComponent](#interface-discordcomponent)

  - [interface DiscordChannelPinsUpdate](#interface-discordchannelpinsupdate)

  - [interface DiscordGuildRoleDelete](#interface-discordguildroledelete)

  - [interface DiscordGuildBanAddRemove](#interface-discordguildbanaddremove)

  - [interface DiscordMessageReactionRemove extends Omit](#interface-discordmessagereactionremove-extends-omit)

  - [interface DiscordMessageReactionAdd](#interface-discordmessagereactionadd)

  - [interface DiscordVoiceServerUpdate](#interface-discordvoiceserverupdate)

  - [interface DiscordInviteCreate](#interface-discordinvitecreate)

  - [interface DiscordHello](#interface-discordhello)

  - [interface DiscordReady](#interface-discordready)

  - [interface DiscordUnavailableGuild extends Pick](#interface-discordunavailableguild-extends-pick)

  - [interface DiscordMessageDeleteBulk](#interface-discordmessagedeletebulk)

  - [interface DiscordTemplate](#interface-discordtemplate)

  - [interface DiscordGuildMemberAdd extends DiscordMemberWithUser](#interface-discordguildmemberadd-extends-discordmemberwithuser)

  - [interface DiscordMessageDelete](#interface-discordmessagedelete)

  - [interface DiscordThreadMembersUpdate](#interface-discordthreadmembersupdate)

  - [interface DiscordThreadMemberUpdate](#interface-discordthreadmemberupdate)

  - [interface DiscordGuildRoleCreate](#interface-discordguildrolecreate)

  - [interface DiscordGuildEmojisUpdate](#interface-discordguildemojisupdate)

  - [interface DiscordAddGuildDiscoverySubcategory](#interface-discordaddguilddiscoverysubcategory)

  - [interface DiscordGuildBanAddRemove](#interface-discordguildbanaddremove)

  - [interface DiscordGuildMemberUpdate](#interface-discordguildmemberupdate)

  - [interface DiscordMessageReactionRemoveAll extends Pick](#interface-discordmessagereactionremoveall-extends-pick)

  - [interface DiscordValidateDiscoverySearchTerm](#interface-discordvalidatediscoverysearchterm)

  - [interface DiscordGuildRoleUpdate](#interface-discordguildroleupdate)

  - [interface DiscordScheduledEventUserAdd](#interface-discordscheduledeventuseradd)

  - [interface DiscordGuildMemberRemove](#interface-discordguildmemberremove)

  - [interface DiscordBan](#interface-discordban)

  - [interface DiscordScheduledEventUserRemove](#interface-discordscheduledeventuserremove)

  - [interface DiscordInviteDelete](#interface-discordinvitedelete)

  - [interface DiscordVoiceRegion](#interface-discordvoiceregion)

  - [interface DiscordGuildWidgetSettings](#interface-discordguildwidgetsettings)

  - [interface DiscordInstallParams](#interface-discordinstallparams)

  - [interface ActivityAssets](#interface-activityassets)

  - [interface Activities](#interface-activities)

  - [interface ChatInputApplicationCommandBuilder extends ApplicationCommandBuilder, OptionBased](#interface-chatinputapplicationcommandbuilder-extends-applicationcommandbuilder-optionbased)

  - [interface AutoModerationRuleTriggerMetadata](#interface-automoderationruletriggermetadata)

  - [interface ActionMetadata](#interface-actionmetadata)

  - [interface AutoModerationAction](#interface-automoderationaction)

  - [interface Embed](#interface-embed)

  - [interface MessageReactionAdd](#interface-messagereactionadd)

  - [interface MessageReactionRemove extends Omit](#interface-messagereactionremove-extends-omit)

  - [interface MessageReactionRemoveAll extends Pick](#interface-messagereactionremoveall-extends-pick)

  - [interface ActionRowComponent](#interface-actionrowcomponent)

  - [interface ButtonComponent](#interface-buttoncomponent)

  - [interface LinkButtonComponent](#interface-linkbuttoncomponent)

  - [interface SelectMenuComponent](#interface-selectmenucomponent)

  - [interface TextInputComponent](#interface-textinputcomponent)

  - [interface SelectMenuOption](#interface-selectmenuoption)

  - [interface EmbedFooter](#interface-embedfooter)

  - [interface EmbedAuthor](#interface-embedauthor)

  - [interface EmbedVideo](#interface-embedvideo)

  - [interface SymCache](#interface-symcache)

  - [interface PermissionsOverwrites](#interface-permissionsoverwrites)

  - [interface DiscordStageInstanceB extends DiscordAutoClosingStageInstance](#interface-discordstageinstanceb-extends-discordautoclosingstageinstance)

  - [interface AllowedMentions](#interface-allowedmentions)

  - [interface CreateMessageReference](#interface-createmessagereference)

  - [interface CreateMessage](#interface-createmessage)

  - [interface EditMessage extends Partial](#interface-editmessage-extends-partial)

  - [interface WebhookAuthor](#interface-webhookauthor)

  - [interface Team](#interface-team)

  - [interface TeamMember](#interface-teammember)

  - [interface EditWebhookMessage](#interface-editwebhookmessage)

  - [interface CreateApplicationCommand](#interface-createapplicationcommand)

  - [interface CreateContextApplicationCommand extends Omit](#interface-createcontextapplicationcommand-extends-omit)

  - [interface GetApplicationCommand](#interface-getapplicationcommand)

  - [interface UpsertApplicationCommands extends CreateApplicationCommand](#interface-upsertapplicationcommands-extends-createapplicationcommand)

  - [interface ApplicationCommandPermissions](#interface-applicationcommandpermissions)

  - [interface ApplicationCommandPermissions](#interface-applicationcommandpermissions)

  - [interface RestOptions](#interface-restoptions)

  - [interface GatewayOptions](#interface-gatewayoptions)

  - [interface SessionOptions](#interface-sessionoptions)

  - [interface StatusUpdate](#interface-statusupdate)

  - [interface Model](#interface-model)

  - [interface StickerItem](#interface-stickeritem)

  - [interface StickerPack](#interface-stickerpack)

  - [interface CommandInteractionOption extends Omit](#interface-commandinteractionoption-extends-omit)

  - [interface IntegrationAccount](#interface-integrationaccount)

  - [interface IntegrationApplication](#interface-integrationapplication)

  - [interface InteractionResponse](#interface-interactionresponse)

  - [interface InteractionApplicationCommandCallbackData extends Pick](#interface-interactionapplicationcommandcallbackdata-extends-pick)

  - [interface ApplicationCommandOptionChoice](#interface-applicationcommandoptionchoice)

  - [interface OptionBuilderLike](#interface-optionbuilderlike)

  - [interface OptionBuilderNested extends OptionBuilder, OptionBased](#interface-optionbuildernested-extends-optionbuilder-optionbased)

  - [interface ApplicationCommandOption](#interface-applicationcommandoption)

  - [interface InviteStageInstance](#interface-invitestageinstance)

  - [interface InviteScheduledEvent](#interface-invitescheduledevent)

  - [interface InviteCreate](#interface-invitecreate)

  - [interface CreateRole](#interface-createrole)

  - [interface ModifyGuildRole](#interface-modifyguildrole)

  - [interface CreateGuildEmoji](#interface-createguildemoji)

  - [interface ModifyGuildEmoji](#interface-modifyguildemoji)

  - [interface CreateGuildBan](#interface-createguildban)

  - [interface ModifyGuildMember](#interface-modifyguildmember)

  - [interface BeginGuildPrune](#interface-beginguildprune)

  - [interface ModifyRolePositions](#interface-modifyrolepositions)

  - [interface GuildCreateOptionsRole](#interface-guildcreateoptionsrole)

  - [interface GuildCreateOptionsRole](#interface-guildcreateoptionsrole)

  - [interface GuildCreateOptionsChannel](#interface-guildcreateoptionschannel)

  - [interface GuildCreateOptions](#interface-guildcreateoptions)

  - [interface GuildCreateOptions](#interface-guildcreateoptions)

  - [interface GuildEditOptions extends Omit](#interface-guildeditoptions-extends-omit)

  - [interface GuildEditOptions extends Omit](#interface-guildeditoptions-extends-omit)

  - [interface DiscordInviteOptions](#interface-discordinviteoptions)

  - [interface CreateWebhook](#interface-createwebhook)

  - [interface ThreadCreateOptions](#interface-threadcreateoptions)

  - [interface EditGuildChannelOptions](#interface-editguildchanneloptions)

  - [interface EditNewsChannelOptions extends EditGuildChannelOptions](#interface-editnewschanneloptions-extends-editguildchanneloptions)

  - [interface EditGuildTextChannelOptions extends EditNewsChannelOptions](#interface-editguildtextchanneloptions-extends-editnewschanneloptions)

  - [interface EditStageChannelOptions extends EditGuildChannelOptions](#interface-editstagechanneloptions-extends-editguildchanneloptions)

  - [interface EditVoiceChannelOptions extends EditStageChannelOptions](#interface-editvoicechanneloptions-extends-editstagechanneloptions)

  - [interface ThreadCreateOptions](#interface-threadcreateoptions)

  - [interface ReturnThreadsArchive](#interface-returnthreadsarchive)

  - [interface UpdateVoiceState](#interface-updatevoicestate)

  - [interface DMChannel extends Omit, Omit](#interface-dmchannel-extends-omit-omit)

  - [interface VoiceChannel extends TextChannel, BaseVoiceChannel](#interface-voicechannel-extends-textchannel-basevoicechannel)

  - [interface NewsChannel extends TextChannel, GuildChannel](#interface-newschannel-extends-textchannel-guildchannel)

  - [interface ThreadChannel extends Omit, Omit](#interface-threadchannel-extends-omit-omit)

  - [interface GuildTextChannel extends GuildChannel, TextChannel](#interface-guildtextchannel-extends-guildchannel-textchannel)
## [interface SessionCache extends SymCache](https://github.com/oasisjs/biscuit/tree/main/packages/cache/mod.ts#L18:0)

## [interface RestRequest](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/rest.ts#L1:0)

## [interface RestRequestResponse](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/rest.ts#L8:0)

## [interface RestRequestRejection extends RestRequestResponse](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/rest.ts#L14:0)

## [interface RestPayload](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/rest.ts#L18:0)

## [interface RestRateLimitedPath](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/rest.ts#L25:0)

## [interface CreateRequestBodyOptions](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/createRequestBody.ts#L62:0)

## [interface RestSendRequestOptions](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/sendRequest.ts#L6:0)

## [interface CreateRestManagerOptions](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/restManager.ts#L81:0)

## [interface CreateShardManager](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/manager/shardManager.ts#L98:0)

## [interface CreateGatewayManager](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/manager/gatewayManager.ts#L198:0)

## [interface ShardGatewayConfig](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/types.ts#L34:0)

## [interface ShardHeart](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/types.ts#L77:0)

## [interface ShardEvents](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/types.ts#L97:0)

## [interface ShardSocketRequest](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/types.ts#L143:0)

## [interface CreateShard](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/createShard.ts#L226:0)

## [interface BaseRole](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/shared.ts#L161:0)
```
https://discord.com/developers/docs/topics/permissions#role-object-role-structure
```
## [interface FileContent](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/shared.ts#L1204:0)

## [interface GatewayBot](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/shared.ts#L1211:0)

## [interface DiscordUser](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L47:0)
```
https://discord.com/developers/docs/resources/user#user-object
```
## [interface DiscordConnection](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L82:0)
```
https://discord.com/developers/docs/resources/user#connection-object
```
## [interface DiscordIntegration](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L105:0)
```
https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
```
## [interface DiscordIntegrationAccount](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L140:0)
```
https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure
```
## [interface DiscordIntegrationApplication](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L148:0)
```
https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure
```
## [interface DiscordIntegrationCreateUpdate extends DiscordIntegration](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L163:0)
```
https://github.com/discord/discord-api-docs/blob/master/docs/topics/Gateway.md#integration-create-event-additional-fields
```
## [interface DiscordIntegrationDelete](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L169:0)
```
https://github.com/discord/discord-api-docs/blob/master/docs/topics/Gateway.md#integration-delete-event-fields
```
## [interface DiscordGuildIntegrationsUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L179:0)
```
https://discord.com/developers/docs/topics/gateway#guild-integrations-update
```
## [interface DiscordTypingStart](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L185:0)
```
https://discord.com/developers/docs/topics/gateway#typing-start
```
## [interface DiscordMember](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L200:0)
```
https://discord.com/developers/docs/resources/guild#guild-member-object
```
## [interface DiscordApplication](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L227:0)
```
https://discord.com/developers/docs/topics/oauth2#application-object
```
## [interface DiscordTeam](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L272:0)
```
https://discord.com/developers/docs/topics/teams#data-models-team-object
```
## [interface DiscordTeamMember](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L286:0)
```
https://discord.com/developers/docs/topics/teams#data-models-team-members-object
```
## [interface DiscordWebhookUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L299:0)
```
https://discord.com/developers/docs/topics/gateway#webhooks-update-webhook-update-event-fields
```
## [interface DiscordAllowedMentions](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L307:0)
```
https://discord.com/developers/docs/resources/channel#allowed-mentions-object
```
## [interface DiscordEmbed](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L320:0)
```
https://discord.com/developers/docs/resources/channel#embed-object
```
## [interface DiscordEmbedAuthor](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L351:0)
```
https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
```
## [interface DiscordEmbedField](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L363:0)
```
https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
```
## [interface DiscordEmbedFooter](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L373:0)
```
https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
```
## [interface DiscordEmbedImage](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L383:0)
```
https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
```
## [interface DiscordEmbedProvider](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L394:0)

## [interface DiscordEmbedThumbnail](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L402:0)
```
https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
```
## [interface DiscordEmbedVideo](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L414:0)
```
https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
```
## [interface DiscordAttachment](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L426:0)
```
https://discord.com/developers/docs/resources/channel#attachment-object
```
## [interface DiscordIncomingWebhook](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L451:0)

## [interface DiscordApplicationWebhook](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L479:0)

## [interface DiscordGuild](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L508:0)
```
https://discord.com/developers/docs/resources/guild#guild-object
```
## [interface DiscordRole](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L613:0)
```
https://discord.com/developers/docs/topics/permissions#role-object-role-structure
```
## [interface DiscordRoleTags](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L639:0)
```
https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
```
## [interface DiscordEmoji](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L649:0)
```
https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
```
## [interface DiscordVoiceState](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L670:0)
```
https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
```
## [interface DiscordChannel](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L701:0)
```
https://discord.com/developers/docs/resources/channel#channel-object
```
## [interface DiscordPresenceUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L760:0)
```
https://discord.com/developers/docs/topics/gateway#presence-update
```
## [interface DiscordStatusUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L773:0)

## [interface DiscordWelcomeScreen](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L781:0)
```
https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure
```
## [interface DiscordWelcomeScreenChannel](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L789:0)
```
https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
```
## [interface DiscordStageInstance](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L802:0)
```
https://discord.com/developers/docs/resources/stage-instance#auto-closing-stage-instance-structure
```
## [interface DiscordThreadMetadata](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L815:0)

## [interface DiscordThreadMemberBase](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L830:0)

## [interface DiscordThreadMember](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L835:0)

## [interface DiscordThreadMemberGuildCreate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L846:0)

## [interface DiscordActivity](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L854:0)
```
https://discord.com/developers/docs/topics/gateway#activity-object
```
## [interface DiscordClientStatus](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L888:0)
```
https://discord.com/developers/docs/topics/gateway#client-status-object
```
## [interface DiscordActivityTimestamps](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L898:0)
```
https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps
```
## [interface DiscordActivityEmoji](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L906:0)
```
https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji
```
## [interface DiscordActivityParty](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L916:0)
```
https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
```
## [interface DiscordActivityAssets](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L924:0)
```
https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
```
## [interface DiscordActivitySecrets](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L936:0)
```
https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets
```
## [interface DiscordActivityButton](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L946:0)
```
https://discord.com/developers/docs/topics/gateway#activity-object-activity-buttons
```
## [interface DiscordOverwrite](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L953:0)

## [interface DiscordMemberWithUser extends DiscordMember](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L964:0)

## [interface DiscordMessage](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L970:0)
```
https://discord.com/developers/docs/resources/channel#message-object
```
## [interface DiscordChannelMention](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1057:0)
```
https://discord.com/developers/docs/resources/channel#channel-mention-object
```
## [interface DiscordReaction](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1069:0)
```
https://discord.com/developers/docs/resources/channel#reaction-object
```
## [interface DiscordMessageActivity](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1079:0)
```
https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
```
## [interface DiscordMessageReference](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1087:0)
```
https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure
```
## [interface DiscordSticker](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1102:0)
```
https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure
```
## [interface DiscordMessageInteraction](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1128:0)
```
https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure
```
## [interface DiscordActionRow](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1144:0)
```
https://discord.com/developers/docs/interactions/message-components#actionrow
```
## [interface DiscordSelectMenuComponent](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1162:0)

## [interface DiscordSelectOption](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1178:0)

## [interface DiscordButtonComponent](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1199:0)
```
https://discord.com/developers/docs/interactions/message-components#buttons-button-object
```
## [interface DiscordInputTextComponent](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1224:0)
```
https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-structure
```
## [interface DiscordStickerItem](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1246:0)
```
https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure
```
## [interface DiscordStickerPack](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1256:0)
```
https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure
```
## [interface DiscordInteraction](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1273:0)

## [interface DiscordInteractionMember extends DiscordMemberWithUser](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1303:0)
```
https://discord.com/developers/docs/resources/guild#guild-member-object
```
## [interface DiscordInteractionData](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1308:0)

## [interface DiscordInteractionDataResolved](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1359:0)

## [interface DiscordListActiveThreads](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1374:0)

## [interface DiscordListArchivedThreads extends DiscordListActiveThreads](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1381:0)

## [interface DiscordThreadListSync](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1386:0)

## [interface DiscordAuditLog](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1398:0)
```
https://discord.com/developers/docs/resources/audit-log#audit-log-object
```
## [interface DiscordAutoModerationRule](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1418:0)

## [interface DiscordAutoModerationRuleTriggerMetadata](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1455:0)

## [interface DiscordAutoModerationAction](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1472:0)

## [interface DiscordAutoModerationActionMetadata](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1488:0)

## [interface DiscordAutoModerationActionExecution](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1495:0)

## [interface DiscordAuditLogEntry](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1521:0)
```
https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure
```
## [interface DiscordOptionalAuditEntryInfo](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1634:0)
```
https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
```
## [interface DiscordScheduledEvent](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1691:0)

## [interface DiscordScheduledEventEntityMetadata](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1726:0)

## [interface DiscordGetGatewayBot](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1732:0)
```
https://discord.com/developers/docs/topics/gateway#get-gateway-bot
```
## [interface DiscordSessionStartLimit](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1742:0)
```
https://discord.com/developers/docs/topics/gateway#session-start-limit-object
```
## [interface DiscordInviteMetadata extends DiscordInvite](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1754:0)
```
https://discord.com/developers/docs/resources/invite#invite-metadata-object
```
## [interface DiscordInvite](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1768:0)
```
https://discord.com/developers/docs/resources/invite#invite-object
```
## [interface DiscordInviteStageInstance](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1795:0)

## [interface DiscordApplicationCommand](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1807:0)
```
https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
```
## [interface DiscordApplicationCommandOption](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1841:0)
```
https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
```
## [interface DiscordApplicationCommandOptionChoice](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1879:0)
```
https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
```
## [interface DiscordGuildApplicationCommandPermissions](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1889:0)
```
https://discord.com/developers/docs/interactions/slash-commands#guildapplicationcommandpermissions
```
## [interface DiscordApplicationCommandPermissions](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1901:0)
```
https://discord.com/developers/docs/interactions/slash-commands#applicationcommandpermissions
```
## [interface DiscordGuildWidget](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1911:0)
```
https://discord.com/developers/docs/resources/guild#get-guild-widget-example-get-guild-widget
```
## [interface DiscordGuildPreview](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1932:0)
```
https://discord.com/developers/docs/resources/guild#guild-preview-object
```
## [interface DiscordDiscoveryCategory](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1957:0)

## [interface DiscordDiscoveryName](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1966:0)

## [interface DiscordDiscoveryMetadata](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1973:0)

## [interface DiscordFollowedChannel](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1991:0)
```
https://discord.com/developers/docs/resources/channel#followed-channel-object
```
## [interface DiscordGatewayPayload](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L1999:0)
```
https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure
```
## [interface DiscordGuildMembersChunk](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2011:0)
```
https://discord.com/developers/docs/topics/gateway#guild-members-chunk
```
## [interface DiscordComponent](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2028:0)

## [interface DiscordChannelPinsUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2065:0)
```
https://discord.com/developers/docs/topics/gateway#channel-pins-update
```
## [interface DiscordGuildRoleDelete](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2075:0)
```
https://discord.com/developers/docs/topics/gateway#guild-role-delete
```
## [interface DiscordGuildBanAddRemove](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2083:0)
```
https://discord.com/developers/docs/topics/gateway#guild-ban-add
```
## [interface DiscordMessageReactionRemove extends Omit](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2091:0)
```
https://discord.com/developers/docs/topics/gateway#message-reaction-remove
```
## [interface DiscordMessageReactionAdd](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2094:0)
```
https://discord.com/developers/docs/topics/gateway#message-reaction-add
```
## [interface DiscordVoiceServerUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2110:0)
```
https://discord.com/developers/docs/topics/gateway#voice-server-update
```
## [interface DiscordInviteCreate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2120:0)
```
https://discord.com/developers/docs/topics/gateway#invite-create
```
## [interface DiscordHello](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2148:0)
```
https://discord.com/developers/docs/topics/gateway#hello
```
## [interface DiscordReady](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2154:0)
```
https://discord.com/developers/docs/topics/gateway#ready
```
## [interface DiscordUnavailableGuild extends Pick](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2170:0)
```
https://discord.com/developers/docs/resources/guild#unavailable-guild-object
```
## [interface DiscordMessageDeleteBulk](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2173:0)
```
https://discord.com/developers/docs/topics/gateway#message-delete-bulk
```
## [interface DiscordTemplate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2183:0)
```
https://discord.com/developers/docs/resources/template#template-object-template-structure
```
## [interface DiscordGuildMemberAdd extends DiscordMemberWithUser](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2238:0)
```
https://discord.com/developers/docs/topics/gateway#guild-member-add
```
## [interface DiscordMessageDelete](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2244:0)
```
https://discord.com/developers/docs/topics/gateway#message-delete
```
## [interface DiscordThreadMembersUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2254:0)
```
https://discord.com/developers/docs/topics/gateway#thread-members-update-thread-members-update-event-fields
```
## [interface DiscordThreadMemberUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2268:0)
```
https://discord.com/developers/docs/topics/gateway#thread-member-update
```
## [interface DiscordGuildRoleCreate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2282:0)
```
https://discord.com/developers/docs/topics/gateway#guild-role-create
```
## [interface DiscordGuildEmojisUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2290:0)
```
https://discord.com/developers/docs/topics/gateway#guild-emojis-update
```
## [interface DiscordAddGuildDiscoverySubcategory](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2297:0)

## [interface DiscordGuildBanAddRemove](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2305:0)
```
https://discord.com/developers/docs/topics/gateway#guild-ban-add
```
## [interface DiscordGuildMemberUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2313:0)
```
https://discord.com/developers/docs/topics/gateway#guild-member-update
```
## [interface DiscordMessageReactionRemoveAll extends Pick](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2339:0)
```
https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all
```
## [interface DiscordValidateDiscoverySearchTerm](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2343:0)

## [interface DiscordGuildRoleUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2349:0)
```
https://discord.com/developers/docs/topics/gateway#guild-role-update
```
## [interface DiscordScheduledEventUserAdd](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2356:0)

## [interface DiscordGuildMemberRemove](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2372:0)
```
https://discord.com/developers/docs/topics/gateway#guild-member-remove
```
## [interface DiscordBan](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2380:0)
```
https://discord.com/developers/docs/resources/guild#ban-object
```
## [interface DiscordScheduledEventUserRemove](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2387:0)

## [interface DiscordInviteDelete](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2397:0)
```
https://discord.com/developers/docs/topics/gateway#invite-delete
```
## [interface DiscordVoiceRegion](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2407:0)
```
https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
```
## [interface DiscordGuildWidgetSettings](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2420:0)

## [interface DiscordInstallParams](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/types/discord.ts#L2427:0)

## [interface ActivityAssets](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Presence.ts#L13:0)

## [interface Activities](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Presence.ts#L20:0)

## [interface ChatInputApplicationCommandBuilder extends ApplicationCommandBuilder, OptionBased](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommand.ts#L111:0)

## [interface AutoModerationRuleTriggerMetadata](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/AutoModerationRule.ts#L12:0)

## [interface ActionMetadata](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/AutoModerationRule.ts#L17:0)

## [interface AutoModerationAction](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/AutoModerationRule.ts#L22:0)

## [interface Embed](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Embed.ts#L3:0)

## [interface MessageReactionAdd](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/MessageReaction.ts#L7:0)

## [interface MessageReactionRemove extends Omit](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/MessageReaction.ts#L16:0)

## [interface MessageReactionRemoveAll extends Pick](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/MessageReaction.ts#L18:0)

## [interface ActionRowComponent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/Component.ts#L29:0)
```
Action Row Component
```
## [interface ButtonComponent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/Component.ts#L43:0)
```
Button Component
```
## [interface LinkButtonComponent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/Component.ts#L53:0)
```
Link Button Component
```
## [interface SelectMenuComponent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/Component.ts#L62:0)
```
Select Menu Component
```
## [interface TextInputComponent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/Component.ts#L73:0)
```
Text Input Component
```
## [interface SelectMenuOption](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/Component.ts#L85:0)

## [interface EmbedFooter](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/EmbedBuilder.ts#L3:0)

## [interface EmbedAuthor](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/EmbedBuilder.ts#L9:0)

## [interface EmbedVideo](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/EmbedBuilder.ts#L17:0)

## [interface SymCache](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Util.ts#L8:0)

## [interface PermissionsOverwrites](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Util.ts#L53:0)
```
Utility type
```
## [interface DiscordStageInstanceB extends DiscordAutoClosingStageInstance](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/StageInstance.ts#L7:0)

## [interface AllowedMentions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Message.ts#L30:0)

## [interface CreateMessageReference](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Message.ts#L37:0)

## [interface CreateMessage](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Message.ts#L47:0)

## [interface EditMessage extends Partial](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Message.ts#L60:0)

## [interface WebhookAuthor](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Message.ts#L69:0)

## [interface Team](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Application.ts#L15:0)

## [interface TeamMember](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Application.ts#L28:0)

## [interface EditWebhookMessage](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Webhook.ts#L16:0)

## [interface CreateApplicationCommand](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L43:0)

## [interface CreateContextApplicationCommand extends Omit](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L57:0)

## [interface GetApplicationCommand](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L64:0)

## [interface UpsertApplicationCommands extends CreateApplicationCommand](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L69:0)

## [interface ApplicationCommandPermissions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L76:0)

## [interface ApplicationCommandPermissions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L85:0)

## [interface RestOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L93:0)

## [interface GatewayOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L98:0)

## [interface SessionOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L103:0)

## [interface StatusUpdate](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L114:0)

## [interface Model](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Base.ts#L7:0)
```
Represents a Discord data model
```
## [interface StickerItem](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Sticker.ts#L8:0)

## [interface StickerPack](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Sticker.ts#L14:0)

## [interface CommandInteractionOption extends Omit](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/CommandInteractionOptionResolver.ts#L40:0)

## [interface IntegrationAccount](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Integration.ts#L7:0)

## [interface IntegrationApplication](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Integration.ts#L12:0)

## [interface InteractionResponse](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/BaseInteraction.ts#L29:0)

## [interface InteractionApplicationCommandCallbackData extends Pick](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/BaseInteraction.ts#L37:0)

## [interface ApplicationCommandOptionChoice](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/BaseInteraction.ts#L49:0)

## [interface OptionBuilderLike](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommandOption.ts#L174:0)

## [interface OptionBuilderNested extends OptionBuilder, OptionBased](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommandOption.ts#L317:0)

## [interface ApplicationCommandOption](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommandOption.ts#L321:0)

## [interface InviteStageInstance](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Invite.ts#L21:0)

## [interface InviteScheduledEvent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Invite.ts#L32:0)

## [interface InviteCreate](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Invite.ts#L51:0)

## [interface CreateRole](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L147:0)
```
Guild
```
## [interface ModifyGuildRole](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L156:0)

## [interface CreateGuildEmoji](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L164:0)

## [interface ModifyGuildEmoji](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L171:0)

## [interface CreateGuildBan](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L179:0)

## [interface ModifyGuildMember](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L187:0)

## [interface BeginGuildPrune](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L199:0)

## [interface ModifyRolePositions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L205:0)

## [interface GuildCreateOptionsRole](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L210:0)

## [interface GuildCreateOptionsRole](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L222:0)

## [interface GuildCreateOptionsChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L234:0)

## [interface GuildCreateOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L252:0)

## [interface GuildCreateOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L266:0)

## [interface GuildEditOptions extends Omit](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L283:0)

## [interface GuildEditOptions extends Omit](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L294:0)

## [interface DiscordInviteOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L81:0)
```
Represents the options object to create an invitation
```
## [interface CreateWebhook](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L92:0)

## [interface ThreadCreateOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L301:0)
```
Represent the options object to create a thread channel
```
## [interface EditGuildChannelOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L314:0)
```
Representations of the objects to edit a guild channel
```
## [interface EditNewsChannelOptions extends EditGuildChannelOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L320:0)

## [interface EditGuildTextChannelOptions extends EditNewsChannelOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L328:0)

## [interface EditStageChannelOptions extends EditGuildChannelOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L332:0)

## [interface EditVoiceChannelOptions extends EditStageChannelOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L337:0)

## [interface ThreadCreateOptions](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L348:0)
```
Represents the option object to create a thread channel from a message
```
## [interface ReturnThreadsArchive](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L357:0)

## [interface UpdateVoiceState](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L475:0)

## [interface DMChannel extends Omit, Omit](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L552:0)

## [interface VoiceChannel extends TextChannel, BaseVoiceChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L565:0)

## [interface NewsChannel extends TextChannel, GuildChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L591:0)

## [interface ThreadChannel extends Omit, Omit](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L675:0)

## [interface GuildTextChannel extends GuildChannel, TextChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L688:0)

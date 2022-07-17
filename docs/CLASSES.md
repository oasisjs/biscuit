# Classes

  - [ class ScheduledEvent(Session, DiscordScheduledEvent)](#class-scheduledeventsession-discordscheduledevent)

  - [ class Presence(Session, DiscordPresenceUpdate)](#class-presencesession-discordpresenceupdate)

  - [abstract class ApplicationCommandBuilder(ApplicationCommandTypes, string, string, PermissionStrings[], Localization, Localization, boolean)](#abstract-class-applicationcommandbuilderapplicationcommandtypes-string-string-permissionstrings-localization-localization-boolean)

  - [ class MessageApplicationCommandBuilder(ApplicationCommandTypes, )](#class-messageapplicationcommandbuilderapplicationcommandtypes-)

  - [ class ChatInputApplicationCommandBuilder() extends ApplicationCommandBuilder](#class-chatinputapplicationcommandbuilder-extends-applicationcommandbuilder)

  - [ class AutoModerationRule(Session, DiscordAutoModerationRule)](#class-automoderationrulesession-discordautomoderationrule)

  - [ class MessageReaction(Session, DiscordReaction)](#class-messagereactionsession-discordreaction)

  - [ class WelcomeChannel(Session, DiscordWelcomeScreenChannel)](#class-welcomechannelsession-discordwelcomescreenchannel)

  - [ class BaseComponent(MessageComponentTypes)](#class-basecomponentmessagecomponenttypes)

  - [ class AutoCompleteInteraction(Session, DiscordInteraction) extends BaseInteraction](#class-autocompleteinteractionsession-discordinteraction-extends-baseinteraction)

  - [ class InteractionFactory()](#class-interactionfactory)

  - [ class EmbedBuilder(DiscordEmbed)](#class-embedbuilderdiscordembed)

  - [ class SelectMenu(Session, DiscordComponent) extends BaseComponent](#class-selectmenusession-discordcomponent-extends-basecomponent)

  - [ class PingInteraction(Session, DiscordInteraction) extends BaseInteraction](#class-pinginteractionsession-discordinteraction-extends-baseinteraction)

  - [ class EventEmitter()](#class-eventemitter)

  - [ class LinkButton(Session, DiscordComponent) extends BaseComponent](#class-linkbuttonsession-discordcomponent-extends-basecomponent)

  - [ class Util()](#class-util)

  - [ class Member(Session, DiscordMemberWithUser, Snowflake)](#class-membersession-discordmemberwithuser-snowflake)

  - [ class StageInstance(Session, DiscordStageInstanceB)](#class-stageinstancesession-discordstageinstanceb)

  - [ class Message(Session, DiscordMessage)](#class-messagesession-discordmessage)

  - [ class ModalSubmitInteraction(Session, DiscordInteraction) extends BaseInteraction](#class-modalsubmitinteractionsession-discordinteraction-extends-baseinteraction)

  - [ class TextInput(Session, DiscordInputTextComponent) extends BaseComponent](#class-textinputsession-discordinputtextcomponent-extends-basecomponent)

  - [ class Application(Session, DiscordApplication)](#class-applicationsession-discordapplication)

  - [ class Webhook(Session, DiscordWebhook)](#class-webhooksession-discordwebhook)

  - [ class WelcomeScreen(Session, DiscordWelcomeScreen)](#class-welcomescreensession-discordwelcomescreen)

  - [ class Session(SessionOptions) extends EventEmitter](#class-sessionsessionoptions-extends-eventemitter)

  - [ class Sticker(Session, DiscordSticker)](#class-stickersession-discordsticker)

  - [ class ActionRow(Session, DiscordComponent) extends BaseComponent](#class-actionrowsession-discordcomponent-extends-basecomponent)

  - [ class ButtonBuilder()](#class-buttonbuilder)

  - [ class SelectMenuOptionBuilder()](#class-selectmenuoptionbuilder)

  - [ class CommandInteraction(Session, DiscordInteraction) extends BaseInteraction](#class-commandinteractionsession-discordinteraction-extends-baseinteraction)

  - [ class User(Session, DiscordUser)](#class-usersession-discorduser)

  - [ class CommandInteractionOptionResolver(DiscordInteractionDataOption[], DiscordInteractionDataResolved)](#class-commandinteractionoptionresolverdiscordinteractiondataoption-discordinteractiondataresolved)

  - [ class Integration(Session, )](#class-integrationsession-)

  - [abstract class BaseInteraction(Session, DiscordInteraction)](#abstract-class-baseinteractionsession-discordinteraction)

  - [ class Permissions(PermissionResolvable)](#class-permissionspermissionresolvable)

  - [ class Role(Session, DiscordRole, Snowflake)](#class-rolesession-discordrole-snowflake)

  - [ class AutoModerationExecution(Session, DiscordAutoModerationActionExecution)](#class-automoderationexecutionsession-discordautomoderationactionexecution)

  - [ class ComponentInteraction(Session, DiscordInteraction) extends BaseInteraction](#class-componentinteractionsession-discordinteraction-extends-baseinteraction)

  - [ class ChoiceBuilder()](#class-choicebuilder)

  - [ class OptionBuilder(ApplicationCommandOptionTypes, , )](#class-optionbuilderapplicationcommandoptiontypes--)

  - [ class OptionBuilderLimitedValues(, , ) extends OptionBuilder](#class-optionbuilderlimitedvalues---extends-optionbuilder)

  - [ class OptionBuilderString(ApplicationCommandOptionTypes.String, , ) extends OptionBuilder](#class-optionbuilderstringapplicationcommandoptiontypes.string---extends-optionbuilder)

  - [ class OptionBuilderChannel(ApplicationCommandOptionTypes.Channel, , ) extends OptionBuilder](#class-optionbuilderchannelapplicationcommandoptiontypes.channel---extends-optionbuilder)

  - [ class OptionBased()](#class-optionbased)

  - [ class OptionBuilderNested(, , ) extends OptionBuilder](#class-optionbuildernested---extends-optionbuilder)

  - [ class ThreadMember(Session, DiscordThreadMember)](#class-threadmembersession-discordthreadmember)

  - [ class ActionRowBuilder()](#class-actionrowbuilder)

  - [ class Button(Session, DiscordComponent) extends BaseComponent](#class-buttonsession-discordcomponent-extends-basecomponent)

  - [ class Emoji(Session, DiscordEmoji)](#class-emojisession-discordemoji)

  - [ class Invite(Session, DiscordInvite)](#class-invitesession-discordinvite)

  - [ class Attachment(Session, DiscordAttachment)](#class-attachmentsession-discordattachment)

  - [abstract class BaseGuild(Session, DiscordGuild)](#abstract-class-baseguildsession-discordguild)

  - [ class AnonymousGuild(Session, Partial) extends BaseGuild](#class-anonymousguildsession-partial-extends-baseguild)

  - [ class InviteGuild(Session, Partial) extends AnonymousGuild](#class-inviteguildsession-partial-extends-anonymousguild)

  - [ class Guild(Session, DiscordGuild) extends BaseGuild](#class-guildsession-discordguild-extends-baseguild)

  - [ class GuildEmoji(Session, DiscordEmoji, Snowflake) extends Emoji](#class-guildemojisession-discordemoji-snowflake-extends-emoji)

  - [ class InputTextBuilder()](#class-inputtextbuilder)

  - [abstract class BaseChannel(Session, DiscordChannel)](#abstract-class-basechannelsession-discordchannel)

  - [ class TextChannel(Session, DiscordChannel)](#class-textchannelsession-discordchannel)

  - [ class GuildChannel(Session, DiscordChannel, Snowflake) extends BaseChannel](#class-guildchannelsession-discordchannel-snowflake-extends-basechannel)

  - [abstract class BaseVoiceChannel(Session, DiscordChannel, Snowflake) extends GuildChannel](#abstract-class-basevoicechannelsession-discordchannel-snowflake-extends-guildchannel)

  - [ class DMChannel(Session, DiscordChannel) extends BaseChannel](#class-dmchannelsession-discordchannel-extends-basechannel)

  - [ class VoiceChannel(Session, DiscordChannel, Snowflake) extends BaseVoiceChannel](#class-voicechannelsession-discordchannel-snowflake-extends-basevoicechannel)

  - [ class NewsChannel(Session, DiscordChannel, Snowflake) extends GuildChannel](#class-newschannelsession-discordchannel-snowflake-extends-guildchannel)

  - [ class StageChannel(Session, DiscordChannel, Snowflake) extends BaseVoiceChannel](#class-stagechannelsession-discordchannel-snowflake-extends-basevoicechannel)

  - [ class ThreadChannel(Session, DiscordChannel, Snowflake) extends GuildChannel](#class-threadchannelsession-discordchannel-snowflake-extends-guildchannel)

  - [ class GuildTextChannel(Session, DiscordChannel, Snowflake) extends GuildChannel](#class-guildtextchannelsession-discordchannel-snowflake-extends-guildchannel)

  - [ class ChannelFactory()](#class-channelfactory)

  - [ class SelectMenuBuilder()](#class-selectmenubuilder)
## [ class ScheduledEvent(Session, DiscordScheduledEvent)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/GuildScheduledEvent.ts#L13:0)

## [ class Presence(Session, DiscordPresenceUpdate)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Presence.ts#L52:0)

## [abstract class ApplicationCommandBuilder(ApplicationCommandTypes, string, string, PermissionStrings[], Localization, Localization, boolean)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommand.ts#L6:0)

## [ class MessageApplicationCommandBuilder(ApplicationCommandTypes, )](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommand.ts#L61:0)

## [ class ChatInputApplicationCommandBuilder() extends ApplicationCommandBuilder](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommand.ts#L86:0)

## [ class AutoModerationRule(Session, DiscordAutoModerationRule)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/AutoModerationRule.ts#L27:0)

## [ class MessageReaction(Session, DiscordReaction)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/MessageReaction.ts#L42:0)
```
Represents a reaction
```
## [ class WelcomeChannel(Session, DiscordWelcomeScreenChannel)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/WelcomeChannel.ts#L11:0)
```
Not a channel
```
## [ class BaseComponent(MessageComponentTypes)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/Component.ts#L4:0)

## [ class AutoCompleteInteraction(Session, DiscordInteraction) extends BaseInteraction](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/AutoCompleteInteraction.ts#L10:0)

## [ class InteractionFactory()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/InteractionFactory.ts#L17:0)

## [ class EmbedBuilder(DiscordEmbed)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/EmbedBuilder.ts#L24:0)

## [ class SelectMenu(Session, DiscordComponent) extends BaseComponent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/SelectMenuComponent.ts#L8:0)

## [ class PingInteraction(Session, DiscordInteraction) extends BaseInteraction](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/PingInteraction.ts#L9:0)

## [ class EventEmitter()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/util/EventEmmiter.ts#L8:0)
```
An event emitter (observer pattern)
```
## [ class LinkButton(Session, DiscordComponent) extends BaseComponent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/LinkButtonComponent.ts#L8:0)

## [ class Util()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Util.ts#L73:0)
```
Utility functions
```
## [ class Member(Session, DiscordMemberWithUser, Snowflake)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Member.ts#L17:0)
```
Represents a guild member
TODO: add a `guild` property somehow
```
## [ class StageInstance(Session, DiscordStageInstanceB)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/StageInstance.ts#L18:0)

## [ class Message(Session, DiscordMessage)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Message.ts#L80:0)
```
Represents a message
```
## [ class ModalSubmitInteraction(Session, DiscordInteraction) extends BaseInteraction](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/ModalSubmitInteraction.ts#L13:0)

## [ class TextInput(Session, DiscordInputTextComponent) extends BaseComponent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/TextInputComponent.ts#L7:0)

## [ class Application(Session, DiscordApplication)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Application.ts#L58:0)

## [ class Webhook(Session, DiscordWebhook)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Webhook.ts#L25:0)

## [ class WelcomeScreen(Session, DiscordWelcomeScreen)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/WelcomeScreen.ts#L8:0)

## [ class Session(SessionOptions) extends EventEmitter](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/Session.ts#L123:0)
```
Receives a Token, connects
Most of the command implementations were adapted from Discordeno (https://github.com/discordeno/discordeno)
```
## [ class Sticker(Session, DiscordSticker)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Sticker.ts#L24:0)

## [ class ActionRow(Session, DiscordComponent) extends BaseComponent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/ActionRowComponent.ts#L11:0)

## [ class ButtonBuilder()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/components/MessageButton.ts#L4:0)

## [ class SelectMenuOptionBuilder()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/components/SelectMenuOptionBuilder.ts#L4:0)

## [ class CommandInteraction(Session, DiscordInteraction) extends BaseInteraction](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/CommandInteraction.ts#L18:0)

## [ class User(Session, DiscordUser)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/User.ts#L13:0)
```
Represents a user
```
## [ class CommandInteractionOptionResolver(DiscordInteractionDataOption[], DiscordInteractionDataResolved)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/CommandInteractionOptionResolver.ts#L58:0)
```
Utility class to get the resolved options for a command
It is really typesafe
```
## [ class Integration(Session, )](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Integration.ts#L20:0)

## [abstract class BaseInteraction(Session, DiscordInteraction)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/BaseInteraction.ts#L54:0)

## [ class Permissions(PermissionResolvable)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Permissions.ts#L10:0)

## [ class Role(Session, DiscordRole, Snowflake)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Role.ts#L9:0)

## [ class AutoModerationExecution(Session, DiscordAutoModerationActionExecution)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/AutoModerationExecution.ts#L6:0)

## [ class ComponentInteraction(Session, DiscordInteraction) extends BaseInteraction](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/ComponentInteraction.ts#L9:0)

## [ class ChoiceBuilder()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommandOption.ts#L4:0)

## [ class OptionBuilder(ApplicationCommandOptionTypes, , )](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommandOption.ts#L29:0)

## [ class OptionBuilderLimitedValues(, , ) extends OptionBuilder](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommandOption.ts#L76:0)

## [ class OptionBuilderString(ApplicationCommandOptionTypes.String, , ) extends OptionBuilder](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommandOption.ts#L117:0)

## [ class OptionBuilderChannel(ApplicationCommandOptionTypes.Channel, , ) extends OptionBuilder](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommandOption.ts#L146:0)

## [ class OptionBased()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommandOption.ts#L178:0)

## [ class OptionBuilderNested(, , ) extends OptionBuilder](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/slash/ApplicationCommandOption.ts#L286:0)

## [ class ThreadMember(Session, DiscordThreadMember)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/ThreadMember.ts#L11:0)
```
A member that comes from a thread
```
## [ class ActionRowBuilder()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/components/MessageActionRow.ts#L4:0)

## [ class Button(Session, DiscordComponent) extends BaseComponent](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/components/ButtonComponent.ts#L8:0)

## [ class Emoji(Session, DiscordEmoji)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Emoji.ts#L5:0)

## [ class Invite(Session, DiscordInvite)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Invite.ts#L88:0)

## [ class Attachment(Session, DiscordAttachment)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Attachment.ts#L10:0)
```
Represents an attachment
```
## [abstract class BaseGuild(Session, DiscordGuild)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L38:0)
```
Class for {@link Guild} and {@link AnonymousGuild}
```
## [ class AnonymousGuild(Session, Partial) extends BaseGuild](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L88:0)
```
AnonymousGuild
```
## [ class InviteGuild(Session, Partial) extends AnonymousGuild](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L134:0)
```
InviteGuild
```
## [ class Guild(Session, DiscordGuild) extends BaseGuild](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/guilds.ts#L311:0)
```
Represents a guild
```
## [ class GuildEmoji(Session, DiscordEmoji, Snowflake) extends Emoji](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/GuildEmoji.ts#L11:0)

## [ class InputTextBuilder()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/components/InputTextComponentBuilder.ts#L3:0)

## [abstract class BaseChannel(Session, DiscordChannel)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L34:0)

## [ class TextChannel(Session, DiscordChannel)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L117:0)

## [ class GuildChannel(Session, DiscordChannel, Snowflake) extends BaseChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L363:0)

## [abstract class BaseVoiceChannel(Session, DiscordChannel, Snowflake) extends GuildChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L482:0)

## [ class DMChannel(Session, DiscordChannel) extends BaseChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L527:0)
```
DMChannel
```
## [ class VoiceChannel(Session, DiscordChannel, Snowflake) extends BaseVoiceChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L557:0)
```
VoiceChannel
```
## [ class NewsChannel(Session, DiscordChannel, Snowflake) extends GuildChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L570:0)
```
NewsChannel
```
## [ class StageChannel(Session, DiscordChannel, Snowflake) extends BaseVoiceChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L594:0)
```
StageChannel
```
## [ class ThreadChannel(Session, DiscordChannel, Snowflake) extends GuildChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L605:0)
```
ThreadChannel
```
## [ class GuildTextChannel(Session, DiscordChannel, Snowflake) extends GuildChannel](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L679:0)

## [ class ChannelFactory()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/channels.ts#L718:0)

## [ class SelectMenuBuilder()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/builders/components/MessageSelectMenu.ts#L4:0)

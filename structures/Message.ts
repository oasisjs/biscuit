import type { Model } from "./Base.ts";
import type { Snowflake } from "../util/Snowflake.ts";
import type { Session } from "../session/Session.ts";
import type {
    AllowedMentionsTypes,
    DiscordEmbed,
    DiscordMessage,
    DiscordUser,
    FileContent,
} from "../vendor/external.ts";
import type { GetReactions } from "../util/Routes.ts";
import { MessageFlags } from "../util/shared/flags.ts";
import User from "./User.ts";
import Member from "./Member.ts";
import Attachment from "./Attachment.ts";
import * as Routes from "../util/Routes.ts";
import { ActionRow } from "./components/ActionRow.ts";
import { AnyComponent } from "../util/Components.ts";

/**
 * @link https://discord.com/developers/docs/resources/channel#allowed-mentions-object
 */
export interface AllowedMentions {
    parse?: AllowedMentionsTypes[];
    repliedUser?: boolean;
    roles?: Snowflake[];
    users?: Snowflake[];
}

export interface CreateMessageReference {
    messageId: Snowflake;
    channelId?: Snowflake;
    guildId?: Snowflake;
    failIfNotExists?: boolean;
}

/**
 * @link https://discord.com/developers/docs/resources/channel#create-message-json-params
 */
export interface CreateMessage {
    content?: string;
    allowedMentions?: AllowedMentions;
    files?: FileContent[];
    messageReference?: CreateMessageReference;
    embeds?: DiscordEmbed[];
}

/**
 * @link https://discord.com/developers/docs/resources/channel#edit-message-json-params
 */
export interface EditMessage extends Partial<CreateMessage> {
    flags?: MessageFlags;
}

export type ReactionResolvable = string | {
    name: string;
    id: Snowflake;
};

/**
 * Represents a message
 * @link https://discord.com/developers/docs/resources/channel#message-object
 */
export class Message implements Model {
    constructor(session: Session, data: DiscordMessage) {
        this.session = session;
        this.id = data.id;

        this.channelId = data.channel_id;
        this.guildId = data.guild_id;

        this.author = new User(session, data.author);
        this.flags = data.flags;
        this.pinned = !!data.pinned;
        this.tts = !!data.tts;
        this.content = data.content!;

        this.attachments = data.attachments.map((attachment) => new Attachment(session, attachment));
        this.components = data.components?.map((cs) => new ActionRow(cs));
        // user is always null on MessageCreate and its replaced with author

        if (data.guild_id && data.member) {
            this.member = new Member(session, { ...data.member, user: data.author }, data.guild_id);
        }
    }

    readonly session: Session;
    readonly id: Snowflake;

    channelId: Snowflake;
    guildId?: Snowflake;
    author: User;
    flags?: MessageFlags;
    pinned: boolean;
    tts: boolean;
    content: string;

    attachments: Attachment[];
    components?: ActionRow<AnyComponent>[];
    member?: Member;

    get url() {
        return `https://discord.com/channels/${this.guildId ?? "@me"}/${this.channelId}/${this.id}`;
    }

    async pin() {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            "PUT",
            Routes.CHANNEL_PIN(this.channelId, this.id),
        );
    }

    async unpin() {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            "DELETE",
            Routes.CHANNEL_PIN(this.channelId, this.id),
        );
    }

    /** Edits the current message */
    async edit(options: EditMessage): Promise<Message> {
        const message = await this.session.rest.runMethod(
            this.session.rest,
            "POST",
            Routes.CHANNEL_MESSAGE(this.id, this.channelId),
            {
                content: options.content,
                allowed_mentions: {
                    parse: options.allowedMentions?.parse,
                    roles: options.allowedMentions?.roles,
                    users: options.allowedMentions?.users,
                    replied_user: options.allowedMentions?.repliedUser,
                },
                flags: options.flags,
                embeds: options.embeds,
            },
        );

        return message;
    }

    async suppressEmbeds(suppress: true): Promise<Message>;
    async suppressEmbeds(suppress: false): Promise<Message | undefined>;
    async suppressEmbeds(suppress = true) {
        if (this.flags === MessageFlags.SupressEmbeds && suppress === false) {
            return;
        }

        const message = await this.edit({ flags: MessageFlags.SupressEmbeds });

        return message;
    }

    async delete({ reason }: { reason: string }): Promise<Message> {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            "DELETE",
            Routes.CHANNEL_MESSAGE(this.channelId, this.id),
            { reason },
        );

        return this;
    }

    /** Replies directly in the channel the message was sent */
    async reply(options: CreateMessage): Promise<Message> {
        const message = await this.session.rest.runMethod<DiscordMessage>(
            this.session.rest,
            "POST",
            Routes.CHANNEL_MESSAGES(this.channelId),
            {
                content: options.content,
                file: options.files,
                allowed_mentions: {
                    parse: options.allowedMentions?.parse,
                    roles: options.allowedMentions?.roles,
                    users: options.allowedMentions?.users,
                    replied_user: options.allowedMentions?.repliedUser,
                },
                message_reference: options.messageReference
                    ? {
                        message_id: options.messageReference.messageId,
                        channel_id: options.messageReference.channelId,
                        guild_id: options.messageReference.guildId,
                        fail_if_not_exists: options.messageReference.failIfNotExists ?? true,
                    }
                    : undefined,
                embeds: options.embeds,
            },
        );

        return new Message(this.session, message);
    }

    /**
     * alias for Message.addReaction
     */
    get react() {
        return this.addReaction;
    }

    async addReaction(reaction: ReactionResolvable) {
        const r = typeof reaction === "string" ? reaction : `${reaction.name}:${reaction.id}`;

        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            "PUT",
            Routes.CHANNEL_MESSAGE_REACTION_ME(this.channelId, this.id, r),
            {},
        );
    }

    async removeReaction(reaction: ReactionResolvable, options?: { userId: Snowflake }) {
        const r = typeof reaction === "string" ? reaction : `${reaction.name}:${reaction.id}`;

        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            "DELETE",
            options?.userId
                ? Routes.CHANNEL_MESSAGE_REACTION_USER(
                    this.channelId,
                    this.id,
                    r,
                    options.userId,
                )
                : Routes.CHANNEL_MESSAGE_REACTION_ME(this.channelId, this.id, r),
        );
    }

    /**
     * Get users who reacted with this emoji
     */
    async fetchReactions(reaction: ReactionResolvable, options?: GetReactions): Promise<User[]> {
        const r = typeof reaction === "string" ? reaction : `${reaction.name}:${reaction.id}`;

        const users = await this.session.rest.runMethod<DiscordUser[]>(
            this.session.rest,
            "GET",
            Routes.CHANNEL_MESSAGE_REACTION(this.channelId, this.id, encodeURIComponent(r), options),
        );

        return users.map((user) => new User(this.session, user));
    }

    async removeReactionEmoji(reaction: ReactionResolvable) {
        const r = typeof reaction === "string" ? reaction : `${reaction.name}:${reaction.id}`;

        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            "DELETE",
            Routes.CHANNEL_MESSAGE_REACTION(this.channelId, this.id, r),
        );
    }

    async nukeReactions() {
        await this.session.rest.runMethod<undefined>(
            this.session.rest,
            "DELETE",
            Routes.CHANNEL_MESSAGE_REACTIONS(this.channelId, this.id),
        );
    }

    async crosspost() {
        const message = await this.session.rest.runMethod<DiscordMessage>(
            this.session.rest,
            "POST",
            Routes.CHANNEL_MESSAGE_CROSSPOST(this.channelId, this.id),
        );

        return new Message(this.session, message);
    }

    /*
     * alias of Message.crosspost
     * */
    get publish() {
        return this.crosspost;
    }

    inGuild(): this is { guildId: Snowflake } & Message {
        return !!this.guildId;
    }
}

export default Message;

import type { Model } from '../Base';
import type { Snowflake } from '../../Snowflake';
import type { Session } from '../../Session';
import type { ApplicationCommandTypes, DiscordInteraction, InteractionTypes } from '../../../discordeno/mod';
import BaseInteraction from './BaseInteraction';
import CommandInteractionOptionResolver from './CommandInteractionOptionResolver';
import Attachment from '../Attachment';
import User from '../User';
import Member from '../Member';
import Message from '../Message';
import Role from '../Role';
export declare class CommandInteraction extends BaseInteraction implements Model {
    constructor(session: Session, data: DiscordInteraction);
    type: InteractionTypes.ApplicationCommand;
    commandId: Snowflake;
    commandName: string;
    commandType: ApplicationCommandTypes;
    commandGuildId?: Snowflake;
    resolved: {
        users: Map<Snowflake, User>;
        members: Map<Snowflake, Member>;
        roles: Map<Snowflake, Role>;
        attachments: Map<Snowflake, Attachment>;
        messages: Map<Snowflake, Message>;
    };
    options: CommandInteractionOptionResolver;
}
export default CommandInteraction;

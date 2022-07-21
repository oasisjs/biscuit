import type { Localization, PermissionStrings } from '@biscuit/api-types';
import { ApplicationCommandTypes } from '@biscuit/api-types';
import { OptionBased } from './ApplicationCommandOption';
import type { CreateApplicationCommand } from '../../../Session';
export declare abstract class ApplicationCommandBuilder implements CreateApplicationCommand {
    constructor(type?: ApplicationCommandTypes, name?: string, description?: string, defaultMemberPermissions?: PermissionStrings[], nameLocalizations?: Localization, descriptionLocalizations?: Localization, dmPermission?: boolean);
    type: ApplicationCommandTypes;
    name: string;
    description: string;
    defaultMemberPermissions?: PermissionStrings[];
    nameLocalizations?: Localization;
    descriptionLocalizations?: Localization;
    dmPermission: boolean;
    setType(type: ApplicationCommandTypes): this;
    setName(name: string): this;
    setDescription(description: string): this;
    setDefaultMemberPermission(perm: PermissionStrings[]): this;
    setNameLocalizations(l: Localization): this;
    setDescriptionLocalizations(l: Localization): this;
    setDmPermission(perm: boolean): this;
}
export declare class MessageApplicationCommandBuilder {
    type: ApplicationCommandTypes;
    name?: string;
    constructor(type?: ApplicationCommandTypes, name?: string);
    setName(name: string): this;
    toJSON(): {
        name: string;
        type: ApplicationCommandTypes.Message;
    };
}
export declare class ChatInputApplicationCommandBuilder extends ApplicationCommandBuilder {
    type: ApplicationCommandTypes.ChatInput;
    toJSON(): CreateApplicationCommand;
}
export interface ChatInputApplicationCommandBuilder extends ApplicationCommandBuilder, OptionBased {
}

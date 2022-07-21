import type { DiscordInteractionDataOption, DiscordInteractionDataResolved } from '@biscuit/api-types';
export declare function transformOasisInteractionDataOption(o: DiscordInteractionDataOption): CommandInteractionOption;
export interface CommandInteractionOption extends Omit<DiscordInteractionDataOption, 'value'> {
    Attachment?: string;
    Boolean?: boolean;
    User?: bigint;
    Role?: bigint;
    Number?: number;
    Integer?: number;
    Channel?: bigint;
    String?: string;
    Mentionable?: string;
    Otherwise: string | number | boolean | bigint | undefined;
}
/**
 * Utility class to get the resolved options for a command
 * It is really typesafe
 * @example const option = ctx.options.getStringOption("name");
 */
export declare class CommandInteractionOptionResolver {
    #private;
    hoistedOptions: CommandInteractionOption[];
    resolved?: DiscordInteractionDataResolved;
    constructor(options?: DiscordInteractionDataOption[], resolved?: DiscordInteractionDataResolved);
    private getTypedOption;
    get(name: string | number, required: true): CommandInteractionOption;
    get(name: string | number, required: boolean): CommandInteractionOption | undefined;
    /** searches for a string option */
    getString(name: string | number, required: true): string;
    getString(name: string | number, required?: boolean): string | undefined;
    /** searches for a number option */
    getNumber(name: string | number, required: true): number;
    getNumber(name: string | number, required?: boolean): number | undefined;
    /** searhces for an integer option */
    getInteger(name: string | number, required: true): number;
    getInteger(name: string | number, required?: boolean): number | undefined;
    /** searches for a boolean option */
    getBoolean(name: string | number, required: true): boolean;
    getBoolean(name: string | number, required?: boolean): boolean | undefined;
    /** searches for a user option */
    getUser(name: string | number, required: true): bigint;
    getUser(name: string | number, required?: boolean): bigint | undefined;
    /** searches for a channel option */
    getChannel(name: string | number, required: true): bigint;
    getChannel(name: string | number, required?: boolean): bigint | undefined;
    /** searches for a mentionable-based option */
    getMentionable(name: string | number, required: true): string;
    getMentionable(name: string | number, required?: boolean): string | undefined;
    /** searches for a mentionable-based option */
    getRole(name: string | number, required: true): bigint;
    getRole(name: string | number, required?: boolean): bigint | undefined;
    /** searches for an attachment option */
    getAttachment(name: string | number, required: true): string;
    getAttachment(name: string | number, required?: boolean): string | undefined;
    /** searches for the focused option */
    getFocused(full?: boolean): string | number | bigint | boolean | undefined | CommandInteractionOption;
    getSubCommand(required?: boolean): (string | CommandInteractionOption[] | undefined)[];
    getSubCommandGroup(required?: boolean): (string | CommandInteractionOption[] | undefined)[];
}
export default CommandInteractionOptionResolver;

import { ApplicationCommandOptionTypes, type ChannelTypes, type Localization } from '@biscuit/api-types';
import type { ApplicationCommandOptionChoice } from '../../interactions/BaseInteraction';
export declare class ChoiceBuilder {
    name?: string;
    value?: string;
    setName(name: string): ChoiceBuilder;
    setValue(value: string): this;
    toJSON(): ApplicationCommandOptionChoice;
}
export declare class OptionBuilder {
    required?: boolean;
    autocomplete?: boolean;
    type?: ApplicationCommandOptionTypes;
    name?: string;
    description?: string;
    constructor(type?: ApplicationCommandOptionTypes, name?: string, description?: string);
    setType(type: ApplicationCommandOptionTypes): this;
    setName(name: string): this;
    setDescription(description: string): this;
    setRequired(required: boolean): this;
    toJSON(): ApplicationCommandOption;
}
export declare class OptionBuilderLimitedValues extends OptionBuilder {
    choices?: ChoiceBuilder[];
    minValue?: number;
    maxValue?: number;
    constructor(type?: ApplicationCommandOptionTypes.Integer | ApplicationCommandOptionTypes.Number, name?: string, description?: string);
    setMinValue(n: number): this;
    setMaxValue(n: number): this;
    addChoice(fn: (choice: ChoiceBuilder) => ChoiceBuilder): this;
    toJSON(): ApplicationCommandOption;
}
export declare class OptionBuilderString extends OptionBuilder {
    choices?: ChoiceBuilder[];
    constructor(type?: ApplicationCommandOptionTypes.String, name?: string, description?: string);
    addChoice(fn: (choice: ChoiceBuilder) => ChoiceBuilder): this;
    toJSON(): ApplicationCommandOption;
}
export declare class OptionBuilderChannel extends OptionBuilder {
    channelTypes?: ChannelTypes[];
    constructor(type?: ApplicationCommandOptionTypes.Channel, name?: string, description?: string);
    addChannelTypes(...channels: ChannelTypes[]): this;
    toJSON(): ApplicationCommandOption;
}
export interface OptionBuilderLike {
    toJSON(): ApplicationCommandOption;
}
export declare class OptionBased {
    options?: (OptionBuilder[] | OptionBuilderString[] | OptionBuilderLimitedValues[] | OptionBuilderNested[] | OptionBuilderChannel[]) & OptionBuilderLike[];
    addOption(fn: (option: OptionBuilder) => OptionBuilder, type?: ApplicationCommandOptionTypes): this;
    addNestedOption(fn: (option: OptionBuilder) => OptionBuilder): this;
    addStringOption(fn: (option: OptionBuilderString) => OptionBuilderString): this;
    addIntegerOption(fn: (option: OptionBuilderLimitedValues) => OptionBuilderLimitedValues): this;
    addNumberOption(fn: (option: OptionBuilderLimitedValues) => OptionBuilderLimitedValues): this;
    addBooleanOption(fn: (option: OptionBuilder) => OptionBuilder): this;
    addSubCommand(fn: (option: OptionBuilderNested) => OptionBuilderNested): this;
    addSubCommandGroup(fn: (option: OptionBuilderNested) => OptionBuilderNested): this;
    addUserOption(fn: (option: OptionBuilder) => OptionBuilder): this;
    addChannelOption(fn: (option: OptionBuilderChannel) => OptionBuilderChannel): this;
    addRoleOption(fn: (option: OptionBuilder) => OptionBuilder): this;
    addMentionableOption(fn: (option: OptionBuilder) => OptionBuilder): this;
    static applyTo(klass: Function, ignore?: (keyof OptionBased)[]): void;
}
export declare class OptionBuilderNested extends OptionBuilder {
    constructor(type?: ApplicationCommandOptionTypes.SubCommand | ApplicationCommandOptionTypes.SubCommandGroup, name?: string, description?: string);
    toJSON(): ApplicationCommandOption;
}
export interface OptionBuilderNested extends OptionBuilder, OptionBased {
}
export interface ApplicationCommandOption {
    /** Value of Application Command Option Type */
    type: ApplicationCommandOptionTypes;
    /** 1-32 character name matching lowercase `^[\w-]{1,32}$` */
    name: string;
    /** Localization object for the `name` field. Values follow the same restrictions as `name` */
    nameLocalizations?: Localization;
    /** 1-100 character description */
    description: string;
    /** Localization object for the `description` field. Values follow the same restrictions as `description` */
    descriptionLocalizations?: Localization;
    /** If the parameter is required or optional--default `false` */
    required?: boolean;
    /** Choices for `string` and `int` types for the user to pick from */
    choices?: ApplicationCommandOptionChoice[];
    /** If the option is a subcommand or subcommand group type, this nested options will be the parameters */
    options?: ApplicationCommandOption[];
    /** if autocomplete interactions are enabled for this `String`, `Integer`, or `Number` type option */
    autocomplete?: boolean;
    /** If the option is a channel type, the channels shown will be restricted to these types */
    channelTypes?: ChannelTypes[];
    /** Minimum number desired. */
    minValue?: number;
    /** Maximum number desired. */
    maxValue?: number;
}

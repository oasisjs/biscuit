import type { DiscordSelectOption } from '@biscuit/api-types';
import type { ComponentEmoji } from '../../../Util';
export declare class SelectMenuOptionBuilder {
    #private;
    constructor();
    setLabel(label: string): SelectMenuOptionBuilder;
    setValue(value: string): SelectMenuOptionBuilder;
    setDescription(description: string): SelectMenuOptionBuilder;
    setDefault(Default?: boolean): SelectMenuOptionBuilder;
    setEmoji(emoji: ComponentEmoji): SelectMenuOptionBuilder;
    toJSON(): DiscordSelectOption;
}

import type { DiscordActionRow, MessageComponentTypes } from '@biscuit/api-types';
import type { ComponentBuilder } from '../../../Util';
export declare class ActionRowBuilder<T extends ComponentBuilder> {
    constructor();
    components: T[];
    type: MessageComponentTypes.ActionRow;
    addComponents(...components: T[]): this;
    setComponents(...components: T[]): this;
    toJSON(): DiscordActionRow;
}

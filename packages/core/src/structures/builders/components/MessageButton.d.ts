import { type ButtonStyles, type DiscordButtonComponent, MessageComponentTypes } from '@biscuit/api-types';
import type { ComponentEmoji } from '../../../Util';
export declare class ButtonBuilder {
    #private;
    constructor();
    type: MessageComponentTypes.Button;
    setStyle(style: ButtonStyles): this;
    setLabel(label: string): this;
    setCustomId(id: string): this;
    setEmoji(emoji: ComponentEmoji): this;
    setDisabled(disabled?: boolean): this;
    setURL(url: string): this;
    toJSON(): DiscordButtonComponent;
}

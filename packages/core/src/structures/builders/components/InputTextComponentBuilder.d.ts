import type { DiscordInputTextComponent, MessageComponentTypes, TextStyles } from '@biscuit/api-types';
export declare class InputTextBuilder {
    #private;
    constructor();
    type: MessageComponentTypes.InputText;
    setStyle(style: TextStyles): this;
    setLabel(label: string): this;
    setPlaceholder(placeholder: string): this;
    setLength(max?: number, min?: number): this;
    setCustomId(id: string): this;
    setValue(value: string): this;
    setRequired(required?: boolean): this;
    toJSON(): DiscordInputTextComponent;
}

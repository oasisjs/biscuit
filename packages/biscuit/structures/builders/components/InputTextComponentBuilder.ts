import type { DiscordInputTextComponent, MessageComponentTypes, TextStyles } from "../../../../discordeno/mod.ts";

export class InputTextBuilder {
    constructor() {
        this.#data = {} as DiscordInputTextComponent;
        this.type = 4;
    }
    #data: DiscordInputTextComponent;
    type: MessageComponentTypes.InputText;

    setStyle(style: TextStyles) {
        this.#data.style = style;
        return this;
    }

    setLabel(label: string) {
        this.#data.label = label;
        return this;
    }

    setPlaceholder(placeholder: string) {
        this.#data.placeholder = placeholder;
        return this;
    }

    setLength(max?: number, min?: number) {
        this.#data.max_length = max;
        this.#data.min_length = min;
        return this;
    }

    setCustomId(id: string) {
        this.#data.custom_id = id;
        return this;
    }

    setValue(value: string) {
        this.#data.value = value;
        return this;
    }

    setRequired(required = true) {
        this.#data.required = required;
        return this;
    }
    toJSON(): DiscordInputTextComponent {
        return { ...this.#data, type: this.type };
    }
}

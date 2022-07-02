import { ComponentBuilder } from "./ComponentBuilder.ts";
import { type DiscordSelectMenuComponent, MessageComponentTypes } from "../../vendor/external.ts";
import { SelectMenuOptionBuilder } from "./SelectMenuOptionBuilder.ts";

export class SelectMenuBuilder extends ComponentBuilder<DiscordSelectMenuComponent> {
    constructor(data?: DiscordSelectMenuComponent) {
        super({ ...data!, type: MessageComponentTypes.SelectMenu });
        this.options = data?.options.map((option) => new SelectMenuOptionBuilder(option)) ?? [];
    }
    options: SelectMenuOptionBuilder[];

    setPlaceholder(placeholder: string) {
        this.data.placeholder = placeholder;
        return this;
    }

    setValues(max?: number, min?: number) {
        this.data.max_values = max;
        this.data.min_values = min;
        return this;
    }

    setDisabled(disabled = true) {
        this.data.disabled = disabled;
        return this;
    }

    setCustomId(id: string) {
        this.data.custom_id = id;
        return this;
    }

    setOptions(...options: SelectMenuOptionBuilder[]) {
        this.options.splice(
            0,
            this.options.length,
            ...options.map((option) =>
                option instanceof SelectMenuOptionBuilder ? option : new SelectMenuOptionBuilder(option)
            ),
        );
        return this;
    }

    addOptions(...options: SelectMenuOptionBuilder[]) {
        this.options.push(
            ...options.map((option) =>
                option instanceof SelectMenuOptionBuilder ? option : new SelectMenuOptionBuilder(option)
            ),
        );
    }

    toJSON(): DiscordSelectMenuComponent {
        return { ...this.data, options: this.options.map((option) => option.toJSON()) };
    }
}

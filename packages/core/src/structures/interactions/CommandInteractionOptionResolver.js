"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandInteractionOptionResolver = exports.transformOasisInteractionDataOption = void 0;
const api_types_1 = require("@biscuit/api-types");
function transformOasisInteractionDataOption(o) {
    const output = {
        ...o,
        Otherwise: o.value,
    };
    switch (o.type) {
        case api_types_1.ApplicationCommandOptionTypes.String:
            output.String = o.value;
            break;
        case api_types_1.ApplicationCommandOptionTypes.Number:
            output.Number = o.value;
            break;
        case api_types_1.ApplicationCommandOptionTypes.Integer:
            output.Integer = o.value;
            break;
        case api_types_1.ApplicationCommandOptionTypes.Boolean:
            output.Boolean = o.value;
            break;
        case api_types_1.ApplicationCommandOptionTypes.Role:
            output.Role = BigInt(o.value);
            break;
        case api_types_1.ApplicationCommandOptionTypes.User:
            output.User = BigInt(o.value);
            break;
        case api_types_1.ApplicationCommandOptionTypes.Channel:
            output.Channel = BigInt(o.value);
            break;
        case api_types_1.ApplicationCommandOptionTypes.Mentionable:
        case api_types_1.ApplicationCommandOptionTypes.SubCommand:
        case api_types_1.ApplicationCommandOptionTypes.SubCommandGroup:
        default:
            output.Otherwise = o.value;
    }
    return output;
}
exports.transformOasisInteractionDataOption = transformOasisInteractionDataOption;
/**
 * Utility class to get the resolved options for a command
 * It is really typesafe
 * @example const option = ctx.options.getStringOption("name");
 */
class CommandInteractionOptionResolver {
    #subcommand;
    #group;
    hoistedOptions;
    resolved;
    constructor(options, resolved) {
        this.hoistedOptions =
            options?.map(transformOasisInteractionDataOption) ?? [];
        // warning: black magic do not edit and thank djs authors
        if (this.hoistedOptions[0]?.type ===
            api_types_1.ApplicationCommandOptionTypes.SubCommandGroup) {
            this.#group = this.hoistedOptions[0].name;
            this.hoistedOptions = (this.hoistedOptions[0].options ?? []).map(transformOasisInteractionDataOption);
        }
        if (this.hoistedOptions[0]?.type ===
            api_types_1.ApplicationCommandOptionTypes.SubCommand) {
            this.#subcommand = this.hoistedOptions[0].name;
            this.hoistedOptions = (this.hoistedOptions[0].options ?? []).map(transformOasisInteractionDataOption);
        }
        this.resolved = resolved;
    }
    getTypedOption(name, type, properties, required) {
        const option = this.get(name, required);
        if (!option) {
            return;
        }
        if (option.type !== type) {
            // pass
        }
        if (required === true &&
            properties.every((prop) => typeof option[prop] === 'undefined')) {
            throw new TypeError(`Properties ${properties.join(', ')} are missing in option ${name}`);
        }
        return option;
    }
    get(name, required) {
        const option = this.hoistedOptions.find((o) => typeof name === 'number'
            ? o.name === name.toString()
            : o.name === name);
        if (!option) {
            if (required && name in this.hoistedOptions.map((o) => o.name)) {
                throw new TypeError('Option marked as required was undefined');
            }
            return;
        }
        return option;
    }
    getString(name, required = false) {
        const option = this.getTypedOption(name, api_types_1.ApplicationCommandOptionTypes.String, ['Otherwise'], required);
        return option?.Otherwise ?? undefined;
    }
    getNumber(name, required = false) {
        const option = this.getTypedOption(name, api_types_1.ApplicationCommandOptionTypes.Number, ['Otherwise'], required);
        return option?.Otherwise ?? undefined;
    }
    getInteger(name, required = false) {
        const option = this.getTypedOption(name, api_types_1.ApplicationCommandOptionTypes.Integer, ['Otherwise'], required);
        return option?.Otherwise ?? undefined;
    }
    getBoolean(name, required = false) {
        const option = this.getTypedOption(name, api_types_1.ApplicationCommandOptionTypes.Boolean, ['Otherwise'], required);
        return option?.Otherwise ?? undefined;
    }
    getUser(name, required = false) {
        const option = this.getTypedOption(name, api_types_1.ApplicationCommandOptionTypes.User, ['Otherwise'], required);
        return option?.Otherwise ?? undefined;
    }
    getChannel(name, required = false) {
        const option = this.getTypedOption(name, api_types_1.ApplicationCommandOptionTypes.Channel, ['Otherwise'], required);
        return option?.Otherwise ?? undefined;
    }
    getMentionable(name, required = false) {
        const option = this.getTypedOption(name, api_types_1.ApplicationCommandOptionTypes.Mentionable, ['Otherwise'], required);
        return option?.Otherwise ?? undefined;
    }
    getRole(name, required = false) {
        const option = this.getTypedOption(name, api_types_1.ApplicationCommandOptionTypes.Role, ['Otherwise'], required);
        return option?.Otherwise ?? undefined;
    }
    getAttachment(name, required = false) {
        const option = this.getTypedOption(name, api_types_1.ApplicationCommandOptionTypes.Attachment, ['Otherwise'], required);
        return option?.Otherwise ?? undefined;
    }
    /** searches for the focused option */
    getFocused(full = false) {
        const focusedOption = this.hoistedOptions.find((option) => option.focused);
        if (!focusedOption) {
            throw new TypeError('No option found');
        }
        return full ? focusedOption : focusedOption.Otherwise;
    }
    getSubCommand(required = true) {
        if (required && !this.#subcommand) {
            throw new TypeError('Option marked as required was undefined');
        }
        return [this.#subcommand, this.hoistedOptions];
    }
    getSubCommandGroup(required = false) {
        if (required && !this.#group) {
            throw new TypeError('Option marked as required was undefined');
        }
        return [this.#group, this.hoistedOptions];
    }
}
exports.CommandInteractionOptionResolver = CommandInteractionOptionResolver;
exports.default = CommandInteractionOptionResolver;

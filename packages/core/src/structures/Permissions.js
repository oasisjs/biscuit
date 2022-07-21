"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = void 0;
/* eslint-disable arrow-parens */
const api_types_1 = require("@biscuit/api-types");
class Permissions {
    static Flags = api_types_1.BitwisePermissionFlags;
    bitfield;
    constructor(bitfield) {
        this.bitfield = Permissions.resolve(bitfield);
    }
    has(bit) {
        if (this.bitfield & BigInt(Permissions.Flags.ADMINISTRATOR)) {
            return true;
        }
        return !!(this.bitfield & Permissions.resolve(bit));
    }
    static resolve(bit) {
        switch (typeof bit) {
            case 'bigint':
                return bit;
            case 'number':
                return BigInt(bit);
            case 'string':
                return BigInt(Permissions.Flags[bit]);
            case 'object':
                return Permissions.resolve(bit
                    .map((p) => BigInt(Permissions.Flags[p]))
                    .reduce((acc, cur) => acc | cur, 0n));
            default:
                throw new TypeError(`Cannot resolve permission: ${bit}`);
        }
    }
}
exports.Permissions = Permissions;
exports.default = Permissions;

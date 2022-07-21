import { BitwisePermissionFlags } from '@biscuit/api-types';
export declare type PermissionString = keyof typeof BitwisePermissionFlags;
export declare type PermissionResolvable = bigint | PermissionString | PermissionString[] | BitwisePermissionFlags;
export declare class Permissions {
    static Flags: typeof BitwisePermissionFlags;
    bitfield: bigint;
    constructor(bitfield: PermissionResolvable);
    has(bit: PermissionResolvable): boolean;
    static resolve(bit: PermissionResolvable): bigint;
}
export default Permissions;

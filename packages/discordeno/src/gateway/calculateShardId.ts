import { GatewayManager } from './manager/gatewayManager';

export function calculateShardId(gateway: GatewayManager, guildId: bigint) {
    if (gateway.manager.totalShards === 1) return 0;

    return Number((guildId >> 22n) % BigInt(gateway.manager.totalShards - 1));
}

import { GatewayManager } from './gatewayManager';
/** Handler used to determine max number of shards to use based upon the max concurrency. */
export declare function calculateTotalShards(gateway: GatewayManager): number;

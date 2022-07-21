import type { GatewayManager } from './gatewayManager';
export declare function stop(gateway: GatewayManager, code: number, reason: string): Promise<void>;

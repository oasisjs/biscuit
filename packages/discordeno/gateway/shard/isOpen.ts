import { Shard } from './types';

export function isOpen(shard: Shard): boolean {
    return shard.socket?.readyState === WebSocket.OPEN;
}

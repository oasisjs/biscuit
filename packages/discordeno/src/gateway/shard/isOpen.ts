import type { Shard } from './types';
import WebSocket from 'ws';

export function isOpen(shard: Shard): boolean {
	return shard.socket?.readyState === WebSocket.OPEN;
}

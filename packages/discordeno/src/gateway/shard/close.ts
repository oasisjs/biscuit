import type { Shard } from './types';
import WebSocket from 'ws';

export function close(shard: Shard, code: number, reason: string): void {
	if (shard.socket?.readyState !== WebSocket.OPEN) {
		return;
	}

	return shard.socket?.close(code, reason);
}

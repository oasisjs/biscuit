import type { Shard, ShardSocketRequest } from './types';
export declare function send(shard: Shard, message: ShardSocketRequest, highPriority: boolean): Promise<void>;

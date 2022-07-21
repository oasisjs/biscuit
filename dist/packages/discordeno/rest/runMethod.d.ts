import { RestManager } from './restManager';
import { RequestMethod } from './rest';
export declare function runMethod<T = any>(rest: RestManager, method: RequestMethod, route: string, body?: unknown, options?: {
    retryCount?: number;
    bucketId?: string;
    headers?: Record<string, string>;
}): Promise<T>;

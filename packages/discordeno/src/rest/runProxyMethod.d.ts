import type { RestManager } from './restManager';
import type { RestRequestRejection, RestRequestResponse } from './rest';
export declare type ProxyMethodResponse<T> = Omit<RestRequestResponse | RestRequestRejection, 'body'> & {
    body?: T;
};
export declare function runProxyMethod<T = any>(rest: RestManager, method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', url: string, body?: unknown, retryCount?: number, bucketId?: string): Promise<ProxyMethodResponse<T>>;

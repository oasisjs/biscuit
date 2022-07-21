import type { RequestMethod } from './rest';
import type { RestManager } from './restManager';
export interface RestSendRequestOptions {
    url: string;
    method: RequestMethod;
    bucketId?: string;
    reject?: Function;
    respond?: Function;
    retryCount?: number;
    payload?: {
        headers: Record<string, string>;
        body: string | FormData;
    };
}
export declare function sendRequest<T>(rest: RestManager, options: RestSendRequestOptions): Promise<T>;

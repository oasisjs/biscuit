import { checkRateLimits } from './checkRateLimits';
import { cleanupQueues } from './cleanupQueues';
import { createRequestBody } from './createRequestBody';
import { processGlobalQueue } from './processGlobalQueue';
import { processQueue } from './processQueue';
import { processRateLimitedPaths } from './processRateLimitedPaths';
import { processRequest } from './processRequest';
import { processRequestHeaders } from './processRequestHeaders';
import { convertRestError } from './convertRestError';
import { RestPayload, RestRateLimitedPath, RestRequest } from './rest';
import { runMethod } from './runMethod';
import { simplifyUrl } from './simplifyUrl';
import { sendRequest } from './sendRequest';
export declare function createRestManager(options: CreateRestManagerOptions): {
    invalidRequests: number;
    maxInvalidRequests: number;
    invalidRequestsInterval: number;
    invalidRequestsTimeoutId: number;
    invalidRequestsSafetyAmount: number;
    invalidRequestFrozenAt: number;
    invalidRequestErrorStatuses: number[];
    version: number;
    token: string;
    maxRetryCount: number;
    secretKey: string;
    customUrl: string;
    pathQueues: Map<string, {
        isWaiting: boolean;
        requests: {
            request: RestRequest;
            payload: RestPayload;
        }[];
    }>;
    processingQueue: boolean;
    processingRateLimitedPaths: boolean;
    globallyRateLimited: boolean;
    globalQueue: {
        request: RestRequest;
        payload: RestPayload;
        basicURL: string;
        urlToUse: string;
    }[];
    globalQueueProcessing: boolean;
    rateLimitedPaths: Map<string, RestRateLimitedPath>;
    debug: (text: string) => unknown;
    checkRateLimits: typeof checkRateLimits;
    cleanupQueues: typeof cleanupQueues;
    processQueue: typeof processQueue;
    processRateLimitedPaths: typeof processRateLimitedPaths;
    processRequestHeaders: typeof processRequestHeaders;
    processRequest: typeof processRequest;
    createRequestBody: typeof createRequestBody;
    runMethod: typeof runMethod;
    simplifyUrl: typeof simplifyUrl;
    processGlobalQueue: typeof processGlobalQueue;
    convertRestError: typeof convertRestError;
    sendRequest: typeof sendRequest;
};
export interface CreateRestManagerOptions {
    token: string;
    customUrl?: string;
    maxRetryCount?: number;
    version?: number;
    secretKey?: string;
    debug?: (text: string) => unknown;
    checkRateLimits?: typeof checkRateLimits;
    cleanupQueues?: typeof cleanupQueues;
    processQueue?: typeof processQueue;
    processRateLimitedPaths?: typeof processRateLimitedPaths;
    processRequestHeaders?: typeof processRequestHeaders;
    processRequest?: typeof processRequest;
    createRequestBody?: typeof createRequestBody;
    runMethod?: typeof runMethod;
    simplifyUrl?: typeof simplifyUrl;
    processGlobalQueue?: typeof processGlobalQueue;
    convertRestError?: typeof convertRestError;
    sendRequest?: typeof sendRequest;
}
export declare type RestManager = ReturnType<typeof createRestManager>;

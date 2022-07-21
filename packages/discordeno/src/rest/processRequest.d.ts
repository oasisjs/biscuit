import type { RestManager } from './restManager';
import type { RestPayload, RestRequest } from './rest';
/** Processes a request and assigns it to a queue or creates a queue if none exists for it. */
export declare function processRequest(rest: RestManager, request: RestRequest, payload: RestPayload): void;

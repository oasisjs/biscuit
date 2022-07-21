"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMethod = void 0;
const constants_1 = require("../util/constants");
async function runMethod(rest, method, route, body, options) {
    rest.debug(`[REST - RequestCreate] Method: ${method} | URL: ${route} | Retry Count: ${options?.retryCount ?? 0} | Bucket ID: ${options?.bucketId} | Body: ${JSON.stringify(body)}`);
    const errorStack = new Error('Location:');
    // @ts-ignore Breaks deno deploy. Luca said add ts-ignore until it's fixed
    Error.captureStackTrace?.(errorStack);
    // For proxies we don't need to do any of the legwork so we just forward the request
    if (!constants_1.baseEndpoints.BASE_URL.startsWith(constants_1.BASE_URL) && route[0] === '/') {
        const result = await fetch(`${constants_1.baseEndpoints.BASE_URL}${route}`, {
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                Authorization: rest.secretKey,
                'Content-Type': 'application/json',
            },
            method,
        }).catch((error) => {
            errorStack.message = error?.message;
            console.error(error);
            throw errorStack;
        });
        if (!result.ok) {
            errorStack.message = result.statusText;
            rest.debug(`[ERROR] ${errorStack.message}`);
            // Closes the response to prevent memory leak
            await result.text();
            throw errorStack;
        }
        return result.status !== 204 ? await result.json() : undefined;
    }
    // No proxy so we need to handle all rate limiting and such
    return new Promise((resolve, reject) => {
        rest.processRequest(rest, {
            url: route[0] === '/'
                ? `${constants_1.BASE_URL}/v${constants_1.API_VERSION}${route}`
                : route,
            method,
            reject: (data) => {
                const restError = rest.convertRestError(errorStack, data);
                reject(restError);
            },
            respond: (data) => resolve(data.status !== 204
                ? JSON.parse(data.body ?? '{}')
                : undefined),
        }, {
            bucketId: options?.bucketId,
            body: body,
            retryCount: options?.retryCount ?? 0,
            headers: options?.headers,
        });
    });
}
exports.runMethod = runMethod;

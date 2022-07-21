"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runProxyMethod = void 0;
// Left out proxy request, because it's not needed here
// this file could also be moved to a plugin.
async function runProxyMethod(rest, method, url, body, retryCount = 0, bucketId) {
    rest.debug(`[REST - RequestCreate] Method: ${method} | URL: ${url} | Retry Count: ${retryCount} | Bucket ID: ${bucketId} | Body: ${JSON.stringify(body)}`);
    // No proxy so we need to handle all rate limiting and such
    return new Promise((resolve, reject) => {
        rest.processRequest(rest, {
            url,
            method,
            reject: (data) => {
                const { body: b, ...r } = data;
                reject({
                    body: data.status !== 204
                        ? JSON.parse(b ?? '{}')
                        : undefined,
                    ...r,
                });
            },
            respond: (data) => {
                const { body: b, ...r } = data;
                resolve({
                    body: data.status !== 204
                        ? JSON.parse(b ?? '{}')
                        : undefined,
                    ...r,
                });
            },
        }, {
            bucketId,
            body: body,
            retryCount,
        });
    });
}
exports.runProxyMethod = runProxyMethod;

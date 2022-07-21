"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestManager = void 0;
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-duplicate-imports */
const checkRateLimits_1 = require("./checkRateLimits");
const cleanupQueues_1 = require("./cleanupQueues");
const createRequestBody_1 = require("./createRequestBody");
const processGlobalQueue_1 = require("./processGlobalQueue");
const processQueue_1 = require("./processQueue");
const processRateLimitedPaths_1 = require("./processRateLimitedPaths");
const processRequest_1 = require("./processRequest");
const processRequestHeaders_1 = require("./processRequestHeaders");
const convertRestError_1 = require("./convertRestError");
const runMethod_1 = require("./runMethod");
const simplifyUrl_1 = require("./simplifyUrl");
const constants_1 = require("../util/constants");
const constants_2 = require("../util/constants");
const token_1 = require("../util/token");
const sendRequest_1 = require("./sendRequest");
function createRestManager(options) {
    const version = options.version || constants_2.API_VERSION;
    if (options.customUrl) {
        constants_1.baseEndpoints.BASE_URL = `${options.customUrl}/v${version}`;
    }
    return {
        // current invalid amount
        invalidRequests: 0,
        // max invalid requests allowed until ban
        maxInvalidRequests: 10000,
        // 10 minutes
        invalidRequestsInterval: 600000,
        // timer to reset to 0
        invalidRequestsTimeoutId: 0,
        // how safe to be from max
        invalidRequestsSafetyAmount: 1,
        // when first request in this period was made
        invalidRequestFrozenAt: 0,
        invalidRequestErrorStatuses: [401, 403, 429],
        version,
        token: (0, token_1.removeTokenPrefix)(options.token),
        maxRetryCount: options.maxRetryCount || 10,
        secretKey: options.secretKey || 'discordeno_best_lib_ever',
        customUrl: options.customUrl || '',
        pathQueues: new Map(),
        processingQueue: false,
        processingRateLimitedPaths: false,
        globallyRateLimited: false,
        globalQueue: [],
        globalQueueProcessing: false,
        rateLimitedPaths: new Map(),
        debug: options.debug || function (_text) { },
        checkRateLimits: options.checkRateLimits || checkRateLimits_1.checkRateLimits,
        cleanupQueues: options.cleanupQueues || cleanupQueues_1.cleanupQueues,
        processQueue: options.processQueue || processQueue_1.processQueue,
        processRateLimitedPaths: options.processRateLimitedPaths || processRateLimitedPaths_1.processRateLimitedPaths,
        processRequestHeaders: options.processRequestHeaders || processRequestHeaders_1.processRequestHeaders,
        processRequest: options.processRequest || processRequest_1.processRequest,
        createRequestBody: options.createRequestBody || createRequestBody_1.createRequestBody,
        runMethod: options.runMethod || runMethod_1.runMethod,
        simplifyUrl: options.simplifyUrl || simplifyUrl_1.simplifyUrl,
        processGlobalQueue: options.processGlobalQueue || processGlobalQueue_1.processGlobalQueue,
        convertRestError: options.convertRestError || convertRestError_1.convertRestError,
        sendRequest: options.sendRequest || sendRequest_1.sendRequest,
    };
}
exports.createRestManager = createRestManager;

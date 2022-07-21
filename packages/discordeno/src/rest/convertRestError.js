"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRestError = void 0;
function convertRestError(errorStack, data) {
    errorStack.message = `[${data.status}] ${data.error}\n${data.body}`;
    return errorStack;
}
exports.convertRestError = convertRestError;

"use strict";
/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/ban-types */
// This module is browser-compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
// deno-lint-ignore-file ban-types
/**
 * An event emitter (observer pattern)
 */
class EventEmitter {
    listeners = new Map();
    #addListener(event, func) {
        this.listeners.set(event, this.listeners.get(event) || []);
        this.listeners.get(event)?.push(func);
        return this;
    }
    on(event, func) {
        return this.#addListener(event, func);
    }
    #removeListener(event, func) {
        if (this.listeners.has(event)) {
            const listener = this.listeners.get(event);
            if (listener?.includes(func)) {
                listener.splice(listener.indexOf(func), 1);
                if (listener.length === 0) {
                    this.listeners.delete(event);
                }
            }
        }
        return this;
    }
    off(event, func) {
        return this.#removeListener(event, func);
    }
    once(event, func) {
        // it is important for this to be an arrow function
        const closure = () => {
            func();
            this.off(event, func);
        };
        const listener = this.listeners.get(event) ?? [];
        listener.push(closure);
        return this;
    }
    emit(event, ...args) {
        const listener = this.listeners.get(event);
        if (!listener) {
            return false;
        }
        listener.forEach((f) => f(...args));
        return true;
    }
    listenerCount(eventName) {
        return this.listeners.get(eventName)?.length ?? 0;
    }
    rawListeners(eventName) {
        return this.listeners.get(eventName);
    }
}
exports.EventEmitter = EventEmitter;
exports.default = EventEmitter;

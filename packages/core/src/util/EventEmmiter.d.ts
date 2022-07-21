/**
 * An event emitter (observer pattern)
 */
export declare class EventEmitter {
    #private;
    listeners: Map<PropertyKey, Function[]>;
    on(event: string, func: Function): this;
    off(event: string, func: Function): this;
    once(event: string, func: Function): this;
    emit(event: string, ...args: unknown[]): boolean;
    listenerCount(eventName: string): number;
    rawListeners(eventName: string): Function[] | undefined;
}
export default EventEmitter;

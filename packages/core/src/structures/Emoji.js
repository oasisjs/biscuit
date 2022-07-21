"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emoji = void 0;
class Emoji {
    constructor(session, data) {
        this.id = data.id;
        this.name = data.name;
        this.animated = !!data.animated;
        this.available = !!data.available;
        this.requireColons = !!data.require_colons;
        this.session = session;
    }
    id;
    session;
    name;
    animated;
    available;
    requireColons;
}
exports.Emoji = Emoji;
exports.default = Emoji;

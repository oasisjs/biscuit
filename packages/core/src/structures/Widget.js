"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
class Widget {
    constructor(session, data) {
        this.session = session;
        this.id = data.id;
        this.name = data.name;
        this.instantInvite = data.instant_invite;
        this.channels = data.channels;
        this.members = data.members.map((x) => {
            return {
                id: x.id,
                username: x.username,
                avatar: x.avatar,
                status: x.status,
                avatarURL: x.avatar_url,
            };
        });
        this.presenceCount = data.presence_count;
    }
    session;
    id;
    name;
    instantInvite;
    channels;
    members;
    presenceCount;
}
exports.Widget = Widget;

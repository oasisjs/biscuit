"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presence = exports.StatusTypes = void 0;
const User_1 = require("./User");
var StatusTypes;
(function (StatusTypes) {
    StatusTypes[StatusTypes["online"] = 0] = "online";
    StatusTypes[StatusTypes["dnd"] = 1] = "dnd";
    StatusTypes[StatusTypes["idle"] = 2] = "idle";
    StatusTypes[StatusTypes["invisible"] = 3] = "invisible";
    StatusTypes[StatusTypes["offline"] = 4] = "offline";
})(StatusTypes = exports.StatusTypes || (exports.StatusTypes = {}));
class Presence {
    constructor(session, data) {
        this.session = session;
        this.user = new User_1.User(this.session, data.user);
        this.guildId = data.guild_id;
        this.status = StatusTypes[data.status];
        this.activities = data.activities.map((activity) => Object.create({
            name: activity.name,
            type: activity.type,
            url: activity.url ? activity.url : undefined,
            createdAt: activity.created_at,
            timestamps: activity.timestamps,
            applicationId: activity.application_id,
            details: activity.details ? activity.details : undefined,
            state: activity.state,
            emoji: activity.emoji ? activity.emoji : undefined,
            party: activity.party ? activity.party : undefined,
            assets: activity.assets
                ? {
                    largeImage: activity.assets.large_image,
                    largeText: activity.assets.large_text,
                    smallImage: activity.assets.small_image,
                    smallText: activity.assets.small_text,
                }
                : null,
            secrets: activity.secrets ? activity.secrets : undefined,
            instance: !!activity.instance,
            flags: activity.flags,
            buttons: activity.buttons,
        }));
        this.clientStatus = data.client_status;
    }
    session;
    user;
    guildId;
    status;
    activities;
    clientStatus;
}
exports.Presence = Presence;

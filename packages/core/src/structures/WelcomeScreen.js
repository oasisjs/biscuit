"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeScreen = void 0;
const WelcomeChannel_1 = __importDefault(require("./WelcomeChannel"));
/**
 * @link https://discord.com/developers/docs/resources/guild#welcome-screen-object
 */
class WelcomeScreen {
    constructor(session, data) {
        this.session = session;
        this.welcomeChannels = data.welcome_channels.map((welcomeChannel) => new WelcomeChannel_1.default(session, welcomeChannel));
        if (data.description) {
            this.description = data.description;
        }
    }
    session;
    description;
    welcomeChannels;
}
exports.WelcomeScreen = WelcomeScreen;
exports.default = WelcomeScreen;

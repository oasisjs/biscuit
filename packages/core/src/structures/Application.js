"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.NewTeam = void 0;
const User_1 = __importDefault(require("./User"));
// NewTeam create a new Team object for discord applications
function NewTeam(session, data) {
    return {
        icon: data.icon ? data.icon : undefined,
        id: data.id,
        members: data.members.map((member) => {
            return {
                membershipState: member.membership_state,
                permissions: member.permissions,
                teamId: member.team_id,
                user: new User_1.default(session, member.user),
            };
        }),
        ownerUserId: data.owner_user_id,
        name: data.name,
    };
}
exports.NewTeam = NewTeam;
/**
 * @link https://discord.com/developers/docs/resources/application#application-object
 */
class Application {
    constructor(session, data) {
        this.id = data.id;
        this.session = session;
        this.name = data.name;
        this.icon = data.icon || undefined;
        this.description = data.description;
        this.rpcOrigins = data.rpc_origins;
        this.botPublic = data.bot_public;
        this.botRequireCodeGrant = data.bot_require_code_grant;
        this.termsOfServiceURL = data.terms_of_service_url;
        this.privacyPolicyURL = data.privacy_policy_url;
        this.owner = data.owner
            ? new User_1.default(session, data.owner)
            : undefined;
        this.summary = '';
        this.verifyKey = data.verify_key;
        this.team = data.team ? NewTeam(session, data.team) : undefined;
        this.guildId = data.guild_id;
        this.coverImage = data.cover_image;
        this.tags = data.tags;
        this.installParams = data.install_params;
        this.customInstallURL = data.custom_install_url;
    }
    session;
    id;
    name;
    icon;
    description;
    rpcOrigins;
    botPublic;
    botRequireCodeGrant;
    termsOfServiceURL;
    privacyPolicyURL;
    owner;
    summary;
    verifyKey;
    team;
    guildId;
    primarySkuId;
    slug;
    coverImage;
    flags;
    tags;
    installParams;
    customInstallURL;
}
exports.Application = Application;
exports.default = Application;

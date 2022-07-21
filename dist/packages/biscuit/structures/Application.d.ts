import { Model } from './Base';
import type { Snowflake } from '../Snowflake';
import type { Session } from '../Session';
import { DiscordApplication, DiscordInstallParams, DiscordTeam, TeamMembershipStates } from '../../discordeno/mod';
import User from './User';
declare type SummaryDeprecated = '';
export interface Team {
    /** a hash of the image of the team's icon */
    icon?: string;
    /** the unique id of the team */
    id: string;
    /** the members of the team */
    members: TeamMember[];
    /** user id of the current team owner */
    ownerUserId: string;
    /** team name */
    name: string;
}
export interface TeamMember {
    /** the user's membership state on the team */
    membershipState: TeamMembershipStates;
    permissions: '*'[];
    teamId: string;
    user: Partial<User> & Pick<User, 'avatarHash' | 'discriminator' | 'id' | 'username'>;
}
export declare function NewTeam(session: Session, data: DiscordTeam): Team;
/**
 * @link https://discord.com/developers/docs/resources/application#application-object
 */
export declare class Application implements Model {
    constructor(session: Session, data: DiscordApplication);
    readonly session: Session;
    id: Snowflake;
    name: string;
    icon?: string;
    description: string;
    rpcOrigins?: string[];
    botPublic: boolean;
    botRequireCodeGrant: boolean;
    termsOfServiceURL?: string;
    privacyPolicyURL?: string;
    owner?: Partial<User>;
    summary: SummaryDeprecated;
    verifyKey: string;
    team?: Team;
    guildId?: Snowflake;
    primarySkuId?: Snowflake;
    slug?: string;
    coverImage?: string;
    flags?: number;
    tags?: string[];
    installParams?: DiscordInstallParams;
    customInstallURL?: string;
}
export default Application;

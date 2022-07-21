import type { Session } from '../../Session';
import type { DiscordComponent } from '../../../discordeno/mod';
import type { Component } from './Component';
export declare class ComponentFactory {
    /**
     * Component factory
     * @internal
     */
    static from(session: Session, component: DiscordComponent): Component;
}
export default ComponentFactory;

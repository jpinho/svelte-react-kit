/** @typedef {typeof __propDef.props}  ReactAdapterProps */
/** @typedef {typeof __propDef.events}  ReactAdapterEvents */
/** @typedef {typeof __propDef.slots}  ReactAdapterSlots */
export default class ReactAdapter extends SvelteComponentTyped<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ReactAdapterProps = typeof __propDef.props;
export type ReactAdapterEvents = typeof __propDef.events;
export type ReactAdapterSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

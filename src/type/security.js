import * as spec from '../spec/security.js';

/**
 */
export default class Security {
    /**
     * @param {spec.Security_t} type 
     */
    constructor(type) {
        /** @type {spec.Security_t]} */
        this.type = type;
    }
}

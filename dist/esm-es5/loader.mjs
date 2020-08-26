import { b as bootstrapLazy } from './index-577d973c.js';
import { a as patchEsm } from './patch-66106c9d.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["my-component", [[1, "my-component"]]]], options);
    });
};
export { defineCustomElements };

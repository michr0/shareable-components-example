import { b as bootstrapLazy } from './index-577d973c.js';
import { p as patchBrowser } from './patch-66106c9d.js';

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component"]]]], options);
});

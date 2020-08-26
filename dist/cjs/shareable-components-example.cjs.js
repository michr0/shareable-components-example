'use strict';

const index = require('./index-9132c4ae.js');
const patch = require('./patch-dfdd7930.js');

patch.patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component"]]]], options);
});

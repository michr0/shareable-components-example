'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9132c4ae.js');
const patch = require('./patch-dfdd7930.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;

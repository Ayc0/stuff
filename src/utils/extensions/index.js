import Fuse from 'fuse.js';
import sortBy from 'lodash/sortBy';

import rawList from './list.json';

const list = sortBy(
  rawList.map(extension => {
    if (extension.icon) {
      extension.icon = require('./icons/' + extension.icon);
    }
    return extension;
  }),
  'name'
);

const fuse = new Fuse(list, {
  shouldSort: true,
  threshold: 0.4,
  keys: ['name', { name: 'description', value: 0.4 }]
});

export const search = term => {
  if (!term) {
    return list;
  }
  return fuse.search(term);
};

export default list;

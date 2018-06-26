import Fuse from 'fuse.js';
import sortBy from 'lodash/sortBy';

import rawProjects from './projects.json';
const projects = sortBy(rawProjects, p => p.name.toLowerCase());

const fuse = new Fuse(projects, {
  shouldSort: true,
  threshold: 0.4,
  keys: ['name', 'keywords', 'language', { name: 'description', value: 0.4 }]
});

export const search = term => {
  if (!term) {
    return projects;
  }
  return fuse.search(term);
};

export default projects;

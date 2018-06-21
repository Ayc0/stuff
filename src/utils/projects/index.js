import Fuse from 'fuse.js';

import projects from './projects.json';

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

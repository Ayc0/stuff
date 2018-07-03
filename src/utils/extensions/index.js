import rawList from './list.json';

const list = rawList.map(extension => {
  if (extension.icon) {
    extension.icon = require('./icons/' + extension.icon);
  }
  return extension;
});

export default list;

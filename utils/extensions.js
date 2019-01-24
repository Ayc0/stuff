const fs = require('fs');
const path = require('path');

const sortBy = require('lodash/sortBy');
const uniqBy = require('lodash/uniqBy');

const filename = path.basename(__filename);

const folder = '/Users/ayc0/.vscode/extensions';

const dirs = fs.readdirSync(folder).filter(dir => dir !== filename);

const filter = array => sortBy(uniqBy(array.filter(Boolean), 'name'), 'name');

const outPath = path.resolve(__dirname, '../src/utils/extensions/');
const iconFolder = path.join(outPath, 'icons/');

const copy = (fileName, name) => {
  const imgName = name + path.extname(fileName);
  const outImgPath = path.join(iconFolder, imgName);
  fs.copyFileSync(fileName, outImgPath);
  return imgName;
};

const extensions = filter(
  dirs.map(dir => {
    const folderPath = path.resolve(folder, dir);
    const packagePath = path.join(folderPath, 'package.json');
    if (!fs.existsSync(packagePath)) {
      console.warn('No package.json in', dir);
      return null;
    }

    const packageJson = JSON.parse(fs.readFileSync(packagePath));

    const id = packageJson.name;
    const name = packageJson.displayName || id;
    const description = packageJson.description;

    let github;
    if (packageJson.repository) {
      if (typeof packageJson.repository === 'string') {
        github = packageJson.repository;
      }
      else {
        github = packageJson.repository.url;
      }
    }

    let icon;
    if (packageJson.icon) {
      const rawIconPath = path.join(folderPath, packageJson.icon);
      icon = copy(rawIconPath, id);
    }
    else {
      icon = 'https://cdn.vsassets.io/v/20180911T053002/_content/Header/default_icon.png';
    }
    const marketplace = `https://marketplace.visualstudio.com/items?itemName=${packageJson.publisher}.${id}`;
    return github
      ? { id, name, description, icon, sources: { github, marketplace } }
      : { id, name, description, icon, sources: { marketplace } };
  })
);

fs.writeFileSync(path.join(outPath, 'list.json'), JSON.stringify(extensions, null, 2));

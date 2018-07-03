const fs = require('fs');
const path = require('path');

const sortBy = require('lodash/sortBy');
const uniqBy = require('lodash/uniqBy');

const filename = path.basename(__filename);

const folder = '/mnt/c/Users/Kangoo/.vscode/extensions';

const dirs = fs.readdirSync(folder).filter(dir => dir !== filename);

const filter = array => sortBy(uniqBy(array.filter(Boolean), 'name'), 'name');

const outPath = path.resolve(__dirname, '../src/utils/extensions/');
const iconFolder = path.join(outPath, 'icons/');

const copy = (filename, name) => {
  const imgName = name + path.extname(filename);
  const outImgPath = path.join(iconFolder, imgName);
  fs.copyFileSync(filename, outImgPath);
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
    const name = packageJson.displayName;
    let description = packageJson.description;

    let github;
    if (typeof packageJson.repository === 'string') {
      github = packageJson.repository;
    }
    else {
      github = packageJson.repository.url;
    }

    let icon;
    if (packageJson.icon) {
      const rawIconPath = path.join(folderPath, packageJson.icon);
      icon = copy(rawIconPath, id);
    }
    const marketplace = `https://marketplace.visualstudio.com/items?itemName=${packageJson.publisher}.${id}`;
    return { id, name, description, icon, sources: { github, marketplace } };
  })
);

fs.writeFileSync(path.join(outPath, 'list.json'), JSON.stringify(extensions, null, 2));

const fs = require('fs');
const path = require('path');

const json = require('../package.json');

const version = json.version.split('.');
version[2] = parseInt(version[2], 10) + 1;

json.version = version.join('.');

fs.writeFileSync(path.resolve(__dirname, '../package.json'), JSON.stringify(json, undefined, 2));

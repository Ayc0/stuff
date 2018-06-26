const fs = require('fs');

const json = require('./package.json');

const version = json.version.split('.');
version[2] = parseInt(version[2], 10) + 1;

json.version = version.join('.');

fs.writeFileSync('package.json', JSON.stringify(json, undefined, 2));

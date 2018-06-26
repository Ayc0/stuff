const fs = require('fs');
const path = require('path');

const prerender = require('../prerender-urls');

fs.writeFileSync(path.resolve(__dirname, '../prerender-urls.json'), JSON.stringify(prerender, undefined, 2));

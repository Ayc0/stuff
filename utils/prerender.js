const prerender = require('../prerender-urls');
const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.resolve(__dirname, '../prerender-urls.json'), JSON.stringify(prerender, undefined, 2));

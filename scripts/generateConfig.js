const config = require('config');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'app', 'config.json');

fs.writeFileSync(
  configPath,
  JSON.stringify(config, null, '\t')
);

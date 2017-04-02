const config = require('config');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'app', 'config.js');

const configFile = fs.createWriteStream(configPath);
configFile.write('// Automatically generated based on the config directory\n');
configFile.write(`export default ${JSON.stringify(config, null, '  ')};\n`);
configFile.end();

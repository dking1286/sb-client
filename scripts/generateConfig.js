const config = require('config');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'src', 'config.js');

const configFile = fs.createWriteStream(configPath, { defaultEncoding: 'utf8' });
configFile.write('// Automatically generated based on the config directory\n');
configFile.write(`export default ${JSON.stringify(config, null, '  ')}`);
configFile.end();

configFile.on('finish', () => process.exit());

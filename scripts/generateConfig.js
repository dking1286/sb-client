const config = require('config');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'app', 'config.js');

fs.writeFileSync(configPath, `
  // Automatically generated based on the config directory
  export default ${JSON.stringify(config, null, '  ')}
`)

process.exit();
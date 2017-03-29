const webpackMerge = require('webpack-merge');
const path = require('path');
const fs = require('fs');
const commonConfig = require('./common.config.js')

function getConfigByEnvironment(env) {
  const envConfigPath = path.join(__dirname, `${env}.config.js`);

  if (!fs.existsSync(envConfigPath)) {
    throw new Error(`Webpack configuration for environment ${env} not found`);
  }

  console.log(`Running ${env} webpack config!`);
  return webpackMerge(commonConfig, require(envConfigPath));
}

module.exports = getConfigByEnvironment(process.env.NODE_ENV);

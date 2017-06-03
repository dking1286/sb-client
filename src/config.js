// The CONFIG variable is replaced with a configuration object at compile time
// by Webpack. The values in the configuration object are determined
// by the config directory. Since this code is also run on NodeJS during
// testing, we need to dynamically decide whether to use the injected config
// object or require the config directly

export default typeof CONFIG === 'undefined' ? require('config') : CONFIG;

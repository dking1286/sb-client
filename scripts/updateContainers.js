const path = require('path');
const updateAllInDir = require('./helpers/updateAllInDir');

updateAllInDir(path.join(__dirname, '../src/views/containers'));

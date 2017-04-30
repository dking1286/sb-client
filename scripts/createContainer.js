const fs = require('fs');
const path = require('path');
const {
  containerBoilerplate,
  testBoilerplate,
  indexBoilerplate
} = require('./helpers/boilerplate');

const containerFolder = path.join(__dirname, '..', 'src', 'views', 'containers');

const createContainer = (name) => {
  fs.writeFileSync(
    path.join(containerFolder, `${name}.js`),
    containerBoilerplate(name)
  );
};


const name = process.argv[2];
createContainer(name);

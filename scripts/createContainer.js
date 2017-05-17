const fs = require('fs');
const path = require('path');
const {
  containerBoilerplate,
  testBoilerplate,
  indexBoilerplate
} = require('./helpers/boilerplate');

const containerFolder = (name) => path.join(__dirname, '..', 'src', 'views', 'containers', name);

const createContainer = (name) => {
  fs.mkdirSync(containerFolder(name));

  fs.writeFileSync(
    path.join(containerFolder(name), `${name}.js`),
    containerBoilerplate(name)
  );

  fs.writeFileSync(
    path.join(containerFolder(name), `${name}.spec.js`),
    testBoilerplate(name)
  );

  fs.writeFileSync(
    path.join(containerFolder(name), 'index.js'),
    indexBoilerplate(name)
  );
};


const name = process.argv[2];
createContainer(name);

const fs = require('fs');
const path = require('path');
const {
  componentBoilerplate,
  stylesheetBoilerplate,
  testBoilerplate,
  indexBoilerplate
} = require('./helpers/boilerplate');


const componentFolder = (name) => path.join(__dirname, '..', 'src', 'views', 'components', name);

const createComponent = (name) => {
  const filesToWrite = [
    { filename: `${name}.js`, content: componentBoilerplate(name) },
    { filename: `${name}.scss`, content: stylesheetBoilerplate(name) },
    { filename: `${name}.spec.js`, content: testBoilerplate(name) },
    { filename: 'index.js', content: indexBoilerplate(name) }
  ];

  fs.mkdirSync(componentFolder(name));

  filesToWrite.forEach((file) => {
    fs.writeFileSync(
      path.join(componentFolder(name), file.filename),
      file.content
    );
  });
};


const name = process.argv[2];
createComponent(name);

const fs = require('fs');
const path = require('path');
const {
  testBoilerplate,
  indexBoilerplate
} = require('./boilerplate');

module.exports = (dirPath) => {
  const folderNames = fs.readdirSync(dirPath);
  folderNames.forEach((name) => {
    const filesToWrite = [
      { filename: `${name}.spec.js`, content: testBoilerplate(name) },
      { filename: 'index.js', content: indexBoilerplate(name) }
    ];

    filesToWrite.forEach((file) => {
      fs.writeFileSync(
        path.join(dirPath, name, file.filename),
        file.content
      );
    });
  });
};

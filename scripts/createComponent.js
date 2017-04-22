const fs = require('fs');
const path = require('path');

const componentFolder = (name) => path.join(__dirname, '..', 'src', 'views', 'components', name);

const componentBoilerplate = (name) => `
  import React from 'react';
  import PropTypes from 'prop-types';
  import styles from './${name}.scss';

  const ${name} = () => (

  );

  ${name}.propTypes = {

  };

  export default ${name};

`.trim().replace(/ {2}/g, '');

const stylesheetBoilerplate = (name) => `
  @import "../../../styles/common";
`.trim().replace(/ {2}/g, '');

const createComponent = (name) => {
  fs.mkdirSync(componentFolder(name));
  fs.writeFileSync(
    path.join(componentFolder(name), `${name}.js`),
    componentBoilerplate(name)
  );
  fs.writeFileSync(
    path.join(componentFolder(name), `${name}.scss`),
    stylesheetBoilerplate(name)
  );
};


const name = process.argv[2];
createComponent(name);

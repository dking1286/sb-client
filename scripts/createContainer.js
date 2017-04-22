const fs = require('fs');
const path = require('path');

const containerFolder = path.join(__dirname, '..', 'src', 'views', 'containers');

const containerBoilerplate = (name) => `
  import React from 'react';
  import PropTypes from 'prop-types';
  import { connect } from 'react-redux';
  import { bindActionCreators } from 'redux';

  const ${name} = () => (

  );

  ${name}.propTypes = {

  };

  const mapStateToProps = (state) => ({

  });

  const mapDispatchToProps = (dispatch) => ({

  });

  export default connect(mapStateToProps, mapDispatchToProps)(${name});

`.trim().replace(/ {2}/g, '');

const createContainer = (name) => {
  fs.writeFileSync(
    path.join(containerFolder, `${name}.js`),
    containerBoilerplate(name)
  );
};


const name = process.argv[2];
createContainer(name);

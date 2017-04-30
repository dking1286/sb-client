exports.componentBoilerplate = (name) => normalizeSpaces(`
  import React from 'react';
  import PropTypes from 'prop-types';
  import styles from './${name}.scss';

  const ${name} = () => (

  );

  ${name}.propTypes = {

  };

  export default ${name};
`);

exports.containerBoilerplate = (name) => normalizeSpaces(`
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
`);

exports.stylesheetBoilerplate = (name) => normalizeSpaces(`
  @import "../../../styles/common";
`);

exports.testBoilerplate = (name) => normalizeSpaces(`
  import React from 'react';
  import { shallow } from 'enzyme';
  import renderer from 'react-test-renderer';
  import ${name} from './${name}';

  describe('<${name} />', () => {
    
  });
`);

exports.indexBoilerplate = (name) => normalizeSpaces(`
  import ${name} from './${name}';
  
  export default ${name};
`);

const normalizeSpaces = (text) => `${text.trim().replace(/\n {2}/g, '\n')}\n`;

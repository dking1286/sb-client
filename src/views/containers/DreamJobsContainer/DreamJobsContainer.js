import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as companiesActionCreators from 'companies/companiesActions';
import * as companiesSelectors from 'companies/companiesSelectors';
import DreamJobsPage from 'views/components/DreamJobsPage';

class DreamJobsContainer extends React.Component {
  componentDidMount() {
    const { companiesActions } = this.props;
    companiesActions.getAll();
  }

  render() {
    const { roles } = this.props;
    return (
      <DreamJobsPage roles={roles} />
    );
  }
}

DreamJobsContainer.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.object).isRequired,
  companiesActions: PropTypes.objectOf(PropTypes.func).isRequired
};

const mapStateToProps = (state) => ({
  roles: companiesSelectors.currentCompaniesRolesList(state)
});

const mapDispatchToProps = (dispatch) => ({
  companiesActions: bindActionCreators(companiesActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DreamJobsContainer);

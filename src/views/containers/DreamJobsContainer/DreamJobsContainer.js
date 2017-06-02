import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as companiesActionCreators from 'companies/companiesActions';
import * as companiesSelectors from 'companies/companiesSelectors';
import * as viewActionCreators from 'views/viewActions';
import DreamJobsPage from 'views/components/DreamJobsPage';

class DreamJobsContainer extends React.Component {
  componentDidMount() {
    const { companiesActions } = this.props;
    companiesActions.getAll();
  }

  render() {
    const { roles, viewActions } = this.props;
    return (
      <DreamJobsPage
        roles={roles}
        viewActions={viewActions}
      />
    );
  }
}

DreamJobsContainer.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.object).isRequired,
  companiesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  viewActions: PropTypes.shape({
    change: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  roles: companiesSelectors.currentCompaniesRolesList(state)
});

const mapDispatchToProps = (dispatch) => ({
  companiesActions: bindActionCreators(companiesActionCreators, dispatch),
  viewActions: bindActionCreators(viewActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DreamJobsContainer);

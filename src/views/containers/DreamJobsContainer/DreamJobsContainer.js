import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as companiesActionCreators from 'companies/companiesActions';
import * as viewActionCreators from 'views/viewActions';
import DreamJobsPage from 'views/components/DreamJobsPage';

class DreamJobsContainer extends React.Component {
  componentDidMount() {
    const { companiesActions } = this.props;
    companiesActions.getAll();
  }

  render() {
    const { currentCompanies, viewActions } = this.props;
    return (
      <DreamJobsPage
        roles={companiesListToRolesList(currentCompanies)}
        viewActions={viewActions}
      />
    );
  }
}

DreamJobsContainer.propTypes = {
  currentCompanies: PropTypes.arrayOf(PropTypes.object).isRequired,
  companiesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  viewActions: PropTypes.shape({
    change: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  currentCompanies: state.companies.currentCompanies
});

const mapDispatchToProps = (dispatch) => ({
  companiesActions: bindActionCreators(companiesActionCreators, dispatch),
  viewActions: bindActionCreators(viewActionCreators, dispatch)
});

const companyToRolesList = (company) => company.roles.map(role => ({
  id: role.id,
  name: role.name,
  company: { name: company.name }
}));

const companiesListToRolesList = (companies) => {
  return companies.reduce((roles, company) => {
    companyToRolesList(company).forEach(role => roles.push(role));
    return roles;
  }, []);
};

export default connect(mapStateToProps, mapDispatchToProps)(DreamJobsContainer);

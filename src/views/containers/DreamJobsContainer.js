import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as companiesActionCreators from 'companies/companiesActions';
import DreamJobsPage from '../components/DreamJobsPage/DreamJobsPage';

class DreamJobsContainer extends React.Component {
  componentDidMount() {
    const { companiesActions } = this.props;
    companiesActions.getAll();
  }

  render() {
    const { currentCompanies } = this.props;
    return (
      <DreamJobsPage roles={companiesListToRolesList(currentCompanies)} />
    );
  }
}

DreamJobsContainer.propTypes = {
  currentCompanies: PropTypes.arrayOf(PropTypes.object).isRequired,
  companiesActions: PropTypes.objectOf(PropTypes.func).isRequired
};

const mapStateToProps = (state) => ({
  currentCompanies: state.companies.currentCompanies
});

const mapDispatchToProps = (dispatch) => ({
  companiesActions: bindActionCreators(companiesActionCreators, dispatch)
});

const companyToRolesList = (company) => company.roles.map(role => ({
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

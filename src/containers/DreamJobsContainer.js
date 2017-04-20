import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DreamJobsContainer extends Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
    );
  }
}

DreamJobsContainer.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const companyToRolesList = (company) => company.roles.map(role => ({
  name: role.name,
  company: { name: company.name }
}));

export default DreamJobsContainer;

import React from 'react';
import PropTypes from 'prop-types';

const DreamJobsContainer = ({ viewActions }) => (
  <div>
    <h1>Hello world!</h1>
    <button onClick={() => viewActions.change({ currentViewName: 'blahblah' })}>
      Click me
    </button>
  </div>
);

DreamJobsContainer.propTypes = {
  viewActions: PropTypes.objectOf(PropTypes.func).isRequired
};

const companyToRolesList = (company) => company.roles.map(role => ({
  name: role.name,
  company: { name: company.name }
}));

export default DreamJobsContainer;

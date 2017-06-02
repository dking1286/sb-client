import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRoleDescription } from 'roles/rolesHelpers';
import * as rolesSelectors from 'roles/rolesSelectors';
import ViewSkillsPage from 'views/components/ViewSkillsPage';

const ViewSkillsContainer = ({ currentRole }) => (
  <ViewSkillsPage
    currentRole={currentRole}
    roleDescription={getRoleDescription(currentRole)}
  />
);

ViewSkillsContainer.propTypes = {
  currentRole: PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string
    }),
    skills: PropTypes.array
  })
};

ViewSkillsContainer.defaultProps = {
  currentRole: null
};

const mapStateToProps = (state) => ({
  currentRole: rolesSelectors.getRoleByRouteId(state)
});

export default connect(mapStateToProps, null)(ViewSkillsContainer);

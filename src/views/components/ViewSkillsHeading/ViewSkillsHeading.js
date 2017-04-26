import React from 'react';
import PropTypes from 'prop-types';
import styles from './ViewSkillsHeading.scss';

const ViewSkillsHeading = ({ roleDescription }) => (
  <div>
    <h1>{roleDescription}</h1>
  </div>
);

ViewSkillsHeading.propTypes = {
  roleDescription: PropTypes.string.isRequired
};

ViewSkillsHeading.defaultProps = {
  currentRole: null
};

export default ViewSkillsHeading;

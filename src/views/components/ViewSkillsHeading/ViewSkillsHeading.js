import React from 'react';
import PropTypes from 'prop-types';
import styles from './ViewSkillsHeading.scss';

const ViewSkillsHeading = ({ roleDescription }) => (
  <div className={styles.container}>
    <h1 className={styles.heading}>{roleDescription}</h1>
  </div>
);

ViewSkillsHeading.propTypes = {
  roleDescription: PropTypes.string.isRequired
};

ViewSkillsHeading.defaultProps = {
  currentRole: null
};

export default ViewSkillsHeading;

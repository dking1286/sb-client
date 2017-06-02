import React from 'react';
import PropTypes from 'prop-types';
import JobsListItem from '../JobsListItem';
import styles from './JobsList.scss';

const JobsList = ({ roles }) => (
  <div className={styles.outer}>
    <div className={styles.container}>
      {roles.map((role, i) =>
        <JobsListItem role={role} key={i} />
      )}
    </div>
  </div>
);


JobsList.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default JobsList;

import React from 'react';
import PropTypes from 'prop-types';
import JobsListItem from '../JobsListItem/JobsListItem';
import styles from './JobsList.scss';

const JobsList = ({ roles, viewActions }) => {
  let key = 0;
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        {roles.map((role, i) =>
          <JobsListItem role={role} key={key++} viewActions={viewActions} />)}
      </div>
    </div>
  );
};

JobsList.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewActions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default JobsList;

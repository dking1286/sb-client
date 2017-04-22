import React from 'react';
import PropTypes from 'prop-types';
import JobsListItem from '../JobsListItem/JobsListItem';
import styles from './JobsList.scss';

const JobsList = ({ roles }) => {
  let key = 0;
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        {roles.map((role, i) =>
          <JobsListItem role={role} key={key++} />)}
        {fillers(roles).map(() =>
          <div className={styles.filler} key={key++} />
        )}
      </div>
    </div>
  );
};

JobsList.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.object).isRequired
};

const fillers = (roles) => {
  const numberOfFillers = (12 - (roles.length % 12)) % 12;
  return new Array(numberOfFillers);
};

export default JobsList;

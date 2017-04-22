import React from 'react';
import PropTypes from 'prop-types';
import styles from './JobsListItem.scss';

const JobsListItem = ({ isFiller, role }) => {
  return isFiller ?
    <div className={styles.filler} /> :

    <div className={styles.listItem}>
      <a
        className={styles.listLink}
      >
        {role.name} at {role.company.name}
      </a>
    </div>;
};

JobsListItem.propTypes = {
  isFiller: PropTypes.bool,
  role: PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired
};

JobsListItem.defaultProps = {
  isFiller: false
};

export default JobsListItem;

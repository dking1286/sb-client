import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'redux-little-router';
import { getRoleDescription } from 'roles/rolesHelpers';
import styles from './JobsListItem.scss';

const JobsListItem = ({ role }) => (
  <div className={styles.listItem}>
    <Link className={styles.listLink} href={`/roles/${role.id}`}>
      {getRoleDescription(role)}
    </Link>
  </div>
);

JobsListItem.propTypes = {
  role: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default JobsListItem;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'redux-little-router';
import styles from './JobsListItem.scss';

const JobsListItem = ({ role }) => (
  <div className={styles.listItem}>
    <Link className={styles.listLink} href={`/roles/${role.id}`}>
      {roleDescription(role)}
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

const roleDescription = (role) => `${role.name} at ${role.company.name}`;

export default JobsListItem;

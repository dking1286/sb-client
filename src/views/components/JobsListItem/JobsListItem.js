import React from 'react';
import PropTypes from 'prop-types';
import styles from './JobsListItem.scss';

const JobsListItem = ({ role, viewActions }) => (
  <div className={styles.listItem}>
    <button
      className={styles.listLink}
      onClick={() => viewActions.change({
        currentViewName: 'ViewSkills',
        params: {
          roleId: role.id,
          roleDescription: roleDescription(role)
        }
      })}
    >
      {roleDescription(role)}
    </button>
  </div>
);

JobsListItem.propTypes = {
  role: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  viewActions: PropTypes.shape({
    change: PropTypes.func.isRequired
  }).isRequired
};

const roleDescription = (role) => `${role.name} at ${role.company.name}`;

export default JobsListItem;

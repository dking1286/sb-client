import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../PageHeader/PageHeader';
import DreamJobsHeading from '../DreamJobsHeading/DreamJobsHeading';
import JobsList from '../JobsList/JobsList';
import styles from './DreamJobsPage.scss';

const DreamJobsPage = ({ roles, viewActions }) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <PageHeader />
      <DreamJobsHeading />
      <JobsList roles={roles} viewActions={viewActions} />
    </div>
  </div>
);

DreamJobsPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewActions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default DreamJobsPage;
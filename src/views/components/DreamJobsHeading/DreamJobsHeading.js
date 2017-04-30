import React from 'react';
import PropTypes from 'prop-types';
import styles from './DreamJobsHeading.scss';

const DreamJobsHeading = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Pick your dream job
    </h1>
    <h2 className={styles.subtitle}>
      Develop the skills to get there
    </h2>
  </div>
);

export default DreamJobsHeading;

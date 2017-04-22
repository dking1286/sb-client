import React from 'react';
import Logo from '../Logo/Logo';
import styles from './PageHeader.scss';

const PageHeader = () => (
  <div className={styles.container}>
    <Logo />
  </div>
);

export default PageHeader;

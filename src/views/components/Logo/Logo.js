import React from 'react';
import logoImage from '../../../../assets/images/logo.png';
import styles from './Logo.scss';

const Logo = () => (
  <img
    src={logoImage}
    className={styles.container}
    alt="Careeer logo"
  />
);

Logo.propTypes = {};

export default Logo;

import React from 'react';
import logo from '../../../img/logo.png';
import styles from './Logo.scss';


const Logo = () => (
  <div><img className={styles.logo} src={logo}/></div>
);

Logo.propTypes = {};

export default Logo;

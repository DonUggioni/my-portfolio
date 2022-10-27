import React from 'react';

import classes from './Footer.module.scss';
import logo from '../../assets/images/logo_copia.png';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes['footer_image-container']}>
        <img src={logo} alt="logo" className={classes.footer_image} />
      </div>
      <div className={classes.socials_container}></div>
    </footer>
  );
}

export default Footer;

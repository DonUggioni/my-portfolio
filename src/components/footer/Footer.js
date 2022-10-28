import React from 'react';

import classes from './Footer.module.scss';
import logo from '../../assets/images/logo_copia.png';
import Button from '../button/Button';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes['footer_image-container']}>
        <img src={logo} alt="logo" className={classes.footer_image} />
      </div>
      <div className={classes.socials_container}>
        <Button className="button_small-font-static">
          <a
            href="https://www.linkedin.com/in/renan-tiscoski/"
            className={classes.social_link}
          >
            LinkedIn
          </a>
        </Button>
        <Button className="button_small-font-static">
          <a
            href="https://github.com/DonUggioni"
            className={classes.social_link}
          >
            Github
          </a>
        </Button>
        <Button className="button_small-font-static">
          <a
            href="https://www.frontendmentor.io/profile/DonUggioni"
            className={classes.social_link}
          >
            Frontend Mentor
          </a>
        </Button>
      </div>
    </footer>
  );
}

export default Footer;

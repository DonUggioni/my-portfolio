import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import classes from './Navbar.module.scss';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.img_container}>
        <NavLink to="/">
          <img src={logo} alt={'Logo'} />
        </NavLink>
      </div>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to={'/portfolio'}>Portfolio</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

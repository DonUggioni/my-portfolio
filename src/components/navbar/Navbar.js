import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';

import logo from '../../assets/images/logo_copia.png';
import classes from './Navbar.module.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navClasses = isOpen
    ? `${classes.nav__list} ${classes.visible}`
    : `${classes.nav__list}`;

  function menuHandler() {
    setIsOpen(() => !isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className={classes.nav}>
      <div className={classes.img_container} onClick={closeMenu}>
        <NavLink to="/">
          <img src={logo} alt={'Logo'} />
        </NavLink>
      </div>
      <ul className={navClasses}>
        <li className={classes.nav__item} onClick={closeMenu}>
          <NavLink
            to={'/about'}
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            About
          </NavLink>
        </li>
        <li className={classes.nav__item} onClick={closeMenu}>
          <NavLink
            to={'/portfolio'}
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Portfolio
          </NavLink>
        </li>
        <li className={classes.nav__item} onClick={closeMenu}>
          <NavLink
            to={'/contact'}
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className={classes.hamburger_container} onClick={menuHandler}>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={28}
          duration={0.3}
        />
      </div>
    </nav>
  );
}

export default Navbar;

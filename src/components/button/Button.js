import React from 'react';

import classes from './Button.module.scss';

function Button({ children }) {
  return <button className={classes.button}>{children}</button>;
}

export default Button;

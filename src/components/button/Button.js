import React from 'react';

import classes from './Button.module.scss';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={classes[props.className]}
      type={props.type}
    >
      {props.children}
    </button>
  );
}

export default Button;

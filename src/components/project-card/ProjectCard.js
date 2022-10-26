import React from 'react';
import Button from '../button/Button';

import classes from './ProjectCard.module.scss';

function ProjectCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes['card_image-container']}>
        <img
          src={props.src}
          alt={'Project screenshot'}
          className={classes.image}
        />
      </div>
      <div className={classes.card_content}>
        <h3 className={classes.heading}>{props.heading}</h3>

        <Button className={'button'} onClick={props.clickHandler}>
          More info
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;

import React from 'react';
import Button from '../button/Button';

import classes from './ProjectCard.module.scss';
import DUMMY_IMG from '../../assets/images/dummy_project_img.webp';

function ProjectCard() {
  return (
    <div className={classes.card}>
      <div className={classes['card_image-container']}>
        <img src={DUMMY_IMG} alt={'Random'} className={classes.image} />
      </div>
      <div className={classes.card_content}>
        <h3 className={classes.heading}>Project Title</h3>
        <div className={classes['card_buttons-container']}>
          <Button>More info</Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

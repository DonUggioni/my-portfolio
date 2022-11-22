import React from 'react';

import Button from '../button/Button';
import classes from './ProjectCard.module.scss';

function ProjectCard(props) {
  return (
    <div className={classes.projectCard}>
      <div className={classes['projectCard_inner-wrapper']}>
        <div className={classes['projectCard_image-container']}>
          <img
            className={classes.projectCard_img}
            src={props.imgSrc}
            alt={props.alt}
          />
        </div>
        <div className={classes['projectCard_description-container']}>
          <h3 className={classes.projectCard_heading}>{props.title}</h3>
          <p className={classes.projectCard_description}>{props.description}</p>
        </div>
        <div className={classes.buttons_container}>
          <Button className="button_small-font">
            <a href={props.repoLink} className={classes.link}>
              Repositorie
            </a>
          </Button>
          <Button className="button_small-font">
            <a href={props.liveLink} className={classes.link}>
              Live Website
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

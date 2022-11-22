import React from 'react';

import Button from '../button/Button';
import classes from './Modal.module.scss';

function Modal(props) {
  return (
    <div className={classes.modal}>
      <div className={classes['modal_inner-wrapper']}>
        <div className={classes['modal_image-container']}>
          <img
            className={classes.modal_img}
            src={props.imgSrc}
            alt={props.alt}
          />
        </div>
        <div className={classes['modal_description-container']}>
          <h3 className={classes.modal_heading}>{props.title}</h3>
          <p className={classes.modal_description}>{props.description}</p>
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

export default Modal;

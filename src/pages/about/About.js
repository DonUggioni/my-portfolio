import React from 'react';

import Button from '../../components/button/Button';
import { motion } from 'framer-motion';

import my_own_pic from '../../assets/images/renan_copia.jpg';
import classes from './About.module.scss';

function About() {
  return (
    <motion.section
      className={classes.section_wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={classes.info}>
        <div className={classes['info_img-container']}>
          <img className={classes.img} src={my_own_pic} alt={'Renan'} />
        </div>
        <div className={classes.info_content}>
          <h2>About me</h2>
          <p>
            My name is Renan. I build stuff for the internet. I am currently
            based in Portugal but I call myself a citizen of the world since I
            have lived in a few different places of our planet. I got the coding
            bug (no pun intended) around 2020 when I started exploring the tech
            world. Since then, I started to learn how to code on and off until
            February 2022, when I started taking it seriously and decided that I
            wanted to do this for a living. I'm also a musician and part-time
            geek and gamer. The main technologies I use at the moment are HTML5,
            CSS3, SASS, JavaScript and React but I'm always willing to learn new
            things and explore different paths.
          </p>
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
        </div>
      </div>
    </motion.section>
  );
}

export default About;

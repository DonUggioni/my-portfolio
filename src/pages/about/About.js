import React from 'react';

import Button from '../../components/button/Button';

import DUMMY_IMG from '../../assets/images/dummy_about_img.jpg';
import classes from './About.module.scss';

function About() {
  return (
    <section className={classes.section_wrapper}>
      <div className={classes.info}>
        <div className={classes['info_img-container']}>
          <img className={classes.img} src={DUMMY_IMG} alt={'Renan'} />
        </div>
        <div className={classes.info_content}>
          <h2>About me</h2>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. "
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
    </section>
  );
}

export default About;

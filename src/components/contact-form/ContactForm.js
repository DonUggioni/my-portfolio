import React from 'react';
import Button from '../button/Button';
import Footer from '../footer/Footer';

import classes from './ContactForm.module.scss';

function ContactForm() {
  return (
    <section className={classes.form_container}>
      <div className={classes['form_inner-wrapper']}>
        <h3 className={classes.heading}>Contact Me</h3>
        <form className={classes.form}>
          <label>Name</label>
          <input type="text" name="user_name" required />

          <label>Email</label>
          <input type="email" name="user_email" required />

          <label>Message</label>
          <textarea name="message" rows="6" required />

          <Button className="button_border" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default ContactForm;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Button from '../button/Button';
import Footer from '../footer/Footer';

import classes from './ContactForm.module.scss';

function ContactForm() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  function Message(props) {
    return (
      <div className={classes.message_container}>
        <h2>{props.message}</h2>
      </div>
    );
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ffphtqq',
        'template_20ax4n90',
        form.current,
        'SKeN1W0pSgyJKlshZ'
      )
      .then(
        (result) => {
          result && setMessageSent(true);
        },
        (error) => {
          error && setErrorMessage(true);
        }
      );
  };

  return (
    <section className={classes.form_container}>
      <div className={classes['form_inner-wrapper']}>
        <h3 className={classes.heading}>Contact Me</h3>
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
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
        {messageSent && <Message message={'Thank you!'} />}
        {errorMessage && <Message message={'Something went wrong'} />}
      </div>
      <Footer />
    </section>
  );
}

export default ContactForm;

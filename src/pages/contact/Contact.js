import React from 'react';

import ContactForm from '../../components/contact-form/ContactForm';
import Footer from '../../components/footer/Footer';

import classes from './Contact.module.scss';

function Contact() {
  return (
    <section className={classes.section_wrapper}>
      <ContactForm />
      <Footer />
    </section>
  );
}

export default Contact;

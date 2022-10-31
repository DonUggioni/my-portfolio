import React from 'react';
import { motion } from 'framer-motion';

import ContactForm from '../../components/contact-form/ContactForm';
import Footer from '../../components/footer/Footer';

import classes from './Contact.module.scss';

function Contact() {
  return (
    <motion.section
      className={classes.section_wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ContactForm />
      <Footer />
    </motion.section>
  );
}

export default Contact;

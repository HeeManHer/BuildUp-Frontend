import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {init} from 'emailjs-com';
import {send} from 'emailjs-com';

  const ContactUs = () => {
  const form = useRef();

  let getRandom = () => Math.floor((Math.random() * (10000 - 1000) + 1));

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xluvtoy', 'template_sq413sg', e.target, 'MwGyfeio0bCJsAvsh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>message{getRandom}</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
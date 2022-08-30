import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wgg0gvg', 'template_qwrfdub', form.current, '1hwlFzGZFu9BPa8dB')
      .then((result) => {
          e.target.reset();
      }, (error) => {
          alert("Kindly Try Again");
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option_icon' />
            <h4>Email</h4>
            <h5>zain@khan.com</h5>
            <a href="mailto:zain@khan.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option_icon' />
            <h4>Messenger</h4>
            <h5>Zain Khan</h5>
            <a href="https://m.me/zainkhanfacebook" target="_blank">Send a message</a>
          </article><article className="contact__option">
            <BsWhatsapp className='contact__option_icon' />
            <h4>WhatsApp</h4>
            <h5>009234565465</h5>
            <a href="https://api.whatsapp.com/send?phone=923042242244" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-prmary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
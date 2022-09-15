import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rfg3fvq",
        "template_uilxfkq",
        form.current,
        "PdWvVStuZBmKIvfqv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>mayureshbailurkar@gmail.com</h5>
            <a href="mailto:mayureshbailurkar@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className="contact_option_icon" />
            <h4>WhatApp</h4>
            <h5>Let's Connect</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917019021346"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" onClick={sendEmail}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

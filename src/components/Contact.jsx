import React from "react";
import "../styles/Contact.scss";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a className="icons" href="mailto:sid.phadke@outlook.com">
          <MdEmail size="2em"/>
        </a>
        <a className="icons" href="https://www.linkedin.com/in/siddharth3620/">
          <FaLinkedin size="2em"/>
        </a>
      </div>
    </section>
  );
}

export default Contact;

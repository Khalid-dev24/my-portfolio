import React, { useRef, useState } from "react";
import { FaArrowRight, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        'service_5buuhh9',
        'template_11bq35f',
        form.current,
        'qbzZ1UHRz2PFvCMru'
      );
      form.current.reset();
      setStatus("Thanks, your message has been sent.");
    } catch {
      setStatus("Your message could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-page" id="contact">
      <div className="contact-ticker" aria-hidden="true">
        <div className="contact-ticker-track">
          <span>GOOD WORK STARTS WITH A CONVERSATION</span>
          <span>GOOD WORK STARTS WITH A CONVERSATION</span>
          <span>GOOD WORK STARTS WITH A CONVERSATION</span>
          <span>GOOD WORK STARTS WITH A CONVERSATION</span>
        </div>
      </div>
      <div className="contact-layout">
        <div className="contact-copy" data-reveal>
          <p className="contact-eyebrow">Have a good one in mind?</p>
          <h2 className="contact-title">
            <span className="contact-title-line">Let's make</span>
            <span className="contact-title-line"><em>something</em></span>
            <span className="contact-title-line">matter.</span>
          </h2>
          <p className="contact-intro">Tell me what you are building, untangling, or dreaming up. I would love to hear about it.</p>
          <div className="contact-direct-links">
            <a href="mailto:khalidmisbaudeen04@gmail.com">
              <FaEnvelope aria-hidden="true" />
              khalidmisbaudeen04@gmail.com
              <FaArrowRight className="contact-link-arrow" aria-hidden="true" />
            </a>
            <a href="tel:+2349020486602">
              <FaPhone aria-hidden="true" />
              +234 902 048 6602
              <FaArrowRight className="contact-link-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendEmail} ref={form} data-reveal>
          <p className="contact-form-heading">Or send a message <span>01 / 02</span></p>
          <label>
            <span>Your name</span>
            <input type="text" name="name" autoComplete="name" placeholder="Jane Smith" required />
          </label>
          <label>
            <span>Email address</span>
            <input type="email" name="email" autoComplete="email" placeholder="jane@company.com" required />
          </label>
          <label>
            <span>What are you working on?</span>
            <textarea name="message" rows="4" placeholder="A few details to get us started..." required />
          </label>
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send the details"}
            <FaArrowRight aria-hidden="true" />
          </button>
          <p className="form-status" aria-live="polite" role="status">{status}</p>
        </form>
      </div>
    </section>
  );
}


export default Contact;
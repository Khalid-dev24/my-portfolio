import React, { useRef } from "react";
import "../index.css";
import "../responsiveness.css";
import emailjs from 'emailjs-com';


function Contact () {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5buuhh9',
      'template_11bq35f',
      form.current,
      'qbzZ1UHRz2PFvCMru'
    ).then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message. Please try again.");
    });

    e.target.reset(); 
 };

    return (
        <section className="contact-page" id="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p>If you have any questions or would like to get in touch, feel free to reach out!</p>
                <form className="contact-form" onSubmit={sendEmail} ref={form}>
                    <input type="text" name= "name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit" >Send Message</button>
                </form>
            </div>
        </section>
    );
};


export default Contact;
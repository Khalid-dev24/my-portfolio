import React from "react";
import "../index.css";
import "../responsiveness.css";


function Contact () {
    return (
        <section className="contact-page" id="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p>If you have any questions or would like to get in touch, feel free to reach out!</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};


export default Contact;
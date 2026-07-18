import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import portfolioData from "../data/portfolioData";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v2w8k4d", // Service ID
        "template_8nhjx3i", // Template ID
        form.current,
        "iuJ9nUz3wfZaqdcmH", // Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully! Thank you for reaching out. I'll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("❌ Failed to send message. Please try again.");  
        },
      );
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="container contact-container">
        <div className="contact-left">
          <p className="small-heading">CONTACT</p>

          <h2 className="section-title">Let's Connect</h2>

          <p className="contact-text">
            I'm always open to discussing new opportunities, collaborations,
            internships, or simply connecting with like-minded people.
          </p>

          <div className="contact-card">
            <FaEnvelope />
            <span>{portfolioData.personal.email}</span>
          </div>

          <div className="contact-card">
            <FaPhoneAlt />
            <span>{portfolioData.personal.phone}</span>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />
            <span>{portfolioData.personal.location}</span>
          </div>

          <div className="contact-buttons">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a href="/resume.pdf" className="primary-btn" download>
              <FaFileDownload />
              Resume
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input type="text" name="subject" placeholder="Subject" required />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

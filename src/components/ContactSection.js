import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "./ContactSection.css";

const ContactSection = () => {
  useEffect(() => {
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        let valid = true;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
          valid = false;
        }

        if (valid) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Form Has Been Sent",
            showConfirmButton: false,
            timer: 1500,
          });

          setTimeout(() => {
            document.getElementById("contactForm").reset();
          }, 1500);
        }
      });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-description">
            We'd love to hear from you. Reach out to us with any questions or
            inquiries.
          </p>
        </motion.div>
        <motion.form
          id="contactForm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="contact-form"
        >
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea id="message" className="form-input" rows="4"></textarea>
          </div>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css'; // Import your CSS file

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            Omkar Industries has been a leader in the industry, providing quality products and services for over 20 years. Our commitment to innovation and excellence has made us a trusted name in the market.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

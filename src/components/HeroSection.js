import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css'; // Import your CSS file

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container mx-auto hero-content">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <h1 className="hero-title">Welcome to Omkar Industries</h1>
          <p className="hero-subtitle">
            Leading the industry with quality and innovation
          </p>
          <a href="#about" className="hero-button">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

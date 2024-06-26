import React from 'react';
import { motion } from 'framer-motion';
import './GallerySection.css';
import southImage from '../components/img/image3.jpg';
import southImage2 from '../components/img/image7.jpg';
import southImage3 from '../components/img/image5.jpg';

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="gallery-title">South Indian Sarees</h2>
          <p className="gallery-description">
            Explore our gallery to see the range of products and services we offer.
          </p>
        </motion.div>
        <div className="gallery-grid">
          <motion.div whileHover={{ scale: 1.1 }} className="gallery-item">
            <img src={southImage} alt="Gallery 1" className="gallery-image" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="gallery-item">
            <img src={southImage2} alt="Gallery 2" className="gallery-image" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="gallery-item">
            <img src= {southImage3} alt="Gallery 3" className="gallery-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

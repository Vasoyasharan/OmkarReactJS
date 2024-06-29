import React from 'react';
import { motion } from 'framer-motion';
import './GallerySection.css';

const GallerySection = ({galleryImage}) => {
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
          {galleryImage.map((image, index) => (
          <motion.div 
          key={index}
          whileHover={{ scale: 1.1 }} 
          className="gallery-item">
         <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
         </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
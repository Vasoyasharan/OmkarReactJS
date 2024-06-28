import React from 'react';
import { motion } from 'framer-motion';
import './ProductsSection.css';

const ProductsSection = ({ products }) => {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">North Indian Sarees</h2>
          <p className="text-lg text-gray-700">
            We offer a wide range of products to meet your needs, including high-quality materials and advanced machinery.
          </p>
        </motion.div>
        <div className="product-container">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="max-w-xs mx-4 mb-8 product-card">
              <img src={product.image} alt={product.name} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

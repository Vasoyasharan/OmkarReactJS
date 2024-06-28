import React from 'react';
import NavBar from './components/NavBar.js';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import banarasiImage from './components/img/banarasi.jpeg';
import phulkariImage from './components/img/phulkari.jpeg';
import hardikImage from './components/img/hardik.jpg';
import sharanImage from './components/img/sharan1.jpg';
import shivrajImage from './components/img/shivraj.jpg';
import image3 from './components/img/image3.jpg';
import image5 from './components/img/image5.jpg';
import image7 from './components/img/image7.jpg';

const App = () => {
  const products = [
    {
      name: 'Banarasi Saree',
      description: 'High-quality product with advanced features.',
      image: banarasiImage,
    },
    {
      name: 'Phulkari Saree',
      description: 'Durable and reliable, perfect for your needs.',
      image: phulkariImage,
    },
  ];

  const teamMembers = [
    {
      name: 'Hardik Vanani',
      role: 'CTO',
      image: hardikImage,
    },
    {
      name: 'Sharan Vasoya',
      role: 'CEO',
      image: sharanImage,
    },
    {
      name: 'Shivraj Neoliya',
      role: 'CFO',
      image: shivrajImage,
    },
  ];
  const galleryImage = [image3, image5, image7];


  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProductsSection products={products} />
      <GallerySection galleryImage={galleryImage} />
      <TeamSection teamMembers={teamMembers} />
      <ContactSection />
    </div>
  );
};

export default App;

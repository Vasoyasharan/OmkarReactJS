import React from 'react';
import NavBar from './components/NavBar.js';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default App;

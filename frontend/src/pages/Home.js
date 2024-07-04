import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ImageSlider from '../components/ImageSlider';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import '../css/Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs/>
      <ImageSlider />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;

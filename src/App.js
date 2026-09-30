import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import AllProjects from './components/AllProjects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-950 overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <Hero />
      <FeaturedWork />
      <AllProjects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

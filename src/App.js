// App.js
import React, { useState, useEffect, useCallback } from 'react';
import ParticlesBackground from './ParticlesBackground';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import GlowingCursorTrail from './GlowingCursorTrail';

// Main App Component
const App = () => {
  // State to keep track of the currently active section for navigation highlighting
  const [activeSection, setActiveSection] = useState('home');

  // Function to smoothly scroll to a specific section on the page
  // Memoized with useCallback for performance, especially when passed to child components.
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Update active section after scroll
    }
  }, []); // Empty dependency array means this function is created once

  // Effect hook to handle updating the active navigation section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentActive = 'home'; // Default active section

      // Iterate through sections from bottom to top to determine the most visible one
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          // Check if the section's top is within the upper half of the viewport
          // A buffer of 100px is added to make the active state change a bit earlier
          const sectionTop = section.offsetTop - 100; // Adjust this offset as needed
          const sectionBottom = sectionTop + section.offsetHeight;

          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentActive = sections[i];
            break;
          }
        }
      }
      // Only update state if the active section has truly changed
      if (activeSection !== currentActive) {
        setActiveSection(currentActive);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // Re-run effect if activeSection changes (though it's updated within the effect)

  return (
    // Main container for the entire portfolio application.
    // Tailwind classes: font-inter for a modern font, bg-gray-950 for a very dark background,
    // text-gray-50 for light text. min-h-screen ensures it takes full viewport height.
    // relative and overflow-hidden are crucial for positioning the Particles component as a background.
    <div className="font-inter bg-gray-950 text-gray-50 min-h-screen relative overflow-hidden">
      {/* Particles Background Component - Positioned absolutely to cover the entire background */}
      {/* z-[-1] ensures it stays behind all other content */}
      <GlowingCursorTrail />
      <ParticlesBackground />

      {/* Main content wrapper, positioned above the particles background with a higher z-index */}
      {/* p-4 md:p-8 for responsive padding, max-w-7xl mx-auto for centered content */}
      <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto">
        {/* Header/Navigation Bar - Passes activeSection and scrollToSection as props */}
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />

        {/* Hero Section (Home) - Passes scrollToSection for internal navigation */}
        <Hero scrollToSection={scrollToSection} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default App;

// Hero.js
import React from 'react';
import { ChevronDown } from 'lucide-react'; // Icon for scroll indicator

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-5xl md:text-5xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in-up">
        Hi, I'm Gubbala Mani Varsha
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl animate-fade-in-up delay-200">
        A passionate Web Developer focused on creating intuitive and dynamic web experiences.
      </p>
      <div className="flex space-x-4 animate-fade-in-up delay-400">
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-gray-700 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-600 hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
        >
          Get in Touch
        </button>
      </div>
      {/* Scroll down indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-300"
        aria-label="Scroll down to About section"
      >
        <ChevronDown size={48} />
      </button>
    </section>
  );
};

export default Hero;

// Hero.js
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
    >
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-5xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-xl"
      >
        Hi, I'm Gubbala Mani Varsha
      </motion.h1>

      {/* Typing Text Animation */}
      <TypeAnimation
        sequence={[
          'Web Developer 💻',
          2000,
          'Tech Explorer 🚀',
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
      />

      {/* Buttons */}
      <motion.div
        className="flex space-x-4 mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-800 transition-transform duration-300 transform hover:scale-105"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-gray-700 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-600 hover:text-blue-300 transition-transform duration-300 transform hover:scale-105"
        >
          Get in Touch
        </button>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-300"
        aria-label="Scroll down to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ChevronDown size={48} />
      </motion.button>
    </section>
  );
};

export default Hero;

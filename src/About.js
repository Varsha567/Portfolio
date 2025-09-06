import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        className="bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-gray-700 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h3
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me <User className="inline-block ml-3" size={32} />
        </motion.h3>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <motion.div
            className="md:w-3/3 text-lg text-gray-300 leading-relaxed space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
          >
            {/* Each paragraph animated separately */}
            {[
              "Hi! I'm Varsha Gubbala, a passionate Computer Science student who loves building practical and user-friendly digital experiences. I’m always excited to work on meaningful projects that make a difference.",
"I have a strong interest in problem-solving, software development, and exploring innovative ideas that bridge technology with everyday life.",
"I'm always eager to learn — whether it’s through coding, online courses, or collaborating with others. Outside the tech world, I love expressing my creativity through drawing and sketching.",
  ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

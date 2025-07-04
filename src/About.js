// About.js
import React from 'react';
import { User } from 'lucide-react'; // Icon for About section

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-gray-700 max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center flex items-center justify-center">
          About Me <User className="inline-block ml-3" size={32} />
        </h3>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/3 mb-8 md:mb-0">
            {/* Placeholder image for your profile picture */}
            <img
              src="https://placehold.co/300x300/2A2E3C/B0C4DE?text=Your+Photo"
              alt="Your Profile"
              className="w-full h-auto rounded-full border-4 border-blue-500 shadow-lg object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/2A2E3C/B0C4DE?text=Image+Load+Error"; }}
            />
          </div>
          <div className="md:w-2/3 text-lg text-gray-300 leading-relaxed">
            <p className="mb-4">
              Hello! I'm Varsha Jaiswal, a dedicated web developer with a passion for creating
              responsive, user-friendly, and performant web applications. My journey into web
              development began with a fascination for how digital experiences are crafted,
              leading me to dive deep into front-end and back-end technologies.
            </p>
            <p className="mb-4">
              I specialize in building dynamic interfaces with **React.js** and have experience
              with modern JavaScript (ES6+), HTML5, and CSS3. I'm also proficient in using
              frameworks like **Tailwind CSS** for rapid UI development and have a foundational
              understanding of server-side technologies like Node.js and databases like MongoDB.
            </p>
            <p>
              I thrive on solving complex problems and continuously learning new technologies
              to improve my craft. When I'm not coding, you can find me [mention a hobby or interest, e.g., exploring new hiking trails, reading sci-fi novels, or experimenting with new recipes].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

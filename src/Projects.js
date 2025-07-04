import React from 'react';
import { FolderGit } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'SkillSwap Platform',
      description: 'Developed and deployed a full-stack MERN (MongoDB, Express.js, React, Node.js) web application for skill exchange.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Generative Language API (Gemini)'],
      liveDemoUrl: 'https://skillswap-platform.netlify.app/',
      githubUrl: 'https://github.com/Varsha567/SkillSwap'
    },
    {
      title: 'HireZee',
      description: 'A platform connecting recruiters with job applicants. Featured resume screening and job application functionalities.',
      technologies: ['Streamlit', 'MySQL', 'Python'],
      liveDemoUrl: 'https://github.com/Varsha567/HireZee',
      githubUrl: 'https://github.com/Varsha567/HireZee'
    },
    {
      title: 'CBIT Event Registration',
      description: 'A responsive web application for event registration at CBIT. Designed an intuitive UI with Bootstrap for seamless user experience.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: 'https://placehold.co/600x400/2A2E3C/B0C4DE?text=Event+App',
      liveDemoUrl: 'https://benevolent-pasca-90b5a6.netlify.app/',
      githubUrl: 'https://github.com/Varsha567/CBIT-Event-Registration'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <motion.div
        className="bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-gray-700 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading with animation */}
        <motion.h3
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Projects <FolderGit className="inline-block ml-3" size={32} />
        </motion.h3>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div>
                <h4 className="text-2xl font-semibold text-blue-300 mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4 text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-700 text-blue-100 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:from-blue-700 hover:to-purple-800 transition-all duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-gray-600 hover:text-blue-300 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

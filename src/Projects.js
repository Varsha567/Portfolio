// Projects.js
import React from 'react';
import { FolderGit } from 'lucide-react'; // Icon from lucide-react

const Projects = () => {
  const projects = [
    {
      title: 'SkillSwap Platform',
      description: 'Developed and deployed a full-stack MERN (MongoDB, Express.js, React, Node.js) web application for skill exchange.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Generative Language API (Gemini)'],
      liveDemoUrl: 'https://skillswap-platform.netlify.app/', // Replace with actual URL
      githubUrl: 'https://github.com/Varsha567/SkillSwap' // Replace with actual URL
    },
    {
      title: 'Task Management App',
      description: 'A responsive web application for managing daily tasks with drag-and-drop features, categorization, and due date reminders.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://placehold.co/600x400/2A2E3C/B0C4DE?text=Task+Manager',
      liveDemoUrl: 'https://example.com/task-manager-demo', // Replace with actual URL
      githubUrl: 'https://github.com/yourusername/task-manager-repo' // Replace with actual URL
    },
    {
      title: 'Weather Dashboard',
      description: 'A dynamic weather dashboard that fetches real-time weather data using a public API, displaying current conditions and forecasts.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
      image: 'https://placehold.co/600x400/2A2E3C/B0C4DE?text=Weather+App',
      liveDemoUrl: 'https://example.com/weather-demo', // Replace with actual URL
      githubUrl: 'https://github.com/yourusername/weather-repo' // Replace with actual URL
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-gray-700 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center flex items-center justify-center">
          My Projects <FolderGit className="inline-block ml-3" size={32} />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

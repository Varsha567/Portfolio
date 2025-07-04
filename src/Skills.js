// Skills.js
import React from 'react';
import { Code, Layout, Database, Cloud } from 'lucide-react'; // Icons for skills categories

const Skills = () => {
  const skillsCategories = [
    {
      name: 'Frontend Development',
      icon: <Layout size={32} className="text-blue-400" />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Vue.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      name: 'Backend Development',
      icon: <Code size={32} className="text-purple-400" />,
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs']
    },
    {
      name: 'Databases',
      icon: <Database size={32} className="text-green-400" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase Firestore']
    },
    {
      name: 'Tools & Platforms',
      icon: <Cloud size={32} className="text-cyan-400" />,
      skills: ['Git & GitHub', 'VS Code', 'npm/Yarn', 'Webpack', 'Netlify', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-gray-700 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center flex items-center justify-center">
          My Skills <Code className="inline-block ml-3" size={32} />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                {category.icon}
                <h4 className="text-2xl font-semibold text-gray-100 ml-3">{category.name}</h4>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="text-blue-300 mr-2">&bull;</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

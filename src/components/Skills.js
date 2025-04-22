import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaTools, FaBrain } from 'react-icons/fa'; // Icons for categories

// Reusable Skill Category Component
const SkillCategory = ({ title, icon, skills }) => (
  <motion.div 
    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-300 h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
  >
    <div className="flex items-center mb-4">
      {React.createElement(icon, { className: 'text-2xl text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0' })}
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h4>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  // Organize skills into categories
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
      skills: ['C++', 'JavaScript (ES6+)', 'Java','Python',  'C', 'SQL', 'HTML5', 'Dart']
    },
    {
      title: 'Technologies & Frameworks',
      icon: FaLaptopCode,
      skills: ['React', 'Node.js', 'Express', 'MongoDB (MERN)', 'Flutter','CSS3 (Tailwind)','Bootstrap']
    },
    {
      title: 'Developer Tools',
      icon: FaTools,
      skills: ['Git & GitHub', 'VS Code', 'Vercel' /* Add more tools */ ]
    },
    {
      title: 'Other Skills',
      icon: FaBrain,
      skills: ['Problem Solving', 'Project Management', 'Communication', 'Research', 'Time Management']
    }
  ];

  return (
    <div className="mt-16"> {/* Added margin top to separate from Timeline */}
      <h3 className="text-2xl font-semibold text-center text-indigo-600 dark:text-indigo-400 mb-10 drop-shadow-md">Technical Skills</h3>
      {/* Use a responsive grid for the categories */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory 
            key={index} 
            title={category.title} 
            icon={category.icon} 
            skills={category.skills} 
          />
        ))}
      </div>
    </div>
  );
};

export default Skills; 
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const { title, longDescription, imageUrl, tags, liveUrl, repoUrl } = project;
  const [expanded, setExpanded] = useState(false);

  const isEven = index % 2 === 0;
  const textOrder = isEven ? 'md:order-2' : 'md:order-1';
  const imageOrder = isEven ? 'md:order-1' : 'md:order-2';

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className={`flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-4xl lg:max-w-5xl mx-auto transition-colors duration-300`}
      variants={cardVariants}
    >
      <div className={`w-full md:w-1/2 ${imageOrder}`}>
        <img src={imageUrl} alt={`${title} screenshot`} className="w-full h-auto object-contain md:rounded-l-lg md:rounded-r-none" />
      </div>

      <div className={`w-full md:w-1/2 p-6 md:p-10 ${textOrder}`}>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4">{title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
          {expanded ? longDescription : `${longDescription.substring(0, 100)}...`}
        </p>

        <button 
          onClick={() => setExpanded(!expanded)} 
          className="text-blue-600 dark:text-blue-300 hover:underline text-sm transition duration-200 mb-4"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>

        <div className="mb-6">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {liveUrl && liveUrl !== '#' && (
            <motion.a 
              href={liveUrl} target="_blank" rel="noopener noreferrer" 
              className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 py-2 px-5 rounded transition duration-200 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          {repoUrl && repoUrl !== '#' && (
            <motion.a 
              href={repoUrl} target="_blank" rel="noopener noreferrer" 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 py-2 px-5 rounded transition duration-200 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

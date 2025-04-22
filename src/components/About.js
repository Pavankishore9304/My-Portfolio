import React from 'react';
import BioCard from './BioCard';
import Timeline from './Timeline';
import Skills from './Skills';
import { motion } from 'framer-motion';

// Animation for the section container
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-16 md:py-24 transition-colors duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 40, damping: 15, mass: 1 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400 drop-shadow-md">About Me</h2>
        
        <BioCard />
        <Timeline />
        <Skills />
      </div>
    </motion.section>
  );
};

export default About; 
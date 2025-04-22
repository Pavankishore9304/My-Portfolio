import React from 'react';
import profilePic from '../assets/profile.jpg';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Slightly increase stagger for smoother flow
        delayChildren: 0.3,  
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Increased initial y offset
    visible: {
      opacity: 1, y: 0,
      // Smoother spring or longer tween?
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } // Using tween
    }
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-0 overflow-hidden text-gray-800 dark:text-white dark:bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
    >
      {/* Removed the inner absolute div containing the animated glow */}
      
      {/* Main Content Container */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Left Side: Profile Picture - Reverted to simpler version */}
        <motion.div 
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0"
          variants={itemVariants}
        >
          <img
            src={profilePic}
            alt="Pavan Kishore N"
            className="w-full h-full rounded-full object-cover 
                       border-4 border-gray-300 dark:border-gray-700 
                       shadow-xl"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          className="flex flex-col items-center md:items-start text-center md:text-left"
          // Removed variants here, let children animate individually for finer control
        >
          {/* Name Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-gray-900 dark:text-white drop-shadow-md"
            variants={itemVariants}
          >
            PAVAN KISHORE N
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-600 dark:text-gray-300 max-w-xl"
            variants={itemVariants}
          >
            Aspiring Software Engineer | B.Tech Student at PES University | Passionate about ML & Full Stack Development.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start space-x-5 mb-8"
            variants={itemVariants}
          >
            <a href="https://github.com/pavankishore9304" target="_blank" rel="noopener noreferrer" title="GitHub"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <FaGithub size={26} />
            </a>
            <a href="https://linkedin.com/in/pavan-kishore-n" target="_blank" rel="noopener noreferrer" title="LinkedIn"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin size={26} />
            </a>
            <a href="mailto:pavankishore9304@gmail.com" title="Email"
              className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
            >
              <FaEnvelope size={26} />
            </a>
          </motion.div>

          {/* About Me Button */}
          <motion.div
            variants={itemVariants}
          >
            <ScrollLink
              to="about"
              smooth={true}
              duration={800}
              offset={-70}
              className="bg-indigo-600 text-white hover:bg-indigo-700 
                         dark:bg-indigo-500 dark:hover:bg-indigo-600 
                         font-semibold py-3 px-8 rounded-md 
                         transition-all duration-300 ease-in-out 
                         cursor-pointer shadow-md hover:shadow-lg"
            >
              Learn More About Me
            </ScrollLink>
          </motion.div>

        </motion.div> { /* End Right Side */ }

      </motion.div> { /* End Main Content Container */ }

      {/* REMOVED original glassmorphic card div */}
      
    </motion.section>
  );
};

export default Hero;

// You can now safely remove the .perspective CSS rule from your global CSS file.

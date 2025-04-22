import React from 'react';
import { motion } from 'framer-motion';
// Import icons
import { FaGraduationCap, FaBriefcase, FaAward, FaCode, FaDownload, FaLanguage, FaUserTie } from 'react-icons/fa'; 
import { useTheme } from '../context/ThemeContext';

// Reusable Section Component
const ResumeSection = ({ title, icon, children }) => (
  <motion.div 
    className="mb-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
      {React.createElement(icon, { className: 'mr-4 text-blue-600 dark:text-blue-300 text-3xl flex-shrink-0' })}
      <span>{title}</span>
    </h3>
    <div className="pl-6 border-l-2 border-blue-300 dark:border-white/20 ml-[1.8rem] space-y-6">
      {children}
    </div>
  </motion.div>
);

// Reusable Item Component
const ResumeItem = ({ title, subtitle, description }) => (
  <motion.div 
    className="relative pl-8 before:absolute before:left-[-0.7rem] before:top-[0.3rem] before:w-4 before:h-4 before:bg-white dark:before:bg-gray-900 before:border-2 before:border-blue-600 dark:before:border-blue-400 before:rounded-full"
    initial={{ opacity: 0, x: 15 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.4 }}
  >
    <h4 className="text-lg font-semibold text-gray-700 dark:text-white mb-0.5">{title}</h4>
    {subtitle && <p className="text-sm text-blue-700 dark:text-blue-300 font-medium mb-1">{subtitle}</p>}
    {description && <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>}
  </motion.div>
);

const Resume = () => {
  const { theme } = useTheme();

  // Data extracted from your provided resume info
  const education = [
    { title: 'Bachelor of Technology, CSE', subtitle: 'PES University, Bangalore (2022 - Present)', description: 'CGPA: 7.84' },
    { title: 'Class XII (HSC)', subtitle: '2021 - 2022', description: 'Percentage: 90.84%' },
    { title: 'Class X (SSC)', subtitle: '2020', description: 'Percentage: 86.08%' },
  ];

  const projects = [
    { title: 'Career Crafter - Job Portal', subtitle: 'MERN Stack (2024)', description: 'Developed a full-stack job portal focused on UI/UX and database management.' },
    { title: 'Vanilla JS Piano', subtitle: 'HTML, CSS, JavaScript(2025)', description: 'A dynamic piano application built with Vanilla JavaScript, capable of playing melodies like Fur Elise.' },
    { title: 'Hotel Management System', subtitle: 'C, Data Structures (2024)', description: 'Managed hotel operations using C and linked lists.' },
    
  ];

  const certifications = [  
    { title: 'Udemy Certified Python Developer' },
    { title: 'Full Stack Web Development (Udemy)' },
    { title: 'HackerRank Problem Solving (C) - Intermediate/Basic' },
    { title: 'Hackathon Top 10 Winning Certification' },
  ];

  const skills = {
    languages: 'Python, C, C++, Java, SQL, JavaScript, Dart',
    technologies: 'MERN Stack (MongoDB, Express, React, Node.js), Flutter',
    tools: 'Git, GitHub',
    other: 'Problem Solving, Research, Project management, Communication, Time management',
  };

  const languagesKnown = 'English, Kannada, Telugu, Tamil';  
  const languagesUnderstanding = 'Hindi (Understandable)';


  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
  };

  return (
    <motion.section 
      id="resume"
      className="py-16 md:py-24 transition-colors duration-300"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400 drop-shadow-md">Resume</h2>

        <motion.div 
          className="relative bg-white/60 dark:bg-white/5 backdrop-blur-lg 
                     border border-gray-200 dark:border-white/10 
                     rounded-xl shadow-lg dark:shadow-black/30 
                     p-6 md:p-10 transition-all duration-300 
                     hover:shadow-xl dark:hover:shadow-blue-500/30 
                     hover:border-gray-300 dark:hover:border-blue-400/50
                     transform hover:-translate-y-1"
          style={{ perspective: '1000px' }}
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ResumeSection title="Education" icon={FaGraduationCap}>
            {education.map((item, index) => <ResumeItem key={index} {...item} />)}
          </ResumeSection>

          <ResumeSection title="Project Work" icon={FaBriefcase}>
            {projects.map((item, index) => <ResumeItem key={index} {...item} />)}
          </ResumeSection>

          <ResumeSection title="Skills" icon={FaCode}>
             <ResumeItem title="Programming Languages" description={skills.languages} />
             <ResumeItem title="Technologies" description={skills.technologies} />
             <ResumeItem title="Tools" description={skills.tools} />
             <ResumeItem title="Other Skills" description={skills.other} />
          </ResumeSection>
          
          <ResumeSection title="Languages Known" icon={FaLanguage}>
            <ResumeItem title="Fluent / Proficient" description={languagesKnown} />
            <ResumeItem title="Understanding Only" description={languagesUnderstanding} />
          </ResumeSection>

          <ResumeSection title="Certifications" icon={FaAward}>
            {certifications.map((item, index) => <ResumeItem key={index} {...item} />)}
          </ResumeSection>

          <motion.a
            href="/Pavan_Kishore_N_Resume.pdf"
            download
            className={`mt-12 inline-block px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 
                        bg-blue-600/90 dark:bg-blue-500/70 
                        hover:bg-blue-700 dark:hover:bg-blue-600/80
                        shadow-lg`}
            whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="inline mr-2 -mt-1"/>
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume; 
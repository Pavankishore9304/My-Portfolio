import React from 'react';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const timelineData = [
  {
    type: 'Education',
    icon: AcademicCapIcon,
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'PES University, Bangalore',
    date: '2022 – 2026',
    description: 'Focusing on core CS subjects, ML, App Development and Full Stack Development.'
  },
  {
    type: 'Education',
    icon: AcademicCapIcon,
    title: 'Pre-University Course',
    institution: 'SDC Independent PU College, KGF',
    date: '2022',
    description: 'Completed 12th grade with focus on Physics, Chemistry, Mathematics, and Biology.'
  },
  {
    type: 'Education',
    icon: AcademicCapIcon,
    title: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'BEML High School, KGF',
    date: '2020',
    description: 'Completed 10th grade.'
  },
];

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="mb-8 flex justify-between items-center w-full"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`order-1 w-5/12 ${isLeft ? 'md:order-1' : 'md:order-3'}`}></div>
      <div className="z-20 flex items-center order-2 bg-blue-600 dark:bg-blue-400 shadow-xl w-10 h-10 rounded-full">
        <item.icon className="mx-auto text-white w-5 h-5" />
      </div>
      <motion.div 
        className={`order-3 md:order-${isLeft ? 3 : 1} w-5/12 px-6 py-4 
                   bg-white dark:bg-white/5 dark:backdrop-blur-md 
                   dark:border dark:border-white/10 
                   rounded-lg shadow-xl dark:shadow-lg transition-colors duration-300`}
        whileHover={{ scale: 1.03 }}
      >
        <h3 className="mb-2 font-bold text-gray-800 dark:text-white text-lg md:text-xl">{item.title}</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-blue-600 dark:text-blue-300 mb-1">{item.institution}</p>
        <p className="text-xs leading-snug tracking-wide text-gray-500 dark:text-gray-400 mb-3">{item.date}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const educationItems = timelineData.filter(item => item.type === 'Education');

  return (
    <div className="relative wrap overflow-hidden p-4 md:p-10 h-full mb-16">
      <h3 className="text-2xl font-semibold text-center text-indigo-600 dark:text-indigo-400 mb-10 drop-shadow-md">Education Timeline</h3>
      <div className="border-2-2 absolute border-opacity-20 border-blue-400 dark:border-blue-700 h-full border" style={{ left: '50%' }}></div>

      {educationItems.map((item, index) => (
        <TimelineItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default Timeline; 
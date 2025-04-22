import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaGithub, FaTimes, FaArrowRight } from 'react-icons/fa';
import ProjectDetailModal from './ProjectDetailModal';
import { useTheme } from '../context/ThemeContext';

// --- Actual Project Data --- 
const allProjects = [
  {
    id: 1,
    title: 'Career Crafter - Job Portal',
    description: 'Developed a full-stack job portal emphasizing UI/UX, database management, and responsive design.',
    detailedDescription: `Career Crafter is a comprehensive job portal built using the MERN stack (MongoDB, Express.js, React, Node.js). The project focused on creating an intuitive user interface for job seekers. Key features include user authentication, profile management, job posting and application workflows and an admin dashboard. Emphasis was placed on database schema design for efficiency and scalability, along with implementing RESTful APIs for seamless front-end and back-end communication. The front-end was built with React, utilizing components and state management for a dynamic user experience.

### Key Features

*   ➤ Beautiful UI/UX – Fully responsive, modern, and user-friendly interface.
*   ➤ Jobs Page – Displays job listings with category, location, and experience filters.
*   ➤ Companies Page – Showcases company profiles and job openings.
*   ➤ Profile Page – Allows users to create, update, and manage their profiles.
*   ➤ About Page – Provides an overview of the platform's mission and goals.
*   ➤ Application System – Users can apply for jobs.
*   ➤ Real-time Updates – Sends notifications for job applications and approvals.

### Technologies Used

*   React.js – Frontend library for building dynamic and interactive UI.
*   Node.js – Backend runtime for handling server-side operations efficiently.
*   Express.js – Lightweight framework for building fast and scalable REST APIs.
*   MongoDB – NoSQL database for managing job listings, users, and applications.
*   CSS  – Styles the UI with responsive layouts and animations.
`,
    imageUrl: '/images/jobplatform.png', // Main image for the card
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS', 'MERN', 'Full-Stack'],
    liveUrl: null,
    githubUrl: 'https://github.com/pavankishore9304/job_portal_react_node', 
    screenshots: ['/images/jobplatform.png','/images/login.png', '/images/jobs.png', '/images/companies.png'] // For modal gallery
  },
  {
    id: 2,
    title: 'Vanilla JS Piano',
    description: 'A dynamic piano application built with Vanilla JavaScript, capable of playing melodies like Fur Elise.',
    detailedDescription: `This project showcases the power of Vanilla JavaScript to create interactive user interfaces. It features a clickable piano keyboard that plays corresponding notes. The application includes logic to play pre-programmed melodies like Beethoven's Fur Elise, demonstrating event handling, DOM manipulation, and audio integration using the Web Audio API or HTML5 Audio elements.`,
    imageUrl: '/images/piano.png',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Web Audio API'],
    liveUrl: null,
    githubUrl: '#', // Replace if you have a link
    screenshots: ['/images/piano.png', '/images/furelisa.png']
  },
  {
    id: 3,
    title: 'Hotel Management System',
    description: 'Designed a command-line hotel management system in C utilizing linked lists for efficient data handling.',
    detailedDescription: `A console-based application developed in C to simulate the core operations of a hotel management system. This project heavily utilized fundamental data structures, particularly linked lists, to manage guest records, room availability, bookings, and check-ins/check-outs. The focus was on efficient memory management and algorithmic logic within the constraints of the C language. It provides functionalities like adding new guests, searching for guest records, displaying room status, and managing reservations, checkin and checkout etc.`,
    imageUrl: '/images/dsa.png',
    tags: ['C', 'Data Structures', 'Linked Lists', 'CLI'],
    liveUrl: null,
    githubUrl: 'https://github.com/pavankishore9304/Hotel_Management_System', 
    screenshots: ['/images/dsa1.png', '/images/dsa2.png', '/images/dsa3.png']
  },
];
// --- End Actual Project Data ---

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useTheme();

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = ''; // Restore scroll
  };

  // Refined transition for smoother block entrance
  const projectBlockVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, // Start slightly further down
    },
    visible: (index) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.9, // Increased duration 
        // Smoother cubic-bezier curve (starts faster, ends slower)
        ease: [0.16, 1, 0.3, 1], 
        // Slightly increased stagger delay for more flow
        delay: index * 0.18 
      } 
    })
  };
  
  return (
    <motion.section 
      id="projects"
      className="py-16 md:py-24 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-5xl">
        {/* Refined heading animation */}
        <motion.h2 
          className="text-3xl md:text-4xl font-semibold text-center mb-16 text-indigo-600 dark:text-indigo-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }} // Smoother ease
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-16 md:space-y-20"> 
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id} 
              className="overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 transform-gpu" 
              variants={projectBlockVariants}
              initial="hidden"
              whileInView="visible"
              custom={index} 
              viewport={{ once: true, amount: 0.15 }} 
            >
              {/* Image Container - No overlay needed now */}
              <div className="relative aspect-video overflow-hidden"> 
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} screenshot`} 
                  className="absolute inset-0 w-full h-full object-cover transform-gpu" 
                  onError={(e) => { e.target.onerror = null; e.target.src='https://via.placeholder.com/1200x800/e2e8f0/9ca3af?text=Image+Not+Found'; }} 
                />
                {/* Removed the Reveal Overlay motion.div */}
              </div>

              {/* Text Content Below Image - No motion wrapper needed */}
              <div
                className="p-6 md:p-8"
                // Removed variants from here
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-base leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links & Button */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo"
                        className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-100 transition duration-200 flex items-center gap-1 text-sm font-medium"
                      >
                        <FaLink /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repo"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 transition duration-200 flex items-center gap-1 text-sm"
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => openModal(project)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors duration-200 group"
                  >
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div> // End main project block
          ))}
        </div>
      </div>

      {/* Modal (ensure it uses detailedDescription and screenshots) */}
      <ProjectDetailModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        project={selectedProject} 
      />

    </motion.section>
  );
};

export default Projects; 
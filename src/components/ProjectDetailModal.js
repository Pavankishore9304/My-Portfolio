import React, { useState, useEffect, useCallback } from 'react';
// Import framer-motion components and wrap function
import { motion, AnimatePresence, wrap } from 'framer-motion'; 
// ... other imports ...
import { FaTimes, FaLink, FaGithub, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

// --- Framer Motion Variants ... ---
const variants = {
  enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 })
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { 
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    opacity: 0, scale: 0.95, y: -20, 
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  },
};
// --- End Variants ---

const ProjectDetailModal = ({ isOpen, onClose, project }) => {
  // --- Hooks --- 
  // Removed imagePage, direction, isAutoPlayPaused state as carousel is gone
  // const [[imagePage, direction], setImagePage] = useState([0, 0]); // REMOVED
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageSrc, setLightboxImageSrc] = useState('');
  // const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false); // REMOVED

  // --- Image processing remains similar ---
  const primaryImage = project?.imageUrl || '#';
  const allImages = [primaryImage, ...(project?.screenshots || [])].filter(img => img && img !== '#');
  const uniqueImages = [...new Set(allImages)]; 
  const imageCount = uniqueImages.length;
  // const imageIndex = wrap(0, imageCount, imagePage); // REMOVED - No longer needed for carousel index

  // --- Callbacks --- 
  // Removed paginate callback
  // const paginate = useCallback((newDirection) => { ... }, [imagePage]); // REMOVED

  const openLightbox = (src) => {
    setLightboxImageSrc(src);
    setIsLightboxOpen(true);
    // setIsAutoPlayPaused(true); // REMOVED
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImageSrc('');
  };

  // --- useEffects ---
  // Removed useEffect for autoplay
  // useEffect(() => { ... }, [imageCount, isAutoPlayPaused, paginate]); // REMOVED

  useEffect(() => {
    // Escape key logic (remains the same)
    const handleEscape = (event) => { if (event.key === 'Escape') { onClose(); } };
    if (isOpen) { document.addEventListener('keydown', handleEscape); }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]); 

  // --- Early exit --- 
  if (!project) { return null; }

  // Helper to render markdown-like text safely
  const renderMarkdownParagraph = (paragraph, pIdx) => {
    // Heading - Make green
    if (paragraph.startsWith('### ')) {
      return <h3 key={pIdx} className="text-xl font-semibold mt-5 mb-2 text-green-600 dark:text-green-400">{paragraph.substring(4)}</h3>;
    }
    // Unordered List - Remove bullets
    if (paragraph.startsWith('*   ')) {
      const listItems = paragraph.split('\n*   ').map(item => item.replace(/^\*\s*/, ''));
      return (
        <ul key={pIdx} className="list-none space-y-2 mt-2 mb-3 pl-0">
          {listItems.map((item, lIdx) => (
            <li key={lIdx} dangerouslySetInnerHTML={{ 
              __html: item
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/`(.*?)`/g, '<code class="text-sm font-mono bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">$1</code>')
            }}></li>
          ))}
        </ul>
      );
    }
    // Regular paragraph (already left-aligned)
    return <p key={pIdx} className="whitespace-pre-line mb-3">{paragraph}</p>;
  };

  // Component JSX follows...
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex items-center justify-center p-4 transform-gpu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={onClose}
        >
          <motion.div
            key="modal"
            className="relative bg-white/95 dark:bg-gray-800/90 backdrop-blur-lg rounded-xl shadow-2xl w-full max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700/50 transform-gpu"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 md:p-5 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                {project.title}
              </h3>
              <button 
                onClick={onClose} 
                className="text-gray-400 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white rounded-lg text-sm p-1.5 inline-flex items-center transition-colors duration-200"
                aria-label="Close modal"
              > 
                <FaTimes className="w-5 h-5"/> 
              </button>
            </div>
            
            {/* Modal Content Area (Scrollable + Flex Layout for Columns) */}
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
              <div className="p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                
                {/* Left Column (Vertical Image List) */}
                <div className="lg:sticky lg:top-6 mb-6 lg:mb-0 self-start space-y-4">
                  {imageCount > 0 ? (
                    uniqueImages.map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        className="relative w-full aspect-video bg-slate-100/80 dark:bg-gray-700/50 rounded-lg overflow-hidden shadow-md cursor-pointer group transform-gpu"
                        whileHover={{ scale: 1.03, zIndex: 10 }}
                        onClick={() => openLightbox(imgSrc)}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                          delay: index * 0.08
                        }}
                      >
                        <img
                          src={imgSrc}
                          alt={`${project.title} Screenshot ${index + 1}`}
                          className="absolute w-full h-full object-contain"
                        />
                        {/* Optional: Overlay + Magnify Icon on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                      No images available.
                    </div>
                  )}
                </div>

                {/* Right Column (Details) - Add motion wrapper for left-to-right transition */}
                <motion.div 
                  className="space-y-6 transform-gpu"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Detailed Description Section */}
                  <div>
                     <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">Project Overview</h4>
                     <div className="max-w-none mt-3 text-gray-600 dark:text-gray-300 text-left">
                       {project.detailedDescription?.split('\n\n').map(renderMarkdownParagraph)}
                     </div>
                  </div>

                  {/* Tags Section - Improved Styling */}
                  <div>
                     <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">Technologies Used</h4>
                     <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bg-indigo-100 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-3 py-1.5 rounded-md shadow-sm border border-indigo-200 dark:border-indigo-700/50">
                          {tag}
                        </span>
                      ))}
                     </div>
                  </div>

                  {/* Links Section - Moved to Details Column */}
                   <div>
                     <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">Links</h4>
                     <div className="flex flex-wrap gap-4 mt-3">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo"
                            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-md shadow hover:shadow-md transition-all duration-200"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <a 
                            href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repo"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded-md shadow hover:shadow-md transition-all duration-200"
                          >
                            <FaGithub /> View Code
                          </a>
                        )}
                     </div>
                     {/* Message if no links */}
                     {!project.liveUrl && (!project.githubUrl || project.githubUrl === '#') && (
                         <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 italic">No external links available for this project.</p>
                     )}
                   </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* Lightbox - Improved Styling (Optional: Consider a dedicated library later) */}
      {isLightboxOpen && ( 
        <motion.div 
          key="lightbox-backdrop"
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeLightbox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={lightboxImageSrc}
            alt="Lightbox view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            onClick={(e) => e.stopPropagation()}
          />
           <button 
              onClick={closeLightbox} 
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors duration-200"
              aria-label="Close lightbox"
            > 
              <FaTimes className="w-6 h-6"/> 
            </button>
        </motion.div> 
      )}
    </AnimatePresence>
  );
};

// Add the missing default export
export default ProjectDetailModal;
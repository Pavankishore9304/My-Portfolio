import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger after scrolling 50px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []); // Run only once on mount

  const navItems = ['home', 'about', 'projects', 'resume', 'contact'];

  // Define base classes
  const baseNavClass = "fixed w-full top-0 left-0 z-30 transition-all duration-300 ease-in-out";
  // Define scrolled classes with corrected light mode background and text
  const scrolledNavClass = "bg-gray-100/90 dark:bg-black/50 backdrop-blur-lg shadow-md dark:shadow-lg border-b border-gray-200/50 dark:border-white/10";
  // Define non-scrolled classes with a subtle bottom border for separation
  const nonScrolledNavClass = "bg-transparent border-b border-gray-900/10 dark:border-white/10"; // Subtle dark border in light, subtle white in dark

  // Determine text color based on scroll state AND theme
  const getTextColor = () => {
    if (isScrolled) {
      return 'text-gray-800 dark:text-white'; // Scrolled: Correct colors based on theme
    } else {
      // Not Scrolled (over Hero): Check theme
      return theme === 'light' ? 'text-gray-800' : 'text-white'; // Dark text for light theme, White for dark
    }
  };

  const getLinkColor = () => {
    if (isScrolled) {
      return 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white'; // Scrolled: Correct colors
    } else {
      // Not Scrolled (over Hero): Check theme
      return theme === 'light' 
        ? 'text-gray-700 hover:text-blue-600' // Darker gray for light theme
        : 'text-gray-200 hover:text-white';   // Light gray for dark theme
    }
  };

  const getLinkActiveClass = () => {
    if (isScrolled) {
      return '!text-blue-600 dark:!text-blue-400'; // Scrolled: Blue active
    } else {
      // Not Scrolled (over Hero): Check theme for active color
      return theme === 'light'
        ? '!text-blue-700 underline underline-offset-4 decoration-blue-700' // Dark blue active for light theme
        : '!text-white underline underline-offset-4 decoration-white';    // White active for dark theme
    }
  };

  const getToggleColor = () => {
    if (isScrolled) {
      return 'text-gray-600 hover:text-blue-600 hover:bg-gray-200/50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10 focus:ring-blue-500'; // Scrolled: Correct colors
    } else {
      // Not Scrolled (over Hero): Check theme
      return theme === 'light' 
        ? 'text-gray-700 hover:text-blue-600 hover:bg-black/5' // Dark toggle for light theme
        : 'text-gray-200 hover:text-white hover:bg-white/10 focus:ring-white'; // Light toggle for dark theme
    }
  }

  return (
    <nav 
      className={`${baseNavClass} ${isScrolled ? scrolledNavClass : nonScrolledNavClass}`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        {/* Left Group: Profile Image */}
        <motion.img
            src="/images/my-pic3.jpg" 
            alt="Pavan Kumar Profile Picture"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 shadow-sm" // Kept larger size w-12 h-12
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        />

        {/* Right Group: Links + Toggle (Clock removed) */}
        <div className="flex items-center space-x-4 md:space-x-6"> 
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70} 
                  duration={500}
                  className={`capitalize cursor-pointer font-medium transition-colors duration-200 ${getLinkColor()}`}
                  activeClass={getLinkActiveClass()}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle (Clock is removed from here) */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent ${getToggleColor()}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>

          {/* Profile Image removed from here */}
        </div>
        
        {/* TODO: Add Mobile Menu Button Here later */}

      </div>
    </nav>
  );
};

export default Navbar; 
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Clock = () => {
  const { theme } = useTheme();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const textColor = theme === 'light' ? 'text-gray-700' : 'text-gray-300';
  const bgColor = theme === 'light' ? 'bg-white/70 backdrop-blur-sm' : 'bg-black/50 backdrop-blur-sm';

  return (
    <motion.div
      className={`fixed bottom-4 right-4 z-20 px-3 py-1.5 rounded-lg shadow-md ${bgColor} ${textColor} text-sm font-mono`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }} // Delay appearance slightly
    >
      {currentTime}
    </motion.div>
  );
};

export default Clock; 
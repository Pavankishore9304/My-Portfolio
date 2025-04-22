import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CursorFader = () => {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const gradientColor = theme === 'light' 
    ? 'rgba(170, 170, 220, 0.2)'
    : 'rgba(120, 120, 240, 0.2)';

  const size = 256;

  return (
    <motion.div
      className={`fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-50 mix-blend-multiply dark:mix-blend-screen transform-gpu`}
      style={{
        x: position.x - size / 2,
        y: position.y - size / 2,
        background: `radial-gradient(circle, ${gradientColor} 0%, transparent 35%)`,
        filter: 'blur(1px)',
        opacity: 1.0
      }}
    />
  );
};

export default CursorFader;

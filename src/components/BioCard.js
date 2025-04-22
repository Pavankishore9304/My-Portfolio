import React from 'react';
import { motion } from 'framer-motion';

const BioCard = () => {
  // Animation for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto bg-white dark:bg-white/5 dark:backdrop-blur-md 
                 dark:border dark:border-white/10 
                 rounded-lg shadow-xl dark:shadow-lg 
                 p-8 md:p-10 mb-16 transition-colors duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-4">
        🌍 Hello, world! I'm Pavan Kishore N, immersed in the world of technology as a Computer Science undergrad at PES University. I thrive on tackling challenging tech puzzles and transforming them into exciting, user-centric solutions. 🎯
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-4">
        From designing web applications like a job portal using the MERN stack to developing secure, interactive games using socket programming, my educational path is decorated with diverse and substantial projects. Alongside these, I prioritize mastering both frontend and backend technologies, ensuring a balanced skill set. 🖥️🛠️
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-4">
        Beyond academics, I've actively contributed to campus life. I was a member of the Kannada Koota in the Public Relations domain, honing my communication and outreach skills. I also participated in the WEAL Club, focusing on the Physical Fitness domain, promoting well-being within the community. 🤝🏋️
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-4">
        👨‍💻Certified in Python by Udemy and crowned in the top 10 at a prestigious hackathon, I am committed to evolving continually in this fast-paced tech sphere. My arsenal includes advanced proficiency in multiple programming languages and the aptitude to manage projects effectively.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-4">
        When I'm not coding, you might find me strategizing over a game of carrom, getting lost in diverse genres of music, or catching up on the latest movies. These interests help me maintain a creative perspective and a balanced approach to problem-solving. 🎶🎬♟️
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
        🌟Are you on the lookout for someone passionate about developing innovative software solutions? Or perhaps, you're in need of a project collaborator? Let's make the digital world more intuitive together! Connect with me here on LinkedIn or take a look at my GitHub projects for more insights into my work.
      </p>
      {/* Optional: Add links to LinkedIn/GitHub here if desired */}
      {/* <div className="mt-6 flex space-x-4">
        <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">LinkedIn</a>
        <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">GitHub</a>
      </div> */}
    </motion.div>
  );
};

export default BioCard; 
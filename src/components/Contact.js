import React from 'react';
import { motion } from 'framer-motion';
// Use original icons
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {

  const contactDetails = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'pavankishore9304@gmail.com',
      href: 'mailto:pavankishore9304@gmail.com'
    },
    {
      icon: FaPhoneAlt,
      title: 'Phone',
      value: '(+91) 8431010385',
      href: 'tel:+918431010385'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Bangalore, India',
      href: null // Or link to Google Maps
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      title: 'GitHub',
      href: 'https://github.com/pavankishore9304' // ** IMPORTANT: Update this **
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/pavan-kishore-n'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      href: 'mailto:pavankishore9304@gmail.com'
    }
    // Add more social links if needed
  ];
  
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      id="contact"
      className="py-16 md:py-24 transition-colors duration-300"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div 
        className="container mx-auto px-4 max-w-4xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400 drop-shadow-md">Get In Touch</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactDetails.map((detail, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-white/5 dark:backdrop-blur-md 
                         border border-gray-200 dark:border-white/10 
                         p-6 rounded-lg shadow-md dark:shadow-lg 
                         flex flex-col items-center transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                  y: -5, 
                  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
                  borderColor: 'rgb(209 213 219)'
              }}
            >
              <detail.icon className="text-4xl text-blue-600 dark:text-blue-300 mb-4"/>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">{detail.title}</h4>
              {detail.href ? (
                <a href={detail.href} className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 hover:underline text-sm break-all">
                  {detail.value}
                </a>
              ) : (
                <p className="text-gray-700 dark:text-gray-300 text-sm">{detail.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-5">Connect with Me</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                title={link.title} 
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition duration-200"
                whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    filter: 'drop-shadow(0px 2px 4px rgba(59, 130, 246, 0.3)) dark:drop-shadow(0px 0px 8px rgb(255,255,255))'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="text-4xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact; 
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const ModernProfile = ({ src, name, designation, options = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const getIconForButton = (text) => {
    const lowercaseText = text.toLowerCase();
    if (lowercaseText.includes('cv') || lowercaseText.includes('resume')) return <Download size={20} />;
    if (lowercaseText.includes('github')) return <Github size={20} />;
    if (lowercaseText.includes('linkedin')) return <Linkedin size={20} />;
    if (lowercaseText.includes('contact')) return <Mail size={20} />;
    return null;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-purple-500 to-primary-600 p-1"
              >
                <div className="w-80 h-80 rounded-full bg-dark-900"></div>
              </motion.div>

              <motion.img
                whileHover={{ scale: 1.05 }}
                src={src}
                alt={name}
                className="relative z-10 w-80 h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full shadow-lg flex items-center justify-center"
              >
                <span className="text-2xl">👋</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl lg:text-3xl text-primary-400 font-semibold mb-8"
            >
              {designation}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg mb-8 max-w-lg"
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {options.map((option, index) => (
                <motion.a
                  key={index}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(14, 165, 233, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
                >
                  {getIconForButton(option.text)}
                  <span>{option.text}</span>
                  <motion.div
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-16 flex justify-center lg:justify-start"
            >
              <div className="flex flex-col items-center text-gray-400">
                <span className="text-sm mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-1 h-3 bg-primary-400 rounded-full mt-2"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ModernProfile;
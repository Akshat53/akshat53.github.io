import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Code } from 'lucide-react';

const ModernAbout = ({ heading, subHeading, src, options = [], text }) => {
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getCardIcon = (title) => {
    if (!title) return <Users className="w-8 h-8 text-primary-400" />;
    const lowercaseTitle = title.toLowerCase();
    if (lowercaseTitle.includes('experience')) return <Award className="w-8 h-8 text-primary-400" />;
    if (lowercaseTitle.includes('project')) return <Code className="w-8 h-8 text-primary-400" />;
    if (lowercaseTitle.includes('education')) return <BookOpen className="w-8 h-8 text-primary-400" />;
    return <Users className="w-8 h-8 text-primary-400" />;
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg mb-4"
          >
            {subHeading}
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent"
          >
            {heading}
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* About Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={src}
                alt="About"
                className="w-96 h-96 object-cover rounded-3xl shadow-2xl border border-white/10"
              />

              {/* Decorative elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-6 -right-6 w-16 h-16 border-4 border-primary-400 rounded-full opacity-30"
              />

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full opacity-80 blur-sm"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {options.map((option, index) => (
                <motion.div
                  key={option.key || index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(14, 165, 233, 0.1)"
                  }}
                  className="glass-dark p-6 rounded-2xl border border-white/10 text-center group cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    {getCardIcon(option.prof)}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {option.prof}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">
                    {option.desg}
                  </p>
                  <p className="text-primary-300 text-sm font-medium">
                    {option.stats}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* About Text */}
            <motion.div
              variants={itemVariants}
              className="glass-dark p-8 rounded-2xl border border-white/10"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                {text}
              </p>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {['React.js', 'Next.js', 'JavaScript', 'HTML/CSS', 'Java', 'GitHub', 'Postman'].map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-purple-500/20 border border-primary-400/30 rounded-full text-primary-300 text-sm font-medium cursor-pointer hover:from-primary-500/30 hover:to-purple-500/30 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernAbout;
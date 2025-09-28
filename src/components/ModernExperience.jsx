import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Code, Database, Globe, Smartphone } from 'lucide-react';

const ModernExperience = ({ heading, subHeading, options1 = [], options2 = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const getSkillIcon = (skill) => {
    const skillLower = skill?.toLowerCase() || '';
    if (skillLower.includes('react') || skillLower.includes('javascript') || skillLower.includes('html') || skillLower.includes('css')) {
      return <Globe className="w-5 h-5 text-primary-400" />;
    }
    if (skillLower.includes('java') || skillLower.includes('backend')) {
      return <Database className="w-5 h-5 text-primary-400" />;
    }
    if (skillLower.includes('mobile') || skillLower.includes('app')) {
      return <Smartphone className="w-5 h-5 text-primary-400" />;
    }
    return <Code className="w-5 h-5 text-primary-400" />;
  };

  const getSkillPercentage = (level) => {
    if (!level) return 70;
    const levelLower = level.toLowerCase();
    if (levelLower.includes('experienced')) return 90;
    if (levelLower.includes('intermediate')) return 75;
    if (levelLower.includes('beginner')) return 50;
    return 70;
  };

  const ExperienceCard = ({ title, skills = [], side }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(14, 165, 233, 0.15)"
      }}
      className="glass-dark p-8 rounded-3xl border border-white/10 h-full"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Code className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.key || index}
            initial={{ x: side === 'left' ? -20 : 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex-shrink-0">
              {getSkillIcon(skill.label || skill.text || skill.name || skill)}
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold group-hover:text-primary-400 transition-colors duration-300">
                {skill.label || skill.text || skill.name || skill}
              </h4>
              {skill.level && (
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${getSkillPercentage(skill.level)}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              )}
            </div>
            <CheckCircle className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

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

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Frontend Development */}
          <ExperienceCard
            title="Frontend Development"
            skills={options1}
            side="left"
          />

          {/* Backend Development */}
          <ExperienceCard
            title="Backend Development"
            skills={options2}
            side="right"
          />
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Professional Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "2023 - Present",
                  title: "Frontend Developer",
                  description: "Developing modern web applications with React.js and Next.js",
                  side: "left"
                },
                {
                  year: "2022 - 2023",
                  title: "Java Developer",
                  description: "Building microservices and backend systems",
                  side: "right"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    item.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full border-4 border-dark-800 z-10"></div>

                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${item.side === 'left' ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="glass-dark p-6 rounded-2xl border border-white/10"
                    >
                      <span className="text-primary-400 font-semibold text-sm">{item.year}</span>
                      <h4 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernExperience;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
        >
          {/* Left side - Text content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">About</h2>
              <div className="w-16 h-1 bg-black"></div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm Akshat Singh, a full-stack developer from India with a passion for building scalable, beautiful web applications.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in modern web technologies and have experience building complete systems from design to deployment. Each project is an opportunity to solve real problems and create meaningful experiences.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the community.
              </p>
            </div>

            {/* Stats - Anamaya style */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-300">
              <div>
                <p className="text-4xl font-bold">50+</p>
                <p className="text-sm text-gray-600 mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold">3+</p>
                <p className="text-sm text-gray-600 mt-1">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Skills grouped */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:border-black transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:border-black transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:border-black transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

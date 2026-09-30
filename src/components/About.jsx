import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Image/Graphic */}
          <motion.div variants={itemVariants} className="relative h-96">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"
            ></motion.div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-sm border border-blue-200/50 flex items-center justify-center">
              <span className="text-6xl">💻</span>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Me
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design
                and user experience. With experience in building web applications
                using React, Node.js, and modern web technologies, I create
                solutions that are both beautiful and functional.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to
                solve real-world problems. I believe in writing clean, maintainable
                code and collaborating closely with teams to deliver exceptional
                results.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 mt-8"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-gray-600 text-sm">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3+</p>
                <p className="text-gray-600 text-sm">Years Exp.</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">100%</p>
                <p className="text-gray-600 text-sm">Dedicated</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

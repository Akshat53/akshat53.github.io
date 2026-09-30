import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Overline */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-light tracking-[0.2em] uppercase text-gray-600"
          >
            Creative Developer & Designer
          </motion.p>

          {/* Main Heading - PREMIUM */}
          <motion.div variants={itemVariants}>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light leading-[1.1] tracking-tight">
              Design
              <br />
              <span className="font-extralight">and</span>
              <br />
              Develop
              <br />
              <span className="font-extralight">With</span>
              <br />
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block"
              >
                Purpose
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-light text-gray-700 max-w-2xl leading-relaxed pt-8"
          >
            I create digital experiences that balance aesthetics with functionality. Each project is crafted with attention to detail, modern technologies, and user-centered design principles.
          </motion.p>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 pt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="px-8 py-3.5 border-2 border-gray-950 font-light tracking-wide hover:bg-gray-950 hover:text-white transition-all duration-500"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3.5 bg-gray-950 text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-500"
            >
              Start a Project
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-20"
          >
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

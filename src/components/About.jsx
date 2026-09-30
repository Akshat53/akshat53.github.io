import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          {/* Left - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <p className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4">
                About Me
              </p>
              <h2 className="text-5xl md:text-6xl font-light leading-tight">
                Creating digital experiences that matter
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg font-light text-gray-700 leading-relaxed"
            >
              I'm a full-stack developer and designer passionate about creating beautiful, functional digital experiences. With expertise in modern web technologies and design principles, I craft solutions that balance aesthetics with performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg font-light text-gray-700 leading-relaxed"
            >
              Every project is an opportunity to solve problems thoughtfully and push the boundaries of what's possible on the web.
            </motion.p>
          </div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-12"
          >
            {[
              {
                category: 'Frontend',
                skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
              },
              {
                category: 'Backend',
                skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
              },
              {
                category: 'Tools',
                skills: ['Git', 'Docker', 'Vercel', 'AWS'],
              },
            ].map((group) => (
              <div key={group.category}>
                <h4 className="text-sm font-light tracking-widest uppercase text-gray-600 mb-4">
                  {group.category}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-3 rounded-lg bg-gray-50 text-sm font-light"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function FeaturedWork() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full-stack Development',
      description: 'A sophisticated e-commerce solution with real-time inventory management and seamless checkout experience.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: '🛍️',
      gradient: 'from-blue-100 to-cyan-50',
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Enterprise-grade analytics platform with interactive visualizations and real-time data updates.',
      technologies: ['React', 'D3.js', 'Node.js'],
      image: '📊',
      gradient: 'from-purple-100 to-pink-50',
    },
  ];

  return (
    <section id="work" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4">
            Featured Projects
          </p>
          <h2 className="text-5xl md:text-6xl font-light leading-tight max-w-3xl">
            Carefully Crafted Digital Solutions
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Image/Visual */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`aspect-square rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <span className="text-9xl opacity-80">{project.image}</span>
              </motion.div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-light tracking-widest uppercase text-gray-600 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-light">{project.title}</h3>
                </div>

                <p className="text-lg font-light text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-gray-100 text-sm font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <motion.a
                  whileHover={{ x: 8 }}
                  href="#"
                  className="inline-flex items-center gap-3 text-sm font-light tracking-wide group pt-4"
                >
                  View Project
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

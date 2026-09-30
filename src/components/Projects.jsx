import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      type: 'Full-stack • 2024',
      description: 'A complete e-commerce solution with payment integration, inventory management, and real-time analytics.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Task Management App',
      type: 'React • Realtime • 2024',
      description: 'Collaborative task management with real-time updates, drag-and-drop, and team collaboration features.',
      tags: ['React', 'Firebase', 'Tailwind'],
      image: '✓',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      type: 'Data Visualization • 2024',
      description: 'Real-time analytics dashboard with interactive charts, filtering, and data-driven insights.',
      tags: ['React', 'Chart.js', 'PostgreSQL'],
      image: '📊',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Chat Application',
      type: 'Realtime • Backend • 2023',
      description: 'Full-featured chat application with WebSocket support, authentication, and message persistence.',
      tags: ['React', 'Socket.io', 'Express'],
      image: '💬',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Project Grid - Ifra inspired image-focused gallery style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onHoverStart={() => setSelectedProject(project.id)}
                onHoverEnd={() => setSelectedProject(null)}
                className="group cursor-pointer"
              >
                {/* Project Image Box */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-64 md:h-80 rounded-xl bg-gradient-to-br ${project.color} overflow-hidden mb-6 flex items-center justify-center`}
                >
                  <motion.div
                    animate={selectedProject === project.id ? { scale: 1.2 } : { scale: 1 }}
                    className="text-8xl opacity-80"
                  >
                    {project.image}
                  </motion.div>

                  {/* Hover overlay - subtle */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={selectedProject === project.id ? { opacity: 1 } : { opacity: 0 }}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                  >
                    <span className="text-white font-medium">View Details</span>
                  </motion.div>
                </motion.div>

                {/* Project Info */}
                <div className="space-y-3">
                  <motion.div
                    animate={selectedProject === project.id ? { x: 10 } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-black group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mt-2">{project.type}</p>
                  </motion.div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-black hover:text-white transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <motion.div
                    animate={selectedProject === project.id ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-4 pt-4"
                  >
                    <button onClick={() => window.open('#')} className="text-sm font-medium text-black hover:text-blue-600 transition-colors">
                      View Code →
                    </button>
                    <button onClick={() => window.open('#')} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                      Live Demo →
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all projects link */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 md:mt-24"
          >
            <button onClick={() => window.location.href = '#'} className="text-lg font-medium text-black hover:text-blue-600 transition-colors">
              View all 50+ projects →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

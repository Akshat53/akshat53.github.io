import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with payment integration',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      tags: ['React', 'Firebase', 'Tailwind', 'Framer Motion'],
      image: '✅',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization',
      tags: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
      image: '📊',
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Chat Application',
      description: 'Real-time messaging app with user authentication',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      image: '💬',
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Beautiful weather app with location-based forecasts',
      tags: ['React', 'Weather API', 'Geolocation', 'Tailwind'],
      image: '🌤️',
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'Portfolio Builder',
      description: 'No-code portfolio builder for developers',
      tags: ['React', 'Node.js', 'Stripe', 'AWS'],
      image: '🎨',
      github: '#',
      live: '#',
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and creative projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function AllProjects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    { title: 'Task Management App', year: '2024', tags: ['React', 'Firebase'] },
    { title: 'Chat Application', year: '2024', tags: ['WebSocket', 'Node.js'] },
    { title: 'Weather Dashboard', year: '2023', tags: ['React', 'API'] },
    { title: 'Portfolio Builder', year: '2023', tags: ['Next.js', 'Stripe'] },
    { title: 'Mobile App', year: '2023', tags: ['React Native'] },
    { title: 'AI Integration', year: '2024', tags: ['OpenAI', 'Next.js'] },
  ];

  return (
    <section className="py-32 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4">
            More Work
          </p>
          <h2 className="text-4xl md:text-5xl font-light">All Projects</h2>
        </motion.div>

        {/* Projects Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-px"
        >
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              whileHover={{ x: 8, backgroundColor: '#f3f4f6' }}
              className="group p-6 md:p-8 border-t border-gray-300 hover:bg-gray-100 transition-all duration-300 flex justify-between items-center"
            >
              <div className="space-y-2">
                <h4 className="text-lg md:text-xl font-light group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-light text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm font-light text-gray-600 whitespace-nowrap ml-4">
                {project.year}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

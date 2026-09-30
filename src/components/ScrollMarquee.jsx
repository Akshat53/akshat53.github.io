import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollMarquee() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let scrollPos = 0;
    const speed = 2;

    const animate = () => {
      scrollPos += speed;
      if (scroll.scrollLeft > scroll.scrollWidth - scroll.clientWidth) {
        scrollPos = 0;
        scroll.scrollLeft = 0;
      } else {
        scroll.scrollLeft = scrollPos;
      }
    };

    const interval = setInterval(animate, 20);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    'E-Commerce Platform',
    'Task Dashboard',
    'Analytics Suite',
    'Chat Application',
    'Mobile App',
    'API Services',
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro text - Anamaya style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-400 max-w-2xl">
            A selection of projects showcasing my expertise in full-stack development, modern design, and scalable architecture.
          </p>
        </motion.div>

        {/* Scrolling marquee - Ifra style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto no-scrollbar pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {[...projects, ...projects].map((project, i) => (
              <div key={i} className="flex-shrink-0 flex items-center gap-6 text-xl md:text-2xl font-medium">
                <span className="whitespace-nowrap">{project}</span>
                <span className="text-gray-600">✦</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

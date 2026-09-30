import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ scrollY }) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 100
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-white/40 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo - Elegant */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-sm font-light tracking-widest uppercase"
        >
          AKSHAT
        </motion.div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { name: 'Work', href: '#work' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2 }}
              className="text-sm font-light tracking-wide hover:text-gray-600 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Button - Premium style */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm px-6 py-2.5 border border-gray-950 hover:bg-gray-950 hover:text-white transition-all duration-300 font-light tracking-wide"
        >
          Let's Talk
        </motion.a>
      </div>
    </motion.nav>
  );
}

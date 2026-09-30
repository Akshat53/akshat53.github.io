import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ scrollY }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        {/* Logo - Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-xl tracking-tight"
        >
          AS
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          {['Work', 'About', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3"
        >
          {['Work', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-700"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

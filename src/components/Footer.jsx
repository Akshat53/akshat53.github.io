import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-16 px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          {/* Left */}
          <div className="space-y-2">
            <p className="text-sm font-light tracking-widest uppercase">AKSHAT SINGH</p>
            <p className="text-sm font-light text-gray-600">Full-stack Developer & Designer</p>
          </div>

          {/* Center - Links */}
          <div className="flex gap-12">
            {[
              { label: 'Work', href: '#work' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-sm font-light hover:text-gray-600 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right */}
          <p className="text-xs font-light text-gray-500">
            © 2026 Akshat Singh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

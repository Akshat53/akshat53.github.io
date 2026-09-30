import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-12 md:py-16 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          {/* Left side */}
          <div>
            <p className="text-2xl font-bold">AS</p>
            <p className="text-gray-400 text-sm mt-2">Full-stack developer & designer</p>
          </div>

          {/* Center - Links */}
          <div className="flex gap-8">
            {[
              { label: 'Work', href: '#work' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side - Credits */}
          <div className="text-right text-gray-400 text-sm">
            <p>© {currentYear} Akshat Singh</p>
            <p className="mt-1">Built with React & Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Let's Talk</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have an exciting project in mind? Let's collaborate and build something amazing together.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="px-6 py-4 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="px-6 py-4 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              rows="6"
              className="w-full px-6 py-4 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
            ></motion.textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 pt-8 border-t border-gray-700"
          >
            <p className="text-gray-400 mb-6">Or reach me directly</p>
            <div className="flex justify-center gap-8 flex-wrap">
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="mailto:hello@akshat.dev"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Twitter
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

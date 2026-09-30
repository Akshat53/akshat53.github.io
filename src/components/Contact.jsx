import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
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

  return (
    <section id="contact" className="py-32 px-8 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="text-xs font-light tracking-[0.2em] uppercase text-gray-500 mb-4">
              Get In Touch
            </p>
            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              Let's create something amazing together
            </h2>
            <p className="text-lg font-light text-gray-400 mt-6 max-w-2xl">
              Have a project in mind? Reach out and let's discuss how we can bring your ideas to life.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 font-light focus:outline-none focus:border-white/30 transition-colors"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 font-light focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 font-light focus:outline-none focus:border-white/30 transition-colors resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-4 bg-white text-gray-950 font-light tracking-wide rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {submitted ? '✓ Message Sent' : 'Send Message'}
            </motion.button>
          </form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="border-t border-white/10 mt-16 pt-16 text-center"
          >
            <p className="text-sm font-light text-gray-500 mb-8">Or connect on social</p>
            <div className="flex justify-center gap-8">
              {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-sm font-light hover:text-white transition-colors"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

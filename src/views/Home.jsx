import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Palette,
  Rocket,
  Github,
  Linkedin,
  Download,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  Award,
  Calendar,
  Users,
  ArrowRight,
  Building,
  Clock,
  CheckCircle,
  Briefcase
} from "lucide-react";
import {
  navOptions,
  expCard1,
  expCard2,
  projectsData,
  professionalExperience
} from "../constrants";
import Img from "../images/akshat.jpg";
import Img2 from "../images/akshat2.jpg";
import CV from "../resume.pdf";

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const aboutSectionRef = useRef(null);
  const homeSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const projectSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create mailto link as fallback
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Hi Akshat,\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:work.iamakshat@gmail.com?subject=${subject}&body=${body}`;

      // Try to open mailto
      window.location.href = mailtoLink;

      // Show success message
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (key) => {
    let ref;
    switch (key) {
      case "1":
        ref = aboutSectionRef;
        setActiveSection('about');
        break;
      case "2":
        ref = experienceSectionRef;
        setActiveSection('experience');
        break;
      case "3":
        ref = projectSectionRef;
        setActiveSection('projects');
        break;
      case "4":
        ref = contactSectionRef;
        setActiveSection('contact');
        break;
      default:
        ref = homeSectionRef;
        setActiveSection('home');
        break;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-blue-900/20 to-teal-900/20" />

        {/* Floating Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-30"
            style={{
              background: `linear-gradient(45deg, ${
                i === 0 ? '#3B82F6' : i === 1 ? '#8B5CF6' : '#06B6D4'
              }, transparent)`,
              width: '300px',
              height: '300px',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
   
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('0')}
            >
              Akshat Singh
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navOptions.map((option) => (
                <motion.button
                  key={option.key}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(option.key)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === option.key.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {option.label}
                  {activeSection === option.key.toLowerCase() && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400"
                      initial={false}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={homeSectionRef} className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-400 font-medium">Welcome to my portfolio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
                  Akshat
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 text-2xl text-gray-300"
              >
                <Code2 className="w-8 h-8 text-blue-400" />
                <span>Frontend Developer</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Frontend Developer with 3+ years of experience in React.js, Next.js, and Node.js.
              Building real-time dashboards, e-commerce platforms, and scalable web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('4')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-violet-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Get In Touch
              </motion.button>

              <motion.a
                href={CV}
                download="Akshat_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 rounded-full font-semibold flex items-center gap-2 hover:bg-white/5 transition-all"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 pt-8"
            >
              {[
                { icon: Github, href: 'https://github.com/Akshat53', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/akshat53/', label: 'LinkedIn' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-teal-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-black" />
              </motion.div>

              <motion.img
                whileHover={{ scale: 1.05 }}
                src={Img}
                alt="Akshat Kr. Singh"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center"
              >
                <Rocket className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-violet-500 to-teal-500 rounded-full flex items-center justify-center"
              >
                <Palette className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutSectionRef} className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium">About Me</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Passionate about{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Self-driven Frontend Developer with 3+ years of experience, currently building React-based interfaces at SparkTG.
              I shape user journeys through clean, maintainable, and scalable code.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-3xl"
                >
                  <img
                    src={Img2}
                    alt="About Akshat"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">Experience</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">3+ Years</div>
                  <div className="text-sm text-gray-400">Frontend Development</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 -left-6 bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">Education</span>
                  </div>
                  <div className="text-lg font-bold text-violet-400">MCA</div>
                  <div className="text-sm text-gray-400">In Progress (2023-2025)</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Creating digital solutions with{' '}
                  <span className="text-blue-400">precision</span>
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  I've worked on 3 major production web apps and built 7+ personal projects. My expertise spans React.js, Next.js,
                  and modern UI frameworks like Tailwind CSS, ShadCN, Ant Design, and Chakra UI. I'm comfortable working end-to-end,
                  from API integration to deployment, and excel in fast-paced collaborative environments.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'React.js', level: 90, icon: '⚛️' },
                  { name: 'Next.js', level: 85, icon: '▲' },
                  { name: 'JavaScript', level: 88, icon: '🟨' },
                  { name: 'TypeScript', level: 80, icon: '🔷' },
                  { name: 'Node.js', level: 75, icon: '🟢' },
                  { name: 'Java', level: 70, icon: '☕' },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                      />
                    </div>
                    <div className="text-right text-sm text-gray-400">{skill.level}%</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('3')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-violet-600 transition-all"
                >
                  View My Work
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section ref={experienceSectionRef} className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full mb-4">
              <Code2 className="w-4 h-4 text-violet-400" />
              <span className="text-violet-400 font-medium text-sm">My Expertise</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Technical{' '}
              <span className="bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">
                Proficiency
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Skills and technologies I work with daily
            </p>
          </motion.div>

          {/* Compact Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-500/5 to-teal-500/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Frontend</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {expCard1.map((skill, index) => (
                    <motion.div
                      key={skill.key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all text-center group"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {skill.label}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{skill.level}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Backend & Tools</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {expCard2.map((skill, index) => (
                    <motion.div
                      key={skill.key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all text-center group"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-violet-400 transition-colors">
                        {skill.label}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{skill.level}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience Timeline Section */}
      <section className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-medium">Career Journey</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              My journey through different roles and companies, building expertise in modern web development.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-red-500 to-purple-500 rounded-full hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {professionalExperience.map((experience, index) => (
                <motion.div
                  key={experience.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-black z-10 hidden lg:block">
                  </div>

                  {/* Content */}
                  <div className={`w-full lg:w-5/12 mb-8 lg:mb-0 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300"
                    >
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-4">
                        <Clock className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400 font-semibold text-sm">{experience.period}</span>
                      </div>

                      {/* Company & Role */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-1">{experience.role}</h3>
                          <p className="text-lg text-orange-400 font-semibold">{experience.company}</p>
                          <p className="text-sm text-gray-400">{experience.location}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* Key Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {experience.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectSectionRef} className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 font-medium">My Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured{' '}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Code2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="px-2 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-teal-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-400 leading-relaxed mb-3 flex-1 text-xs line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/10 border border-gray-500/20 rounded text-gray-400 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Link */}
                  <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg font-semibold text-white hover:from-teal-600 hover:to-blue-600 transition-all text-xs"
                  >
                    {project.label}
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactSectionRef} className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Ready to start a{' '}
                  <span className="text-blue-400">conversation?</span>
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  I'm always excited to take on new challenges and collaborate on innovative projects.
                  Whether you need a complete web application or want to discuss potential opportunities,
                  I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "work.iamakshat@gmail.com",
                    href: "mailto:work.iamakshat@gmail.com",
                    color: "from-blue-500 to-violet-500"
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 9634780846",
                    href: "tel:+919634780846",
                    color: "from-violet-500 to-teal-500"
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "India",
                    href: "#",
                    color: "from-teal-500 to-blue-500"
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/Akshat53', label: 'GitHub', color: 'hover:text-gray-400' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/akshat53/', label: 'LinkedIn', color: 'hover:text-blue-400' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`p-4 bg-white/5 border border-white/10 rounded-xl ${social.color} transition-all`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                    placeholder="Project collaboration"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center"
                  >
                    Failed to send message. Please try again or contact me directly at work.iamakshat@gmail.com
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Akshat Singh
            </div>
            <p className="text-gray-400">
              React.js Developer at SparkTG • Building scalable web applications
            </p>
            <div className="flex justify-center gap-6 pt-4">
              {[
                { icon: Github, href: 'https://github.com/Akshat53' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/akshat53/' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="pt-8 text-sm text-gray-500">
              © 2024 Akshat Singh. All rights reserved.
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Sudhir Maurya</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            IT Student & Aspiring Full-Stack Developer. I build modern, scalable, and user-centric digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="projects"
              smooth={true}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform cursor-pointer glow-md"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              className="w-full sm:w-auto px-8 py-4 bg-card border border-border text-white rounded-2xl font-bold text-lg hover:bg-border transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-muted">
            <a href="#" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth={true} className="cursor-pointer text-muted hover:text-white transition-colors animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </Link>
      </motion.div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, Target, Download, Code, Database, Layout, Server } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center py-12 md:py-20"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 perspective-1000">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  rotateX: [0, 360]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front */}
                <div className="absolute inset-0 bg-primary/20 border-2 border-primary flex items-center justify-center backface-hidden rounded-xl backdrop-blur-sm" style={{ transform: 'translateZ(clamp(96px, 20vw, 128px))' }}>
                  <Code className="w-12 h-12 md:w-20 md:h-20 text-primary" />
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-secondary/20 border-2 border-secondary flex items-center justify-center backface-hidden rounded-xl backdrop-blur-sm" style={{ transform: 'rotateY(180deg) translateZ(clamp(96px, 20vw, 128px))' }}>
                  <Database className="w-12 h-12 md:w-20 md:h-20 text-secondary" />
                </div>
                {/* Right */}
                <div className="absolute inset-0 bg-primary/20 border-2 border-primary flex items-center justify-center backface-hidden rounded-xl backdrop-blur-sm" style={{ transform: 'rotateY(90deg) translateZ(clamp(96px, 20vw, 128px))' }}>
                  <Layout className="w-12 h-12 md:w-20 md:h-20 text-primary" />
                </div>
                {/* Left */}
                <div className="absolute inset-0 bg-secondary/20 border-2 border-secondary flex items-center justify-center backface-hidden rounded-xl backdrop-blur-sm" style={{ transform: 'rotateY(-90deg) translateZ(clamp(96px, 20vw, 128px))' }}>
                  <Server className="w-12 h-12 md:w-20 md:h-20 text-secondary" />
                </div>
                {/* Top */}
                <div className="absolute inset-0 bg-primary/20 border-2 border-primary flex items-center justify-center backface-hidden rounded-xl backdrop-blur-sm" style={{ transform: 'rotateX(90deg) translateZ(clamp(96px, 20vw, 128px))' }}>
                  <Target className="w-12 h-12 md:w-20 md:h-20 text-primary" />
                </div>
                {/* Bottom */}
                <div className="absolute inset-0 bg-secondary/20 border-2 border-secondary flex items-center justify-center backface-hidden rounded-xl backdrop-blur-sm" style={{ transform: 'rotateX(-90deg) translateZ(clamp(96px, 20vw, 128px))' }}>
                  <User className="w-12 h-12 md:w-20 md:h-20 text-secondary" />
                </div>
              </motion.div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[60px] md:blur-[100px] rounded-full -z-10 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 flex items-center justify-center md:justify-start gap-3">
              <User className="text-primary" /> About Me
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              I am a passionate developer focused on creating interactive web experiences and exploring the possibilities of AI.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Education</h4>
                  <p className="text-muted text-sm">
                    BSc. Information Technology, Pillai University 
                    <br />(2024-present)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-colors">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Target className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Current Focus</h4>
                  <p className="text-muted text-sm">Mastering Full-Stack Development with React, Node.js, and Cloud Architecture.</p>
                </div>
              </div>
            </div>

            <a 
              href="/resume.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 md:mt-10 px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" /> View Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

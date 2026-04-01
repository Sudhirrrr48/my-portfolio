import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, Target, Download } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-2 border-primary/20 glow-sm">
              <img
                src="https://picsum.photos/seed/itstudent/800/800"
                alt="Profile"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-xl hidden md:block">
              <span className="text-4xl font-bold text-white block">3+</span>
              <span className="text-white/80 text-sm">Years of Learning</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <User className="text-primary" /> About Me
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              I am a passionate Information Technology student currently pursuing my Bachelor's degree. 
              My journey in tech started with a curiosity for how things work under the hood, 
              which evolved into a deep love for software development and problem-solving.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Education</h4>
                  <p className="text-muted text-sm">B.S. in Information Technology, University of Tech (2022 - Present)</p>
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

            <button className="mt-10 px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-white/90 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" /> Download Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

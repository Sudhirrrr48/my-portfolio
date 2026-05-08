import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Server, Database, Wrench, Code2, Globe, Cpu, Zap, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    description: 'Modern UI/UX',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'group-hover:border-blue-500/50'
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    skills: ['Node.js', 'Express', 'Python', 'Java', 'APIs'],
    description: 'Scalable Logic',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'group-hover:border-green-500/50'
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6" />,
    skills: ['MongoDB', 'Supabase', 'SQL Plus', 'NoSQL'],
    description: 'Data Architecture',
    color: 'from-orange-500/20 to-yellow-500/20',
    border: 'group-hover:border-orange-500/50'
  },
  {
    title: 'Tools',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Git & GitHub', 'Figma', 'Linux', 'Claude', 'Antigravity', 'Stitch'],
    description: 'DevOps & Design',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'group-hover:border-purple-500/50'
  }
];

const allSkills = skillCategories.flatMap(c => c.skills);

export const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden bg-background">
      {/* Background Mesh & Floating Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,255,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,50,255,0.05),transparent_40%)]" />
        
        <motion.div 
          animate={{ y: [0, 50, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-[10%] text-primary/20"
        >
          <Cpu size={120} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -40, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-[5%] text-secondary/20"
        >
          <Globe size={100} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 md:mb-20 gap-8 lg:gap-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6"
            >
              <Sparkles size={14} />
              Technical Arsenal
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] uppercase font-display"
            >
              Mastered <br /> <span className="text-muted">Stack.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-muted text-lg md:text-xl leading-relaxed font-medium">
              A comprehensive suite of high-performance technologies I leverage to build production-ready digital products. From immersive frontends to robust backend architectures.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative p-8 rounded-[2.5rem] bg-card/40 border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-primary/40 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/5",
              )}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-[10px] text-muted font-bold uppercase tracking-widest opacity-60 font-mono">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-[12px] px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-muted font-bold uppercase tracking-wider group-hover:text-white group-hover:border-primary/30 transition-all cursor-default backdrop-blur-sm font-mono"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Background Glow */}
              <div className={cn("absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br", category.color)} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { User, GraduationCap, Target, Download, Code, Database, Layout, Server } from 'lucide-react';

export const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [30, -30]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
            <div 
              className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Mouse-tracking Wrapper */}
              <motion.div
                style={{ rotateX, rotateY }}
                className="absolute inset-0 preserve-3d"
              >
                {/* 3D Rotating Skills Sphere */}
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 40, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute inset-0 preserve-3d"
                >
                  {[
                    'React', 'Node.js', 'Python', 'Tailwind', 
                    'MongoDB', 'TypeScript', 'Java', 'Git',
                    'Next.js', 'Express', 'SQL Plus', 'Figma',
                    'Linux', 'Vercel', 'Supabase', 'API',
                   'PostgreSQL', 'C++', 'PHP',
                  'Flutter','Antigravity','Vibe Coding',
                  'JavaScript','HTML','CSS','C#','C','Anaconda',
                  'AI/ML'
                  ].map((skill, idx, arr) => {
                    const total = arr.length;
                    const phi = Math.acos(-1 + (2 * idx) / total);
                    const theta = Math.sqrt(total * Math.PI) * phi;
                    
                    const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 130 : 200;
                    
                    const x = radius * Math.sin(phi) * Math.cos(theta);
                    const y = radius * Math.sin(phi) * Math.sin(theta);
                    const z = radius * Math.cos(phi);

                    return (
                      <motion.div
                        key={skill}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
                        style={{ 
                          transform: `translate3d(${x}px, ${y}px, ${z}px)` 
                        }}
                      >
                        <motion.div
                          animate={{ 
                            rotateY: [360, 0],
                          }}
                          transition={{ 
                            duration: 40, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                          className="px-2 py-1 md:px-3 md:py-1.5 rounded-lg bg-card/40 border border-white/5 backdrop-blur-sm text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-primary/80 shadow-xl whitespace-nowrap hover:text-white hover:border-primary/50 hover:bg-card/80 transition-all cursor-default"
                        >
                          {skill}
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* Decorative Ambient Glows */}
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl animate-pulse" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 flex items-center justify-center md:justify-start gap-3 font-display">
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

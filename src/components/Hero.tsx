import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { ChevronDown, Box, Database, Code, Cpu, Layout, Server, Camera, User, Globe, Sparkles } from 'lucide-react';

const FloatingElement = ({ children, delay, className }: { children: React.ReactNode, delay: number, className: string }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 3D Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 animate-bounce-slow">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-bold tracking-wider uppercase">Available for Hire</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1] font-display">
              Crafting <span className="text-primary">Digital</span> <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Experiences</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted max-w-xl mb-10 leading-relaxed">
              Hi, I'm <span className="text-white font-bold">Sudhir Maurya</span>. An IT student & aspiring full-stack developer dedicated to building impactful web solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="projects"
                smooth={true}
                className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all cursor-pointer glow-md flex items-center gap-2"
              >
                Explore Work
                <ChevronDown className="-rotate-90 w-5 h-5" />
              </Link>
              <Link
                to="contact"
                smooth={true}
                className="px-8 py-4 bg-card border border-border text-white rounded-2xl font-bold text-lg hover:bg-border transition-all cursor-pointer"
              >
                Let's Talk
              </Link>
            </div>

            {/* Quick Stats/Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-black text-white mb-1">2+</div>
                <div className="text-sm text-muted uppercase tracking-widest font-bold">Years Coding</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">12+</div>
                <div className="text-sm text-muted uppercase tracking-widest font-bold">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">10+</div>
                <div className="text-sm text-muted uppercase tracking-widest font-bold">Tech Stack</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Decorative Background for Image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50" />
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={triggerFileInput}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-[3rem] border-2 border-white/10 p-2 cursor-pointer overflow-hidden backdrop-blur-sm bg-white/5 shadow-2xl transition-all duration-500 z-20"
              >
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-card flex items-center justify-center relative">
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-4 text-muted">
                      <User size={120} strokeWidth={1} className="opacity-20" />
                      <div className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-xs uppercase tracking-widest font-bold font-mono">
                        Upload Profile Photo
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-4 rounded-full bg-primary/20 border border-primary/40">
                        <Camera className="text-white" size={32} />
                      </div>
                      <span className="text-white text-xs uppercase font-bold tracking-widest font-mono">Update Photo</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Badges */}
              <FloatingElement delay={0.5} className="absolute -top-6 -right-6 z-30 bg-card border border-border p-4 rounded-2xl shadow-xl hidden md:block">
                <Code className="text-primary" size={32} />
              </FloatingElement>
              <FloatingElement delay={1.5} className="absolute -bottom-6 -left-6 z-30 bg-card border border-border p-4 rounded-2xl shadow-xl hidden md:block">
                <Layout className="text-secondary" size={32} />
              </FloatingElement>
            </div>

            {/* Hidden File Input */}
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

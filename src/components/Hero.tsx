import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { ChevronDown, Box, Database, Code, Cpu, Layout, Server, Camera, User } from 'lucide-react';

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
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

      {/* 3D Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingElement delay={0} className="absolute top-[20%] left-[15%] text-primary/30 hidden sm:block">
          <Box size={48} />
        </FloatingElement>
        <FloatingElement delay={1} className="absolute top-[60%] left-[10%] text-secondary/30 hidden md:block">
          <Database size={56} />
        </FloatingElement>
        <FloatingElement delay={2} className="absolute top-[30%] right-[15%] text-accent/30 hidden sm:block">
          <Code size={40} />
        </FloatingElement>
        <FloatingElement delay={3} className="absolute bottom-[20%] right-[10%] text-primary/30 hidden md:block">
          <Cpu size={64} />
        </FloatingElement>
        {/* Additional 3D Elements */}
        <FloatingElement delay={1.5} className="absolute top-[15%] right-[25%] text-secondary/20 hidden lg:block">
          <Layout size={32} />
        </FloatingElement>
        <FloatingElement delay={2.5} className="absolute bottom-[35%] left-[20%] text-accent/20 hidden lg:block">
          <Server size={44} />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced Profile Picture Section */}
          <div className="relative inline-block mb-12 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerFileInput}
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-primary/30 p-1.5 cursor-pointer overflow-hidden glow-sm group-hover:glow-md transition-all duration-500 z-20"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-card flex items-center justify-center relative">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted">
                    <User size={80} strokeWidth={1} />
                    <span className="text-[10px] uppercase tracking-widest font-bold font-mono">Upload Photo</span>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Camera className="text-white" size={32} />
                    <span className="text-white text-[10px] uppercase font-bold tracking-widest font-mono">Change Photo</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Hidden File Input */}
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            
            {/* Decorative Animated Rings */}
            <div className="absolute -inset-4 rounded-full border border-primary/10 animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-8 rounded-full border border-secondary/5 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 leading-tight font-display">
            Hi, I'm <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Sudhir Maurya</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            IT Student & Aspiring Full-Stack Developer. I specialize in building impactful digital solutions with a focus on web development and AI exploration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
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

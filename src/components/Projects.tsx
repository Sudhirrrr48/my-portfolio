import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code, Layout, Server } from 'lucide-react';

const FloatingElement = ({ children, delay, className }: { children: React.ReactNode, delay: number, className: string }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const projects = [
  {
    title: 'Neon Gaming Hub',
    description: 'A sleek, interactive neon-themed gaming platform featuring multiple engaging mini-games with dynamic UI and immersive effects.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Sudhirrrr48/neongaminghub.git',
  },
  {
    title: 'Stock Portfolio Analyzer',
    description: 'A smart tool that analyzes and tracks stock investments, providing insights into performance, risk, and portfolio growth.',
    tags: ['Python', 'PySide6', 'Oracle SQL'],
    github: 'https://github.com/Sudhirrrr48/stock-portfolio-analyzer.git',
  },
  {
    title: 'University Course Enrollment Portal',
    description: 'Developed a full-stack Course Enrollment System with role-based access, enabling student registration, course selection and admin approval workflows.',
    tags: ['Node.js','Express.js','MongoDB'],
    github: 'https://github.com/Sudhirrrr48/course-enrollment-portal.git',
  },
  {
    title: 'College Event Management System',
    description: 'Built an Event Management Site named BitFest 2025 which includes Event details, allows registration and contact information.',
    tags: ['React','CSS','JavaScript'],
    github: 'https://github.com/Sudhirrrr48/event-management-system.git',
  },
  {
    title: 'My Portfolio Site',
    description: 'Built a Portfolio site for myself to showcase my skills, work experience and few projects. Built using React.js and Tailwind CSS.',
    tags: ['React','Tailwind','AI'],
    github: 'https://github.com/Sudhirrrr48/my-portfolio.git',
  },
  {
    title: 'Internal Task Management System',
    description: 'Built in collaboration with team members as a part of our Internship project. My work was to handle Backend and Supabase Authentications.',
    tags: ['TypeScript','Tailwind','Node.js','Supabase','Next.js'],
    github: 'https://github.com/Sudhirrrr48/Internal-Task-Management-System.git',
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleProjects = showAll 
    ? projects 
    : projects.slice(0, isMobile ? 1 : 3);

  return (
    <section id="projects" className="py-12 md:py-16 bg-card/30 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingElement delay={0} className="absolute top-[10%] left-[5%] text-primary/10">
          <Code size={120} />
        </FloatingElement>
        <FloatingElement delay={2} className="absolute bottom-[10%] right-[5%] text-secondary/10">
          <Layout size={150} />
        </FloatingElement>
        <FloatingElement delay={1} className="absolute top-[40%] right-[10%] text-accent/10">
          <Server size={100} />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 font-display">Featured Projects</h2>
            <p className="text-muted max-w-xl">
              A selection of my recent work, showcasing my ability to build complex and user-friendly applications.
            </p>
          </div>
          {projects.length > (isMobile ? 1 : 3) && (
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-primary font-bold hover:underline transition-all"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                rotateX: 5, 
                rotateY: 5, 
                scale: 1.02,
                z: 20,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ perspective: 1000 }}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all shadow-xl p-8 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex gap-2 mb-6 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-border text-muted text-xs font-bold rounded-lg uppercase tracking-wider font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted text-base mb-8 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex items-center gap-6">
                
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

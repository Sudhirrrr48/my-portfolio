import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack online store with real-time inventory and secure payments.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Chat Dashboard',
    description: 'Interactive dashboard for managing AI models and chat history.',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['Next.js', 'Tailwind', 'OpenAI', 'Supabase'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task tracker with drag-and-drop functionality.',
    image: 'https://picsum.photos/seed/task/800/600',
    tags: ['TypeScript', 'React', 'Firebase'],
    github: '#',
    demo: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted max-w-xl">
              A selection of my recent work, showcasing my ability to build complex and user-friendly applications.
            </p>
          </div>
          <button className="text-primary font-bold hover:underline">View All Projects</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-border text-muted text-xs font-bold rounded-lg uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted text-sm mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex items-center gap-4">
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

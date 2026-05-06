import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Globe } from 'lucide-react';

const experiences = [
  {
    title: 'Software Tester Intern',
    company: 'EEDEE Creations',
    location: 'Remote',
    period: 'Dec 2025 - Jan 2026',
    description: 'Gained hands-on experience in software testing by identifying bugs, ensuring quality, and improving application performance.',
    skills: ['Bug Tracking', 'Testing', 'Quality Assurance'],
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'GarunaCDX',
    location: 'Remote',
    period: 'Mar 2026 - Apr 2026',
    description: 'Developing and maintaining web applications. Collaborating with cross-functional teams to deliver high-quality software solutions.',
    skills: ['React', 'Node.js', 'Next.js', 'Tailwind CSS', 'Supabase'],
  },
  {
    title: 'Product Engineering Intern',
    company: 'GarunaCDX',
    location: 'Remote',
    period: 'May 2026 - Present',
    description: 'Product Engineering Intern focused on upgrading traditional businesses with modern tech and AI driven solutions.',
    skills: ['Marketing','Research','Problem Solving','AI'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="pt-4 pb-12 md:pt-8 md:pb-16 relative overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl font-bold mb-4 font-display">Professional Experience</h2>
          <p className="text-muted max-w-2xl mx-auto">
            My journey in the tech world, from internships to professional roles, showcasing my growth and contributions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background z-20 hidden md:block" />

                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ 
                      rotateX: idx % 2 === 0 ? -5 : 5, 
                      rotateY: idx % 2 === 0 ? 5 : -5, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    style={{ perspective: 1000 }}
                    className="bg-card border border-border p-8 rounded-3xl shadow-xl hover:border-primary/50 transition-all group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Briefcase className="text-primary w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                          <p className="text-muted font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="px-4 py-1.5 bg-border rounded-full text-xs font-bold uppercase tracking-widest text-muted font-mono">
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Globe size={14} className="text-secondary" />
                        {exp.company}
                      </div>
                    </div>

                    <p className="text-muted leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-2.5 py-1 bg-primary/5 text-primary text-[10px] font-bold rounded-lg uppercase tracking-wider border border-primary/10 font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

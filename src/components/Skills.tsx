import React from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Wrench, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'PostgreSQL', level: 65 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 60 },
      { name: 'Figma', level: 75 },
      { name: 'AWS', level: 50 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and proficiency levels across different domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary">{category.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

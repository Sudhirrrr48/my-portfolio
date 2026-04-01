import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ rotateX: 5, rotateY: 5, scale: 1.01 }}
          viewport={{ once: true }}
          style={{ perspective: 1000 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 font-display">Let's Connect</h2>
          <p className="text-muted text-lg mb-10">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a href="mailto:sudhirmaurya2726@gmail.com" className="w-full max-w-md flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted uppercase font-bold tracking-widest">Email Me</p>
                <p className="text-white font-medium">sudhirmaurya2726@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-4">
              {[
                { icon: <Github />, label: 'GitHub', href: 'https://github.com/Sudhirrrr48' },
                { icon: <Linkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sudhirmaurya48' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { Trophy, Star, ExternalLink } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { GradientHeading } from '../../components/ui/GradientHeading';
import { hallOfFame } from '../../data/achievements';
import { motion } from 'framer-motion';

export function HallOfFame() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center mb-12">
        <motion.p 
          className="text-[var(--primary)] font-medium mb-2 tracking-wide uppercase"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Star Graduates
        </motion.p>
        <GradientHeading align="center">
        <div className="flex items-center justify-center gap-2">
            <Trophy className="h-7 w-7 text-[var(--primary-light)]" />
          Hall of Fame
        </div>
      </GradientHeading>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {hallOfFame.map((alumni, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" className="group overflow-hidden h-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                <motion.img
                src={alumni.image}
                alt={alumni.name}
                  className="w-full h-full object-cover object-[50%_35%]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
              />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darker)]/90 via-[var(--bg-dark)]/60 to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4 bg-[var(--primary)]/20 backdrop-blur-md border border-[var(--primary)]/20 rounded-full px-3 py-1 flex items-center">
                  <Star className="h-3 w-3 text-[var(--primary)] mr-1" />
                  <span className="text-xs font-medium text-white">{alumni.year} Graduate</span>
                </div>
                
                {alumni.link && (
                  <div className="absolute top-4 right-4">
                    <a 
                      href={alumni.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-[var(--primary)]/80 backdrop-blur-md p-2 rounded-full text-white transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-light)] group-hover:text-[var(--primary-light)] transition-colors">
                    {alumni.name}
                  </h3>
                  <p className="text-[var(--primary)] font-medium mt-1">{alumni.achievement}</p>
            </div>
                <p className="text-[var(--text-dim)]">{alumni.description}</p>
            </div>
          </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
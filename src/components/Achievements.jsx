import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Star, Trophy } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 100 }}
    className="bg-slate-800/50 p-6 rounded-2xl text-center border border-white/5 hover:border-accent-emerald/50 transition-colors"
  >
    <div className="mx-auto w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center text-accent-emerald mb-4">
      <Icon size={24} />
    </div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </motion.div>
);

const Achievements = () => {
  const stats = [
    { icon: Trophy, value: "4330", label: "CV Raman Talent Search Rank" },
    { icon: Award, value: "1st", label: "District Level Kho-Kho" },
    { icon: Star, value: "4+", label: "Professional Certifications" },
    { icon: Code, value: "Drawing", label: "Certificate of Excellence" },
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-accent-indigo/5 to-slate-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-400">Milestones in my coding journey.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

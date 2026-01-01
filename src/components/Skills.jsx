import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="glass-card p-6 rounded-2xl h-full hover:bg-slate-800/80 transition-colors"
    >
        <div className="flex items-center gap-3 mb-4 text-accent-emerald">
            <Icon size={24} />
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300 border border-white/5 hover:border-accent-DEFAULT/50 hover:text-white transition-colors cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "Languages",
            icon: Code,
            skills: ["C", "Java", "Python", "MySQL"],
            delay: 0.2
        },
        {
            title: "Frameworks & AI",
            icon: Server,
            skills: ["Pandas", "Angular", "Tensor Flow", "HTML/CSS/JS"],
            delay: 0.4
        },
        {
            title: "Tools & Platforms",
            icon: Wrench,
            skills: ["Excel", "VS Code", "Git", "GitHub", "Eclipse", "Google Colab"],
            delay: 0.6
        }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <div key={category.title} className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
                            <SkillCard {...category} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

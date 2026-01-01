import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

const ProjectCard = ({ title, description, stack, impact, image, link, github }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-accent-DEFAULT/10 transition-all duration-300 group"
        >
            <div className="relative h-48 overflow-hidden bg-slate-800">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                        <span className="text-4xl font-bold opacity-20">{title[0]}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-emerald transition-colors">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {description}
                </p>

                {impact && (
                    <div className="flex items-center gap-2 mb-4 text-accent-emerald bg-accent-emerald/10 px-3 py-2 rounded-lg text-sm font-medium">
                        <TrendingUp size={16} />
                        {impact}
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                    {stack.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-accent-DEFAULT transition-colors">
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    )}
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-accent-DEFAULT transition-colors">
                            <Github size={16} /> Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

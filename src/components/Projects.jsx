import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Developed a responsive personal portfolio website using HTML, CSS, and JavaScript. Designed a clean UI to showcase projects, skills, and experience with optimized performance and SEO.",
      stack: ["HTML", "CSS", "JavaScript"],
      impact: "Professional Branding",
      image: null,
      link: "#",
      github: "https://github.com/kolliradhakrishna"
    },
    {
      title: "Measuring the Pulse of Prosperity",
      description: "Data Analytics Project that generates customized artistic prompts. Built a web-based platform utilizing JavaScript logic for dynamic prompt outputs based on user preferences.",
      stack: ["HTML", "JavaScript", "Data Analytics"],
      impact: "Adaptive prompt generation",
      image: null,
      link: "#",
      github: "https://github.com/kolliradhakrishna"
    },
    {
      title: "RMP Minds - Medical Assistance",
      description: "A web application that collects key health inputs (height, weight, symptoms) and generates basic medical suggestions using a decision-tree algorithm.",
      stack: ["HTML", "CSS", "JavaScript"],
      impact: "Quick initial health assessment",
      image: null,
      link: "#",
      github: "https://github.com/kolliradhakrishna"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my best work, ranging from full-stack web applications to complex algorithmic solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

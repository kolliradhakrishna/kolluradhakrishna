import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import MouseTrail from './MouseTrail';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <MouseTrail />
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-DEFAULT/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-emerald/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex-1"
          >
            <h2 className="text-xl md:text-2xl text-accent-emerald font-semibold mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
              Kollu Radha <br /> Krishna
            </h1>

            <div className="h-12 md:h-16 mb-8 text-xl md:text-3xl text-gray-400 font-mono">
              <TypewriterText text="AI/ML Enthusiast" />
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
              <SocialButton href="https://github.com/kolliradhakrishna" icon={<Github />} label="GitHub" delay={0.1} />
              <SocialButton href="https://www.linkedin.com/in/radha-krishna-kolli-1818462b2/" icon={<Linkedin />} label="LinkedIn" delay={0.2} />
              <SocialButton href="mailto:kolliradhakrishna4@gmail.com" icon={<Mail />} label="Email" delay={0.3} />
              <a href="/kollu-radha-krishna-resume.jpg" target="_blank" className="flex items-center gap-2 bg-gradient-to-r from-accent-DEFAULT to-accent-emerald text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-DEFAULT/25 transition-all transform hover:-translate-y-1">
                <FileText size={20} />
                View Resume
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-DEFAULT to-accent-emerald rounded-full opacity-20 blur-2xl animate-pulse" />
              <img
                src="/kollu-radha-krishna.png"
                alt="Kollu Radha Krishna"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = React.useState('');

  React.useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const SocialButton = ({ href, icon, label, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: "spring", stiffness: 200 }}
    className="p-3 bg-white/5 rounded-full hover:bg-white/10 text-gray-300 hover:text-accent-DEFAULT hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default Hero;

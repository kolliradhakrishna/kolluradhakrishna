import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const TimelineItem = ({ title, school, period, score, side, index }) => {
    const isLeft = side === 'left';

    return (
        <div className={`flex items-center justify-between w-full mb-8 ${isLeft ? 'flex-row-reverse' : ''}`}>
            <div className="hidden md:block w-5/12" />

            <div className="z-20 flex items-center order-1 bg-accent-DEFAULT shadow-xl w-8 h-8 rounded-full border-4 border-slate-900">
                <div className="mx-auto w-2 h-2 bg-white rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`order-1 glass-card p-6 rounded-lg shadow-xl w-full md:w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}
            >
                <h3 className="mb-1 font-bold text-white text-xl">{title}</h3>
                <h4 className="mb-2 font-semibold text-accent-emerald">{school}</h4>
                <p className="text-sm text-gray-400 mb-2">{period}</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-DEFAULT/10 text-accent-DEFAULT ${isLeft ? 'flex-row-reverse gap-2' : 'gap-2'}`}>
                    <span className="w-2 h-2 rounded-full bg-accent-DEFAULT animate-pulse" />
                    Score: {score}
                </div>
            </motion.div>
        </div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    My Journey
                </motion.h2>

                <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
                    {/* Scroll-triggered growth line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute border-opacity-20 border-gray-700 h-full border-l-2 left-4 md:left-1/2 ml-[3px] md:-ml-1 top-0"
                    />

                    <TimelineItem
                        title="B.Tech Computer Science"
                        school="Rise Krishna Sai Prakasam Group of Inst."
                        period="Aug 2022 - Present"
                        score="7.2 CGPA"
                        side="left"
                        index={0}
                    />
                    <TimelineItem
                        title="Intermediate (Trendsetters)"
                        school="Gnana Saraswathi Junior College"
                        period="Jul 2020 - Mar 2022"
                        score="60%"
                        side="right"
                        index={1}
                    />
                    <TimelineItem
                        title="Matriculation"
                        school="Oxford High School"
                        period="Mar 2021"
                        score="100%"
                        side="left"
                        index={2}
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const education = [
  {
    school: "Lovely Professional University",
    degree: "B.Tech CSE",
    cgpa: "7.42 CGPA",
    year: "2022 - 2026",
    color: "text-indigo border-indigo"
  },
  {
    school: "Oxford High School",
    degree: "Intermediate",
    cgpa: "100%",
    year: "2020 - 2022",
    color: "text-emerald border-emerald"
  }
];

export default function EducationTimeline() {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        controls.start("grow");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section id="education" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-indigo mb-8 text-center">Education</h2>
      <div ref={ref} className="relative pl-6 border-l-4 border-indigo/40">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ scaleY: 0 }}
            animate={controls}
            variants={{ grow: { scaleY: 1, transition: { duration: 0.7, delay: i * 0.2 } } }}
            className={`origin-top mb-10 last:mb-0 pl-6 relative`}
            style={{ transformOrigin: "top left" }}
          >
            <div className={`absolute -left-7 top-0 w-5 h-5 rounded-full border-4 ${edu.color} bg-midnight`}></div>
            <div className="bg-slatecard/80 rounded-xl p-5 shadow-lg">
              <h3 className="text-xl font-semibold mb-1">{edu.school}</h3>
              <span className="block text-emerald font-bold mb-1">{edu.degree}</span>
              <span className="block text-slate-300 mb-1">{edu.cgpa}</span>
              <span className="block text-slate-400 text-sm">{edu.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java"],
    color: "text-indigo border-indigo"
  },
  {
    category: "Frameworks",
    items: ["React", "Express"],
    color: "text-emerald border-emerald"
  },
  {
    category: "DevOps/Tools",
    items: ["Docker", "Linux", "Git"],
    color: "text-slate-200 border-slate-400"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
};

export default function SkillsBento() {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-indigo mb-8 text-center">Skills Dashboard</h2>
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.category}
            variants={item}
            className={`rounded-2xl border-2 bg-slatecard/80 shadow-xl p-8 flex flex-col items-center ${skill.color}`}
          >
            <span className="text-lg font-semibold mb-3">{skill.category}</span>
            <ul className="flex flex-wrap gap-3 justify-center">
              {skill.items.map((s) => (
                <li key={s} className="bg-midnight px-4 py-1 rounded-full text-base font-medium border border-slate-600">
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

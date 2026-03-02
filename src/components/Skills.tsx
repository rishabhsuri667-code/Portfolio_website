import { motion } from "framer-motion";
import { Code, BarChart3, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code size={20} />,
    skills: [
      { name: "Python (Pandas, NumPy, Matplotlib)", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Java (Basic)", level: 50 },
    ],
  },
  {
    title: "Analytics",
    icon: <BarChart3 size={20} />,
    skills: [
      { name: "Data Cleaning", level: 90 },
      { name: "Exploratory Data Analysis", level: 85 },
      { name: "KPI Development", level: 75 },
      { name: "Dashboard Design", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: <Wrench size={20} />,
    skills: [
      { name: "Power BI", level: 80 },
      { name: "Tableau", level: 75 },
      { name: "Excel", level: 90 },
      { name: "Jupyter Notebook", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            What I <span className="gradient-text">work with</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {cat.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

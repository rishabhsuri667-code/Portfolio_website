import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
            A bit about <span className="gradient-text">me</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg leading-relaxed mb-12"
        >
          I am a Data Analyst passionate about working with data to uncover insights and drive decisions.
          I specialize in data cleaning, exploratory data analysis, dashboard creation, and KPI reporting.
          I am currently building real-world analytics projects and continuously improving my technical expertise.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-lg">Education</h3>
            </div>
            <p className="font-medium text-foreground">B.Tech in Computer Science</p>
            <p className="text-muted-foreground text-sm">IT Bhopal University • 2022 – 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="text-accent" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-lg">Certifications</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Deloitte Virtual Simulation Internships (Forage)</li>
              <li>Japanese Language Certification (JLPT N5)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

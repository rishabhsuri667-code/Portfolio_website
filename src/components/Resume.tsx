import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Resume</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            My <span className="gradient-text">CV</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Download my resume to learn more about my experience, skills, and qualifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-8 md:p-12 rounded-xl inline-block"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <FileDown className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">Rishabh Suri — Resume</h3>
              <p className="text-sm text-muted-foreground">PDF • Updated 2025</p>
            </div>
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-10">
              <a href="/resume.pdf" download>
                <FileDown size={18} className="mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

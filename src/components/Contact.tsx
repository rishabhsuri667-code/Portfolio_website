import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Interested in working together or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-8">
            <a href="mailto:rishabh@gmail.com">
              <Mail size={18} className="mr-2" />
              Email Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-glass-border text-foreground hover:bg-secondary px-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-glass-border text-foreground hover:bg-secondary px-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tools: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Sales Performance Dashboard",
    description:
      "Interactive Power BI dashboard tracking regional sales KPIs, revenue trends, and product performance with drill-through filters and dynamic visuals.",
    tools: ["Power BI", "Excel", "DAX"],
    github: "#",
    demo: "#",
  },
  {
    title: "Customer Segmentation Analysis",
    description:
      "Segmented 10K+ customer records using RFM analysis and K-Means clustering to identify high-value customers and optimize marketing strategies.",
    tools: ["Python", "SQL", "Pandas", "Matplotlib"],
    github: "#",
    demo: "#",
  },
  {
    title: "KPI Reporting System",
    description:
      "Automated weekly KPI reports combining Excel data pipelines with Tableau dashboards, reducing manual reporting time by 60%.",
    tools: ["Excel", "Tableau", "SQL"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Featured <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card p-6 rounded-xl group hover:border-primary/30 transition-colors duration-300 flex flex-col"
            >
              <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button asChild variant="outline" size="sm" className="rounded-full border-glass-border text-foreground hover:bg-secondary flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={14} className="mr-1.5" />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="mr-1.5" />
                    Demo
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

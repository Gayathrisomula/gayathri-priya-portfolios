import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import exam from "@/assets/project-exam.jpg";
import ems from "@/assets/project-ems.jpg";
import landing from "@/assets/project-landing.jpg";

const projects = [
  {
    title: "Online Exam Portal",
    description:
      "Secure exam platform with authentication, timed MCQ tests, and instant result generation.",
    image: exam,
    tags: ["React", "JavaScript", "SQL"],
    features: ["User authentication", "Timer-based exam", "MCQ system", "Result generation"],
  },
  {
    title: "Employee Management System",
    description:
      "Full-stack CRUD application with employee dashboards, search, and filtering capabilities.",
    image: ems,
    tags: ["React", "Java", "Spring Boot", "MySQL"],
    features: ["CRUD operations", "Dashboard", "Search & filters", "Responsive"],
  },
  {
    title: "Modern Responsive Landing Page",
    description:
      "Conversion-focused landing page with smooth animations and a polished mobile-first UI.",
    image: landing,
    tags: ["React", "Tailwind CSS"],
    features: ["Responsive design", "Smooth animations", "Modern UI", "Mobile-friendly"],
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work"
        description="A glimpse into the products I've designed and engineered."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group glass rounded-2xl overflow-hidden shadow-elegant hover:border-primary/40 transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <ul className="mt-4 grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-2">
                <a
                  href="#"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-2 text-xs font-medium hover:bg-secondary transition"
                >
                  <Github className="w-3.5 h-3.5" /> Code
                </a>
                <a
                  href="#"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

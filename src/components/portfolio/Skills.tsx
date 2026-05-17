import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  { icon: Server, title: "Backend", items: ["Java", "Spring Boot", "REST APIs"] },
  { icon: Database, title: "Database", items: ["SQL", "MySQL"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="Technologies I work with"
        description="A versatile stack to build full-fledged products end to end."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground mb-4 shadow-glow">
              <g.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold mb-3">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

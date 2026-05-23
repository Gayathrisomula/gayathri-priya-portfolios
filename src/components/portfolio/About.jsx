import { motion } from "framer-motion";
import { GraduationCap, Code, Layers, Rocket } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const stats = [
  { icon: Code, value: "10+", label: "Technologies" },
  { icon: Layers, value: "3+", label: "Projects Built" },
  { icon: Rocket, value: "1+", label: "Year Experience" },
  { icon: GraduationCap, value: "B.Tech", label: "CSE Graduate" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About Me" title="Crafting code with purpose" />
      <div className="grid lg:grid-cols-5 gap-10 items-start">
<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 shadow-elegant"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a <span className="text-primary font-medium">Computer Science graduate</span> with a
            passion for building elegant digital products. I enjoy bridging the gap between
            thoughtful design and robust engineering — crafting interfaces that feel intuitive and
            backends that scale with confidence.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            My toolkit spans{" "}
            <span className="text-foreground">React, Java, Spring Boot, SQL, HTML, CSS,</span> and
            modern JavaScript. I thrive on solving real-world problems, shipping clean code, and
            continuously learning what's next in the web ecosystem.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {[
              "Frontend Development",
              "Backend Engineering",
              "REST API Design",
              "Database Modeling",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
<motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <s.icon className="w-6 h-6 text-primary mb-3" />
              <div className="text-2xl font-bold font-display">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}





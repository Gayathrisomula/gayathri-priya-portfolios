import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "./Section";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Journey" title="Experience & Education" />
      <div className="grid lg:grid-cols-2 gap-6">
<motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7 shadow-elegant"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-primary">
              Experience
            </span>
          </div>
          <h3 className="text-xl font-semibold">Associate Software Developer</h3>
          <p className="text-muted-foreground mt-1">Vijay Software Solutions</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              "Worked on frontend and backend development tasks",
              "Assisted in developing responsive web applications",
              "Built features using Java, React, SQL and Spring Boot",
              "Collaborated on debugging and feature enhancements",
              "Participated in application maintenance and testing",
            ].map((r) => (
              <li key={r} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

<motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7 shadow-elegant"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-primary">
              Education
            </span>
          </div>
          <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
          <p className="text-muted-foreground mt-1">Computer Science Engineering</p>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            Built a strong foundation in data structures, algorithms, databases, and software
            engineering principles — alongside hands-on experience in full-stack web development
            through coursework and personal projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["DSA", "DBMS", "OOP", "Web Development", "OS"].map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-secondary/60 border border-border text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}





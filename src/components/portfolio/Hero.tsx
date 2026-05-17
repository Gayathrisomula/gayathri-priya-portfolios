import { motion } from "framer-motion";
import { ArrowRight, Mail, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "8.5", label: "CGPA · B.Tech" },
  { value: "10+", label: "Projects" },
  { value: "100%", label: "Recruiter Ready" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end pt-28 pb-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          {/* LEFT — name + intro */}
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 backdrop-blur px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available now · Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black uppercase leading-[0.85] tracking-[-0.04em] text-[18vw] sm:text-[14vw] lg:text-[10.5vw]"
            >
              <span className="block text-foreground">GAYATHRI</span>
              <span className="block text-foreground/25">PRIYA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground"
            >
              Java Full Stack Developer · Fresher
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              I build{" "}
              <span className="text-foreground font-medium">clean, responsive, and scalable</span>{" "}
              web applications — from intuitive React frontends to robust Java &amp; Spring Boot
              backends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                View projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-card transition"
              >
                <Mail className="w-4 h-4" /> Contact me
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Meet Gayathri
              </a>
            </motion.div>
          </div>

          {/* RIGHT — stat cards */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 lg:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="flex-1 rounded-2xl border border-border/70 bg-card/40 backdrop-blur p-4 lg:p-5"
              >
                <div className="font-display text-2xl lg:text-4xl font-bold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-14 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-muted-foreground/60" /> Scroll to explore
          </span>
          <span className="hidden sm:inline">React · Java · Spring Boot · MySQL</span>
        </motion.div>
      </div>
    </section>
  );
}

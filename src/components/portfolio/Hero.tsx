import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Phone, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Animated orbs */}
      <motion.div
        aria-hidden
        className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-20 right-0 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Available for freelance & full-time roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Gayathri Priya</span>
            <br />
            <span className="text-foreground/90">Java Full Stack</span>{" "}
            <span className="text-muted-foreground">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Passionate Full Stack Developer focused on building responsive, user-friendly,
            and scalable web applications using React, Java, Spring Boot, and modern
            frontend technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground hover:bg-card transition"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex items-center gap-5 text-muted-foreground"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="h-4 w-px bg-border" />
            <a href="tel:+917995698816" className="flex items-center gap-2 text-sm hover:text-foreground transition">
              <Phone className="w-4 h-4" /> +91 7995698816
            </a>
          </motion.div>
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <div className="relative glass rounded-3xl p-6 shadow-elegant">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 font-mono">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-destructive/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-primary/70" />
                </div>
                <span>developer.tsx</span>
              </div>
              <pre className="text-sm font-mono leading-relaxed text-muted-foreground overflow-x-auto">
{`const dev = {
  name: `}<span className="text-primary">{`'Gayathri Priya'`}</span>{`,
  role: `}<span className="text-primary">{`'Full Stack Dev'`}</span>{`,
  stack: [`}<span className="text-accent">{`'React'`}</span>{`,
    `}<span className="text-accent">{`'Java'`}</span>{`, `}<span className="text-accent">{`'Spring'`}</span>{`,
    `}<span className="text-accent">{`'MySQL'`}</span>{`],
  passion: `}<span className="text-primary">{`'Clean UI'`}</span>{`,
  available: `}<span className="text-primary">{`true`}</span>{`,
};`}
              </pre>
              <div className="mt-5 flex items-center gap-2 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-muted-foreground">Currently building amazing things</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg">
            Gayathri Priya<span className="text-primary">.</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Building modern and scalable web experiences.
          </p>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:gayathri.somula@gmail.com"
            aria-label="Email"
            className="hover:text-primary transition"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gayathri Priya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

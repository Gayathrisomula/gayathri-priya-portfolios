import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { Section, SectionHeader } from "./Section";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something together"
        description="Open to freelance projects, full-time opportunities, and meaningful collaborations."
      />
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: "gayathri.somula@gmail.com",
              href: "mailto:gayathri.somula@gmail.com",
            },
            { icon: Phone, label: "Phone", value: "+91 7995698816", href: "tel:+917995698816" },
            { icon: MapPin, label: "Location", value: "India" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="block glass rounded-2xl p-5 hover:border-primary/40 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary/60 border border-border grid place-items-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium mt-0.5">{c.value}</div>
                </div>
              </div>
            </a>
          ))}

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-xl glass grid place-items-center hover:text-primary hover:border-primary/40 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-xl glass grid place-items-center hover:text-primary hover:border-primary/40 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = data.get("name");
            const email = data.get("email");
            const msg = data.get("message");
            window.location.href = `mailto:gayathri.somula@gmail.com?subject=Portfolio%20inquiry%20from%20${name}&body=${encodeURIComponent(String(msg))}%0A%0AReply-to:%20${email}`;
          }}
          className="lg:col-span-3 glass rounded-2xl p-7 shadow-elegant space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Your Name" placeholder="Jane Doe" />
            <Field name="email" label="Email" type="email" placeholder="jane@example.com" />
          </div>
          <Field name="subject" label="Subject" placeholder="Project inquiry" />
          
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="mt-2 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ name, label, type = "text", placeholder }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}
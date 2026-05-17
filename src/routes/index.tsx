import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gayathri Priya — Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Gayathri Priya, a Java Full Stack Developer building responsive, user-friendly, and scalable web applications with React, Java, and Spring Boot.",
      },
      { property: "og:title", content: "Gayathri Priya — Java Full Stack Developer" },
      {
        property: "og:description",
        content: "Premium portfolio showcasing full stack projects, skills, and experience.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

import { About } from "@/components/site/About";
import { AILab } from "@/components/site/AILab";
import { Contact } from "@/components/site/Contact";
import { Cursor } from "@/components/site/Cursor";
import { Education } from "@/components/site/Education";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Journey } from "@/components/site/Journey";
import { Marquee } from "@/components/site/Marquee";
import { Nav } from "@/components/site/Nav";
import { Preloader } from "@/components/site/Preloader";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";

const TITLE =
  "Bhoomi Jakkannavar — Aspiring Software Engineer | Full Stack Developer | AI Enthusiast";
const DESCRIPTION =
  "Portfolio of Bhoomi Jakkannavar, a BCA student and aspiring Software Developer passionate about building modern web applications, full stack technologies, and innovative digital solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    if (!ready) return;
    window.scrollTo(0, 0);
  }, [ready]);

  return (
    <div className="relative min-h-screen bg-background">
      <Preloader onDone={onDone} />
      <Cursor />
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary shadow-[0_0_12px_#3B82F6]"
      />
      <Nav />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
        <Marquee
          items={[
            "Software Engineering",
            "Full Stack Development",
            "AI-Powered Solutions",
            "React & Node.js",
            "Java & Python",
            "Modern Web Applications",
            "BCA • May 2027",
          ]}
        />
        <About />
        <Skills />
        <Projects />
        <AILab />
        <Journey />
        <Education />
        <Contact />
        <Footer />
      </motion.main>
    </div>
  );
}

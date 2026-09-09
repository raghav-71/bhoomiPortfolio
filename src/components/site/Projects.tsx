import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Github, Users, ArrowDown } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PROJECTS, type Project } from "@/lib/portfolio-data";
import {
  syncButtonVariants,
  syncContainerVariants,
  syncDescVariants,
  syncImageVariants,
  syncNameVariants,
  syncTagItemVariants,
  syncTagListVariants,
  syncTitleVariants,
} from "@/lib/animations";
import { SectionHeading } from "./Reveal";

function ProjectRow({
  project,
  i,
  onSelectProject,
}: {
  project: Project;
  i: number;
  onSelectProject: (project: Project) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const flip = i % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={syncContainerVariants}
      className="grid items-center gap-8 border-b border-border py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24"
    >
      {/* 0.0s — Project Image (fade-in + subtle scale & slide-up) */}
      <motion.div
        variants={syncImageVariants}
        className={`group relative overflow-hidden rounded-xl border border-primary/20 bg-surface w-full ${flip ? "lg:order-2" : ""}`}
      >
        <div className="aspect-16/10 overflow-hidden bg-[#020C1B] w-full">
          <motion.img
            src={project.image}
            alt={`${project.title} — ${project.category} interface`}
            width={1280}
            height={800}
            loading="lazy"
            style={{ y: imageY }}
            className="h-[116%] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 glow-navy" />

        <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-primary/30 bg-[#0A192F]/85 px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-primary uppercase backdrop-blur-md">
            {project.year}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-[#020C1B]/85 px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[9px] sm:text-[10px] tracking-wider text-muted-foreground backdrop-blur-md">
            <Users className="h-3 w-3 text-primary shrink-0" />
            <span className="truncate max-w-[160px] sm:max-w-none">{project.collaboration}</span>
          </span>
        </div>
      </motion.div>

      {/* Synchronized Information Column */}
      <div className={flip ? "lg:order-1" : ""}>
        {/* 0.1s — Category / Index Badge */}
        <motion.div
          variants={syncNameVariants}
          className="flex items-center gap-2.5 sm:gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground uppercase"
        >
          <span className="text-primary font-semibold">{project.index}</span>
          <span className="h-px w-6 sm:w-8 bg-border" />
          <span className="truncate">{project.category}</span>
        </motion.div>

        {/* 0.28s — Project Title & Subtitle */}
        <motion.div variants={syncTitleVariants}>
          <h3 className="mt-3 sm:mt-4 font-display text-3xl leading-[0.95] tracking-tight uppercase sm:text-5xl lg:text-6xl text-white">
            {project.title}
          </h3>
          <div className="mt-2 flex items-center gap-2 font-mono text-[11px] sm:text-xs text-primary/90">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            <span>{project.collaboration}</span>
          </div>
        </motion.div>

        {/* 0.44s — Description */}
        <motion.p
          variants={syncDescVariants}
          className="mt-3 sm:mt-4 text-sm leading-relaxed text-foreground/85 sm:text-base lg:text-lg"
        >
          {project.summary}
        </motion.p>

        {/* 0.58s — Features & Tech Badges (Staggered items) */}
        <motion.div
          variants={syncTagListVariants}
          className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2"
        >
          {project.features.slice(0, 3).map((f) => (
            <motion.span
              key={f}
              variants={syncTagItemVariants}
              className="rounded-full border border-primary/25 bg-[#0A192F]/80 px-2.5 py-1 sm:px-3 sm:py-1 font-mono text-[9px] sm:text-[10px] tracking-wider text-muted-foreground"
            >
              {f}
            </motion.span>
          ))}
          {project.features.length > 3 && (
            <motion.span
              variants={syncTagItemVariants}
              className="rounded-full border border-border bg-[#020C1B]/60 px-2.5 py-1 sm:px-3 sm:py-1 font-mono text-[9px] sm:text-[10px] tracking-wider text-muted-foreground/70"
            >
              +{project.features.length - 3} more
            </motion.span>
          )}
          {project.tech.map((t) => (
            <motion.span
              key={t}
              variants={syncTagItemVariants}
              className="rounded-full border border-primary/20 bg-surface-2/60 px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[9px] sm:text-[10px] tracking-wider text-muted-foreground"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        {/* 0.72s — Action Buttons */}
        <motion.div
          variants={syncButtonVariants}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
        >
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-white uppercase shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] cursor-pointer min-h-[44px]"
          >
            <span className="relative z-10">View Project</span>
            <span className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-500 group-hover:scale-x-100" />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:border-primary hover:text-primary hover:bg-primary/10 min-h-[44px]"
          >
            <Github className="h-4 w-4" />
            Code Repository
          </a>
        </motion.div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-10 sm:py-36 w-full max-w-[100vw] overflow-x-hidden">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          code="03 — Selected work"
          title="SELECTED WORK"
          lead="Collaboratively developed platforms showcasing AI-powered scam detection, smart campus management, real-time location tracking, and intelligent fitness coaching."
        />
        <div className="border-t border-border">
          {PROJECTS.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              i={i}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-h-[90vh] w-[94vw] max-w-2xl overflow-y-auto border border-primary/30 bg-[#0A192F]/95 p-4 sm:p-8 backdrop-blur-2xl text-foreground rounded-xl sm:rounded-2xl">
          {selectedProject && (
            <div>
              <DialogHeader className="text-left">
                <div className="flex items-center gap-2.5 sm:gap-3 font-mono text-[10px] sm:text-xs tracking-[0.25em] text-primary uppercase">
                  <span>{selectedProject.index}</span>
                  <span className="h-px w-5 sm:w-6 bg-primary" />
                  <span className="truncate">{selectedProject.category}</span>
                </div>
                <DialogTitle className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-4xl uppercase text-white">
                  {selectedProject.title}
                </DialogTitle>
                <div className="mt-1 flex items-center gap-2 font-mono text-xs text-primary">
                  <Users className="h-3.5 w-3.5 shrink-0" />
                  <span>{selectedProject.collaboration}</span>
                </div>
                <DialogDescription className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {selectedProject.summary}
                </DialogDescription>
              </DialogHeader>

              {/* Step-by-step details: PROBLEM -> SOLUTION -> FEATURES -> TECH STACK */}
              <div className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-4">
                {/* 1. PROBLEM */}
                <div className="rounded-xl border border-primary/20 bg-[#020C1B]/80 p-4 sm:p-5 shadow-sm">
                  <div className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-primary uppercase font-semibold">
                    Problem
                  </div>
                  <p className="mt-1.5 text-xs sm:text-base leading-relaxed text-muted-foreground">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="flex justify-center text-primary/60 py-0.5">
                  <ArrowDown className="h-4 w-4" />
                </div>

                {/* 2. SOLUTION */}
                <div className="rounded-xl border border-primary/20 bg-[#020C1B]/80 p-4 sm:p-5 shadow-sm">
                  <div className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-primary uppercase font-semibold">
                    Solution
                  </div>
                  <p className="mt-1.5 text-xs sm:text-base leading-relaxed text-muted-foreground">
                    {selectedProject.solution}
                  </p>
                </div>

                <div className="flex justify-center text-primary/60 py-0.5">
                  <ArrowDown className="h-4 w-4" />
                </div>

                {/* 3. FEATURES */}
                <div className="rounded-xl border border-primary/20 bg-[#020C1B]/80 p-4 sm:p-5 shadow-sm">
                  <div className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-primary uppercase font-semibold">
                    Features
                  </div>
                  <div className="mt-2.5 sm:mt-3 grid gap-2 sm:grid-cols-2">
                    {selectedProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-mono"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center text-primary/60 py-0.5">
                  <ArrowDown className="h-4 w-4" />
                </div>

                {/* 4. TECH STACK */}
                <div className="rounded-xl border border-primary/20 bg-[#020C1B]/80 p-4 sm:p-5 shadow-sm">
                  <div className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-primary uppercase font-semibold">
                    Tech Stack
                  </div>
                  <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary/30 bg-surface-2 px-2.5 py-1 sm:px-3 sm:py-1 font-mono text-[10px] sm:text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 border-t border-border/80 pt-4 sm:pt-5">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 font-mono text-xs tracking-wider uppercase text-white transition-colors hover:border-primary hover:text-primary hover:bg-primary/10 min-h-[44px]"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub Repository ↗
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full bg-[#020C1B] border border-primary/20 px-5 py-2.5 font-mono text-xs tracking-wider uppercase text-muted-foreground transition-colors hover:text-white cursor-pointer min-h-[44px]"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

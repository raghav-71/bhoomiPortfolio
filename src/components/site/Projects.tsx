import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Users, ArrowDown } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PROJECTS, type Project } from "@/lib/portfolio-data";
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
    <article
      ref={ref}
      className="grid items-center gap-8 border-b border-border py-16 lg:grid-cols-2 lg:gap-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative overflow-hidden rounded-xl border border-primary/20 bg-surface ${flip ? "lg:order-2" : ""}`}
      >
        <div className="aspect-16/10 overflow-hidden bg-[#020C1B]">
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
        
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <span className="rounded-full border border-primary/30 bg-[#0A192F]/80 px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] text-primary uppercase backdrop-blur-md">
            {project.year}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-[#020C1B]/85 px-3 py-1.5 font-mono text-[10px] tracking-wider text-muted-foreground backdrop-blur-md">
            <Users className="h-3 w-3 text-primary" />
            <span className="hidden sm:inline">{project.collaboration}</span>
          </span>
        </div>
      </motion.div>

      <div className={flip ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
          <span className="text-primary font-semibold">{project.index}</span>
          <span className="h-px w-8 bg-border" />
          <span>{project.category}</span>
        </div>

        <h3 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight uppercase sm:text-5xl lg:text-6xl">
          {project.title}
        </h3>

        <div className="mt-2 flex items-center gap-2 font-mono text-xs text-primary/90">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          <span>{project.collaboration}</span>
        </div>

        <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
          {project.summary}
        </p>

        {/* Feature preview chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="rounded-full border border-primary/25 bg-[#0A192F]/80 px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground"
            >
              {f}
            </span>
          ))}
          {project.features.length > 3 && (
            <span className="rounded-full border border-border bg-[#020C1B]/60 px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground/70">
              +{project.features.length - 3} more
            </span>
          )}
        </div>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-primary/20 bg-surface-2/60 px-3 py-1.5 font-mono text-[10px] tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-white uppercase shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] cursor-pointer"
          >
            <span className="relative z-10">View Project</span>
            <span className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-500 group-hover:scale-x-100" />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:border-primary hover:text-primary hover:bg-primary/10"
          >
            <span>GitHub ↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-28 sm:px-10 sm:py-36">
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
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border border-primary/30 bg-[#0A192F]/95 p-6 sm:p-8 backdrop-blur-2xl text-foreground">
          {selectedProject && (
            <div>
              <DialogHeader className="text-left">
                <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-primary uppercase">
                  <span>{selectedProject.index}</span>
                  <span className="h-px w-6 bg-primary" />
                  <span>{selectedProject.category}</span>
                </div>
                <DialogTitle className="mt-3 font-display text-3xl uppercase sm:text-4xl text-white">
                  {selectedProject.title}
                </DialogTitle>
                <div className="mt-1 flex items-center gap-2 font-mono text-xs text-primary">
                  <Users className="h-3.5 w-3.5" />
                  <span>{selectedProject.collaboration}</span>
                </div>
                <DialogDescription className="mt-2 text-base text-muted-foreground">
                  {selectedProject.summary}
                </DialogDescription>
              </DialogHeader>

              {/* Step-by-step details: PROBLEM -> SOLUTION -> FEATURES -> TECH STACK */}
              <div className="mt-8 space-y-4">
                {/* 1. PROBLEM */}
                <div className="rounded-xl border border-primary/20 bg-[#020C1B]/80 p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-primary uppercase">
                    <span>Problem</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="flex justify-center text-primary/60 py-0.5">
                  <ArrowDown className="h-4 w-4" />
                </div>

                {/* 2. SOLUTION */}
                <div className="rounded-xl border border-primary/20 bg-[#020C1B]/80 p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-primary uppercase">
                    <span>Solution</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {selectedProject.solution}
                  </p>
                </div>

                <div className="flex justify-center text-primary/60 py-0.5">
                  <ArrowDown className="h-4 w-4" />
                </div>

                {/* 3. FEATURES */}
                <div className="rounded-xl border border-primary/20 bg-[#020C1B]/80 p-5 shadow-sm">
                  <div className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
                    Features
                  </div>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {selectedProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground/90 font-mono"
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
                <div className="rounded-xl border border-primary/20 bg-[#020C1B]/80 p-5 shadow-sm">
                  <div className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
                    Tech Stack
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary/30 bg-surface-2 px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-border/80 pt-5">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 font-mono text-xs tracking-wider uppercase text-white transition-colors hover:border-primary hover:text-primary hover:bg-primary/10"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub Repository ↗
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full bg-[#020C1B] border border-primary/20 px-5 py-2.5 font-mono text-xs tracking-wider uppercase text-muted-foreground transition-colors hover:text-white cursor-pointer"
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

import { motion } from "motion/react";

import { SKILL_GROUPS } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-10 sm:py-36 w-full max-w-[100vw] overflow-x-hidden">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[40vw] max-w-[500px] bg-[radial-gradient(circle,_rgba(29,78,216,0.18)_0%,_transparent_70%)] blur-[100px] sm:blur-[140px]" />
      <div className="relative mx-auto max-w-[1600px]">
        <SectionHeading
          code="02 — Skills"
          title="SKILLS ⚡"
          lead="Core programming languages, frontend/backend frameworks, developer tools, AI workflows, and professional competencies."
        />

        <div className="border-t border-border">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <div className="group grid gap-3 sm:gap-6 border-b border-border py-5 sm:py-8 md:grid-cols-[auto_200px_1fr] lg:grid-cols-[auto_240px_1fr] md:items-center md:gap-8">
                <span className="font-mono text-[11px] sm:text-xs text-primary font-semibold">
                  {group.code}
                </span>
                <h3 className="font-display text-2xl tracking-tight uppercase transition-colors duration-500 group-hover:text-primary sm:text-3xl lg:text-4xl text-white">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.5 }}
                      className="rounded-full border border-primary/20 bg-surface/80 px-3 py-1.5 sm:px-4 sm:py-2 font-mono text-[10px] sm:text-[11px] tracking-wider text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

import { AI_CAPABILITIES } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function AILab() {
  return (
    <section id="ai" className="relative overflow-hidden bg-[#0A192F]/60 px-6 py-28 sm:px-10 sm:py-36">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -bottom-1/3 left-1/4 h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,_rgba(29,78,216,0.18)_0%,_transparent_70%)] blur-[150px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <SectionHeading
          code="04 — AI engineering"
          title="Intelligence, wired in"
          lead="AI is a core dimension of modern software engineering. I design reliable prompt pipelines, evaluation paths, and API integrations that make web platforms intelligent and dependable."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl bg-border border border-primary/20 md:grid-cols-2">
          {AI_CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.code} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full bg-[#0A192F] p-8 sm:p-12 hover:bg-[#112240] transition-colors duration-500"
              >
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
                  {cap.code}
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_#3B82F6] opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight uppercase sm:text-3xl text-white">
                  {cap.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{cap.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

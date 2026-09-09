import { motion } from "motion/react";

import { AI_CAPABILITIES } from "@/lib/portfolio-data";
import {
  syncContainerVariants,
  syncNameVariants,
  syncTagItemVariants,
  syncTitleVariants,
} from "@/lib/animations";
import { SectionHeading } from "./Reveal";

export function AILab() {
  return (
    <section id="ai" className="relative overflow-hidden bg-[#0A192F]/60 px-4 py-20 sm:px-10 sm:py-36 w-full max-w-[100vw]">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -bottom-1/3 left-1/4 h-[50vw] w-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(29,78,216,0.18)_0%,_transparent_70%)] blur-[100px] sm:blur-[150px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <SectionHeading
          code="04 — AI engineering"
          title="Intelligence, wired in"
          lead="AI is a core dimension of modern software engineering. I design reliable prompt pipelines, evaluation paths, and API integrations that make web platforms intelligent and dependable."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={syncContainerVariants}
          className="grid gap-px overflow-hidden rounded-xl sm:rounded-2xl bg-border border border-primary/20 md:grid-cols-2"
        >
          {AI_CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.code}
              variants={syncTagItemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group h-full bg-[#0A192F] p-5 sm:p-8 lg:p-12 hover:bg-[#112240] transition-colors duration-500"
            >
              <motion.div
                variants={syncNameVariants}
                className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-primary uppercase"
              >
                <span>{cap.code}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_#3B82F6] opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
              <motion.h3
                variants={syncTitleVariants}
                className="mt-4 sm:mt-6 font-display text-xl tracking-tight uppercase sm:text-2xl lg:text-3xl text-white"
              >
                {cap.title}
              </motion.h3>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-muted-foreground">
                {cap.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

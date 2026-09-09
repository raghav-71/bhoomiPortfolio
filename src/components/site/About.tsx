import { motion } from "motion/react";
import { PERSON } from "@/lib/portfolio-data";
import {
  syncContainerVariants,
  syncDescVariants,
  syncTagItemVariants,
  syncTagListVariants,
} from "@/lib/animations";
import { SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-10 sm:py-36 w-full max-w-[100vw] overflow-x-hidden">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          code="01 — About"
          title="ABOUT ME 👩‍💻"
          lead="BCA Student at Bharatesh College of Computer Applications, Belagavi • Aspiring Software Engineer & Full Stack Developer"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={syncContainerVariants}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start"
        >
          {/* Bio text column: 0.44s description + staggered highlight tags at 0.58s */}
          <motion.div variants={syncDescVariants} className="space-y-4 sm:space-y-6">
            {PERSON.bio.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
                {para}
              </p>
            ))}

            <motion.div
              variants={syncTagListVariants}
              className="mt-6 sm:mt-8 flex flex-wrap gap-2 pt-2"
            >
              {PERSON.highlights.map((tag) => (
                <motion.span
                  key={tag}
                  variants={syncTagItemVariants}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 font-mono text-[10px] sm:text-[11px] tracking-wider text-primary transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)]"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Grid: Staggers in synchrony with the bio column */}
          <motion.div
            variants={syncTagListVariants}
            className="w-full grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-primary/20 bg-border shadow-lg"
          >
            {PERSON.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={syncTagItemVariants}
                className="group h-full bg-[#0A192F] p-4 sm:p-6 lg:p-8 transition-colors duration-500 hover:bg-[#112240]"
              >
                <div className="font-display text-3xl sm:text-5xl lg:text-6xl text-primary drop-shadow-[0_0_24px_rgba(59,130,246,0.45)] transition-transform duration-500 group-hover:scale-[1.03]">
                  {stat.value}
                </div>
                <div className="mt-2 sm:mt-3 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground uppercase transition-colors group-hover:text-foreground/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

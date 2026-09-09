import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { JOURNEY } from "@/lib/portfolio-data";
import {
  syncContainerVariants,
  syncDescVariants,
  syncNameVariants,
  syncTitleVariants,
} from "@/lib/animations";
import { SectionHeading } from "./Reveal";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative px-4 py-20 sm:px-10 sm:py-36 w-full max-w-[100vw] overflow-x-hidden">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          code="05 — Journey"
          title="MY JOURNEY 📈"
          lead="A progression of continuous learning, collaborative project building, and working towards my Software Engineering career."
        />

        <div ref={ref} className="relative pl-6 sm:pl-12">
          {/* Base vertical line */}
          <div className="absolute top-0 bottom-0 left-1 sm:left-2 w-px bg-border -translate-x-1/2" />
          {/* Animated fill line */}
          <motion.div
            style={{ height }}
            className="absolute top-0 left-1 sm:left-2 w-px bg-primary shadow-[0_0_8px_#3B82F6] -translate-x-1/2"
          />

          {JOURNEY.map((item) => (
            <motion.div
              key={item.year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={syncContainerVariants}
              className="group relative pb-10 sm:pb-14 last:pb-0"
            >
              {/* Connecting Dot perfectly centered on the line */}
              <span className="absolute top-1.5 left-1 sm:left-2 -translate-x-1/2 h-2.5 w-2.5 rounded-full border border-primary bg-[#030712] transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_12px_#3B82F6]" />
              
              <motion.div
                variants={syncNameVariants}
                className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-primary uppercase font-semibold"
              >
                {item.year}
              </motion.div>
              <motion.h3
                variants={syncTitleVariants}
                className="mt-2 sm:mt-3 font-display text-xl tracking-tight uppercase sm:text-3xl lg:text-4xl text-white"
              >
                {item.role}
              </motion.h3>
              <motion.div
                variants={syncDescVariants}
                className="mt-1 font-mono text-[11px] sm:text-xs tracking-wider text-muted-foreground uppercase"
              >
                {item.org}
              </motion.div>
              <motion.p
                variants={syncDescVariants}
                className="mt-3 max-w-2xl text-xs sm:text-base leading-relaxed text-muted-foreground"
              >
                {item.body}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

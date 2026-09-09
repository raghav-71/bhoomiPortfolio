import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { JOURNEY } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          code="05 — Journey"
          title="MY JOURNEY 📈"
          lead="A progression of continuous learning, collaborative project building, and working towards my Software Engineering career."
        />

        <div ref={ref} className="relative pl-8 sm:pl-14">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-border sm:left-2" />
          <motion.div
            style={{ height }}
            className="absolute top-0 left-0 w-px bg-primary shadow-[0_0_8px_#3B82F6] sm:left-2"
          />

          {JOURNEY.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.06}>
              <div className="group relative pb-14 last:pb-0">
                <span className="absolute top-2 -left-8 h-2.5 w-2.5 rounded-full border border-primary bg-background transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_12px_#3B82F6] sm:-left-[3.1rem]" />
                <div className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase">
                  {item.year}
                </div>
                <h3 className="mt-3 font-display text-2xl tracking-tight uppercase sm:text-4xl text-white">
                  {item.role}
                </h3>
                <div className="mt-2 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  {item.org}
                </div>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

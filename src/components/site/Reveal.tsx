import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 20, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -20px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  code,
  title,
  lead,
}: {
  code: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="mb-10 sm:mb-14 md:mb-20">
      <div className="flex items-center gap-2.5 sm:gap-3 font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary uppercase font-semibold">
        <span className="h-px w-6 sm:w-8 bg-primary shadow-[0_0_8px_#3B82F6]" />
        {code}
      </div>
      <h2 className="mt-3 sm:mt-5 font-display whitespace-pre-line text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-white">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

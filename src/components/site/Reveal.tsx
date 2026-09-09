import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 28, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
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
    <div className="mb-14 md:mb-20">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-primary uppercase">
          <span className="h-px w-8 bg-primary shadow-[0_0_8px_#3B82F6]" />
          {code}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display whitespace-pre-line text-4xl leading-[0.95] tracking-tight uppercase sm:text-6xl lg:text-7xl">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

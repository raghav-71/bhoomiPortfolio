import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { PERSON } from "@/lib/portfolio-data";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const total = 1500;
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      const eased = 1 - Math.pow(1 - t, 2);
      setCount(Math.floor(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(step);
      } else {
        window.setTimeout(() => {
          setGone(true);
          onDone();
        }, 420);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!gone ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-[#030712] p-6 sm:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-start justify-between font-mono text-[10px] tracking-[0.35em] text-muted-foreground uppercase sm:text-xs">
            <span className="text-white font-medium">{PERSON.name}</span>
            <span className="text-primary">Portfolio — 2026</span>
          </div>

          <div className="flex items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[18vw] leading-[0.8] tracking-tight sm:text-[12vw] text-white"
            >
              {String(count).padStart(3, "0")}
            </motion.div>
            <div className="hidden pb-4 font-mono text-xs tracking-[0.3em] text-primary uppercase sm:block">
              Loading experience
            </div>
          </div>

          <div className="h-px w-full bg-border">
            <motion.div
              className="h-px bg-primary shadow-[0_0_12px_#3B82F6]"
              animate={{ width: `${count}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

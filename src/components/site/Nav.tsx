import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { NAV_LINKS, PERSON } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 w-full max-w-[100vw]",
          scrolled
            ? "bg-[#030712]/85 backdrop-blur-xl border-b border-primary/20 shadow-[0_10px_30px_rgba(2,12,27,0.8)]"
            : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-10",
            scrolled ? "py-3 sm:py-4" : "py-5 sm:py-6",
          )}
        >
          <button
            onClick={() => go("hero")}
            className="flex min-w-0 items-center gap-2.5 sm:gap-3 text-left cursor-pointer min-h-[44px]"
            aria-label="Back to top"
          >
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary shadow-[0_0_8px_#3B82F6]" />
            <span className="truncate font-mono text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white font-medium">
              B.Jakkannavar
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={cn(
                  "relative px-3.5 py-2 font-mono text-[11px] tracking-[0.2em] uppercase transition-colors cursor-pointer",
                  active === link.id
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-white",
                )}
              >
                {link.label}
                {active === link.id ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-primary shadow-[0_0_8px_#3B82F6]"
                  />
                ) : null}
              </button>
            ))}
            <a
              href={`mailto:${PERSON.email}`}
              className="ml-4 rounded-full border border-primary/40 px-5 py-2 font-mono text-[11px] tracking-[0.2em] text-primary uppercase transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] min-h-[38px] inline-flex items-center"
            >
              Let&apos;s talk
            </a>
          </nav>

          {/* Mobile Hamburger Button with guaranteed 44px touch target */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden cursor-pointer rounded-lg border border-primary/20 bg-[#0A192F]/50 p-2 text-white"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-foreground transition-transform duration-300",
                open && "translate-y-[8px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-foreground transition-opacity duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-foreground transition-transform duration-300",
                open && "-translate-y-[8px] -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#030712] px-6 pt-24 pb-8 lg:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
            <nav className="relative flex flex-col gap-1 my-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => go(link.id)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline gap-4 border-b border-primary/15 py-3.5 text-left cursor-pointer min-h-[44px]"
                >
                  <span className="font-mono text-[10px] text-primary">0{i + 1}</span>
                  <span className="font-display text-2xl sm:text-3xl tracking-tight uppercase text-white">
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </nav>
            <div className="relative border-t border-primary/20 pt-4 mt-6">
              <a
                href={`mailto:${PERSON.email}`}
                className="font-mono text-xs tracking-[0.2em] text-primary uppercase block py-2 min-h-[44px]"
              >
                {PERSON.email}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

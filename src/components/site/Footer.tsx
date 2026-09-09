import { NAV_LINKS, PERSON } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative border-t border-primary/20 bg-[#020C1B] px-4 pt-12 pb-8 sm:px-10 sm:pt-16 sm:pb-10 w-full max-w-[100vw] overflow-x-hidden">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl sm:text-3xl tracking-tight uppercase text-white">
              {PERSON.name}
            </div>
            <p className="mt-3 sm:mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {PERSON.tagline}
            </p>
          </div>

          <div>
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-primary uppercase font-semibold">
              Navigate
            </div>
            <div className="mt-3 sm:mt-4 flex flex-col items-start gap-1.5 sm:gap-2">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer py-1 min-h-[36px] flex items-center"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-primary uppercase font-semibold">
              Connect
            </div>
            <div className="mt-3 sm:mt-4 flex flex-col items-start gap-1.5 sm:gap-2">
              <a
                href={`mailto:${PERSON.email}`}
                className="text-xs sm:text-sm break-all text-muted-foreground transition-colors hover:text-primary py-1 min-h-[36px] flex items-center"
              >
                {PERSON.email}
              </a>
              {PERSON.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-primary py-1 min-h-[36px] flex items-center"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col gap-2.5 border-t border-primary/20 pt-5 sm:pt-6 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {PERSON.name} • All rights reserved.
          </span>
          <span>Designed & built in {PERSON.location}</span>
        </div>
      </div>
    </footer>
  );
}

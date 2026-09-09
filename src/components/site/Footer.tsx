import { NAV_LINKS, PERSON } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative border-t border-primary/20 bg-[#020C1B] px-6 pt-16 pb-10 sm:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-3xl tracking-tight uppercase text-white">{PERSON.name}</div>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{PERSON.tagline}</p>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
              Navigate
            </div>
            <div className="mt-4 flex flex-col items-start gap-2">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
              Connect
            </div>
            <div className="mt-4 flex flex-col items-start gap-2">
              <a
                href={`mailto:${PERSON.email}`}
                className="text-sm break-all text-muted-foreground transition-colors hover:text-primary"
              >
                {PERSON.email}
              </a>
              {PERSON.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary/20 pt-6 font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {PERSON.name} • All rights reserved.
          </span>
          <span>Designed & built in {PERSON.location}</span>
        </div>
      </div>
    </footer>
  );
}

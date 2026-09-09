import { PERSON } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-10 sm:py-36 w-full max-w-[100vw] overflow-x-hidden">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          code="01 — About"
          title="ABOUT ME 👩‍💻"
          lead="BCA Student at Bharatesh College of Computer Applications, Belagavi • Aspiring Software Engineer & Full Stack Developer"
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start">
          <div className="space-y-4 sm:space-y-6">
            {PERSON.bio.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                  {para}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 pt-2">
                {PERSON.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 font-mono text-[10px] sm:text-[11px] tracking-wider text-primary transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-primary/20 bg-border shadow-lg">
            {PERSON.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="group h-full bg-[#0A192F] p-4 sm:p-6 lg:p-8 transition-colors duration-500 hover:bg-[#112240]">
                  <div className="font-display text-3xl sm:text-5xl lg:text-6xl text-primary drop-shadow-[0_0_24px_rgba(59,130,246,0.45)] transition-transform duration-500 group-hover:scale-[1.03]">
                    {stat.value}
                  </div>
                  <div className="mt-2 sm:mt-3 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground uppercase transition-colors group-hover:text-foreground/90">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

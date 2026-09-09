import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

import profileCutout from "@/assets/profile.png";
import { PERSON } from "@/lib/portfolio-data";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Pinned scroll over 300vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Silky smooth spring physics to eliminate scroll jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  // Layer 2: Decorative Blue Glow Parallax
  const glowY = useTransform(smoothProgress, [0, 0.5, 1], [0, -60, -120]);
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 0.9]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.35, 0.45, 0.25]);

  // Layer 3: Typography Back Layer ("BHOOMI")
  const nameBackY = useTransform(smoothProgress, [0, 0.4], [0, -160]);
  const nameBackOpacity = useTransform(smoothProgress, [0, 0.32], [1, 0]);
  const nameBackScale = useTransform(smoothProgress, [0, 0.4], [1, 0.88]);

  // Layer 5: Typography Front Layer ("JAKKANNAVAR")
  const nameFrontY = useTransform(smoothProgress, [0, 0.4], [0, -120]);
  const nameFrontOpacity = useTransform(smoothProgress, [0, 0.32], [1, 0]);
  const nameFrontScale = useTransform(smoothProgress, [0, 0.4], [1, 0.88]);

  // Layer 4: Profile Image Cutout Transforms
  // SCROLL START (0%): Center, large, y: 80px, scale: 1.3
  // SCROLL MIDDLE (40%): Moving up & left, scale: 1.05
  // SCROLL END (70%-100%): Positioned on left, scale: 0.85
  const desktopImageX = useTransform(
    smoothProgress,
    [0, 0.4, 0.75, 1],
    ["0vw", "-12vw", "-23vw", "-23vw"],
  );
  const desktopImageY = useTransform(smoothProgress, [0, 0.4, 0.75, 1], [80, -20, 0, 0]);
  const desktopImageScale = useTransform(
    smoothProgress,
    [0, 0.4, 0.75, 1],
    [1.28, 1.05, 0.86, 0.86],
  );

  const mobileImageX = useTransform(
    smoothProgress,
    [0, 0.4, 0.75, 1],
    ["0vw", "0vw", "0vw", "0vw"],
  );
  const mobileImageY = useTransform(smoothProgress, [0, 0.4, 0.75, 1], [60, -30, -145, -145]);
  const mobileImageScale = useTransform(
    smoothProgress,
    [0, 0.4, 0.75, 1],
    [1.15, 0.95, 0.72, 0.72],
  );

  const imageX = isMobile ? mobileImageX : desktopImageX;
  const imageY = isMobile ? mobileImageY : desktopImageY;
  const imageScale = isMobile ? mobileImageScale : desktopImageScale;

  // Layer 6: Hero UI elements (Role header, CTA buttons)
  const heroUiOpacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);
  const heroUiY = useTransform(smoothProgress, [0, 0.22], [0, -30]);
  const heroCtaY = useTransform(smoothProgress, [0, 0.22], [0, 30]);

  // Layer 6: Intro Content (animates in from right between 35% and 75%)
  const introOpacity = useTransform(smoothProgress, [0.35, 0.65], [0, 1]);
  const introX = useTransform(smoothProgress, [0.35, 0.65], [isMobile ? 0 : 50, 0]);
  const introY = useTransform(smoothProgress, [0.35, 0.65], [isMobile ? 60 : 20, 0]);

  // Progress Bar & Scroll prompt
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [1, 0.6, 0.6, 0]);

  return (
    <section id="hero" ref={containerRef} className="relative h-[300vh] bg-[#030712]">
      {/* Pinned Viewport Frame */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden px-6 pt-24 pb-8 sm:px-10 lg:px-16">
        {/* Layer 1: Dark canvas background with noise & grid */}
        <div className="grid-lines pointer-events-none absolute inset-0 z-[1] opacity-60" />

        {/* Layer 2: Decorative Blue Glow & Ambient Aura */}
        <motion.div
          style={{ y: glowY, scale: glowScale, opacity: glowOpacity }}
          className="pointer-events-none absolute top-1/4 left-1/2 -z-0 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(29,78,216,0.38)_0%,_rgba(10,25,47,0.25)_45%,_transparent_75%)] blur-[130px]"
        />

        {/* Top Header Information (Hero Phase) */}
        <motion.div
          style={{ y: heroUiY, opacity: heroUiOpacity }}
          className="relative z-[10] mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 font-mono text-[10px] tracking-[0.35em] text-muted-foreground uppercase sm:text-xs"
        >
          <div className="flex items-center gap-3">
            <span className="text-primary font-semibold">{PERSON.role}</span>
            <span className="hidden h-px w-8 bg-border sm:block" />
            <span className="hidden sm:inline">{PERSON.location}</span>
          </div>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_#3B82F6]" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Central Transformation Stage */}
        <div className="relative mx-auto flex h-full w-full max-w-[1600px] items-center justify-center">
          {/* ========================================================================= */}
          {/* HERO PHASE: Overlapping Large Typography */}
          {/* ========================================================================= */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none">
            {/* Layer 3: Typography Back Layer ("BHOOMI") */}
            <motion.div
              style={{ y: nameBackY, opacity: nameBackOpacity, scale: nameBackScale }}
              className="relative z-[3] will-change-transform"
            >
              <h1 className="font-display text-[17vw] leading-[0.80] tracking-tight text-white uppercase sm:text-[14vw] lg:text-[12vw] drop-shadow-[0_12px_32px_rgba(0,0,0,0.9)]">
                {PERSON.heroFirstName}
              </h1>
            </motion.div>

            {/* Layer 5: Typography Front Layer ("JAKKANNAVAR") */}
            <motion.div
              style={{ y: nameFrontY, opacity: nameFrontOpacity, scale: nameFrontScale }}
              className="relative z-[6] -mt-[2vw] will-change-transform"
            >
              <h1 className="text-stroke font-display text-[15vw] leading-[0.80] tracking-tight uppercase sm:text-[13vw] lg:text-[10.5vw] drop-shadow-[0_16px_40px_rgba(0,0,0,0.95)]">
                {PERSON.heroLastName}
              </h1>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* Layer 4: Transparent Profile Cutout Image (Physical Traveling Element) */}
          {/* ========================================================================= */}
          <motion.div
            style={{
              x: imageX,
              y: imageY,
              scale: imageScale,
            }}
            className="pointer-events-none absolute z-[5] flex items-center justify-center will-change-transform"
          >
            {/* Subtle blue rim aura behind the profile */}
            <div className="pointer-events-none absolute h-[115%] w-[115%] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.35)_0%,_rgba(59,130,246,0.15)_45%,_transparent_72%)] blur-[70px]" />

            {/* Transparent Cutout Image Structure - Easy replacement with user portrait */}
            <div className="relative h-[420px] w-[310px] sm:h-[540px] sm:w-[400px] md:h-[620px] md:w-[460px] lg:h-[720px] lg:w-[530px] xl:h-[780px] xl:w-[580px]">
              <img
                src={profileCutout}
                alt={PERSON.name}
                width={700}
                height={933}
                fetchPriority="high"
                className="h-full w-full object-contain object-bottom filter contrast-[1.05] brightness-[0.98] drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
              />
              {/* Soft bottom edge fade so torso blends seamlessly into the dark background */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent" />
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* Layer 6: INTRO PHASE CONTENT (Animates in from right side on Desktop) */}
          {/* ========================================================================= */}
          <motion.div
            style={{
              opacity: introOpacity,
              x: introX,
              y: introY,
            }}
            className="relative z-[10] ml-auto w-full lg:w-[54%] xl:w-[50%]"
          >
            <div className="rounded-2xl border border-primary/20 bg-[#0A192F]/85 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(2,12,27,0.9)]">
              <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-primary uppercase">
                <span className="h-px w-8 bg-primary shadow-[0_0_10px_#3B82F6]" />
                01 — Intro & Background
              </div>

              <h2 className="mt-4 font-display text-3xl leading-[0.95] tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
                Aspiring Software Engineer
                <br />
                <span className="text-primary drop-shadow-[0_0_24px_rgba(59,130,246,0.6)]">
                  & Full Stack Developer
                </span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {PERSON.intro}
              </p>

              {/* What I'm Passionate About Grid */}
              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-primary uppercase">
                  <span>What I&apos;m passionate about</span>
                  <span className="h-px flex-1 bg-border/60" />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {PERSON.passions.map((item) => (
                    <div
                      key={item.value}
                      className="group rounded-lg border border-primary/25 bg-[#020C1B]/80 p-3 sm:p-4 backdrop-blur transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                      <div className="font-display text-2xl tracking-tight text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] sm:text-3xl">
                        {item.value}
                      </div>
                      <div className="mt-1 font-mono text-[9px] tracking-wider text-muted-foreground uppercase transition-colors group-hover:text-foreground/90 sm:text-[10px]">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 font-mono text-[11px] tracking-[0.22em] text-white uppercase shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:bg-blue-600 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]"
                >
                  <span className="relative z-10">View selected work</span>
                  <span className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-500 group-hover:scale-x-100" />
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-primary/40 px-7 py-3.5 font-mono text-[11px] tracking-[0.22em] text-white uppercase transition-colors hover:border-primary hover:text-primary hover:bg-primary/10"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero UI & Transition Progress Bar */}
        <div className="relative z-[10] mx-auto flex w-full max-w-[1600px] flex-col gap-4">
          {/* Initial Hero Action Buttons (Fade out as scroll begins) */}
          <motion.div
            style={{ opacity: heroUiOpacity, y: heroCtaY }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            <div className="hidden max-w-md text-sm text-muted-foreground sm:block">
              {PERSON.tagline}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-primary px-7 py-3 font-mono text-[11px] tracking-[0.25em] text-white uppercase shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]"
              >
                <span className="relative z-10">Explore work</span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-500 group-hover:scale-x-100" />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-primary/40 px-7 py-3 font-mono text-[11px] tracking-[0.25em] text-white uppercase transition-colors hover:border-primary hover:text-primary hover:bg-primary/10"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Persistent Scroll Progress Bar */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="flex items-center justify-between border-t border-primary/20 pt-4 font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase"
          >
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="inline-block h-4 w-px bg-primary shadow-[0_0_8px_#3B82F6]"
              />
              Scroll to transform
            </span>
            <span>Hero &rarr; Intro Experience</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

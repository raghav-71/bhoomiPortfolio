import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

import profileCutout from "@/assets/profile.png";
import { PERSON } from "@/lib/portfolio-data";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [deviceTier, setDeviceTier] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {
    const checkTier = () => {
      const w = window.innerWidth;
      if (w >= 1024) setDeviceTier("desktop");
      else if (w >= 768) setDeviceTier("tablet");
      else setDeviceTier("mobile");
    };
    checkTier();
    window.addEventListener("resize", checkTier);
    return () => window.removeEventListener("resize", checkTier);
  }, []);

  // Track scroll through the 180vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Silky smooth spring physics to eliminate scroll jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.45,
  });

  // Layer 2: Decorative Blue Glow Parallax
  const glowY = useTransform(smoothProgress, [0, 0.5, 1], [0, -40, -80]);
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.15, 0.95]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.35, 0.45, 0.25]);

  // Layer 3: Typography Back Layer ("BHOOMI")
  const nameBackY = useTransform(smoothProgress, [0, 0.28], [0, -100]);
  const nameBackOpacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);
  const nameBackScale = useTransform(smoothProgress, [0, 0.28], [1, 0.92]);

  // Layer 5: Typography Front Layer ("JAKKANNAVAR")
  const nameFrontY = useTransform(smoothProgress, [0, 0.28], [0, -70]);
  const nameFrontOpacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);
  const nameFrontScale = useTransform(smoothProgress, [0, 0.28], [1, 0.92]);

  // Layer 4: Profile Image Cutout Transforms
  // DESKTOP: Glides smoothly to LEFT (-22vw), stays vertically centered at 0
  const desktopImageX = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    ["0vw", "-12vw", "-22vw", "-22vw"],
  );
  const desktopImageY = useTransform(smoothProgress, [0, 0.35, 0.7, 1], [0, 0, 0, 0]);
  const desktopImageScale = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    [1.15, 1.0, 0.88, 0.88],
  );

  // TABLET: Glides to LEFT (-16vw), stays vertically centered at 0
  const tabletImageX = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    ["0vw", "-8vw", "-16vw", "-16vw"],
  );
  const tabletImageY = useTransform(smoothProgress, [0, 0.35, 0.7, 1], [0, 0, 0, 0]);
  const tabletImageScale = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    [1.08, 0.95, 0.82, 0.82],
  );

  // MOBILE: Scales down smoothly and rests cleanly above the intro card
  const mobileImageX = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    ["0vw", "0vw", "0vw", "0vw"],
  );
  const mobileImageY = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    ["0px", "-60px", "-120px", "-120px"],
  );
  const mobileImageScale = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    [0.95, 0.8, 0.65, 0.65],
  );

  const imageX =
    deviceTier === "desktop"
      ? desktopImageX
      : deviceTier === "tablet"
        ? tabletImageX
        : mobileImageX;

  const imageY =
    deviceTier === "desktop"
      ? desktopImageY
      : deviceTier === "tablet"
        ? tabletImageY
        : mobileImageY;

  const imageScale =
    deviceTier === "desktop"
      ? desktopImageScale
      : deviceTier === "tablet"
        ? tabletImageScale
        : mobileImageScale;

  // Hero UI elements (Role header stays, CTA buttons fade out on scroll)
  const heroUiOpacity = useTransform(smoothProgress, [0, 0.16], [1, 0]);
  const heroUiY = useTransform(smoothProgress, [0, 0.16], [0, 20]);
  const heroUiPointerEvents = useTransform(smoothProgress, (p) => (p > 0.14 ? "none" : "auto"));

  // Intro Content: Fades and slides in gracefully from right
  const introOpacity = useTransform(smoothProgress, [0.15, 0.38], [0, 1]);
  const introX = useTransform(
    smoothProgress,
    [0.15, 0.38],
    [deviceTier === "desktop" ? 35 : 0, 0],
  );
  const introY = useTransform(
    smoothProgress,
    [0.15, 0.38],
    [deviceTier === "mobile" ? 40 : 0, 0],
  );
  const introPointerEvents = useTransform(smoothProgress, (p) => (p > 0.2 ? "auto" : "none"));

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-[180vh] bg-[#030712] w-full max-w-[100vw]"
    >
      {/* Pinned 100vh Viewport Frame */}
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden px-4 pt-20 pb-4 sm:px-10 sm:pt-24 sm:pb-6 lg:px-16">
        {/* Layer 1: Dark canvas background with noise & grid */}
        <div className="grid-lines pointer-events-none absolute inset-0 z-[1] opacity-50" />

        {/* Layer 2: Decorative Blue Glow & Ambient Aura */}
        <motion.div
          style={{ y: glowY, scale: glowScale, opacity: glowOpacity }}
          className="pointer-events-none absolute top-1/3 left-1/2 -z-0 h-[60vw] w-[60vw] max-w-[800px] max-h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(29,78,216,0.35)_0%,_rgba(10,25,47,0.22)_45%,_transparent_75%)] blur-[100px] sm:blur-[130px]"
        />

        {/* Top Header Information — Stays anchored and clean */}
        <div className="relative z-[15] mx-auto flex w-full max-w-[1600px] shrink-0 items-center justify-between gap-2 sm:gap-4 font-mono text-[9px] sm:text-xs tracking-[0.18em] sm:tracking-[0.35em] text-muted-foreground uppercase py-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="text-primary font-semibold truncate max-w-[220px] sm:max-w-none">
              {PERSON.role}
            </span>
            <span className="hidden h-px w-8 bg-border sm:block" />
            <span className="hidden md:inline">{PERSON.location}</span>
          </div>
          <span className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_#3B82F6]" />
            <span className="hidden xs:inline">Available for work</span>
            <span className="xs:hidden">Available</span>
          </span>
        </div>

        {/* Central Transformation Stage (flex-1 min-h-0 ensures it centers without overflowing) */}
        <div className="relative mx-auto flex flex-1 min-h-0 w-full max-w-[1600px] items-center justify-center">
          {/* ========================================================================= */}
          {/* HERO PHASE: Overlapping Large Typography */}
          {/* ========================================================================= */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none">
            {/* Layer 3: Typography Back Layer ("BHOOMI") */}
            <motion.div
              style={{ y: nameBackY, opacity: nameBackOpacity, scale: nameBackScale }}
              className="relative z-[3] will-change-transform text-center w-full px-2"
            >
              <h1 className="font-display text-[clamp(3.5rem,13vw,11.5vw)] leading-[0.82] tracking-tight text-white uppercase drop-shadow-[0_12px_32px_rgba(0,0,0,0.9)]">
                {PERSON.heroFirstName}
              </h1>
            </motion.div>

            {/* Layer 5: Typography Front Layer ("JAKKANNAVAR") */}
            <motion.div
              style={{ y: nameFrontY, opacity: nameFrontOpacity, scale: nameFrontScale }}
              className="relative z-[6] -mt-[1.5vw] sm:-mt-[2vw] will-change-transform text-center w-full px-2"
            >
              <h1 className="text-stroke font-display text-[clamp(2.1rem,9.2vw,10vw)] leading-[0.82] tracking-tighter uppercase drop-shadow-[0_16px_40px_rgba(0,0,0,0.95)]">
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
            <div className="pointer-events-none absolute h-[115%] w-[115%] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.35)_0%,_rgba(59,130,246,0.15)_45%,_transparent_72%)] blur-[50px] sm:blur-[70px]" />

            {/* Profile Cutout Image */}
            <div className="relative w-[min(290px,76vw)] h-[min(410px,50vh)] sm:w-[350px] sm:h-[480px] md:w-[410px] md:h-[560px] lg:w-[470px] lg:h-[640px] xl:w-[520px] xl:h-[700px]">
              <img
                src={profileCutout}
                alt={PERSON.name}
                width={700}
                height={933}
                fetchPriority="high"
                className="h-full w-full object-contain object-bottom filter contrast-[1.05] brightness-[0.98] drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
              />
              {/* Soft bottom edge fade so torso blends seamlessly into the dark background */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent" />
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* Layer 6: INTRO PHASE CONTENT (Appears on Desktop Right, Centered cleanly) */}
          {/* ========================================================================= */}
          <motion.div
            style={{
              opacity: introOpacity,
              x: introX,
              y: introY,
              pointerEvents: introPointerEvents,
            }}
            className="relative z-[10] mx-auto lg:ml-auto lg:mr-0 w-full max-w-[96vw] lg:w-[56%] xl:w-[52%]"
          >
            <div className="rounded-xl sm:rounded-2xl border border-primary/25 bg-[#0A192F]/92 p-4 sm:p-7 lg:p-8 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(2,12,27,0.9)] max-h-[75vh] overflow-y-auto">
              {/* Badge */}
              <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs tracking-[0.25em] text-primary uppercase">
                <span className="h-px w-6 sm:w-8 bg-primary shadow-[0_0_10px_#3B82F6]" />
                01 — Intro &amp; Background
              </div>

              {/* Title */}
              <h2 className="mt-2.5 sm:mt-3 font-display text-2xl leading-[0.95] tracking-tight text-white uppercase sm:text-3xl lg:text-4xl xl:text-5xl">
                Aspiring Software Engineer
                <br />
                <span className="text-primary drop-shadow-[0_0_24px_rgba(59,130,246,0.6)]">
                  &amp; Full Stack Developer
                </span>
              </h2>

              {/* Description */}
              <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm lg:text-base">
                {PERSON.intro}
              </p>

              {/* What I'm Passionate About Grid */}
              <div className="mt-3.5 sm:mt-5">
                <div className="mb-2 flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-primary uppercase">
                  <span>What I&apos;m passionate about</span>
                  <span className="h-px flex-1 bg-border/60" />
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 sm:grid-cols-4">
                  {PERSON.passions.map((item) => (
                    <div
                      key={item.value}
                      className="group rounded-lg border border-primary/25 bg-[#020C1B]/80 p-2 sm:p-3 backdrop-blur transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                      <div className="font-display text-base sm:text-lg lg:text-xl tracking-tight text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        {item.value}
                      </div>
                      <div className="mt-0.5 font-mono text-[8px] sm:text-[9px] tracking-wider text-muted-foreground uppercase transition-colors group-hover:text-foreground/90">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-4">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-5 py-2.5 sm:px-6 sm:py-3 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-white uppercase shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:bg-blue-600 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] min-h-[40px]"
                >
                  <span className="relative z-10">View selected work</span>
                  <span className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-500 group-hover:scale-x-100" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary/40 px-5 py-2.5 sm:px-6 sm:py-3 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:border-primary hover:text-primary hover:bg-primary/10 min-h-[40px]"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* Bottom Hero UI: Absolutely positioned so it NEVER pushes the middle stage */}
        {/* ========================================================================= */}
        <motion.div
          style={{
            opacity: heroUiOpacity,
            y: heroUiY,
            pointerEvents: heroUiPointerEvents,
          }}
          className="relative z-[15] mx-auto flex w-full max-w-[1600px] shrink-0 flex-col gap-2 pt-2 border-t border-primary/20"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="hidden max-w-md text-xs text-muted-foreground md:block">
              {PERSON.tagline}
            </div>
            <div className="flex items-center gap-2.5 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <a
                href="#projects"
                className="group relative flex-1 sm:flex-none text-center inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-5 py-2 sm:px-6 sm:py-2.5 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-white uppercase shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]"
              >
                <span className="relative z-10">Explore work</span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-500 group-hover:scale-x-100" />
              </a>
              <a
                href="#contact"
                className="flex-1 sm:flex-none text-center inline-flex items-center justify-center rounded-full border border-primary/40 px-5 py-2 sm:px-6 sm:py-2.5 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:border-primary hover:text-primary hover:bg-primary/10"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-muted-foreground uppercase pt-1">
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="inline-block h-3.5 w-px bg-primary shadow-[0_0_8px_#3B82F6]"
              />
              Scroll down to transform &rarr;
            </span>
            <span className="hidden xs:inline">Hero &rarr; Intro Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

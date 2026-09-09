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
  // DESKTOP: Identical original coordinates & timing preserved
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

  // TABLET (768px - 1023px): Proportionally adapted
  const tabletImageX = useTransform(
    smoothProgress,
    [0, 0.4, 0.75, 1],
    ["0vw", "-6vw", "-16vw", "-16vw"],
  );
  const tabletImageY = useTransform(smoothProgress, [0, 0.4, 0.75, 1], [50, -10, 0, 0]);
  const tabletImageScale = useTransform(
    smoothProgress,
    [0, 0.4, 0.75, 1],
    [1.15, 0.96, 0.78, 0.78],
  );

  // MOBILE (< 768px): Centered, gliding smoothly upward to showcase face + incoming card
  const mobileImageX = useTransform(
    smoothProgress,
    [0, 0.4, 0.75, 1],
    ["0vw", "0vw", "0vw", "0vw"],
  );
  const mobileImageY = useTransform(smoothProgress, [0, 0.4, 0.75, 1], [25, -20, -95, -95]);
  const mobileImageScale = useTransform(
    smoothProgress,
    [0, 0.4, 0.75, 1],
    [1.08, 0.88, 0.68, 0.68],
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

  // Layer 6: Hero UI elements (Role header, CTA buttons)
  const heroUiOpacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);
  const heroUiY = useTransform(smoothProgress, [0, 0.22], [0, -30]);
  const heroCtaY = useTransform(smoothProgress, [0, 0.22], [0, 30]);

  // Layer 6: Intro Content (animates in between 35% and 75%)
  const introOpacity = useTransform(smoothProgress, [0.35, 0.65], [0, 1]);
  const introX = useTransform(
    smoothProgress,
    [0.35, 0.65],
    [deviceTier === "desktop" ? 50 : 0, 0],
  );
  const introY = useTransform(
    smoothProgress,
    [0.35, 0.65],
    [deviceTier === "desktop" ? 0 : 35, 0],
  );

  // Progress Bar & Scroll prompt
  const scrollIndicatorOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.85, 1],
    [1, 0.6, 0.6, 0],
  );

  return (
    <section id="hero" ref={containerRef} className="relative h-[300vh] bg-[#030712] w-full max-w-[100vw] overflow-x-hidden">
      {/* Pinned Viewport Frame */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden px-4 pt-20 pb-6 sm:px-10 sm:pt-24 sm:pb-8 lg:px-16">
        {/* Layer 1: Dark canvas background with noise & grid */}
        <div className="grid-lines pointer-events-none absolute inset-0 z-[1] opacity-60" />

        {/* Layer 2: Decorative Blue Glow & Ambient Aura */}
        <motion.div
          style={{ y: glowY, scale: glowScale, opacity: glowOpacity }}
          className="pointer-events-none absolute top-1/4 left-1/2 -z-0 h-[60vw] w-[60vw] max-w-[800px] max-h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(29,78,216,0.38)_0%,_rgba(10,25,47,0.25)_45%,_transparent_75%)] blur-[100px] sm:blur-[130px]"
        />

        {/* Top Header Information (Hero Phase) */}
        <motion.div
          style={{ y: heroUiY, opacity: heroUiOpacity }}
          className="relative z-[10] mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-2 sm:gap-4 font-mono text-[9px] sm:text-xs tracking-[0.18em] sm:tracking-[0.35em] text-muted-foreground uppercase"
        >
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
              className="relative z-[3] will-change-transform text-center w-full px-2"
            >
              <h1 className="font-display text-[clamp(3.5rem,14vw,12vw)] leading-[0.82] tracking-tight text-white uppercase drop-shadow-[0_12px_32px_rgba(0,0,0,0.9)]">
                {PERSON.heroFirstName}
              </h1>
            </motion.div>

            {/* Layer 5: Typography Front Layer ("JAKKANNAVAR") */}
            <motion.div
              style={{ y: nameFrontY, opacity: nameFrontOpacity, scale: nameFrontScale }}
              className="relative z-[6] -mt-[1.5vw] sm:-mt-[2vw] will-change-transform text-center w-full px-2"
            >
              <h1 className="text-stroke font-display text-[clamp(2.1rem,9.8vw,10.5vw)] leading-[0.82] tracking-tighter uppercase drop-shadow-[0_16px_40px_rgba(0,0,0,0.95)]">
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

            {/* Transparent Cutout Image Structure - Fluid Responsive Sizing */}
            <div className="relative w-[min(280px,76vw)] h-[min(380px,46vh)] sm:h-[480px] sm:w-[350px] md:h-[580px] md:w-[420px] lg:h-[720px] lg:w-[530px] xl:h-[780px] xl:w-[580px]">
              <img
                src={profileCutout}
                alt={PERSON.name}
                width={700}
                height={933}
                fetchPriority="high"
                className="h-full w-full object-contain object-bottom filter contrast-[1.05] brightness-[0.98] drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
              />
              {/* Soft bottom edge fade so torso blends seamlessly into the dark background */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent" />
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* Layer 6: INTRO PHASE CONTENT (Animates in on Desktop right side, Mobile center) */}
          {/* ========================================================================= */}
          <motion.div
            style={{
              opacity: introOpacity,
              x: introX,
              y: introY,
            }}
            className="relative z-[10] ml-auto w-full max-w-[96vw] lg:w-[54%] xl:w-[50%]"
          >
            <div className="rounded-xl sm:rounded-2xl border border-primary/20 bg-[#0A192F]/90 p-4 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(2,12,27,0.9)] max-h-[75vh] overflow-y-auto">
              <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs tracking-[0.25em] text-primary uppercase">
                <span className="h-px w-6 sm:w-8 bg-primary shadow-[0_0_10px_#3B82F6]" />
                01 — Intro & Background
              </div>

              <h2 className="mt-3 font-display text-2xl leading-[0.95] tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
                Aspiring Software Engineer
                <br />
                <span className="text-primary drop-shadow-[0_0_24px_rgba(59,130,246,0.6)]">
                  & Full Stack Developer
                </span>
              </h2>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                {PERSON.intro}
              </p>

              {/* What I'm Passionate About Grid */}
              <div className="mt-4 sm:mt-6">
                <div className="mb-2 sm:mb-3 flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-primary uppercase">
                  <span>What I&apos;m passionate about</span>
                  <span className="h-px flex-1 bg-border/60" />
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-4">
                  {PERSON.passions.map((item) => (
                    <div
                      key={item.value}
                      className="group rounded-lg border border-primary/25 bg-[#020C1B]/80 p-2 sm:p-4 backdrop-blur transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                      <div className="font-display text-lg tracking-tight text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] sm:text-2xl lg:text-3xl">
                        {item.value}
                      </div>
                      <div className="mt-0.5 sm:mt-1 font-mono text-[8px] tracking-wider text-muted-foreground uppercase transition-colors group-hover:text-foreground/90 sm:text-[10px]">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-5 py-2.5 sm:px-7 sm:py-3.5 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-white uppercase shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:bg-blue-600 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] min-h-[42px]"
                >
                  <span className="relative z-10">View selected work</span>
                  <span className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-500 group-hover:scale-x-100" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary/40 px-5 py-2.5 sm:px-7 sm:py-3.5 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:border-primary hover:text-primary hover:bg-primary/10 min-h-[42px]"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero UI & Transition Progress Bar */}
        <div className="relative z-[10] mx-auto flex w-full max-w-[1600px] flex-col gap-2.5 sm:gap-4">
          {/* Initial Hero Action Buttons (Fade out as scroll begins) */}
          <motion.div
            style={{ opacity: heroUiOpacity, y: heroCtaY }}
            className="flex flex-wrap items-center justify-between gap-3 sm:gap-4"
          >
            <div className="hidden max-w-md text-xs text-muted-foreground md:block">
              {PERSON.tagline}
            </div>
            <div className="flex items-center gap-2.5 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <a
                href="#projects"
                className="group relative flex-1 sm:flex-none text-center inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-5 py-2.5 sm:px-7 sm:py-3 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-white uppercase shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] min-h-[42px]"
              >
                <span className="relative z-10">Explore work</span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-500 group-hover:scale-x-100" />
              </a>
              <a
                href="#contact"
                className="flex-1 sm:flex-none text-center inline-flex items-center justify-center rounded-full border border-primary/40 px-5 py-2.5 sm:px-7 sm:py-3 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:border-primary hover:text-primary hover:bg-primary/10 min-h-[42px]"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Persistent Scroll Progress Bar */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="flex items-center justify-between border-t border-primary/20 pt-2.5 sm:pt-4 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground uppercase"
          >
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="inline-block h-3.5 sm:h-4 w-px bg-primary shadow-[0_0_8px_#3B82F6]"
              />
              Scroll to transform
            </span>
            <span className="hidden xs:inline">Hero &rarr; Intro Experience</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

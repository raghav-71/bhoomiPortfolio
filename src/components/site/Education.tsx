import { motion } from "motion/react";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

import { EDUCATION } from "@/lib/portfolio-data";
import {
  syncContainerVariants,
  syncDescVariants,
  syncNameVariants,
  syncTagItemVariants,
  syncTagListVariants,
  syncTitleVariants,
} from "@/lib/animations";
import { SectionHeading } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative px-4 py-20 sm:px-10 sm:py-36 w-full max-w-[100vw] overflow-x-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[35vw] max-w-[500px] bg-[radial-gradient(circle,_rgba(29,78,216,0.15)_0%,_transparent_70%)] blur-[100px] sm:blur-[140px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <SectionHeading
          code="06 — Education"
          title="EDUCATION 🎓"
          lead="Academic foundation and continuous technical learning in computer applications and software development."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={syncContainerVariants}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"
        >
          {/* Main Degree Card */}
          <motion.div
            variants={syncDescVariants}
            className="h-full rounded-xl sm:rounded-2xl border border-primary/25 bg-[#0A192F]/85 p-5 sm:p-8 lg:p-12 backdrop-blur-md relative overflow-hidden transition-all duration-500 hover:border-primary/50 shadow-[0_15px_40px_-10px_rgba(2,12,27,0.8)]"
          >
            <motion.div
              variants={syncNameVariants}
              className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs tracking-[0.25em] text-primary uppercase"
            >
              <GraduationCap className="h-4 w-4 shrink-0" />
              <span>Undergraduate Degree</span>
            </motion.div>

            <motion.h3
              variants={syncTitleVariants}
              className="mt-3 sm:mt-4 font-sans text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white"
            >
              {EDUCATION.degree}
            </motion.h3>

            <div className="mt-2.5 sm:mt-3 flex flex-wrap items-center gap-2 text-sm sm:text-base text-muted-foreground">
              <span className="text-foreground/90 font-medium">{EDUCATION.college}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                {EDUCATION.location}
              </span>
            </div>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm lg:text-base leading-relaxed text-muted-foreground">
              Pursuing rigorous foundational education in computer science, software design, and
              modern development paradigms. Actively connecting academic coursework with hands-on
              collaborative web platforms and artificial intelligence projects.
            </p>

            <div className="mt-6 sm:mt-8 border-t border-primary/20 pt-5 sm:pt-6">
              <div className="font-mono text-[10px] sm:text-xs tracking-wider text-muted-foreground uppercase font-semibold">
                Academic Focus & Coursework
              </div>
              <motion.div
                variants={syncTagListVariants}
                className="mt-3 flex flex-wrap gap-1.5 sm:gap-2"
              >
                {[
                  "Data Structures",
                  "Java Programming",
                  "Database Management (SQL)",
                  "Web Technologies",
                  "Python",
                  "Software Engineering",
                ].map((item) => (
                  <motion.span
                    key={item}
                    variants={syncTagItemVariants}
                    className="rounded-full border border-primary/20 bg-[#020C1B]/80 px-2.5 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[10px] sm:text-[11px] tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Key Metrics Grid */}
          <motion.div
            variants={syncTagListVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-xl sm:rounded-2xl bg-border border border-primary/20"
          >
            <motion.div variants={syncTagItemVariants} className="h-full">
              <div className="h-full bg-[#0A192F] p-5 sm:p-8 transition-colors duration-500 hover:bg-[#112240]">
                <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  <span>Expected Graduation</span>
                </div>
                <div className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.45)]">
                  {EDUCATION.graduation}
                </div>
                <div className="mt-1.5 sm:mt-2 font-mono text-[9px] sm:text-[10px] tracking-wider text-muted-foreground uppercase">
                  Final Year BCA Candidate
                </div>
              </div>
            </motion.div>

            <motion.div variants={syncTagItemVariants} className="h-full">
              <div className="h-full bg-[#0A192F] p-5 sm:p-8 transition-colors duration-500 hover:bg-[#112240]">
                <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">
                  <Award className="h-3.5 w-3.5 shrink-0" />
                  <span>Cumulative CGPA</span>
                </div>
                <div className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.45)]">
                  {EDUCATION.cgpa}
                </div>
                <div className="mt-1.5 sm:mt-2 font-mono text-[9px] sm:text-[10px] tracking-wider text-muted-foreground uppercase">
                  Consistent Academic Performance
                </div>
              </div>
            </motion.div>

            <motion.div variants={syncTagItemVariants} className="h-full">
              <div className="h-full bg-[#0A192F] p-5 sm:p-8 transition-colors duration-500 hover:bg-[#112240]">
                <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">
                  Institution
                </div>
                <div className="mt-2.5 sm:mt-3 font-sans text-base sm:text-lg lg:text-xl font-bold text-white">
                  Bharatesh College
                </div>
                <div className="mt-1 font-mono text-[9px] sm:text-[10px] tracking-wider text-muted-foreground uppercase">
                  Belagavi, Karnataka
                </div>
              </div>
            </motion.div>

            <motion.div variants={syncTagItemVariants} className="h-full">
              <div className="h-full bg-[#0A192F] p-5 sm:p-8 transition-colors duration-500 hover:bg-[#112240]">
                <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase">
                  Career Trajectory
                </div>
                <div className="mt-2.5 sm:mt-3 font-sans text-base sm:text-lg lg:text-xl font-bold text-primary">
                  Software Developer
                </div>
                <div className="mt-1 font-mono text-[9px] sm:text-[10px] tracking-wider text-muted-foreground uppercase">
                  Full Stack & AI Platforms
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

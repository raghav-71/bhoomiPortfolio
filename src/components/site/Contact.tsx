import { useState } from "react";
import { toast } from "sonner";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

import { PERSON } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      window.location.href = `mailto:${PERSON.email}?subject=${encodeURIComponent(
        `Project & Career Enquiry from ${name}`,
      )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
      toast.success("Opening your email client", {
        description: "Your message is pre-filled and ready to send to Bhoomi.",
      });
      form.reset();
    }, 500);
  };

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "linkedin":
        return <Linkedin className="h-4 w-4" />;
      case "github":
        return <Github className="h-4 w-4" />;
      case "instagram":
        return <Instagram className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  const field =
    "w-full border-b border-primary/20 bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary text-white";

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 sm:px-10 sm:py-36">
      <div className="pointer-events-none absolute -top-1/4 right-0 h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,_rgba(29,78,216,0.18)_0%,_transparent_70%)] blur-[150px]" />
      <div className="relative mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-primary uppercase">
            <span className="h-px w-8 bg-primary shadow-[0_0_8px_#3B82F6]" />
            07 — Contact
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-[13vw] leading-[0.85] tracking-tight uppercase lg:text-[9vw] text-white">
            Let&apos;s connect
            <span className="block text-stroke">& build</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div className="space-y-10">
            <Reveal>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                Looking for an ambitious Software Engineer and Full Stack Developer with hands-on
                experience in modern web applications and AI integration? I&apos;d love to connect.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-xl border border-primary/20 bg-[#0A192F]/60 p-6 backdrop-blur">
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
                  Direct Email
                </div>
                <a
                  href={`mailto:${PERSON.email}`}
                  className="mt-2 inline-block text-xl break-all font-medium text-white transition-colors hover:text-primary sm:text-2xl"
                >
                  {PERSON.email}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  Online Profiles & Socials
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {PERSON.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-[#0A192F]/80 px-5 py-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-white transition-all hover:border-primary hover:text-primary hover:bg-primary/15 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                    >
                      {getSocialIcon(s.label)}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-primary/20 bg-[#0A192F]/70 p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_-10px_rgba(2,12,27,0.9)]">
              <form onSubmit={onSubmit} className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <input required name="name" placeholder="Your name" className={field} />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className={field}
                  />
                </div>
                <input name="subject" placeholder="What's it about?" className={field} />
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className={field}
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="group relative w-full overflow-hidden rounded-full bg-primary px-8 py-5 font-mono text-[11px] tracking-[0.3em] text-primary-foreground uppercase shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] disabled:opacity-60 sm:w-auto sm:px-12 cursor-pointer"
                >
                  <span className="relative z-10">{sending ? "Sending…" : "Send message"}</span>
                  <span className="absolute inset-0 origin-left scale-x-0 bg-[#020C1B] transition-transform duration-500 group-hover:scale-x-100" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

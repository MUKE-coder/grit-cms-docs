"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center relative">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-sm font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Self-Hostable Creator Platform
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
          The Creator{" "}
          <span className="text-accent">Operating System</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
          GritCMS is a self-hostable platform that gives creators everything they need &mdash;
          website builder, email marketing, online courses, digital products, community,
          sales funnels, booking, affiliates, and workflow automation &mdash; all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            href="/docs/getting-started/introduction"
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-accent-foreground font-medium text-sm transition-colors"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/MUKE-coder/gritcms"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-border hover:bg-surface-hover text-text-primary font-medium text-sm transition-colors"
          >
            View on GitHub
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
          {[
            { label: "Go + Next.js", icon: "stack" },
            { label: "10+ Modules", icon: "modules" },
            { label: "Self-Hosted", icon: "server" },
            { label: "Open Source", icon: "code" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-border bg-surface-secondary text-sm text-text-secondary">
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { CopyButton } from "./CopyButton";

const code = `# 1. Clone the repository
git clone https://github.com/MUKE-coder/gritcms.git
cd gritcms

# 2. Install frontend dependencies
pnpm install

# 3. Copy environment file
cp .env.example .env

# 4. Start the Go backend
cd apps/api && go run main.go

# 5. Start the admin dashboard (new terminal)
pnpm --filter admin dev

# 6. Start the public website (new terminal)
pnpm --filter web dev`;

export function CodeExample() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Up and running in minutes
        </h2>
        <p className="text-text-secondary">
          Clone, configure, and start building. No complex setup required.
        </p>
      </div>
      <div className="relative group rounded-xl border border-border bg-surface-secondary overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface-tertiary">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-danger/60" />
            <div className="w-3 h-3 rounded-full bg-warning/60" />
            <div className="w-3 h-3 rounded-full bg-success/60" />
            <span className="ml-2 text-xs text-text-muted font-mono">terminal</span>
          </div>
          <CopyButton text={code} />
        </div>
        <pre className="p-5 overflow-x-auto text-sm leading-7 font-mono text-text-secondary">
          <code>{code}</code>
        </pre>
      </div>
    </section>
  );
}

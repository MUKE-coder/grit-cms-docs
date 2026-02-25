import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
        <span className="text-white font-bold text-sm">G</span>
      </div>
      <span className="font-semibold text-lg text-text-primary">
        GritCMS
      </span>
    </Link>
  );
}

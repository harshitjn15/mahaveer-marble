import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, showSubtitle = true }: { className?: string, showSubtitle?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-sm bg-gradient-to-br from-gold-400 to-gold-600 shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-shadow duration-300">
        {/* Minimal Marble Slab Icon */}
        <div className="absolute inset-[2px] bg-dark-100 rounded-[1px] flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent opacity-80" />
          <span className="font-serif text-gold-500 text-xl font-bold tracking-tighter">M</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-xl font-bold tracking-wide text-white group-hover:text-gold-400 transition-colors">
          Mahaveer Marble
        </span>
        {showSubtitle && (
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gold-500/80">
            Premium Marble & Granite
          </span>
        )}
      </div>
    </Link>
  );
}

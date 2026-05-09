import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <Nav />
      <main className="min-h-screen pb-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16">
          <div className="mb-10">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">
              Portfolio
            </p>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">Other Works</h2>
              <Link
                href="/#projects"
                className="text-xs tracking-[0.2em] uppercase border-b border-foreground pb-0.5 hover:text-muted-foreground transition-colors shrink-0"
              >
                &larr; Back
              </Link>
            </div>
          </div>

          <div className="max-w-5xl">
            <div className="relative aspect-video overflow-hidden border border-border bg-muted mb-6">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src="/images/projects/3d.mp4" type="video/mp4" />
              </video>
              <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-background/80 px-2 py-0.5 border border-border pointer-events-none">
                3D Render
              </span>
            </div>

            <div className="flex items-start justify-between gap-6 pt-4 border-t border-border">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  DFA — Tug. City
                </p>
                <h3 className="text-base font-bold tracking-wide leading-snug">
                  Department of Foreign Affairs – Tuguegarao City
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed max-w-2xl">
                  Refurbishment of designated areas inside the DFA Tuguegarao City office to improve
                  functionality and client-facing spaces. The scope includes interior renovation works
                  such as partitioning, finishing, and upgrading of existing facilities.
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="text-[10px] tracking-widest uppercase border border-border px-2 py-0.5">
                    Refurbishment
                  </span>
                  <span className="text-[10px] tracking-widest uppercase border border-border px-2 py-0.5">
                    Government
                  </span>
                </div>
              </div>
              <span className="text-xs border border-border px-2 py-0.5 shrink-0">
                2024
              </span>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

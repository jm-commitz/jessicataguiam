import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/lib/projects";
import Image from "next/image";
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
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">All Projects</h2>
              <Link
                href="/#projects"
                className="text-xs tracking-[0.2em] uppercase border-b border-foreground pb-0.5 hover:text-muted-foreground transition-colors shrink-0"
              >
                &larr; Back
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex flex-col gap-3"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-muted">
                  {project.render.type === "video" ? (
                    <video
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    >
                      <source src={project.render.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={project.render.src}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  )}
                  <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-background/80 px-2 py-0.5 border border-border pointer-events-none">
                    {project.renderLabel ?? "3D Render"}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 pt-1 border-t border-border">
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-sm font-bold tracking-wide leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-widest uppercase border border-border px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs border border-border px-2 py-0.5 shrink-0">
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

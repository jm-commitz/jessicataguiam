import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[id]">) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div>
      <Nav />
      <main className="min-h-screen pb-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14">

          {/* Header */}
          <div className="mb-8 sm:mb-10">
            <Link
              href="/#projects"
              className="text-xs tracking-[0.2em] uppercase border-b border-foreground pb-0.5 hover:text-muted-foreground transition-colors"
            >
              &larr; Back
            </Link>
            <div className="mt-6 flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-2">
                  {project.subtitle}
                </p>
                <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-2xl">
                  {project.title}
                </h1>
              </div>
              <span className="text-xs border border-border px-3 py-1 shrink-0 self-start mt-1">
                {project.year}
              </span>
            </div>
          </div>

          {/* Images / Video — full width, stacked */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
            {/* Floor plan — only if available */}
            {project.floorplan && (
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden border border-border bg-muted">
                <Image
                  src={project.floorplan}
                  alt={`${project.title} floor plan`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-background/80 px-2 py-0.5 border border-border">
                  Floor Plan
                </span>
              </div>
            )}

            {/* Render / video */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden border border-border bg-muted">
              {project.render.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="absolute inset-0 w-full h-full object-contain"
                >
                  <source src={project.render.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={project.render.src}
                  alt={`${project.title} render`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              )}
              <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-background/80 px-2 py-0.5 border border-border pointer-events-none">
                {project.renderLabel ?? "3D Render"}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="border-t border-border pt-6 max-w-3xl">
            <p className="text-base sm:text-lg leading-relaxed text-foreground mb-5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
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

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

import Image from "next/image";

const techStack = ["AutoCAD", "Enscape", "SketchUp", "DS Render"];

export function HeroSection() {
  return (
    <section className="bg-white flex flex-col">
      <div className="max-w-7xl mx-auto px-8 w-full flex-1 grid grid-cols-2 gap-16 items-center py-24 min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col gap-7">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
            Established 2024
          </p>
          <h1 className="font-heading text-[5.5rem] font-bold leading-none tracking-tight text-foreground">
            STRUCTURAL<br />PURITY.
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-[340px]">
            Specializing in the intersection of technical precision and
            human-centric design. We build narratives into the very foundations
            of the modern world.
          </p>
          <hr className="border-border w-16" />
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-muted-foreground">Principal Architect</p>
            <p className="text-sm font-medium">Julian Arcturus</p>
          </div>
        </div>

        <div className="relative w-full aspect-square">
          <Image
            src="/images/hero/this.png"
            alt="Isometric architecture model"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Technology Stack
          </span>
          <div className="flex items-center gap-10">
            {techStack.map((tool) => (
              <span key={tool} className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

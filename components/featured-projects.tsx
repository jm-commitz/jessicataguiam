const topProjects = [
  {
    id: "villa-monolith",
    title: "VILLA MONOLITH",
    subtitle: "Private Residence, Zurich",
    year: "2023",
  },
  {
    id: "cube-residence",
    title: "CUBE_RESIDENCE",
    subtitle: "Urban Infill, Tokyo",
    year: "2024",
  },
];

function ProjectImage({ label }: { label?: string }) {
  return (
    <div className="relative w-full aspect-4/3 overflow-hidden bg-muted border border-border">
      <div className="absolute inset-0 grid place-items-center">
        <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
          Placeholder
        </span>
      </div>
      {label && (
        <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-background/80 px-2 py-0.5 border border-border">
          {label}
        </span>
      )}
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="mb-10">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">
            Portfolio
          </p>
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-4xl font-bold">Featured Projects</h2>
            <a
              href="#"
              className="text-xs tracking-[0.2em] uppercase border-b border-foreground pb-0.5 hover:text-muted-foreground transition-colors"
            >
              View All &rarr;
            </a>
          </div>
        </div>

        {/* Top row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {topProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <ProjectImage />
              <div className="flex items-start justify-between mt-3">
                <div>
                  <h3 className="text-sm font-bold tracking-wide">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
                </div>
                <span className="text-xs border border-border px-2 py-0.5 shrink-0 ml-4">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom — The Gallery_Space */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <ProjectImage label="Draft — Level 02" />
          <ProjectImage label="Final — Harbor 03" />
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-sm font-bold tracking-wide mb-2">THE GALLERY_SPACE</h3>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
              A transition from technical draft to final visualization, showcasing
              the structural integrity and spatial dynamics of a public cultural hub.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 ml-8">
            <span className="text-xs border border-border px-2 py-0.5">PUBLIC COMMISSION</span>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">OSLO, NORWAY</span>
          </div>
        </div>
      </div>
    </section>
  );
}

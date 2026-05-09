import Image from "next/image";

const credentials = [
  { label: "Degree", value: "BS Industrial Technology" },
  { label: "Certification", value: "NC II + CS Professional" },
  { label: "Specialization", value: "Architectural Drafting" },
];

const skills = [
  "AutoCAD",
  "SketchUp",
  "Architectural Plans",
  "Isometric Drawings",
  "As-Built Documents",
  "Piping & Platform Layouts",
  "Site Development Plans",
  "Technical Illustrations",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="mb-10">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">
            About
          </p>
          <h2 className="font-heading text-4xl font-bold">The Draftsman</h2>
        </div>

        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left — Portrait + Credentials */}
          <div className="flex flex-col gap-8">
            <div className="relative w-full aspect-4/3 bg-white border border-border overflow-hidden">
              <Image
                src="/images/hero/myphoto.png"
                alt="Jessica Taguiam portrait"
                fill
                className="object-contain bg-white"
                priority
              />
              <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-background/80 px-2 py-0.5 border border-border">
                Jessica Taguiam
              </span>
            </div>

            <div className="grid grid-cols-3 gap-px border border-border">
              {credentials.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 p-4 bg-background">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold font-heading">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Bio + Skills */}
          <div className="flex flex-col gap-10 pt-2">
            <div className="flex flex-col gap-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                I hold a Bachelor of Science in Industrial Technology, major in Architectural
                Drafting Technology from Cagayan State University, complemented by a
                Technical Drafting NC II certification and a Career Service Professional
                Eligibility from the Civil Service Commission.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My hands-on experience spans both architectural and industrial-technical
                drafting: producing construction-ready floor plans, layouts, and as-built
                documents for government infrastructure, and drafting detailed platform
                layouts, piping systems, and isometric drawings for engineering projects.
                I work closely with architects and engineers to keep drawings accurate
                through every revision cycle.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I take precision seriously — not just in the lines I draw, but in how I
                manage documentation, track revisions, and communicate across teams.
                Every drawing I deliver is clean, buildable, and built to last through
                a project's entire lifecycle.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
                Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs border border-border px-3 py-1.5 hover:bg-foreground hover:text-background transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="/images/files/JESSICA_TAGUIAM_CV.pdf"
                download
                className="text-sm border border-foreground px-6 py-2 hover:bg-foreground hover:text-background transition-colors"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in Touch &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

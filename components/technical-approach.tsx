const phases = [
  {
    phase: "PHASE 01",
    title: "Conceptual Drafting",
    description:
      "Utilizing high-precision AutoCAD workflows to define spatial hierarchies and structural grids before any aesthetic layering.",
  },
  {
    phase: "PHASE 02",
    title: "Parametric Modeling",
    description:
      "SketchUp and Rhino integration allows for rapid iteration of complex geometries while maintaining strict structural limits.",
  },
  {
    phase: "PHASE 03",
    title: "Light & Material Study",
    description:
      "Real-time rendering via Enscape and DS Render to simulate accurate lighting conditions and material tactility.",
  },
  {
    phase: "PHASE 04",
    title: "Construction Logic",
    description:
      "Final BIM documentation ensuring that the vision on screen translates perfectly to the physical build site.",
  },
];

export function TechnicalApproach() {
  return (
    <section className="bg-muted py-24">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="font-heading text-4xl font-bold leading-tight mb-6">
            Our Technical<br />Approach
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
            Precision is not just a standard — it&apos;s our language. Every line drawn
            is a commitment to structural permanence.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-10">
          {phases.map((item) => (
            <div key={item.phase}>
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
                {item.phase}
              </p>
              <h3 className="text-sm font-bold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

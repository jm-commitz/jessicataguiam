import Image from "next/image";

const techStack = [
  { name: "AutoCAD", src: "/images/tools/autocad.webp" },
  { name: "Enscape", src: "/images/tools/enscape.webp" },
  { name: "SketchUp", src: "/images/tools/sketchup.webp" },
  { name: "Photoshop", src: "/images/tools/ps.webp" },
  { name: "D5", src: "/images/tools/D5.webp" },
] as const;

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-4rem)] flex-col">
      <div className="max-w-screen-2xl mx-auto px-8 w-full flex-1 grid grid-cols-2 gap-16 items-center pt-16 pb-36">
        <div className="flex flex-col gap-7">
          <h1 className="font-heading font-bold leading-none tracking-tight text-foreground text-5xl sm:text-6xl lg:text-[5.5rem]">
            <span className="block whitespace-nowrap">WHERE LINES</span>
            <span className="block whitespace-nowrap">BECOME SPACES.</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-[340px]">
          Delivering precise drafting solutions that turn concepts into buildable, functional environments.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View Works
            </a>
          </div>
          <hr className="border-border w-16" />
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-muted-foreground">Draftsman</p>
            <p className="text-sm font-medium">Jessica Taguiam</p>
          </div>
        </div>

        <div className="relative w-full aspect-square">
          <Image
            src="/images/hero/hero.png"
            alt="Isometric architecture model"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-20 bg-background/70 backdrop-blur">
        <div className="max-w-screen-2xl mx-auto px-8 py-4 flex items-center justify-start">
          <div className="flex items-center gap-6">
            {techStack.map((tool) => (
              <Image
                key={tool.name}
                src={tool.src}
                alt={tool.name}
                title={tool.name}
                width={28}
                height={28}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

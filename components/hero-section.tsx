"use client";

import Image from "next/image";
import { useTheme } from "./theme-provider";

const techStack = [
  { name: "AutoCAD",    src: "/images/tools/autocad.webp",  size: "w-7 h-7"  },
  { name: "Enscape",   src: "/images/tools/enscape.webp",  size: "w-10 h-10" },
  { name: "SketchUp",  src: "/images/tools/sketchup.webp", size: "w-10 h-10" },
  { name: "Photoshop", src: "/images/tools/ps.webp",       size: "w-7 h-7"  },
  { name: "D5",        src: "/images/tools/D5.webp",       size: "w-7 h-7"  },
];

export function HeroSection() {
  const { toggle } = useTheme();

  return (
    <section id="home" className="relative flex h-[calc(100vh-4rem)] flex-col overflow-hidden lg:overflow-visible">
      <div className="max-w-screen-2xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center pb-20 px-4 sm:px-8">
        {/* Image — below text on mobile, overlaps slightly */}
        <div
          className="relative w-full max-h-[42vh] lg:max-h-none aspect-square max-w-[560px] lg:max-w-none justify-self-center lg:justify-self-stretch order-last lg:order-none -mt-8 lg:mt-0 cursor-pointer select-none"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            toggle(rect.left + rect.width / 2, rect.top + rect.height / 2);
          }}
          title="Toggle dark mode"
        >
          <Image
            src="/images/hero/heroo.png"
            alt="Isometric architecture model"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col gap-5 lg:gap-7 order-first lg:order-none pt-6 lg:pt-0">
          <h1 className="font-heading font-bold leading-none tracking-tight text-foreground text-4xl sm:text-6xl lg:text-[5.5rem]">
            <span className="block">WHERE LINES</span>
            <span className="block">BECOME SPACES.</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-[34rem]">
            Delivering precise drafting solutions that turn concepts into buildable, functional environments.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
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
      </div>

      <div className="absolute inset-x-0 bottom-6 bg-background/70 backdrop-blur">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-start">
          <div className="flex items-center gap-6 overflow-x-auto pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {techStack.map((tool) => (
              <div key={tool.name} title={tool.name} className={`relative ${tool.size} shrink-0`}>
                <Image
                  src={tool.src}
                  alt={tool.name}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

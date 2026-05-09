"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type RenderMedia =
  | { type: "video"; src: string }
  | { type: "image"; src: string };

interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  floorplan: string;
  render: RenderMedia;
  renderLabel?: string;
  tags: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: "tcpgh",
    title: "Tuguegarao City People's General Hospital",
    subtitle: "TCPGH",
    year: "2024",
    floorplan: "/images/projects/floorplan-tcpgh.png",
    render: { type: "image", src: "/images/projects/3d-tcpgh.jpg" },
    tags: ["As-Built", "Healthcare"],
    description:
      "As-Built Plan for the construction of an elevator within the existing hospital building. The plan was prepared to identify and determine the most suitable area within the building where the elevator can be installed.",
  },
  {
    id: "tug-sci",
    title: "Tuguegarao City Science High School",
    subtitle: "TUG — SCI",
    year: "2023",
    floorplan: "/images/projects/floorplan-tug-sci.png",
    render: { type: "video", src: "/images/projects/3d-tug-sci.mp4" },
    tags: ["As-Built", "Education"],
    description:
      "As-Built Plan and 3D Perspective of the Tuguegarao City Science High School prepared to document the finalized layout of the school facility. The 3D perspective provides a visual representation of the completed structure, showcasing the overall form and design of the building.",
  },
  {
    id: "cho",
    title: "Tuguegarao City Health Office",
    subtitle: "CHO",
    year: "2023",
    floorplan: "/images/projects/floorplan-cho.png",
    render: { type: "image", src: "/images/projects/elevation-cho.png" },
    renderLabel: "Elevation",
    tags: ["As-Built", "Government"],
    description:
      "As-Built Plan of the new building extension annexed to the existing old structure of the City Health Office. The image presents the floor plan and elevations of the completed extension as the primary reference for the as-built documentation.",
  },
  {
    id: "srl",
    title: "Santa Rosa Plant",
    subtitle: "SRL",
    year: "2023",
    floorplan: "/images/projects/flooorplan-srl.png",
    render: { type: "video", src: "/images/projects/final3-srl.mp4" },
    tags: ["Industrial", "As-Built"],
    description:
      "Installation of Platform SR2 on Line 4 of the Santa Rosa Plant facility to support operational and production requirements. The floor plan depicts the overall layout of the Santa Rosa Plant and indicates the specific locations of the platforms within the facility.",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export function FeaturedProjects() {
  const [[index, direction], setPage] = useState([0, 0]);
  const paused = useRef(false);

  const paginate = (dir: number) => {
    setPage(([prev]) => [(prev + dir + projects.length) % projects.length, dir]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused.current) paginate(1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const project = projects[index];

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8">
        <div className="mb-10">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">
            Portfolio
          </p>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-xs tracking-[0.2em] uppercase border-b border-foreground pb-0.5 hover:text-muted-foreground transition-colors shrink-0"
            >
              View All &rarr;
            </Link>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { paused.current = false; }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {/* Floorplan */}
                <div className="relative aspect-4/3 overflow-hidden border border-border bg-muted">
                  <Image
                    src={project.floorplan}
                    alt={`${project.title} floor plan`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-background/80 px-2 py-0.5 border border-border">
                    Floor Plan
                  </span>
                </div>

                {/* 3D render */}
                <div className="relative aspect-4/3 overflow-hidden border border-border bg-muted">
                  {project.render.type === "video" ? (
                    <video
                      key={project.render.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={project.render.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={project.render.src}
                      alt={`${project.title} 3D render`}
                      fill
                      className="object-cover"
                    />
                  )}
                  <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-background/80 px-2 py-0.5 border border-border">
                    {project.renderLabel ?? "3D Render"}
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-base font-bold tracking-wide leading-snug">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
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
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <div className="flex gap-2">
            <button
              onClick={() => paginate(-1)}
              className="w-9 h-9 border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-9 h-9 border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage([i, i > index ? 1 : -1])}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === index ? "bg-foreground" : "bg-border"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

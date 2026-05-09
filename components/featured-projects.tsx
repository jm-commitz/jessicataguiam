"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/projects";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export function FeaturedProjects() {
  const [[index, direction], setPage] = useState([0, 0]);

  const paginate = (dir: number) => {
    setPage(([prev]) => [(prev + dir + projects.length) % projects.length, dir]);
  };

  const project = projects[index];

  return (
    <section id="projects" className="py-10 sm:py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8">
        <div className="mb-6 sm:mb-10">
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

        <div className="relative overflow-hidden">
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
              <Link href={`/projects/${project.id}`} className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 group">
                {/* Floorplan */}
                <div className="relative aspect-square sm:aspect-4/3 overflow-hidden border border-border bg-muted">
                  {project.floorplan ? (
                    <>
                      <Image
                        src={project.floorplan}
                        alt={`${project.title} floor plan`}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                      <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-background/80 px-2 py-0.5 border border-border">
                        Floor Plan
                      </span>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] tracking-widest uppercase text-muted-foreground">No Image</span>
                    </div>
                  )}
                </div>

                {/* 3D render */}
                <div className="relative aspect-square sm:aspect-4/3 overflow-hidden border border-border bg-muted">
                  {project.render.type === "video" ? (
                    <video
                      key={project.render.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    >
                      <source src={project.render.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={project.render.src}
                      alt={`${project.title} 3D render`}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  )}
                  <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-background/80 px-2 py-0.5 border border-border">
                    {project.renderLabel ?? "3D Render"}
                  </span>
                </div>
              </Link>

              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-base font-bold tracking-wide leading-snug">{project.title}</h3>
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

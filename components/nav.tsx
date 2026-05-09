"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
      <div className="max-w-screen-2xl mx-auto px-8 h-16 flex items-center justify-between">
        <span className="font-heading text-sm font-bold tracking-widest">JESS_WORKS</span>
        <nav className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={
                  isActive
                    ? "text-sm border-b border-foreground pb-0.5"
                    : "text-sm text-muted-foreground hover:text-foreground transition-colors"
                }
              >
                {label}
              </a>
            );
          })}
        </nav>
        <button className="text-sm border border-foreground px-5 py-1.5 hover:bg-foreground hover:text-background transition-colors">
          Inquiry
        </button>
      </div>
    </header>
  );
}

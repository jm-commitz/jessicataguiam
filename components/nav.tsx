"use client";

import { useEffect, useState } from "react";
import { InquiryModal } from "./inquiry-modal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

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
    } else {
      window.location.href = `/${href}`;
    }
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="font-heading text-sm font-bold tracking-widest"
          >
            JESS_WORKS
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
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

          <div className="flex items-center gap-3">
            <button
              onClick={() => setInquiryOpen(true)}
              className="hidden md:block text-sm border border-foreground px-5 py-1.5 hover:bg-foreground hover:text-background transition-colors"
            >
              Inquiry
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-6 bg-foreground transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-foreground transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-foreground transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <nav className="max-w-screen-2xl mx-auto px-4 py-4 flex flex-col gap-4">
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
                        ? "text-sm border-b border-foreground pb-0.5 self-start"
                        : "text-sm text-muted-foreground hover:text-foreground transition-colors"
                    }
                  >
                    {label}
                  </a>
                );
              })}
              <button
                onClick={() => { setInquiryOpen(true); setMenuOpen(false); }}
                className="mt-2 text-sm border border-foreground px-5 py-2 hover:bg-foreground hover:text-background transition-colors self-start"
              >
                Inquiry
              </button>
            </nav>
          </div>
        )}
      </header>

      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}

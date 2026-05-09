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

      </header>

      {/* Mobile drawer backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background flex flex-col transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-end px-6 h-16 border-b border-border shrink-0">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-1"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <line x1="1" y1="1" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="15" y1="1" x2="1" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6 pt-8 flex-1">
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
                    ? "text-sm border-b border-foreground pb-0.5 self-start mb-3"
                    : "text-sm text-muted-foreground hover:text-foreground transition-colors mb-3"
                }
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="px-6 pb-10 shrink-0">
          <button
            onClick={() => { setInquiryOpen(true); setMenuOpen(false); }}
            className="w-full text-sm border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors"
          >
            Inquiry
          </button>
        </div>
      </div>

      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}

const connectLinks = ["LinkedIn", "Instagram", "Behance", "Email"];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-8 pt-16 pb-12 grid grid-cols-3 gap-16">
        <div>
          <p className="font-heading text-sm font-bold tracking-widest mb-4">JESS_WORKS</p>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
            Architectural design studio focused on minimalist modernism and
            technical structural integrity.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-5">Connect</p>
          <ul className="space-y-3">
            {connectLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm border-b border-foreground/40 pb-0.5 hover:border-foreground transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-5">Studio</p>
          <p className="text-sm leading-relaxed text-foreground">
            22nd Floor, Structural Plaza<br />
            Berlin, Germany<br />
            +49 (0) 30 123 4567
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-screen-2xl mx-auto px-8 py-4 flex items-center justify-between">
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            © 2024 JESS_WORKS Architecture. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <span className="font-heading text-sm font-bold tracking-widest">ARCT_STRUCT</span>
        <nav className="flex items-center gap-8">
          <a href="#" className="text-sm border-b border-foreground pb-0.5">Portfolio</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Studio</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>
        <button className="text-sm border border-foreground px-5 py-1.5 hover:bg-foreground hover:text-background transition-colors">
          Inquiry
        </button>
      </div>
    </header>
  );
}

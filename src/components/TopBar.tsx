/**
 * Persistent locator bar. Shows name (home) on the left and a section descriptor + the
 * recruiter escape-hatch on the right. The section NUMBER never appears here (it lives once,
 * big, in each section header) — this bar is a locator, not a repeat of the index.
 */
export function TopBar({ descriptor = "the index" }: { descriptor?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-mono text-[12px] text-ink transition-colors hover:text-accent"
        >
          rajarshi sandilya
        </a>
        <div className="flex items-center gap-5 font-mono text-[11px] text-muted">
          <span className="hidden sm:inline">{descriptor}</span>
          <a
            href="#build"
            className="text-ink underline decoration-accent2 decoration-1 underline-offset-4 transition-colors hover:text-accent"
          >
            jump to the work →
          </a>
        </div>
      </div>
    </header>
  );
}

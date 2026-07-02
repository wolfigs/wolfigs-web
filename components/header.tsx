import Link from "next/link";
import { LogoMark } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <LogoMark />
            Wolfigs
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
            <Link href="/prism" className="transition-colors hover:text-foreground">
              Prism
            </Link>
            <a
              href="https://github.com/wolfigs/prism/tree/main/docs/guide"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Docs
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/wolfigs"
            target="_blank"
            rel="noreferrer"
            aria-label="Wolfigs on GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-edge text-muted transition-colors hover:border-subtle hover:text-foreground"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.2.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

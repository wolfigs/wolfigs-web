import Link from "next/link";
import { LogoMark } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <LogoMark />
              Wolfigs
            </div>
            <p className="max-w-xs text-sm text-muted">
              Deterministic developer tools. Same input, same output — byte for byte.
            </p>
          </div>
          <div className="flex gap-16 text-sm">
            <div className="space-y-3">
              <div className="font-medium">Products</div>
              <ul className="space-y-2 text-muted">
                <li>
                  <Link href="/prism" className="transition-colors hover:text-foreground">
                    Prism
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium">Resources</div>
              <ul className="space-y-2 text-muted">
                <li>
                  <a
                    href="https://github.com/wolfigs/prism/tree/main/docs/guide"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    Developer Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/wolfigs"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-edge pt-6 text-xs text-subtle">
          © {new Date().getFullYear()} Wolfigs. Apache-2.0 licensed open source.
        </div>
      </div>
    </footer>
  );
}

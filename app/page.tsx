import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wolfigs — Deterministic developer tools",
  description:
    "Wolfigs builds deterministic developer tools with mathematical guarantees. Home of Prism, the build-time topology compiler for Java.",
  alternates: { canonical: "https://wolfigs.com" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wolfigs",
  url: "https://wolfigs.com",
  logo: "https://wolfigs.com/opengraph-image",
  sameAs: ["https://github.com/wolfigs"],
  description:
    "Wolfigs builds deterministic developer tools with mathematical guarantees. Home of Prism, the build-time topology compiler for Java.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <p className="mb-6 text-sm font-medium text-accent">Wolfigs</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tighter sm:text-7xl">
            Software should be provable.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            We build deterministic developer tools — same input, same output,
            byte for byte. No heuristics, no thresholds, no best guesses.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/prism"
              className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Explore Prism
            </Link>
            <a
              href="https://github.com/wolfigs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-edge px-6 text-sm font-medium transition-colors hover:border-subtle"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Flagship product */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-sm font-medium text-muted">Products</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight">
                Built at Wolfigs
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-edge bg-edge md:grid-cols-3">
            <Link
              href="/prism"
              className="group relative bg-background p-8 transition-colors hover:bg-card md:col-span-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl font-semibold tracking-tight">Prism</span>
                <span className="rounded-full border border-edge px-2.5 py-0.5 text-xs text-muted">
                  Flagship
                </span>
              </div>
              <p className="mt-4 max-w-lg leading-relaxed text-muted">
                A build-time topology compiler for Java. Develop one modular
                monorepo against distributed semantics, verify its boundaries
                continuously, and compile it — deterministically — to a
                monolith or to microservices.
              </p>
              <p className="mt-6 font-mono text-sm text-accent">
                Topology is a compile flag, not an architecture decision.
              </p>
              <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium">
                Learn more
                <svg
                  className="transition-transform group-hover:translate-x-0.5"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </Link>
            <div className="bg-background p-8">
              <div className="flex items-center gap-3">
                <span className="text-xl font-semibold tracking-tight text-subtle">
                  More in the works
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-subtle">
                New tools from the Wolfigs lab, built on the same principle:
                if it can&apos;t be made deterministic, it isn&apos;t done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-sm font-medium text-muted">Principles</h2>
          <p className="mt-2 max-w-xl text-3xl font-semibold tracking-tight">
            How we build
          </p>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="font-medium">Deterministic by construction</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Every transformation is a pure function of its input. Run it
                twice, diff the bytes — that test ships in every product.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Declared over inferred</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Inference from arbitrary code is an unwinnable heuristics war.
                Our tools verify what you declare — verification is decidable,
                discovery never was.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Honest abstractions</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Every leaky edge gets a designated escape hatch instead of a
                pretense. When an abstraction reaches its ceiling, we say so —
                in the docs, in the types.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prism — the build-time topology compiler for Java",
  description:
    "Develop one modular monorepo against distributed semantics, verify its boundaries continuously, and compile it deterministically to a monolith or to microservices. Topology is a compile flag.",
  alternates: { canonical: "https://wolfigs.com/prism" },
  openGraph: {
    title: "Prism — the build-time topology compiler for Java",
    description:
      "Develop like a monolith. Deploy like microservices. Topology is a compile flag, not an architecture decision.",
    url: "https://wolfigs.com/prism",
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Prism",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform (JVM)",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  author: { "@type": "Organization", name: "Wolfigs", url: "https://wolfigs.com" },
  url: "https://wolfigs.com/prism",
  downloadUrl: "https://github.com/wolfigs/prism",
  description:
    "A build-time topology compiler for Java: develop one modular monorepo against distributed semantics, verify its boundaries continuously, and compile it deterministically to a monolith or to microservices.",
};

/* Server-rendered code block with a tiny token palette — no client JS. */
function Code({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-edge bg-codebg text-[13px] leading-relaxed">
      <figcaption className="flex items-center gap-2 border-b border-[#1f1f1f] px-4 py-2.5 font-mono text-xs text-[#888]">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#333]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#333]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#333]" />
        </span>
        {title}
      </figcaption>
      <pre className="overflow-x-auto p-4 font-mono text-[#d4d4d4]">{children}</pre>
    </figure>
  );
}

const kw = "text-[#569cd6]"; // keywords / annotations
const ty = "text-[#4ec9b0]"; // types
const st = "text-[#6fcf97]"; // strings — the green, sparingly
const cm = "text-[#6a737d]"; // comments

export default function PrismPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-32">
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-accent">Prism</p>
            <span className="rounded-full border border-edge px-2.5 py-0.5 text-xs text-muted">
              v0.1 · pre-release · Apache-2.0
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tighter sm:text-7xl">
            Topology is a compile flag.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Develop one modular monorepo against distributed semantics. Verify
            its boundaries on every commit. Compile it — deterministically — to
            a monolith or to microservices. Same code, same tests, both shapes.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/wolfigs/prism"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Get started on GitHub
            </a>
            <a
              href="https://github.com/wolfigs/prism/blob/main/docs/guide/index.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-edge px-6 text-sm font-medium transition-colors hover:border-subtle"
            >
              Developer Guide
            </a>
          </div>
          <p className="mt-10 font-mono text-sm text-muted">
            <span className="text-accent">$</span> mvn prism:compile
            -Dprism.topology=<span className="text-accent">services</span>
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-sm font-medium text-muted">The problem</h2>
          <p className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight">
            &ldquo;We&apos;ll split it later&rdquo; is a promise five years of
            coupling always breaks.
          </p>
          <div className="mt-8 grid gap-8 text-muted md:grid-cols-2">
            <p className="leading-relaxed">
              Teams correctly start with a monolith and plan to extract
              services when scale demands it. Then the coupling accumulates,
              and &ldquo;later&rdquo; arrives as a two-year rewrite. The
              monolith-vs-microservices decision gets made years before the
              information needed to make it exists — and unmaking it costs
              enormously.
            </p>
            <p className="leading-relaxed">
              Prism makes the promise enforceable. Boundaries are{" "}
              <span className="text-foreground">declared, not inferred</span> —
              and a verifier guarantees in CI that they hold. Deployment
              topology becomes a reversible, per-environment compile flag
              instead of a bet placed on day one.
            </p>
          </div>
        </div>
      </section>

      {/* How it works — code walkthrough */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-sm font-medium text-muted">How it works</h2>
          <p className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight">
            Distributed semantics from day one. Running as a monolith is free.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">01</span>
                <h3 className="font-medium">Declare modules and contracts</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                A module is a package. A contract is its only public surface —
                and it must admit failure by type. The verifier rejects
                anything else.
              </p>
              <Code title="PaymentContract.java">
                <span className={kw}>@Contract</span>
                {"\n"}
                <span className={kw}>public interface</span>{" "}
                <span className={ty}>PaymentContract</span> {"{"}
                {"\n\n    "}
                <span className={kw}>@Deadline</span>(millis = 2000)
                {"\n    "}
                <span className={ty}>Result</span>&lt;<span className={ty}>Receipt</span>&gt;{" "}
                charge(<span className={ty}>ChargeRequest</span> request);
                {"\n"}
                {"}"}
              </Code>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">02</span>
                <h3 className="font-medium">Call it like plain Java</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Inject the interface. The <code className="font-mono">Result</code>{" "}
                type forces you to handle failure — which is exactly what makes
                the same code correct over a network.
              </p>
              <Code title="OrderService.java">
                <span className={kw}>return</span> payment
                {"\n    "}.charge(<span className={kw}>new</span>{" "}
                <span className={ty}>ChargeRequest</span>(customerId, amount))
                {"\n    "}.map(receipt {"->"} placeOrder(receipt))
                {"\n    "}.fold(
                {"\n        "}order {"->"} accepted(order),
                {"\n        "}failure {"->"} <span className={kw}>switch</span>{" "}
                (failure.kind()) {"{"}
                {"\n            "}
                <span className={kw}>case</span> TIMEOUT, UNAVAILABLE {"->"} retryLater();
                {"\n            "}
                <span className={kw}>case</span> REJECTED {"->"} tellUser();
                {"\n            "}
                <span className={cm}>{"// ..."}</span>
                {"\n        "}
                {"}"});
              </Code>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">03</span>
                <h3 className="font-medium">Verify on every commit</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Six deterministic rules fail the build on boundary violations —
                including transactions that span modules. Rejected, not
                &ldquo;handled&rdquo;.
              </p>
              <Code title="mvn prism:verify">
                <span className={cm}>
                  ERROR [transaction-containment] OrderService.java:42
                </span>
                {"\n"}Transactional method OrderService.place calls contract
                {"\n"}PaymentContract of module{" "}
                <span className={st}>&apos;payment&apos;</span> — transactions
                {"\n"}must not span module boundaries
              </Code>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">04</span>
                <h3 className="font-medium">Compile to either topology</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                One deployable for dev and small scale. N services — with
                generated HTTP bindings, Dockerfiles, and compose — when a
                module needs its own life. Byte-identical on every run.
              </p>
              <Code title="prism.yml">
                <span className={ty}>modules</span>:{"\n  "}
                <span className={ty}>order</span>: {"{ "}
                <span className={ty}>port</span>: 8081 {"}"}
                {"\n  "}
                <span className={ty}>payment</span>: {"{ "}
                <span className={ty}>port</span>: 8082,{" "}
                <span className={ty}>deadline-ms</span>: 2000 {"}"}
                {"\n"}
                <span className={ty}>packs</span>:{"\n  "}- {" "}
                <span className={st}>builtin:gateway</span>
                {"\n  "}- <span className={st}>builtin:observability</span>
              </Code>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-sm font-medium text-muted">What you get</h2>
          <p className="mt-2 max-w-xl text-3xl font-semibold tracking-tight">
            A compiler, a verifier, and an honest set of escape hatches
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Declared boundaries",
                body: "Modules are packages you declare, not guesses a tool makes. Verification is decidable; inference never was.",
              },
              {
                title: "Fallible by type",
                body: "Cross-module calls return Result<T> in both topologies. In monolith mode the failure branches simply never fire.",
              },
              {
                title: "Six verification rules",
                body: "Boundary integrity, contract fallibility, transaction containment, data ownership, event honesty, declaration sanity — in CI, deterministic.",
              },
              {
                title: "Deterministic compiler",
                body: "Same monorepo, byte-identical output — enforced by compile-twice-compare-bytes tests in Prism's own suite.",
              },
              {
                title: "Template packs",
                body: "Gateway, observability, Kafka — expressed in a structural template language anyone can extend. The built-ins contain zero Java.",
              },
              {
                title: "The customization ladder",
                body: "Annotations → overlays → runtime bindings → ejection. Every escape hatch lives in the monorepo; generated output is never hand-edited.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-background p-8">
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The guarantee */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-medium text-muted">The guarantee</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight">
                You were writing distributed-safe code all along.
              </p>
              <p className="mt-6 leading-relaxed text-muted">
                The classic monolith-to-microservices failure is that the
                semantics change under the code: in-process calls can&apos;t
                time out, can&apos;t partially fail, and are transactional for
                free. Prism flips the abstraction — you always code against
                distributed semantics, and the in-process binding is just an
                execution optimization that happens to never fail.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Kill a service&apos;s dependency and it stays up, returning the
                failure your code already handles — because the type system
                made you handle it on day one.
              </p>
            </div>
            <Code title="the same code, both topologies">
              <span className={cm}>{"// monolith:  local dispatch — never fails"}</span>
              {"\n"}
              <span className={cm}>{"// services:  HTTP + deadline — can fail"}</span>
              {"\n"}
              <span className={ty}>Result</span>&lt;<span className={ty}>Receipt</span>&gt;
              {" "}result = payment.charge(request);
              {"\n\n"}
              <span className={cm}>{"// either way, you wrote the failure path:"}</span>
              {"\n"}result.fold(ok {"->"} ship(), failure {"->"} degrade());
            </Code>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Develop like a monolith.
            <br />
            Deploy like microservices.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Open source, Apache-2.0. Java 21+. The verifier alone is worth the
            install — adopt it without ever compiling.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/wolfigs/prism"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              wolfigs/prism on GitHub
            </a>
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded-full border border-edge px-6 text-sm font-medium transition-colors hover:border-subtle"
            >
              About Wolfigs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

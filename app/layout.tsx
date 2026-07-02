import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wolfigs.com"),
  title: {
    default: "Wolfigs — Deterministic developer tools",
    template: "%s | Wolfigs",
  },
  description:
    "Wolfigs builds deterministic developer tools with mathematical guarantees. Home of Prism, the build-time topology compiler for Java.",
  keywords: [
    "Wolfigs",
    "Prism",
    "topology compiler",
    "microservices",
    "modular monolith",
    "Java",
    "Spring Boot",
    "deterministic",
    "developer tools",
  ],
  openGraph: {
    type: "website",
    siteName: "Wolfigs",
    url: "https://wolfigs.com",
    title: "Wolfigs — Deterministic developer tools",
    description:
      "Deterministic developer tools with mathematical guarantees. Home of Prism, the build-time topology compiler for Java.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolfigs — Deterministic developer tools",
    description:
      "Deterministic developer tools with mathematical guarantees. Home of Prism, the build-time topology compiler for Java.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

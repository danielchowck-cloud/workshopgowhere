import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});
const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://workshopgowhere.com"),
  title: "workshopgowhere — Smart Diagnostic Marketplace for European Cars in SG",
  description:
    "Smart symptom search for Mercedes, BMW, Audi, Volkswagen, Porsche, Volvo, Alfa Romeo, Land Rover, Jaguar, MINI, Maserati, Tesla and BYD owners in Singapore. Pick your model, symptom and fair repair range before approving a quote.",
  keywords: [
    "Mercedes specialist singapore",
    "BMW specialist sg",
    "Audi specialist sg",
    "Alfa Romeo specialist singapore",
    "Land Rover specialist singapore",
    "Jaguar specialist singapore",
    "MINI specialist singapore",
    "Maserati specialist singapore",
    "Continental car repair singapore",
    "agent alternative workshop sg",
    "Mercedes E-Class rear sinks overnight",
    "Mercedes E-Class air suspension drops overnight",
    "Mercedes E-Class air suspension fix Singapore",
    "9G-Tronic conductor plate",
    "ZF mechatronic singapore",
    "Tesla repair sg",
    "fair price car repair singapore",
    "car repair quote auditor",
  ],
  authors: [{ name: "workshopgowhere" }],
  openGraph: {
    title: "workshopgowhere — Smart Diagnostic Marketplace",
    description:
      "Pick your Mercedes, BMW, Audi, etc. Pick the symptom. Get the diagnostic tip + verified specialist + fair price. SG-only.",
    url: "https://workshopgowhere.com",
    siteName: "workshopgowhere",
    type: "website",
  },
};


const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "workshopgowhere",
  url: "https://workshopgowhere.com",
  description:
    "Singapore diagnostic-first car repair guide helping owners identify likely root causes, fair repair prices, red-flag quotes and specialist workshops before approving repairs.",
  areaServed: { "@type": "Country", name: "Singapore" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@workshopgowhere.com",
  },
  sameAs: ["https://workshopgowhere.com"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-slate-50 antialiased dark:bg-slate-950">
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZSMF6E6RVV" />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZSMF6E6RVV');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
            <a href="/" className="group flex items-baseline gap-2 text-slate-900 dark:text-slate-100">
              <span className="font-display text-xl font-semibold tracking-tight">
                workshop<span className="text-blue-700 dark:text-blue-400">go</span>where
              </span>
              <span className="hidden translate-y-px text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:inline dark:text-slate-500">
                Singapore
              </span>
            </a>
            <nav className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="/workshops" className="rounded-lg px-3 py-1.5 transition hover:bg-slate-200/60 hover:text-slate-900 dark:hover:bg-slate-800/60 dark:hover:text-white">
                Workshops
              </a>
              <a href="/blog" className="hidden rounded-lg px-3 py-1.5 transition hover:bg-slate-200/60 hover:text-slate-900 sm:inline-flex dark:hover:bg-slate-800/60 dark:hover:text-white">
                Guides
              </a>
              <a href="/about" className="hidden rounded-lg px-3 py-1.5 transition hover:bg-slate-200/60 hover:text-slate-900 sm:inline-flex dark:hover:bg-slate-800/60 dark:hover:text-white">
                About
              </a>
              <a
                href="/audit-my-quote"
                className="ml-1 inline-flex items-center rounded-lg bg-slate-900 px-3.5 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Audit a quote
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-slate-200 px-4 py-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          <p>
            workshopgowhere.com — Singapore Smart Diagnostic Marketplace for European cars
          </p>
          <p className="mt-2">
            Free for owners · Independent · No referral commissions ·{" "}
            <a href="/about" className="underline hover:text-blue-600 dark:hover:text-blue-400">
              About
            </a>{" "}
            ·{" "}
            <a href="/workshops" className="underline hover:text-blue-600 dark:hover:text-blue-400">
              Workshops
            </a>{" "}
            ·{" "}
            <a href="/blog" className="underline hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </a>{" "}
            ·{" "}
            <a href="/submit" className="underline hover:text-blue-600 dark:hover:text-blue-400">
              List your workshop
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}

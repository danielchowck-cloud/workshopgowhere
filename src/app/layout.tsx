import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "workshopgowhere — Smart Diagnostic Marketplace for European Cars in SG",
  description:
    "Smart symptom search for Mercedes, BMW, Audi, Porsche, Volvo, Tesla owners in Singapore. Pick your model, pick your symptom — get the diagnostic tip + verified specialist + market-fair price. Don't fall for the agent trap.",
  keywords: [
    "Mercedes specialist singapore",
    "BMW specialist sg",
    "Audi specialist sg",
    "Continental car repair singapore",
    "agent alternative workshop sg",
    "W213 air suspension fix",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 antialiased dark:bg-slate-950">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2 text-base font-bold tracking-tight text-slate-900 dark:text-slate-100">
              <span className="rounded-md bg-blue-600 px-2 py-0.5 text-xs font-black uppercase tracking-wider text-white">
                WGW
              </span>
              <span>
                workshop<span className="text-blue-600 dark:text-blue-400">go</span>where
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:inline">
                · SG
              </span>
            </a>
            <nav className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <a href="/about" className="hover:text-slate-900 dark:hover:text-white">
                About
              </a>
              <a href="/audit-my-quote" className="hover:text-slate-900 dark:hover:text-white">
                Audit quote
              </a>
              <a
                href="/submit"
                className="hidden rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold hover:border-blue-500 hover:text-blue-700 dark:border-slate-700 dark:hover:border-blue-400 dark:hover:text-blue-300 sm:inline-flex"
              >
                List your shop
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
            <a href="/submit" className="underline hover:text-blue-600 dark:hover:text-blue-400">
              List your workshop
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}

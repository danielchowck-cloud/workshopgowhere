import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "workshopgowhere — Find the right SG car workshop for your problem",
  description:
    "Singapore car workshop finder. Describe your car problem (engine rattling, check engine light, brake squeak, aircon not cold) — we show you the right specialist near you.",
  keywords: [
    "car workshop singapore",
    "car repair sg",
    "engine workshop singapore",
    "brake repair sg",
    "aircon car repair sg",
    "tyre shop singapore",
    "car diagnostic singapore",
    "VICOM inspection",
    "Tesla service sg",
  ],
  authors: [{ name: "workshopgowhere" }],
  openGraph: {
    title: "workshopgowhere",
    description: "Singapore car workshop finder. Search by what's wrong with your car.",
    url: "https://workshopgowhere.com",
    siteName: "workshopgowhere",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <a href="/" className="text-lg font-bold tracking-tight">
              workshop<span className="text-orange-600">go</span>where
              <span className="ml-2 text-xs font-normal text-neutral-500">SG</span>
            </a>
            <nav className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <a href="/about" className="hover:text-neutral-900 dark:hover:text-white">About</a>
              <a href="/submit" className="hover:text-neutral-900 dark:hover:text-white">List your workshop</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-neutral-200 px-4 py-8 text-center text-xs text-neutral-500 dark:border-neutral-800">
          <p>workshopgowhere.com — Singapore car workshop finder</p>
          <p className="mt-2">
            Free to use. Independent — no referral commissions.{" "}
            <a href="/about" className="underline">About</a>
            {" · "}
            <a href="/submit" className="underline">List your workshop</a>
          </p>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "workshopgowhere — Find SG workshops, classes & one-off events",
  description:
    "Singapore's workshop finder. Pottery, cooking, art, calligraphy, fitness, parent-child, and more. Search by what you want. See what's near you.",
  keywords: [
    "workshops singapore",
    "classes singapore",
    "things to do singapore",
    "weekend workshop sg",
    "pottery singapore",
    "cooking class singapore",
    "art jamming singapore",
  ],
  authors: [{ name: "workshopgowhere" }],
  openGraph: {
    title: "workshopgowhere",
    description: "Search SG workshops by what you want.",
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
            </a>
            <nav className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <a href="/about" className="hover:text-neutral-900 dark:hover:text-white">About</a>
              <a href="/submit" className="hover:text-neutral-900 dark:hover:text-white">Submit</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-neutral-200 px-4 py-8 text-center text-xs text-neutral-500 dark:border-neutral-800">
          <p>workshopgowhere.com — Singapore workshop finder</p>
          <p className="mt-2">
            Free to use. Outbound bookings on partner sites.{" "}
            <a href="/about" className="underline">About</a>
          </p>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "@/lib/progress";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GlobalProgressBar from "@/components/GlobalProgressBar";
import { getAllStepIds } from "@/lib/steps";
import { SITE_NAME, TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: TAGLINE,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const allStepIds = getAllStepIds();

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <ProgressProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-pass focus:px-3 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <GlobalProgressBar allStepIds={allStepIds} />
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ProgressProvider>
      </body>
    </html>
  );
}

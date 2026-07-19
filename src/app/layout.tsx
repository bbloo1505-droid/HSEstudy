import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HSE Launchpad",
  description:
    "Fully local Queensland HSE learning assistant for Associate HSE Consultant preparation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${display.variable} h-full`}>
      <body
        className="min-h-full antialiased"
        style={
          {
            "--font-sans": "var(--font-ibm)",
            "--font-display": "var(--font-source-serif)",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}

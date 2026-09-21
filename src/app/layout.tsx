import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticleField from "@/components/ParticleField";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caledon HOSA Community Chapter | Future Health Professionals",
  description:
    "Redefining STEM and Healthcare Opportunities for Peel Region. An independent, merit-first community chapter of HOSA — Future Health Professionals.",
  keywords: [
    "HOSA",
    "Caledon",
    "Future Health Professionals",
    "STEM",
    "Healthcare",
    "Peel Region",
    "Student Organization",
  ],
  openGraph: {
    title: "Caledon HOSA Community Chapter",
    description:
      "Redefining STEM and Healthcare Opportunities for Peel Region. No caps. No lotteries. Just pure potential.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-dark text-white">
        <ParticleField />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
      </body>
    </html>
  );
}

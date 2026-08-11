import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Experio Verse — Corporate Employee Experience Company",
    template: "%s | Experio Verse",
  },
  description:
    "Experio Verse helps companies create meaningful employee experiences through corporate events, engagement, wellness, sports, team-building, celebrations and offsites.",
  keywords: [
    "Corporate Employee Experience",
    "Employee Engagement",
    "Corporate Events",
    "Employee Wellness",
    "Corporate Team Building",
    "Corporate Offsite",
    "Corporate Activities",
    "Employee Experience Company India",
  ],
  authors: [{ name: "Experio Verse" }],
  openGraph: {
    title: "Experio Verse — Corporate Employee Experience Company",
    description:
      "We create meaningful experiences that help employees connect, engage, move, celebrate and explore together.",
    type: "website",
    locale: "en_IN",
    siteName: "Experio Verse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experio Verse — Corporate Employee Experience Company",
    description:
      "We create meaningful experiences that help employees connect, engage, move, celebrate and explore together.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
        <Header />
        <main className="flex-1 pt-28 md:pt-24 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

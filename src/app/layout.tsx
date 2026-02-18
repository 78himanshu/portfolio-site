import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { profile } from "@/data/profile";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`
  },
  description: profile.summary,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    type: "website",
    images: [
      {
        url: profile.photo,
        width: 800,
        height: 800,
        alt: profile.name
      }
    ]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plexSans.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

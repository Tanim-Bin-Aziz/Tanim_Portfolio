import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Software Engineer with hands-on experience building responsive and scalable web applications using React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and MySQL.",
  keywords: [
    "Tanim Bin Aziz",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MySQL",
    "Web Development",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Software Engineer with hands-on experience building responsive and scalable web applications using React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and MySQL.",
    url: site.website,
    siteName: site.name,
    images: [
      {
        url: "/og/tanim-bin-aziz-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Software Engineer with hands-on experience building responsive and scalable web applications.",
    images: ["/og/tanim-bin-aziz-portfolio.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: site.website,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

/**
 * Theme flash (FOUC) bondho korar jonno paint hobar aage data-theme boshiye dei.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var valid = ['dark','light'];
    var theme = valid.indexOf(stored) !== -1 ? stored : 'dark';
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}

import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: "Chrishane Amarasekara",
    template: "%s | Chrishane Amarasekara",
  },
  description: "Chrishane Amarasekara | Software Engineer, Geneticist, Astrophysicist ... in the making",
  openGraph: {
    title: "Chrishane Amarasekara",
    description:
      "Chrishane Amarasekara | Software Engineer, Geneticist, Astrophysicist ... in the making",
    url: "https://chrishane-amarasekara.com",
    siteName: "Chrishane Amarasekara",
    images: [
      {
        url: "https://www.chrishane-amarasekara.com/ChrishaneFavicon.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
  twitter: {
    title: "Chrishane Amarasekara Portfolio",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/ChrishaneFavicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
            style={{
              background: 'linear-gradient(to top left, #01bdcf, #2297d4, #3479d9, #5255e0, #6a34e3, #7b20e8)',
            }}

      >
        {children}
      </body>
    </html>
  );
}

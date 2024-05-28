import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "chrishane-amarasekara.com",
    template: "%s | chronark.com",
  },
  description: "Chrishane Amarasekara | Software Engineer, Geneticist, Astrophysicist ... in the making",
  openGraph: {
    title: "chrishane-amarasekara.com",
    description:
      "Chrishane Amarasekara | Software Engineer, Geneticist, Astrophysicist ... in the makin",
    url: "https://chrishane-amarasekara.com",
    siteName: "chrishane-amarasekara.com",
    images: [
      {
        url: "https://chronark.com/og.png",
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
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
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
              background: 'linear-gradient(to top left, #bcf2fc, #11b4ea, #11b4ea)',
            }}

      >
        {children}
      </body>
    </html>
  );
}

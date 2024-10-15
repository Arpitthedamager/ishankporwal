// app/layout.tsx or app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./utils/SessionProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://adsuper.netlify.app"),
  title: "ADSuper - Marketing Agency",
  description: "ADSuper is a leading marketing agency specializing in innovative strategies to boost your brand's presence and engagement.",
  keywords: "marketing,ADSuper,adsuper, agency, digital marketing, SEO, brand strategy, social media marketing",
  author: "ADSuper Team",
  openGraph: {
    title: "ADSuper - Marketing Agency",
    description: "ADSuper is a leading marketing agency specializing in innovative strategies to boost your brand's presence and engagement.",
    url: "https://adsuper.netlify.app",
    siteName: "ADSuper",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
        alt: "ADSuper Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ADSuper",
    title: "ADSuper - Marketing Agency",
    description: "ADSuper is a leading marketing agency specializing in innovative strategies to boost your brand's presence and engagement.",
    image: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

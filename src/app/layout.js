// app/layout.tsx or app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./utils/SessionProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ADSuper - Marketing Agency",
  description: "ADSuper is a leading marketing agency specializing in innovative strategies to boost your brand's presence and engagement.",
  keywords: "marketing, agency, digital marketing, SEO, brand strategy, social media marketing",
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
      <AuthProvider>
        <head>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="author" content={metadata.author} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:site_name" content={metadata.openGraph.siteName} />
          <meta property="og:type" content={metadata.openGraph.type} />
          <meta property="og:image" content={metadata.openGraph.images[0].url} />
          <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
          <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
          <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="twitter:site" content={metadata.twitter.site} />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.image} />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href={metadata.openGraph.url} />
          {/* Add other meta tags if needed */}
        </head>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}

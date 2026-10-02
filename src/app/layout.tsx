import type { Metadata } from "next";
import "./globals.css";

const description = "Chanaka Karunarathne — Sri Lankan software engineer, traveler and creator. Explore software projects, countries visited, and ways to connect.";
export const metadata: Metadata = {
  metadataBase: new URL("https://kmchmk.com"),
  title: "Chanaka Karunarathne | Projects & Travel",
  description,
  authors: [{ name: "Chanaka Karunarathne", url: "https://kmchmk.com" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_US", url: "/", siteName: "Chanaka Karunarathne",
    title: "Chanaka Karunarathne | Projects & Travel", description,
    images: [{ url: "/profile.jpg", alt: "Chanaka Karunarathne" }],
  },
  twitter: { card: "summary", site: "@kmchmk", creator: "@kmchmk", title: "Chanaka Karunarathne | Projects & Travel", description, images: ["/profile.jpg"] },
  icons: { icon: "/profile.jpg", apple: "/profile.jpg" },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org", "@type": "Person",
    name: "Chanaka Karunarathne", alternateName: "kmchmk", description,
    url: "https://kmchmk.com", image: "https://kmchmk.com/profile.jpg",
    sameAs: ["https://linkedin.com/in/kmchmk", "https://github.com/kmchmk", "https://twitter.com/kmchmk", "https://youtube.com/@kmchmk", "https://tiktok.com/@kmchmk", "https://medium.com/@kmchmk"],
  };
  return (
    <html lang="en">
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></head>
      <body>{children}</body>
    </html>
  );
}

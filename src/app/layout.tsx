import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Chanaka Karunarathne - Senior Software Engineer | @kmchmk",
  description: "Senior Software Engineer specializing in C++, Java, and Python. Digital nomad based in Chiang Mai, Thailand. Creating tech & travel content on YouTube and TikTok.",
  keywords: [
    "Chanaka Karunarathne",
    "kmchmk",
    "Senior Software Engineer",
    "C++",
    "Java",
    "Python",
    "Fintech",
    "AI",
    "Web3",
    "Digital Nomad",
    "Chiang Mai",
    "Thailand",
    "Software Developer",
    "Tech Content Creator",
    "YouTube",
    "TikTok",
    "Favorite Medium"
  ],
  authors: [{ name: "Chanaka Karunarathne", url: "https://kmchmk.com" }],
  creator: "Chanaka Karunarathne",
  publisher: "Chanaka Karunarathne",
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
    type: "website",
    locale: "en_US",
    url: "https://kmchmk.com",
    siteName: "Chanaka Karunarathne - Portfolio",
    title: "Chanaka Karunarathne - Senior Software Engineer | @kmchmk",
    description: "Senior Software Engineer specializing in C++, Java, and Python. Digital nomad based in Chiang Mai, Thailand. Creating tech & travel content.",
    images: [
      {
        url: "https://kmchmk.com/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Chanaka Karunarathne - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kmchmk",
    creator: "@kmchmk",
    title: "Chanaka Karunarathne - Senior Software Engineer | @kmchmk",
    description: "Senior Software Engineer specializing in C++, Java, and Python. Digital nomad based in Chiang Mai, Thailand.",
    images: ["https://kmchmk.com/profile.jpg"],
  },
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://kmchmk.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chanaka Karunarathne",
    alternateName: "kmchmk",
    description: "Senior Software Engineer specializing in C++, Java, and Python. Digital nomad based in Chiang Mai, Thailand.",
    url: "https://kmchmk.com",
    image: "https://kmchmk.com/profile.jpg",
    sameAs: [
      "https://linkedin.com/in/kmchmk",
      "https://github.com/kmchmk",
      "https://twitter.com/kmchmk",
      "https://youtube.com/@kmchmk",
      "https://tiktok.com/@kmchmk",
      "https://medium.com/@kmchmk"
    ],
    jobTitle: "Senior Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Favorite Medium"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chiang Mai",
      addressCountry: "Thailand"
    },
    email: "kmchmk@gmail.com",
    knowsAbout: ["C++", "Java", "Python", "Fintech", "AI", "Web3", "Software Engineering"],
    nationality: "Sri Lankan"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

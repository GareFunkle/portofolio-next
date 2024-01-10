import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Trispace } from "next/font/google";

const trispace = Trispace({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vincent-durret.vercel.app/"),
  title: "Vincent Durret Portfolio",
  description:
    "Découvrez mes créations de sites web, vitrine et e-commerce, qui illustrent ma passion et mon expertise en développement web. Contactez-moi pour concrétiser votre projet en réalité.",
  keywords: [
    "portfolio",
    "developpeur web",
    "cv",
    "freelance",
    "vincent",
    "durret",
    "react",
    "next.js",
  ],
  openGraph: {
    title: "Vincent Durret Portfolio",
    description:
      "Découvrez mes créations de sites web, vitrine et e-commerce, qui illustrent ma passion et mon expertise en développement web. Contactez-moi pour concrétiser votre projet en réalité.",
    url: "https://vincent-durret.vercel.app/",
    siteName: "Vincent Durret Portfolio",
    image: "./opengraph-image.png",
  },
  locale: "fr_FR",
  type: "website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='fr' className={trispace.className}>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;

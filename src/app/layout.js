import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Trispace } from "next/font/google";
import Head from "next/head";

const trispace = Trispace({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vincent Durret Portfolio",
  description:
    "Découvrez mes créations de sites web, vitrine et e-commerce, qui illustrent ma passion et mon expertise en développement web. Contactez-moi pour concrétiser votre projet en réalité.",
  keywords: ["portfolio", "developpeur web", "cv", "freelance"],
  openGraph: {
    title: "Vincent Durret Portfolio",
    description:
      "Découvrez mes créations de sites web, vitrine et e-commerce, qui illustrent ma passion et mon expertise en développement web.",
    url: "https://vincent-durret.vercel.app/",
    siteName: "Vincent Durret Portfolio",
    images: [
      {
        url: "https://vincent-durret.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Logo Vincent Durret",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta property='og:title' content={metadata.openGraph.title} />
        <meta
          property='og:description'
          content={metadata.openGraph.description}
        />
        <meta property='og:url' content={metadata.openGraph.url} />
        <meta property='og:site_name' content={metadata.openGraph.siteName} />
        <meta property='og:locale' content={metadata.openGraph.locale} />
        <meta property='og:type' content={metadata.openGraph.type} />
        {metadata.openGraph.images.map((image, index) => (
          <>
            <meta property='og:image' content={image.url} />
            <meta property='og:image:type' content='image/jpeg' />
            <meta property='og:image:width' content={image.width.toString()} />
            <meta
              property='og:image:height'
              content={image.height.toString()}
            />
            <meta property='og:image:alt' content={image.alt} />
          </>
        ))}
      </Head>
      <html lang='fr' className={trispace.className}>
        <body>
          {children}
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </>
  );
};

export default RootLayout;

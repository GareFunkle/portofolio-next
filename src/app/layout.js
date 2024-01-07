import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Vincent Durret Portfolio",
  description:
    "Découvrez mes créations de sites web, vitrine et e-commerce, qui illustrent ma passion et mon expertise en développement web. Contactez-moi pour concrétiser votre projet en réalité.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

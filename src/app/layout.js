import "./globals.css";

export const metadata = {
  title: "Vincent Durret Portfolio",
  description:
    "Découvrez le parcours unique d'un ancien électricien passionné par la technologie, désormais développeur web polyvalent. Spécialisé en Vue.js et en intégration web, je suis constamment à la recherche de nouveaux défis pour enrichir mes compétences et apporter des solutions innovantes. Explorez mon portfolio pour voir comment je peux transformer vos idées en réalité.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

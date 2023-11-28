import "./globals.css";

export const metadata = {
  title: "Portofolio Vincent Durret",
  description: "Portofolio Developpeur Web Vincent Durret",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

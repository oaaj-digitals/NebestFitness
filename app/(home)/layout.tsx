import "../globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GoogleAnayticsScript from "../GoogleAnayticsScript";
import { oxanium } from "../globalLayoutSettings";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <GoogleAnayticsScript />
      <body className={`${oxanium.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

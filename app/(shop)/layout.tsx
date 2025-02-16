import "../globals.css";
import Header from "../components/Header/Header";
import { oxanium } from "../globalLayoutSettings";
import GoogleAnayticsScript from "../GoogleAnayticsScript";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnayticsScript />
      <body className={`${oxanium.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
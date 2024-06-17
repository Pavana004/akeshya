import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { Raleway } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Akeshya",
  description: "creating website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

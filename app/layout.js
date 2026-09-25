import "./globals.css";
import { Heebo } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata = {
  title: "סוליסט וייטנאם | וייטנאם בדרך שלך",
  description: "כל מה שהמטייל הישראלי צריך לדעת לפני ובזמן הטיול לוייטנאם. ויזה, יעדים, מסלולים, טיפים וקהילה",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "סוליסט וייטנאם | וייטנאם בדרך שלך",
    description: "כל מה שהמטייל הישראלי צריך לדעת לפני ובזמן הטיול לוייטנאם",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className={`${heebo.className} min-h-full flex flex-col bg-[#0f1923] text-[#f5f0e8]`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

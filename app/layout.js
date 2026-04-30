import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "סוליסט וייטנאם | המדריך המלא למטייל הישראלי",
  description: "כל המידע שצריך המטייל הישראלי לוייטנאם — יעדים, מסלולים, טיפים, לינה, ויזות וקהילה",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "סוליסט וייטנאם | המדריך המלא למטייל הישראלי",
    description: "כל המידע שצריך המטייל הישראלי לוייטנאם — יעדים, מסלולים, טיפים, לינה, ויזות וקהילה",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0f1923] text-[#f5f0e8]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

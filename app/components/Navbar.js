"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "יעדים", href: "/destinations" },
  { label: "מסלולים", href: "/itineraries" },
  { label: "טיפים", href: "/tips" },
  { label: "ויזה", href: "/visa" },
  { label: "קהילה", href: "/community" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Utility bar */}
      <div className="bg-[#1A2535] text-white">
        <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-between">
          <Link
            href="/community"
            dir="ltr"
            className="flex items-center gap-0.5 bg-[#25D366] hover:bg-[#1ea854] text-white font-bold px-3 py-0.5 rounded-full text-xs transition-colors"
          >
            <span>קהילה</span>
            <span>&nbsp;ב</span>
            <span dir="ltr">WhatsApp</span>
            <svg className="w-3 h-3 flex-shrink-0 mr-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </Link>

          <div className="flex items-center gap-4 text-white/60 text-xs">
            <Link href="/blog" className="hover:text-white transition-colors hidden sm:inline">בלוג</Link>
            <Link href="/map" className="hover:text-white transition-colors hidden sm:inline">מפת וייטנאם</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        {/* Desktop: 3-column grid — nav links | logo centered | CTA */}
        <div className="hidden md:grid grid-cols-3 items-center h-14 max-w-7xl mx-auto px-4">
          {/* Left col: CTA */}
          <div className="flex justify-start">
            <Link
              href="/visa"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-1.5 rounded-full transition-colors"
            >
              הוצאת ויזה
            </Link>
          </div>
          {/* Center col: Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <img src="/logo.png" alt="סוליסט וייטנאם" className="h-14 w-auto max-w-[340px] object-contain" />
            </Link>
          </div>
          {/* Right col: Nav links */}
          <div className="flex justify-end items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all ${
                    active
                      ? "bg-orange-500 text-white"
                      : "text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile: logo centered, hamburger on left */}
        <div className="md:hidden relative flex items-center justify-between h-14 px-3">
          {/* Hamburger on left (RTL end) */}
          <button
            className="text-slate-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {/* Logo centered */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <img src="/logo.png" alt="סוליסט וייטנאם" className="h-12 w-auto max-w-[230px] object-contain" />
          </Link>
          {/* Right placeholder for balance */}
          <div className="w-9" />
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 px-4 py-3 space-y-1 bg-white">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    active ? "bg-orange-500 text-white" : "text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/visa"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-orange-500 text-white text-sm font-bold px-4 py-2.5 rounded-xl mt-2"
            >
              הוצאת ויזה
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

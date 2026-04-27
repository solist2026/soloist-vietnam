"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f1923]/90 backdrop-blur-md border-b border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#c9a84c] tracking-wide">
          סוליסט ויאטנם
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/destinations" className="hover:text-[#c9a84c] transition-colors">יעדים</Link>
          <Link href="/itineraries" className="hover:text-[#c9a84c] transition-colors">מסלולים</Link>
          <Link href="/tips" className="hover:text-[#c9a84c] transition-colors">טיפים</Link>
          <Link href="/visa" className="hover:text-[#c9a84c] transition-colors">ויזה</Link>
          <Link href="/community" className="hover:text-[#c9a84c] transition-colors">קהילה</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#f5f0e8] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f1923] border-t border-[#c9a84c]/20 px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/destinations" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a84c]">יעדים</Link>
          <Link href="/itineraries" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a84c]">מסלולים</Link>
          <Link href="/tips" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a84c]">טיפים</Link>
          <Link href="/visa" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a84c]">ויזה</Link>
          <Link href="/community" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a84c]">קהילה</Link>
        </div>
      )}
    </nav>
  );
}

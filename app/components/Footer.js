import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080f16] border-t border-[#c9a84c]/20 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="inline-block mb-4">
            <div className="bg-white rounded-2xl px-3 py-2">
              <img src="/logo.png" alt="סוליסט וייטנאם" className="h-16 w-auto" />
            </div>
          </Link>
          <p className="text-[#f5f0e8]/60 text-sm leading-relaxed">
            המדריך המלא למטייל הישראלי העצמאי בוייטנאם. כל מה שצריך לדעת — במקום אחד.
          </p>
        </div>

        <div>
          <h4 className="text-[#f5f0e8] font-semibold mb-3">ניווט מהיר</h4>
          <ul className="flex flex-col gap-2 text-sm text-[#f5f0e8]/60">
            <li><Link href="/destinations" className="hover:text-[#c9a84c] transition-colors">יעדים</Link></li>
            <li><Link href="/itineraries" className="hover:text-[#c9a84c] transition-colors">מסלולים</Link></li>
            <li><Link href="/tips" className="hover:text-[#c9a84c] transition-colors">טיפים פרקטיים</Link></li>
            <li><Link href="/visa" className="hover:text-[#c9a84c] transition-colors">ויזה לוייטנאם</Link></li>
            <li><Link href="/community" className="hover:text-[#c9a84c] transition-colors">קהילת מטיילים</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#f5f0e8] font-semibold mb-3">יצירת קשר</h4>
          <p className="text-sm text-[#f5f0e8]/60">
            יש שאלה? רוצה לשתף חוויה?<br />
            הצטרף לקהילה שלנו ושאל הכל.
          </p>
          <Link
            href="/community"
            className="inline-block mt-3 text-sm bg-[#c9a84c] text-[#0f1923] px-4 py-2 rounded-full font-bold hover:bg-[#b8963d] transition-colors"
          >
            הצטרף לקהילה
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-[#c9a84c]/10 text-center text-xs text-[#f5f0e8]/30">
        © 2025 סוליסט ויאטנם | כל הזכויות שמורות
      </div>
    </footer>
  );
}

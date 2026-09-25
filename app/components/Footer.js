import Link from "next/link";

const quickLinks = [
  { label: "יעדים בוייטנאם", href: "/destinations" },
  { label: "מסלולי טיול", href: "/itineraries" },
  { label: "טיפים למטייל", href: "/tips" },
  { label: "ויזה לוייטנאם", href: "/visa" },
  { label: "מפת וייטנאם", href: "/map" },
  { label: "בלוג", href: "/blog" },
  { label: "קהילה ישראלית", href: "/community" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A2535] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Col 1: Logo + tagline + social */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-xl p-1.5 flex-shrink-0">
                <img src="/logo.png" alt="סוליסט וייטנאם" className="h-12 w-auto" />
              </div>
              <div>
                <div className="font-black text-xl text-white leading-tight">סוליסט</div>
                <div className="text-xs text-orange-400 font-bold tracking-widest">וייטנאם</div>
              </div>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              המדריך המלא למטייל הישראלי העצמאי בוייטנאם. כל מה שצריך לדעת, במקום אחד.
            </p>
            <div className="flex gap-2">
              {["📸", "👥", "▶️", "🎵"].map((icon, i) => (
                <span
                  key={i}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-orange-500 transition-colors cursor-pointer"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">ניווט מהיר</h4>
            <ul className="space-y-2 text-sm text-white/55">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-orange-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">צור קשר</h4>
            <p className="text-sm text-white/55 leading-relaxed mb-4">
              יש שאלות לפני הטיול? רוצים עזרה עם הויזה? אנחנו כאן.
            </p>
            <a
              href="mailto:soloistour@gmail.com"
              className="flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors mb-3"
            >
              <span>✉️</span>
              <span>soloistour@gmail.com</span>
            </a>
            <Link
              href="/community"
              className="flex items-center gap-2 text-sm text-[#25D366] hover:text-green-400 transition-colors"
            >
              <span>💬</span>
              <span>WhatsApp קהילה</span>
            </Link>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">הצטרפו לעדכונים</h4>
            <p className="text-sm text-white/55 mb-4 leading-relaxed">
              טיפים, מבצעים ועדכונים ישירות למייל שלכם.
            </p>
            <form action="#" className="space-y-2">
              <input
                type="email"
                placeholder="האימייל שלכם"
                className="w-full bg-white/10 text-white placeholder-white/40 border border-white/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg text-sm transition-colors"
              >
                הרשמה לעדכונים
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <span>© 2026 סוליסט וייטנאם | כל הזכויות שמורות</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white/60 transition-colors">מדיניות פרטיות</Link>
            <Link href="/" className="hover:text-white/60 transition-colors">תנאי שימוש</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

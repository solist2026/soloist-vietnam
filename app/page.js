import Link from "next/link";

const destinations = [
  {
    region: "צפון",
    color: "from-emerald-900 to-emerald-700",
    icon: "🏔️",
    places: ["האנוי", "סאפה", "הלונג ביי", "הא גיאנג לופ", "ניין בינה"],
    description: "הרים מרהיבים, שדות אורז מדורגים, ועיר הבירה המסתורית",
    href: "/destinations/north",
  },
  {
    region: "מרכז",
    color: "from-amber-900 to-amber-700",
    icon: "🏯",
    places: ["הוי אן", "דה נאנג", "הואה", "Ba Na Hills"],
    description: "עיירות עתיקות, חופים עוצרי נשימה ואוכל מהמשובח בוייטנאם",
    href: "/destinations/center",
  },
  {
    region: "דרום",
    color: "from-red-900 to-red-700",
    icon: "🌴",
    places: ["הו צ'י מין", "מקונג", "פו קווק", "מוי נה"],
    description: "עיר תוססת, דלתת מקונג ואיים טרופיים עם חופים בתוליים",
    href: "/destinations/south",
  },
];

const quickTips = [
  { icon: "💳", title: "כסף", text: "דונג וייטנאמי (VND). כספומטים בכל מקום. קחו מזומן ליעדים קטנים." },
  { icon: "📱", title: "SIM", text: "קנו SIM בחנות Viettel בעיר (לא בשדה התעופה — יקר ולעיתים הונאה). Viettel היא הרשת הטובה ביותר בפער." },
  { icon: "🛵", title: "תחבורה", text: "גראב (אובר מקומי) לנסיעות בעיר. אוטובוסי לילה בין ערים." },
  { icon: "🍜", title: "אוכל", text: "פו, באן מי ובון צ'ה — חובה לנסות. הימנעו ממסעדות עם תפריט באנגלית בלבד." },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1923]/40 via-[#0f1923]/60 to-[#0f1923]" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold tracking-widest mb-4 uppercase">
            המדריך המלא למטייל הישראלי
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            גלה את
            <span className="text-[#c9a84c]"> וייטנאם </span>
            בדרך שלך
          </h1>
          <p className="text-xl md:text-2xl text-[#f5f0e8]/80 mb-10 leading-relaxed">
            מהרי הצפון ועד החופים הטרופיים של הדרום —<br />
            כל מה שצריך לדעת במקום אחד
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/destinations"
              className="bg-[#c9a84c] text-[#0f1923] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b8963d] transition-colors"
            >
              גלה יעדים
            </Link>
            <Link
              href="/itineraries"
              className="border border-[#c9a84c] text-[#c9a84c] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c9a84c]/10 transition-colors"
            >
              בנה מסלול
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#c9a84c] text-2xl">
          ↓
        </div>
      </section>

      {/* Regions Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">חקור את וייטנאם</h2>
          <p className="text-[#f5f0e8]/60 text-lg">שלושה אזורים, אינסוף הרפתקאות</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.region}
              href={dest.href}
              className="card-hover group relative rounded-2xl overflow-hidden bg-[#1a2535] border border-[#c9a84c]/10"
            >
              <div className={`h-2 bg-gradient-to-r ${dest.color}`} />
              <div className="p-6">
                <div className="text-4xl mb-3">{dest.icon}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#c9a84c] transition-colors">
                  {dest.region} וייטנאם
                </h3>
                <p className="text-[#f5f0e8]/60 text-sm mb-4 leading-relaxed">{dest.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dest.places.map((place) => (
                    <span
                      key={place}
                      className="text-xs bg-[#c9a84c]/10 text-[#c9a84c] px-3 py-1 rounded-full"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-5">
                <span className="text-sm text-[#c9a84c] font-semibold group-hover:underline">
                  לכל היעדים ←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="bg-[#1a2535] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">טיפים חיוניים</h2>
            <p className="text-[#f5f0e8]/60 text-lg">מה חשוב לדעת לפני שעולים למטוס</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip) => (
              <div key={tip.title} className="bg-[#0f1923] rounded-xl p-6 border border-[#c9a84c]/10 card-hover">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-[#c9a84c]">{tip.title}</h4>
                <p className="text-sm text-[#f5f0e8]/70 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/tips"
              className="inline-block border border-[#c9a84c] text-[#c9a84c] px-8 py-3 rounded-full font-semibold hover:bg-[#c9a84c]/10 transition-colors"
            >
              לכל הטיפים הפרקטיים
            </Link>
          </div>
        </div>
      </section>

      {/* Itinerary CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-br from-[#1a2535] to-[#0f1923] rounded-3xl p-12 border border-[#c9a84c]/20">
          <h2 className="text-4xl font-bold mb-4">לא יודע מאיפה להתחיל?</h2>
          <p className="text-[#f5f0e8]/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            ספר לנו כמה זמן יש לך ומה אתה מחפש — ונבנה לך מסלול מותאם אישית לוייטנאם
          </p>
          <Link
            href="/itineraries"
            className="bg-[#c9a84c] text-[#0f1923] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#b8963d] transition-colors inline-block"
          >
            בנה את המסלול שלי ✈️
          </Link>
        </div>
      </section>

      {/* Visa Ad Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1923] via-[#1a2535] to-[#0f1923]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c9a84c15_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Top label */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
              ⚠️ ישראלים חייבים ויזה לוייטנאם — אל תשכחו
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left — info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                ויזה לוייטנאם —<br />
                <span className="text-[#c9a84c]">בלי כאב ראש</span>
              </h2>
              <p className="text-[#f5f0e8]/70 text-lg leading-relaxed mb-8">
                ישראל אינה פטורה מויזה. E-Visa אלקטרונית עולה <strong className="text-[#f5f0e8]/90">$25</strong> בלבד —
                מגישים אונליין ומקבלים ויזה מאושרת במייל תוך ימים ספורים.
                צוות סוליסט יכול לטפל בכל התהליך בשבילכם, בעברית.
              </p>

              {/* Trust signals */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: "🛂", label: "תוקף 90 יום", sub: "מיום הכניסה" },
                  { icon: "⚡", label: "אקספרס 24 שעות", sub: "עיבוד מהיר" },
                  { icon: "🔍", label: "בדיקת מסמכים", sub: "לפני הגשה" },
                  { icon: "🇮🇱", label: "שירות בעברית", sub: "תמיכה מלאה" },
                ].map(item => (
                  <div key={item.label} className="bg-[#1a2535]/80 border border-[#c9a84c]/10 rounded-xl px-4 py-3 flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-sm font-bold">{item.label}</div>
                      <div className="text-xs text-[#f5f0e8]/40">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/visa"
                  className="bg-[#c9a84c] text-[#0f1923] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b8963d] transition-colors"
                >
                  כל המידע על ויזה →
                </Link>
                <Link
                  href="/visa/apply"
                  className="border-2 border-[#c9a84c] text-[#c9a84c] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c9a84c]/10 transition-colors"
                >
                  הגש ויזה דרכנו
                </Link>
              </div>
            </div>

            {/* Right — price cards */}
            <div className="flex flex-col gap-4">
              {/* Main card */}
              <div className="bg-gradient-to-br from-[#1a2535] to-[#0f1923] border-2 border-[#c9a84c]/30 rounded-3xl p-7">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-[#c9a84c]">E-Visa</span>
                  <span className="bg-[#c9a84c]/15 text-[#c9a84c] text-xs font-bold px-3 py-1 rounded-full">הכי פופולרי</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#0f1923] rounded-2xl p-4 text-center">
                    <div className="text-3xl font-black text-[#c9a84c]">$25</div>
                    <div className="text-xs text-[#f5f0e8]/50 mt-1">כניסה אחת</div>
                    <div className="text-xs text-[#f5f0e8]/30">≈ ₪169</div>
                  </div>
                  <div className="bg-[#0f1923] rounded-2xl p-4 text-center">
                    <div className="text-3xl font-black text-[#c9a84c]">$50</div>
                    <div className="text-xs text-[#f5f0e8]/50 mt-1">כניסות מרובות</div>
                    <div className="text-xs text-[#f5f0e8]/30">≈ ₪339</div>
                  </div>
                </div>
                <ul className="flex flex-col gap-2 text-sm text-[#f5f0e8]/60">
                  {["תוקף 90 יום", "לא צריך לצאת לשגרירות", "מגישים אונליין מהבית", "ויזה מגיעה למייל כ-PDF"].map(t => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="text-[#c9a84c] font-bold">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning reminder */}
              <div className="bg-amber-900/25 border border-amber-600/35 rounded-2xl p-4 flex items-start gap-3 text-sm">
                <span className="text-2xl flex-shrink-0">⚠️</span>
                <div>
                  <strong className="text-amber-400">הגישו לפחות שבוע לפני הטיסה</strong>
                  <p className="text-[#f5f0e8]/55 mt-1">זמן עיבוד 3-5 ימי עסקים. לאקספרס (24 שעות) פנו אלינו.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

const regions = [
  {
    id: "north",
    name: "צפון וייטנאם",
    emoji: "🏔️",
    badge: "הכי פופולרי",
    description: "הרים מרהיבים, שדות אורז מדורגים, עיר הבירה האנוי והנס הטבעי הלונג ביי",
    highlights: [
      { name: "האנוי",         href: "/destinations/north/hanoi" },
      { name: "הלונג ביי",   href: "/destinations/north/halong" },
      { name: "סאפה",         href: "/destinations/north/sapa" },
      { name: "ניין בינה",    href: "/destinations/north/ninh-binh" },
      { name: "מאי צ'או",     href: "/destinations/north/mai-chau" },
      { name: "הא גיאנג",    href: "/destinations/north/ha-giang" },
      { name: "עמק באק סון", href: "/destinations/north/bac-son" },
      { name: "קאט בה",       href: "/destinations/north/catba" },
    ],
    duration: "7–14 ימים",
    best_time: "אוקטובר–אפריל",
    image: "/images/north-vietnam.jpg",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    id: "center",
    name: "מרכז וייטנאם",
    emoji: "🏯",
    badge: null,
    description: "עיירות עתיקות, ארמונות מלכותיים, חופים עוצרי נשימה ואוכל מהטעים בוייטנאם",
    highlights: [
      { name: "הוי אן",   href: "/destinations/center/hoi-an" },
      { name: "דה נאנג",  href: "/destinations/center/danang" },
      { name: "הואה",      href: "/destinations/center/hue" },
      { name: "מי שון",    href: "/destinations/center/my-son" },
      { name: "קוי נהון",  href: "/destinations/center/quy-nhon" },
    ],
    duration: "4–7 ימים",
    best_time: "פברואר–אוגוסט",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
    accent: "from-amber-500/20 to-transparent",
  },
  {
    id: "south",
    name: "דרום וייטנאם",
    emoji: "🌴",
    badge: null,
    description: "עיר תוססת ועצומה, דלתת מקונג מופלאה ואיים טרופיים עם חופים בתוליים",
    highlights: [
      { name: "הו צ'י מין",   href: "/destinations/south/hcmc" },
      { name: "דלתת מקונג",   href: "/destinations/south/mekong" },
      { name: "פו קווק",       href: "/destinations/south/phu-quoc" },
      { name: "מוי נה",        href: "/destinations/south/mui-ne" },
      { name: "וונג טאו",      href: "/destinations/south/vung-tau" },
      { name: "קון דאו",       href: "/destinations/south/con-dao" },
    ],
    duration: "5–10 ימים",
    best_time: "נובמבר–אפריל",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    accent: "from-sky-500/20 to-transparent",
  },
];

export default function DestinationsPage() {
  return (
    <div className="inner-page min-h-screen pt-[88px]">

      {/* Header */}
      <div className="py-14 md:py-20 text-center px-4">
        <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">חקור את וייטנאם</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#1A2535] mb-4">יעדים בוייטנאם</h1>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          מצפון לדרום, כל אזור מציע חוויה שונה לחלוטין. בחר את היעד שלך וצלל לפרטים
        </p>

        {/* N→C→S route strip */}
        <div className="flex items-center justify-center gap-0 mt-8 max-w-xs mx-auto">
          {["🏔️ צפון", "🏯 מרכז", "🌴 דרום"].map((label, i) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="bg-white border border-slate-200 rounded-full px-3 py-1.5 text-xs font-bold text-[#1A2535] shadow-sm whitespace-nowrap">
                  {label}
                </div>
              </div>
              {i < 2 && (
                <div className="w-8 h-px bg-gradient-to-r from-slate-300 to-slate-200 mx-1 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Region cards */}
      <div className="max-w-5xl mx-auto px-4 pb-16 flex flex-col gap-8">
        {regions.map((region, i) => (
          <div
            key={region.id}
            className="bg-[#F2F1EB] rounded-3xl overflow-hidden shadow-sm border border-[#E5E4DC] hover:shadow-lg transition-all duration-300 group"
          >
            <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>

              {/* Image */}
              <div className="md:w-[42%] flex-shrink-0 relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay on image edge */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent`} />
                {region.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      ⭐ {region.badge}
                    </span>
                  </div>
                )}
                {/* Emoji overlay */}
                <div className="absolute bottom-4 right-4 text-4xl drop-shadow-lg">
                  {region.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-7 md:p-9 flex flex-col justify-between gap-5">
                <div>
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-black text-[#1A2535] mb-3">{region.name}</h2>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-5 text-sm md:text-base">{region.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {region.highlights.map((place) => (
                      <Link
                        key={place.name}
                        href={place.href}
                        className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1.5 rounded-full hover:bg-emerald-100 hover:border-emerald-200 transition-colors font-medium"
                      >
                        {place.name}
                      </Link>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2.5 bg-white border border-[#E5E4DC] rounded-xl p-3.5">
                      <span className="text-xl">⏱️</span>
                      <div>
                        <div className="text-xs text-slate-400">משך מומלץ</div>
                        <div className="text-sm font-bold text-[#1A2535]">{region.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 bg-white border border-[#E5E4DC] rounded-xl p-3.5">
                      <span className="text-xl">🌤️</span>
                      <div>
                        <div className="text-xs text-slate-400">עונה מומלצת</div>
                        <div className="text-sm font-bold text-[#1A2535]">{region.best_time}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/destinations/${region.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#1A2535] hover:bg-orange-500 text-white px-8 py-3.5 rounded-full font-bold transition-colors text-sm group/btn"
                >
                  <span>לכל היעדים ב{region.name}</span>
                  <span className="group-hover/btn:translate-x-[-4px] transition-transform">←</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-[#1A2535] rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">לא בטוחים מאיפה להתחיל?</h2>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            בונה המסלול החכם שלנו ישאל אתכם כמה שאלות ויבנה מסלול שמותאם בדיוק לסגנון ולזמן שלכם
          </p>
          <Link
            href="/itineraries"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-bold transition-colors text-sm"
          >
            קבל מסלול מותאם אישית ←
          </Link>
        </div>
      </div>
    </div>
  );
}

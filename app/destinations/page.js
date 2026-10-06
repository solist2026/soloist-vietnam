import Link from "next/link";

const regions = [
  {
    id: "north",
    name: "צפון וייטנאם",
    emoji: "🏔️",
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
    duration: "7-14 ימים מומלץ",
    best_time: "אוקטובר, אפריל",
    image: "/images/north-vietnam.jpg",
  },
  {
    id: "center",
    name: "מרכז וייטנאם",
    emoji: "🏯",
    description: "עיירות עתיקות, ארמונות מלכותיים, חופים עוצרי נשימה ואוכל מהטעים בוייטנאם",
    highlights: [
      { name: "הוי אן",   href: "/destinations/center/hoi-an" },
      { name: "דה נאנג",  href: "/destinations/center/danang" },
      { name: "הואה",      href: "/destinations/center/hue" },
      { name: "מי שון",    href: "/destinations/center/my-son" },
      { name: "קוי נהון",  href: "/destinations/center/quy-nhon" },
    ],
    duration: "4-7 ימים מומלץ",
    best_time: "פברואר, אוגוסט",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
  },
  {
    id: "south",
    name: "דרום וייטנאם",
    emoji: "🌴",
    description: "עיר תוססת ועצומה, דלתת מקונג מופלאה ואיים טרופיים עם חופים בתוליים",
    highlights: [
      { name: "הו צ'י מין",   href: "/destinations/south/hcmc" },
      { name: "דלתת מקונג",   href: "/destinations/south/mekong" },
      { name: "פו קווק",       href: "/destinations/south/phu-quoc" },
      { name: "מוי נה",        href: "/destinations/south/mui-ne" },
      { name: "וונג טאו",      href: "/destinations/south/vung-tau" },
      { name: "קון דאו",       href: "/destinations/south/con-dao" },
    ],
    duration: "5-10 ימים מומלץ",
    best_time: "נובמבר, אפריל",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
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
      </div>

      {/* Region cards */}
      <div className="max-w-5xl mx-auto px-4 pb-16 flex flex-col gap-8">
        {regions.map((region, i) => (
          <div
            key={region.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>

              {/* Image */}
              <div className="md:w-[42%] flex-shrink-0 relative h-60 md:h-auto min-h-[260px]">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-7 md:p-9 flex flex-col justify-between gap-6">
                <div>
                  {/* Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{region.emoji}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1A2535]">{region.name}</h2>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-5 text-sm md:text-base">{region.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {region.highlights.map((place) => (
                      <Link
                        key={place.name}
                        href={place.href}
                        className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors font-medium"
                      >
                        {place.name}
                      </Link>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                      <div className="text-xs text-slate-400 mb-1">משך מומלץ</div>
                      <div className="text-sm font-bold text-[#1A2535]">{region.duration}</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                      <div className="text-xs text-slate-400 mb-1">עונה מומלצת</div>
                      <div className="text-sm font-bold text-[#1A2535]">{region.best_time}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/destinations/${region.id}`}
                  className="inline-block text-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-colors text-sm"
                >
                  לכל היעדים ב{region.name} ←
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

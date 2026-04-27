import Link from "next/link";

const regions = [
  {
    id: "north",
    name: "צפון וייטנאם",
    emoji: "🏔️",
    color: "from-emerald-800 to-teal-600",
    border: "border-emerald-700",
    description: "הרים מרהיבים, שדות אורז מדורגים, עיר הבירה האנוי והנס הטבעי הלונג ביי",
    highlights: ["האנוי", "הלונג ביי", "סאפה", "ניין בינה", "מאי צ'או", "האה גיאנג"],
    duration: "7-14 ימים מומלץ",
    best_time: "אוקטובר — אפריל",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
  },
  {
    id: "center",
    name: "מרכז וייטנאם",
    emoji: "🏯",
    color: "from-amber-800 to-yellow-600",
    border: "border-amber-700",
    description: "עיירות עתיקות, ארמונות מלכותיים, חופים עוצרי נשימה ואוכל מהטעים בוייטנאם",
    highlights: ["הוי אן", "דה נאנג", "הואה", "מי שון", "הוי אן", "קוי נהון"],
    duration: "4-7 ימים מומלץ",
    best_time: "פברואר — אוגוסט",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
  },
  {
    id: "south",
    name: "דרום וייטנאם",
    emoji: "🌴",
    color: "from-red-800 to-orange-600",
    border: "border-red-700",
    description: "עיר תוססת ועצומה, דלתת מקונג מופלאה ואיים טרופיים עם חופים בתוליים",
    highlights: ["הו צ'י מין", "דלתת מקונג", "פו קווק", "מוי נה", "וונג טאו", "קון דאו"],
    duration: "5-10 ימים מומלץ",
    best_time: "נובמבר — אפריל",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2535] to-[#0f1923]" />
        <div className="relative z-10">
          <p className="text-[#c9a84c] text-sm font-semibold tracking-widest mb-3 uppercase">חקור את וייטנאם</p>
          <h1 className="text-5xl font-bold mb-4">יעדים בוייטנאם</h1>
          <p className="text-[#f5f0e8]/60 text-lg max-w-2xl mx-auto">
            מצפון לדרום — כל אזור מציע חוויה שונה לחלוטין. בחר את היעד שלך וצלל לפרטים
          </p>
        </div>
      </div>

      {/* Regions */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col gap-12">
        {regions.map((region) => (
          <div key={region.id} className={`rounded-3xl overflow-hidden border ${region.border} bg-[#1a2535]`}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto min-h-64">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-l from-[#1a2535] via-transparent to-transparent`} />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{region.emoji}</span>
                    <h2 className="text-3xl font-bold">{region.name}</h2>
                  </div>
                  <p className="text-[#f5f0e8]/70 leading-relaxed mb-6">{region.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {region.highlights.map((place) => (
                      <span key={place} className="text-sm bg-[#c9a84c]/10 text-[#c9a84c] px-3 py-1 rounded-full">
                        {place}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#0f1923] rounded-xl p-4">
                      <div className="text-xs text-[#f5f0e8]/40 mb-1">משך מומלץ</div>
                      <div className="text-sm font-semibold text-[#c9a84c]">{region.duration}</div>
                    </div>
                    <div className="bg-[#0f1923] rounded-xl p-4">
                      <div className="text-xs text-[#f5f0e8]/40 mb-1">עונה מומלצת</div>
                      <div className="text-sm font-semibold text-[#c9a84c]">{region.best_time}</div>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/destinations/${region.id}`}
                  className={`inline-block text-center bg-gradient-to-r ${region.color} text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity`}
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

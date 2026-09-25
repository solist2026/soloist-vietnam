import Link from "next/link";

export const metadata = {
  title: "מפת וייטנאם | סוליסט וייטנאם",
  description: "מפת וייטנאם עם כל הערים, האזורים והיעדים הפופולריים למטייל הישראלי",
};

const regions = [
  {
    name: "צפון וייטנאם",
    color: "bg-emerald-50 border-emerald-200",
    accent: "text-emerald-700 bg-emerald-100",
    icon: "🏔️",
    href: "/destinations/north",
    cities: [
      { name: "האנוי", href: "/destinations/north/hanoi", desc: "עיר הבירה ההיסטורית" },
      { name: "סאפה", href: "/destinations/north/sapa", desc: "שדות אורז מדורגים" },
      { name: "הלונג ביי", href: "/destinations/north/halong", desc: "מפרץ הנסיכות" },
      { name: "הא גיאנג", href: "/destinations/north", desc: "הפינה הנסתרת של הצפון" },
      { name: "ניין בין", href: "/destinations/north", desc: "הלונג ביי של היבשה" },
      { name: "קאט בא", href: "/destinations/north", desc: "האי הגדול בהלונג" },
    ],
  },
  {
    name: "מרכז וייטנאם",
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-700 bg-amber-100",
    icon: "🏮",
    href: "/destinations/center",
    cities: [
      { name: "הואה", href: "/destinations/center/hue", desc: "עיר הקיסרים" },
      { name: "דה נאנג", href: "/destinations/center/danang", desc: "עיר החופים" },
      { name: "הוי אן", href: "/destinations/center/hoi-an", desc: "עיירת הפנסים העתיקה" },
      { name: "חוי אן", href: "/destinations/center", desc: "חוף הכסף" },
      { name: "קוי נון", href: "/destinations/center", desc: "חוף הנסתר" },
    ],
  },
  {
    name: "דרום וייטנאם",
    color: "bg-sky-50 border-sky-200",
    accent: "text-sky-700 bg-sky-100",
    icon: "🌊",
    href: "/destinations/south",
    cities: [
      { name: "הו צ'י מין", href: "/destinations/south/hcmc", desc: "לב המדינה הפועם" },
      { name: "פו קווק", href: "/destinations/south/phu-quoc", desc: "האי הטרופי" },
      { name: "מוי נה", href: "/destinations/south/mui-ne", desc: "חולות וגלים" },
      { name: "דלתת מקונג", href: "/destinations/south", desc: "שוקי הצף וטבע" },
      { name: "ווונג טאו", href: "/destinations/south", desc: "חוף של HCMC" },
    ],
  },
];

export default function MapPage() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-[88px]">

      {/* Header */}
      <div className="bg-[#1A2535] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-5xl mb-4">🗺️</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">מפת וייטנאם</h1>
          <p className="text-white/70 text-lg leading-relaxed">
            וייטנאם היא מדינה ארוכה ומגוונת, מצפון לדרום. כאן תמצאו את כל הערים, האזורים והיעדים הפופולריים.
          </p>
        </div>
      </div>

      {/* Visual map placeholder */}
      <div className="bg-slate-50 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: "320px" }}>
            <img
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80"
              alt="וייטנאם מלמעלה"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1A2535]/50 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl mb-3">🗺️</div>
                <h2 className="text-2xl font-black mb-2">מפה אינטראקטיבית</h2>
                <p className="text-white/70 text-sm">בקרוב — מפה עם פינים לכל הערים</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regions grid */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-black text-center text-slate-900 mb-10">ערים לפי אזור</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region) => (
            <div key={region.name} className={`rounded-2xl border-2 ${region.color} overflow-hidden`}>
              {/* Region header */}
              <Link href={region.href} className="block p-5 hover:opacity-80 transition-opacity">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">{region.icon}</span>
                  <h3 className="font-black text-xl text-slate-900">{region.name}</h3>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${region.accent}`}>
                  לדף האזור
                </span>
              </Link>

              {/* Cities list */}
              <div className="bg-white/70 divide-y divide-slate-100">
                {region.cities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center justify-between px-5 py-3 hover:bg-white transition-colors group"
                  >
                    <div>
                      <div className="font-bold text-slate-800 text-sm group-hover:text-orange-500 transition-colors">
                        {city.name}
                      </div>
                      <div className="text-xs text-slate-500">{city.desc}</div>
                    </div>
                    <svg className="w-4 h-4 text-slate-300 group-hover:text-orange-400 transition-colors rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick facts */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-8">
          <h3 className="font-black text-xl text-slate-900 mb-5 text-center">עובדות על וייטנאם</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "63", label: "מחוזות" },
              { value: "3,260 ק\"מ", label: "אורך החוף" },
              { value: "97M", label: "תושבים" },
              { value: "~2 שעות", label: "הפרש שעות מישראל (קדימה)" },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="font-black text-2xl text-orange-500 mb-1">{f.value}</div>
                <div className="text-xs text-slate-500">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

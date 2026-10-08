import Link from 'next/link';

const destinations = [
  {
    id: 'hcmc',
    name: "הו צ'י מין",
    subtitle: 'העיר שלא ישנה',
    emoji: '🏙️',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
    tags: ['עיר', 'היסטוריה', 'אוכל', 'חיי לילה'],
    days: '2–3 ימים',
    chabad: true,
  },
  {
    id: 'mekong',
    name: 'דלתת מקונג',
    subtitle: 'גן עדן ירוק על הנהר',
    emoji: '🛶',
    image: 'https://images.unsplash.com/photo-1543411789-1a67a2ac05c6?w=600&q=80',
    tags: ['נהרות', 'כפרים', 'אותנטי', 'טבע'],
    days: '1–2 ימים',
    chabad: false,
  },
  {
    id: 'phu-quoc',
    name: 'פו קווק',
    subtitle: 'האי הטרופי המושלם',
    emoji: '🏝️',
    image: 'https://images.unsplash.com/photo-1693294603830-f44c9511d643?w=600&q=80',
    tags: ['אי', 'חוף', 'שקיעות', 'שנורקלינג'],
    days: '3–5 ימים',
    chabad: false,
  },
  {
    id: 'mui-ne',
    name: 'מוי נה',
    subtitle: 'דיונות, גלים ושקט',
    emoji: '🏄',
    image: 'https://images.unsplash.com/photo-1714271511582-3483dcf0eb71?w=600&q=80',
    tags: ['חוף', 'דיונות', 'גלישת רוח', 'שקט'],
    days: '2–3 ימים',
    chabad: false,
  },
  {
    id: 'vung-tau',
    name: 'וונג טאו',
    subtitle: 'חוף הים של סייגון',
    emoji: '⛱️',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    tags: ['חוף', 'מסלון', 'פירות ים', 'סיור יום'],
    days: '1–2 ימים',
    chabad: false,
  },
  {
    id: 'con-dao',
    name: 'קון דאו',
    subtitle: 'ארכיפלג בתולי ומרוחק',
    emoji: '🐢',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
    tags: ['אי', 'צבי ים', 'אקולוגיה', 'יוקרה'],
    days: '2–4 ימים',
    chabad: false,
  },
];

export default function SouthVietnamPage() {
  return (
    <div className="min-h-screen pt-[88px]" style={{ color: "#1e293b", backgroundColor: "#FDFCF8" }}>

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px]">
        <img
          src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80"
          alt="דרום וייטנאם"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 p-6 md:p-10 max-w-7xl mx-auto">
          <Link href="/destinations" className="text-white/60 hover:text-white/90 text-sm font-medium mb-3 inline-block transition-colors">
            ← כל האזורים
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">🌴 דרום וייטנאם</h1>
          <p className="text-white/80 text-base md:text-lg">עיר תוססת, דלתת מקונג ואיים טרופיים עם חופים בתוליים</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-white/70">
            <span>🗓️ עונה מומלצת: נובמבר–אפריל</span>
            <span>⏱️ זמן מומלץ: 5–8 ימים</span>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: "url('/images/page-bg.png')", backgroundSize: "cover", backgroundPosition: "top center", backgroundRepeat: "no-repeat", backgroundColor: "#FDFCF8" }}>

      {/* Map */}
      <div className="max-w-5xl mx-auto px-4 pb-8">
        <div className="bg-[#F2F1EB] rounded-3xl p-4 md:p-6 border border-[#E5E4DC] shadow-sm">
          <h2 className="text-base font-bold text-[#1A2535] mb-4 text-center">מפת היעדים</h2>
          <img
            src="/images/map-south.jpg"
            alt="מפת יעדים דרום וייטנאם"
            className="w-full h-auto rounded-2xl"
            style={{ maxHeight: '600px', objectFit: 'contain' }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">

          {/* Destination cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/south/${dest.id}`}
                className="group bg-[#F2F1EB] rounded-2xl overflow-hidden border border-[#E5E4DC] shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {dest.chabad && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-blue-600/90 text-white text-xs px-2 py-0.5 rounded-full">✡️</span>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3">
                    <span className="text-2xl">{dest.emoji}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-black text-[#1A2535] group-hover:text-orange-500 transition-colors">{dest.name}</h3>
                  <p className="text-slate-500 text-xs mt-0.5">{dest.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {dest.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                    <span className="text-xs text-slate-400">⏱️ {dest.days}</span>
                    <span className="text-xs text-orange-500 font-semibold group-hover:underline">פרטים מלאים ←</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-10 flex justify-between text-sm">
        <Link href="/destinations/center" className="text-orange-500 hover:underline font-medium">← מרכז וייטנאם</Link>
        <Link href="/destinations" className="text-orange-500 hover:underline font-medium">כל האזורים ←</Link>
      </div>
      </div>
    </div>
  );
}

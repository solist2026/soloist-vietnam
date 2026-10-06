import Link from 'next/link';
import VietnamMap from '../../components/VietnamMap';

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
    <div className="inner-page min-h-screen pt-[88px]">

      {/* Header */}
      <div className="py-12 md:py-16 text-center px-4">
        <Link href="/destinations" className="text-orange-500 hover:text-orange-600 text-sm font-medium mb-4 inline-block">
          ← כל האזורים
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-[#1A2535] mb-3">🌴 דרום וייטנאם</h1>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          עיר תוססת, דלתת מקונג ואיים טרופיים עם חופים בתוליים
        </p>
        <div className="flex justify-center flex-wrap gap-4 mt-5 text-sm text-slate-400">
          <span>🗓️ עונה מומלצת: נובמבר–אפריל</span>
          <span>⏱️ זמן מומלץ: 5–8 ימים</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Map */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-base font-bold text-[#1A2535] mb-4 text-center">מפת היעדים</h2>
            <VietnamMap activeRegion="south" baseHref="/destinations/south" />
            <p className="text-xs text-slate-400 text-center mt-4">לחצו על שם יעד לעמוד המלא</p>
          </div>

          {/* Destination cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/south/${dest.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
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
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-10 flex justify-between text-sm">
        <Link href="/destinations/center" className="text-orange-500 hover:underline font-medium">← מרכז וייטנאם</Link>
        <Link href="/destinations" className="text-orange-500 hover:underline font-medium">כל האזורים ←</Link>
      </div>
    </div>
  );
}

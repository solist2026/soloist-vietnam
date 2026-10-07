import Link from 'next/link';

const destinations = [
  {
    id: 'hoi-an',
    name: 'הוי אן',
    subtitle: 'העיירה העתיקה הקסומה',
    emoji: '🏮',
    image: 'https://images.unsplash.com/photo-1664650440553-ab53804814b3?w=600&q=80',
    tags: ['עיר עתיקה', 'פנסים', 'אוכל', 'חיטוט'],
    days: '2–3 ימים',
    chabad: true,
  },
  {
    id: 'danang',
    name: 'דה נאנג',
    subtitle: 'עיר החופים והגשרים',
    emoji: '🌉',
    image: 'https://plus.unsplash.com/premium_photo-1690960644375-6f2399a08ebc?w=600&q=80',
    tags: ['עיר', 'חוף', 'גשרים', 'Ba Na Hills'],
    days: '1–2 ימים',
    chabad: false,
  },
  {
    id: 'hue',
    name: 'הואה',
    subtitle: 'עיר הקיסרים',
    emoji: '👑',
    image: 'https://images.unsplash.com/photo-1664333039578-28ad613ee536?w=600&q=80',
    tags: ['קיסרים', 'היסטוריה', 'UNESCO', 'אוכל'],
    days: '1–2 ימים',
    chabad: false,
  },
  {
    id: 'my-son',
    name: 'מי שון',
    subtitle: 'מקדשי ה-Cham העתיקים',
    emoji: '🏛️',
    image: 'https://images.unsplash.com/photo-1553851919-596510268b99?w=600&q=80',
    tags: ['UNESCO', 'מקדשים', 'Cham', 'היסטוריה'],
    days: 'יום אחד (מהוי אן)',
    chabad: false,
  },
  {
    id: 'quy-nhon',
    name: 'קוי נהון',
    subtitle: 'גולת הכותרת הנסתרת של המרכז',
    emoji: '🏖️',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
    tags: ['חוף', 'אותנטי', 'פירות ים', 'Cham'],
    days: '1–2 ימים',
    chabad: false,
  },
];

export default function CenterVietnamPage() {
  return (
    <div className="inner-page min-h-screen pt-[88px]">

      {/* Header */}
      <div className="py-12 md:py-16 text-center px-4">
        <Link href="/destinations" className="text-orange-500 hover:text-orange-600 text-sm font-medium mb-4 inline-block">
          ← כל האזורים
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-[#1A2535] mb-3">🏯 מרכז וייטנאם</h1>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          עיירות עתיקות, ארמונות מלכותיים וחופים עוצרי נשימה
        </p>
        <div className="flex justify-center flex-wrap gap-4 mt-5 text-sm text-slate-400">
          <span>🗓️ עונה מומלצת: פברואר–אוגוסט</span>
          <span>⏱️ זמן מומלץ: 4–6 ימים</span>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-5xl mx-auto px-4 pb-8">
        <div className="bg-[#F2F1EB] rounded-3xl p-4 md:p-6 border border-[#E5E4DC] shadow-sm">
          <h2 className="text-base font-bold text-[#1A2535] mb-4 text-center">מפת היעדים</h2>
          <img
            src="/images/map-center.jpg"
            alt="מפת יעדים מרכז וייטנאם"
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
                href={`/destinations/center/${dest.id}`}
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
        <Link href="/destinations/north" className="text-orange-500 hover:underline font-medium">← צפון וייטנאם</Link>
        <Link href="/destinations/south" className="text-orange-500 hover:underline font-medium">דרום וייטנאם ←</Link>
      </div>
    </div>
  );
}

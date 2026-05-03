import Link from 'next/link';
import VietnamMap from '../../components/VietnamMap';

const destinations = [
  {
    id: 'hanoi',
    name: 'האנוי',
    subtitle: 'עיר הבירה המסתורית',
    emoji: '🏛️',
    image: 'https://images.unsplash.com/photo-1533497394934-b33cd9695ba9?w=600&q=80',
    tags: ['עיר', 'תרבות', 'אוכל'],
    days: '2-3 ימים',
    chabad: true,
  },
  {
    id: 'ha-giang',
    name: 'לופ הא גיאנג',
    subtitle: 'החוויה האולטימטיבית בצפון',
    emoji: '🏍️',
    image: 'https://images.unsplash.com/photo-1663571908808-87fc73defa2a?w=600&q=80',
    tags: ['הרים', 'אופנועים', 'הרפתקה'],
    days: '3-5 ימים',
    chabad: false,
  },
  {
    id: 'halong',
    name: 'הלונג ביי',
    subtitle: 'פלא הטבע של וייטנאם',
    emoji: '⛵',
    image: 'https://images.unsplash.com/photo-1643029891412-92f9a81a8c16?w=600&q=80',
    tags: ['טבע', 'שייט', 'אי'],
    days: '1-2 לילות שייט',
    chabad: false,
  },
  {
    id: 'catba',
    name: 'קאט בה',
    subtitle: 'האי הגדול של הלונג ביי',
    emoji: '🏝️',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
    tags: ['אי', 'טבע', 'שקט'],
    days: '1-2 ימים',
    chabad: false,
  },
  {
    id: 'sapa',
    name: 'סאפה',
    subtitle: 'הרים, ערפל ושדות אורז',
    emoji: '🌾',
    image: '/sapa-hero.jpg',
    tags: ['הרים', 'שבטים', 'טרקים'],
    days: '2-3 ימים',
    chabad: true,
  },
  {
    id: 'ninh-binh',
    name: 'ניין בינה',
    subtitle: 'הלונג ביי של היבשה',
    emoji: '🗻',
    image: 'https://plus.unsplash.com/premium_photo-1692731798248-58f1ffe9da0a?w=600&q=80',
    tags: ['טבע', 'שייט', 'נופים'],
    days: '1-2 ימים',
    chabad: false,
  },
  {
    id: 'mai-chau',
    name: "מאי צ'או",
    subtitle: 'עמק האורז של שבטי ה-Thai הלבן',
    emoji: '🌿',
    image: 'https://plus.unsplash.com/premium_photo-1661917179706-33e305a4ee45?w=600&q=80',
    tags: ['עמק', 'שבטים', 'הומסטיי', 'אופניים'],
    days: '1-2 ימים',
    chabad: false,
  },
];

export default function NorthVietnamPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-16 bg-gradient-to-b from-emerald-900/50 to-[#0f1923] text-center">
        <Link href="/destinations" className="text-[#c9a84c]/70 hover:text-[#c9a84c] text-sm mb-4 inline-block">
          ← כל האזורים
        </Link>
        <h1 className="text-5xl font-bold mb-3">🏔️ צפון וייטנאם</h1>
        <p className="text-[#f5f0e8]/60 text-lg max-w-2xl mx-auto">
          הרים מרהיבים, שדות אורז מדורגים, עיר הבירה ופלאי הטבע
        </p>
        <div className="flex justify-center gap-6 mt-6 text-sm text-[#f5f0e8]/50">
          <span>🗓️ עונה מומלצת: אוקטובר–אפריל</span>
          <span>⏱️ זמן מומלץ: 7–14 יום</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1 bg-[#1a2535] rounded-3xl p-6 border border-emerald-700/30">
            <h2 className="text-lg font-bold text-[#c9a84c] mb-4 text-center">מפת היעדים</h2>
            <VietnamMap activeRegion="north" baseHref="/destinations/north" />
            <p className="text-xs text-[#f5f0e8]/40 text-center mt-4">לחצו על שם יעד לעמוד המלא</p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/north/${dest.id}`}
                className="group bg-[#1a2535] rounded-2xl overflow-hidden border border-[#c9a84c]/10 hover:border-[#c9a84c]/40 transition-all"
              >
                <div className="relative h-44">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2535] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {dest.chabad && <span className="bg-blue-600/90 text-white text-xs px-2 py-0.5 rounded-full">✡️</span>}
                  </div>
                  <div className="absolute bottom-3 right-3"><span className="text-3xl">{dest.emoji}</span></div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold group-hover:text-[#c9a84c] transition-colors">{dest.name}</h3>
                  <p className="text-[#f5f0e8]/50 text-sm mt-0.5">{dest.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {dest.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[#c9a84c]/10 text-[#c9a84c] px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#c9a84c]/10">
                    <span className="text-xs text-[#f5f0e8]/40">⏱️ {dest.days}</span>
                    <span className="text-xs text-[#c9a84c] font-semibold group-hover:underline">פרטים מלאים ←</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12 flex justify-between text-sm">
        <Link href="/destinations" className="text-[#c9a84c] hover:underline">← כל האזורים</Link>
        <Link href="/destinations/center" className="text-[#c9a84c] hover:underline">מרכז וייטנאם ←</Link>
      </div>
    </div>
  );
}

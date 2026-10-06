import Link from 'next/link';
import VietnamMap from '../../components/VietnamMap';

const destinations = [
  {
    id: 'hanoi',
    name: 'האנוי',
    subtitle: 'עיר הבירה המסתורית',
    emoji: '🏛️',
    image: '/images/hanoi.jpg',
    tags: ['עיר', 'תרבות', 'אוכל'],
    days: '2-3 ימים',
    chabad: true,
  },
  {
    id: 'ha-giang',
    name: "הא ג'יאנג",
    subtitle: 'החוויה האולטימטיבית בצפון',
    emoji: '🏍️',
    image: '/images/ha-giang.jpg',
    tags: ['הרים', 'אופנועים', 'הרפתקה'],
    days: '3-5 ימים',
    chabad: false,
  },
  {
    id: 'halong',
    name: 'הלונג ביי',
    subtitle: 'פלא הטבע של וייטנאם',
    emoji: '⛵',
    image: '/images/halong.jpg',
    tags: ['טבע', 'שייט', 'אי'],
    days: '1-2 לילות שייט',
    chabad: false,
  },
  {
    id: 'catba',
    name: 'קאט בה',
    subtitle: 'האי הגדול של הלונג ביי',
    emoji: '🏝️',
    image: '/images/catba.jpg',
    tags: ['אי', 'טבע', 'שקט'],
    days: '1-2 ימים',
    chabad: false,
  },
  {
    id: 'sapa',
    name: 'סאפה',
    subtitle: 'הרים, ערפל ושדות אורז',
    emoji: '🌾',
    image: '/images/north-vietnam.jpg',
    tags: ['הרים', 'שבטים', 'טרקים'],
    days: '2-3 ימים',
    chabad: true,
  },
  {
    id: 'ninh-binh',
    name: 'נין בין',
    subtitle: 'הלונג ביי של היבשה',
    emoji: '🗻',
    image: '/images/ninh-binh.jpg',
    tags: ['טבע', 'שייט', 'נופים'],
    days: '1-2 ימים',
    chabad: false,
  },
  {
    id: 'mai-chau',
    name: "מאי צ'או",
    subtitle: 'עמק האורז של שבטי ה-Thai הלבן',
    emoji: '🌿',
    image: '/images/mai-chau.jpg',
    tags: ['עמק', 'שבטים', 'הומסטיי', 'אופניים'],
    days: '1-2 ימים',
    chabad: false,
  },
  {
    id: 'bac-son',
    name: 'עמק באק סון',
    subtitle: 'ים האורז הירוק של צפון וייטנאם',
    emoji: '🌾',
    image: '/images/bac-son.jpg',
    tags: ['עמק', 'שדות אורז', 'טבע', 'צילום'],
    days: '1-2 ימים',
    chabad: false,
  },
];

export default function NorthVietnamPage() {
  return (
    <div className="inner-page min-h-screen pt-[88px]">

      {/* Header */}
      <div className="py-12 md:py-16 text-center px-4">
        <Link href="/destinations" className="text-orange-500 hover:text-orange-600 text-sm font-medium mb-4 inline-block">
          ← כל האזורים
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-[#1A2535] mb-3">🏔️ צפון וייטנאם</h1>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          הרים מרהיבים, שדות אורז מדורגים, עיר הבירה ופלאי הטבע
        </p>
        <div className="flex justify-center flex-wrap gap-4 mt-5 text-sm text-slate-400">
          <span>🗓️ עונה מומלצת: אוקטובר–אפריל</span>
          <span>⏱️ זמן מומלץ: 7–14 יום</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Map */}
          <div className="lg:col-span-1 bg-[#F2F1EB] rounded-3xl p-6 border border-[#E5E4DC] shadow-sm">
            <h2 className="text-base font-bold text-[#1A2535] mb-4 text-center">מפת היעדים</h2>
            <VietnamMap activeRegion="north" baseHref="/destinations/north" />
            <p className="text-xs text-slate-400 text-center mt-4">לחצו על שם יעד לעמוד המלא</p>
          </div>

          {/* Destination cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/north/${dest.id}`}
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
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-10 flex justify-between text-sm">
        <Link href="/destinations" className="text-orange-500 hover:underline font-medium">← כל האזורים</Link>
        <Link href="/destinations/center" className="text-orange-500 hover:underline font-medium">מרכז וייטנאם ←</Link>
      </div>
    </div>
  );
}

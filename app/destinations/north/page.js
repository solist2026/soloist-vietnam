import Link from 'next/link';
import VietnamMap from '../../components/VietnamMap';

const destinations = [
  {
    id: 'hanoi',
    name: 'האנוי',
    desc: [
      'עיר הבירה התוססת של וייטנאם, המשלבת היסטוריה, תרבות ואוכל רחוב מעולה.',
      'העיר העתיקה, אגם הואן קיאם, שווקים, בתי קפה וחיי לילה.',
      'נקודת פתיחה מצוינת לטיול בצפון וייטנאם.',
    ],
    emoji: '🏛️',
    image: '/images/hanoi.jpg',
    days: '2-3 ימים',
    chabad: true,
  },
  {
    id: 'ha-giang',
    name: "הא ג'יאנג",
    desc: [
      'אחד האזורים המרשימים והמיוחדים ביותר בצפון וייטנאם.',
      'כבישי הרים מפותלים, פסגות דרמטיות, עמקים וכפרים מקומיים.',
      'מפורסם במיוחד בזכות Ha Giang Loop – מסלול אייקוני של מספר ימים.',
    ],
    emoji: '🏍️',
    image: '/images/ha-giang.jpg',
    days: '3-5 ימים',
    chabad: false,
  },
  {
    id: 'halong',
    name: 'הלונג ביי',
    desc: [
      'אחד מסמלי הטבע המפורסמים ביותר של וייטנאם, עם מאות איים וצוקי גיר מרשימים.',
      'שייט בין האיים, מערות, קיאקים ונקודות תצפית מרהיבות.',
      'מומלץ במיוחד לשלב שייט של לילה או יומיים.',
    ],
    emoji: '⛵',
    image: '/images/halong.jpg',
    days: '1-2 לילות שייט',
    chabad: false,
  },
  {
    id: 'catba',
    name: 'קאט בה',
    desc: [
      'אי ירוק ויפהפה המציע שילוב של טבע, חופים ואווירה רגועה.',
      'פארק לאומי, מסלולי הליכה, מפרצים, מערות ושייט בקיאקים.',
      'בחירה מצוינת למי שרוצה לחוות את אזור הלונג ביי בצורה רגועה יותר.',
    ],
    emoji: '🏝️',
    image: '/images/catba.jpg',
    days: '1-2 ימים',
    chabad: false,
  },
  {
    id: 'sapa',
    name: 'סאפה',
    desc: [
      'עיירת הרים מוקפת בנופי טרסות אורז, הרים וכפרים מסורתיים.',
      'מקום מצוין לטרקים, תצפיות והיכרות עם שבטי ההרים המקומיים.',
      'מכאן ניתן להגיע גם להר פנסיפן – הפסגה הגבוהה בווייטנאם.',
    ],
    emoji: '🌾',
    image: '/images/north-vietnam.jpg',
    days: '2-3 ימים',
    chabad: true,
  },
  {
    id: 'ninh-binh',
    name: 'נין בין',
    desc: [
      'אזור המכונה לעיתים "הלונג ביי היבשתית", בזכות צוקי הגיר והנהרות החוצים את הנוף.',
      'שייט בסירות בין מערות, שדות אורז והרים ירוקים.',
      'כדאי לבקר בטאם קוק, טראנג אן ובתצפית Hang Mua.',
    ],
    emoji: '🗻',
    image: '/images/ninh-binh.jpg',
    days: '1-2 ימים',
    chabad: false,
  },
  {
    id: 'mai-chau',
    name: "מאי צ'או",
    desc: [
      'עמק ירוק ושליו המוקף בהרים ובשדות אורז.',
      'מקום מצוין לרכיבה על אופניים, טיולים קלים והיכרות עם החיים בכפרים המקומיים.',
      'מתאים למי שמחפש חוויה רגועה ואותנטית הרחק מהעומס.',
    ],
    emoji: '🌿',
    image: '/images/mai-chau.jpg',
    days: '1-2 ימים',
    chabad: false,
  },
  {
    id: 'bac-son',
    name: 'עמק באק סון',
    desc: [
      'אזור כפרי ירוק ופחות מוכר, המציע נופים של הרים, עמקים ושדות אורז.',
      'מתאים לטיולים בטבע, רכיבה על אופניים ומפגש עם החיים המקומיים.',
      'בחירה נהדרת למטיילים שרוצים לגלות צד שקט ופחות מתויר של צפון וייטנאם.',
    ],
    emoji: '🌾',
    image: '/images/bac-son.jpg',
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
                  <ul className="mt-2 space-y-0.5">
                    {dest.desc.map((line, i) => (
                      <li key={i} className="text-slate-500 text-xs leading-relaxed">{line}</li>
                    ))}
                  </ul>
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

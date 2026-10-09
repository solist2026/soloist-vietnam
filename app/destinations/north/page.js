import Link from 'next/link';

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
    popular: true,
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
    popular: true,
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
    popular: true,
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
  {
    id: 'cao-bang',
    name: 'קאו בנג',
    desc: [
      'אזור הררי בצפון־מזרח וייטנאם, עם כבישים מפותלים, נהרות וכפרים בין מצוקי אבן גיר.',
      "לופ קאו בנג משלב נסיעה בנופים האלה עם ביקור במפלי באן ג'וק ובמערת נגוום נגאו.",
      'מתאים למי שמחפש טיול של כמה ימים בדרכים, עם עצירות בטבע ובכפרים לאורך המסלול.',
    ],
    emoji: '🏍️',
    image: '/images/cao-bang.jpg',
    days: '3–4 ימים',
    chabad: false,
  },
];

export default function NorthVietnamPage() {
  return (
    <div className="min-h-screen pt-[88px]" style={{ color: "#1e293b", backgroundColor: "#FDFCF8" }}>

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px]">
        <img
          src="/images/north-vietnam.jpg"
          alt="צפון וייטנאם"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 p-6 md:p-10 max-w-7xl mx-auto">
          <Link href="/destinations" className="text-white/60 hover:text-white/90 text-sm font-medium mb-3 inline-block transition-colors">
            ← כל האזורים
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">🏔️ צפון וייטנאם</h1>
          <p className="text-white/80 text-base md:text-lg">הרים מרהיבים, שדות אורז מדורגים, עיר הבירה ופלאי הטבע</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-white/70">
            <span>🗓️ עונה מומלצת: אוקטובר–אפריל</span>
            <span>⏱️ זמן מומלץ: 7–14 יום</span>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: "url('/images/page-bg.png')", backgroundSize: "cover", backgroundPosition: "top center", backgroundRepeat: "no-repeat", backgroundColor: "#FDFCF8" }}>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-4 pt-10 pb-2">
        <p className="text-slate-700 text-base md:text-lg leading-relaxed">
          צפון וייטנאם עשיר בנופים ובתרבות מקומית. האנוי מציעה חיי עיר ושווקים, סאפה והא ג'יאנג נופי הרים וטרסות אורז, נין בין שיט בין מצוקי גיר, מאי צ'או ועמק באק סון כפרים ושדות, והלונג ביי וקאט בה מפרצים ואיים.
        </p>
      </div>

      {/* Map */}
      <div className="max-w-5xl mx-auto px-4 pb-8">
        <div className="bg-[#F2F1EB] rounded-3xl p-4 md:p-6 border border-[#E5E4DC] shadow-sm">
          <h2 className="text-base font-bold text-[#1A2535] mb-4 text-center">מפת היעדים</h2>
          <img
            src="/images/map-north.jpg"
            alt="מפת יעדים צפון וייטנאם"
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
                  {dest.popular && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">⭐ יעד פופולרי</span>
                    </div>
                  )}
                  {dest.chabad && (
                    <div className="absolute top-3 left-3">
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

      <div className="max-w-7xl mx-auto px-4 pb-10 flex justify-between text-sm">
        <Link href="/destinations" className="text-orange-500 hover:underline font-medium">← כל האזורים</Link>
        <Link href="/destinations/center" className="text-orange-500 hover:underline font-medium">מרכז וייטנאם ←</Link>
      </div>
      </div>
    </div>
  );
}

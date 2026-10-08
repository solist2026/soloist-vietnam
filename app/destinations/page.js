import Link from "next/link";

const regions = [
  {
    id: "north",
    name: "צפון וייטנאם",
    emoji: "🏔️",
    badge: "הכי פופולרי",
    description: "נופי הרים, טרסות אורז וכפרים, לצד עיר הבירה האנוי והמפרצים של הלונג ביי וקאט בה. הצפון מתאים במיוחד לטיולי טבע, הליכות והיכרות עם החיים המקומיים.",
    cta: "לכל היעדים בצפון",
    highlights: [
      { name: "האנוי",         href: "/destinations/north/hanoi" },
      { name: "הלונג ביי",   href: "/destinations/north/halong" },
      { name: "סאפה",         href: "/destinations/north/sapa" },
      { name: "נין בין",    href: "/destinations/north/ninh-binh" },
      { name: "מאי צ'או",     href: "/destinations/north/mai-chau" },
      { name: "הא ג'יאנג",    href: "/destinations/north/ha-giang" },
      { name: "עמק באק סון", href: "/destinations/north/bac-son" },
      { name: "קאט בה",       href: "/destinations/north/catba" },
    ],
    duration: "7–14 ימים",
    best_time: "אוקטובר–אפריל",
    image: "/images/north-vietnam.jpg",
  },
  {
    id: "center",
    name: "מרכז וייטנאם",
    emoji: "🏯",
    badge: null,
    description: "העיר העתיקה של הוי אן, אתרי המורשת של הואה והחופים של דה נאנג וקוי נהון. המרכז מציע שילוב של תרבות, היסטוריה וחופשת חוף, עם אפשרויות רבות לטיולי יום.",
    cta: "לכל היעדים במרכז",
    highlights: [
      { name: "הוי אן",   href: "/destinations/center/hoi-an" },
      { name: "דה נאנג",  href: "/destinations/center/danang" },
      { name: "הואה",      href: "/destinations/center/hue" },
      { name: "מי שון",    href: "/destinations/center/my-son" },
      { name: "קוי נהון",  href: "/destinations/center/quy-nhon" },
    ],
    duration: "4–7 ימים",
    best_time: "פברואר–אוגוסט",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
  },
  {
    id: "south",
    name: "דרום וייטנאם",
    emoji: "🌴",
    badge: null,
    description: "הו צ'י מין היא נקודת מוצא לטיול בדרום, שממשיך אל הנהרות והיישובים של דלתת המקונג, החופים של מוי נה והאיים פו קווק וקון דאו. אפשר לשלב בין טיול עירוני, ביקור במקונג וכמה ימים ליד הים.",
    cta: "לכל היעדים בדרום",
    highlights: [
      { name: "הו צ'י מין",   href: "/destinations/south/hcmc" },
      { name: "דלתת מקונג",   href: "/destinations/south/mekong" },
      { name: "פו קווק",       href: "/destinations/south/phu-quoc" },
      { name: "מוי נה",        href: "/destinations/south/mui-ne" },
      { name: "וונג טאו",      href: "/destinations/south/vung-tau" },
      { name: "קון דאו",       href: "/destinations/south/con-dao" },
    ],
    duration: "5–10 ימים",
    best_time: "נובמבר–אפריל",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen" style={{ color: "#1e293b", background: "#FDFCF8" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "68vh" }}>

        {/* Desktop hero image */}
        <div className="hidden md:block absolute inset-0">
          <img
            src="/images/destinations-hero-desktop.png"
            alt="יעדים בוייטנאם"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/72 via-black/38 to-black/8" />
        </div>

        {/* Mobile hero image */}
        <div className="md:hidden absolute inset-0">
          <img
            src="/images/destinations-hero-mobile.png"
            alt="יעדים בוייטנאם"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10" />
        </div>

        {/* Text content — below navbar */}
        <div
          className="relative z-10 flex items-end md:items-center"
          style={{ minHeight: "68vh", paddingTop: "88px" }}
        >
          <div className="max-w-7xl mx-auto w-full px-5 md:px-10 py-10 md:py-16">

            {/* Desktop: right-aligned block (justify-start = visual right in RTL) */}
            <div className="hidden md:flex justify-start">
              <div className="max-w-[500px] text-right">
                <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">
                  חקור את וייטנאם
                </p>
                <h1 className="text-5xl xl:text-6xl font-black text-white leading-tight mb-4">
                  יעדים בווייטנאם
                </h1>
                <p className="text-white/85 text-lg leading-relaxed mb-8">
                  מההרים בצפון ועד האיים בדרום, וייטנאם מציעה הרבה אפשרויות לטיול. כאן תמצאו את היעדים בכל אזור, מה כדאי לראות ומידע שיעזור לכם לתכנן את הדרך.
                </p>
                <div className="flex items-center justify-start gap-0">
                  {["🏔️ צפון", "🏯 מרכז", "🌴 דרום"].map((label, i) => (
                    <div key={label} className="flex items-center">
                      <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 text-sm font-bold text-white whitespace-nowrap">
                        {label}
                      </div>
                      {i < 2 && <div className="w-6 h-px bg-white/40 mx-1.5 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: text right, pills centered */}
            <div className="md:hidden text-right">
              <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-2">
                חקור את וייטנאם
              </p>
              <h1 className="text-3xl font-black text-white leading-tight mb-3">
                יעדים בווייטנאם
              </h1>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                מההרים בצפון ועד האיים בדרום, וייטנאם מציעה הרבה אפשרויות לטיול. כאן תמצאו את היעדים בכל אזור, מה כדאי לראות ומידע שיעזור לכם לתכנן את הדרך.
              </p>
              <div className="flex items-center justify-center gap-0">
                {["🏔️ צפון", "🏯 מרכז", "🌴 דרום"].map((label, i) => (
                  <div key={label} className="flex items-center">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-full px-3 py-1.5 text-xs font-bold text-white whitespace-nowrap">
                      {label}
                    </div>
                    {i < 2 && <div className="w-4 h-px bg-white/40 mx-1 flex-shrink-0" />}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTENT + BACKGROUND ── */}
      <div
        style={{
          backgroundImage: "url('/images/destinations-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FDFCF8",
        }}
      >

        {/* Region cards */}
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 flex flex-col gap-10">
          {regions.map((region, i) => (
            <div
              key={region.id}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} bg-white/92 rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group`}
            >

              {/* Image — always first in DOM → top on mobile, alternates on desktop */}
              <div
                className="md:w-[44%] flex-shrink-0 relative overflow-hidden"
                style={{ height: "240px", minHeight: "240px" }}
              >
                <style>{`@media(min-width:768px){.dest-img-${region.id}{height:100%;min-height:360px;}}`}</style>
                <img
                  src={region.image}
                  alt={region.name}
                  className={`dest-img-${region.id} w-full h-full object-cover group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {region.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      ⭐ {region.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 text-4xl drop-shadow-lg">
                  {region.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-7 md:p-10 flex flex-col justify-between gap-5">
                <div>
                  <Link href={`/destinations/${region.id}`} className="group">
                    <h2 className="text-2xl md:text-3xl font-black text-[#1A2535] mb-3 group-hover:text-orange-500 transition-colors">{region.name}</h2>
                  </Link>
                  <p className="text-slate-600 leading-relaxed mb-5 text-sm md:text-base">{region.description}</p>

                  {/* Destination chips */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {region.highlights.map((place) => (
                      <Link
                        key={place.name}
                        href={place.href}
                        className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full hover:bg-emerald-100 hover:border-emerald-300 transition-colors font-medium"
                      >
                        {place.name}
                      </Link>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2.5 bg-stone-50 border border-stone-100 rounded-2xl p-3.5">
                      <span className="text-xl">⏱️</span>
                      <div>
                        <div className="text-xs text-slate-400">משך מומלץ</div>
                        <div className="text-sm font-bold text-[#1A2535]">{region.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 bg-stone-50 border border-stone-100 rounded-2xl p-3.5">
                      <span className="text-xl">🌤️</span>
                      <div>
                        <div className="text-xs text-slate-400">עונה מומלצת</div>
                        <div className="text-sm font-bold text-[#1A2535]">{region.best_time}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/destinations/${region.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#1A2535] hover:bg-emerald-800 text-white w-full md:w-auto md:self-start px-8 py-3.5 rounded-2xl font-bold transition-colors text-sm"
                >
                  <span>{region.cta || `לכל היעדים ב${region.name}`}</span>
                  <span>←</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-6xl mx-auto px-4 pb-16 md:pb-20">
          <div className="bg-[#1A2535] rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">צריכים עזרה בתכנון המסלול?</h2>
            <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
              בחרו את משך הטיול ואת תחומי העניין שלכם, וקבלו הצעה למסלול שתוכלו להתאים להעדפות שלכם.
            </p>
            <Link
              href="/itineraries"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-bold transition-colors text-sm"
            >
              בנו מסלול אישי
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

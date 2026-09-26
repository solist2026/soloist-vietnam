import Link from "next/link";

export const metadata = {
  title: "סוליסט וייטנאם | וייטנאם בדרך שלך",
  description: "כל מה שהמטייל הישראלי צריך לדעת לפני ובזמן הטיול לוייטנאם. ויזה, יעדים, מסלולים, טיפים וקהילה",
};

const benefits = [
  {
    icon: "🛂",
    title: "הוצאת ויזה בקלות",
    desc: "נטפל בכל תהליך ה-E-Visa עבורכם, בעברית ובמחיר שקוף",
    href: "/visa",
  },
  {
    icon: "🗺️",
    title: "מידע עדכני ומהימן",
    desc: "מדריך מפורט לכל יעד, מסלול ושכונה עם עצות מהשטח",
    href: "/destinations",
  },
  {
    icon: "✈️",
    title: "מסלולים מותאמים אישית",
    desc: "מסלולים מוכנים לכל משך זמן ולכל סגנון מטייל",
    href: "/itineraries",
  },
  {
    icon: "💬",
    title: "קהילת מטיילים ישראלית",
    desc: "הצטרפו לקבוצות WhatsApp הפעילות של מטיילים ישראלים בוייטנאם",
    href: "/community",
  },
];

const regions = [
  {
    name: "צפון וייטנאם",
    desc: "הרים מרהיבים, שדות אורז מדורגים ועיר הבירה ההיסטורית",
    img: "/images/north-vietnam.jpg",
    href: "/destinations/north",
    places: ["האנוי", "סאפה", "הלונג ביי", "הא גיאנג"],
  },
  {
    name: "מרכז וייטנאם",
    desc: "עיירות עתיקות, חופים עוצרי נשימה ואוכל מהמשובח בעולם",
    img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    href: "/destinations/center",
    places: ["הוי אן", "דה נאנג", "הואה"],
  },
  {
    name: "דרום וייטנאם",
    desc: "עיר תוססת, דלתת מקונג ואיים טרופיים עם חופים בתוליים",
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    href: "/destinations/south",
    places: ["הו צ'י מין", "פו קווק", "מוי נה"],
  },
  {
    name: "מפת וייטנאם",
    desc: "סקירה גרפית של כל האזורים, הערים והיעדים בוייטנאם",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    href: "/map",
    places: ["כל הערים", "לפי אזורים"],
    isMap: true,
  },
];

const services = [
  {
    emoji: "🛂",
    title: "הוצאת ויזה לוייטנאם",
    desc: "שירות מלא לקבלת E-Visa. ממלאים פרטים פעם אחת ואנחנו מטפלים בכל השאר.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    href: "/visa",
    cta: "להוצאת ויזה",
    highlight: true,
  },
  {
    emoji: "🗺️",
    title: "מסלולים לטיול בוייטנאם",
    desc: "מסלולים מוכנים ומותאמים אישית, לכל משך זמן ולכל סגנון מטייל.",
    img: "/sapa-hero.jpg",
    href: "/itineraries",
    cta: "לכל המסלולים",
    highlight: false,
  },
  {
    emoji: "💬",
    title: "קבוצות WhatsApp למטיילים",
    desc: "הצטרפו לקהילה ישראלית פעילה. שאלו שאלות, קבלו עצות ומצאו שותפים לטיול.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    href: "/whatsapp",
    cta: "להצטרפות",
    highlight: false,
  },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80", alt: "הלונג ביי, וייטנאם" },
  { src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80", alt: "פו וייטנאמי" },
  { src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80", alt: "פנסי הוי אן" },
  { src: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=600&q=80", alt: "שדות אורז בסאפה" },
  { src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80", alt: "רחוב בוייטנאם" },
];

const blogPosts = [
  { title: "10 דברים שאתם חייבים לעשות בהלונג ביי", category: "יעדים" },
  { title: "המדריך המלא לאיים הכי יפים בוייטנאם", category: "יעדים" },
  { title: "כמה עולה טיול חודש בוייטנאם? פירוט עלויות מלא", category: "תכנון" },
  { title: "ויזה לוייטנאם 2026: כל מה שצריך לדעת", category: "ויזה" },
];

export default function HomePage() {
  return (
    <div className="bg-white text-slate-800">

      {/* ───────── HERO ───────── */}

      {/* Desktop hero: full-screen overlay */}
      <section className="hidden md:flex relative min-h-screen flex-col justify-end overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt="הלונג ביי, וייטנאם"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pb-28">
          <div className="max-w-xl">
            <div className="inline-block bg-orange-500/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-fade-in">
              המדריך הישראלי לוייטנאם
            </div>
            <h1 className="text-6xl xl:text-7xl font-black text-white leading-tight mb-5 animate-fade-in anim-d1">
              וייטנאם<br />מחכה לך
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed animate-fade-in anim-d2">
              טבע עוצר נשימה, תרבות עשירה וחוויות של פעם בחיים. הכל כאן, בעברית ובדיוק בשבילכם.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in anim-d3">
              <Link
                href="/itineraries"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                התחילו לתכנן את הטיול שלכם
              </Link>
              <Link
                href="/visa"
                className="bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all backdrop-blur-sm"
              >
                הוצאת ויזה לוייטנאם
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Mobile hero: image with text overlaid at bottom */}
      <div className="md:hidden relative" style={{ minHeight: "calc(88vw + 88px)" }}>
        <img
          src="/hero-mobile.png"
          alt="הלונג ביי, וייטנאם"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-7 text-white text-right">
          <div className="inline-block self-end bg-orange-500/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            המדריך הישראלי לוייטנאם
          </div>
          <h1 className="text-4xl font-black text-white leading-tight mb-2">
            וייטנאם מחכה לך
          </h1>
          <p className="text-white/80 mb-5 text-sm leading-relaxed">
            טבע עוצר נשימה, תרבות עשירה וחוויות של פעם בחיים.
          </p>
          <div className="flex flex-col gap-2.5">
            <Link
              href="/itineraries"
              className="block text-center bg-orange-500 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all shadow-lg"
            >
              התחילו לתכנן את הטיול שלכם
            </Link>
            <Link
              href="/visa"
              className="block text-center border border-white/35 text-white font-bold px-6 py-3 rounded-full text-sm backdrop-blur-sm"
            >
              הוצאת ויזה לוייטנאם
            </Link>
          </div>
        </div>
      </div>

      {/* ───────── BENEFITS ───────── */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {benefits.map((b, i) => (
              <Link
                key={i}
                href={b.href}
                className="group text-center p-5 rounded-2xl hover:bg-orange-50 transition-colors card-lift"
              >
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base mb-1.5 leading-snug">{b.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{b.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── REGIONS ───────── */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">גלה את אזורי וייטנאם</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              מצפון ועד דרום, כל אזור מציע עולם שלם של חוויות, נופים וטעמים
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regions.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all card-lift"
              >
                <div className="relative h-44 overflow-hidden">
                  {r.isMap ? (
                    <div className="w-full h-full bg-[#0D2137] flex items-center justify-center">
                      <svg viewBox="30 5 135 415" className="h-36 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M75 10 L120 20 L130 55 L145 90 L148 120 L152 150 L148 175 L145 200 L150 225 L152 250 L148 275 L142 300 L135 330 L120 360 L110 380 L95 395 L88 415 L75 395 L55 365 L45 335 L42 305 L50 278 L55 252 L60 228 L70 202 L72 178 L68 152 L65 122 L62 92 L65 62 L60 32 L65 15 Z"
                          fill="#2DD4BF"
                          opacity="0.2"
                        />
                        <path
                          d="M75 10 L120 20 L130 55 L145 90 L148 120 L152 150 L148 175 L145 200 L150 225 L152 250 L148 275 L142 300 L135 330 L120 360 L110 380 L95 395 L88 415 L75 395 L55 365 L45 335 L42 305 L50 278 L55 252 L60 228 L70 202 L72 178 L68 152 L65 122 L62 92 L65 62 L60 32 L65 15 Z"
                          fill="none"
                          stroke="#2DD4BF"
                          strokeWidth="1.5"
                        />
                        <circle cx="75" cy="72" r="3.5" fill="#F97316" />
                        <circle cx="98" cy="60" r="2.5" fill="#F97316" opacity="0.7" />
                        <circle cx="145" cy="205" r="3" fill="#F97316" />
                        <circle cx="148" cy="230" r="3" fill="#F97316" />
                        <circle cx="103" cy="382" r="3.5" fill="#F97316" />
                        <text x="80" y="69" fill="white" fontSize="8" fontFamily="Arial, sans-serif">האנוי</text>
                        <text x="100" y="400" fill="white" fontSize="8" fontFamily="Arial, sans-serif">HCM</text>
                        <text x="34" y="418" fill="#2DD4BF" fontSize="7" fontFamily="Arial, sans-serif" opacity="0.6">N</text>
                        <line x1="37" y1="405" x2="37" y2="415" stroke="#2DD4BF" strokeWidth="1" opacity="0.5" />
                        <line x1="33" y1="410" x2="41" y2="410" stroke="#2DD4BF" strokeWidth="1" opacity="0.5" />
                      </svg>
                    </div>
                  ) : (
                    <img
                      src={r.img}
                      alt={r.name}
                      className="w-full h-full object-cover img-zoom"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-black text-lg text-slate-900 mb-1.5">{r.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{r.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.places.map((p) => (
                      <span key={p} className="text-xs bg-orange-50 text-orange-600 font-medium px-2.5 py-0.5 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-orange-500 text-sm font-bold group-hover:gap-2 transition-all">
                    <span>לפרטים</span>
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">השירותים שלנו</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              כל מה שצריך כדי שהטיול שלכם יהיה חלק, מרגש ובלתי נשכח
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <div
                key={i}
                className={`group rounded-2xl overflow-hidden card-lift ${
                  s.highlight
                    ? "ring-2 ring-orange-500 shadow-lg shadow-orange-100"
                    : "border border-slate-100 shadow-sm"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                  />
                  {s.highlight && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      מומלץ
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white">
                  <div className="text-3xl mb-3">{s.emoji}</div>
                  <h3 className="font-black text-xl text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <Link
                    href={s.href}
                    className={`inline-block font-bold px-6 py-2.5 rounded-full text-sm transition-all ${
                      s.highlight
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md"
                        : "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    {s.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── BLOG + VIDEO ───────── */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Blog */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">מה חדש בבלוג?</h2>
              <div className="space-y-3">
                {blogPosts.map((post, i) => (
                  <Link
                    key={i}
                    href="/blog"
                    className="group flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow card-lift"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                      <span className="text-orange-500 font-black text-sm">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-orange-500 font-bold mb-0.5">{post.category}</div>
                      <div className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-orange-500 transition-colors">
                        {post.title}
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-slate-300 flex-shrink-0 rotate-180 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
              <div className="mt-5">
                <Link href="/blog" className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm hover:text-orange-600 transition-colors">
                  <span>לכל הכתבות בבלוג</span>
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Video */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">וייטנאם בדקה</h2>
              <div className="rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src="https://www.youtube.com/embed/ugPZDwhvEAM"
                  title="סוליסט וייטנאם"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                הצצה קצרה ועוצרת נשימה לאחד היעדים המרתקים בדרום מזרח אסיה.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── GALLERY ───────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">וייטנאם דרך העדשה שלנו</h2>
            <p className="text-slate-500 text-lg">כמה רגעים שתפסנו בדרך</p>
          </div>

          {/* Desktop mosaic */}
          <div
            className="hidden md:grid gap-3 rounded-2xl overflow-hidden"
            style={{ gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "220px 220px" }}
          >
            <div className="row-span-2 overflow-hidden group">
              <img src={gallery[0].src} alt={gallery[0].alt} className="w-full h-full object-cover img-zoom" loading="lazy" />
            </div>
            {gallery.slice(1).map((img, i) => (
              <div key={i} className="overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover img-zoom" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Mobile scroll */}
          <div className="flex md:hidden gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
            {gallery.map((img, i) => (
              <div key={i} className="flex-shrink-0 w-60 h-40 rounded-xl overflow-hidden snap-start group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover img-zoom" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-10 text-center bg-gradient-to-l from-orange-50 to-rose-50 rounded-2xl py-8 px-6">
            <div className="text-4xl mb-3">📸</div>
            <h3 className="font-black text-xl text-slate-900 mb-2">שתפו את הרגעים שלכם</h3>
            <p className="text-slate-500 mb-4 text-sm">
              תייגו אותנו בתמונות שלכם מוייטנאם ואנחנו נשתף את הרגעים היפים ביותר
            </p>
            <span className="inline-block bg-white border border-orange-200 text-orange-500 font-bold px-5 py-2 rounded-full text-sm shadow-sm">
              #SoloistVietnam
            </span>
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="bg-[#1A2535] py-16 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4">מוכנים לטייל בוייטנאם?</h2>
          <p className="text-white/70 text-lg mb-8">
            אנחנו כאן כדי לעזור לכם לתכנן, להכין ולחוות את הטיול המושלם
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/itineraries" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full text-base transition-all hover:scale-105 shadow-lg">
              בנו מסלול טיול
            </Link>
            <Link href="/visa" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-3.5 rounded-full text-base transition-all">
              הוצאת ויזה
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

import Link from "next/link";
import CityPill from "./components/CityPill";

export const metadata = {
  title: "סוליסט וייטנאם | וייטנאם בדרך שלך",
  description: "כל מה שהמטייל הישראלי צריך לדעת לפני ובזמן הטיול לוייטנאם. ויזה, יעדים, מסלולים, טיפים וקהילה",
};

const benefits = [
  {
    img: "/icon-visa.png",
    title: "הוצאת ויזה בקלות",
    desc: "טיפול בכל תהליך הוצאת הויזה לוייטנאם בצורה מהירה פשוטה ומסודרת",
    href: "/visa",
  },
  {
    img: "/icon-info.png",
    title: "מידע עדכני",
    desc: "טיפים עצות והמלצות למטייל",
    href: "/destinations",
  },
  {
    img: "/icon-itineraries.png",
    title: "תכנון הטיול",
    desc: "תכנון הטיול ובניית מסלול המתאים לכל אחד ואחת מכם",
    href: "/itineraries",
  },
  {
    img: "/icon-community.png",
    title: "קהילת המטיילים",
    desc: "הצטרפו לקבוצות הוואטסאפ והפעילות של המטיילים בוייטנאם",
    href: "/community",
  },
];

const regions = [
  {
    name: "מפת וייטנאם",
    desc: "דרך נוחה להכיר את המדינה לפני שמתחילים לתכנן את המסלול. במפה תוכלו לראות את האזורים, הערים והיעדים המרכזיים ולהבין איך הם מתחברים אחד לשני.",
    img: "/images/vietnam-map-satellite.jpg",
    href: "/map",
    places: [],
    isMap: true,
    cta: "למפת וייטנאם",
  },
  {
    name: "צפון וייטנאם",
    desc: "צפון וייטנאם הוא האזור של ההרים, טרסות האורז והכפרים המסורתיים. כאן נמצאים האנוי, סאפה, הא ג'יאנג והאלונג ביי, וזה אזור שמתאים במיוחד למי שאוהב טבע, נופים ותרבות מקומית.",
    img: "/images/north-vietnam.jpg",
    href: "/destinations/north",
    cta: "גלו את צפון וייטנאם",
    places: [
      { name: "האנוי", href: "/destinations/north/hanoi" },
      { name: "הלונג ביי", href: "/destinations/north/halong" },
      { name: "סאפה", href: "/destinations/north/sapa" },
      { name: "לופ הא גיאנג", href: "/destinations/north/ha-giang" },
      { name: "קאט בה", href: "/destinations/north/catba" },
      { name: "ניין בינה", href: "/destinations/north/ninh-binh" },
      { name: "מאי צ'או", href: "/destinations/north/mai-chau" },
      { name: "עמק באק סון", href: "/destinations/north/bac-son" },
    ],
  },
  {
    name: "מרכז וייטנאם",
    desc: "מרכז וייטנאם משלב חופים, ערים עתיקות, אוכל מקומי ואווירה רגועה יותר. הוי אן, דה נאנג והואה נמצאות יחסית קרוב זו לזו, ולכן קל לשלב ביניהן כחלק מהמסלול.",
    img: "/images/center-vietnam.jpg",
    href: "/destinations/center",
    cta: "גלו את מרכז וייטנאם",
    places: [
      { name: "דה נאנג", href: "/destinations/center/danang" },
      { name: "הוי אן", href: "/destinations/center/hoi-an" },
      { name: "הואה", href: "/destinations/center/hue" },
      { name: "מי שון", href: "/destinations/center/my-son" },
      { name: "קוי נהון", href: "/destinations/center/quy-nhon" },
    ],
  },
  {
    name: "דרום וייטנאם",
    desc: "בדרום תמצאו את הו צ'י מין סיטי, דלתת המקונג, חופים ואיים כמו פו קווק. זה אזור מגוון עם שילוב של עיר גדולה, אוכל, חיי לילה, טבע ומקומות שמתאימים גם למי שרוצה קצת לנוח בסוף הטיול.",
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    href: "/destinations/south",
    cta: "גלו את דרום וייטנאם",
    places: [
      { name: "הו צ'י מין", href: "/destinations/south/hcmc" },
      { name: "פו קווק", href: "/destinations/south/phu-quoc" },
      { name: "מוי נה", href: "/destinations/south/mui-ne" },
      { name: "דלתת מקונג", href: "/destinations/south/mekong" },
      { name: "קון דאו", href: "/destinations/south/con-dao" },
      { name: "וונג טאו", href: "/destinations/south/vung-tau" },
    ],
  },
];

const services = [
  {
    icon: "/icon-visa.png",
    title: "ויזה לוייטנאם",
    desc: "מוציאים ויזה בלי להסתבך. ממלאים את הפרטים ואנחנו מלווים אתכם בתהליך עד לקבלת ה-E-Visa.",
    img: "/images/service-visa.png",
    href: "/visa",
    cta: "להוצאת ויזה",
  },
  {
    icon: "/icon-itineraries.png",
    title: "תכנון מסלול אישי",
    desc: "לא יודעים מאיפה להתחיל? נבנה יחד מסלול שמתאים לזמן שלכם, לקצב שלכם ולדרך שבה אתם אוהבים לטייל.",
    img: "/images/service-itineraries.png",
    href: "/itineraries",
    cta: "לתכנון המסלול",
  },
  {
    icon: "/icon-community.png",
    title: "קהילת המטיילים",
    desc: "מצטרפים לישראלים שכבר מטיילים בווייטנאם. שואלים, מתייעצים, מקבלים המלצות ומוצאים שותפים לדרך.",
    img: "/images/service-community.png",
    href: "/community",
    cta: "לקבוצות WhatsApp",
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
  {
    title: "הלונג ביי: 10 דברים שכדאי לעשות ולא לפספס",
    excerpt: "מהנופים המפורסמים של וייטנאם ועד שייט בין האיים. כל מה שכדאי לדעת לפני שמגיעים להלונג ביי.",
    category: "יעדים",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80",
    href: "/blog",
    cta: "למדריך המלא",
  },
  {
    title: "האיים היפים של וייטנאם שכדאי להכיר",
    excerpt: "חופים, טבע ואווירה אחרת. הכירו את האיים שכדאי לשלב במסלול.",
    category: "יעדים",
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    href: "/blog",
    cta: "לקריאת הכתבה",
  },
  {
    title: "כמה באמת עולה חודש בווייטנאם?",
    excerpt: "לינה, אוכל, תחבורה ואטרקציות. עושים סדר בהוצאות לפני שיוצאים לדרך.",
    category: "תכנון",
    img: "/sapa-hero.jpg",
    href: "/blog",
    cta: "לקריאת הכתבה",
  },
  {
    title: "ויזה לווייטנאם 2026 – המדריך למטייל הישראלי",
    excerpt: "מי צריך ויזה, איך מוציאים E-Visa ומה חשוב לבדוק לפני הטיסה.",
    category: "ויזה",
    img: "/images/service-visa.png",
    href: "/blog",
    cta: "לקריאת הכתבה",
  },
];

export default function HomePage() {
  return (
    <div className="text-slate-800" style={{ background: "radial-gradient(ellipse 90% 50% at 5% 12%, rgba(251,191,36,0.28) 0%, transparent 60%), radial-gradient(ellipse 70% 40% at 95% 28%, rgba(16,185,129,0.22) 0%, transparent 55%), radial-gradient(ellipse 65% 35% at 15% 88%, rgba(20,184,166,0.2) 0%, transparent 50%), radial-gradient(ellipse 55% 30% at 88% 72%, rgba(249,115,22,0.18) 0%, transparent 45%), #ffffff" }}>

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
              וייטנאם<br />מחכה לכם
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed animate-fade-in anim-d2">
              טבע עוצר נשימה, תרבות עשירה וחוויות של פעם בחיים. הכל כאן, בעברית ובדיוק בשבילכם.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in anim-d3">
              <Link
                href="/itineraries"
                className="bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all backdrop-blur-sm"
              >
                התחילו לתכנן את הטיול שלכם
              </Link>
              <Link
                href="/visa"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
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
      <div className="md:hidden relative" style={{ minHeight: "calc(88vw + 96px)" }}>
        <img
          src="/hero-mobile.png"
          alt="הלונג ביי, וייטנאם"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-7 text-white text-right">
          <div className="inline-block self-start bg-orange-500/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            המדריך הישראלי לוייטנאם
          </div>
          <h1 className="text-4xl font-black text-white leading-tight mb-2">
            וייטנאם מחכה לכם
          </h1>
          <p className="text-white/80 mb-5 text-sm leading-relaxed">
            טבע עוצר נשימה, תרבות עשירה וחוויות של פעם בחיים.
          </p>
          <div className="flex flex-col gap-2.5">
            <Link
              href="/itineraries"
              className="block text-center border border-white/35 text-white font-bold px-6 py-3 rounded-full text-sm backdrop-blur-sm"
            >
              התחילו לתכנן את הטיול שלכם
            </Link>
            <Link
              href="/visa"
              className="block text-center bg-orange-500 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all shadow-lg"
            >
              הוצאת ויזה לוייטנאם
            </Link>
          </div>
        </div>
      </div>

      {/* ───────── BENEFITS ───────── */}
      <section className="py-12 md:py-16 border-b border-amber-200/60 relative overflow-hidden">
        {/* Mobile background */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-benefits-mobile.png')" }}
        />
        {/* Desktop background */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-benefits-desktop.png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {benefits.map((b, i) => (
              <Link
                key={i}
                href={b.href}
                className="group text-center p-5 rounded-2xl bg-white/80 shadow-sm hover:bg-orange-50/90 transition-colors card-lift"
              >
                <div className="mb-3 flex justify-center">
                  {b.img ? (
                    <img src={b.img} alt={b.title} className="w-16 h-16 object-contain" />
                  ) : (
                    <span className="text-4xl">{b.icon}</span>
                  )}
                </div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base mb-1.5 leading-snug">{b.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{b.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── REGIONS ───────── */}
      <section className="py-14 md:py-20 relative overflow-hidden">
        {/* Mobile background */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-regions-mobile.png')" }}
        />
        {/* Desktop background */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-regions-desktop.png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">גלו את וייטנאם לפי אזורים</h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-2 leading-relaxed">
              וייטנאם היא מדינה ארוכה ומגוונת, וכל אזור בה מרגיש קצת אחרת. בצפון תמצאו הרים, כפרים ונופים דרמטיים, במרכז ערים היסטוריות וחופים, ובדרום קצב אחר לגמרי עם ערים גדולות, איים ואזורי טבע.
            </p>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              כאן תוכלו להכיר את האזורים המרכזיים, להבין מה יש בכל אחד מהם ולבחור את המקומות שהכי מתאימים לסגנון הטיול שלכם.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regions.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group bg-amber-50/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:bg-amber-50/80 transition-all card-lift md:flex md:flex-col"
              >
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-full h-full object-cover object-center img-zoom"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:flex md:flex-col md:flex-1">
                  <h3 className="font-black text-lg text-slate-900 mb-1.5">{r.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{r.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.places.map((p) =>
                      typeof p === "object" ? (
                        <CityPill key={p.name} name={p.name} href={p.href} />
                      ) : (
                        <span key={p} className="text-xs bg-orange-50 text-orange-600 font-medium px-2.5 py-0.5 rounded-full">
                          {p}
                        </span>
                      )
                    )}
                  </div>
                  <div className="mt-4 md:mt-auto md:pt-4 flex items-center gap-1 text-orange-500 text-sm font-bold group-hover:gap-2 transition-all">
                    <span>{r.cta || "לפרטים"}</span>
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
      <section className="py-14 md:py-20 relative overflow-hidden">
        <div
          className="md:hidden absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/bg-services-mobile.png')" }}
        />
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/bg-services-desktop.png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              כל מה שצריך לפני שיוצאים לווייטנאם
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              אנחנו כאן כדי לעשות לכם סדר בתכנון ולעזור בדברים שבאמת חשובים בדרך.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all card-lift md:flex md:flex-col"
              >
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover object-top img-zoom"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:flex md:flex-col md:flex-1 text-center">
                  <div className="mb-3 flex justify-center">
                    <img src={s.icon} alt={s.title} className="w-14 h-14 object-contain" />
                  </div>
                  <h3 className="font-black text-xl text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="md:mt-auto flex justify-center">
                    <Link
                      href={s.href}
                      className="inline-block font-bold px-7 py-2.5 rounded-full text-sm transition-all bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      {s.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── BLOG ───────── */}
      <section className="py-14 md:py-20 relative overflow-hidden">
        <div
          className="md:hidden absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/bg-blog-mobile.png')" }}
        />
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/bg-blog-desktop.png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">

          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-4">
              מה חדש בבלוג
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">מטיילים חכם יותר בווייטנאם</h2>
            <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              מדריכים, טיפים ומידע שיעזרו לכם לתכנן נכון, להכיר מקומות חדשים וליהנות יותר מהדרך.
            </p>
          </div>

          {/* Desktop: editorial layout */}
          <div className="hidden lg:flex gap-6 items-stretch">
            {/* Featured article */}
            <Link
              href={blogPosts[0].href}
              className="group flex-1 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all card-lift flex flex-col"
            >
              <div className="relative overflow-hidden flex-shrink-0" style={{ height: "280px" }}>
                <img
                  src={blogPosts[0].img}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover object-center img-zoom"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {blogPosts[0].category}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-black text-2xl text-slate-900 mb-3 leading-snug">{blogPosts[0].title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{blogPosts[0].excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 group-hover:gap-3 transition-all">
                  {blogPosts[0].cta}
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* 3 secondary articles */}
            <div className="w-80 flex-shrink-0 flex flex-col gap-4">
              {blogPosts.slice(1).map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="group flex-1 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all card-lift flex flex-row"
                >
                  <div className="w-28 flex-shrink-0 overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover img-zoom"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-xs font-bold text-emerald-600 mb-1 block">{post.category}</span>
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">{post.title}</h3>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 group-hover:gap-2 transition-all mt-2">
                      {post.cta}
                      <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden space-y-4">
            {/* Featured */}
            <Link
              href={blogPosts[0].href}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all card-lift block"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={blogPosts[0].img}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover object-center img-zoom"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {blogPosts[0].category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-black text-lg text-slate-900 mb-2 leading-snug">{blogPosts[0].title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{blogPosts[0].excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-500">
                  {blogPosts[0].cta}
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Secondary – compact horizontal */}
            {blogPosts.slice(1).map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="group bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all card-lift flex flex-row h-24"
              >
                <div className="w-24 flex-shrink-0 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 py-3 flex flex-col justify-center flex-1 min-w-0">
                  <span className="text-xs font-bold text-emerald-600 mb-0.5">{post.category}</span>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug line-clamp-2">{post.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 mt-1">
                    {post.cta}
                    <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-block font-bold px-8 py-3 rounded-full text-sm transition-all border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
            >
              לכל המדריכים והכתבות
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── VIETNAM IN A MINUTE ───────── */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Mobile background */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-vietnam-minute-mobile.png')" }}
        />
        {/* Desktop background */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-vietnam-minute-desktop.png')" }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          {/* Desktop: text (right) + video (left) — RTL natural order */}
          <div className="hidden md:flex items-center gap-12 lg:gap-16">

            {/* Text column — RIGHT side in RTL (first in DOM) */}
            <div className="w-72 lg:w-96 flex-shrink-0">
              <span className="inline-block text-xs font-bold text-emerald-700 bg-white/80 border border-emerald-200 px-3 py-1 rounded-full mb-5">
                וייטנאם בדקה
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                חוויה שלמה<br />בדקה אחת
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-xs">
                סרטון קצר שמביא לכם את האווירה, הנופים, התרבות והאנשים שעושים את וייטנאם ליעד כל כך מיוחד.
              </p>
              <a
                href="https://www.youtube.com/watch?v=ugPZDwhvEAM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3 rounded-full text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                צפו עכשיו
              </a>
            </div>

            {/* Video — LEFT side in RTL (second in DOM) */}
            <div className="flex-1 min-w-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src="https://www.youtube.com/embed/ugPZDwhvEAM"
                  title="סוליסט וייטנאם"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>
          </div>

          {/* Mobile: stacked — tag → title → text → video */}
          <div className="md:hidden">
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-bold text-emerald-700 bg-white/80 border border-emerald-200 px-3 py-1 rounded-full mb-4">
                וייטנאם בדקה
              </span>
              <h2 className="text-2xl font-black text-slate-900 mb-3 leading-tight">
                חוויה שלמה בדקה אחת
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                סרטון קצר שמביא לכם את האווירה, הנופים, התרבות והאנשים שעושים את וייטנאם ליעד כל כך מיוחד.
              </p>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/ugPZDwhvEAM"
                title="סוליסט וייטנאם"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ───────── GALLERY ───────── */}
      <section className="py-14 md:py-20" style={{ background: "linear-gradient(160deg, rgba(251,191,36,0.2) 0%, rgba(255,255,255,1) 45%, rgba(20,184,166,0.16) 100%)" }}>
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

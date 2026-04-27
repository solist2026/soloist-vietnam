import Link from "next/link";

const destinations = [
  {
    id: "hoi-an",
    name: "הוי אן",
    subtitle: "העיירה העתיקה הקסומה",
    emoji: "🏮",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
    chabad: true,
    chabadNote: "יש בית חב\"ד בהוי אן — ארוחות שישי ושבת. בנוסף: Israeli House — ארוחות שישי, 300,000 VND/אדם. דודי: +972-544-802424",
    description: "הוי אן היא אחת הערים היפות ביותר בדרום-מזרח אסיה — עיירה עתיקה מהמאה ה-15 השמורה בצורה מושלמת, עם פנסים צבעוניים, בתים צהובים ונהר Thu Bon השקט. אתר יונסקו.",
    areas: [
      { name: "Ancient Town (העיר העתיקה)", desc: "הלב של הוי אן — פנסים, בתים צהובים ואווירה קסומה. רחובות סגורים לרכבים בלילה.", recommended: true },
      { name: "An Bang Beach", desc: "חוף 10 דקות מהעיר העתיקה — שקט, יפה ופחות עמוס מחוף מי קה.", recommended: true },
      { name: "Cam Nam Island", desc: "אי שקט מהנהר — אווירה מקומית ומחירים נמוכים.", recommended: false },
    ],
    attractions: [
      { name: "העיר העתיקה בלילה", desc: "פנסים צבעוניים מוארים על הנהר — חוויה שלא תשכחו לעולם." },
      { name: "Japanese Covered Bridge", desc: "הגשר המכוסה היפני מהמאה ה-16 — הסמל של הוי אן." },
      { name: "חוף An Bang", desc: "אחד החופים היפים בוייטנאם — שקט ופחות תיירותי." },
      { name: "שיעורי בישול", desc: "הוי אן ידועה בשיעורי הבישול שלה — חוויה מומלצת מאוד." },
      { name: "שיעורי תפירה", desc: "תפירת בגדים מותאמים אישית תוך 24 שעות — מיוחד להוי אן." },
      { name: "My Son Sanctuary", desc: "מקדשים הינדואיסטיים עתיקים של ממלכת Cham — 40 דקות." },
    ],
    food: [
      { name: "Cao Lau", desc: "המנה האייקונית של הוי אן — אטריות עבות עם בשר חזיר וירוקים." },
      { name: "White Rose Dumplings", desc: "כיסנים לבנים בצורת ורד — מיוחד לגמרי להוי אן." },
      { name: "Banh Mi Phuong", desc: "הכריך המפורסם ביותר בהוי אן — Anthony Bourdain המליץ עליו." },
      { name: "Hoanh Thanh", desc: "ואנטון מרק עדין ומרפא." },
    ],
    accommodation: [
      { type: "תקציב נמוך", price: "$10-20/לילה", desc: "הוסטלים ובתי הארחה קטנים בעיר העתיקה." },
      { type: "תקציב בינוני", price: "$30-70/לילה", desc: "מלונות בוטיק בעיר העתיקה עם עיצוב מדהים." },
      { type: "תקציב גבוה", price: "$100+/לילה", desc: "ריזורטים על החוף או וילות פרטיות." },
    ],
    travel_times: [
      { from: "מדה נאנג", time: "45 דקות", method: "מונית/גראב" },
      { from: "מהואה", time: "3 שעות", method: "אוטובוס" },
      { from: "מהאנוי", time: "1:15 שעות", method: "טיסה לדה נאנג + מונית" },
    ],
    tips: [
      "כרטיס העיר העתיקה עולה $3 ומאפשר כניסה ל-5 אתרים",
      "שכרו אופניים — הדרך הכי נחמדה לסיור",
      "אפריל-אוגוסט — מזג אוויר מושלם. נובמבר-ינואר — גשמים וסיכוי לשיטפונות",
      "חייטת מומלצת: Noom ב-Eli Tailor 2 — מקצועית, מהירה ובמחירים מצוינים",
      "סדנאות בישול: חוויה מומלצת מאוד. לפרטים: +84 121 396 6059",
      "Israeli House: ארוחת שישי 300K VND/אדם, ידידותי ל-vegan. דודי: +972-544-802424",
      "מכבסה מומלצת: Bestie Laundry",
    ],
  },
  {
    id: "danang",
    name: "דה נאנג",
    subtitle: "עיר החופים והגשרים",
    emoji: "🌉",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    chabad: false,
    description: "דה נאנג היא העיר הגדולה של מרכז וייטנאם — ניקיון, סדר וחופים ארוכים. הגשר הדרקון שמנשפת אש ומים הפך לסמל העיר. בין הוי אן לאנוי — צומת תחבורה חשוב.",
    areas: [
      { name: "My Khe Beach", desc: "החוף הראשי של דה נאנג — ארוך, נקי ועם גלים מושלמים לגלישה.", recommended: true },
      { name: "Han River", desc: "אזור הנהר עם המסעדות, ברים ונוף לגשר הדרקון.", recommended: true },
    ],
    attractions: [
      { name: "גשר הדרקון", desc: "גשר בצורת דרקון שמנשפא אש ומים בשישי ושבת בלילה." },
      { name: "Ba Na Hills", desc: "גן שעשועים הררי עם הגשר הזכוכית הנודע — מרהיב אבל תיירותי." },
      { name: "Marble Mountains", desc: "חמישה הרי שיש עם מקדשים ומערות מפתיעות." },
      { name: "My Khe Beach", desc: "אחד החופים הארוכים ביותר בוייטנאם — 30 ק\"מ של חול." },
    ],
    food: [
      { name: "Banh Xeo", desc: "פנקייק וייטנאמי פריך עם שרימפס וצמחי תבלין." },
      { name: "Mi Quang", desc: "מנה מקומית ייחודית — אטריות צהובות עם בשר ואגוזים." },
      { name: "פירות ים", desc: "דה נאנג מפורסמת בפירות הים הטריים שלה." },
    ],
    accommodation: [
      { type: "תקציב", price: "$15-30/לילה", desc: "הוסטלים ומלונות קטנים ליד החוף." },
      { type: "מלון", price: "$50-120/לילה", desc: "מלוני 3-4 כוכבים על חוף My Khe." },
      { type: "ריזורט", price: "$150+/לילה", desc: "ריזורטים מפוארים ישירות על החוף." },
    ],
    travel_times: [
      { from: "מהוי אן", time: "45 דקות", method: "מונית/גראב" },
      { from: "מהואה", time: "3 שעות", method: "אוטובוס/רכבת" },
      { from: "מהאנוי", time: "1:15 שעות", method: "טיסה" },
      { from: "מהו צ'י מין", time: "1:20 שעות", method: "טיסה" },
    ],
    tips: [
      "דה נאנג היא בסיס מצוין לסיורים להוי אן ולהואה",
      "גשר הדרקון מנשפא אש בשישי ושבת ב-21:00",
      "החוף הכי נוח לגלישה בוייטנאם",
    ],
  },
  {
    id: "hue",
    name: "הואה",
    subtitle: "עיר הקיסרים",
    emoji: "👑",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    chabad: false,
    description: "הואה הייתה בירת וייטנאם הקיסרית עד 1945. העיר שומרת על אוצרות היסטוריים עצומים — ארמונות, קברים ומקדשים מהמאה ה-19, יחד עם אחד מהאוכלים הטובים בוייטנאם.",
    areas: [
      { name: "Imperial City", desc: "האזור ההיסטורי בתוך חומות הארמון. יותר שקט.", recommended: false },
      { name: "Pham Ngu Lao Area", desc: "האזור התיירותי עם המסעדות, הברים וההוסטלים.", recommended: true },
    ],
    attractions: [
      { name: "Hue Imperial Citadel", desc: "המצודה הקיסרית העצומה — אתר יונסקו מרשים." },
      { name: "קברי הקיסרים", desc: "קברים מפוארים של קיסרי שושלת Nguyen בסביבת הנהר." },
      { name: "Thien Mu Pagoda", desc: "מגדל הפגודה הגבוה ביותר בוייטנאם על גדת הנהר." },
      { name: "Dong Ba Market", desc: "השוק הגדול של הואה — אווירה מקומית אותנטית." },
    ],
    food: [
      { name: "Bun Bo Hue", desc: "מרק הבשר המפורסם של הואה — חריף ועשיר יותר מהפו הסטנדרטי." },
      { name: "Banh Khoai", desc: "פנקייק פריך מיוחד להואה." },
      { name: "Com Hen", desc: "צדפות עם אורז — ארוחת בוקר מסורתית בהואה." },
    ],
    accommodation: [
      { type: "תקציב", price: "$10-25/לילה", desc: "הוסטלים ומלוני קצת ליד הנהר." },
      { type: "בינוני", price: "$35-80/לילה", desc: "מלונות נחמדים ליד הארמון הקיסרי." },
    ],
    travel_times: [
      { from: "מדה נאנג", time: "3 שעות", method: "אוטובוס/רכבת" },
      { from: "מהוי אן", time: "3.5 שעות", method: "אוטובוס" },
      { from: "מהאנוי", time: "2 שעות", method: "טיסה" },
    ],
    tips: [
      "שכרו אופנוע ונסעו לקברי הקיסרים לבד",
      "הואה זולה יחסית לעיירות תיירותיות אחרות",
      "שימו לב — הואה נוטה לגשמים ושיטפונות בחורף",
    ],
  },
];

export default function CenterVietnamPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-20 bg-gradient-to-b from-amber-900/50 to-[#0f1923] text-center">
        <h1 className="text-5xl font-bold mb-4">🏯 מרכז וייטנאם</h1>
        <p className="text-[#f5f0e8]/60 text-lg max-w-2xl mx-auto">
          עיירות עתיקות, ארמונות מלכותיים וחופים עוצרי נשימה
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-16">
        {destinations.map((dest) => (
          <div key={dest.id} id={dest.id} className="bg-[#1a2535] rounded-3xl overflow-hidden border border-[#c9a84c]/10">
            <div className="relative h-72">
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2535] via-[#1a2535]/50 to-transparent" />
              <div className="absolute bottom-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{dest.emoji}</span>
                  <div>
                    <h2 className="text-4xl font-bold">{dest.name}</h2>
                    <p className="text-[#c9a84c]">{dest.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-[#f5f0e8]/70 leading-relaxed mb-8 text-lg">{dest.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">🎯 אטרקציות</h3>
                  <div className="flex flex-col gap-3">
                    {dest.attractions.map((attr) => (
                      <div key={attr.name} className="bg-[#0f1923] rounded-xl p-4">
                        <div className="font-semibold mb-1">{attr.name}</div>
                        <div className="text-sm text-[#f5f0e8]/60">{attr.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">🍜 אוכל</h3>
                    <div className="flex flex-col gap-3">
                      {dest.food.map((f) => (
                        <div key={f.name} className="bg-[#0f1923] rounded-xl p-4">
                          <div className="font-semibold mb-1">{f.name}</div>
                          <div className="text-sm text-[#f5f0e8]/60">{f.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">🛏️ לינה</h3>
                    <div className="flex flex-col gap-3">
                      {dest.accommodation.map((acc) => (
                        <div key={acc.type} className="bg-[#0f1923] rounded-xl p-4 flex justify-between items-start">
                          <div>
                            <div className="font-semibold mb-1">{acc.type}</div>
                            <div className="text-sm text-[#f5f0e8]/60">{acc.desc}</div>
                          </div>
                          <span className="text-[#c9a84c] font-bold text-sm whitespace-nowrap mr-4">{acc.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">🚌 זמני הגעה</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dest.travel_times.map((t) => (
                    <div key={t.from} className="bg-[#0f1923] rounded-xl p-4 flex justify-between">
                      <span className="text-[#f5f0e8]/70">{t.from}</span>
                      <div className="text-right">
                        <div className="font-bold text-[#c9a84c]">{t.time}</div>
                        <div className="text-xs text-[#f5f0e8]/40">{t.method}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-[#0f1923] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">💡 טיפים חשובים</h3>
                <ul className="flex flex-col gap-2">
                  {dest.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-[#f5f0e8]/70 flex gap-2">
                      <span className="text-[#c9a84c]">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16 flex justify-between">
        <Link href="/destinations/north" className="text-[#c9a84c] hover:underline">← צפון וייטנאם</Link>
        <Link href="/destinations/south" className="text-[#c9a84c] hover:underline">דרום וייטנאם ←</Link>
      </div>
    </div>
  );
}

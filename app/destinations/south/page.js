import Link from "next/link";

const destinations = [
  {
    id: "hcmc",
    name: "הו צ'י מין",
    subtitle: "העיר שלא ישנה",
    emoji: "🏙️",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    chabad: true,
    chabadNote: "בית חב\"ד פעיל ומרכזי — אחד הגדולים בדרום-מזרח אסיה. ממוקם ב-District 1",
    description: "הו צ'י מין (סייגון) היא העיר הגדולה והתוססת ביותר בוייטנאם — 10 מיליון תושבים, מיליוני קטנועים ואנרגיה שלא מתפוגגת. רוב הטיסות הבינלאומיות נוחתות כאן.",
    areas: [
      { name: "District 1 (מרכז העיר)", desc: "הלב הפועם — מלונות, מסעדות, ברים ואטרקציות. בית חב\"ד ממוקם כאן.", recommended: true },
      { name: "District 3", desc: "שקט יותר מ-D1, עם מסעדות מצוינות ואווירה מקומית יותר.", recommended: true },
      { name: "Bui Vien Street", desc: "רחוב המסיבות הנודע — קולני, תוסס ומלא ישראלים.", recommended: false },
    ],
    attractions: [
      { name: "War Remnants Museum", desc: "המוזיאון המרגש והמחריד על מלחמת וייטנאם. חובה לכל מבקר." },
      { name: "Reunification Palace", desc: "ארמון האיחוד — נשמר כפי שהיה ב-1975 כשנפל." },
      { name: "Notre-Dame Cathedral", desc: "קתדרלת ניו-דאם הצרפתית מ-1880 — בלב העיר." },
      { name: "Ben Thanh Market", desc: "השוק הגדול של סייגון — קניות, אוכל ואווירה." },
      { name: "מנהרות Cu Chi", desc: "מנהרות המחתרת שכרו הגריל הוייטנאמי בזמן המלחמה — 40 ק\"מ מהעיר." },
      { name: "Bui Vien Street", desc: "רחוב המסיבות — סוגרים לרכבים בלילה, מוסיקה ואוכל." },
    ],
    food: [
      { name: "Com Tam", desc: "אורז שבור עם חזיר צלוי — ארוחת הבוקר הקלאסית של סייגון." },
      { name: "Hu Tieu", desc: "מרק אטריות של הדרום — קל יותר מהפו הצפוני." },
      { name: "Banh Mi", desc: "בסייגון הבאן מי מגיע עם מגוון רחב של מילויים." },
      { name: "פירות טרופיים", desc: "מנגו, מנגוסטין, ג'קפרוט — הכל טרי וזול." },
    ],
    accommodation: [
      { type: "תקציב נמוך", price: "$8-18/לילה", desc: "הוסטלים ב-District 1 וב-Bui Vien." },
      { type: "תקציב בינוני", price: "$25-60/לילה", desc: "מלוני בוטיק ב-District 1 ו-3." },
      { type: "מלון יוקרה", price: "$100+/לילה", desc: "מלונות 5 כוכבים ב-District 1." },
    ],
    travel_times: [
      { from: "מדלתת מקונג", time: "2-3 שעות", method: "אוטובוס" },
      { from: "מפו קווק", time: "1 שעה", method: "טיסה" },
      { from: "מהאנוי", time: "2 שעות", method: "טיסה" },
      { from: "מדה נאנג", time: "1:20 שעות", method: "טיסה" },
    ],
    tips: [
      "Grab הוא חובה — מוניות רגילות יפנקו אתכם",
      "בית חב\"ד ב-District 1 — מוקד ישראלים מרכזי",
      "זהירות מהאוכל ברחוב בהתחלה — הבטן צריכה להתרגל",
      "Bui Vien רועשת — אל תישנו ממש עליה",
      "שעות בוקר מוקדמות — הזמן הטוב לראות את העיר לפני הפקקים",
    ],
  },
  {
    id: "mekong",
    name: "דלתת מקונג",
    subtitle: "גן עדן ירוק על הנהר",
    emoji: "🛶",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    chabad: false,
    description: "דלתת מקונג היא אחד האזורים הירוקים והפוריים ביותר בעולם — רשת של נהרות, תעלות, שדות אורז ופרדסים. חוויה של וייטנאם הכפרית והאמיתית, רחוק מהעיר הגדולה.",
    areas: [
      { name: "Can Tho", desc: "העיר הגדולה של הדלתא — בסיס מצוין לסיורים. שוק צף ייחודי.", recommended: true },
      { name: "Ben Tre", desc: "האי הקוקוס — שקט יותר מקאן טו, אווירה כפרית אמיתית.", recommended: true },
      { name: "Chau Doc", desc: "עיר גבולית עם שוק צף ומקדש הר. שער לקמבודיה.", recommended: false },
    ],
    attractions: [
      { name: "שוק צף Cai Rang", desc: "השוק הצף הגדול ביותר בדלתא — נסו להגיע ב-06:00." },
      { name: "סיור בתעלות", desc: "שייט בסירות קטנות בין גני פרי ובתי כפריים." },
      { name: "בית מלאכה מקומי", desc: "ייצור ממתקי קוקוס, אורגים ועוד — חוויה אותנטית." },
      { name: "Ben Tre Coconut Village", desc: "כפר הקוקוסים — ייצור מוצרי קוקוס מסורתי." },
    ],
    food: [
      { name: "Hu Tieu Nam Vang", desc: "מרק אטריות עשיר — הגרסה המקומית של הדלתא." },
      { name: "Lau Mam", desc: "מרק דגים מותססים — חריף ועשיר בטעם." },
      { name: "פירות טרופיים", desc: "מנגו, תמר, פפאיה וג'קפרוט טריים מהפרדס." },
    ],
    accommodation: [
      { type: "הומסטיי", price: "$15-30/לילה", desc: "לינה במשפחות מקומיות — חוויה אמיתית ומומלצת." },
      { type: "מלון בקאן טו", price: "$25-60/לילה", desc: "מלונות בינוניים בעיר." },
    ],
    travel_times: [
      { from: "מהו צ'י מין", time: "3 שעות לקאן טו", method: "אוטובוס" },
      { from: "מהו צ'י מין", time: "2 שעות לבן טרה", method: "אוטובוס" },
    ],
    tips: [
      "סיור יום אחד מהו צ'י מין אפשרי אבל מהיר — לינה עדיפה",
      "בוקר מוקדם מאוד = שוק צף בשיאו",
      "הומסטיי הוא הדרך הטובה ביותר לחוות את הדלתא",
    ],
  },
  {
    id: "phu-quoc",
    name: "פו קווק",
    subtitle: "האי הטרופי המושלם",
    emoji: "🏝️",
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80",
    chabad: false,
    description: "פו קווק הוא האי הגדול ביותר של וייטנאם — חופים בתוליים עם חול לבן, מים טורקיז ועצי פלמרים. בשנים האחרונות התפתח מאוד אבל עדיין ניתן למצוא פינות שקטות.",
    areas: [
      { name: "Long Beach", desc: "החוף הראשי — עמוס יותר אבל עם כל השירותים.", recommended: true },
      { name: "Ong Lang Beach", desc: "שקט יותר, עם בוטיקים ועסקים קטנים. מועדף על ישראלים.", recommended: true },
      { name: "Sao Beach", desc: "החוף הכי יפה באי — חול לבן כמו טחינה ומים שקופים.", recommended: true },
    ],
    attractions: [
      { name: "Sao Beach", desc: "אחד החופים היפים ביותר בדרום-מזרח אסיה." },
      { name: "שוק הלילה פו קווק", desc: "שוק ים ענקי — שרימפס, סרטנים ולובסטרים חיים." },
      { name: "Vinpearl Safari", desc: "פארק חיות עם בעלי חיים אפריקאים — מיוחד." },
      { name: "צלילה ושנורקלינג", desc: "המים סביב פו קווק מלאים בדגים צבעוניים ואלמוגים." },
      { name: "Pepper Farm", desc: "מטעי פלפל — פו קווק מפורסמת בפלפל שלה." },
    ],
    food: [
      { name: "פירות ים", desc: "הלובסטר, שרימפס והסרטנים הכי טריים שתמצאו." },
      { name: "Bun Quay", desc: "מנה מקומית ייחודית לפו קווק — אטריות עם פירות ים." },
      { name: "Nuoc Mam", desc: "פו קווק מפורסמת ברוטב הדגים הטוב ביותר בוייטנאם." },
    ],
    accommodation: [
      { type: "תקציב", price: "$15-35/לילה", desc: "גסטהאוסים ומלונות קטנים ב-Ong Lang." },
      { type: "בינוני", price: "$50-120/לילה", desc: "מלוני בוטיק עם בריכה ליד החוף." },
      { type: "ריזורט", price: "$150+/לילה", desc: "ריזורטים מפוארים ישירות על Sao Beach." },
    ],
    travel_times: [
      { from: "מהו צ'י מין", time: "1 שעה", method: "טיסה" },
      { from: "מהאנוי", time: "2 שעות", method: "טיסה" },
      { from: "מקאן טו", time: "45 דקות", method: "טיסה" },
    ],
    tips: [
      "נובמבר-אפריל — עונה יבשה ומושלמת",
      "מאי-אוקטובר — גשמים, מחירים זולים",
      "שכרו אופנוע לחופי הדרום — הכי יפים",
      "הזמינו מסעדת ים בשוק הלילה עוד אחר הצהריים",
    ],
  },
  {
    id: "mui-ne",
    name: "מוי נה",
    subtitle: "הדיונות, הגלים והשקט",
    emoji: "🏄",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
    chabad: false,
    description: "מוי נה ידועה בדיונות החול הכתומות, בגלים לגלישת רוח ובאווירה השקטה יחסית. פחות עמוסה מהחופים האחרים, עם קהילה מקומית של דייגים.",
    areas: [
      { name: "Mui Ne Village", desc: "הכפר המקורי עם הסירות הצבעוניות — אותנטי ויפה.", recommended: true },
      { name: "Ham Tien", desc: "האזור התיירותי עם המלונות והמסעדות.", recommended: true },
    ],
    attractions: [
      { name: "דיונות החול האדומות", desc: "דיונות ענקיות בצבע כתום-אדום — מרהיב בשקיעה." },
      { name: "דיונות החול הלבנות", desc: "דיונות לבנות עם אגם קטן — 30 ק\"מ מהעיר." },
      { name: "Fairy Stream", desc: "זרם שקוף שזורם בין צוקי חול אדומים — טיול מיוחד." },
      { name: "גלישת רוח (Kitesurfing)", desc: "מוי נה היא אחת ממקומות הגלישה הטובים בוייטנאם." },
    ],
    food: [
      { name: "פירות ים טריים", desc: "מסעדות דגים על החוף עם ציד יומי." },
      { name: "Banh Canh", desc: "מרק אטריות עבות עם פירות ים." },
    ],
    accommodation: [
      { type: "תקציב", price: "$12-25/לילה", desc: "גסטהאוסים בכפר ובאזור התיירותי." },
      { type: "ריזורט", price: "$60-150/לילה", desc: "ריזורטים ישירות על החוף." },
    ],
    travel_times: [
      { from: "מהו צ'י מין", time: "5 שעות", method: "אוטובוס" },
      { from: "מדא לאט", time: "3 שעות", method: "אוטובוס" },
    ],
    tips: [
      "בוקר מוקדם לדיונות — לפני החום והתיירים",
      "שכרו ג'יפ לסיור בדיונות",
      "עונת הגלישה הטובה — נובמבר-אפריל",
    ],
  },
];

export default function SouthVietnamPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-20 bg-gradient-to-b from-red-900/50 to-[#0f1923] text-center">
        <h1 className="text-5xl font-bold mb-4">🌴 דרום וייטנאם</h1>
        <p className="text-[#f5f0e8]/60 text-lg max-w-2xl mx-auto">
          עיר תוססת, דלתת מקונג ואיים טרופיים עם חופים בתוליים
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
                {dest.chabad && (
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    ✡️ יש בית חב"ד
                  </span>
                )}
              </div>
            </div>

            <div className="p-8">
              <p className="text-[#f5f0e8]/70 leading-relaxed mb-8 text-lg">{dest.description}</p>

              {dest.chabad && (
                <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4 mb-8">
                  <p className="text-blue-300 text-sm">✡️ <strong>בית חב"ד:</strong> {dest.chabadNote}</p>
                </div>
              )}

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
        <Link href="/destinations/center" className="text-[#c9a84c] hover:underline">← מרכז וייטנאם</Link>
        <Link href="/destinations" className="text-[#c9a84c] hover:underline">כל היעדים ←</Link>
      </div>
    </div>
  );
}

import Link from "next/link";

const destinations = [
  {
    id: "hanoi",
    name: "האנוי",
    subtitle: "עיר הבירה המסתורית",
    emoji: "🏛️",
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=800&q=80",
    chabad: true,
    chabadNote: "בית חב\"ד פעיל ופופולרי מאוד בקרב ישראלים",
    description: "האנוי, עיר הבירה של וייטנאם, היא עיר עתיקה ומסתורית עם אגם חרב ממוקדם, מקדשים עתיקים ורחובות צרים מלאי חיים. העיר מציעה את ניגוד המתח המושלם בין העתיק לחדיש.",
    areas: [
      {
        name: "Old Quarter (העיר העתיקה)",
        desc: "האזור הכי פופולרי בקרב תיירים. רחובות צרים, בתי אוכל, ברים ואטמוספרה ייחודית. רוב הישראלים ישנים כאן.",
        recommended: true,
      },
      {
        name: "Hoan Kiem (אזור אגם חרב)",
        desc: "שקט יותר מה-Old Quarter, קרוב לאגם המפורסם. מחירים קצת יותר גבוהים אבל נוח יותר.",
        recommended: false,
      },
      {
        name: "Ba Dinh",
        desc: "האזור ההיסטורי עם המוזיאונים הממשלתיים. לא מומלץ ללינה אבל כדאי לביקור.",
        recommended: false,
      },
    ],
    attractions: [
      { name: "אגם חרב (Hoan Kiem)", desc: "לב האנוי — האגם האגדי עם המקדש הקסום באמצעו. חובה לבקר בשעות הבוקר המוקדמות." },
      { name: "Old Quarter", desc: "36 רחובות עתיקים, כל רחוב עם מקצוע משלו. מושלם לטיול רגלי." },
      { name: "מקדש הספרות", desc: "המקדש העתיק הראשון בוייטנאם מ-1070. מרשים ומרגש." },
      { name: "מוזיאון הו צ'י מין", desc: "להבין את ההיסטוריה של וייטנאם דרך הדמות המרכזית שלה." },
      { name: "הו טאי (אגם המערב)", desc: "האגם הגדול של האנוי — שאנטי, מסעדות דגים ותחושת מנוחה." },
      { name: "שוק Dong Xuan", desc: "השוק הגדול והעתיק ביותר באנוי — הכל במחירים שוק." },
    ],
    food: [
      { name: "פו (Pho)", desc: "מרק האטריות הוייטנאמי המפורסם. האנוי היא מקומו המקורי." },
      { name: "Bun Cha", desc: "המנה האנואית המובהקת — צלעות חזיר על גריל עם אטריות ועשבים." },
      { name: "Banh Mi", desc: "כריך הבאגט הוייטנאמי — שילוב מושלם של תרבויות." },
      { name: "Egg Coffee (קפה ביצה)", desc: "קפה מיוחד עם קצפת ביצה — המצאה האנואית ייחודית." },
      { name: "Banh Cuon", desc: "מנה בוקר קלאסית — מלפוף אורז עם בשר ועשבים." },
    ],
    accommodation: [
      { type: "תקציב נמוך", price: "$8-15/לילה", desc: "הוסטלים ב-Old Quarter. המלצה: Hanoi Backpackers Hostel" },
      { type: "תקציב בינוני", price: "$20-50/לילה", desc: "מלונות בוטיק ב-Old Quarter. נוח ומרכזי." },
      { type: "תקציב גבוה", price: "$80+/לילה", desc: "מלונות 4-5 כוכבים באזור Hoan Kiem." },
    ],
    travel_times: [
      { from: "מהלונג ביי", time: "3.5 שעות", method: "אוטובוס/מיניבוס" },
      { from: "מסאפה", time: "5-6 שעות", method: "אוטובוס לילה / רכבת" },
      { from: "מדה נאנג", time: "1:15 שעות", method: "טיסה פנימית" },
      { from: "מהו צ'י מין", time: "2 שעות", method: "טיסה פנימית" },
    ],
    tips: [
      "חצו כבישים לאט ובקצב קבוע — הרכבים יעקפו אתכם",
      "Grab (אובר מקומי) הוא הכי נוח ולא יקר",
      "Old Quarter עמוס ורועש — קחו חדר עם חלונות בגב הרחוב",
      "בית חב\"ד נמצא ב-Old Quarter — ישראלים רבים מגיעים לשישי",
    ],
  },
  {
    id: "halong",
    name: "הלונג ביי",
    subtitle: "פלא הטבע של וייטנאם",
    emoji: "⛵",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    chabad: false,
    description: "הלונג ביי היא אחת מפלאי הטבע של העולם — אלפי אי גיר זקופים מתוך מים ירוקים-כחולים. הדרך הטובה ביותר לחוות אותה היא טיול שייט של לילה אחד עד שלושה.",
    areas: [
      {
        name: "Ha Long City",
        desc: "העיר הקרובה לנמל. רוב הסיורים יוצאים מכאן. לינה כאן פחות מומלצת — רוב האנשים ישנים על הספינה.",
        recommended: false,
      },
      {
        name: "Bai Chay",
        desc: "האזור התיירותי הראשי. יש כאן מלונות, מסעדות ואפשר לארגן סיורים.",
        recommended: true,
      },
    ],
    attractions: [
      { name: "שייט בין האיים", desc: "חוויה מרכזית — שייט בסיריקים בין האי הקיר הגיריים. מרהיב." },
      { name: "מערת Sung Sot", desc: "המערה הגדולה והמרשימה ביותר בהלונג ביי." },
      { name: "Ti Top Island", desc: "אי קטן עם חוף חול לבן ונקודת תצפית מעולה." },
      { name: "קאיאקינג", desc: "הדרך הטובה ביותר להגיע לפינות מוסתרות בין האיים." },
      { name: "כפרי דייגים צפים", desc: "ביקור בקהילות שחיות על הים — חוויה ייחודית." },
    ],
    food: [
      { name: "פירות ים טריים", desc: "הלונג ביי מפורסמת בשרימפס, סרטנים ודגים טריים." },
      { name: "ארוחות על הספינה", desc: "רוב סיורי השייט כוללים ארוחות מפוארות על הסיפון." },
    ],
    accommodation: [
      { type: "סיור לילה אחד", price: "$60-100/אדם", desc: "ספינה בינונית עם ארוחות. מספיק לרוב האנשים." },
      { type: "סיור שני לילות", price: "$120-200/אדם", desc: "מומלץ יותר — רואים אזורים מרוחקים ושקטים יותר." },
      { type: "ספינה מפוארת", price: "$250+/אדם", desc: "Luxury cruise עם חדרים ענקיים ושירות מעולה." },
    ],
    travel_times: [
      { from: "מהאנוי", time: "3.5 שעות", method: "אוטובוס/מיניבוס" },
      { from: "מניין בינה", time: "4 שעות", method: "אוטובוס" },
    ],
    tips: [
      "הזמינו סיור דרך ההוסטל או סוכנות מהימנה באנוי",
      "ספינת 2 לילות עדיפה בהרבה על 1 לילה",
      "הימנעו מסיורים זולים מאוד — איכות הספינה חשובה",
      "קחו תרופות לסחרחורת אם אתם רגישים לים",
      "Cat Ba Island היא חלופה שקטה יותר להלונג",
    ],
  },
  {
    id: "sapa",
    name: "סאפה",
    subtitle: "הרים, ערפל ושדות אורז",
    emoji: "🌾",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    chabad: false,
    description: "סאפה היא עיירה הררית בצפון וייטנאם הגובלת בסין, מפורסמת בשדות האורז המדורגים המדהימים שלה, בשבטים המקומיים הצבעוניים ובנופים שיוצאים מהדעת.",
    areas: [
      {
        name: "מרכז סאפה",
        desc: "העיירה עצמה — מלונות, מסעדות ושוק. רוב המטיילים ישנים כאן.",
        recommended: true,
      },
      {
        name: "Cat Cat Village",
        desc: "כפר של שבט ה-Black Hmong — 20 דקות הליכה ממרכז סאפה.",
        recommended: false,
      },
    ],
    attractions: [
      { name: "שדות אורז מדורגים", desc: "הנוף האייקוני של סאפה — פסגות האורז הירוקות שנמשכות לאינסוף." },
      { name: "Fansipan", desc: "הר הפסגה הגבוה ביותר בוייטנאם (3,143 מ') — טיפוס או רכבל." },
      { name: "טיולי כפרים", desc: "ביקור בכפרי שבטים — Black Hmong, Red Dao ו-Tay." },
      { name: "שוק סאפה", desc: "שוק צבעוני עם בגדי שבטים, תכשיטים ומוצרים מקומיים." },
      { name: "Muong Hoa Valley", desc: "עמק מרהיב עם מסלולי טיול בין כפרים." },
    ],
    food: [
      { name: "Thang Co", desc: "מרק מסורתי של שבטי ה-Hmong עם בשר סוס — לנועזים." },
      { name: "ירקות הרריים", desc: "ירקות טריים שגדלים בגובה — טעם שלא תמצאו במישור." },
      { name: "Salmon", desc: "דגי סלמון מגידול מקומי — מיוחד לאזור סאפה." },
    ],
    accommodation: [
      { type: "תקציב נמוך", price: "$10-20/לילה", desc: "הוסטלים ובתי הארחה פשוטים." },
      { type: "תקציב בינוני", price: "$30-70/לילה", desc: "מלונות עם נוף לשדות האורז — שווה כל שקל." },
      { type: "תקציב גבוה", price: "$100+/לילה", desc: "ריזורטים יוקרתיים עם בריכה ונוף פנורמי." },
    ],
    travel_times: [
      { from: "מהאנוי", time: "5-6 שעות", method: "אוטובוס שינה / רכבת לילה" },
      { from: "מהאנוי", time: "1:30 שעות", method: "מיניבוס מהיר" },
    ],
    tips: [
      "קחו מדריך מקומי לטיולים בין הכפרים — שווה כל שקל",
      "מזג אוויר קר! קחו שכבות גם בקיץ",
      "ינואר-פברואר קר מאוד — עד 0 מעלות",
      "ספטמבר-אוקטובר — שדות האורז ירוקים ביותר",
      "הרכבת הלילה מהאנוי היא חוויה בפני עצמה",
    ],
  },
  {
    id: "ninh-binh",
    name: "ניין בינה",
    subtitle: "הלונג ביי של היבשה",
    emoji: "🗻",
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80",
    chabad: false,
    description: "ניין בינה מכונה 'הלונג ביי של היבשה' — נופים מרהיבים של הרי גיר הזוקפים מתוך שדות אורז ירוקים, ביניהם נהרות שקטים. פחות תיירותי מהלונג ביי אבל לא פחות יפה.",
    areas: [
      { name: "Tam Coc", desc: "האזור הפופולרי ביותר — שייט בסירה בין הרי הגיר.", recommended: true },
      { name: "Trang An", desc: "שמורת טבע ענקית עם מסלולי שייט ומערות. יותר שקט.", recommended: true },
    ],
    attractions: [
      { name: "שייט Tam Coc", desc: "שייט בסירה שחותרת לה לאורך נהר בין הרי גיר ושדות אורז. קסום." },
      { name: "Trang An", desc: "אתר יונסקו — שייט בין מערות ונופים עוצרי נשימה." },
      { name: "Bich Dong Pagoda", desc: "מקדש בתוך מערה — ייחודי ומרשים." },
      { name: "Mua Cave", desc: "נקודת תצפית עם 500 מדרגות — הנוף מלמעלה מדהים." },
    ],
    food: [
      { name: "עז צלויה", desc: "ניין בינה מפורסמת בעז המקומית — מנה חובה." },
      { name: "אורז שרוף", desc: "Com Chay — מאכל מקומי ייחודי לאזור." },
    ],
    accommodation: [
      { type: "תקציב", price: "$15-35/לילה", desc: "גסטהאוסים ומלונות קטנים באזור Tam Coc." },
      { type: "ריזורט", price: "$80-150/לילה", desc: "ריזורטים עם נוף לשדות האורז." },
    ],
    travel_times: [
      { from: "מהאנוי", time: "2 שעות", method: "אוטובוס / מוניות" },
      { from: "מהלונג ביי", time: "4 שעות", method: "אוטובוס" },
    ],
    tips: [
      "שילוב ניין בינה עם הלונג ביי הוא מסלול מנצח",
      "שכרו אופניים לסיור עצמאי באזור — 1-2$",
      "בוקר מוקדם = פחות תיירים בשייט",
    ],
  },
];

export default function NorthVietnamPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-emerald-900/50 to-[#0f1923] text-center">
        <h1 className="text-5xl font-bold mb-4">🏔️ צפון וייטנאם</h1>
        <p className="text-[#f5f0e8]/60 text-lg max-w-2xl mx-auto">
          הרים, ערפל, שדות אורז ואחד מפלאי הטבע של העולם
        </p>
      </div>

      {/* Destinations */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-16">
        {destinations.map((dest) => (
          <div key={dest.id} id={dest.id} className="bg-[#1a2535] rounded-3xl overflow-hidden border border-[#c9a84c]/10">
            {/* Destination Header */}
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
                {/* Attractions */}
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
                  {/* Food */}
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

                  {/* Accommodation */}
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

              {/* Areas */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">📍 אזורי לינה מומלצים</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {dest.areas.map((area) => (
                    <div key={area.name} className={`bg-[#0f1923] rounded-xl p-4 border ${area.recommended ? "border-[#c9a84c]/40" : "border-transparent"}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{area.name}</span>
                        {area.recommended && <span className="text-xs bg-[#c9a84c]/20 text-[#c9a84c] px-2 py-0.5 rounded-full">מומלץ</span>}
                      </div>
                      <div className="text-sm text-[#f5f0e8]/60">{area.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Travel Times */}
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

              {/* Tips */}
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

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 pb-16 flex justify-between">
        <Link href="/destinations" className="text-[#c9a84c] hover:underline">← חזרה לכל היעדים</Link>
        <Link href="/destinations/center" className="text-[#c9a84c] hover:underline">מרכז וייטנאם ←</Link>
      </div>
    </div>
  );
}

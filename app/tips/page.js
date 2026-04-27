import Link from "next/link";

const tipCategories = [
  {
    id: "money",
    title: "כסף ותקציב",
    emoji: "💰",
    tips: [
      { title: "המטבע", desc: "הדונג הוייטנאמי (VND). 1 שקל ≈ 7,000-8,000 דונג. קחו מחשבון בטלפון — המספרים גדולים ומבלבלים." },
      { title: "כספומטים", desc: "זמינים בכל מקום. המשיכה הממוצעת היא 3-5 מיליון דונג. עמלה של 25,000-50,000 דונג לרוב." },
      { title: "כרטיסי אשראי", desc: "מקובלים במלונות ומסעדות גדולות. ברחוב ובשווקים — מזומן בלבד." },
      { title: "מזומן", desc: "קחו מזומן ליעדים קטנים וכפריים. השוק, שרימפס על הרחוב — הכל מזומן." },
      { title: "תקציב יומי", desc: "תקציב נמוך: $25-35/יום | בינוני: $50-80/יום | נוח: $100+/יום" },
      { title: "מיקוח", desc: "בשווקים — תמיד מיקוח. התחל ב-40-50% מהמחיר המוצע ומצא את האמצע." },
    ],
  },
  {
    id: "transport",
    title: "תחבורה",
    emoji: "🛵",
    tips: [
      { title: "Grab", desc: "האפליקציה החיונית ביותר. כמו אובר — אוטו, אופנוע ומונית. מחיר קבוע, בלי מיקוח." },
      { title: "אוטובוסי לילה", desc: "הדרך הכי פופולרית בין ערים. מחיר $10-25. Phuong Trang ו-Hanh Cafe — חברות מהימנות." },
      { title: "טיסות פנימיות", desc: "VietJet, Bamboo, Vietnam Airlines. מומלץ להזמין מראש. $20-60 לרוב הטיסות." },
      { title: "רכבת", desc: "ציורית ואיטית — מצוין לנוף. הרכבת הלילה לסאפה היא חוויה." },
      { title: "שכירת אופנוע", desc: "הדרך הכי חופשית. $5-8/יום. חייבים קסדה ורישיון בינלאומי." },
      { title: "חציית כביש", desc: "לכו לאט ובקצב קבוע — הרכבים יעקפו אתכם. עצרו פתאום ויפגעו בכם." },
    ],
  },
  {
    id: "sim",
    title: "SIM ואינטרנט",
    emoji: "📱",
    tips: [
      { title: "קניית SIM", desc: "קנו SIM בשדה התעופה עם הנחיתה. הכי נוח ומהיר." },
      { title: "Viettel", desc: "הרשת הגדולה ביותר — כיסוי מעולה גם באזורים כפריים. מומלץ לצפון." },
      { title: "Mobifone", desc: "רשת טובה במיוחד בדרום. מחיר דומה ל-Viettel." },
      { title: "עלות", desc: "חבילת גלישה לחודש: כ-150,000-200,000 דונג ($6-8). שפע של גיגות." },
      { title: "eSIM", desc: "אם הטלפון תומך — eSIM מ-Airalo או Holafly נוח יותר. קונים מראש מישראל." },
      { title: "WiFi", desc: "WiFi בכל בית קפה, מסעדה ומלון. וייטנאם מאוד מחוברת." },
    ],
  },
  {
    id: "health",
    title: "בריאות ובטיחות",
    emoji: "🏥",
    tips: [
      { title: "ביטוח נסיעות", desc: "חובה! גם לטיולים בהרים וגם לפעילויות מים. בדקו כיסוי מוטו." },
      { title: "אוכל רחוב", desc: "תתחילו לאט — תנו לבטן להסתגל. אם המקום עמוס — טוב סימן." },
      { title: "מים", desc: "אל תשתו מהברז. מים מינרליים בקבוק — $0.3. קרח במסעדות בד\"כ בטוח." },
      { title: "שמש", desc: "קרם הגנה גבוה, כובע וחולצות שרוול ארוך. השמש כאן חזקה מאוד." },
      { title: "תרופות בסיסיות", desc: "קחו: נגד שלשולים, נגד כאבי ראש, אנטיביוטיקה, חוסם H2 ותרסיס יתושים." },
      { title: "בתי חולים", desc: "בערים הגדולות יש בתי חולים בינלאומיים מצוינים. FV Hospital בסייגון — מומלץ." },
      { title: "יתושים", desc: "הדנגי ומלריה קיימים — תרסיס יתושים חיוני, במיוחד בדלתא ובכפרים." },
    ],
  },
  {
    id: "culture",
    title: "תרבות ומנהגים",
    emoji: "🙏",
    tips: [
      { title: "מקדשים", desc: "כסו כתפיים ורגליים. הורידו נעליים בכניסה. דיברו בשקט." },
      { title: "מחיר לתיירים", desc: "נורמלי לגמרי — תמיד ישאלו מחיר לפני שמזמינים." },
      { title: "תמונות", desc: "תמיד בקשו רשות לפני שמצלמים אנשים, במיוחד בכפרים." },
      { title: "פנים ומשפחה", desc: "וייטנאמים מאוד גאים — הימנעו מביקורת גלויה." },
      { title: "ממה להיזהר", desc: "נהגי שלשת-גלגלים ב-tourist areas — קבעו מחיר מראש. מכירי \"תכשיטים\" ברחוב — הונאה." },
      { title: "ויזה ל-45 יום", desc: "ישראלים נכנסים ל-45 יום ללא ויזה. לאחר מכן — E-Visa או יציאה ממדינה." },
    ],
  },
  {
    id: "packing",
    title: "מה לארוז",
    emoji: "🎒",
    tips: [
      { title: "בגדים", desc: "בגדים קלים ומהירי ייבוש. חולצות שרוול ארוך לשמש ולמקדשים. ג'קט לצפון." },
      { title: "נעליים", desc: "נעלי הליכה קלות + כפכפים. אל תקחו נעלי טיול כבדות." },
      { title: "תרמיל", desc: "40-50 ליטר מספיק לחודש. לוקר על הגב = אוטובוסי לילה נוחים יותר." },
      { title: "מצלמה", desc: "וייטנאם היא מדינה פוטוגנית להפליא — שווה להביא מצלמה טובה." },
      { title: "ממירי מתח", desc: "שקעים בסגנון אמריקאי (שני עגולים/שטוחים). מתאים לרוב הטוענים." },
      { title: "מנעול", desc: "לנעילת תרמיל בהוסטלים ואוטובוסי לילה." },
    ],
  },
];

export default function TipsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-[#1a2535] to-[#0f1923] text-center">
        <p className="text-[#c9a84c] text-sm font-semibold tracking-widest mb-3 uppercase">מדריך למטייל</p>
        <h1 className="text-5xl font-bold mb-4">טיפים פרקטיים</h1>
        <p className="text-[#f5f0e8]/60 text-lg max-w-2xl mx-auto">
          כל מה שצריך לדעת לפני שעולים למטוס — וגם בזמן הטיול
        </p>
      </div>

      {/* Quick Stats */}
      <div className="bg-[#1a2535] py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "עלות ממוצעת יומית", value: "$30-50" },
            { label: "שקל לדונג", value: "≈ 7,500" },
            { label: "ימים ללא ויזה", value: "45" },
            { label: "עלות SIM לחודש", value: "$7" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0f1923] rounded-xl p-5 text-center border border-[#c9a84c]/10">
              <div className="text-3xl font-bold text-[#c9a84c]">{stat.value}</div>
              <div className="text-xs text-[#f5f0e8]/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col gap-12">
        {tipCategories.map((cat) => (
          <div key={cat.id} id={cat.id} className="bg-[#1a2535] rounded-3xl p-8 border border-[#c9a84c]/10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">{cat.emoji}</span>
              <h2 className="text-3xl font-bold">{cat.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.tips.map((tip) => (
                <div key={tip.title} className="bg-[#0f1923] rounded-xl p-5 border border-[#c9a84c]/5">
                  <div className="font-bold text-[#c9a84c] mb-2">{tip.title}</div>
                  <div className="text-sm text-[#f5f0e8]/70 leading-relaxed">{tip.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Numbers */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-red-900/20 border border-red-700/40 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-red-400">🆘 מספרי חירום בוייטנאם</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "משטרה", number: "113" },
              { label: "אמבולנס", number: "115" },
              { label: "כיבוי אש", number: "114" },
            ].map((item) => (
              <div key={item.label} className="bg-[#0f1923] rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-red-400">{item.number}</div>
                <div className="text-sm text-[#f5f0e8]/60 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#f5f0e8]/50 mt-4">
            שגרירות ישראל בהאנוי: +84-24-3843-3140 | קונסוליה בהו צ'י מין: +84-28-3911-3090
          </p>
        </div>
      </div>
    </div>
  );
}

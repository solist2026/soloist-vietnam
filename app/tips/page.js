import Link from "next/link";

const tipCategories = [
  {
    id: "money",
    title: "כסף ותקציב",
    emoji: "💰",
    color: "emerald",
    tips: [
      { title: "המטבע", desc: "הדונג הוייטנאמי (VND). 1 שקל ≈ 7,000-8,000 דונג. קחו מחשבון בטלפון, המספרים גדולים ומבלבלים." },
      { title: "החלפת כסף", desc: "עדיף להחליף דולרים בחנויות זהב (Gold Shops) ולא בבנקים. בהאנוי: 130 Hang Bac Street, שערים מצוינים." },
      { title: "כספומטים", desc: "זמינים בכל מקום. עמלה של 25,000-50,000 דונג לרוב. VPBank ידועה כבעלת עמלות נמוכות." },
      { title: "כרטיסי אשראי", desc: "מקובלים במלונות ומסעדות גדולות. ברחוב, שווקים ואצל ספקי לופ (כמו Happy), מזומן בלבד." },
      { title: "מחירים אמיתיים", desc: "טיסה לשדה תעופה (Grab): ~250K VND | לופ הא גיאנג 3 ימים: ~6M VND | הוסטל זוגי בהאנוי: ~500K VND/לילה" },
      { title: "תקציב יומי", desc: "תקציב נמוך: $25-35/יום | בינוני: $50-80/יום | נוח: $100+/יום" },
      { title: "מיקוח", desc: "בשווקים, תמיד מיקוח. התחל ב-40-50% מהמחיר המוצע ומצא את האמצע." },
    ],
  },
  {
    id: "transport",
    title: "תחבורה",
    emoji: "🛵",
    color: "blue",
    tips: [
      { title: "Grab", desc: "האפליקציה החיונית ביותר. כמו אובר, אוטו, אופנוע ומונית. מחיר קבוע, בלי מיקוח. שדה תעופה להאנוי: ~250,000 VND." },
      { title: "אוטובוסי לילה", desc: "הדרך הכי פופולרית בין ערים. מחיר $10-25. הזמינו דרך אתר Vexere. Giant Ibis מצוין לנסיעה מפנום פן להו צ'י מין." },
      { title: "טיסות פנימיות", desc: "VietJet, Bamboo, Vietnam Airlines. מומלץ להזמין מראש. $20-60 לרוב הטיסות." },
      { title: "רכבת", desc: "ציורית ואיטית, מצוין לנוף. הרכבת הלילה לסאפה היא חוויה. הנסיעה מדונג הוי לדה נאנג היא נופית במיוחד." },
      { title: "שכירת אופנוע", desc: "הדרך הכי חופשית. $5-8/יום. חייבים רישיון בינלאומי, יש מחסומי משטרה בלופ הא גיאנג וקאו בנג'." },
      { title: "חציית כביש", desc: "לכו לאט ובקצב קבוע, הרכבים יעקפו אתכם. עצרו פתאום ויפגעו בכם." },
      { title: "אוטובוס ל-Ba Na Hills", desc: "מדה נאנג: אוטובוס כתום של Futa, חיפוש 'Danabus' בגוגל. 30,000 VND לכל כיוון. אל תיקחו מונית, יקר פי 10." },
    ],
  },
  {
    id: "sim",
    title: "SIM ואינטרנט",
    emoji: "📱",
    color: "violet",
    tips: [
      { title: "קניית SIM", desc: "אל תקנו SIM בשדה התעופה, יקר יותר ולפעמים מטעינים פחות ימים (הונאה). עדיף לקנות בחנות Viettel רשמית בעיר." },
      { title: "Viettel, הכי טובה", desc: "הרשת הטובה ביותר בפער! כיסוי מעולה גם באזורים כפריים כמו הא גיאנג וסאפה. זה מה שמומלץ על ידי מטיילים ישראלים." },
      { title: "Mobifone / Vinaphone", desc: "רשתות נוספות, Mobifone טובה בדרום. פחות מכוסות באזורים הרריים." },
      { title: "עלות", desc: "חבילת גלישה לחודש: כ-150,000-200,000 דונג ($6-8). שפע של גיגות." },
      { title: "eSIM", desc: "הטלפון תומך ב-eSIM? קנו לפני הטיסה מ-Saily או Airalo. יתרון גדול: אינטרנט מהרגע שנחתים, לא צריך לחפש חנות Viettel עייפים מהטיסה." },
      { title: "WiFi", desc: "WiFi בכל בית קפה, מסעדה ומלון. וייטנאם מאוד מחוברת." },
    ],
  },
  {
    id: "health",
    title: "בריאות ובטיחות",
    emoji: "🏥",
    color: "red",
    tips: [
      { title: "ביטוח נסיעות", desc: "חובה מוחלטת. ודאו שהביטוח מכסה: רכיבת אופנוע (מוטו), ספורט אתגרי, ופינוי רפואי. ביטוח ללא כיסוי מוטו = לא שווה כלום בוייטנאם." },
      { title: "אוכל רחוב", desc: "תתחילו לאט, תנו לבטן להסתגל. אם המקום עמוס, טוב סימן." },
      { title: "מים", desc: 'אל תשתו מהברז. מים מינרליים בקבוק, $0.3. קרח במסעדות בד"כ בטוח.' },
      { title: "שמש", desc: "קרם הגנה גבוה, כובע וחולצות שרוול ארוך. השמש כאן חזקה מאוד." },
      { title: "תרופות בסיסיות", desc: "מה לקחת: נגד שלשולים (חיוני), נגד כאבי ראש, אנטיביוטיקה רחבת טווח, תרסיס יתושים, ומשחת קרם לאחר שמש. הכל זמין גם בבתי מרקחת מקומיים בזול." },
      { title: "בתי חולים", desc: "בערים הגדולות יש בתי חולים בינלאומיים מצוינים. FV Hospital בסייגון, מומלץ." },
      { title: "יתושים", desc: "דנגי קיים בוייטנאם, לא מלריה בערים הגדולות, אבל בדלתת מקונג ובכפרים הכפריים, כן. תרסיס יתושים עם DEET הוא חיוני. שימו לב בשעות הערב." },
    ],
  },
  {
    id: "culture",
    title: "תרבות ומנהגים",
    emoji: "🙏",
    color: "amber",
    tips: [
      { title: "מקדשים", desc: "כסו כתפיים ורגליים. הורידו נעליים בכניסה. דיברו בשקט." },
      { title: "מחיר לתיירים", desc: "נורמלי לגמרי, וייטנאמים יתמחרו אתכם יותר, זה חלק מהמשחק. תמיד שאלו מחיר לפני ושאלו שוב אם נראה מוגזם. Grab פותר את זה לגמרי לתחבורה." },
      { title: "תמונות", desc: "תמיד בקשו רשות לפני שמצלמים אנשים, במיוחד בכפרים." },
      { title: "פנים ומשפחה", desc: "וייטנאמים מאוד גאים, הימנעו מביקורת גלויה." },
      { title: "ממה להיזהר", desc: "SIM בשדה תעופה, לעיתים מטעינים פחות ימים. מוניות ללא Grab, תמחור תיירים. מכירי \"תכשיטים\" ברחוב, הונאה." },
      { title: "רכיבה עצמאית בלופ, רישיון חובה", desc: "אם רוכבים עצמאית בלופ הא גיאנג או קאו בנג', חייב רישיון בינלאומי. יש מחסומי משטרה שבודקים." },
      { title: "ויזה לוייטנאם", desc: "ישראלים חייבים ויזה, E-Visa אונליין. כניסה אחת $25, כניסות מרובות $50. תוקף 90 יום. הגישו לפחות שבוע לפני הטיסה." },
    ],
  },
  {
    id: "packing",
    title: "מה לארוז",
    emoji: "🎒",
    color: "orange",
    tips: [
      { title: "בגדים", desc: "בגדים קלים ומהירי ייבוש. חולצות שרוול ארוך לשמש ולמקדשים. ג'קט לצפון." },
      { title: "נעליים", desc: "נעלי הליכה קלות + כפכפים. אל תקחו נעלי טיול כבדות." },
      { title: "תרמיל", desc: "40-50 ליטר מספיק לחודש. לוקר על הגב = אוטובוסי לילה נוחים יותר." },
      { title: "מצלמה", desc: "וייטנאם היא מדינה פוטוגנית להפליא, שווה להביא מצלמה טובה." },
      { title: "שקעים וחשמל", desc: "וייטנאם: 220V. שקעים מסוג A (שני שטוחים) ומסוג C (שני עגולים). רוב מטעני הטלפון והמחשב עובדים ישירות, בדקו שהטוען שלכם תומך 100-240V." },
      { title: "מנעול", desc: "לנעילת תרמיל בהוסטלים ואוטובוסי לילה." },
    ],
  },
];

const colorMap = {
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-400", tab: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",    text: "text-blue-700",    dot: "bg-blue-400",    tab: "bg-blue-50 text-blue-700 border-blue-200" },
  violet:  { bg: "bg-violet-50",  border: "border-violet-200",  text: "text-violet-700",  dot: "bg-violet-400",  tab: "bg-violet-50 text-violet-700 border-violet-200" },
  red:     { bg: "bg-red-50",     border: "border-red-200",     text: "text-red-700",     dot: "bg-red-400",     tab: "bg-red-50 text-red-700 border-red-200" },
  amber:   { bg: "bg-amber-50",   border: "border-amber-200",   text: "text-amber-700",   dot: "bg-amber-400",   tab: "bg-amber-50 text-amber-700 border-amber-200" },
  orange:  { bg: "bg-orange-50",  border: "border-orange-200",  text: "text-orange-700",  dot: "bg-orange-400",  tab: "bg-orange-50 text-orange-700 border-orange-200" },
};

export default function TipsPage() {
  return (
    <div className="inner-page min-h-screen pt-[88px]">

      {/* Header */}
      <div className="py-14 md:py-20 text-center px-4">
        <p className="text-orange-500 text-xs font-bold tracking-widest mb-3 uppercase">מדריך למטייל</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#1A2535] mb-4">טיפים פרקטיים</h1>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          כל מה שצריך לדעת לפני שעולים למטוס, וגם בזמן הטיול
        </p>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-y border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "עלות ממוצעת יומית", value: "$30-50", icon: "💵" },
            { label: "שקל לדונג", value: "≈ 7,500", icon: "💱" },
            { label: "E-Visa (כניסה אחת)", value: "$25", icon: "🛂" },
            { label: "עלות SIM לחודש", value: "$7", icon: "📱" },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100 hover:border-orange-200 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-xl font-black text-orange-500">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky category nav */}
      <div className="sticky top-[88px] z-20 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1.5 overflow-x-auto py-3 scrollbar-hide">
            {tipCategories.map((cat) => {
              const c = colorMap[cat.color];
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-colors flex-shrink-0 ${c.tab} hover:opacity-80`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tips Categories */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-10">
        {tipCategories.map((cat) => {
          const c = colorMap[cat.color];
          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-36">
              {/* Section header */}
              <div className={`flex items-center gap-4 mb-5 pb-4 border-b-2 ${c.border}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${c.bg} ${c.border} border`}>
                  {cat.emoji}
                </div>
                <div>
                  <h2 className={`text-xl font-black ${c.text}`}>{cat.title}</h2>
                  <p className="text-xs text-slate-400">{cat.tips.length} טיפים</p>
                </div>
              </div>

              {/* Tip cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.tips.map((tip) => (
                  <div key={tip.title} className={`bg-white rounded-2xl p-5 border ${c.border} hover:shadow-md transition-all group`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${c.dot}`} />
                      <div>
                        <div className={`font-bold text-sm mb-1.5 ${c.text}`}>{tip.title}</div>
                        <div className="text-sm text-slate-600 leading-relaxed">{tip.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Emergency Numbers */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-red-700 mb-6">🆘 מספרי חירום בוייטנאם</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { label: "משטרה", number: "113", icon: "🚔" },
              { label: "אמבולנס", number: "115", icon: "🚑" },
              { label: "כיבוי אש", number: "114", icon: "🚒" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 text-center border border-red-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-3xl font-black text-red-500">{item.number}</div>
                <div className="text-sm text-slate-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-4 border border-red-100 text-sm text-slate-600">
            <div className="font-bold text-[#1A2535] mb-2">שגרירות ישראל בוייטנאם</div>
            <div className="flex flex-col sm:flex-row gap-3">
              <span>🏢 האנוי: +84-24-3843-3140</span>
              <span>🏢 הו צ'י מין: +84-28-3911-3090</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

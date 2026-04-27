import Link from "next/link";

const faqs = [
  {
    category: "לפני הטיסה",
    emoji: "✈️",
    questions: [
      { q: "האם ישראלים צריכים ויזה לוייטנאם?", a: "כן! ישראל אינה פטורה מויזה. הפתרון הקל: E-Visa אונליין לפני הטיסה — $25 לכניסה אחת או $50 לכניסות מרובות. תוקף 90 יום. הגישו לפחות שבוע מראש. זמן עיבוד: 4-5 ימי עסקים." },
      { q: "מתי הכי כדאי לטוס לוייטנאם?", a: "עונה יבשה שונה בין האזורים. צפון: אוקטובר-אפריל. מרכז: פברואר-אוגוסט. דרום: נובמבר-אפריל. נובמבר-ינואר הוא הזמן הכי טוב לסיור כולל." },
      { q: "כמה כסף לקחת לוייטנאם?", a: "תקציב יומי ממוצע: $30-50 לטיול חסכוני, $60-100 לטיול נוח. מחירים אמיתיים: Grab משדה תעופה האנוי ~250K VND. לופ הא גיאנג 3 ימים ~6M VND. חדר זוגי בהוסטל באנוי ~500K VND." },
      { q: "האם וייטנאם בטוחה למטיילים ישראלים?", a: "כן מאוד! וייטנאם נחשבת לאחת המדינות הבטוחות ביותר בדרום-מזרח אסיה. פשיעה כלפי תיירים נדירה. שמרו על חפצים בשווקים. לא מומלץ לעבור דרך סין עם דרכון ישראלי." },
    ],
  },
  {
    category: "תחבורה ותנועה",
    emoji: "🚌",
    questions: [
      { q: "מה הדרך הכי טובה לנסוע בין ערים?", a: "אוטובוסי לילה (Sleeper Bus) הם הפופולריים ביותר — זולים, נוחים יחסית וחוסכים לינה. הזמינו דרך אתר Vexere. לטווחים ארוכים — טיסות פנימיות שוות כל שקל." },
      { q: "האם כדאי לשכור אופנוע?", a: "כן! זו אחת מהחוויות הכי טובות. עלות $5-8/יום. חייבים קסדה ורישיון בינלאומי. שימו לב: בלופ הא גיאנג וקאו בנג' יש מחסומי משטרה — חייב רישיון בינלאומי." },
      { q: "מה זה לופ הא גיאנג ואיך מארגנים?", a: "לופ הא גיאנג הוא מסע אופנועים 3-5 ימים בנופים ההרריים המדהימים של צפון וייטנאם. הספקים הכי מומלצים על ידי ישראלים: Happy (האפי) ו-Kai (קאי). תקציב: ~6 מיליון VND ל-3 ימים הכולל נהג, לינה ואוכל. הזמינו לפחות שבוע מראש." },
      { q: "איך להתמודד עם מוניות ופיקוחים?", a: "השתמשו ב-Grab בלבד! מונית רגילה בלי מד תעשה לכם מחיר תיירות. Grab — מחיר קבוע, אמין ונוח. שדה תעופה האנוי לעיר: ~250,000 VND." },
      { q: "כמה זמן נסיעה בין האנוי להו צ'י מין?", a: "ברכבת: 32-35 שעות. באוטובוס: 38+ שעות. בטיסה: 2 שעות. ממש מומלץ לטוס!" },
    ],
  },
  {
    category: "אוכל ושתייה",
    emoji: "🍜",
    questions: [
      { q: "האם האוכל הוייטנאמי מתאים לישראלים?", a: "בהחלט! האוכל הוייטנאמי לא חריף מאוד, מגוון ובריא. יש שפע של אופציות לצמחונים. רגישות לגלוטן — יש אורז אבל גם חיטה בכמה מנות." },
      { q: "האם אפשר למצוא אוכל כשר בוייטנאם?", a: "בבתי חב\"ד! בהאנוי ובהו צ'י מין יש בתי חב\"ד עם ארוחות כשרות. מחוצה להם — קשה, אבל פירות, ירקות ואורז זמינים בכל מקום." },
      { q: "מה חובה לאכול בוייטנאם?", a: "פו (Pho), Bun Cha, Banh Mi, White Rose Dumplings בהוי אן, Com Tam בסייגון, ביצת קאפה באנוי. כל אחד מאזור אחר." },
      { q: "האם האוכל ברחוב בטוח?", a: "כן, אבל תתחילו לאט. בחרו דוכנים עמוסים — סימן שהאוכל טרי. הימנעו מסלטים שטופים במים לא מטוהרים. שבוע ראשון — היו זהירים." },
    ],
  },
  {
    category: "קהילה ישראלית",
    emoji: "🇮🇱",
    questions: [
      { q: "יש קהילה ישראלית גדולה בוייטנאם?", a: "כן! וייטנאם מאוד פופולרית בקרב ישראלים. בעיקר ב-Old Quarter האנוי, Bui Vien בסייגון ובהוי אן. תמיד תפגשו ישראלים. פעיל גם לופ הא גיאנג — מאות ישראלים בשנה." },
      { q: "איפה בתי חב\"ד בוייטנאם?", a: "בית חב\"ד בהאנוי (Old Quarter) — WhatsApp: +84-83-872-8225 | jewishhanoi.com. בית חב\"ד בהו צ'י מין (District 1) — אחד הגדולים בדרום-מזרח אסיה. יש גם בסאפה ובהוי אן." },
      { q: "מה זה הבית הישראלי (Israeli House) בהוי אן?", a: "בית ישראלי בהוי אן מארגן ארוחות שישי בלילה — 300,000 VND לאדם, ידידותי ל-vegan/צמחוני. יצרו קשר עם דודי: +972-544-802424 (WhatsApp). כתובת: 2 Ly Thai To St, הוי אן." },
      { q: "מה לעשות אם יש בעיה / מצוקה בוייטנאם?", a: "בית חב\"ד הוא מקום ראשון לפנות (+84-83-872-8225 בהאנוי). גם שגרירות ישראל בהאנוי (+84-24-3843-3140) ועם ישראל לקונסוליה בסייגון (+84-28-3911-3090)." },
    ],
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-[#1a2535] to-[#0f1923] text-center">
        <p className="text-[#c9a84c] text-sm font-semibold tracking-widest mb-3 uppercase">קהילת מטיילים</p>
        <h1 className="text-5xl font-bold mb-4">קהילה ושאלות ותשובות</h1>
        <p className="text-[#f5f0e8]/60 text-lg max-w-2xl mx-auto">
          שאלות נפוצות, עצות מניסיון וקהילת ישראלים שטיילו בוייטנאם
        </p>
      </div>

      {/* Stats */}
      <div className="bg-[#1a2535] py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "מטיילים ישראלים בשנה", value: "50K+" },
            { label: "שאלות שנענו", value: "500+" },
            { label: "חברי קהילה", value: "2,000+" },
            { label: "בתי חב\"ד", value: "4+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0f1923] rounded-xl p-5 text-center border border-[#c9a84c]/10">
              <div className="text-3xl font-bold text-[#c9a84c]">{stat.value}</div>
              <div className="text-xs text-[#f5f0e8]/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-10">
        {faqs.map((cat) => (
          <div key={cat.category} className="bg-[#1a2535] rounded-3xl p-8 border border-[#c9a84c]/10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{cat.emoji}</span>
              <h2 className="text-2xl font-bold">{cat.category}</h2>
            </div>
            <div className="flex flex-col gap-4">
              {cat.questions.map((item) => (
                <div key={item.q} className="bg-[#0f1923] rounded-xl p-6">
                  <h3 className="font-bold text-[#c9a84c] mb-3">❓ {item.q}</h3>
                  <p className="text-[#f5f0e8]/70 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Ask Question CTA */}
        <div className="bg-gradient-to-br from-[#1a2535] to-[#0f1923] rounded-3xl p-10 text-center border border-[#c9a84c]/20">
          <div className="text-5xl mb-4">💬</div>
          <h2 className="text-3xl font-bold mb-4">יש לך שאלה שלא נענתה?</h2>
          <p className="text-[#f5f0e8]/60 mb-8 max-w-md mx-auto">
            הצטרף לקהילת הישראלים בוייטנאם ושאל הכל — מסלולים, מחירים, עצות ועוד
          </p>
          <div className="flex flex-col gap-4 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="מה השאלה שלך?"
              className="w-full bg-[#0f1923] border border-[#c9a84c]/30 rounded-full px-6 py-4 text-right focus:outline-none focus:border-[#c9a84c]"
            />
            <input
              type="email"
              placeholder="המייל שלך"
              className="w-full bg-[#0f1923] border border-[#c9a84c]/30 rounded-full px-6 py-4 text-right focus:outline-none focus:border-[#c9a84c]"
            />
            <button className="bg-[#c9a84c] text-[#0f1923] px-8 py-4 rounded-full font-bold hover:bg-[#b8963d] transition-colors">
              שלח שאלה
            </button>
          </div>
        </div>

        {/* Chabad Houses */}
        <div className="bg-blue-900/20 border border-blue-700/30 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">✡️ בתי חב"ד בוייטנאם</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                city: "האנוי",
                address: "Old Quarter, Hanoi",
                phone: "+84-83-872-8225 (WhatsApp)",
                notes: "פעיל בשישי ושבת, ארוחות, מידע לתיירים | jewishhanoi.com",
              },
              {
                city: "הו צ'י מין (סייגון)",
                address: "District 1, Ho Chi Minh City",
                phone: "+84-28-3911-3090",
                notes: "הגדול ביותר בדרום-מזרח אסיה, ארוחות כשרות, חגים",
              },
              {
                city: "סאפה",
                address: "Sapa Town",
                phone: "דרך WhatsApp",
                notes: "ארוחות שישי ושבת, פעיל עבור מטיילים בצפון",
              },
              {
                city: "הוי אן",
                address: "קרוב למרכז העיר העתיקה",
                phone: "דרך WhatsApp",
                notes: "פעיל בשישי ושבת. בנוסף: Israeli House — דודי +972-544-802424",
              },
            ].map((ch) => (
              <div key={ch.city} className="bg-[#0f1923] rounded-xl p-6">
                <h3 className="font-bold text-blue-300 text-lg mb-3">בית חב"ד {ch.city}</h3>
                <div className="flex flex-col gap-2 text-sm text-[#f5f0e8]/60">
                  <div>📍 {ch.address}</div>
                  <div>📞 {ch.phone}</div>
                  <div>ℹ️ {ch.notes}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

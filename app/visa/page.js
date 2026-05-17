import Link from "next/link";

const steps = [
  { step: "1", title: "כנסו לאתר הרשמי", desc: 'evisa.xuatnhapcanh.gov.vn — האתר הממשלתי הרשמי. אל תשתמשו באתרים אחרים, הם גובים עמלות מיותרות.' },
  { step: "2", title: "מלאו את הטופס", desc: "שם מלא (כבדרכון), אזרחות, תאריך לידה, תאריכי כניסה ויציאה, מטרת ביקור (Tourism), נמל כניסה וכתובת מלון ראשון." },
  { step: "3", title: "העלאת מסמכים", desc: "תמונת פספורט (JPG, רקע לבן, עד 1MB) + עמוד הדרכון (JPG/PDF, עד 2MB). ודאו שהכל קריא וברור." },
  { step: "4", title: "תשלום", desc: "$25 לכניסה אחת / $50 לכניסות מרובות. שמרו את אישור התשלום." },
  { step: "5", title: "המתנה לאישור", desc: "3-5 ימי עסקים לרוב. הויזה תישלח לאימייל כקובץ PDF. בדקו ספאם." },
  { step: "6", title: "הדפסה חובה", desc: "הדפיסו את הויזה לפני הטיסה — חייבים עותק מודפס בגבול." },
];

export default function VisaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-[#1a2535] to-[#0f1923] text-center">
        <div className="inline-block bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
          ⚠️ ישראלים חייבים ויזה לוייטנאם
        </div>
        <p className="text-[#c9a84c] text-sm font-semibold tracking-widest mb-3 uppercase">מידע רשמי ועדכני — 2026</p>
        <h1 className="text-5xl font-bold mb-4">ויזה לוייטנאם</h1>
        <p className="text-[#f5f0e8]/60 text-lg max-w-2xl mx-auto">
          כל מה שצריך לדעת על E-Visa — מחירים, מסמכים, שלבים ועצות מהשטח
        </p>
      </div>

      {/* Quick Stats */}
      <div className="bg-[#1a2535] py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "כניסה אחת", value: "$25" },
            { label: "כניסות מרובות", value: "$50" },
            { label: "זמן עיבוד", value: "3-5 ימים" },
            { label: "תוקף הויזה", value: "90 יום" },
          ].map((item) => (
            <div key={item.label} className="bg-[#0f1923] rounded-xl p-5 text-center border border-[#c9a84c]/10">
              <div className="text-3xl font-bold text-[#c9a84c]">{item.value}</div>
              <div className="text-xs text-[#f5f0e8]/50 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-10">

        {/* Main warning */}
        <div className="bg-amber-900/20 border border-amber-600/40 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-4xl">⚠️</span>
            <h2 className="text-2xl font-bold text-amber-400">ישראל אינה פטורה מויזה</h2>
          </div>
          <p className="text-[#f5f0e8]/80 leading-relaxed mb-6">
            ישראל <strong className="text-amber-400">אינה</strong> ברשימת המדינות הפטורות מויזה לוייטנאם.
            הפתרון הקל הוא <strong className="text-[#c9a84c]">E-Visa אלקטרונית</strong> — מגישים אונליין לפני הטיסה,
            ללא ביקור בשגרירות, ותוך ימים ספורים. הדרכון חייב להיות בתוקף לפחות <strong>6 חודשים</strong> מיום הכניסה.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0f1923] rounded-2xl p-5 border border-[#c9a84c]/20">
              <div className="text-2xl font-bold text-[#c9a84c] mb-1">$25 <span className="text-base font-normal text-[#f5f0e8]/40">≈ ₪169</span></div>
              <div className="font-bold text-sm mb-1">כניסה אחת — Single Entry</div>
              <div className="text-xs text-[#f5f0e8]/50">מומלץ אם לא יוצאים מוייטנאם לאורך הטיול</div>
            </div>
            <div className="bg-[#0f1923] rounded-2xl p-5 border border-[#c9a84c]/20">
              <div className="text-2xl font-bold text-[#c9a84c] mb-1">$50 <span className="text-base font-normal text-[#f5f0e8]/40">≈ ₪339</span></div>
              <div className="font-bold text-sm mb-1">כניסות מרובות — Multiple Entry</div>
              <div className="text-xs text-[#f5f0e8]/50">מומלץ אם יוצאים לקמבודיה/תאילנד וחוזרים</div>
            </div>
          </div>
        </div>

        {/* What you need */}
        <div className="bg-[#1a2535] border border-[#c9a84c]/20 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📋</span>
            <h2 className="text-2xl font-bold">מה צריך להכין לפני הגשה</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: "🛂", text: "דרכון ישראלי בתוקף — לפחות 6 חודשים קדימה מיום הכניסה" },
              { icon: "📸", text: "תמונת פנים דיגיטלית — רקע לבן, JPG, עד 1MB, פנים ברורות" },
              { icon: "📄", text: "צילום עמוד הדרכון — ברור, ללא חתכים, JPG או PDF, עד 2MB" },
              { icon: "📅", text: "תאריך כניסה ויציאה מדויק — תואם לטיסות שלכם" },
              { icon: "🏨", text: "כתובת מלון ראשון בוייטנאם (ניתן להשתמש בכתובת בית חב\"ד)" },
              { icon: "🚪", text: "נמל כניסה — בחרו מתוך 83 אפשרויות (שדה תעופה / יבשה / ים)" },
              { icon: "💳", text: "כרטיס אשראי לתשלום ($25 או $50)" },
            ].map((item) => (
              <div key={item.text} className="bg-[#0f1923] rounded-xl px-4 py-3 flex items-start gap-3 text-sm">
                <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                <span className="text-[#f5f0e8]/70">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step by step */}
        <div className="bg-[#1a2535] border border-[#c9a84c]/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🌐</span>
            <h2 className="text-2xl font-bold">איך מגישים E-Visa — שלב אחרי שלב</h2>
          </div>
          <div className="flex flex-col gap-3">
            {steps.map((item) => (
              <div key={item.step} className="bg-[#0f1923] rounded-xl p-5 flex gap-4">
                <div className="w-9 h-9 bg-[#c9a84c] text-[#0f1923] rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-bold mb-1">{item.title}</div>
                  <div className="text-sm text-[#f5f0e8]/60 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#0f1923] border border-[#c9a84c]/20 rounded-xl p-4 text-center">
            <p className="text-sm text-[#f5f0e8]/60 mb-2">האתר הרשמי להגשה עצמאית</p>
            <p className="font-bold text-[#c9a84c] text-sm">evisa.xuatnhapcanh.gov.vn</p>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-amber-900/20 border border-amber-600/40 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">💡</span>
            <h2 className="text-2xl font-bold text-amber-400">טיפים חשובים מהשטח</h2>
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { bold: "הגישו לפחות 7-10 ימים לפני הטיסה", rest: " — זמן עיבוד 3-5 ימי עסקים, לפעמים יותר." },
              { bold: "Single Entry: יציאה מוייטנאם = ויזה חדשה", rest: " — אם אתם מתכננים לצאת לקמבודיה/לאוס ולחזור, קחו Multiple Entry ($50) מראש." },
              { bold: "אי אפשר לשנות אחרי הגשה", rest: " — שינוי תאריך, נמל, או שם מחייב פתיחת בקשה חדשה לחלוטין." },
              { bold: "תשלום נכשל = בקשה חדשה", rest: " — אם כרטיס האשראי נדחה, אי אפשר לנסות שוב על אותה בקשה." },
              { bold: "כתובת מלון בטופס", rest: " — ניתן להכניס כתובת בית חב\"ד — מאושר על ידי מטיילים רבים." },
              { bold: "אתרים פרטיים = הונאה", rest: " — גובים $50-200 על שירות שעולה $25 באתר הרשמי." },
              { bold: "לא כדאי לעבור דרך סין", rest: " — עם דרכון ישראלי, לא מומלץ לעבור דרך סין." },
            ].map((item) => (
              <li key={item.bold} className="flex items-start gap-3 text-sm text-[#f5f0e8]/70">
                <span className="text-amber-400 flex-shrink-0 mt-0.5 text-base">•</span>
                <span><strong className="text-[#f5f0e8]/90">{item.bold}</strong>{item.rest}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visa on Arrival */}
        <div className="bg-[#1a2535] border border-[#c9a84c]/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">✈️</span>
            <h2 className="text-2xl font-bold">Visa on Arrival</h2>
          </div>
          <p className="text-[#f5f0e8]/70 leading-relaxed mb-5 text-sm">
            ניתן לקבל ויזה עם הנחיתה — אך <strong className="text-[#c9a84c]">רק בשדות תעופה בינלאומיים</strong> (לא במעברי יבשה).
            מחייב קבלת Approval Letter מראש מסוכן מורשה, תורים ארוכים בגבול, ועלות גבוהה יותר.
            <strong className="text-[#f5f0e8]/90"> E-Visa עדיפה בכל פרמטר.</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0f1923] rounded-xl p-5">
              <h4 className="font-bold text-green-400 mb-3">יתרונות</h4>
              <ul className="text-sm text-[#f5f0e8]/60 flex flex-col gap-1.5">
                <li>• לא צריך להגיש לפני הטיסה</li>
                <li>• זמין לכניסות מרובות</li>
              </ul>
            </div>
            <div className="bg-[#0f1923] rounded-xl p-5">
              <h4 className="font-bold text-red-400 mb-3">חסרונות</h4>
              <ul className="text-sm text-[#f5f0e8]/60 flex flex-col gap-1.5">
                <li>• צריך סוכן מורשה לפני הטיסה</li>
                <li>• תורים ארוכים בשדה התעופה</li>
                <li>• עלות גבוהה יותר</li>
                <li>• לא זמין במעברי יבשה</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visa run */}
        <div className="bg-[#1a2535] border border-[#c9a84c]/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">📅</span>
            <h2 className="text-2xl font-bold">הארכת שהייה ו-Visa Run</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-[#c9a84c] mb-2">הארכת E-Visa מבפנים</h3>
              <p className="text-[#f5f0e8]/60 leading-relaxed">
                הארכה בתוך וייטנאם מצריכה ערבות מגורם מוסמך — מסובך ולא מומלץ.
                הפתרון הפשוט: לצאת מהמדינה ולהגיש E-Visa חדשה אונליין לפני החזרה.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#c9a84c] mb-2">Visa Run</h3>
              <p className="text-[#f5f0e8]/60 leading-relaxed">
                יציאה קצרה לקמבודיה (מוק ביי) או לאוס (לאו באו) וחזרה עם E-Visa חדשה.
                עלות כוללת: $60-120 כולל הסעות. הגישו E-Visa חדשה לפחות שבוע מראש.
              </p>
            </div>
          </div>
        </div>

        {/* CTA — Apply through us */}
        <div className="bg-gradient-to-br from-[#1a2535] via-[#1e2d42] to-[#0f1923] border-2 border-[#c9a84c]/30 rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#c9a84c]/3 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-block bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              שירות פרמיום בעברית
            </div>
            <h2 className="text-3xl font-bold mb-3">רוצים שנטפל בהכל בשבילכם?</h2>
            <p className="text-[#f5f0e8]/60 leading-relaxed max-w-lg mx-auto mb-6 text-sm">
              צוות סוליסט ידאג לכל הבירוקרטיה — מלאו פרטים פעם אחת, ואנחנו נגיש, נבדוק ונשלח לכם ויזה מאושרת לתיבת המייל.
              ללא כניסה לאתרים ממשלתיים, ללא טעויות, ללא כאב ראש.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
              {[
                { icon: "✅", text: "ויזה מאושרת ישירות למייל" },
                { icon: "🔍", text: "בדיקת מסמכים לפני הגשה" },
                { icon: "⚡", text: "אפשרות עיבוד אקספרס" },
                { icon: "🇮🇱", text: "תמיכה בעברית" },
              ].map(item => (
                <span key={item.text} className="flex items-center gap-1.5 text-[#f5f0e8]/60">
                  <span className="text-[#c9a84c]">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/visa/apply"
                className="bg-[#c9a84c] text-[#0f1923] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#b8963d] transition-colors inline-block"
              >
                הגש ויזה דרכנו ←
              </Link>
              <a
                href="mailto:soloistour@gmail.com"
                className="border border-[#c9a84c]/50 text-[#c9a84c] px-8 py-4 rounded-full font-semibold hover:bg-[#c9a84c]/10 transition-colors inline-block"
              >
                ✉️ שאלות — כתבו לנו
              </a>
            </div>
            <p className="text-xs text-[#f5f0e8]/30 mt-4">החל מ-₪169 כולל דמי שירות • ויזה אחת לכניסה</p>
          </div>
        </div>

      </div>
    </div>
  );
}

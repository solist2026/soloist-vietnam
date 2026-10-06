import Link from "next/link";

const steps = [
  { step: "1", title: "כנסו לאתר הרשמי", desc: 'evisa.xuatnhapcanh.gov.vn, האתר הממשלתי הרשמי בלבד. כל אתר אחר שמציע ויזה לוייטנאם הוא מתווך שגובה עמלה מיותרת, לפעמים כפול המחיר.' },
  { step: "2", title: "מלאו את הטופס", desc: "שם מלא בדיוק כבדרכון (שגיאת כתיב = ויזה לא תקינה!), אזרחות ישראלית, תאריך לידה, תאריכי כניסה ויציאה, מטרת ביקור: Tourism, נמל כניסה וכתובת מלון ראשון." },
  { step: "3", title: "העלאת מסמכים", desc: "תמונת פנים (JPG, רקע לבן, ברור, עד 1MB) + צילום עמוד הדרכון (JPG או PDF, ללא חתכים, עד 2MB). תמונה לא ברורה = ויזה נדחית." },
  { step: "4", title: "תשלום", desc: "$25 כניסה אחת / $50 כניסות מרובות. שמרו את אישור התשלום, תצטרכו אותו. תשלום כרטיס נכשל? אי אפשר לנסות על אותה בקשה, פתחו חדשה." },
  { step: "5", title: "המתנה לאישור", desc: "3-5 ימי עסקים לרוב. הוויזה מגיעה לאימייל כקובץ PDF. בדקו ספאם. קיבלתם? בדקו שהשם, מספר הדרכון והתאריכים נכונים לפני שדוחים את ה-PDF." },
  { step: "6", title: "הדפסה, חובה!", desc: "הדפיסו את הוויזה לפני הטיסה. בגבול דורשים עותק מודפס, PDF בטלפון לא מספיק. אם אין מדפסת, כל חנות קסרוקס בשדה תוכל להדפיס." },
];

export default function VisaPage() {
  return (
    <div className="inner-page min-h-screen pt-[88px]">

      {/* Header */}
      <div className="py-14 md:py-20 text-center px-4">
        <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
          ⚠️ ישראלים חייבים ויזה לוייטנאם
        </div>
        <p className="text-orange-500 text-xs font-bold tracking-widest mb-3 uppercase">מידע רשמי ועדכני, 2026</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#1A2535] mb-4">ויזה לוייטנאם</h1>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          כל מה שצריך לדעת על E-Visa, מחירים, מסמכים, שלבים ועצות מהשטח
        </p>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-y border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "כניסה אחת", value: "$25" },
            { label: "כניסות מרובות", value: "$50" },
            { label: "זמן עיבוד", value: "3-5 ימים" },
            { label: "תוקף הויזה", value: "90 יום" },
          ].map((item) => (
            <div key={item.label} className="bg-[#F2F1EB] rounded-xl p-5 text-center border border-[#E5E4DC]">
              <div className="text-2xl font-black text-orange-500">{item.value}</div>
              <div className="text-xs text-slate-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-8">

        {/* Main warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-4xl">⚠️</span>
            <h2 className="text-2xl font-bold text-amber-800">ישראל אינה פטורה מויזה</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            ישראל <strong className="text-amber-800">אינה</strong> ברשימת המדינות הפטורות מויזה לוייטנאם.
            הפתרון הקל הוא <strong className="text-[#1A2535]">E-Visa אלקטרונית</strong>, מגישים אונליין לפני הטיסה,
            ללא ביקור בשגרירות, ותוך ימים ספורים. הדרכון חייב להיות בתוקף לפחות <strong>6 חודשים</strong> מיום הכניסה.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-amber-100">
              <div className="text-2xl font-black text-orange-500 mb-1">$25 <span className="text-base font-normal text-slate-400">≈ ₪169</span></div>
              <div className="font-bold text-sm text-[#1A2535] mb-1">כניסה אחת, Single Entry</div>
              <div className="text-xs text-slate-500">מומלץ אם לא יוצאים מוייטנאם לאורך הטיול</div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-amber-100">
              <div className="text-2xl font-black text-orange-500 mb-1">$50 <span className="text-base font-normal text-slate-400">≈ ₪339</span></div>
              <div className="font-bold text-sm text-[#1A2535] mb-1">כניסות מרובות, Multiple Entry</div>
              <div className="text-xs text-slate-500">מומלץ אם יוצאים לקמבודיה/תאילנד וחוזרים</div>
            </div>
          </div>
        </div>

        {/* What you need */}
        <div className="bg-[#F2F1EB] border border-[#E5E4DC] shadow-sm rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📋</span>
            <h2 className="text-2xl font-bold text-[#1A2535]">מה צריך להכין לפני הגשה</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: "🛂", text: "דרכון ישראלי בתוקף, לפחות 6 חודשים קדימה מיום הכניסה" },
              { icon: "📸", text: "תמונת פנים דיגיטלית, רקע לבן, JPG, עד 1MB, פנים ברורות" },
              { icon: "📄", text: "צילום עמוד הדרכון, ברור, ללא חתכים, JPG או PDF, עד 2MB" },
              { icon: "📅", text: "תאריך כניסה ויציאה מדויק, תואם לטיסות שלכם" },
              { icon: "🏨", text: 'כתובת מלון ראשון בוייטנאם (ניתן להשתמש בכתובת בית חב"ד)' },
              { icon: "🚪", text: "נמל כניסה, בחרו מתוך 83 אפשרויות (שדה תעופה / יבשה / ים)" },
              { icon: "💳", text: "כרטיס אשראי לתשלום ($25 או $50)" },
            ].map((item) => (
              <div key={item.text} className="bg-white rounded-xl px-4 py-3 flex items-start gap-3 text-sm border border-[#E5E4DC]">
                <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                <span className="text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step by step */}
        <div className="bg-[#F2F1EB] border border-[#E5E4DC] shadow-sm rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🌐</span>
            <h2 className="text-2xl font-bold text-[#1A2535]">איך מגישים E-Visa, שלב אחרי שלב</h2>
          </div>
          <div className="flex flex-col gap-3">
            {steps.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-5 flex gap-4 border border-[#E5E4DC]">
                <div className="w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-bold text-[#1A2535] mb-1">{item.title}</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-white border border-[#E5E4DC] rounded-xl p-4 text-center">
            <p className="text-sm text-slate-500 mb-1">האתר הרשמי להגשה עצמאית</p>
            <p className="font-bold text-[#1A2535] text-sm">evisa.xuatnhapcanh.gov.vn</p>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">💡</span>
            <h2 className="text-2xl font-bold text-amber-800">טיפים חשובים מהשטח</h2>
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { bold: "הגישו לפחות 7-10 ימים לפני הטיסה", rest: ", זמן עיבוד 3-5 ימי עסקים, לפעמים יותר." },
              { bold: "Single Entry: יציאה מוייטנאם = ויזה חדשה", rest: ", אם אתם מתכננים לצאת לקמבודיה/לאוס ולחזור, קחו Multiple Entry ($50) מראש." },
              { bold: "אי אפשר לשנות אחרי הגשה", rest: ", שינוי תאריך, נמל, או שם מחייב פתיחת בקשה חדשה לחלוטין." },
              { bold: "תשלום נכשל = בקשה חדשה", rest: ", אם כרטיס האשראי נדחה, אי אפשר לנסות שוב על אותה בקשה." },
              { bold: 'כתובת מלון בטופס', rest: ', ניתן להכניס כתובת בית חב"ד, מאושר על ידי מטיילים רבים.' },
              { bold: "אתרים פרטיים = הונאה", rest: ", גובים $50-200 על שירות שעולה $25 באתר הרשמי." },
              { bold: "מעבר דרך סין, לא מומלץ", rest: ", עם דרכון ישראלי, מעבר בשדות תעופה סיניים עלול לגרום לעיכובים ובדיקות. בחרו מסלול ישיר או דרך תאילנד/סינגפור." },
            ].map((item) => (
              <li key={item.bold} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-amber-500 flex-shrink-0 mt-0.5 text-base">•</span>
                <span><strong className="text-[#1A2535]">{item.bold}</strong>{item.rest}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visa on Arrival */}
        <div className="bg-[#F2F1EB] border border-[#E5E4DC] shadow-sm rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">✈️</span>
            <h2 className="text-2xl font-bold text-[#1A2535]">Visa on Arrival</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-5 text-sm">
            ניתן לקבל ויזה עם הנחיתה, אך <strong className="text-[#1A2535]">רק בשדות תעופה בינלאומיים</strong> (לא במעברי יבשה).
            מחייב קבלת Approval Letter מראש מסוכן מורשה, תורים ארוכים בגבול, ועלות גבוהה יותר.
            <strong className="text-[#1A2535]"> E-Visa עדיפה בכל פרמטר.</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
              <h4 className="font-bold text-emerald-700 mb-3">יתרונות</h4>
              <ul className="text-sm text-slate-600 flex flex-col gap-1.5">
                <li>• לא צריך להגיש לפני הטיסה</li>
                <li>• זמין לכניסות מרובות</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h4 className="font-bold text-red-600 mb-3">חסרונות</h4>
              <ul className="text-sm text-slate-600 flex flex-col gap-1.5">
                <li>• צריך סוכן מורשה לפני הטיסה</li>
                <li>• תורים ארוכים בשדה התעופה</li>
                <li>• עלות גבוהה יותר</li>
                <li>• לא זמין במעברי יבשה</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visa run */}
        <div className="bg-[#F2F1EB] border border-[#E5E4DC] shadow-sm rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">📅</span>
            <h2 className="text-2xl font-bold text-[#1A2535]">הארכת שהייה ו-Visa Run</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-[#1A2535] mb-2">הארכת E-Visa מבפנים</h3>
              <p className="text-slate-600 leading-relaxed">
                הארכה בתוך וייטנאם מצריכה ערבות מגורם מוסמך, מסובך ולא מומלץ.
                הפתרון הפשוט: לצאת מהמדינה ולהגיש E-Visa חדשה אונליין לפני החזרה.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#1A2535] mb-2">Visa Run</h3>
              <p className="text-slate-600 leading-relaxed">
                יציאה קצרה לקמבודיה (מוק ביי) או לאוס (לאו באו) וחזרה עם E-Visa חדשה.
                עלות כוללת: $60-120 כולל הסעות. הגישו E-Visa חדשה לפחות שבוע מראש.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1A2535] rounded-3xl p-10 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            שירות פרמיום בעברית
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">רוצים שנטפל בהכל בשבילכם?</h2>
          <p className="text-white/60 leading-relaxed max-w-lg mx-auto mb-6 text-sm">
            צוות סוליסט ידאג לכל הבירוקרטיה, מלאו פרטים פעם אחת, ואנחנו נגיש, נבדוק ונשלח לכם ויזה מאושרת לתיבת המייל.
            ללא כניסה לאתרים ממשלתיים, ללא טעויות, ללא כאב ראש.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            {[
              { icon: "✅", text: "ויזה מאושרת ישירות למייל" },
              { icon: "🔍", text: "בדיקת מסמכים לפני הגשה" },
              { icon: "⚡", text: "אפשרות עיבוד אקספרס" },
              { icon: "🇮🇱", text: "תמיכה בעברית" },
            ].map(item => (
              <span key={item.text} className="flex items-center gap-1.5 text-white/60">
                <span className="text-orange-400">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/visa/apply"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-colors inline-block"
            >
              הגש ויזה דרכנו ←
            </Link>
            <a
              href="mailto:soloistour@gmail.com"
              className="border border-white/30 text-white/80 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              ✉️ שאלות, כתבו לנו
            </a>
          </div>
          <p className="text-xs text-white/30 mt-4">החל מ-₪169 כולל דמי שירות • ויזה אחת לכניסה</p>
        </div>

      </div>
    </div>
  );
}

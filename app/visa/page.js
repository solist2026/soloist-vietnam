import Link from "next/link";

export default function VisaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-[#1a2535] to-[#0f1923] text-center">
        <p className="text-[#c9a84c] text-sm font-semibold tracking-widest mb-3 uppercase">מידע רשמי</p>
        <h1 className="text-5xl font-bold mb-4">ויזה לוייטנאם</h1>
        <p className="text-[#f5f0e8]/60 text-lg max-w-2xl mx-auto">
          כל מה שצריך לדעת על כניסה לוייטנאם — עדכני ל-2025
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-10">

        {/* ללא ויזה */}
        <div className="bg-emerald-900/20 border border-emerald-600/40 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">✅</span>
            <h2 className="text-3xl font-bold text-emerald-400">כניסה ללא ויזה — ישראלים</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { label: "ימי שהייה", value: "45 יום" },
              { label: "עלות", value: "חינם" },
              { label: "חידוש", value: "יציאה ממדינה" },
            ].map((item) => (
              <div key={item.label} className="bg-[#0f1923] rounded-xl p-5 text-center">
                <div className="text-4xl font-bold text-emerald-400">{item.value}</div>
                <div className="text-sm text-[#f5f0e8]/50 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#0f1923] rounded-xl p-5">
            <p className="text-[#f5f0e8]/80 leading-relaxed">
              אזרחי ישראל יכולים להיכנס לוייטנאם <strong className="text-emerald-400">עד 45 יום ללא ויזה</strong> עם דרכון ישראלי בתוקף.
              הפאסספורט חייב להיות בתוקף לפחות 6 חודשים מיום הכניסה.
              לאחר 45 יום — יש לצאת מהמדינה ולחזור, או להגיש E-Visa.
            </p>
          </div>
        </div>

        {/* E-Visa */}
        <div className="bg-[#1a2535] border border-[#c9a84c]/20 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌐</span>
            <h2 className="text-3xl font-bold">E-Visa — ויזה אלקטרונית</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "עלות", value: "$25" },
              { label: "תוקף", value: "90 יום" },
              { label: "זמן עיבוד", value: "3 ימי עסקים" },
              { label: "כניסות", value: "כניסה אחת" },
            ].map((item) => (
              <div key={item.label} className="bg-[#0f1923] rounded-xl p-5 text-center border border-[#c9a84c]/10">
                <div className="text-3xl font-bold text-[#c9a84c]">{item.value}</div>
                <div className="text-sm text-[#f5f0e8]/50 mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">איך מגישים E-Visa — שלב אחרי שלב</h3>
          <div className="flex flex-col gap-3 mb-8">
            {[
              { step: "1", title: "כנסו לאתר הרשמי", desc: "evisa.xuatnhapcanh.gov.vn — זה האתר הממשלתי הרשמי בלבד. אל תשתמשו באתרים אחרים." },
              { step: "2", title: "מלאו את הטופס", desc: "שם, דרכון, מדינת מוצא, תאריכי כניסה ויציאה, מטרת הביקור (tourism)." },
              { step: "3", title: "העלאת מסמכים", desc: "תמונת דרכון ברורה + תמונת פספורט לבן על רקע לבן." },
              { step: "4", title: "תשלום", desc: "$25 בכרטיס אשראי. שמרו את אישור התשלום." },
              { step: "5", title: "המתנה", desc: "3 ימי עסקים לרוב. קבלו את הויזה במייל." },
              { step: "6", title: "הדפסה", desc: "הדפיסו את הויזה — חייבים עותק מודפס בגבול." },
            ].map((item) => (
              <div key={item.step} className="bg-[#0f1923] rounded-xl p-5 flex gap-4">
                <div className="w-8 h-8 bg-[#c9a84c] text-[#0f1923] rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-bold mb-1">{item.title}</div>
                  <div className="text-sm text-[#f5f0e8]/60">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-900/20 border border-amber-600/40 rounded-xl p-5">
            <h4 className="font-bold text-amber-400 mb-2">⚠️ שימו לב</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#f5f0e8]/70">
              <li>• הגישו לפחות שבוע לפני הטיסה</li>
              <li>• ודאו שהתאריכים תואמים לטיסות שלכם</li>
              <li>• E-Visa לכניסה אחת — אם יוצאים לקמבודיה וחוזרים, צריך ויזה חדשה</li>
              <li>• אתרי תיווך גובים $50-100 — אין בהם צורך, האתר הרשמי פשוט</li>
            </ul>
          </div>
        </div>

        {/* Visa on Arrival */}
        <div className="bg-[#1a2535] border border-[#c9a84c]/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">✈️</span>
            <h2 className="text-3xl font-bold">Visa on Arrival</h2>
          </div>
          <p className="text-[#f5f0e8]/70 leading-relaxed mb-6">
            ניתן לקבל ויזה עם הנחיתה בשדה התעופה — אבל <strong className="text-[#c9a84c]">רק בטיסות בינלאומיות</strong> (לא ביבשה).
            צריך לקבל אישור מראש (Approval Letter) ממשרד ויזות מורשה.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0f1923] rounded-xl p-5">
              <h4 className="font-bold text-[#c9a84c] mb-2">יתרונות</h4>
              <ul className="text-sm text-[#f5f0e8]/60 flex flex-col gap-1">
                <li>• מהיר יותר מ-E-Visa במקרים מסוימים</li>
                <li>• ניתן לקבל ויזה מרובת כניסות</li>
              </ul>
            </div>
            <div className="bg-[#0f1923] rounded-xl p-5">
              <h4 className="font-bold text-red-400 mb-2">חסרונות</h4>
              <ul className="text-sm text-[#f5f0e8]/60 flex flex-col gap-1">
                <li>• צריך סוכן מורשה לאישור</li>
                <li>• תורים ארוכים בגבול</li>
                <li>• עלות גבוהה יותר</li>
                <li>• פחות מומלץ מ-E-Visa</li>
              </ul>
            </div>
          </div>
        </div>

        {/* הארכת שהייה */}
        <div className="bg-[#1a2535] border border-[#c9a84c]/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">📅</span>
            <h2 className="text-3xl font-bold">הארכת שהייה ו-Visa Run</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">Visa Extension</h3>
              <p className="text-[#f5f0e8]/70 leading-relaxed text-sm">
                ניתן להאריך E-Visa בוייטנאם עצמה דרך משרד ההגירה. עלות של כ-$25 ועוד ממתינים. פחות מומלץ — E-Visa חדשה פשוטה יותר.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">Visa Run</h3>
              <p className="text-[#f5f0e8]/70 leading-relaxed text-sm">
                יציאה קצרה לקמבודיה (Moc Bai border) או לאוס (Lao Bao) וחזרה עם E-Visa חדשה.
                עלות כוללת: $60-100 כולל הסעות.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-gradient-to-br from-[#1a2535] to-[#0f1923] border border-[#c9a84c]/30 rounded-3xl p-10 text-center">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold mb-4">הגשת ויזה דרך האתר — בקרוב</h2>
          <p className="text-[#f5f0e8]/60 leading-relaxed max-w-xl mx-auto mb-6">
            אנחנו עובדים על מערכת הגשת E-Visa ישירה דרך האתר — פשוטה, מהירה ובעברית.
            השאירו פרטים וניידע אתכם כשזה יהיה מוכן.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="המייל שלכם"
              className="flex-1 bg-[#0f1923] border border-[#c9a84c]/30 rounded-full px-5 py-3 text-right text-sm focus:outline-none focus:border-[#c9a84c]"
            />
            <button className="bg-[#c9a84c] text-[#0f1923] px-6 py-3 rounded-full font-bold hover:bg-[#b8963d] transition-colors text-sm">
              עדכנו אותי
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

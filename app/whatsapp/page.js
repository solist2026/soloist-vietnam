import Link from "next/link";

export const metadata = {
  title: "קבוצות WhatsApp | סוליסט וייטנאם",
  description: "הצטרפו לקבוצות WhatsApp של מטיילים ישראלים בוייטנאם. שאלו שאלות, קבלו עצות ומצאו שותפים לטיול",
};

const groups = [
  {
    name: "סוליסט וייטנאם - כללי",
    desc: "הקבוצה הראשית לכל מי שמתכנן או נמצא כרגע בוייטנאם. שאלות, עצות, שיתוף חוויות והמלצות.",
    icon: "🇻🇳",
    members: "בקרוב",
    status: "coming_soon",
  },
  {
    name: "צפון וייטנאם",
    desc: "האנוי, סאפה, הלונג ביי, הא גיאנג וכל יעדי הצפון. מידע עדכני מהשטח.",
    icon: "🏔️",
    members: "בקרוב",
    status: "coming_soon",
  },
  {
    name: "מרכז וייטנאם",
    desc: "הוי אן, דה נאנג, הואה ועוד. כל מה שצריך לדעת על המרכז.",
    icon: "🏮",
    members: "בקרוב",
    status: "coming_soon",
  },
  {
    name: "דרום וייטנאם",
    desc: "הו צ'י מין, פו קווק, מוי נה ודלתת מקונג. המדריך החי לדרום.",
    icon: "🌊",
    members: "בקרוב",
    status: "coming_soon",
  },
  {
    name: "ויזה לוייטנאם",
    desc: "כל מה שקשור לויזה, E-Visa, שאלות ותהליכים. קבוצה ייעודית לנושא.",
    icon: "🛂",
    members: "בקרוב",
    status: "coming_soon",
  },
  {
    name: "שותפים לטיול",
    desc: "מחפשים שותפים לדרך? כאן תמצאו אנשים שמתכננים לאותה תקופה ואזור.",
    icon: "🤝",
    members: "בקרוב",
    status: "coming_soon",
  },
];

export default function WhatsAppPage() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-[88px]">

      {/* Header */}
      <div className="bg-[#075E54] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-5xl mb-4">💬</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">קבוצות WhatsApp</h1>
          <p className="text-white/80 text-lg leading-relaxed">
            הקהילה הישראלית הגדולה ביותר של מטיילים בוייטנאם. הצטרפו, שאלו, שתפו ומצאו שותפים לדרך.
          </p>
        </div>
      </div>

      {/* Why join */}
      <div className="bg-[#F8FAFC] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-center text-slate-900 mb-8">למה להצטרף?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "❓", title: "שאלו שאלות בזמן אמת", desc: "קבלו תשובות ממטיילים שנמצאים כרגע בשטח" },
              { icon: "📍", title: "מידע עדכני", desc: "מה פתוח, מה סגור, מה השתנה. הכי טרי שיש" },
              { icon: "👫", title: "מצאו שותפים לטיול", desc: "מתכננים לאותה תקופה? מצאו חברים לדרך" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Groups grid */}
      <div className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-black text-center text-slate-900 mb-10">הקבוצות שלנו</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{group.icon}</div>
              <h3 className="font-black text-lg text-slate-900 mb-2">{group.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{group.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">חברים: {group.members}</span>
                <span className="text-xs bg-amber-100 text-amber-700 font-bold px-3 py-1 rounded-full">
                  בקרוב
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#075E54] rounded-2xl p-8 text-center text-white">
          <div className="text-5xl mb-4">📲</div>
          <h3 className="text-2xl font-black mb-3">הקבוצות עולות בקרוב!</h3>
          <p className="text-white/75 mb-6 leading-relaxed max-w-md mx-auto">
            אנחנו עובדים על הקמת הקהילה. השאירו פרטים ונעדכן אתכם ברגע שהקבוצות פתוחות.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-[#075E54] font-black px-8 py-3.5 rounded-full text-base hover:bg-green-50 transition-colors"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
}

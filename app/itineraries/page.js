"use client";
import { useState } from "react";

const predefinedItineraries = [
  {
    id: "10days",
    title: "10 ימים קלאסיים",
    subtitle: "הטוב ביותר בזמן קצר",
    emoji: "⚡",
    type: "quick",
    route: ["האנוי", "הלונג ביי", "ניין בינה", "הואה", "הוי אן", "הו צ'י מין"],
    days: [
      { day: "1-2", location: "האנוי", activities: ["טיול ב-Old Quarter", "אגם חרב", "מקדש הספרות", "שוק הלילה"] },
      { day: "3-4", location: "הלונג ביי", activities: ["שייט לילה בין האיים", "קאיאקינג", "מערות", "שקיעה על הסיפון"] },
      { day: "5", location: "ניין בינה", activities: ["שייט Tam Coc", "נקודת תצפית Mua Cave", "אופניים בין שדות"] },
      { day: "6", location: "הואה", activities: ["ארמון קיסרי", "טיסה מהאנוי"] },
      { day: "7-8", location: "הוי אן", activities: ["עיר עתיקה בלילה", "חוף An Bang", "שיעור בישול", "My Son"] },
      { day: "9-10", location: "הו צ'י מין", activities: ["מוזיאון המלחמה", "מנהרות Cu Chi", "Bui Vien", "שוק Ben Thanh"] },
    ],
    tips: "טיסה פנימית האנוי → הואה חוסכת 15 שעות נסיעה. הכרחי בטיול קצר.",
    budget: "$600-900",
    difficulty: "קל",
  },
  {
    id: "3weeks",
    title: "3 שבועות, צפון לדרום",
    subtitle: "המסלול המושלם",
    emoji: "🌟",
    type: "popular",
    route: ["האנוי", "סאפה", "הלונג ביי", "ניין בינה", "הואה", "הוי אן", "דה נאנג", "הו צ'י מין", "מקונג", "פו קווק"],
    days: [
      { day: "1-3", location: "האנוי", activities: ["Old Quarter", "אגם חרב", "מקדשים", "אוכל מקומי", 'בית חב"ד'] },
      { day: "4-6", location: "סאפה", activities: ["שדות אורז", "טיול כפרים", "Fansipan", "שבטים מקומיים"] },
      { day: "7-8", location: "הלונג ביי", activities: ["שייט 2 לילות", "מערות", "קאיאקינג"] },
      { day: "9-10", location: "ניין בינה", activities: ["Tam Coc", "Trang An", "Mua Cave"] },
      { day: "11-12", location: "הואה", activities: ["ארמון קיסרי", "קברי מלכים", "Thien Mu"] },
      { day: "13-15", location: "הוי אן", activities: ["עיר עתיקה", "שיעורי בישול", "חוף", "My Son"] },
      { day: "16", location: "דה נאנג", activities: ["גשר הדרקון", "Marble Mountains", "חוף My Khe"] },
      { day: "17-18", location: "הו צ'י מין", activities: ["מוזיאון מלחמה", "Reunification Palace", "מנהרות Cu Chi"] },
      { day: "19-20", location: "דלתת מקונג", activities: ["שוק צף", "סיור בתעלות", "הומסטיי"] },
      { day: "21", location: "פו קווק", activities: ["חוף Sao", "שוק לילה", "שנורקלינג"] },
    ],
    tips: "המסלול הכי פופולרי בקרב ישראלים. כולל את הטוב מכל האזורים.",
    budget: "$1,200-1,800",
    difficulty: "בינוני",
  },
  {
    id: "month",
    title: "חודש שלם",
    subtitle: "לחיות את וייטנאם",
    emoji: "🏆",
    type: "extended",
    route: ["האנוי", "הא גיאנג", "סאפה", "הלונג ביי", "ניין בינה", "הואה", "הוי אן", "קוי נהון", "הו צ'י מין", "מקונג", "פו קווק", "מוי נה"],
    days: [
      { day: "1-4", location: "האנוי", activities: ["עיר עתיקה", "מוזיאונים", "אוכל מקומי", "טיולי סביבה"] },
      { day: "5-8", location: "הא גיאנג", activities: ["טיול אופנוע Ma Pi Leng", "כפרי שבטים", "נופים דרמטיים"] },
      { day: "9-11", location: "סאפה", activities: ["שדות אורז", "Fansipan", "שבטים"] },
      { day: "12-14", location: "הלונג ביי", activities: ["שייט 2 לילות + Cat Ba Island"] },
      { day: "15-16", location: "ניין בינה", activities: ["Tam Coc", "Trang An"] },
      { day: "17-19", location: "הואה", activities: ["ארמון", "קברי מלכים", "אוכל"] },
      { day: "20-23", location: "הוי אן + דה נאנג", activities: ["עיר עתיקה", "Ba Na Hills", "חופים"] },
      { day: "24", location: "קוי נהון", activities: ["חוף בתולי", "מגדלי Cham"] },
      { day: "25-27", location: "הו צ'י מין", activities: ["עיר", "מנהרות", "שופינג"] },
      { day: "28-29", location: "דלתת מקונג", activities: ["שוק צף", "הומסטיי"] },
      { day: "30", location: "פו קווק", activities: ["חוף", "שנורקלינג", "שקיעה"] },
    ],
    tips: "עם חודש מלא אפשר לראות גם יעדים נסתרים כמו הא גיאנג וקוי נהון.",
    budget: "$1,800-2,800",
    difficulty: "מתקדם",
  },
];

const questions = [
  {
    id: "duration",
    question: "כמה זמן יש לך בוייטנאם?",
    options: ["עד שבוע", "10-14 ימים", "3 שבועות", "חודש ויותר"],
  },
  {
    id: "style",
    question: "מה סגנון הטיול שלך?",
    options: ["הרפתקן, טבע והרים", "תרבות ועיירות עתיקות", "חופים ומנוחה", "שילוב של הכל"],
  },
  {
    id: "budget",
    question: "מה התקציב היומי שלך?",
    options: ["חסכוני ($20-35/יום)", "בינוני ($40-70/יום)", "נוח ($80+/יום)"],
  },
  {
    id: "region",
    question: "איזה אזור מעניין אותך?",
    options: ["צפון בלבד", "דרום בלבד", "צפון לדרום (הכל)", "אין לי העדפה"],
  },
];

const recommendations = {
  "עד שבוע": {
    title: "מסלול שבוע מהיר",
    desc: "עם שבוע, התרכז באזור אחד. צפון (האנוי + הלונג ביי) או דרום (הו צ'י מין + מקונג + פו קווק).",
    destinations: ["האנוי (2 לילות)", "הלונג ביי (2 לילות)", "ניין בינה (1 לילה)"],
    tip: "אל תנסה לראות הכל, עדיף לחוות פחות בעומק מרבה בשטחיות.",
  },
  "10-14 ימים": {
    title: "מסלול 10-14 ימים",
    desc: "האפשרות הכי פופולרית, צפון לדרום עם טיסה פנימית.",
    destinations: ["האנוי (2)", "הלונג ביי (2)", "ניין בינה (1)", "הוי אן (3)", "הו צ'י מין (2)"],
    tip: "קחו טיסה פנימית האנוי → דה נאנג. חוסך 15 שעות אוטובוס.",
  },
  "3 שבועות": {
    title: "המסלול הקלאסי 3 שבועות",
    desc: "המסלול המושלם, תראו את כל האזורים המרכזיים עם מספיק זמן לנשום ולחוות.",
    destinations: ["האנוי", "סאפה", "הלונג ביי", "הואה", "הוי אן", "הו צ'י מין", "פו קווק"],
    tip: "השקיעו יותר זמן בהוי אן, העיירה הכי יפה בוייטנאם.",
  },
  "חודש ויותר": {
    title: "חודש שלם, לחיות את וייטנאם",
    desc: "עם חודש מלא אפשר לצאת מהמסלול הסטנדרטי ולגלות יעדים נסתרים.",
    destinations: ["האנוי", "הא גיאנג", "סאפה", "הלונג ביי", "הואה", "הוי אן", "הו צ'י מין", "מקונג", "פו קווק", "מוי נה"],
    tip: "הא גיאנג והמחוזות הצפוניים, אחד הנופים הדרמטיים בעולם.",
  },
};

export default function ItinerariesPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [questions[currentQ].id]: answer };
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = recommendations[answers.duration];

  return (
    <div className="inner-page min-h-screen pt-[88px]">

      {/* Header */}
      <div className="py-14 md:py-20 text-center px-4">
        <p className="text-orange-500 text-xs font-bold tracking-widest mb-3 uppercase">תכנון טיול</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#1A2535] mb-4">מסלולים לוייטנאם</h1>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          מסלולים מוכנים לכל משך זמן, ובונה מסלול חכם שיתאים אותו בדיוק בשבילך
        </p>
      </div>

      {/* Smart Builder */}
      <div className="max-w-3xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mb-10">
          <h2 className="text-2xl font-bold text-[#1A2535] mb-2 text-center">🧭 בונה המסלול החכם</h2>
          <p className="text-slate-500 text-sm text-center mb-8">ענה על כמה שאלות ונבנה לך מסלול מותאם אישית</p>

          {!showResult ? (
            <div>
              {/* Progress */}
              <div className="flex gap-2 mb-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-1.5 rounded-full transition-colors ${i <= currentQ ? "bg-orange-500" : "bg-slate-100"}`}
                  />
                ))}
              </div>

              <p className="text-xs text-slate-400 mb-2">שאלה {currentQ + 1} מתוך {questions.length}</p>
              <h3 className="text-xl font-bold text-[#1A2535] mb-6">{questions[currentQ].question}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {questions[currentQ].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-right hover:border-orange-400 hover:bg-orange-50 transition-all font-medium text-[#1A2535] text-sm"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : result ? (
            <div>
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-2xl font-bold text-orange-500 mb-2">{result.title}</h3>
                <p className="text-slate-600 text-sm">{result.desc}</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 mb-4 border border-slate-100">
                <h4 className="font-bold text-[#1A2535] mb-4">📍 יעדים מומלצים:</h4>
                <div className="flex flex-wrap gap-2">
                  {result.destinations.map((dest) => (
                    <span key={dest} className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full text-sm">
                      {dest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
                <p className="text-amber-800 text-sm">💡 <strong>טיפ:</strong> {result.tip}</p>
              </div>

              <button
                onClick={reset}
                className="w-full border border-slate-200 text-slate-600 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors text-sm"
              >
                התחל מחדש
              </button>
            </div>
          ) : null}
        </div>

        {/* Predefined Itineraries */}
        <h2 className="text-2xl font-bold text-[#1A2535] mb-7 text-center">מסלולים מוכנים</h2>
        <div className="flex flex-col gap-6">
          {predefinedItineraries.map((itin) => (
            <div key={itin.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-3xl">{itin.emoji}</span>
                      <h3 className="text-xl font-bold text-[#1A2535]">{itin.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm">{itin.subtitle}</p>
                  </div>
                  <div className="text-left">
                    <div className="text-orange-500 font-bold text-sm">{itin.budget}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{itin.difficulty}</div>
                  </div>
                </div>

                {/* Route */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {itin.route.map((place, i) => (
                    <div key={place} className="flex items-center gap-1">
                      <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-full">{place}</span>
                      {i < itin.route.length - 1 && <span className="text-slate-300 text-xs">→</span>}
                    </div>
                  ))}
                </div>

                {/* Days */}
                <div className="flex flex-col gap-2 mb-5">
                  {itin.days.map((day) => (
                    <div key={day.day} className="bg-slate-50 rounded-xl p-4 flex gap-4 border border-slate-100">
                      <div className="text-orange-500 font-bold text-sm whitespace-nowrap min-w-16">יום {day.day}</div>
                      <div>
                        <div className="font-semibold text-[#1A2535] text-sm mb-1">{day.location}</div>
                        <div className="flex flex-wrap gap-1">
                          {day.activities.map((act) => (
                            <span key={act} className="text-xs text-slate-500 bg-white border border-slate-100 px-2 py-0.5 rounded-full">{act}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm text-amber-800">💡 {itin.tips}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

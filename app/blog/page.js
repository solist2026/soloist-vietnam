import Link from "next/link";

export const metadata = {
  title: "בלוג | סוליסט וייטנאם",
  description: "כתבות, מדריכים ועצות למטייל הישראלי בוייטנאם. הכל על יעדים, אוכל, לינה ותרבות",
};

const categories = ["הכל", "יעדים", "תכנון", "אוכל", "לינה", "ויזה", "תרבות"];

const posts = [
  {
    title: "10 דברים שאתם חייבים לעשות בהלונג ביי",
    excerpt: "הלונג ביי הוא אחד הנופים המרהיבים ביותר בעולם. הכנו לכם רשימה של כל מה שאסור לפספס.",
    category: "יעדים",
    date: "בקרוב",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
    readTime: "5 דקות",
  },
  {
    title: "המדריך המלא לאיים הכי יפים בוייטנאם",
    excerpt: "מפו קווק ועד קון דאו, כל האיים שכדאי לבקר בהם ואיך להגיע לכל אחד מהם.",
    category: "יעדים",
    date: "בקרוב",
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80",
    readTime: "7 דקות",
  },
  {
    title: "כמה עולה טיול חודש בוייטנאם? פירוט עלויות מלא",
    excerpt: "מחירי לינה, אוכל, תחבורה ופעילויות. כל מה שצריך לדעת כדי לתכנן תקציב מדויק.",
    category: "תכנון",
    date: "בקרוב",
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
    readTime: "8 דקות",
  },
  {
    title: "ויזה לוייטנאם 2026: כל מה שצריך לדעת",
    excerpt: "E-Visa, ויזה בגבול, כמה זמן לוקח ומה נדרש. המדריך המלא והמעודכן.",
    category: "ויזה",
    date: "בקרוב",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    readTime: "4 דקות",
  },
  {
    title: "הוי אן: המדריך המלא לעיירת הפנסים",
    excerpt: "העיר ההיסטורית שכבשה את לב כל מי שביקר בה. מה לראות, איפה לאכול, ומתי ללכת.",
    category: "יעדים",
    date: "בקרוב",
    img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80",
    readTime: "6 דקות",
  },
  {
    title: "אוכל וייטנאמי: הסוגים שאתם חייבים לנסות",
    excerpt: "מפו בפו ועד בא מי, מביאגוי ועד גוי קוון. מדריך לקולינריה הוייטנאמית.",
    category: "אוכל",
    date: "בקרוב",
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
    readTime: "5 דקות",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-[88px]">

      {/* Header */}
      <div className="bg-[#1A2535] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-5xl mb-4">📝</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">הבלוג שלנו</h1>
          <p className="text-white/75 text-lg leading-relaxed">
            כתבות, מדריכים ועצות מהשטח למטייל הישראלי בוייטנאם. הכל שכתב מישהו שהיה שם.
          </p>
        </div>
      </div>

      {/* Coming soon banner */}
      <div className="bg-orange-50 border-b border-orange-100">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-center gap-2 text-sm text-orange-700">
          <span>⏳</span>
          <span className="font-semibold">הבלוג בבנייה פעילה. הכתבות יעלו בקרוב.</span>
        </div>
      </div>

      {/* Category filters */}
      <div className="max-w-5xl mx-auto px-4 pt-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${
                i === 0
                  ? "bg-orange-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all card-lift"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-black text-base text-slate-900 mb-2 leading-snug group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>קריאה: {post.readTime}</span>
                  <span className="bg-amber-100 text-amber-700 font-bold px-2.5 py-0.5 rounded-full">בקרוב</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-14 bg-slate-50 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">📬</div>
          <h3 className="font-black text-2xl text-slate-900 mb-3">קבלו כתבות חדשות ישירות למייל</h3>
          <p className="text-slate-500 mb-6 text-sm max-w-md mx-auto">
            הצטרפו לרשימת התפוצה שלנו וקבלו עדכונים כשכתבות חדשות עולות לאוויר.
          </p>
          <form action="#" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="האימייל שלכם"
              className="flex-1 border border-slate-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
            >
              הרשמה
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

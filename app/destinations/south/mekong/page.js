import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: 'דלתת מקונג',
  subtitle: 'גן עדן ירוק על הנהר',
  emoji: '🛶',
  heroImage: 'https://images.unsplash.com/photo-1543411789-1a67a2ac05c6?w=1600&q=80',
  regionName: 'דרום וייטנאם',
  regionHref: '/destinations/south',
  tags: ['נהרות', 'כפרים', 'אותנטי', 'טבע'],
  chabad: false,
  locationDesc: "דלתת מקונג ממוקמת 60-90 ק\"מ דרומית-מערבית להו צ'י מין — 2 שעות נסיעה. העיירות My Tho, Ben Tre ו-Can Tho הן נקודות הכניסה הנפוצות.",
  description: "דלתת מקונג היא אחת הדלתאות הגדולות בעולם — רשת אינסופית של תעלות, נהרות ואיים ירוקים עם כפרי דייגים, שדות אורז ונוף טרופי. יום-יומיים כאן מראים צד אחר לחלוטין מהערים התוססות — חיים מקומיים אמיתיים ושלוות הנהר.",
  quickStats: [
    { label: "מהו צ'י מין", value: '2 שעות' },
    { label: 'ימים מומלצים', value: '1–2' },
    { label: 'עונה מומלצת', value: 'דצמבר–מאי' },
    { label: 'שדה תעופה', value: 'Can Tho (VCA)' },
  ],
  attractions: [
    {
      name: 'שייט בתעלות המקונג',
      desc: "שייט בסירות עץ צרות דרך תעלות מוצלות בעצי קוקוס ובננה — הלב של חוויית המקונג. נכנסים לכפרים, עוצרים במפעלי ממתקי קוקוס ואורגים מסורתיים.",
      image: 'https://images.unsplash.com/photo-1543411789-1a67a2ac05c6?w=600&q=80',
      tip: 'הזמינו דרך הגסטהאוס ב-My Tho או Ben Tre — $15-25 לחצי יום עם מדריך',
    },
    {
      name: 'Cai Rang Floating Market',
      desc: "שוק צף על הנהר ב-Can Tho — סירות עמוסות פירות, ירקות ומוצרים שנוגעות זו בזו. אקשן אמיתי בשעות הבוקר המוקדמות. השוק הצף הכי מרשים בדלתא.",
      image: 'https://images.unsplash.com/photo-1677552926138-f7dbb71b226f?w=600&q=80',
      tip: 'הגיעו ב-06:00-08:00 — השוק מסתיים לפני הצהריים. סיור מהעיר: $10-20',
    },
    {
      name: 'Ben Tre Island',
      desc: "האי הירוק ביותר בדלתא — יערות קוקוס, מפעלי ממתקים מסורתיים, סלי קש וסירות עץ בנויות ביד. אווירה מקומית אותנטית ושקטה.",
      image: 'https://images.unsplash.com/photo-1553851919-596510268b99?w=600&q=80',
    },
    {
      name: 'Vinh Long & Can Tho',
      desc: "שני המרכזים של הדלתא — Can Tho הוא העיר הגדולה עם השוק הצף. Vinh Long — נקודת מוצא לאיים קטנים עם לינה בבתים מקומיים (Homestay).",
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
      tip: 'Homestay באיים של Vinh Long — חוויה מרגשת ואמיתית. הזמינו מראש',
    },
  ],
  food: [
    {
      name: 'Hu Tieu',
      desc: "מרק אטריות שקופות עם חזיר, שרימפס ועצמות — מנה אייקונית של הדרום. גרסת המקונג מוגשת עם עשבים טריים רבים ורוטב hoisin.",
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80',
      price: '40,000–60,000 VND',
    },
    {
      name: 'ממתקי קוקוס',
      desc: "ממתקי קוקוס מסורתיים — candy, ריבת קוקוס, שוקולד קוקוס. תראו איך מייצרים אותם במפעל ביתי. טרי ומצוין להביא כמזכרת.",
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&q=80',
      price: '30,000–80,000 VND לחבילה',
    },
    {
      name: 'פירות טרופיים',
      desc: "מקונג = גן עדן של פירות — מנגוסטין, ג'קפרוט, רמבוטן, לונגן, ד'וריאן. הכי טרי וזול כאן מכל מקום בוייטנאם.",
      image: 'https://images.unsplash.com/photo-1533497394934-b33cd9695ba9?w=400&q=80',
      price: '20,000–50,000 VND לק"ג',
    },
  ],
  foodTips: [
    "My Tho — עיר הכניסה הנפוצה. אוכל רחוב מצוין ליד הנמל",
    "Can Tho Night Market — פירות ים ומנות מקומיות בשוק הלילה",
    "שתו ממיץ קוקוס ישירות מהאגוז — טרי, קר וזול",
  ],
  areas: [
    {
      name: 'My Tho',
      type: 'נקודת כניסה',
      recommended: true,
      desc: "הקרובה ביותר להו צ'י מין — 70 ק\"מ, שעה וחצי. מוצא לשייטי הדלתא ולאי Ben Tre. מתאים ליום יחיד.",
    },
    {
      name: 'Can Tho',
      type: 'מרכז הדלתא',
      recommended: true,
      desc: "העיר הגדולה של הדלתא עם השוק הצף Cai Rang. מומלצת ללינה ל-2 לילות לחוויה מעמיקה יותר.",
    },
    {
      name: 'Vinh Long',
      type: 'Homestay',
      recommended: false,
      desc: "נקודת מוצא לאיים קטנים עם Homestay בבתים מקומיים. ל-2-3 לילות לחוויה עמוקה. פחות נוח להגעה.",
    },
  ],
  gettingThere: [
    { from: "הו צ'י מין", method: 'אוטובוס/מיניבוס לMy Tho', time: '1.5 שעות', icon: '🚌', price: '~80,000 VND' },
    { from: "הו צ'י מין", method: 'אוטובוס לCan Tho', time: '3 שעות', icon: '🚌', price: '120,000–180,000 VND' },
    { from: "הו צ'י מין", method: 'סיור מאורגן', time: 'יום שלם', icon: '🚌', price: '$25–40 כולל הכל' },
    { from: 'פנום פן', method: 'סירה / אוטובוס', time: '5–6 שעות', icon: '⛴️', price: '$20–30' },
  ],
  localTransport: [
    "סירות לשכר — חובה. דרך הגסטהאוס או שוק הנמל",
    "אופנוע להשכרה — לסיור עצמאי בכפרים: $6-10/יום",
    "Xe om (מונית אופנוע) — למרחקים קצרים בין כפרים",
  ],
  accommodation: [
    { type: 'Homestay', price: '$20–40/לילה', desc: "לינה בבית משפחה מקומית באיים — ארוחות ביתיות כלולות. חוויה אמיתית.", examples: 'Nam Bo Boutique, Cai Be Princess' },
    { type: "מלון עיר (Can Tho)", price: '$25–60/לילה', desc: 'מלונות תיירותיים ב-Can Tho — קרוב לשוק הצף ולחיי הלילה.', examples: 'Victoria Can Tho Resort, Azerai Can Tho' },
    { type: 'יום בלבד', price: '$25–40 לסיור', desc: "יום יחיד מהו צ'י מין ללא לינה — My Tho + Ben Tre. חוזרים ערב.", examples: 'סיור מאורגן מסייגון' },
  ],
  tips: [
    "יום אחד מספיק לטעימה — My Tho + Ben Tre. לחוויה עמוקה: 2 לילות ב-Can Tho",
    "עונה מומלצת: דצמבר-מאי (עונה יבשה). יוני-נובמבר — גשמים ושיטפונות אפשריים",
    "שוק צף Cai Rang — הגיעו ב-06:00 לפחות. הלכלוך גמור עד 09:00",
    "Homestay — הזמינו לפחות יום מראש. אפשר דרך Booking.com",
    "מהו צ'י מין: Ben Thanh Bus Station לMy Tho — 80K VND, שעה וחצי",
    "קמבודיה קרובה — Giant Ibis מCan Tho לפנום פן: $15-25, 5 שעות",
  ],
  nextDest: { name: "הו צ'י מין", href: '/destinations/south/hcmc' },
};

export default function MekongPage() {
  return <DestinationPage dest={data} />;
}

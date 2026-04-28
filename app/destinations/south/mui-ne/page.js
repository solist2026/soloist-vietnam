import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: 'מוי נה',
  subtitle: 'דיונות, גלים ושקט',
  emoji: '🏄',
  heroImage: 'https://images.unsplash.com/photo-1714271511582-3483dcf0eb71?w=1600&q=80',
  regionName: 'דרום וייטנאם',
  regionHref: '/destinations/south',
  tags: ['חוף', 'דיונות', 'גלישת רוח', 'שקט'],
  chabad: false,
  locationDesc: "מוי נה ממוקמת 5 שעות צפונית-מזרחית להו צ'י מין — אין שדה תעופה, מגיעים באוטובוס שינה.",
  description: "מוי נה היא כפר דייגים שהפך ליעד אהוב — עם דיונות אדומות וצהובות מרשימות, גלישת רוח מהמפורסמת בעולם וחופים ארוכים ושקטים. פחות תיירותי מהוי אן, אבל בעל קסם ייחודי משלו.",
  quickStats: [
    { label: "מהו צ'י מין", value: '5 שעות אוטובוס' },
    { label: 'מדה לאט', value: '4 שעות' },
    { label: 'ספורט מים', value: 'Kitesurfing' },
    { label: 'ימים מומלצים', value: '2–3' },
  ],
  attractions: [
    {
      name: 'Red Sand Dunes',
      desc: "דיונות חול אדום ייחודיות — גובה 20-30 מטר. שקיעה עליהן היא חוויה. ילדים מקומיים משכירים מזחלות פלסטיק לגלוש בחול.",
      image: 'https://images.unsplash.com/photo-1776929525042-d4055664a008?w=600&q=80',
      tip: "5 דקות מהכפר. Grab: ~30,000 VND. הגיעו ב-17:00 לשקיעה. מזחלת: 20,000 VND",
    },
    {
      name: 'White Sand Dunes',
      desc: "דיונות חול לבן ענקיות — 30 ק\"מ מהכפר. Jeep 4x4 לשם. לשקיעה/זריחה. אגם שקט מאחורי הדיונות. נוף שנראה כמו ספרה.",
      image: 'https://images.unsplash.com/photo-1714271511582-3483dcf0eb71?w=600&q=80',
      tip: 'Jeep שיתופי: ~150,000 VND. סיור לזריחה (04:30) או לשקיעה. קחו מים',
    },
    {
      name: 'Kitesurfing & Windsurfing',
      desc: "מוי נה היא בירת גלישת הרוח בדרום-מזרח אסיה — רוח עקבית ב-100 ימים בשנה. סדנאות למתחילים ולמתקדמים. Water Sports Center בשפע.",
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
      tip: 'שיעור Kite ראשון (4 שעות): $80-120. Windsurf: $30-50/שעה',
    },
    {
      name: 'Fairy Stream (Suoi Tien)',
      desc: "נחל אדום ייחודי שנובע דרך מצוקי חול אדום ותצורות גיר — הליכה ברגל (יחפים) בתוך הנחל. 30 דקות הלוך-חזור. ציורי ומפתיע.",
      image: 'https://images.unsplash.com/photo-1553851919-596510268b99?w=600&q=80',
      tip: 'כניסה: 10,000-20,000 VND. מרתחים נעלים. הנחל קר ומרענן',
    },
    {
      name: "Fishing Village & Poshanu Cham Towers",
      desc: "כפר הדייגים של מוי נה — סירות עגולות מסורתיות (coracle boats), ריח מלוח ואוירה מקומית. לידו: מגדלי Cham עתיקים מהמאה ה-9.",
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
    },
  ],
  food: [
    {
      name: 'פירות ים טריים',
      desc: "מוי נה היא כפר דייגים — הדגים טריים מהים. מסעדות על החוף עם לובסטר, שרימפס, קלמרי. בחרו מהאקווריום/מהקרח.",
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&q=80',
      price: '100,000–350,000 VND לאדם',
    },
    {
      name: 'Banh Xeo (פנקייק ים)',
      desc: "פנקייק פריך עם שרימפס טרי מהים. הגרסה של מוי נה עם פירות ים טריים מהמקום היא מיוחדת.",
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80',
      price: '50,000–80,000 VND',
    },
    {
      name: 'קפה וייטנאמי',
      desc: "Mia Cafe ו-Sandals — קפה עם נוף לים. Ca phe trung (קפה ביצה) — מנסים מהצפון. מוי נה שקטה ונוחה לשבת עם קפה.",
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80',
      price: '30,000–60,000 VND',
    },
  ],
  foodTips: [
    "Con Suot Restaurant — פירות ים טריים על החוף, מחירים הוגנים",
    'Bui Vien strip (Nguyen Dinh Chieu) — רחוב הגסטהאוסים עם מסעדות זולות',
    "קנו פירות מהשוק המקומי — מנגו, פפאיה וקוקוס מאד זולים",
  ],
  areas: [
    {
      name: 'Nguyen Dinh Chieu (NDC)',
      type: 'תיירותי',
      recommended: true,
      desc: "הרחוב הראשי של מוי נה — גסטהאוסים, מסעדות, בתי קפה וחנויות ספורט. רוב התיירים שוהים כאן. נגיש ושקט.",
    },
    {
      name: 'Mui Ne Village (הכפר עצמו)',
      type: 'מקומי',
      recommended: false,
      desc: "הכפר האותנטי עם כפר הדייגים. שקט ומקומי יותר, אבל רחוק מהדיונות ומהמסעדות.",
    },
  ],
  gettingThere: [
    { from: "הו צ'י מין", method: 'אוטובוס שינה', time: '5–6 שעות', icon: '🚌', price: '$8–15' },
    { from: 'דה לאט', method: 'אוטובוס', time: '4 שעות', icon: '🚌', price: '$8–12' },
    { from: 'ניה טראנג', method: 'אוטובוס', time: '4 שעות', icon: '🚌', price: '$8–12' },
    { from: 'הוי אן', method: 'אוטובוס + לילה', time: '12 שעות', icon: '🚌', price: '$20–30' },
  ],
  localTransport: [
    'אופנוע להשכרה — $6-10/יום. חובה לדיונות וסיורים',
    'Grab — מוגבל. חלק מהנסיעות ידרשו מיקוח עם נהג מקומי',
    'Jeep 4x4 שכור — $40-60/יום לקבוצה לדיונות הלבנות',
  ],
  accommodation: [
    { type: 'תקציב', price: '$10–25/לילה', desc: 'גסטהאוסים ומלונות קטנים לאורך NDC Street.', examples: 'Mui Ne Backpacker Village, Mui Ne Hills' },
    { type: 'בינוני', price: '$35–80/לילה', desc: 'ריזורטים עם בריכה ישירות על החוף.', examples: 'Hiep Hoa Resort, Seahorse Resort' },
    { type: 'יוקרה', price: '$120+/לילה', desc: 'ריזורטים מפוארים עם בריכה אינפיניטי ומגרש גולף.', examples: 'Anantara Mui Ne, Victoria Mui Ne Resort' },
  ],
  tips: [
    "עונה מומלצת: נובמבר-אפריל. מאי-ספטמבר — גשמים ורוח חזקה מדי לקיטסרפינג",
    "דיונות לבנות — הגיעו לזריחה (04:30) עם Jeep. נוף קסום בלי המונות",
    "קיטסרפינג — הזמינו מראש, לא תמיד יש מקום בעונת שיא",
    "Fairy Stream — נכנסים יחפים לנחל. צרו מגבת",
    "NDC Street — ארוכה מאד (10 ק\"מ). שכרו אופנוע לנוע בין הנקודות",
    "אל תיכנסו לחנויות הSouvenirs בדיונות — לחץ קשה לקנות",
  ],
  nextDest: { name: 'דלתת מקונג', href: '/destinations/south/mekong' },
};

export default function MuiNePage() {
  return <DestinationPage dest={data} />;
}

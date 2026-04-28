import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: 'פו קווק',
  subtitle: 'האי הטרופי המושלם',
  emoji: '🏝️',
  heroImage: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1600&q=80',
  regionName: 'דרום וייטנאם',
  regionHref: '/destinations/south',
  tags: ['אי', 'חוף', 'שקיעות', 'שנורקלינג'],
  chabad: false,
  locationDesc: 'פו קווק הוא האי הגדול של וייטנאם — שדה התעופה הבינלאומי (PQC). 55 דקות טיסה מהו צ\'י מין.',
  description: "פו קווק הוא האי הטרופי היפה של וייטנאם — חופי חול לבן, מים טורקיז, שנורקלינג ושקיעות שלא נשכחות. הפך ממקום נסתר לאי תיירותי שמתפתח מהר, אבל עדיין שומר על אטמוספרה נינוחה ויפה. מינימום 3 לילות כדי לצאת ממנו.",
  quickStats: [
    { label: 'שדה תעופה', value: 'PQC' },
    { label: "מהו צ'י מין", value: '55 דקות' },
    { label: 'ימים מומלצים', value: '3–5' },
    { label: 'עונה מומלצת', value: 'נובמבר–אפריל' },
  ],
  attractions: [
    {
      name: 'Sao Beach (Bai Sao)',
      desc: "החוף הכי יפה באי — חול לבן ורך כמו טלק, מים שקופים ורדודים. עצי קוקוס, כמה מסעדות דגים. שקט ושמור יחסית. פחות עמוס מהחופים בצפון.",
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&q=80',
      tip: '25 ק"מ מהעיר. שכרו אופנוע או Grab לשם. הגיעו לפני 10:00',
    },
    {
      name: 'שנורקלינג ואיי הדרום',
      desc: "סיורי שנורקלינג ל-3 איים בדרום האי (Hon Thom, Hon Roi, Hon May Rut) — שוניות אלמוג, דגים צבעוניים, צלילה חינמית. חצי יום מרענן.",
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
      tip: 'סיור ב-$20-30 כולל הסעה, ציוד וארוחת צהריים. הזמינו מהאכסניה',
    },
    {
      name: 'Sunset Sanato Beach Club',
      desc: "בר חוף על חוף Long Beach לצפייה בשקיעה — הסאנסט הכי יפה באי. קוקטיילים, מוזיקה, אווירה. מגיעים שעה לפני השקיעה.",
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
      tip: 'כניסה בחינם עם רכישה. Drink: 100,000-200,000 VND. שקיעה: ~17:30-18:00',
    },
    {
      name: 'Phu Quoc Night Market',
      desc: 'שוק הלילה של Duong Dong — דגים טריים, אוכל ים, מנות וייטנאמיות ושוק מזכרות. אווירה תוססת ומקומית.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
    },
    {
      name: "Hon Thom Cable Car",
      desc: "רכבל ים ארוך מהעולם (7.9 ק\"מ) המחבר בין האי הראשי ל-Hon Thom — נוף מעל הים. Aquatopia Water Park בתחתית. חוויה ייחודית.",
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&q=80',
      tip: 'כרטיס: 650,000-900,000 VND. כולל כניסה לפארק מים',
    },
  ],
  food: [
    {
      name: 'Sea Food at Night Market',
      desc: "פירות ים טריים בשוק הלילה — לחצו לבחור מהקיר/מהאקווריום, הם מכינים. שרימפס, לובסטר, קלמרי, תמנונים. זול יחסית לאיכות.",
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&q=80',
      price: '150,000–400,000 VND לאדם',
    },
    {
      name: 'Bun Quay',
      desc: "מנה ייחודית לפו קווק — אטריות אורז עם פירות ים, עשבים ורוטב מיוחד. מוגשת יחד עם קשיו מטוגן. נדיר מחוץ לאי.",
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80',
      price: '60,000–90,000 VND',
    },
    {
      name: 'Nuoc Mam (רוטב דגים)',
      desc: "פו קווק מפורסמת בייצור רוטב הדגים הטוב בוייטנאם. טיול למפעל nuoc mam — חינמי ומעניין. קנו בקבוק לבית.",
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80',
      price: '50,000–200,000 VND לבקבוק',
    },
  ],
  foodTips: [
    "Duong Dong Night Market — שוק הלילה הגדול עם פירות ים ומנות מקומיות",
    'Ham Ninh Fishing Village — כפר דיגים עם מסעדות פירות ים טריות וזולות',
    "Pepper Farm Phu Quoc — האי מייצר פלפל שחור מעולה. קנו מהמטע ישירות",
  ],
  areas: [
    {
      name: 'Long Beach (Duong Dong)',
      type: 'מרכז תיירותי',
      recommended: true,
      desc: "החוף המרכזי הארוך — רוב המלונות, מסעדות וברים. נגיש לכל. שקיעות מרהיבות. הכי קל לתיירים.",
    },
    {
      name: 'Sao Beach Area',
      type: 'שקט ויפה',
      recommended: true,
      desc: "דרום האי — החוף הכי יפה. מלונות בוטיק קטנים ושקטים יותר. מצוין אם אתם רוצים שקט.",
    },
    {
      name: 'Ong Lang Beach',
      type: 'מקומי',
      recommended: false,
      desc: "חוף בצד מערב, פחות תיירותי. עצי קוקוס, מסעדות מקומיות. קצת פחות יפה מSao אבל שקט.",
    },
  ],
  gettingThere: [
    { from: "הו צ'י מין", method: 'טיסה', time: '55 דקות', icon: '✈️', price: '$20–50', flight: true },
    { from: 'האנוי', method: 'טיסה', time: '2 שעות', icon: '✈️', price: '$30–80', flight: true },
    { from: 'דה נאנג', method: 'טיסה', time: '1:30 שעות', icon: '✈️', price: '$25–60', flight: true },
    { from: 'Ha Tien (יבשה)', method: 'מעבורת', time: '1 שעה', icon: '⛴️', price: '$10–15' },
  ],
  localTransport: [
    'אופנוע להשכרה — $7-12/יום. הדרך הטובה לסייר',
    'Grab — זמין, אבל מוגבל יותר מבעיר גדולה',
    'מונית/van שכור — $30-50 ליום מלא עם נהג',
  ],
  accommodation: [
    { type: 'תקציב', price: '$15–35/לילה', desc: 'גסטהאוסים ומלוני בוטיק קטנים. Long Beach ו-Ong Lang.', examples: 'Cassia Cottage, Phu Quoc Backpacker' },
    { type: 'בינוני', price: '$50–120/לילה', desc: "ריזורטים עם בריכה ישירות על החוף — יחס מחיר-איכות מעולה.", examples: 'Mango Bay Resort, La Veranda Resort' },
    { type: 'יוקרה', price: '$200+/לילה', desc: 'ריזורטים מפואריים עם בריכה אינפיניטי ומגרש גולף.', examples: 'JW Marriott Phu Quoc, InterContinental Phu Quoc' },
  ],
  tips: [
    "עונה מומלצת: נובמבר-אפריל (ים שקט, שמש). מאי-אוקטובר — גשמים וים סוער",
    "שכרו אופנוע — האי גדול ואין תחבורה ציבורית מסודרת",
    "Sao Beach — הגיעו בבוקר מוקדם לפני קבוצות הסיורים",
    "רוטב הדגים המקומי — קנו מהמטע, לא מהחנויות התיירותיות",
    "ה-Cable Car — כרטיס מוקדם ב-$5 יותר זול. הזמינו אונליין",
    "ATM — יש מעט, קחו מזומן מהו צ'י מין לפני הטיסה",
  ],
  nextDest: { name: 'מוי נה', href: '/destinations/south/mui-ne' },
};

export default function PhuQuocPage() {
  return <DestinationPage dest={data} />;
}

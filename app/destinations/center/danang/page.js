import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: 'דה נאנג',
  subtitle: 'עיר החופים והגשרים',
  emoji: '🌉',
  heroImage: 'https://images.unsplash.com/photo-BxiS0T0PxQg?w=1600&q=80',
  regionName: 'מרכז וייטנאם',
  regionHref: '/destinations/center',
  tags: ['עיר', 'חוף', 'גשרים', 'שדה תעופה'],
  chabad: false,
  locationDesc: 'דה נאנג ממוקמת במרכז וייטנאם — שדה תעופה בינלאומי (DAD). 45 דקות מהוי אן, 3 שעות מהואה.',
  description: 'דה נאנג היא העיר הגדולה של מרכז וייטנאם — ניקיה, מודרנית וקלה לתנועה. גשר הדרקון המפורסם, חופים ארוכים ו-Ba Na Hills. בדרך כלל תחנת מעבר, אבל שווה יום-יומיים.',
  quickStats: [
    { label: 'שדה תעופה', value: 'DAD' },
    { label: 'מהוי אן', value: '45 דקות' },
    { label: 'מהאנוי', value: '1:15 שעות טיסה' },
    { label: 'חוף', value: 'My Khe' },
  ],
  attractions: [
    {
      name: 'גשר הדרקון (Dragon Bridge)',
      desc: 'גשר בצורת דרקון שנמתח על נהר Han — 666 מ\' ארוך עם 15,000 נורות LED. בשישי ושבת ב-21:00 הדרקון מנשפא אש ומים. ייחודי.',
      image: 'https://images.unsplash.com/photo-PknaOrb1lVo?w=600&q=80',
      tip: 'תפסו מקום ב-21:00 בשישי/שבת — אש ומים מהפה 10 דקות',
    },
    {
      name: 'Ba Na Hills',
      desc: 'פארק שעשועים הררי עם גשר הידיים המפורסם (Golden Bridge) מעל העננים בגובה 1,400 מ\'. רכבל ארוך, בית קפה צרפתי מוזנח ופארק שעשועים. תיירותי מאוד אבל ציורי.',
      image: 'https://images.unsplash.com/photo-5QbZIJV8k4E?w=600&q=80',
      tip: 'אוטובוס Futa כתום מדה נאנג: 30,000 VND לכל כיוון. חיפוש "Danabus" בגוגל',
    },
    {
      name: 'My Khe Beach',
      desc: 'אחד החופים הארוכים ביותר בוייטנאם — 30 ק"מ של חול לבן. גלים מצוינים לגלישה (surfing). נקי ורחב, פחות עמוס מחופים דרומיים.',
      image: 'https://images.unsplash.com/photo-v63UL8s28Ew?w=600&q=80',
    },
    {
      name: 'Marble Mountains',
      desc: 'חמישה הרי שיש עם שמות של מרכיבי הטבע (מים, אוויר, אש, מתכת, אדמה) — מלאים במקדשים ומערות מפתיעות. Huyen Khong Cave — מרשימה במיוחד.',
      image: 'https://images.unsplash.com/photo-8bffiHxMp4U?w=600&q=80',
      tip: '15 ק"מ דרומית לדה נאנג. כניסה: 40,000 VND. עלייה ברגל לנוף',
    },
  ],
  food: [
    {
      name: 'Mi Quang',
      desc: 'מנה מקומית ייחודית לדה נאנג — אטריות צהובות-כורכום עם שרימפס, חזיר ואגוזי קשיו. יבשה יותר מפו, עשירה בטעם.',
      image: 'https://images.unsplash.com/photo-_33r6H_hiz4?w=400&q=80',
      price: '35,000–55,000 VND',
    },
    {
      name: 'Banh Xeo',
      desc: 'פנקייק וייטנאמי פריך עשוי מקמח אורז וכורכום עם שרימפס, בשר וצמחי תבלין. אוכלים עם ירוקים ועוטפים בנייר אורז.',
      image: 'https://images.unsplash.com/photo-gdQjJOkTXsw?w=400&q=80',
      price: '40,000–70,000 VND',
    },
    {
      name: 'פירות ים בנמל Han',
      desc: 'מסעדות פירות ים על גדת נהר Han — שרימפס, קלמרי ולובסטר טריים. קנו בשוק ובקשו להכין.',
      image: 'https://images.unsplash.com/photo-uC5k8SozK9E?w=400&q=80',
      price: '100,000–300,000 VND',
    },
  ],
  foodTips: [
    'Con Market — שוק המקומיים הגדול. אוכל רחוב זול ואותנטי',
    'Han Market — קרוב לנהר, פירות ים טריים בבוקר',
    'Bun Cha Ca — מרק אטריות עם דג מעושן, מנה מקומית',
  ],
  areas: [
    {
      name: 'My Khe Beach Area',
      type: 'חוף',
      recommended: true,
      desc: 'החוף הראשי — ארוך, נקי, עם מלונות וכמה מסעדות. מצוין לשהייה ממוקדת בחוף.',
    },
    {
      name: 'Han River (מרכז העיר)',
      type: 'מרכז',
      recommended: true,
      desc: 'אזור הנהר עם הגשרים המפורסמים, מסעדות, ברים ושוקים. מרכז החיים של העיר.',
    },
    {
      name: 'Son Tra Peninsula',
      type: 'טבע',
      recommended: false,
      desc: 'חצי האי הטבעי עם קופי לנגור אדום — מגדלור, חופים שקטים ויערות טרופיים.',
    },
  ],
  gettingThere: [
    { from: 'האנוי', method: 'טיסה', time: '1:15 שעות', icon: '✈️', price: '$25–60', flight: true },
    { from: "הו צ'י מין", method: 'טיסה', time: '1:20 שעות', icon: '✈️', price: '$20–50', flight: true },
    { from: 'הוי אן', method: 'Grab / מונית', time: '45 דקות', icon: '🚕', price: '~200,000 VND' },
    { from: 'הואה', method: 'אוטובוס / רכבת', time: '3 שעות', icon: '🚌', price: '$5–10' },
  ],
  localTransport: [
    'Grab — מצוין. שדה תעופה לעיר: ~60,000–80,000 VND',
    'אופנוע להשכרה — $6–9/יום. לחוף ולסביבה',
    'אוטובוס Futa לBa Na Hills — 30,000 VND (Danabus)',
  ],
  accommodation: [
    { type: 'תקציב', price: '$12–25/לילה', desc: 'הוסטלים ומלונות קטנים ליד החוף.', examples: 'Brilliant Hotel, Memory Hostel' },
    { type: 'בינוני', price: '$40–100/לילה', desc: 'מלוני 3-4 כוכבים על חוף My Khe.', examples: 'Fusion Suites Da Nang, Brilliant Hotel' },
    { type: 'יוקרה', price: '$150+/לילה', desc: 'ריזורטים מפוארים ישירות על החוף.', examples: 'Hyatt Regency, InterContinental Da Nang' },
  ],
  tips: [
    'דה נאנג היא בסיס מצוין ליום אחד לכל כיוון — הוי אן (45 דקות), הואה (3 שעות)',
    'גשר הדרקון — אש ומים בשישי ושבת ב-21:00. הגיעו 20 דקות לפני',
    'Ba Na Hills — תיירותי אבל Golden Bridge הוא אייקוני. קחו אוטובוס 30K VND',
    'הוי אן קרובה — שהו בהוי אן ועשו יום אחד בדה נאנג במקום ההפך',
    'Grab מהשדה תעופה — זול ומהיר. אל תיכנסו למוניות רגילות',
  ],
  nextDest: { name: 'הואה', href: '/destinations/center/hue' },
};

export default function DaNangPage() {
  return <DestinationPage dest={data} />;
}

import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: 'הוי אן',
  subtitle: 'העיירה העתיקה הקסומה',
  emoji: '🏮',
  heroImage: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1600&q=80',
  regionName: 'מרכז וייטנאם',
  regionHref: '/destinations/center',
  tags: ['עיר עתיקה', 'UNESCO', 'פנסים', 'אוכל', 'חיטוט'],
  chabad: true,
  locationDesc: 'הוי אן ממוקמת 30 ק"מ דרומית לדה נאנג — 45 דקות מונית. שדה תעופה: Da Nang (DAD).',
  description: 'הוי אן היא אחת הערים היפות בדרום-מזרח אסיה — עיירה עתיקה מהמאה ה-15 השמורה בצורה מושלמת, עם פנסים צבעוניים, בתים צהובים ונהר Thu Bon השקט. בלילה הפנסים מואירים את הנהר וזה פשוט קסום.',
  quickStats: [
    { label: 'מדה נאנג', value: '45 דקות' },
    { label: 'מהואה', value: '3 שעות' },
    { label: 'UNESCO', value: 'מ-1999' },
    { label: 'ימים מומלצים', value: '2–3' },
  ],
  attractions: [
    {
      name: 'העיר העתיקה בלילה',
      desc: 'הפנסים הצבעוניים מואירים את הרחובות הצרים והנהר — חוויה שלא תשכחו לעולם. בלילה מלא, לנות ירח, משגרים פנסים על הנהר.',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
      tip: 'הגיעו בסביבות 18:00 לפני ההמונים. יום 14 ו-1 בלוח הירח — פסטיבל הפנסים המלא',
    },
    {
      name: 'Japanese Covered Bridge',
      desc: 'גשר מקורה מהמאה ה-16 שבנו סוחרים יפניים — הסמל של הוי אן. קצר אבל ציורי. כרטיס העיר העתיקה ($3) כולל כניסה לחמישה אתרים.',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
    },
    {
      name: 'חוף An Bang',
      desc: 'חוף 10 דקות מהעיר העתיקה — חול לבן, מים שקופים ופחות עמוס מחוף My Khe. בר על החוף, מסעדות דגים. שקט ומושלם.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
      tip: 'שכרו אופניים מהעיר העתיקה — 10 דקות ו-40,000 VND/יום',
    },
    {
      name: 'סדנאות בישול',
      desc: 'הוי אן ידועה בסדנאות הבישול שלה — הכי טובות בוייטנאם. ביקור בשוק, בישול White Rose + Cao Lau + Banh Mi. חוויה מומלצת מאוד.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
      tip: 'לפרטים: +84 121 396 6059. מחיר: $25–35 לאדם. הזמינו יום מראש',
    },
    {
      name: 'חיטוט אצל חיישן (Tailor)',
      desc: 'הוי אן מפורסמת בתפירה מותאמת אישית תוך 24–48 שעות — שמלות, חליפות, שרוולים. מחירים מצוינים ואיכות גבוהה.',
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&q=80',
      tip: 'Noom ב-Eli Tailor 2 — מומלצת חם ע"י מטיילים ישראלים. מקצועית ובמחירים הוגנים',
    },
    {
      name: 'My Son Sanctuary',
      desc: 'מקדשים הינדואיסטיים עתיקים של ממלכת Cham מהמאות ה-4–14 — 40 ק"מ מהוי אן. אתר יונסקו. פחות מרשים מאנגקור אבל ייחודי.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
      tip: 'הגיעו ב-06:00 — לפני החום ולפני הסיורים המאורגנים',
    },
  ],
  food: [
    {
      name: 'Cao Lau',
      desc: 'המנה האייקונית של הוי אן — אטריות עבות (מיוצרות ממים מבאר מקומית ספציפית!) עם בשר חזיר, קרוטונים פריכים וירוקים. אי אפשר לאכול את זה בשום מקום אחר.',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80',
      price: '35,000–60,000 VND',
    },
    {
      name: 'White Rose Dumplings',
      desc: 'כיסנים לבנים בצורת ורד עם מילוי שרימפס או חזיר — מיוחד לגמרי להוי אן. עדין, יפה וטעים. מוגש עם רוטב צ\'ילי-שום.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80',
      price: '30,000–50,000 VND',
    },
    {
      name: 'Banh Mi Phuong',
      desc: 'הכריך המפורסם ביותר בוייטנאם — Anthony Bourdain הכריז שהוא הכי טוב שטעם. תור ארוך אבל שווה כל דקה.',
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&q=80',
      price: '30,000–45,000 VND',
    },
    {
      name: 'Israeli House — ארוחת שישי',
      desc: 'ארוחת שישי בלילה עם קהילת ישראלים — 300,000 VND לאדם. ידידותית לצמחוני/vegan. יוצרים אווירה מיוחדת. כתובת: 2 Ly Thai To St.',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80',
      price: '300,000 VND',
    },
    {
      name: 'Good Eats Cafe',
      desc: 'בית קפה מומלץ בהוי אן — קפה מצוין, ארוחות בוקר טובות ואווירה נעימה. לצד העיר העתיקה.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80',
      price: '40,000–90,000 VND',
    },
  ],
  foodTips: [
    'Morning Glory Restaurant — מסעדה מפורסמת ומומלצת לכל מנות הוי אן',
    'שוק Hoi An — בוקר מוקדם עם מנות מקומיות טריות ב-30,000–40,000 VND',
    'Bestie Laundry — מכבסה מומלצת ליד המרכז',
  ],
  areas: [
    {
      name: 'Ancient Town (העיר העתיקה)',
      type: 'אזור UNESCO',
      recommended: true,
      desc: 'לב הוי אן — רחובות סגורים לכלי רכב בלילה, פנסים, בתים צהובים ואווירה קסומה. הכי יפה בלילה. רוב המטיילים ישנים כאן.',
    },
    {
      name: 'An Bang Beach',
      type: 'חוף',
      recommended: true,
      desc: 'חוף 10 דקות מהעיר העתיקה — שקט יותר מ-My Khe, עם בר ים ומסעדות. מומלץ לאחר הטיול בעיר.',
    },
    {
      name: 'Cam Nam Island',
      type: 'מקומי',
      recommended: false,
      desc: 'אי שקט מעבר לנהר — אווירה מקומית, מחירים נמוכים. קצת רחוק מהפעולה אבל שקט לישון.',
    },
  ],
  gettingThere: [
    { from: 'דה נאנג', method: 'מונית / Grab', time: '45 דקות', icon: '🚕', price: '~200,000 VND' },
    { from: 'הואה', method: 'אוטובוס / מונית', time: '3 שעות', icon: '🚌', price: '$5–10' },
    { from: 'האנוי', method: 'טיסה לדה נאנג + מונית', time: '1:45 שעות', icon: '✈️', price: '$30–65', flight: true },
    { from: "הו צ'י מין", method: 'טיסה לדה נאנג + מונית', time: '2 שעות', icon: '✈️', price: '$25–55', flight: true },
  ],
  localTransport: [
    'אופניים — הדרך הכי נחמדה. 40,000–60,000 VND/יום מכל גסטהאוס',
    'אופנוע חשמלי — 100,000–150,000 VND/יום. לחוף ולפרברים',
    'Grab לא פעיל בתוך העיר העתיקה — הוסיפו 10 דקות הליכה',
  ],
  accommodation: [
    { type: 'הוסטל', price: '$10–20/לילה', desc: 'Happy Town Hostel — מומלץ ליד העיר העתיקה. DKS Hostel — תקציב נמוך.', examples: 'Happy Town Hostel, DKS Hostel' },
    { type: 'בינוני', price: '$30–70/לילה', desc: 'מלונות בוטיק בעיר העתיקה עם עיצוב מדהים. Nem\'s House — מומלץ.', examples: 'Nem\'s House, Hoi An Trails Resort' },
    { type: 'יוקרה', price: '$100+/לילה', desc: 'ריזורטים על החוף או בתוך העיר העתיקה עם בריכה.', examples: 'Golden Holiday Hotel & Spa, Anantara Hoi An' },
  ],
  tips: [
    'כרטיס העיר העתיקה ($3) — כניסה ל-5 אתרים, קנו מרשות העיר (לא מסוחרים)',
    'Noom ב-Eli Tailor 2 — חיישן מומלצת. לבדוק ב-Google Maps',
    'סדנת בישול — חוויה מרכזית בהוי אן, הזמינו יום מראש',
    'Israeli House: שישי 300K VND/אדם. דודי: +972-544-802424 (WhatsApp)',
    'אפריל–אוגוסט — מזג אוויר מושלם. נובמבר–ינואר — גשמים וסיכוי לשיטפונות',
    'בית חב"ד בהוי אן — ארוחות שישי ושבת, קרוב לעיר העתיקה',
  ],
  chabadInfo: [
    'בית חב"ד הוי אן — קרוב לעיר העתיקה',
    'Israeli House: ארוחות שישי, 300K VND/אדם. דודי: +972-544-802424',
    'כתובת Israeli House: 2 Ly Thai To St, Hoi An',
  ],
  nextDest: { name: 'דה נאנג', href: '/destinations/center/danang' },
};

export default function HoiAnPage() {
  return <DestinationPage dest={data} />;
}

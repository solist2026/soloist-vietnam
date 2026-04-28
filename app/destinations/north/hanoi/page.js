import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: 'האנוי',
  subtitle: 'עיר הבירה המסתורית',
  emoji: '🏛️',
  heroImage: 'https://images.unsplash.com/photo-1533497394934-b33cd9695ba9?w=1600&q=80',
  regionName: 'צפון וייטנאם',
  regionHref: '/destinations/north',
  tags: ['עיר בירה', 'תרבות', 'אוכל', 'היסטוריה'],
  chabad: true,
  locationDesc: 'האנוי ממוקמת בצפון וייטנאם, כ-2 שעות מהלונג ביי ו-5-6 שעות מסאפה. שדה תעופה: Noi Bai (HAN)',
  description: 'האנוי, עיר הבירה של וייטנאם, היא ניגוד מרתק בין העתיק לחדיש — אגמים שקטים, מקדשים עתיקים ורחובות צרים מלאי חיים לצד בניינים מודרניים וקפה ביצה מפורסם. מרכז תיירותי ישראלי עמוס, בעיקר ב-Old Quarter.',
  quickStats: [
    { label: 'ימים מומלצים', value: '2–3' },
    { label: 'Grab לשדה תעופה', value: '~250K VND' },
    { label: 'שדה תעופה', value: 'HAN' },
    { label: 'בית חב"ד', value: '✓ פעיל' },
  ],
  attractions: [
    {
      name: 'אגם חרב (Hoan Kiem)',
      desc: 'לב האנוי — האגם האגדי עם מקדש Ngoc Son הצף על מים ירוקים. חובה בשעות הבוקר המוקדמות לפני ההמונים. בסופי שבוע הרחובות סביב האגם נסגרים לכלי רכב.',
      image: 'https://images.unsplash.com/photo-1553851919-596510268b99?w=600&q=80',
      tip: 'הגיעו ב-06:00–07:00 — האנוואים מתאמנים מסביב לאגם ואווירה שקטה',
    },
    {
      name: 'Old Quarter — העיר העתיקה',
      desc: '36 רחובות עתיקים, כל אחד עם מקצוע היסטורי משלו (רחוב הנחושת, רחוב הנייר). הלב הפועם של האנוי — מסעדות, ברים, הוסטלים וחיי לילה. רוב הישראלים ישנים כאן.',
      image: 'https://images.unsplash.com/photo-1533497394934-b33cd9695ba9?w=600&q=80',
      tip: 'טיול רגלי בלי מפה — כל פינה מגלה משהו חדש',
    },
    {
      name: 'מקדש הספרות (Temple of Literature)',
      desc: 'האוניברסיטה הראשונה בוייטנאם מ-1070, מוקדשת לקונפוציוס. חמישה חצרות מרהיבות עם בריכות, עצים עתיקים וסטלות אבן עם שמות בוגרים.',
      image: 'https://images.unsplash.com/photo-1553851919-596510268b99?w=600&q=80',
      tip: 'כניסה: 30,000 VND. קדמו 08:00–09:00 לפני הסיורים המאורגנים',
    },
    {
      name: 'הו טאי (West Lake)',
      desc: 'האגם הגדול של האנוי — 17 ק"מ של שפה מוקפת מסעדות, בתי קפה ומקדשים. שאנטי יותר מ-Old Quarter, מגנט לאנשי עסקים ועצים.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    },
    {
      name: 'מוזיאון האתנולוגיה',
      desc: 'אחד ממוזיאוני האתנולוגיה הטובים בדרום-מזרח אסיה — 54 קבוצות אתניות של וייטנאם מוצגות עם בגדים, כלים ובתים מסורתיים. מעניין מאוד.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
      tip: 'הגיעו ביום שלישי עד ראשון (סגור בשני). כניסה: 40,000 VND',
    },
    {
      name: 'שוק Dong Xuan',
      desc: 'השוק הגדול והוותיק ביותר של האנוי — שלוש קומות של ממתקים, בגדים, ירקות וחפצי בית. האטמוספרה המקומית האמיתית. מיקוח חובה.',
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&q=80',
    },
  ],
  food: [
    {
      name: 'Bun Cha',
      desc: 'המנה האנואית הקלאסית — כדורי חזיר וצלעות על גריל, מוגשים בציר מתוק-חמוץ עם אטריות אורז ועשבים. Anthony Bourdain ואובמה אכלו אותה ביחד.',
      image: 'https://plus.unsplash.com/premium_photo-1695409300130-44add563c1eb?w=400&q=80',
      price: '40,000–60,000 VND',
    },
    {
      name: 'Pho Bo (פו בקר)',
      desc: 'מרק האטריות המפורסם — האנוי היא עיר מולדתו. הגרסה הצפונית עדינה יותר מהדרומית, עם ציר צלול ונקי. ארוחת בוקר קלאסית.',
      image: 'https://plus.unsplash.com/premium_photo-1695409300130-44add563c1eb?w=400&q=80',
      price: '45,000–80,000 VND',
    },
    {
      name: 'Egg Coffee (קפה ביצה)',
      desc: 'המצאה האנואית הייחודית — קפה רובוסטה עם קצפת ביצה חלמון. מראה כמו קפוצ\'ינו אבל טעם של קינוח. המקום המקורי: Cafe Giang ב-Old Quarter.',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80',
      price: '30,000–50,000 VND',
    },
    {
      name: 'Banh Mi',
      desc: 'הכריך הוייטנאמי מבאגט צרפתי עם פטה, נקניק, כבד, ירוקים וצ\'ילי. בהאנוי קצת שונה מהדרום — עדין יותר.',
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&q=80',
      price: '25,000–40,000 VND',
    },
    {
      name: 'Sushi Ichi',
      desc: 'המסעדה היפנית הכי מומלצת בהאנוי על ידי מטיילים ישראלים — "מטורף". לא קלאסי וייטנאמי אבל אם מתגעגעים לסושי.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80',
    },
    {
      name: 'סמודי בול',
      desc: 'בולות סמודי בריאות וטעימות מאוד — מומלצות ל-vegan. כמה מקומות ב-Old Quarter.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80',
      price: '60,000–90,000 VND',
    },
  ],
  foodTips: [
    'Bun Bo Nam Bo — מנה מומלצת נוספת, גרסה יבשה של בון צ\'ה',
    'Good Times Vietnam ו-Chops — מומלצים לברגרים אם מתגעגעים',
    'חפשו דוכנים עמוסים — סימן לאוכל טרי ואמין',
    'שעות אוכל: ארוחת בוקר 06:00–09:00, צהריים 11:00–13:00',
  ],
  areas: [
    {
      name: 'Old Quarter (העיר העתיקה)',
      type: 'אזור תיירותי',
      recommended: true,
      desc: 'הלב הפועם של האנוי — רחובות צרים ועמוסים, הוסטלים, מסעדות וחיי לילה. מרחק הליכה מכל האטרקציות. רועש אבל מלא אנרגיה. רוב הישראלים ישנים כאן.',
    },
    {
      name: 'Hoan Kiem (אגם חרב)',
      type: 'בינוני–יוקרה',
      recommended: true,
      desc: 'שקט יותר מ-Old Quarter, מסביב לאגם המפורסם. מחירים קצת גבוהים יותר אבל נוח ומרכזי. קרוב לסניפי מסעדות מעולות.',
    },
    {
      name: 'Ba Dinh',
      type: 'היסטורי',
      recommended: false,
      desc: 'האזור הממשלתי-היסטורי עם מוזיאון הו צ\'י מין ומקדש הספרות. לא מומלץ ללינה — אין הרבה חיים בלילה, אבל כדאי לביקור יומי.',
    },
    {
      name: 'Tay Ho (West Lake)',
      type: 'שקט ומקומי',
      recommended: false,
      desc: 'שכונת עצים ואנשי עסקים מסביב לאגם המערבי. שקט, פחות תיירותי, מסעדות מצוינות. מתאים לשהייה ממושכת יותר.',
    },
  ],
  gettingThere: [
    { from: 'שדה התעופה (Noi Bai)', method: 'Grab בלבד — אל תיכנסו למונית רגילה!', time: '40–60 דקות', icon: '✈️', price: '~250,000 VND', flight: false },
    { from: 'הלונג ביי', method: 'אוטובוס / מיניבוס', time: '3.5 שעות', icon: '🚌', price: '$5–10', flight: false },
    { from: 'סאפה', method: 'אוטובוס לילה / רכבת', time: '5–6 שעות', icon: '🚌', price: '$10–20', flight: false },
    { from: 'ניין בינה', method: 'אוטובוס / מונית', time: '2 שעות', icon: '🚌', price: '$5–8', flight: false },
    { from: 'הא גיאנג', method: 'אוטובוס לילה (Vexere)', time: '6–7 שעות', icon: '🚌', price: '$8–12', flight: false },
    { from: 'דה נאנג', method: 'טיסה פנימית', time: '1:15 שעות', icon: '✈️', price: '$25–60', flight: true },
    { from: 'הו צ\'י מין', method: 'טיסה פנימית', time: '2 שעות', icon: '✈️', price: '$30–70', flight: true },
    { from: 'הוי אן', method: 'טיסה לדה נאנג + מונית', time: '1:45 שעות', icon: '✈️', price: '$30–65', flight: true },
  ],
  localTransport: [
    'Grab — האפליקציה החיונית, מחיר קבוע. גם אופנוע (Grab Bike) וגם מונית (Grab Car)',
    'הליכה — Old Quarter קטן מספיק להליכה בין כל האטרקציות',
    'אופניים חשמליים — השכרה ~100,000 VND/יום. כיף לאגם המערבי',
    'אל תיכנסו למונית ללא מד — תמחור תיירות',
  ],
  accommodation: [
    { type: 'תקציב נמוך — הוסטל', price: '250K–500K VND', desc: 'The Charming Hostel (500K/לילה זוגי — "חדר סבבה לגמרי"), Awesome Hostel (דורמס מומלצים)', examples: 'Old Quarter, Hoan Kiem' },
    { type: 'תקציב בינוני', price: '$20–50/לילה', desc: 'מלונות בוטיק ב-Old Quarter עם AC, WiFi ולעיתים ארוחת בוקר.', examples: 'La Ava\'s Home — מומלצת' },
    { type: 'תקציב גבוה', price: '$70+/לילה', desc: 'מלונות 4-5 כוכבים עם בריכה ושירות מלא.', examples: 'The Oriental Jade & Spa' },
  ],
  tips: [
    'החלפת כסף: חנות זהב ב-130 Hang Bac — שערים טובים מהבנק, עדיפים על כספומט',
    '3 ימים מספיקים לרוב האטרקציות. יומיים אם אתם בלחץ',
    'VPBank — כספומט עם עמלות נמוכות יחסית',
    'SIM: לא לקנות בשדה תעופה — קנו ב-Viettel בעיר (זול יותר)',
    'חציית כביש: לכו לאט ובקצב קבוע — כלי הרכב יעקפו אתכם. עצרו פתאום ויפגעו בכם',
    'שעות עומס: 07:00–09:00 ו-17:00–19:00 — פקקים כבדים',
    'Beer Hoi (bia hoi) — בירה מקומית בחצי שקל. הצומת המפורסם: Bia Hoi Corner',
    'בית חב"ד: WhatsApp +84-83-872-8225 | jewishhanoi.com',
  ],
  chabadInfo: [
    'בית חב"ד האנוי — Old Quarter',
    'WhatsApp: +84-83-872-8225 | אתר: jewishhanoi.com',
    'ארוחות שישי ושבת, חגים, מידע לתיירים',
    'כרטיסי פסח 2026 באתר Jewishhanoi.com/s5786',
  ],
  nextDest: { name: 'לופ הא גיאנג', href: '/destinations/north/ha-giang' },
};

export default function HanoiPage() {
  return <DestinationPage dest={data} />;
}

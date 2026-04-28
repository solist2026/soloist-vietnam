import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: "הו צ'י מין",
  subtitle: 'העיר שלא ישנה',
  emoji: '🏙️',
  heroImage: 'https://images.unsplash.com/photo-wUk2U5Wirxg?w=1600&q=80',
  regionName: 'דרום וייטנאם',
  regionHref: '/destinations/south',
  tags: ['עיר', 'היסטוריה', 'אוכל', 'חיי לילה'],
  chabad: true,
  locationDesc: "הו צ'י מין (סייגון לשעבר) ממוקמת בדרום וייטנאם — שדה התעופה הבינלאומי Tan Son Nhat (SGN) הוא הגדול בוייטנאם.",
  description: "הו צ'י מין היא הלב הפועם של וייטנאם — עיר ענקית, תוססת ומודרנית. ברחובות הצרים של District 1 ממשיכים להדהד ההיסטוריה של המלחמה, לצד מסעדות גורמה, ברים על הגג ומרכזי קניות מבריקים. שתי-שלושה ימים כאן יתנו לכם טעימה מהאנרגיה הייחודית של הדרום.",
  quickStats: [
    { label: 'שדה תעופה', value: 'SGN' },
    { label: 'מהאנוי', value: '2 שעות טיסה' },
    { label: 'ל-Phu Quoc', value: '1 שעה טיסה' },
    { label: 'ימים מומלצים', value: '2–3' },
  ],
  attractions: [
    {
      name: 'War Remnants Museum',
      desc: "מוזיאון ייחודי ומרגש על מלחמת וייטנאם מהצד הוייטנאמי — תמונות נאפלם, כלי נשק, עדויות. לא קל לצפייה אבל חובה. מהמוזיאונים החשובים בדרום-מזרח אסיה.",
      image: 'https://images.unsplash.com/photo-eilpDNi_pV4?w=600&q=80',
      tip: 'כניסה: 40,000 VND. פתוח 07:30-18:00. קחו שעתיים לפחות',
    },
    {
      name: 'Cu Chi Tunnels',
      desc: "מנהרות המחתרת של גרילה Viet Cong — 250 ק\"מ של מנהרות מתחת לאדמה שאפשרו לוחמים לחיות, לאכול ולהילחם מתחת לאמריקאים. אפשר לזחול בתוכן.",
      image: 'https://images.unsplash.com/photo-6p2AkWAIC8E?w=600&q=80',
      tip: '40 ק"מ מהמרכז. סיור מאורגן: $15-25 כולל הסעה. Ben Dinh Section — פחות תיירותי',
    },
    {
      name: 'Notre-Dame Cathedral & Central Post Office',
      desc: 'שני אייקונים צרפתיים במרכז District 1 — הקתדרלה האדומה (1880) ובית הדואר המפואר. ממחישים את תקופת השלטון הצרפתי. צילומים מצוינים.',
      image: 'https://images.unsplash.com/photo-aF36oyxbgB0?w=600&q=80',
    },
    {
      name: 'Ben Thanh Market',
      desc: 'שוק המסורת הגדול של סייגון — מזכרות, בגדים, אוכל רחוב. קמעונאי בפנים, שוק לילה בחוץ אחרי 18:00. תיירותי אבל אטמוספרי.',
      image: 'https://images.unsplash.com/photo-8zEwT3vLtbE?w=600&q=80',
      tip: 'מיקוח חובה. מחירים ראשוניים מנופחים פי 3. קנו מזכרות כאן',
    },
    {
      name: 'District 1 Rooftop Bars',
      desc: "ברים על גגות ביל 29, 51, ו-Chill Skybar — נוף פנורמי לסייגון הלילית. Bui Vien Walking Street — רחוב הבירה של תיירים. אנרגיה עצומה בלילה.",
      image: 'https://images.unsplash.com/photo-soYzQJvctKI?w=600&q=80',
      tip: 'Chill Skybar ב-AB Tower — מומלץ. Drink prices: 120,000-250,000 VND',
    },
    {
      name: 'Jade Emperor Pagoda',
      desc: 'הפגודה הסינית הכי יפה בסייגון — מלאה בפסלים, עשן קטורת ואמינות דתית עמוקה. פחות תיירותי מאטרקציות אחרות, אבל מרשים יותר.',
      image: 'https://images.unsplash.com/photo-rqstnU11Roc?w=600&q=80',
    },
  ],
  food: [
    {
      name: 'Pho',
      desc: "מרק האטריות הלאומי — בהו צ'י מין מגישים גרסת דרום עם עשבים, נבטים ורוטב hoisin. בבוקר בכל מקום. Pho Hung ו-Pho Thanh Xuan — מומלצות.",
      image: 'https://images.unsplash.com/photo-eN9vAXAQvEw?w=400&q=80',
      price: '50,000–80,000 VND',
    },
    {
      name: 'Banh Mi',
      desc: "כריך הבאגט הוייטנאמי — הגרסה הדרומית עשירה יותר עם פטה, שף בשרים וירוקים. Huynh Hoa Bakery — נחשב לכי טוב בסייגון. תור ארוך.",
      image: 'https://images.unsplash.com/photo-rsEBnoAuGM4?w=400&q=80',
      price: '30,000–50,000 VND',
    },
    {
      name: 'Com Tam',
      desc: "אורז שבור עם חזיר גריל, ביצת עין וירוקים — ארוחת הפועלים שהפכה לאהובה על כולם. Com Tam Bui Saigon — אייקונית.",
      image: 'https://images.unsplash.com/photo-_33r6H_hiz4?w=400&q=80',
      price: '40,000–70,000 VND',
    },
    {
      name: 'אוכל ישראלי',
      desc: 'בית חב"ד מגיש ארוחות שבת ומוצ"ש. בנוסף: כמה מסעדות ידידותיות לישראלים ב-District 1.',
      image: 'https://images.unsplash.com/photo-MjYzuyjPUFo?w=400&q=80',
      price: 'תרומה / מחיר קבוע',
    },
  ],
  foodTips: [
    "Co Ba Vung Tau — מסעדת פירות ים מפורסמת ב-District 4",
    'Quan Bun Bo Hue Co Tuyet — Bun Bo Hue הכי טוב בסייגון',
    "Cho Ben Thanh — שוק הלילה לאוכל רחוב זול וטעים",
  ],
  areas: [
    {
      name: 'District 1',
      type: 'מרכז תיירותי',
      recommended: true,
      desc: "הלב של סייגון — מלונות, מסעדות, ברים, אטרקציות. Bui Vien לחיי לילה, Dong Khoi לקניות. הכי קל לתיירים.",
    },
    {
      name: 'District 3',
      type: 'מקומי ועדכני',
      recommended: true,
      desc: 'שכונת מגורים תוססת עם קפה-חנויות מעוצבות, מסעדות מקומיות ופחות תיירים. קרובה ל-District 1.',
    },
    {
      name: 'Binh Thanh / District 2',
      type: 'אקספט',
      recommended: false,
      desc: 'רבעים מתפתחים עם ברים ומסעדות חדשות. Thao Dien (District 2) — שכונת אקספטים. רחוק יותר.',
    },
  ],
  gettingThere: [
    { from: 'האנוי', method: 'טיסה', time: '2 שעות', icon: '✈️', price: '$25–60', flight: true },
    { from: 'דה נאנג', method: 'טיסה', time: '1:20 שעות', icon: '✈️', price: '$20–50', flight: true },
    { from: 'פו קווק', method: 'טיסה', time: '55 דקות', icon: '✈️', price: '$20–40', flight: true },
    { from: 'פנום פן', method: 'Giant Ibis', time: '6 שעות', icon: '🚌', price: '$15–20' },
  ],
  localTransport: [
    'Grab — עובד מצוין. שדה תעופה לDistrict 1: ~100,000-150,000 VND',
    'אופנוע Grab (GrabBike) — זול יותר לנסיעות קצרות',
    'מטרו (Metro Line 1) — בבנייה/השקה. בינתיים אוטובוס ציבורי',
  ],
  accommodation: [
    { type: 'תקציב', price: '$10–25/לילה', desc: 'הוסטלים ומלונות מיני ב-District 1 וסביבת Bui Vien.', examples: 'The Hideout Hostel, Saigon Backpacker' },
    { type: 'בינוני', price: '$40–100/לילה', desc: 'מלוני 3-4 כוכבים ב-District 1 עם נוף לעיר.', examples: 'Liberty Central Hotel, Caravelle Signature' },
    { type: 'יוקרה', price: '$150+/לילה', desc: 'מלונות 5 כוכבים במרכז העיר עם בריכה ואווירת אפוך הזהב.', examples: 'Park Hyatt Saigon, Sofitel Saigon Plaza' },
  ],
  tips: [
    "שדה התעופה Tan Son Nhat — קחו Grab ולא מונית. לDistrcit 1: ~100-150K VND",
    "Cu Chi Tunnels — אל תלכו לחוד, קחו סיור עם מדריך",
    "הזהרו מנהגי xe om (אופנוע) ומוניות ללא מונה — דרשו Grab",
    "עונת הגשמים: מאי-נובמבר — גשמים כבדים אחר הצהריים אבל קצרים",
    "סייגון מוזכרת עדיין בפי המקומיים — שם רשמי: Ho Chi Minh City",
    "District 4 — פירות ים זולים ואותנטיים, 10 דקות מDistrict 1",
  ],
  chabadInfo: [
    "בית חב\"ד הו צ'י מין — District 1",
    "ארוחות שישי ושבת, התקשרו לפרטים",
    "כתובת: District 1, Ho Chi Minh City",
  ],
  nextDest: { name: 'פו קווק', href: '/destinations/south/phu-quoc' },
};

export default function HCMCPage() {
  return <DestinationPage dest={data} />;
}

import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: 'סאפה',
  subtitle: 'הרים, ערפל ושדות אורז',
  emoji: '🌾',
  heroImage: '/sapa-hero.jpg',
  regionName: 'צפון וייטנאם',
  regionHref: '/destinations/north',
  tags: ['הרים', 'שבטים', 'טרקים', 'שדות אורז'],
  chabad: true,
  locationDesc: 'סאפה ממוקמת בצפון-מערב וייטנאם, גובה 1,600 מ\', גובלת בסין. כ-6 שעות מהאנוי (אוטובוס/רכבת לילה).',
  description: 'סאפה היא עיירה הררית עם שדות אורז מדורגים שנמשכים לאינסוף, שבטים מקומיים צבעוניים וערפל שמכסה הכל. בוקר בסאפה — עם קפה ונוף לשדות — הוא חוויה שמוחקים.',
  quickStats: [
    { label: 'גובה', value: '1,600 מ\'' },
    { label: 'מהאנוי', value: '5–6 שעות' },
    { label: 'עונה מומלצת', value: 'ספט–נוב' },
    { label: 'בית חב"ד', value: '✓' },
  ],
  attractions: [
    {
      name: 'שדות אורז מדורגים',
      desc: 'הנוף האייקוני של סאפה — שדות מדורגים ירוקים/זהובים שנבנו ידנית על ידי שבטי ה-Hmong. הכי יפים בספטמבר-אוקטובר (קציר) ויוני-יולי (ירוק עז). מסלולי טיול בין הכפרים.',
      image: 'https://plus.unsplash.com/premium_photo-1661917179706-33e305a4ee45?w=600&q=80',
      tip: 'Muong Hoa Valley — המסלול הכי יפה לטיול יומי',
    },
    {
      name: 'פנסיפן (Fansipan)',
      desc: '"גג אינדוצ\'ינה" — ההר הגבוה ביותר בוייטנאם (3,143 מ\'). עלייה רגלית: 2 ימים קשים. רכבל: 15 דקות ו-750,000 VND. נוף מעל העננים.',
      image: 'https://images.unsplash.com/photo-1665905905591-fb66b0496481?w=600&q=80',
      tip: 'רכבל מומלץ — החוויה היא הנוף ולא הסבל. בדקו בהירות לפני עלייה',
    },
    {
      name: 'כפרי שבטים',
      desc: 'Black Hmong (סאפה), Red Dao (Ta Phin), Tay (Cat Cat Village) — כל שבט עם תרבות, בגדים ומסורת ייחודית. Cat Cat Village — 20 דקות הליכה ממרכז סאפה.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
      tip: 'Cat Cat — 60,000 VND כניסה. קצת תיירותי אבל נגיש ויפה',
    },
    {
      name: 'Silver Waterfall & Love Waterfall',
      desc: 'שני מפלים מרהיבים 12 ק"מ מסאפה לכיוון Ma Cai. Silver Waterfall — מרשים וגבוה. Love Waterfall — קסום וירוק, בתוך יער.',
      image: 'https://images.unsplash.com/photo-1553851919-596510268b99?w=600&q=80',
    },
    {
      name: 'שוק סאפה',
      desc: 'שוק שבועי צבעוני עם בגדי שבטים, כסף ותכשיטים, ירקות הרריים ותוצרת מקומית. שבת בבוקר מוקדם — הכי עמוס ואותנטי.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    },
  ],
  food: [
    {
      name: 'Thang Co',
      desc: 'מרק מסורתי של שבטי H\'mong עם בשר סוס — מנה קצה לנועזים. מוגשת בשוק השבועי ב-Bac Ha.',
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&q=80',
    },
    {
      name: 'סלמון הררי',
      desc: 'דגי סלמון מגידול מקומי בנהרות קרים — מנה ייחודית לאזור סאפה. מוגשת בגריל, מאודה או חי בסשימי. טעים ורענן.',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80',
      price: '150,000–250,000 VND',
    },
    {
      name: 'ירקות הרריים',
      desc: 'כרוב, פלפל, בצל ירוק שגדלים בגובה — טעם חריף ועשיר שלא תמצאו במישור. בכל ארוחה מקומית.',
      image: 'https://images.unsplash.com/photo-1533497394934-b33cd9695ba9?w=400&q=80',
    },
    {
      name: 'חם יין אורז (Corn Rice Wine)',
      desc: 'יין תירס מסורתי של השבטים — חריף מאוד, מוגש בקנה במסגרת ביקורי בתים. חוויה תרבותית.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80',
    },
  ],
  foodTips: [
    'Little Sapa Restaurant — מומלצת למנות וייטנאמיות קלאסיות',
    'The Hill Station Signature Restaurant — עם נוף לשדות ואוכל מקומי מעובד',
    'שוק הירקות בסאפה (05:30–08:00) — שלל מוצרים טריים במחירי מקומיים',
  ],
  areas: [
    {
      name: 'מרכז סאפה',
      type: 'ראשי',
      recommended: true,
      desc: 'כל המלונות הראשיים, מסעדות, ספקי טיולים ושוק. קרוב לרכבל פנסיפן. רועש יחסית בעונת שיא.',
    },
    {
      name: 'Muong Hoa Valley',
      type: 'כפרים',
      recommended: true,
      desc: 'העמק היפה ביותר מסביב לסאפה עם כפרי Hmong ומסלולי טיול. 3–4 שעות הליכה הלוך חזור.',
    },
    {
      name: 'Ta Phin Village',
      type: 'שבטי Red Dao',
      recommended: false,
      desc: 'כפר של שבט Red Dao המפורסם בצביעת האינדיגו ובאמבטיות צמחי מרפא. 15 ק"מ מסאפה.',
    },
  ],
  gettingThere: [
    { from: 'האנוי', method: 'אוטובוס לילה Limousine / Sleeper', time: '5–6 שעות', icon: '🚌', price: '$10–25' },
    { from: 'האנוי', method: 'רכבת לילה לLao Cai + מיניבוס לסאפה', time: '8–9 שעות', icon: '🚂', price: '$15–30' },
    { from: 'הא גיאנג', method: 'אוטובוס / מיניבוס', time: '8–9 שעות', icon: '🚌', price: '$15–25' },
    { from: 'מאי צ\'או', method: 'אוטובוס / מוניות', time: '4–5 שעות', icon: '🚌', price: '~800K VND מונית' },
  ],
  localTransport: [
    'אופנוע להשכרה — ליד Firona Fly Hotel. $6–10/יום',
    'מדריכים מקומיים — נשים מ-Black Hmong מציעות עצמן כמדריכות. $10–15 ליום, לגיטימי ומומלץ',
    'מיניבוסים לנקודות תיירות — Silver Waterfall, Cat Cat, Ta Phin',
  ],
  accommodation: [
    { type: 'הוסטל / Guesthouse', price: '$10–25/לילה', desc: 'Sapa Light Hostel — תקציב נמוך עם נוף. Flaco Homestay — מומלץ מאוד.', examples: 'Flaco Homestay, Sapa Light Hostel' },
    { type: 'מלון בינוני', price: '$30–70/לילה', desc: 'מלונות עם נוף לשדות האורז — שווים כל שקל. Mega View Homestay מומלץ.', examples: 'Mega View Homestay' },
    { type: 'הומסטיי בכפר', price: '$15–30/לילה', desc: 'לינה עם משפחת Hmong — חוויה אמיתית. Mama Van מומלצת חם על ידי ישראלים.', examples: 'Mama Van — מומלצת! (Mama Shusha — להימנע)' },
    { type: 'מלון יוקרה', price: '$80+/לילה', desc: 'KK Sapa Hotel — יוקרה עם בריכה ונוף פנורמי לעמק.', examples: 'KK Sapa Hotel, Pao\'s Sapa Leisure Hotel' },
  ],
  tips: [
    'Mama Van — ממולצת חם ע"י ישראלים להומסטיי. Mama Shusha — להימנע (בעיות בטיחות ותגובות קיצוניות)',
    'מזג אוויר: בדקו תחזית! ינואר-פברואר — קר עד 0°C. ספטמבר-אוקטובר — ירוק ביותר',
    'בגדים חמים — גם בקיץ לילות קרירים. ג\'קט שמנת חובה',
    'רכבת הלילה מהאנוי = חוויה. הזמינו כרטיס מבעוד מועד ב-Baolau.com',
    'מדריכי Hmong מקומיים — תמכו בהם ישירות, מחיר הוגן ויש יחס אישי',
    'בית חב"ד בסאפה — ארוחות שישי ושבת',
  ],
  chabadInfo: [
    'בית חב"ד פעיל בסאפה — מתאים לישראלים בצפון',
    'ארוחות שישי ושבת, שבתות וחגים',
    'צרו קשר דרך WhatsApp לפרטים עדכניים',
  ],
  nextDest: { name: 'ניין בינה', href: '/destinations/north/ninh-binh' },
};

export default function SapaPage() {
  return <DestinationPage dest={data} />;
}

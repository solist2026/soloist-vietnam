import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: 'הואה',
  subtitle: 'עיר הקיסרים',
  emoji: '👑',
  heroImage: 'https://images.unsplash.com/photo-1664333039578-28ad613ee536?w=1600&q=80',
  regionName: 'מרכז וייטנאם',
  regionHref: '/destinations/center',
  tags: ['קיסרים', 'היסטוריה', 'UNESCO', 'אוכל', 'נהר'],
  chabad: false,
  locationDesc: 'הואה ממוקמת 100 ק"מ צפונית לדה נאנג (3 שעות) ו-680 ק"מ דרומית להאנוי. שדה תעופה: Phu Bai (HUI).',
  description: 'הואה הייתה בירת וייטנאם הקיסרית של שושלת Nguyen עד 1945. היום היא שומרת על אוצרות היסטוריים עצומים — ארמון קיסרי, קברי קיסרים מפוארים ואחד מאוכלי הדגל הטובים בוייטנאם.',
  quickStats: [
    { label: 'מדה נאנג', value: '3 שעות' },
    { label: 'מהאנוי', value: '2 שעות טיסה' },
    { label: 'שדה תעופה', value: 'HUI' },
    { label: 'UNESCO', value: 'מ-1993' },
  ],
  attractions: [
    {
      name: 'Hue Imperial Citadel',
      desc: 'המצודה הקיסרית העצומה — 10 קמ"ר מוקפים חומות ומבצר. בתוכה: 100+ בניינים, ארמונות, מקדשים וגנים. נזקי המלחמה נראים עדיין. אתר UNESCO מרשים.',
      image: 'https://images.unsplash.com/photo-1553851919-596510268b99?w=600&q=80',
      tip: 'כניסה: 200,000 VND. קחו 3–4 שעות. השכירו אופנוע לשאר האטרקציות',
    },
    {
      name: 'קבר הקיסר Tu Duc',
      desc: 'הקבר המפורסם והיפה ביותר — בריכות, ביתן ורומנטיקה. הקיסר בנה אותו לעצמו בחייו כמקום מנוחה וכתיבת שירה.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
      tip: '7 ק"מ מהמרכז. כניסה: 150,000 VND. הכי שווה מבין הקברים',
    },
    {
      name: 'Thien Mu Pagoda',
      desc: 'מגדל פגודה 7 קומות על גדת נהר Perfume — הסמל של הואה. נוף מרהיב לנהר. מוזיאון עם המכונית שנשא הנזיר שהצית את עצמו ב-1963 בסייגון.',
      image: 'https://images.unsplash.com/photo-1553851919-596510268b99?w=600&q=80',
    },
    {
      name: 'שייט בנהר Perfume',
      desc: 'שייט בסירת תפנוקים (dragon boat) לאורך נהר Perfume — עובר ליד הפגודה, הקברים ונופי כפר. חצי יום מנחם ויפה.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
      tip: 'הזמינו מהגסטהאוס: $15–20 לסירה פרטית לחצי יום',
    },
    {
      name: 'Dong Ba Market',
      desc: 'השוק הגדול של הואה — קומה תחתונה: אוכל. קומה עליונה: בגדים וסחורות. אווירה מקומית אמיתית לצד הנהר.',
      image: 'https://images.unsplash.com/photo-1533497394934-b33cd9695ba9?w=600&q=80',
    },
  ],
  food: [
    {
      name: 'Bun Bo Hue',
      desc: 'מרק הבשר המפורסם של הואה — חריף ועשיר בהרבה מהפו. עם בשר בקר, חזיר ועצם. מהמנות האהובות ביותר בוייטנאם.',
      image: 'https://plus.unsplash.com/premium_photo-1695409300130-44add563c1eb?w=400&q=80',
      price: '40,000–70,000 VND',
    },
    {
      name: 'Banh Khoai',
      desc: 'פנקייק פריך צהוב מיוחד להואה — עם שרימפס, בשר וצמחים. מוגש עם רוטב בוטנים ייחודי. שונה מ-Banh Xeo.',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80',
      price: '40,000–60,000 VND',
    },
    {
      name: 'Com Hen',
      desc: 'ארוחת בוקר מסורתית של הואה — אורז עם צדפי נהר קטנות (hen), בוטנים, צ\'יפס, ירוקים ורטבים. פשוט ומרענן.',
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&q=80',
      price: '25,000–40,000 VND',
    },
    {
      name: 'Royal Hue Cuisine',
      desc: 'מסורת הבישול הקיסרי — מנות אלגנטיות ומגוונות שפותחו עבור הקיסרים. כמה מסעדות מגישות גרסות מודרניות.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80',
      price: '150,000–300,000 VND',
    },
  ],
  foodTips: [
    'Bun Bo Hue: Quan Bun Bo Hue O Bep — מומלצת, מקומית לגמרי',
    'Dong Ba Market — מנות רחוב זולות ואותנטיות בבוקר',
    'הואה זולה יחסית — תקציב טיול נוח: $30–40/יום כולל הכל',
  ],
  areas: [
    {
      name: 'South of Perfume River',
      type: 'תיירותי',
      recommended: true,
      desc: 'האזור התיירותי הראשי עם המלונות, מסעדות, ברים. קרוב לשוק Dong Ba.',
    },
    {
      name: 'Imperial City Area',
      type: 'היסטורי',
      recommended: false,
      desc: 'צד צפון הנהר — הארמון הקיסרי. שקט יותר, פחות מסעדות. לינה כאן נוחה לביקור הארמון.',
    },
  ],
  gettingThere: [
    { from: 'האנוי', method: 'טיסה', time: '1:20 שעות', icon: '✈️', price: '$25–60', flight: true },
    { from: "הו צ'י מין", method: 'טיסה', time: '1:30 שעות', icon: '✈️', price: '$25–60', flight: true },
    { from: 'דה נאנג', method: 'אוטובוס / רכבת', time: '3 שעות', icon: '🚌', price: '$5–10' },
    { from: 'הוי אן', method: 'אוטובוס / מונית', time: '3.5 שעות', icon: '🚌', price: '$5–15' },
  ],
  localTransport: [
    'אופנוע להשכרה — $6–9/יום. הדרך הטובה לקברים ולפגודה',
    'Grab — זמין בהואה. מהשדה תעופה: ~100,000 VND',
    'סיריקים (tuk-tuk) — למרחקים קצרים, מיקוח חובה',
  ],
  accommodation: [
    { type: 'תקציב', price: '$10–25/לילה', desc: 'הוסטלים ומלוני קצת ליד הנהר.', examples: 'Hue Backpackers, Canary Hotel' },
    { type: 'בינוני', price: '$30–80/לילה', desc: 'מלונות נחמדים עם נוף לנהר או לארמון.', examples: 'Pilgrimage Village, La Residence Hotel' },
    { type: 'יוקרה', price: '$100+/לילה', desc: 'La Residence Hotel — לשעבר בית הנציב הצרפתי, על הנהר.', examples: 'La Residence Hotel & Spa' },
  ],
  tips: [
    'שכרו אופנוע ונסעו לקברים לבד — חוויה עצמאית הרבה יותר טובה מסיור מאורגן',
    'הואה זולה יחסית לעיירות תיירותיות אחרות',
    'הרכבת Hue–Da Nang — נופית מאוד, עוברת על חוף הים. $5–10, 3 שעות',
    'חורף (נובמבר–ינואר) — גשמים וסיכוי לשיטפונות. תכננו בהתאם',
    'Ngo Mon Gate — הכניסה הראשית לארמון. הגיעו בבוקר לפני החום',
  ],
  nextDest: { name: 'הוי אן', href: '/destinations/center/hoi-an' },
};

export default function HuePage() {
  return <DestinationPage dest={data} />;
}

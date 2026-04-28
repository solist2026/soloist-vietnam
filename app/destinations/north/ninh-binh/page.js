import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: 'ניין בינה',
  subtitle: "הלונג ביי של היבשה",
  emoji: '🗻',
  heroImage: 'https://images.unsplash.com/photo-Lv8kyYECgGI?w=1600&q=80',
  regionName: 'צפון וייטנאם',
  regionHref: '/destinations/north',
  tags: ['טבע', 'שייט', 'נופים', 'UNESCO'],
  chabad: false,
  locationDesc: 'ניין בינה ממוקמת 93 ק"מ דרומית להאנוי — 2 שעות נסיעה. יעד יום אחד מהאנוי, אבל לינה מומלצת.',
  description: 'ניין בינה מכונה "הלונג ביי של היבשה" — הרי גיר זוקפים מתוך שדות אורז ירוקים עם נהרות שקטים זורמים ביניהם. פחות תיירותית מהלונג ביי, יותר אינטימית ומדהימה לא פחות.',
  quickStats: [
    { label: 'מהאנוי', value: '2 שעות' },
    { label: 'מהלונג ביי', value: '4 שעות' },
    { label: 'UNESCO', value: 'Trang An' },
    { label: 'ימים מומלצים', value: '1–2' },
  ],
  attractions: [
    {
      name: 'שייט Tam Coc',
      desc: 'שייט בסירה שחותרת בידיים (ולפעמים ברגליים!) לאורך נהר Ngo Dong בין הרי גיר ושדות אורז. 3 מנהרות אבן בדרך. קסום ושקט — אחד הנופים הכי יפים בוייטנאם.',
      image: 'https://images.unsplash.com/photo-PgSxHidgJHQ?w=600&q=80',
      tip: 'בוקר מוקדם (07:00–08:00) = פחות תיירים ואור מושלם לצילום',
    },
    {
      name: 'Trang An — אתר UNESCO',
      desc: 'שמורת טבע ענקית עם מסלולי שייט ארוכים יותר מ-Tam Coc, מערות, מקדשים ויערות. מצוין לחצי יום. כרטיס: 250,000 VND (כולל סירה).',
      image: 'https://images.unsplash.com/photo-E2jYY1GxAzE?w=600&q=80',
    },
    {
      name: 'Mua Cave — נקודת תצפית',
      desc: '500 מדרגות מפותלות בצד הר גיר — הנוף מלמעלה על Tam Coc ועמק ניין בינה הוא תמונת הפרסומת של וייטנאם. כניסה: 100,000 VND.',
      image: 'https://images.unsplash.com/photo-Mt1iIhkBk1I?w=600&q=80',
      tip: 'עלייה: 20 דקות. שמאל לנקודת הנחש — ימין לנקודה הטובה יותר',
    },
    {
      name: 'Bich Dong Pagoda',
      desc: 'מקדש בתוך מערה בצד הר — 3 רמות של מקדשים חצובים בסלע. 15 דקות מ-Tam Coc. כניסה חינם.',
      image: 'https://images.unsplash.com/photo-eqWw7Ee85mg?w=600&q=80',
    },
    {
      name: 'Hoa Lu — בירת וייטנאם העתיקה',
      desc: 'הבירה הראשונה של וייטנאם מהמאה ה-10 — שני מקדשים מרשימים לקיסרים Dinh Tien Hoang ו-Le Dai Hanh. 12 ק"מ מ-Tam Coc.',
      image: 'https://images.unsplash.com/photo-6Rm7o1eEIgc?w=600&q=80',
    },
  ],
  food: [
    {
      name: 'עז צלויה (Grilled Goat)',
      desc: 'ניין בינה מפורסמת בעז המקומית — ביל\'ה (בשר עז) בגריל, בצ\'ה עם מנות ירוקים. מסעדות Tam Coc מגישות אותה בצורות שונות. חובה!',
      image: 'https://images.unsplash.com/photo-gkfEv6SWLCs?w=400&q=80',
      price: '150,000–250,000 VND',
    },
    {
      name: 'Com Chay (אורז שרוף)',
      desc: 'מאכל מקומי ייחודי לניין בינה — אורז שנשרף קלות ליצירת "עוגיות" פריכות. מוגש עם מטבלים שונים. ספציפי לאזור.',
      image: 'https://images.unsplash.com/photo-GwSWQuLZY6M?w=400&q=80',
      price: '30,000–50,000 VND',
    },
  ],
  foodTips: [
    'מסעדות מסביב ל-Tam Coc — מחירים סבירים, תפריט בסיסי',
    'Tam Coc Garden Restaurant — מומלצת עם נוף לשדות',
    'הימנעו ממסעדות בעמדות הכניסה הראשיות — מחירי תיירות',
  ],
  areas: [
    {
      name: 'Tam Coc',
      type: 'ראשי',
      recommended: true,
      desc: 'האזור הפופולרי ביותר — שייט, מסעדות, גסטהאוסים ונקודות תצפית. רוב המטיילים ישנים כאן.',
    },
    {
      name: 'Trang An',
      type: 'שמורה',
      recommended: true,
      desc: 'אזור שמורת יונסקו — פחות מלונות אבל שקט יותר. כדאי לביקור יומי מ-Tam Coc.',
    },
    {
      name: 'Ninh Binh City',
      type: 'עיר',
      recommended: false,
      desc: 'עיר מגורים של האזור. אין הרבה לתיירים כאן — עברו ישר ל-Tam Coc.',
    },
  ],
  gettingThere: [
    { from: 'האנוי', method: 'אוטובוס / מוניות', time: '2 שעות', icon: '🚌', price: '$5–10' },
    { from: 'האנוי', method: 'רכבת', time: '2.5 שעות', icon: '🚂', price: '$3–6' },
    { from: 'הלונג ביי', method: 'אוטובוס', time: '4 שעות', icon: '🚌', price: '$8–12' },
    { from: 'הוי אן', method: 'טיסה לאנוי + אוטובוס', time: '3.5 שעות', icon: '✈️', price: '$30–60', flight: true },
  ],
  localTransport: [
    'אופניים — השכרה ~50,000–100,000 VND/יום. הדרך הכי נחמדה לסיור',
    'אופנוע — $5–7/יום. לנקודות רחוקות יותר (Hoa Lu, Love Cave)',
    'מיניבוס ביום אחד מהאנוי — כולל Tam Coc + Hoa Lu + Mua Cave',
  ],
  accommodation: [
    { type: 'Guesthouse / הוסטל', price: '$12–25/לילה', desc: 'The Banana Tree Hostel — תקציב נמוך ומומלץ.', examples: 'The Banana Tree Hostel, Tam Coc Bamboo' },
    { type: 'Homestay בינוני', price: '$25–50/לילה', desc: 'Madam Seven Tam Coc — מומלצת, עם נוף לשדות.', examples: 'Madam Seven Tam Coc, Tam Coc Rocky Bungalow' },
    { type: 'ריזורט', price: '$80–150/לילה', desc: 'ריזורטים עם בריכה ונוף לשדות האורז — חוויה אחרת לגמרי.', examples: 'Tam Coc Green Mountain, Emeralda Resort' },
  ],
  tips: [
    'שלבו ניין בינה עם הלונג ביי — מסלול מנצח לצפון וייטנאם',
    'שכרו אופניים לסיור עצמאי — 1–2$ ליום, כיף גדול',
    'בוקר מוקדם = פחות תיירים בשייט Tam Coc',
    'Mua Cave + Tam Coc באותו יום — התחילו ב-Mua Cave בבוקר, שייטו אחר הצהריים',
    'יום אחד מהאנוי מספיק אם לחוצים, אבל לינה אחת הרבה יותר נוחה',
    'הדייגים בסירות מבקשים טיפ בסוף — 50,000 VND מקובל',
  ],
  nextDest: { name: 'הלונג ביי', href: '/destinations/north/halong' },
};

export default function NinhBinhPage() {
  return <DestinationPage dest={data} />;
}

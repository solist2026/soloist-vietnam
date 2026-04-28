import DestinationPage from '../../../components/DestinationPage';

const data = {
  name: 'קאט בה',
  subtitle: 'האי הגדול של הלונג ביי',
  emoji: '🏝️',
  heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1600&q=80',
  regionName: 'צפון וייטנאם',
  regionHref: '/destinations/north',
  tags: ['אי', 'טבע', 'שקט', 'Lan Ha Bay'],
  chabad: false,
  locationDesc: 'קאט בה הוא האי הגדול ביותר בארכיפלג הלונג ביי — כ-4 שעות מהאנוי (אוטובוס + מעבורת). קרוב גם לניין בינה.',
  description: 'קאט בה היא האלטרנטיבה השקטה והמקומית להלונג ביי — פחות תיירותית, עם גשר טבעי (ראה Lan Ha Bay), ג\'ונגל שמור, חופים סמויים ואווירה כפרית. אפשר לשלב כאן לינה עם שייט ב-Lan Ha Bay הסמוך.',
  quickStats: [
    { label: 'מהאנוי', value: '4 שעות' },
    { label: 'שטח', value: '354 קמ"ר' },
    { label: 'Lan Ha Bay', value: '15 דקות שייט' },
    { label: 'פארק לאומי', value: '✓ קיים' },
  ],
  attractions: [
    {
      name: 'Lan Ha Bay',
      desc: 'הביי הסמוך לקאט בה — 300 איים פחות מוכרים, שקטים יותר מהלונג הראשי, עם חופי חול סמויים שניתן להגיע אליהם רק בסירה. קאיאקינג מדהים.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
      tip: 'שייט חצי יום + קאיאק = $20–30. הזמינו מה-guesthouse שלכם',
    },
    {
      name: 'Cat Ba National Park',
      desc: 'פארק לאומי מוכרז עם יערות טרופיים, קופי Cat Ba Langur (מאוים בהכחדה — רק 70 נותרו), מסלולי טיול ונוף פנורמי. כניסה: 40,000 VND.',
      image: 'https://images.unsplash.com/photo-1553851919-596510268b99?w=600&q=80',
    },
    {
      name: 'Hospital Cave',
      desc: 'מערת בית חולים סודית שנחצבה בסלע במלחמת וייטנאם — 3 קומות עם חדרי ניתוח, בית קולנוע ובריכה. היסטוריה מרתקת.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    },
    {
      name: 'חוף Cat Co 1, 2, 3',
      desc: 'שלושה חופי חול מרהיבים בקצה הדרומי של העיירה — נגישים בהליכה קצרה או בסירה. Cat Co 3 — השקט ביותר.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
    },
  ],
  food: [
    {
      name: 'פירות ים טריים',
      desc: 'קאט בה ידועה בפירות הים הטריים שלה — שרימפס, קלמרי וסרטנים ישירות מהדייגים. הרציף עמוס מסעדות מקומיות.',
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&q=80',
      price: '100,000–250,000 VND למנה',
    },
    {
      name: 'Bun Rieu',
      desc: 'מרק אטריות עם סרטני נהר — מנה מקומית נחמדת וזולה שמוגשת בדוכנים במרכז העיירה.',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80',
      price: '35,000–50,000 VND',
    },
  ],
  foodTips: [
    'מסעדות בגזרת Cat Ba Town — מחירים הרבה יותר סבירים מהמסעדות על הרציף',
    'שוק הבוקר — פעיל 05:00–08:00 עם ירקות ופירות ים טריים',
  ],
  areas: [
    {
      name: 'Cat Ba Town',
      type: 'מרכז',
      recommended: true,
      desc: 'העיירה הראשית עם מלונות, מסעדות, ספקי סיורים וחיי לילה קטן. מסביב לנמל. כל הספקים מכאן.',
    },
    {
      name: 'Cat Co Beach Area',
      type: 'חופים',
      recommended: true,
      desc: '10 דקות הליכה מהעיירה — שלושה חופים עם מלונות ורזורטים קטנים. שקט יותר מהמרכז.',
    },
  ],
  gettingThere: [
    { from: 'האנוי', method: 'אוטובוס + מעבורת (ישירות לקאט בה)', time: '4 שעות', icon: '🚌', price: '$10–18' },
    { from: 'הלונג סיטי', method: 'מעבורת מהירה', time: '45 דקות', icon: '⛵', price: '$5–10' },
    { from: 'ניין בינה', method: 'אוטובוס + מעבורת', time: '3 שעות', icon: '🚌', price: '$8–15' },
  ],
  localTransport: [
    'אופנוע — השכרה ~$7–10/יום. הדרך הטובה ביותר לחקור את האי',
    'מונית טוק-טוק — לחוף Cat Co וסביבות',
    'סיורי שייט — Lan Ha Bay, מרכז העיירה, מחירים קבועים',
  ],
  accommodation: [
    { type: 'הוסטל / Guesthouse', price: '$10–20/לילה', desc: 'הרבה אפשרויות נחמדות ב-Cat Ba Town. נוחות בסיסית, מרכזיות.', examples: 'Hung Long Art Gallery Hotel, Sunshine Hotel' },
    { type: 'מלון בינוני', price: '$25–60/לילה', desc: 'מלונות נחמדים עם נוף לים. Cat Co Beach הכי שקט.', examples: 'Holiday View Hotel' },
    { type: 'ריזורט', price: '$80+/לילה', desc: 'Cat Ba Island Resort — הכי טוב באי, עם בריכה ונוף לביי.', examples: 'Cat Ba Island Resort & Spa' },
  ],
  tips: [
    'שלבו קאט בה עם הלונג ביי — בואו מהאנוי לקאט בה, שייטו ב-Lan Ha Bay, ואחר כך עברו לספינת הלונג',
    'עונת שיא: יוני–אוגוסט. עונה שקטה ויפה: מרץ–מאי',
    'אופנוע לסיבוב האי — 2–3 שעות להקיף את רוב הנקודות',
    'Cat Ba Langur — ראו ג\'ונגל ועצרו לחפש את הקופים הנדירים',
    'Lan Ha Bay פחות עמוסה מהלונג הראשי — נהנו מהשקט',
  ],
  nextDest: { name: 'סאפה', href: '/destinations/north/sapa' },
};

export default function CatBaPage() {
  return <DestinationPage dest={data} />;
}

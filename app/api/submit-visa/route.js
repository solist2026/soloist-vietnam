import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const visaTypeMap = {
  single: 'כניסה אחת — $25',
  multiple: 'כניסות מרובות — $50',
};

const processingMap = {
  standard: 'רגיל — 4-5 ימי עסקים',
  fast: 'מהיר — 2 ימי עסקים (+₪79)',
  express: 'אקספרס — 24 שעות (+₪149)',
  emergency: 'חירום — 4-6 שעות (+₪249)',
};

const genderMap = { male: 'זכר', female: 'נקבה' };
const maritalMap = { single: 'רווק/ה', married: 'נשוי/ה', divorced: 'גרוש/ה', widowed: 'אלמן/ה' };

function row(label, value) {
  if (!value) return '';
  return `<div class="row"><span class="label">${label}</span><span class="value">${value}</span></div>`;
}

export async function POST(request) {
  try {
    const data = await request.json();

    const htmlBody = `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head><meta charset="UTF-8"><style>
  body{font-family:Arial,sans-serif;background:#f5f5f5;color:#333;direction:rtl;margin:0;padding:20px}
  .container{max-width:700px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.1)}
  .header{background:#1a2535;color:#c9a84c;padding:24px}
  .header h1{margin:0;font-size:22px}
  .header p{margin:4px 0 0;color:rgba(245,240,232,.6);font-size:13px}
  .section{padding:18px 24px;border-bottom:1px solid #eee}
  .section h2{color:#1a2535;font-size:15px;margin:0 0 12px;border-right:4px solid #c9a84c;padding-right:8px}
  .row{display:flex;justify-content:space-between;padding:5px 0;font-size:14px;gap:16px}
  .label{color:#888;flex-shrink:0}
  .value{font-weight:600;text-align:left}
  .total{background:#c9a84c;color:#1a2535;padding:16px 24px;display:flex;justify-content:space-between;align-items:center}
  .total-label{font-size:16px;font-weight:700}
  .total-amount{font-size:28px;font-weight:900}
</style></head>
<body>
<div class="container">
  <div class="header">
    <h1>🛂 בקשת ויזה חדשה — סוליסט וייטנאם</h1>
    <p>${new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}</p>
  </div>

  <div class="section">
    <h2>סוג ויזה ועיבוד</h2>
    ${row('סוג ויזה', visaTypeMap[data.visaType] || data.visaType)}
    ${row('מהירות עיבוד', processingMap[data.processing] || data.processing)}
  </div>

  <div class="section">
    <h2>פרטים אישיים</h2>
    ${row('שם בעברית', `${data.firstNameHe} ${data.lastNameHe}`)}
    ${row('שם באנגלית (כבדרכון)', `${data.firstNameEn} ${data.lastNameEn}`)}
    ${row('תאריך לידה', data.birthDate)}
    ${row('מין', genderMap[data.gender] || data.gender)}
    ${row('מצב משפחתי', maritalMap[data.maritalStatus] || data.maritalStatus)}
    ${row('עיסוק', data.occupation)}
  </div>

  <div class="section">
    <h2>פרטי דרכון</h2>
    ${row('מספר דרכון', data.passportNumber)}
    ${row('תאריך הוצאה', data.passportIssueDate)}
    ${row('תאריך פקיעה', data.passportExpiry)}
  </div>

  <div class="section">
    <h2>פרטי נסיעה</h2>
    ${row('תאריך כניסה', data.entryDate)}
    ${row('תאריך יציאה', data.exitDate)}
    ${row('נמל כניסה', data.entryPort)}
    ${row('מלון / הוסטל', data.hotelName)}
    ${row('כתובת מלון', data.hotelAddress)}
  </div>

  <div class="section">
    <h2>פרטי קשר</h2>
    ${row('אימייל', `<a href="mailto:${data.email}">${data.email}</a>`)}
    ${row('טלפון', data.phone)}
    ${data.whatsapp ? row('WhatsApp', data.whatsapp) : ''}
    ${data.notes ? row('הערות', data.notes) : ''}
  </div>

  <div class="section">
    <h2>מסמכים מצורפים</h2>
    ${row('תמונת פנים', data.portraitPhotoName ? `✅ ${data.portraitPhotoName}` : '❌ לא צורף')}
    ${row('צילום דרכון', data.passportPhotoName ? `✅ ${data.passportPhotoName}` : '❌ לא צורף')}
  </div>

  <div class="total">
    <span class="total-label">להשלים טיפול ותשלום</span>
    <span class="total-amount">📞 ${data.phone}</span>
  </div>
</div>
</body></html>`;

    const attachments = [];
    if (data.portraitPhotoBase64 && data.portraitPhotoName) {
      attachments.push({ filename: `portrait_${data.portraitPhotoName}`, content: data.portraitPhotoBase64 });
    }
    if (data.passportPhotoBase64 && data.passportPhotoName) {
      attachments.push({ filename: `passport_${data.passportPhotoName}`, content: data.passportPhotoBase64 });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: ['soloistour@gmail.com'],
      replyTo: data.email,
      subject: `🛂 ויזה: ${data.firstNameEn} ${data.lastNameEn} | ${visaTypeMap[data.visaType] || data.visaType}`,
      html: htmlBody,
      attachments,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Visa submission error:', error);
    return Response.json({ error: 'שגיאה בשליחה' }, { status: 500 });
  }
}

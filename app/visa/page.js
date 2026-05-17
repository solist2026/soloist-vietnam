'use client';
import { useState } from 'react';

const VISA_TYPES = [
  {
    id: 'single',
    label: 'כניסה אחת',
    sublabel: 'Single Entry',
    priceUSD: 25,
    priceNIS: 169,
    desc: 'מומלץ אם לא יוצאים מוייטנאם לאורך הטיול',
    icon: '🛂',
  },
  {
    id: 'multiple',
    label: 'כניסות מרובות',
    sublabel: 'Multiple Entry',
    priceUSD: 50,
    priceNIS: 339,
    desc: 'מומלץ אם יוצאים לקמבודיה / תאילנד וחוזרים',
    icon: '🔄',
  },
];

const PROCESSING_TIERS = [
  { id: 'standard', label: 'רגיל', days: '4-5 ימי עסקים', serviceNIS: 0, badge: null },
  { id: 'fast', label: 'מהיר', days: '2 ימי עסקים', serviceNIS: 79, badge: 'פופולרי ⭐' },
  { id: 'express', label: 'אקספרס', days: '24 שעות', serviceNIS: 149, badge: null },
  { id: 'emergency', label: 'חירום', days: '4-6 שעות', serviceNIS: 249, badge: null },
];

const ENTRY_PORTS = {
  'שדות תעופה': [
    'נוי ביי — האנוי (Hanoi Noi Bai)',
    'טאן שון נהאט — הו צ\'י מין (Ho Chi Minh City)',
    'דה נאנג (Da Nang)',
    'קם ראן — ניה טראנג (Cam Ranh, Nha Trang)',
    'פו קווק (Phu Quoc)',
    'פוי קאט — קוי נהון (Phu Cat, Quy Nhon)',
    'ליאן חואנג — דה לט (Lien Khuong, Da Lat)',
    'פוי בי — האואה (Phu Bai, Hue)',
    'קאט בי — האיפונג (Cat Bi, Hai Phong)',
    'ת\'ו קואן — תאן הואה (Tho Xuan, Thanh Hoa)',
  ],
  'מעברי יבשה': [
    'מוק ביי — גבול קמבודיה (Moc Bai)',
    'לאו באו — גבול לאוס (Lao Bao)',
    'לאו קאי — גבול סין (Lao Cai)',
    'הוו נגי — גבול סין (Huu Nghi)',
    'מונג קאי — גבול סין (Mong Cai)',
    'האה תיאן — גבול קמבודיה (Ha Tien)',
    'תיין ביאן — גבול קמבודיה (Tinh Bien)',
    'בו י — גבול לאוס (Bo Y)',
    'לה תאנה — גבול קמבודיה (Le Thanh)',
  ],
  'נמלי ים': [
    'נמל האלונג (Hon Gai - Ha Long)',
    'נמל דה נאנג (Tien Sa)',
    'נמל הו צ\'י מין (Sai Gon)',
    'נמל ניה טראנג (Nha Trang)',
  ],
};

const STEPS = [
  { id: 1, label: 'סוג ויזה', icon: '🛂' },
  { id: 2, label: 'פרטים אישיים', icon: '👤' },
  { id: 3, label: 'דרכון ונסיעה', icon: '✈️' },
  { id: 4, label: 'מסמכים וקשר', icon: '📎' },
  { id: 5, label: 'סיכום', icon: '✅' },
];

function ProgressBar({ step }) {
  return (
    <div className="flex items-center mb-10">
      {STEPS.map((s, i) => (
        <div key={s.id} className="flex items-center flex-1">
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-bold border-2 transition-all ${
              step > s.id
                ? 'bg-[#c9a84c] border-[#c9a84c] text-[#0f1923]'
                : step === s.id
                ? 'border-[#c9a84c] text-[#c9a84c] bg-transparent'
                : 'border-[#f5f0e8]/20 text-[#f5f0e8]/30 bg-transparent'
            }`}>
              {step > s.id ? '✓' : s.icon}
            </div>
            <span className={`text-xs hidden sm:block whitespace-nowrap ${
              step === s.id ? 'text-[#c9a84c]' : 'text-[#f5f0e8]/30'
            }`}>{s.label}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`h-0.5 flex-1 mx-2 mb-4 ${step > s.id ? 'bg-[#c9a84c]' : 'bg-[#f5f0e8]/10'}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function InputField({ label, type = 'text', value, onChange, placeholder, required, hint, disabled }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#f5f0e8]/80">
        {label}{required && <span className="text-red-400 mr-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="bg-[#0f1923] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-right focus:outline-none focus:border-[#c9a84c] text-sm w-full placeholder:text-[#f5f0e8]/25 disabled:opacity-50"
      />
      {hint && <p className="text-xs text-[#f5f0e8]/35">{hint}</p>}
    </div>
  );
}

function SelectField({ label, value, onChange, options, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#f5f0e8]/80">
        {label}{required && <span className="text-red-400 mr-1">*</span>}
      </label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="bg-[#0f1923] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-right focus:outline-none focus:border-[#c9a84c] text-sm w-full"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

function Step1({ formData, updateField }) {
  const selectedVisa = VISA_TYPES.find(v => v.id === formData.visaType);
  const selectedTier = PROCESSING_TIERS.find(t => t.id === formData.processing);
  const totalNIS = selectedVisa.priceNIS + selectedTier.serviceNIS;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-xl font-bold mb-1">בחרו סוג ויזה</h3>
        <p className="text-[#f5f0e8]/50 text-sm mb-4">ויזה בתוקף 90 יום מיום הכניסה</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VISA_TYPES.map(vt => (
            <button
              key={vt.id}
              type="button"
              onClick={() => updateField('visaType', vt.id)}
              className={`rounded-2xl p-6 text-right border-2 transition-all ${
                formData.visaType === vt.id
                  ? 'border-[#c9a84c] bg-[#c9a84c]/10'
                  : 'border-[#c9a84c]/10 bg-[#0f1923] hover:border-[#c9a84c]/40'
              }`}
            >
              <div className="text-3xl mb-2">{vt.icon}</div>
              <div className="font-bold text-lg">{vt.label}</div>
              <div className="text-xs text-[#f5f0e8]/40 mb-3">{vt.sublabel}</div>
              <div className="text-2xl font-bold text-[#c9a84c]">
                ${vt.priceUSD} <span className="text-sm font-normal text-[#f5f0e8]/40">≈ ₪{vt.priceNIS}</span>
              </div>
              <div className="text-xs text-[#f5f0e8]/50 mt-2">{vt.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-1">מהירות עיבוד</h3>
        <p className="text-[#f5f0e8]/50 text-sm mb-4">דמי שירות בנוסף לאגרת הויזה</p>
        <div className="grid grid-cols-2 gap-3">
          {PROCESSING_TIERS.map(tier => (
            <button
              key={tier.id}
              type="button"
              onClick={() => updateField('processing', tier.id)}
              className={`rounded-xl p-4 text-right border-2 transition-all relative ${
                formData.processing === tier.id
                  ? 'border-[#c9a84c] bg-[#c9a84c]/10'
                  : 'border-[#c9a84c]/10 bg-[#0f1923] hover:border-[#c9a84c]/40'
              }`}
            >
              {tier.badge && (
                <span className="absolute top-2 left-2 bg-[#c9a84c] text-[#0f1923] text-xs font-bold px-2 py-0.5 rounded-full">
                  {tier.badge}
                </span>
              )}
              <div className="font-bold">{tier.label}</div>
              <div className="text-xs text-[#f5f0e8]/50 mt-0.5">{tier.days}</div>
              <div className="text-lg font-bold text-[#c9a84c] mt-2">
                {tier.serviceNIS === 0 ? 'כלול' : `+₪${tier.serviceNIS}`}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-2xl p-5">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold text-lg">סה"כ לתשלום</div>
            <div className="text-xs text-[#f5f0e8]/50 mt-0.5">
              ויזה ${selectedVisa.priceUSD}
              {selectedTier.serviceNIS > 0 ? ` + שירות ₪${selectedTier.serviceNIS}` : ' (כולל שירות)'}
            </div>
          </div>
          <div className="text-3xl font-bold text-[#c9a84c]">₪{totalNIS}</div>
        </div>
      </div>
    </div>
  );
}

function Step2({ formData, updateField }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-xl font-bold mb-1">פרטים אישיים</h3>
        <p className="text-[#f5f0e8]/50 text-sm">כפי שמופיע בדרכון הישראלי</p>
      </div>

      <div className="bg-amber-900/20 border border-amber-600/30 rounded-xl p-4 text-sm text-amber-300">
        ⚠️ חשוב: שם באנגלית חייב להיות זהה בדיוק לכתוב בדרכון — שגיאה תפסל את הויזה
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InputField label="שם פרטי בעברית" value={formData.firstNameHe} onChange={v => updateField('firstNameHe', v)} placeholder="ישראל" required />
        <InputField label="שם משפחה בעברית" value={formData.lastNameHe} onChange={v => updateField('lastNameHe', v)} placeholder="כהן" required />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="שם פרטי — כבדרכון"
          value={formData.firstNameEn}
          onChange={v => updateField('firstNameEn', v.toUpperCase())}
          placeholder="ISRAEL"
          required
          hint="אנגלית, אותיות גדולות"
        />
        <InputField
          label="שם משפחה — כבדרכון"
          value={formData.lastNameEn}
          onChange={v => updateField('lastNameEn', v.toUpperCase())}
          placeholder="COHEN"
          required
          hint="אנגלית, אותיות גדולות"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InputField label="תאריך לידה" type="date" value={formData.birthDate} onChange={v => updateField('birthDate', v)} required />
        <SelectField
          label="מין"
          value={formData.gender}
          onChange={v => updateField('gender', v)}
          options={[{ value: 'male', label: 'זכר' }, { value: 'female', label: 'נקבה' }]}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SelectField
          label="מצב משפחתי"
          value={formData.maritalStatus}
          onChange={v => updateField('maritalStatus', v)}
          options={[
            { value: 'single', label: 'רווק/ה' },
            { value: 'married', label: 'נשוי/ה' },
            { value: 'divorced', label: 'גרוש/ה' },
            { value: 'widowed', label: 'אלמן/ה' },
          ]}
          required
        />
        <InputField label="עיסוק" value={formData.occupation} onChange={v => updateField('occupation', v)} placeholder="מהנדס, מורה, סטודנט..." required />
      </div>
    </div>
  );
}

function Step3({ formData, updateField }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-xl font-bold mb-1">דרכון ופרטי נסיעה</h3>
        <p className="text-[#f5f0e8]/50 text-sm">ודאו שכל הפרטים תואמים לטיסות שלכם</p>
      </div>

      <div className="bg-[#0f1923] rounded-2xl p-5 flex flex-col gap-4 border border-[#c9a84c]/10">
        <h4 className="font-bold text-[#c9a84c]">פרטי דרכון ישראלי</h4>
        <InputField
          label="מספר דרכון"
          value={formData.passportNumber}
          onChange={v => updateField('passportNumber', v.toUpperCase())}
          placeholder="12345678"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField label="תאריך הוצאה" type="date" value={formData.passportIssueDate} onChange={v => updateField('passportIssueDate', v)} required />
          <InputField
            label="תאריך פקיעה"
            type="date"
            value={formData.passportExpiry}
            onChange={v => updateField('passportExpiry', v)}
            required
            hint="חייב להיות תקף 6+ חודשים קדימה"
          />
        </div>
      </div>

      <div className="bg-[#0f1923] rounded-2xl p-5 flex flex-col gap-4 border border-[#c9a84c]/10">
        <h4 className="font-bold text-[#c9a84c]">פרטי נסיעה</h4>
        <div className="grid grid-cols-2 gap-4">
          <InputField label="תאריך כניסה לוייטנאם" type="date" value={formData.entryDate} onChange={v => updateField('entryDate', v)} required />
          <InputField label="תאריך יציאה מוייטנאם" type="date" value={formData.exitDate} onChange={v => updateField('exitDate', v)} required />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#f5f0e8]/80">נמל כניסה<span className="text-red-400 mr-1">*</span></label>
          <select
            value={formData.entryPort}
            onChange={e => updateField('entryPort', e.target.value)}
            className="bg-[#1a2535] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-right focus:outline-none focus:border-[#c9a84c] text-sm w-full"
          >
            <option value="">בחרו נמל כניסה</option>
            {Object.entries(ENTRY_PORTS).map(([group, ports]) => (
              <optgroup key={group} label={group}>
                {ports.map(port => (
                  <option key={port} value={port}>{port}</option>
                ))}
              </optgroup>
            ))}
          </select>
          <p className="text-xs text-[#f5f0e8]/35">לרוב ישראלים: נוי ביי (האנוי) או טאן שון נהאט (הו צ'י מין)</p>
        </div>

        <InputField
          label="שם מלון / הוסטל ראשון"
          value={formData.hotelName}
          onChange={v => updateField('hotelName', v)}
          placeholder="Hanoi Backpackers Hostel"
          required
          hint='ניתן להשתמש בכתובת בית חב"ד'
        />
        <InputField
          label="כתובת מלון"
          value={formData.hotelAddress}
          onChange={v => updateField('hotelAddress', v)}
          placeholder="9 Ma May Street, Old Quarter, Hanoi"
          required
        />
      </div>
    </div>
  );
}

function FileUploadBox({ id, label, icon, value, onChange, accept, specs, required }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-[#f5f0e8]/80">
        {label}{required && <span className="text-red-400 mr-1">*</span>}
      </label>
      <div className={`border-2 border-dashed rounded-xl p-5 text-center transition-colors ${
        value ? 'border-[#c9a84c]/60 bg-[#c9a84c]/5' : 'border-[#c9a84c]/20 bg-[#0f1923] hover:border-[#c9a84c]/50'
      }`}>
        <input type="file" accept={accept} onChange={onChange} className="hidden" id={id} />
        <label htmlFor={id} className="cursor-pointer flex flex-col items-center gap-2">
          <span className="text-3xl">{icon}</span>
          {value ? (
            <span className="text-[#c9a84c] text-sm font-semibold">✓ {value.name}</span>
          ) : (
            <span className="text-[#f5f0e8]/50 text-sm">לחצו להעלאת קובץ</span>
          )}
        </label>
      </div>
      <ul className="text-xs text-[#f5f0e8]/35 flex flex-col gap-0.5">
        {specs.map(s => <li key={s}>• {s}</li>)}
      </ul>
    </div>
  );
}

function Step4({ formData, updateField }) {
  const handleFile = (field, e) => {
    const file = e.target.files?.[0];
    if (file) updateField(field, file);
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-xl font-bold mb-1">מסמכים ויצירת קשר</h3>
        <p className="text-[#f5f0e8]/50 text-sm">העלו קבצים ברורים — תמונות לא תקניות יגרמו לדחיית הויזה</p>
      </div>

      <div className="bg-[#0f1923] rounded-2xl p-5 flex flex-col gap-5 border border-[#c9a84c]/10">
        <h4 className="font-bold text-[#c9a84c]">העלאת מסמכים</h4>

        <FileUploadBox
          id="portrait-upload"
          label="תמונת פנים (פספורט)"
          icon="🤳"
          value={formData.portraitPhoto}
          onChange={e => handleFile('portraitPhoto', e)}
          accept="image/jpeg,image/jpg,image/png"
          required
          specs={[
            'פנים מול המצלמה, רקע לבן בלבד',
            'פורמט JPG או PNG, גודל מקסימלי 1MB',
            'ללא כובע, משקפיים שמשוניות או פרצוף',
            'תמונה עדכנית (לא יותר מ-6 חודשים)',
          ]}
        />

        <FileUploadBox
          id="passport-upload"
          label="צילום עמוד הדרכון"
          icon="🛂"
          value={formData.passportPhoto}
          onChange={e => handleFile('passportPhoto', e)}
          accept="image/jpeg,image/jpg,image/png,application/pdf"
          required
          specs={[
            'עמוד הפרטים האישיים בלבד (עמוד הצילום)',
            'פורמט JPG, PNG או PDF, גודל מקסימלי 2MB',
            'כל הפרטים חייבים להיות קריאים וברורים',
            'ללא בליטות, אצבעות או צל',
          ]}
        />
      </div>

      <div className="bg-[#0f1923] rounded-2xl p-5 flex flex-col gap-4 border border-[#c9a84c]/10">
        <h4 className="font-bold text-[#c9a84c]">פרטי קשר</h4>
        <InputField
          label="כתובת אימייל"
          type="email"
          value={formData.email}
          onChange={v => updateField('email', v)}
          placeholder="your@email.com"
          required
          hint="הויזה המאושרת תישלח לכתובת זו"
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField label="מספר טלפון" type="tel" value={formData.phone} onChange={v => updateField('phone', v)} placeholder="050-1234567" required />
          <InputField
            label="WhatsApp"
            type="tel"
            value={formData.whatsapp}
            onChange={v => updateField('whatsapp', v)}
            placeholder="050-1234567"
            hint="אופציונלי — לעדכונים מהירים"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#f5f0e8]/80">הערות נוספות</label>
          <textarea
            value={formData.notes}
            onChange={e => updateField('notes', e.target.value)}
            placeholder="בקשות מיוחדות, שאלות, משהו שחשוב שנדע..."
            rows={3}
            className="bg-[#1a2535] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-right focus:outline-none focus:border-[#c9a84c] text-sm w-full resize-none placeholder:text-[#f5f0e8]/25"
          />
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex justify-between items-start px-4 py-2.5 gap-4 even:bg-[#1a2535]/40 rounded-lg">
      <span className="text-[#f5f0e8]/50 text-sm flex-shrink-0">{label}</span>
      <span className="text-sm font-medium text-right">{value}</span>
    </div>
  );
}

function Step5({ formData }) {
  const selectedVisa = VISA_TYPES.find(v => v.id === formData.visaType);
  const selectedTier = PROCESSING_TIERS.find(t => t.id === formData.processing);
  const totalNIS = selectedVisa.priceNIS + selectedTier.serviceNIS;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-xl font-bold mb-1">סיכום ואישור</h3>
        <p className="text-[#f5f0e8]/50 text-sm">בדקו שכל הפרטים נכונים לפני השליחה</p>
      </div>

      <div className="bg-[#0f1923] rounded-2xl p-2 border border-[#c9a84c]/10">
        <SummaryRow label="סוג ויזה" value={`${selectedVisa.label} — $${selectedVisa.priceUSD}`} />
        <SummaryRow label="מהירות עיבוד" value={`${selectedTier.label} — ${selectedTier.days}`} />
        <SummaryRow label="שם בעברית" value={`${formData.firstNameHe} ${formData.lastNameHe}`} />
        <SummaryRow label="שם באנגלית" value={`${formData.firstNameEn} ${formData.lastNameEn}`} />
        <SummaryRow label="תאריך לידה" value={formData.birthDate} />
        <SummaryRow label="מספר דרכון" value={formData.passportNumber} />
        <SummaryRow label="תוקף דרכון" value={formData.passportExpiry} />
        <SummaryRow label="כניסה לוייטנאם" value={formData.entryDate} />
        <SummaryRow label="יציאה מוייטנאם" value={formData.exitDate} />
        <SummaryRow label="נמל כניסה" value={formData.entryPort} />
        <SummaryRow label="מלון ראשון" value={formData.hotelName} />
        <SummaryRow label="אימייל" value={formData.email} />
        <SummaryRow label="טלפון" value={formData.phone} />
        <SummaryRow label="תמונת פנים" value={formData.portraitPhoto?.name || '❌ לא הועלה'} />
        <SummaryRow label="צילום דרכון" value={formData.passportPhoto?.name || '❌ לא הועלה'} />
      </div>

      <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-2xl p-5 flex justify-between items-center">
        <div>
          <div className="font-bold text-lg">סה"כ לתשלום</div>
          <div className="text-xs text-[#f5f0e8]/50 mt-0.5">תשלום יתבצע לאחר אישורנו</div>
        </div>
        <div className="text-3xl font-bold text-[#c9a84c]">₪{totalNIS}</div>
      </div>

      <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-4 text-sm text-blue-300">
        ℹ️ לאחר הגשת הבקשה, צוות סוליסט יצור איתכם קשר תוך שעה לאישור ותיאום תשלום.
      </div>
    </div>
  );
}

export default function VisaPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    visaType: 'single',
    processing: 'standard',
    firstNameHe: '',
    lastNameHe: '',
    firstNameEn: '',
    lastNameEn: '',
    birthDate: '',
    gender: 'male',
    maritalStatus: 'single',
    occupation: '',
    passportNumber: '',
    passportIssueDate: '',
    passportExpiry: '',
    entryDate: '',
    exitDate: '',
    entryPort: '',
    hotelName: '',
    hotelAddress: '',
    email: '',
    phone: '',
    whatsapp: '',
    notes: '',
    passportPhoto: null,
    portraitPhoto: null,
  });

  const updateField = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
      });

    try {
      const payload = {
        ...formData,
        passportPhotoBase64: formData.passportPhoto ? await toBase64(formData.passportPhoto) : null,
        passportPhotoName: formData.passportPhoto?.name || null,
        portraitPhotoBase64: formData.portraitPhoto ? await toBase64(formData.portraitPhoto) : null,
        portraitPhotoName: formData.portraitPhoto?.name || null,
        passportPhoto: undefined,
        portraitPhoto: undefined,
      };

      const res = await fetch('/api/submit-visa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('server error');
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError('אירעה שגיאה בשליחה. נסו שנית או פנו אלינו ישירות ב-soloistour@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center px-4 max-w-md">
          <div className="text-7xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold mb-4">הבקשה נשלחה!</h1>
          <p className="text-[#f5f0e8]/60 leading-relaxed mb-6">
            קיבלנו את הבקשה שלכם בהצלחה. צוות סוליסט יצור איתכם קשר תוך שעה לאישור ותיאום תשלום.
          </p>
          <p className="text-sm text-[#c9a84c] mb-8">בדקו גם את תיקיית הספאם</p>
          <a href="/" className="inline-block bg-[#c9a84c] text-[#0f1923] px-8 py-3 rounded-full font-bold hover:bg-[#b8963d] transition-colors">
            חזרה לדף הבית
          </a>
        </div>
      </div>
    );
  }

  const stepComponents = {
    1: <Step1 formData={formData} updateField={updateField} />,
    2: <Step2 formData={formData} updateField={updateField} />,
    3: <Step3 formData={formData} updateField={updateField} />,
    4: <Step4 formData={formData} updateField={updateField} />,
    5: <Step5 formData={formData} />,
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-16 bg-gradient-to-b from-[#1a2535] to-[#0f1923] text-center">
        <p className="text-[#c9a84c] text-sm font-semibold tracking-widest mb-3 uppercase">שירות מהיר ובעברית</p>
        <h1 className="text-5xl font-bold mb-4">הגשת ויזה לוייטנאם</h1>
        <p className="text-[#f5f0e8]/60 text-lg max-w-2xl mx-auto">
          מלאו את הטופס — אנחנו נטפל בהכל. ויזה מאושרת תגיע לתיבת המייל שלכם.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm">
          {[
            { icon: '✅', text: 'ויזה מאושרת במייל' },
            { icon: '🔐', text: 'מאובטח ומוצפן' },
            { icon: '🇮🇱', text: 'תמיכה בעברית' },
            { icon: '⚡', text: 'אקספרס תוך 24 שעות' },
          ].map(item => (
            <span key={item.text} className="bg-[#1a2535] border border-[#c9a84c]/20 rounded-full px-4 py-1.5 text-[#f5f0e8]/70">
              {item.icon} {item.text}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <ProgressBar step={step} />

        <div className="bg-[#1a2535] rounded-3xl p-6 sm:p-8 border border-[#c9a84c]/10 mb-6">
          {stepComponents[step]}
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-700/40 rounded-xl p-4 text-red-400 text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <div className="flex justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(s => s - 1)}
              className="border border-[#c9a84c]/40 text-[#c9a84c] px-6 py-3 rounded-full font-semibold hover:bg-[#c9a84c]/10 transition-colors"
            >
              ← חזור
            </button>
          ) : <div />}

          {step < 5 ? (
            <button
              type="button"
              onClick={() => setStep(s => s + 1)}
              className="bg-[#c9a84c] text-[#0f1923] px-8 py-3 rounded-full font-bold hover:bg-[#b8963d] transition-colors"
            >
              המשך →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-[#c9a84c] text-[#0f1923] px-8 py-3 rounded-full font-bold hover:bg-[#b8963d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? '...שולח' : 'שלח בקשה ✈️'}
            </button>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-20 flex flex-col gap-8">
        <div className="bg-amber-900/20 border border-amber-600/40 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-amber-400 mb-4">⚠️ מה חשוב לדעת לפני הגשה</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#f5f0e8]/70">
            {[
              'הגישו לפחות 7 ימים לפני הטיסה',
              'הדרכון חייב להיות בתוקף 6+ חודשים מיום הכניסה',
              'תאריכים חייבים להתאים לטיסות — שינוי מחייב בקשה חדשה',
              'Single Entry: יציאה לקמבודיה = ויזה חדשה לחזרה',
              'חייבים להדפיס את הויזה — עותק מודפס בגבול',
              'אתרי E-Visa אחרים (לא ממשלתיים) — הונאה',
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-amber-400 flex-shrink-0 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#1a2535] border border-[#c9a84c]/10 rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-4">🤔 שאלות נפוצות</h3>
          <div className="flex flex-col gap-3">
            {[
              { q: 'כמה זמן לוקח לקבל את הויזה?', a: 'עיבוד רגיל: 4-5 ימי עסקים. אקספרס: 24 שעות. חירום: 4-6 שעות.' },
              { q: 'איך מגיעה הויזה?', a: 'הויזה תגיע לאימייל שהזנתם כקובץ PDF מוכן להדפסה.' },
              { q: 'מה אם יש שגיאה בטופס?', a: 'צוות סוליסט יבדוק ויצור קשר לפני ההגשה הסופית — לא תהיו לבד בתהליך.' },
              { q: 'האם אפשר לשנות תאריכים לאחר הגשה?', a: 'לא. שינוי כלשהו (תאריך, נמל, שם) מחייב פתיחת בקשה חדשה לחלוטין.' },
            ].map(item => (
              <div key={item.q} className="bg-[#0f1923] rounded-xl p-4">
                <div className="font-bold text-[#c9a84c] mb-1">❓ {item.q}</div>
                <div className="text-sm text-[#f5f0e8]/60">{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#f5f0e8]/50 text-sm mb-2">שאלות? פנו אלינו ישירות</p>
          <a href="mailto:soloistour@gmail.com" className="text-[#c9a84c] hover:underline text-sm">
            ✉️ soloistour@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

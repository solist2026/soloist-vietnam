import Link from 'next/link';
import Accordion from './Accordion';

export default function DestinationPage({ dest }) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={dest.heroImage}
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-[#0f1923]/40 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 p-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Link href={dest.regionHref} className="text-[#c9a84c]/70 hover:text-[#c9a84c] text-sm">
              {dest.regionName}
            </Link>
            <span className="text-[#f5f0e8]/40 text-sm">←</span>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">{dest.emoji}</span>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">{dest.name}</h1>
              <p className="text-[#c9a84c] text-xl mt-1">{dest.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {dest.chabad && (
              <span className="bg-blue-600/80 text-white text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur">
                ✡️ יש בית חב"ד
              </span>
            )}
            {dest.tags?.map((tag) => (
              <span key={tag} className="bg-[#1a2535]/80 text-[#c9a84c] text-xs px-3 py-1.5 rounded-full backdrop-blur border border-[#c9a84c]/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-[#1a2535] border-b border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {dest.quickStats?.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-[#c9a84c]">{s.value}</div>
              <div className="text-xs text-[#f5f0e8]/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Map location hint */}
      <div className="bg-[#0f1923] border-b border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 text-sm text-[#f5f0e8]/60">
          <span>📍</span>
          <span>{dest.locationDesc}</span>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-[#f5f0e8]/80 text-lg leading-relaxed max-w-4xl">{dest.description}</p>
      </div>

      {/* Accordion Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col gap-4">

        {/* Attractions */}
        <Accordion title="אטרקציות" emoji="🎯" defaultOpen={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dest.attractions?.map((a) => (
              <div key={a.name} className="bg-[#0f1923] rounded-xl overflow-hidden">
                {a.image && (
                  <img src={a.image} alt={a.name} className="w-full h-40 object-cover" />
                )}
                <div className="p-4">
                  <div className="font-bold text-[#c9a84c] mb-1">{a.name}</div>
                  <div className="text-sm text-[#f5f0e8]/70 leading-relaxed">{a.desc}</div>
                  {a.tip && (
                    <div className="mt-2 text-xs text-emerald-400 bg-emerald-900/20 rounded-lg px-3 py-1.5">
                      💡 {a.tip}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Food */}
        <Accordion title="אוכל מקומי" emoji="🍜">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dest.food?.map((f) => (
              <div key={f.name} className="bg-[#0f1923] rounded-xl overflow-hidden">
                {f.image && (
                  <img src={f.image} alt={f.name} className="w-full h-36 object-cover" />
                )}
                <div className="p-4">
                  <div className="font-bold text-[#c9a84c] mb-1">{f.name}</div>
                  <div className="text-sm text-[#f5f0e8]/70 leading-relaxed">{f.desc}</div>
                  {f.price && (
                    <div className="mt-2 text-xs font-bold text-[#c9a84c]">{f.price}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {dest.foodTips && (
            <div className="mt-4 bg-[#0f1923] rounded-xl p-4">
              <div className="text-sm font-bold text-[#c9a84c] mb-2">🗺️ איפה לאכול</div>
              <ul className="flex flex-col gap-1">
                {dest.foodTips.map((t, i) => (
                  <li key={i} className="text-sm text-[#f5f0e8]/70 flex gap-2">
                    <span className="text-[#c9a84c]">•</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Accordion>

        {/* Areas */}
        <Accordion title="אזורים ושכונות" emoji="📍">
          <div className="flex flex-col gap-3">
            {dest.areas?.map((a) => (
              <div key={a.name} className={`bg-[#0f1923] rounded-xl p-5 border ${a.recommended ? 'border-[#c9a84c]/40' : 'border-transparent'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-lg">{a.name}</span>
                  {a.recommended && (
                    <span className="text-xs bg-[#c9a84c]/20 text-[#c9a84c] px-2 py-0.5 rounded-full">מומלץ</span>
                  )}
                  {a.type && (
                    <span className="text-xs bg-[#1a2535] text-[#f5f0e8]/50 px-2 py-0.5 rounded-full">{a.type}</span>
                  )}
                </div>
                <p className="text-sm text-[#f5f0e8]/70 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Getting There */}
        <Accordion title="הגעה ותחבורה" emoji="🚌">
          <div className="flex flex-col gap-3">
            {dest.gettingThere?.map((g) => (
              <div key={g.from} className="bg-[#0f1923] rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{g.icon || '🚌'}</span>
                  <div>
                    <div className="font-semibold text-sm">{g.from}</div>
                    <div className="text-xs text-[#f5f0e8]/50">{g.method}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#c9a84c]">{g.time}</div>
                  {g.flight && (
                    <div className="text-xs text-blue-400 mt-0.5">✈️ יש טיסות ישירות</div>
                  )}
                  {g.price && (
                    <div className="text-xs text-[#f5f0e8]/40 mt-0.5">{g.price}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {dest.localTransport && (
            <div className="mt-4 bg-[#0f1923] rounded-xl p-4">
              <div className="text-sm font-bold text-[#c9a84c] mb-2">🛵 תחבורה מקומית</div>
              <ul className="flex flex-col gap-1">
                {dest.localTransport.map((t, i) => (
                  <li key={i} className="text-sm text-[#f5f0e8]/70 flex gap-2">
                    <span className="text-[#c9a84c]">•</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Accordion>

        {/* Accommodation */}
        <Accordion title="לינה" emoji="🛏️">
          <div className="flex flex-col gap-3">
            {dest.accommodation?.map((a) => (
              <div key={a.type} className="bg-[#0f1923] rounded-xl p-4 flex justify-between items-start">
                <div className="flex-1">
                  <div className="font-bold mb-1">{a.type}</div>
                  <div className="text-sm text-[#f5f0e8]/60">{a.desc}</div>
                  {a.examples && (
                    <div className="text-xs text-[#c9a84c]/70 mt-1">{a.examples}</div>
                  )}
                </div>
                <span className="text-[#c9a84c] font-bold text-sm whitespace-nowrap mr-4 flex-shrink-0">{a.price}</span>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Tips */}
        <Accordion title="טיפים חשובים" emoji="💡">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {dest.tips?.map((tip, i) => (
              <div key={i} className="bg-[#0f1923] rounded-xl p-4 flex gap-3">
                <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">✓</span>
                <span className="text-sm text-[#f5f0e8]/70 leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Chabad / Israeli info */}
        {dest.chabad && dest.chabadInfo && (
          <Accordion title='קהילה ישראלית' emoji="✡️">
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-5">
              <ul className="flex flex-col gap-2">
                {dest.chabadInfo.map((c, i) => (
                  <li key={i} className="text-sm text-blue-300 flex gap-2">
                    <span>•</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </Accordion>
        )}

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Link href={dest.regionHref} className="text-[#c9a84c] hover:underline text-sm">
            ← חזרה ל{dest.regionName}
          </Link>
          {dest.nextDest && (
            <Link href={dest.nextDest.href} className="text-[#c9a84c] hover:underline text-sm">
              {dest.nextDest.name} ←
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

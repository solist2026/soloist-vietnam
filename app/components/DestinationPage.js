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
              <a
                href="#community"
                className="bg-blue-600/80 text-white text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur hover:bg-blue-600 transition-colors cursor-pointer"
              >
                ✡️ בית חב"ד
              </a>
            )}
            {dest.tags?.map((tag) => {
              const label = typeof tag === 'string' ? tag : tag.label;
              const href = typeof tag === 'string' ? null : tag.href;
              const base = 'bg-[#1a2535]/80 text-[#c9a84c] text-xs px-3 py-1.5 rounded-full backdrop-blur border border-[#c9a84c]/20';
              return href ? (
                <a key={label} href={href} className={`${base} hover:bg-[#c9a84c]/10 transition-colors cursor-pointer`}>
                  {label}
                </a>
              ) : (
                <span key={label} className={base}>
                  {label}
                </span>
              );
            })}
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
        <Accordion id="attractions" title="אטרקציות" emoji="🎯" defaultOpen={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dest.attractions?.map((a) => (
              <div key={a.name} className="bg-[#0f1923] rounded-xl overflow-hidden">
                {a.image && (
                  <img src={a.image} alt={a.name} className="w-full h-40 object-cover" />
                )}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="font-bold text-[#c9a84c]">{a.name}</div>
                    {a.mapLink && (
                      <a
                        href={a.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-[#1a2535] text-[#c9a84c] border border-[#c9a84c]/30 px-2 py-1 rounded-lg hover:bg-[#c9a84c]/10 transition-colors whitespace-nowrap flex-shrink-0"
                      >
                        📍 מפה
                      </a>
                    )}
                  </div>
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

        {/* Day Trips */}
        {dest.dayTrips && (
          <Accordion id="daytrips" title="טיולי יום" emoji="🗺️">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dest.dayTrips.map((trip) => (
                <div key={trip.name} className="bg-[#0f1923] rounded-xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="font-bold text-[#c9a84c] text-lg">{trip.name}</div>
                    {trip.mapLink && (
                      <a
                        href={trip.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-[#1a2535] text-[#c9a84c] border border-[#c9a84c]/30 px-2 py-1 rounded-lg hover:bg-[#c9a84c]/10 transition-colors whitespace-nowrap flex-shrink-0"
                      >
                        📍 מפה
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 mb-3 text-xs text-[#f5f0e8]/50">
                    {trip.distance && <span>📏 {trip.distance}</span>}
                    {trip.duration && <span>⏱️ {trip.duration}</span>}
                    {trip.price && <span>💰 {trip.price}</span>}
                  </div>
                  <p className="text-sm text-[#f5f0e8]/70 leading-relaxed">{trip.desc}</p>
                  {trip.tip && (
                    <div className="mt-3 text-xs text-emerald-400 bg-emerald-900/20 rounded-lg px-3 py-1.5">
                      💡 {trip.tip}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Accordion>
        )}

        {/* Food */}
        <Accordion id="food" title="אוכל מקומי" emoji="🍜">
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
                  {f.where && (
                    <div className="mt-1 text-xs text-[#f5f0e8]/40">📍 {f.where}</div>
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
        <Accordion id="areas" title="אזורים ושכונות" emoji="📍">
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

        {/* Accommodation */}
        <Accordion id="accommodation" title="לינה" emoji="🛏️">
          <div className="flex flex-col gap-3">
            {dest.accommodation?.map((a) => (
              <div key={a.type} className="bg-[#0f1923] rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold">{a.type}</div>
                  <span className="text-[#c9a84c] font-bold text-sm whitespace-nowrap flex-shrink-0 mr-4">{a.price}</span>
                </div>
                <div className="text-sm text-[#f5f0e8]/60 mb-2">{a.desc}</div>
                {a.places ? (
                  <div className="flex flex-col gap-1 mt-1">
                    {a.places.map((p, i) => (
                      <div key={i} className="text-xs text-[#c9a84c]/70 flex gap-1">
                        <span className="flex-shrink-0">•</span>
                        {p.mapLink ? (
                          <a href={p.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#c9a84c]">
                            {p.name}{p.note ? ` — ${p.note}` : ''}
                          </a>
                        ) : (
                          <span>{p.name}{p.note ? ` — ${p.note}` : ''}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : a.examples ? (
                  <div className="text-xs text-[#c9a84c]/70">{a.examples}</div>
                ) : null}
              </div>
            ))}
          </div>
        </Accordion>

        {/* Getting There */}
        <Accordion id="getting-there" title="הגעה ותחבורה" emoji="🚌">
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

        {/* Seasons */}
        {dest.seasons && (
          <Accordion id="seasons" title="מתי לבוא" emoji="📅">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dest.seasons.map((s) => (
                <div key={s.months} className={`bg-[#0f1923] rounded-xl p-4 border ${s.best ? 'border-[#c9a84c]/40' : 'border-transparent'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.icon}</span>
                    <span className="font-bold">{s.months}</span>
                    {s.best && <span className="text-xs bg-[#c9a84c]/20 text-[#c9a84c] px-2 py-0.5 rounded-full">הכי טוב</span>}
                  </div>
                  <p className="text-sm text-[#f5f0e8]/70 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </Accordion>
        )}

        {/* Traveler Types */}
        {dest.travelerTypes && (
          <Accordion id="traveler-types" title="למי מתאים" emoji="🎒">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dest.travelerTypes.map((t) => (
                <div key={t.type} className="bg-[#0f1923] rounded-xl p-4">
                  <div className="text-2xl mb-2">{t.icon}</div>
                  <div className="font-bold text-[#c9a84c] mb-1">{t.type}</div>
                  <p className="text-sm text-[#f5f0e8]/70 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </Accordion>
        )}

        {/* Tips */}
        <Accordion id="tips" title="טיפים חשובים" emoji="💡">
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
          <Accordion id="community" title='קהילה ישראלית' emoji="✡️">
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

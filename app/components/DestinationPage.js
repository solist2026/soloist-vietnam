import Link from 'next/link';
import Accordion from './Accordion';

export default function DestinationPage({ dest }) {
  return (
    <div className="min-h-screen pt-[88px]" style={{ color: "#1e293b", backgroundColor: "#FDFCF8" }}>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px]">
        <img
          src={dest.heroImage}
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/95 via-[#0f1923]/40 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 p-6 md:p-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Link href={dest.regionHref} className="text-white/50 hover:text-white/80 text-sm transition-colors">
              {dest.regionName}
            </Link>
            <span className="text-white/30 text-sm">←</span>
          </div>
          <div className="flex items-end gap-4 mb-4">
            <span className="text-5xl md:text-6xl drop-shadow-lg">{dest.emoji}</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">{dest.name}</h1>
              <p className="text-orange-300 text-lg md:text-xl mt-1 font-medium">{dest.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {dest.chabad && (
              <a
                href="#community"
                className="bg-blue-600/80 text-white text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur hover:bg-blue-600 transition-colors"
              >
                ✡️ בית חב"ד
              </a>
            )}
            {dest.tags?.map((tag) => {
              const label = typeof tag === 'string' ? tag : tag.label;
              const href  = typeof tag === 'string' ? null : tag.href;
              const base  = 'bg-white/15 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur border border-white/20 font-medium';
              return href ? (
                <a key={label} href={href} className={`${base} hover:bg-white/25 transition-colors`}>{label}</a>
              ) : (
                <span key={label} className={base}>{label}</span>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: "url('/images/page-bg.png')", backgroundSize: "cover", backgroundPosition: "top center", backgroundRepeat: "no-repeat", backgroundColor: "#FDFCF8" }}>

      {/* Quick Stats — visual icons */}
      {dest.quickStats?.length > 0 && (
        <div className="bg-white border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 rtl:divide-x-reverse">
            {dest.quickStats.map((s, i) => (
              <div key={s.label} className="text-center px-4 first:pr-0 last:pl-0">
                {s.icon && <div className="text-2xl mb-1">{s.icon}</div>}
                <div className="text-lg md:text-xl font-black text-orange-500">{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Location */}
      {dest.locationDesc && (
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-start gap-2 text-sm text-slate-600">
            <span className="flex-shrink-0">📍</span>
            <span>{dest.locationDesc}</span>
          </div>
        </div>
      )}

      {/* Description */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-4xl font-light">{dest.description}</p>
      </div>

      {/* Accordion Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col gap-3">

        {/* Attractions */}
        <Accordion id="attractions" title="אטרקציות" emoji="🎯" defaultOpen={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dest.attractions?.map((a) => {
              const inner = (
                <>
                  {a.image ? (
                    <div className="relative h-44 overflow-hidden">
                      <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      {(a.recommended || a.best) && (
                        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                          {a.recommended ? '⭐ מומלץ' : '🏆 הכי טוב'}
                        </span>
                      )}
                    </div>
                  ) : (a.recommended || a.best) ? (
                    <div className="h-1.5 bg-gradient-to-r from-orange-400 to-orange-200 rounded-t-xl" />
                  ) : null}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="font-bold text-[#1A2535] group-hover:text-orange-500 transition-colors text-base">{a.name}</div>
                      {a.href ? (
                        <span className="text-xs text-orange-400 flex-shrink-0 whitespace-nowrap font-medium">פרטים ←</span>
                      ) : a.mapLink ? (
                        <a
                          href={a.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-slate-100 text-slate-600 border border-slate-200 px-2 py-1 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap flex-shrink-0"
                        >
                          📍 מפה
                        </a>
                      ) : null}
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed">{a.desc}</div>
                    {a.tip && (
                      <div className="mt-3 text-xs text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2 border border-emerald-100">
                        💡 {a.tip}
                      </div>
                    )}
                  </div>
                </>
              );
              return a.href ? (
                <Link key={a.name} href={a.href} className="bg-white rounded-xl overflow-hidden block group hover:shadow-md hover:ring-2 hover:ring-orange-200 transition-all border border-slate-100">
                  {inner}
                </Link>
              ) : (
                <div key={a.name} className="bg-white rounded-xl overflow-hidden border border-slate-100 group">
                  {inner}
                </div>
              );
            })}
          </div>
        </Accordion>

        {/* Day Trips */}
        {dest.dayTrips && (
          <Accordion id="daytrips" title="טיולי יום" emoji="🗺️">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dest.dayTrips.map((trip) => (
                <div key={trip.name} className="bg-white rounded-xl p-5 border border-slate-100 hover:border-orange-200 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="font-bold text-[#1A2535] text-base">{trip.name}</div>
                    {trip.mapLink && (
                      <a href={trip.mapLink} target="_blank" rel="noopener noreferrer"
                        className="text-xs bg-slate-50 text-slate-600 border border-slate-200 px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap flex-shrink-0">
                        📍 מפה
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 mb-3">
                    {trip.distance && <span className="text-xs bg-slate-50 border border-slate-100 rounded-full px-2.5 py-1 text-slate-600">📏 {trip.distance}</span>}
                    {trip.duration && <span className="text-xs bg-slate-50 border border-slate-100 rounded-full px-2.5 py-1 text-slate-600">⏱️ {trip.duration}</span>}
                    {trip.price   && <span className="text-xs bg-orange-50 border border-orange-100 rounded-full px-2.5 py-1 text-orange-700 font-medium">💰 {trip.price}</span>}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{trip.desc}</p>
                  {trip.tip && (
                    <div className="mt-3 text-xs text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2 border border-emerald-100">💡 {trip.tip}</div>
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
              <div key={f.name} className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-sm transition-all">
                {f.image && (
                  <div className="relative h-36 overflow-hidden">
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-4">
                  <div className="font-bold text-[#1A2535] mb-1">{f.name}</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{f.desc}</div>
                  {f.price && <div className="mt-2 inline-block text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">{f.price}</div>}
                  {f.where && <div className="mt-1.5 text-xs text-slate-400">📍 {f.where}</div>}
                </div>
              </div>
            ))}
          </div>
          {dest.foodTips && (
            <div className="mt-4 bg-amber-50 rounded-xl p-5 border border-amber-100">
              <div className="text-sm font-bold text-amber-800 mb-3">🗺️ איפה לאכול</div>
              <ul className="flex flex-col gap-2">
                {dest.foodTips.map((t, i) => (
                  <li key={i} className="text-sm text-amber-900 flex gap-2">
                    <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>{t}
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
              <div key={a.name} className={`bg-white rounded-xl p-5 border transition-all ${a.recommended ? 'border-orange-200 shadow-sm' : 'border-slate-100'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-[#1A2535] text-base">{a.name}</span>
                  {a.recommended && <span className="text-xs bg-orange-500 text-white px-2.5 py-0.5 rounded-full font-bold">מומלץ</span>}
                  {a.type && <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{a.type}</span>}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Accommodation */}
        <Accordion id="accommodation" title="לינה" emoji="🛏️">
          <div className="flex flex-col gap-3">
            {dest.accommodation?.map((a) => (
              <div key={a.type} className="bg-white rounded-xl p-4 border border-slate-100 hover:border-slate-200 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-[#1A2535]">{a.type}</div>
                  <span className="text-orange-500 font-bold text-sm whitespace-nowrap flex-shrink-0 mr-4 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">{a.price}</span>
                </div>
                <div className="text-sm text-slate-500 mb-2">{a.desc}</div>
                {a.places ? (
                  <div className="flex flex-col gap-1 mt-2">
                    {a.places.map((p, i) => (
                      <div key={i} className="text-xs text-slate-500 flex gap-1.5">
                        <span className="flex-shrink-0 text-orange-400">•</span>
                        {p.mapLink ? (
                          <a href={p.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-orange-500">
                            {p.name}{p.note ? `, ${p.note}` : ''}
                          </a>
                        ) : (
                          <span>{p.name}{p.note ? `, ${p.note}` : ''}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : a.examples ? (
                  <div className="text-xs text-slate-500 mt-1">{a.examples}</div>
                ) : null}
              </div>
            ))}
          </div>
        </Accordion>

        {/* Getting There */}
        <Accordion id="getting-there" title="הגעה ותחבורה" emoji="🚌">
          <div className="flex flex-col gap-3">
            {dest.gettingThere?.map((g) => (
              <div key={g.from} className="bg-white rounded-xl p-4 border border-slate-100 flex items-center justify-between gap-4 hover:border-slate-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {g.icon || '🚌'}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1A2535]">{g.from}</div>
                    <div className="text-xs text-slate-500">{g.method}</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-bold text-orange-500 text-sm">{g.time}</div>
                  {g.flight && <div className="text-xs text-blue-500 mt-0.5">✈️ טיסות ישירות</div>}
                  {g.price  && <div className="text-xs text-slate-400 mt-0.5">{g.price}</div>}
                </div>
              </div>
            ))}
          </div>
          {dest.localTransport && (
            <div className="mt-4 bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="text-sm font-bold text-blue-800 mb-3">🛵 תחבורה מקומית</div>
              <ul className="flex flex-col gap-2">
                {dest.localTransport.map((t, i) => (
                  <li key={i} className="text-sm text-blue-900 flex gap-2">
                    <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>{t}
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
                <div key={s.months} className={`bg-white rounded-xl p-5 border transition-all ${s.best ? 'border-orange-200 shadow-sm' : 'border-slate-100'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{s.icon}</span>
                    <span className="font-bold text-[#1A2535]">{s.months}</span>
                    {s.best && <span className="text-xs bg-orange-500 text-white px-2.5 py-0.5 rounded-full font-bold mr-auto">הכי טוב</span>}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
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
                <div key={t.type} className="bg-white rounded-xl p-5 border border-slate-100 hover:border-orange-200 transition-all">
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <div className="font-bold text-[#1A2535] mb-2">{t.type}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </Accordion>
        )}

        {/* Tips */}
        <Accordion id="tips" title="טיפים חשובים" emoji="💡">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {dest.tips?.map((tip, i) => (
              <div key={i} className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex gap-3">
                <span className="text-amber-500 font-black text-lg flex-shrink-0 leading-tight">✓</span>
                <span className="text-sm text-amber-900 leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Chabad */}
        {dest.chabad && dest.chabadInfo && (
          <Accordion id="community" title='קהילה ישראלית' emoji="✡️">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <ul className="flex flex-col gap-2.5">
                {dest.chabadInfo.map((c, i) => (
                  <li key={i} className="text-sm text-blue-700 flex gap-2">
                    <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </Accordion>
        )}

        {/* Navigation */}
        <div className="flex justify-between pt-6 border-t border-slate-100 mt-2">
          <Link href={dest.regionHref} className="flex items-center gap-1.5 text-orange-500 hover:text-orange-600 text-sm font-medium group">
            <span className="group-hover:translate-x-1 transition-transform">←</span>
            <span>חזרה ל{dest.regionName}</span>
          </Link>
          {dest.nextDest && (
            <Link href={dest.nextDest.href} className="flex items-center gap-1.5 text-orange-500 hover:text-orange-600 text-sm font-medium group">
              <span>{dest.nextDest.name}</span>
              <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
            </Link>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

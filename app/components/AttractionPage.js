import Link from 'next/link';

export default function AttractionPage({ data }) {
  const regionName = data.regionName || 'צפון וייטנאם';
  const regionHref = data.regionHref || '/destinations/north';
  const destName = data.destName || 'האנוי';
  const destHref = data.destHref || '/destinations/north/hanoi';

  return (
    <div className="min-h-screen pt-[88px]" style={{ color: "#1e293b", backgroundColor: "#FDFCF8" }}>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[350px]">
        <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-3 text-sm flex-wrap">
            <Link href={regionHref} className="text-orange-300/80 hover:text-orange-300">{regionName}</Link>
            <span className="text-white/30">←</span>
            <Link href={destHref} className="text-orange-300/80 hover:text-orange-300">{destName}</Link>
            <span className="text-white/30">←</span>
            <span className="text-white/70">{data.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{data.name}</h1>
          {data.subtitle && <p className="text-orange-300 text-lg">{data.subtitle}</p>}
        </div>
      </div>

      <div style={{ backgroundImage: "url('/images/page-bg.png')", backgroundSize: "cover", backgroundPosition: "top center", backgroundRepeat: "no-repeat", backgroundColor: "#FDFCF8" }}>

      {/* Quick Info Bar */}
      {data.quickInfo && data.quickInfo.length > 0 && (
        <div className="bg-white/80 backdrop-blur-sm border-b border-stone-200/60">
          <div className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.quickInfo.map((info) => (
              <div key={info.label} className="text-center">
                <div className="text-lg font-bold text-orange-500">{info.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{info.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col gap-7">
        {/* Description */}
        <div className="bg-white/80 rounded-2xl p-6 border border-stone-100 shadow-sm flex flex-col gap-3">
          <p className="text-slate-700 text-lg leading-relaxed">{data.description}</p>
          {data.descriptionExtra && (
            <p className="text-slate-600 text-base leading-relaxed">{data.descriptionExtra}</p>
          )}
        </div>

        {/* Tip banner */}
        {data.tip && (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 flex gap-3">
            <span className="text-orange-500 text-xl flex-shrink-0">💡</span>
            <p className="text-slate-700 text-sm leading-relaxed">{data.tip}</p>
          </div>
        )}

        {/* Map embed */}
        {data.lat && data.lng && (
          <div className="bg-white/80 rounded-3xl overflow-hidden border border-stone-100 shadow-sm">
            <iframe
              src={`https://maps.google.com/maps?q=${data.lat},${data.lng}&hl=iw&z=${data.zoom || 16}&output=embed`}
              className="w-full h-72 block"
              loading="lazy"
              allowFullScreen
              title={data.name}
            />
            <div className="p-4 flex items-center justify-between gap-4 flex-wrap">
              {data.address && <span className="text-sm text-slate-500">📍 {data.address}</span>}
              <a
                href={`https://www.google.com/maps?q=${data.lat},${data.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-600 transition-colors whitespace-nowrap"
              >
                פתח בגוגל מפה ↗
              </a>
            </div>
          </div>
        )}

        {/* mapLink only (no embed) */}
        {data.mapLink && !data.lat && (
          <div className="bg-white/80 rounded-2xl p-4 border border-stone-100 shadow-sm flex justify-end">
            <a
              href={data.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-600 transition-colors"
            >
              פתח בגוגל מפה ↗
            </a>
          </div>
        )}

        {/* Sections */}
        {data.sections?.map((section) => (
          <div key={section.title} className="bg-white/80 rounded-2xl p-6 border border-stone-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">{section.emoji} {section.title}</h2>
            <div className="flex flex-col gap-2.5">
              {section.items.map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                  <span className="text-orange-500 flex-shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Back link */}
        <Link href={destHref} className="text-orange-500 hover:underline text-sm font-medium">
          ← חזרה ל{destName}
        </Link>
      </div>
      </div>
    </div>
  );
}

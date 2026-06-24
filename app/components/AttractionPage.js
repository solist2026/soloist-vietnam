import Link from 'next/link';

export default function AttractionPage({ data }) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[350px]">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-[#0f1923]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-3 text-sm flex-wrap">
            <Link href="/destinations/north" className="text-[#c9a84c]/70 hover:text-[#c9a84c]">
              צפון וייטנאם
            </Link>
            <span className="text-[#f5f0e8]/30">←</span>
            <Link href="/destinations/north/hanoi" className="text-[#c9a84c]/70 hover:text-[#c9a84c]">
              האנוי
            </Link>
            <span className="text-[#f5f0e8]/30">←</span>
            <span className="text-[#f5f0e8]/60">{data.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.name}</h1>
          <p className="text-[#c9a84c] text-lg">{data.subtitle}</p>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-[#1a2535] border-b border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.quickInfo?.map((info) => (
            <div key={info.label} className="text-center">
              <div className="text-lg font-bold text-[#c9a84c]">{info.value}</div>
              <div className="text-xs text-[#f5f0e8]/50 mt-0.5">{info.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-8">
        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-[#f5f0e8]/80 text-lg leading-relaxed">{data.description}</p>
          {data.descriptionExtra && (
            <p className="text-[#f5f0e8]/70 text-base leading-relaxed">{data.descriptionExtra}</p>
          )}
        </div>

        {/* Map */}
        <div className="bg-[#1a2535] rounded-3xl overflow-hidden border border-[#c9a84c]/10">
          <iframe
            src={`https://maps.google.com/maps?q=${data.lat},${data.lng}&hl=iw&z=${data.zoom || 16}&output=embed`}
            className="w-full h-72 block"
            loading="lazy"
            allowFullScreen
            title={data.name}
          />
          <div className="p-4 flex items-center justify-between gap-4 flex-wrap">
            <span className="text-sm text-[#f5f0e8]/50">📍 {data.address}</span>
            <a
              href={`https://www.google.com/maps?q=${data.lat},${data.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c9a84c] text-[#0f1923] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#b8963d] transition-colors whitespace-nowrap"
            >
              פתח בגוגל מפה ↗
            </a>
          </div>
        </div>

        {/* Sections */}
        {data.sections?.map((section) => (
          <div key={section.title} className="bg-[#1a2535] rounded-2xl p-6 border border-[#c9a84c]/10">
            <h2 className="text-xl font-bold mb-4">
              {section.emoji} {section.title}
            </h2>
            <div className="flex flex-col gap-2.5">
              {section.items.map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-[#f5f0e8]/70 leading-relaxed">
                  <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Back */}
        <Link href="/destinations/north/hanoi" className="text-[#c9a84c] hover:underline text-sm">
          ← חזרה לדף האנוי
        </Link>
      </div>
    </div>
  );
}

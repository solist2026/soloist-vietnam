'use client';
import { useState } from 'react';

export default function Accordion({ title, emoji, image, children, defaultOpen = false, id }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div id={id} className="rounded-2xl border border-[#E5E4DC] shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-full flex items-center justify-between gap-3 px-5 text-right overflow-hidden"
        style={{ minHeight: '72px' }}
      >
        {/* Background image */}
        {image && (
          <>
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Overlay: darker on right (where text is) fading to semi-transparent on left */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(20,30,45,0.82) 0%, rgba(20,30,45,0.55) 55%, rgba(20,30,45,0.35) 100%)' }} />
          </>
        )}

        {/* Chevron — left side */}
        <span className={`relative z-10 flex-shrink-0 text-base transition-transform duration-300 ${image ? 'text-white/70' : 'text-slate-400'} ${open ? 'rotate-180' : ''}`}>▼</span>

        {/* Title + emoji — right side */}
        <span className={`relative z-10 text-base md:text-lg font-bold flex items-center gap-2 md:gap-3 py-5 ${image ? 'text-white drop-shadow' : 'text-[#1A2535]'}`}>
          {title}
          {emoji && <span className="text-lg md:text-xl">{emoji}</span>}
        </span>
      </button>

      {open && (
        <div className="bg-[#F2F1EB] px-4 md:px-6 pb-6 border-t border-slate-200 pt-5">
          {children}
        </div>
      )}
    </div>
  );
}

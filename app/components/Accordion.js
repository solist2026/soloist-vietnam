'use client';
import { useState } from 'react';

export default function Accordion({ title, emoji, image, children, defaultOpen = false, id }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div id={id} className="rounded-2xl border border-[#E5E4DC] shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-full text-right overflow-hidden block"
      >
        {image ? (
          <>
            {/* Full image — natural ratio, no crop */}
            <img
              src={image}
              alt=""
              className="w-full h-auto block"
              loading="lazy"
            />
            {/* Gradient overlay for readability */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to left, rgba(10,20,35,0.78) 0%, rgba(10,20,35,0.5) 55%, rgba(10,20,35,0.28) 100%)' }}
            />
            {/* Text row on top of image */}
            <div className="absolute inset-0 flex items-center justify-between px-5">
              <span className={`flex-shrink-0 text-base text-white/70 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▼</span>
              <span className="text-base md:text-lg font-bold text-white drop-shadow flex items-center gap-2 md:gap-3">
                {title}
                {emoji && <span className="text-lg md:text-xl">{emoji}</span>}
              </span>
            </div>
          </>
        ) : (
          /* No image — plain header */
          <div className="bg-[#F2F1EB] hover:bg-[#EAEADF] transition-colors flex items-center justify-between px-5 py-5">
            <span className={`flex-shrink-0 text-base text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▼</span>
            <span className="text-base md:text-lg font-bold text-[#1A2535] flex items-center gap-2 md:gap-3">
              {title}
              {emoji && <span className="text-lg md:text-xl">{emoji}</span>}
            </span>
          </div>
        )}
      </button>

      {open && (
        <div className="bg-[#F2F1EB] px-4 md:px-6 pb-6 border-t border-slate-200 pt-5">
          {children}
        </div>
      )}
    </div>
  );
}

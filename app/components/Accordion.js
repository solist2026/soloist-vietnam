'use client';
import { useState } from 'react';

export default function Accordion({ title, emoji, image, children, defaultOpen = false, id }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div id={id} className="bg-[#F2F1EB] rounded-2xl border border-[#E5E4DC] shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-right hover:bg-[#EAEADF] transition-colors"
      >
        {/* Left: image + chevron */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {image && (
            <div className="w-14 h-10 md:w-20 md:h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
          <span className={`text-slate-400 text-base transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▼</span>
        </div>

        {/* Right: emoji + title */}
        <span className="text-base md:text-lg font-bold text-[#1A2535] flex items-center gap-2 md:gap-3">
          {title}
          {emoji && <span className="text-lg md:text-xl">{emoji}</span>}
        </span>
      </button>
      {open && (
        <div className="px-4 md:px-6 pb-6 border-t border-slate-100 pt-5">
          {children}
        </div>
      )}
    </div>
  );
}

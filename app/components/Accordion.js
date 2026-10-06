'use client';
import { useState } from 'react';

export default function Accordion({ title, emoji, children, defaultOpen = false, id }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div id={id} className="bg-[#F2F1EB] rounded-2xl border border-[#E5E4DC] shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-right hover:bg-[#EAEADF] transition-colors"
      >
        <span className={`text-slate-400 text-lg transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▼</span>
        <span className="text-lg font-bold text-[#1A2535] flex items-center gap-3">
          {title}
          {emoji && <span className="text-xl">{emoji}</span>}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-slate-100 pt-5">
          {children}
        </div>
      )}
    </div>
  );
}

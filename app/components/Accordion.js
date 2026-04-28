'use client';
import { useState } from 'react';

export default function Accordion({ title, emoji, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-[#1a2535] rounded-2xl border border-[#c9a84c]/10 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-right hover:bg-[#c9a84c]/5 transition-colors"
      >
        <span className={`text-[#c9a84c] text-xl transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▼</span>
        <span className="text-xl font-bold flex items-center gap-3">
          {title}
          {emoji && <span className="text-2xl">{emoji}</span>}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-[#c9a84c]/10 pt-5">
          {children}
        </div>
      )}
    </div>
  );
}

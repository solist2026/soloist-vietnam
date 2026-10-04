"use client";
import { useRouter } from "next/navigation";

export default function CityPill({ name, href }) {
  const router = useRouter();
  return (
    <span
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(href); }}
      className="cursor-pointer text-xs bg-orange-50 text-orange-600 font-medium px-2.5 py-0.5 rounded-full hover:bg-orange-100 transition-colors"
    >
      {name}
    </span>
  );
}

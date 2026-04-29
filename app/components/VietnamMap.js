// SVG map of Vietnam with destination markers
// Coordinate system: lon 102-110°E → x 0-220, lat 8-24°N → y 0-520 (inverted)

const toX = (lon) => ((lon - 102) / 8) * 220;
const toY = (lat) => ((24 - lat) / 16) * 520;

const allDestinations = [
  // North
  { id: 'ha-giang',  name: 'הא גיאנג',  region: 'north',  lon: 104.98, lat: 22.82, color: '#22c55e', ta: 'start', dx: 7,  dy: 3 },
  { id: 'sapa',      name: 'סאפה',        region: 'north',  lon: 103.84, lat: 22.34, color: '#a855f7', ta: 'end',   dx: -7, dy: 3 },
  { id: 'hanoi',     name: 'האנוי',       region: 'north',  lon: 105.85, lat: 21.03, color: '#3b82f6', ta: 'start', dx: 7,  dy: 3 },
  { id: 'mai-chau',  name: "מאי צ'או",    region: 'north',  lon: 105.00, lat: 20.90, color: '#84cc16', ta: 'end',   dx: -7, dy: 3 },
  { id: 'halong',    name: 'הלונג ביי',  region: 'north',  lon: 107.12, lat: 20.91, color: '#06b6d4', ta: 'start', dx: 7,  dy: 3 },
  { id: 'catba',     name: 'קאט בה',      region: 'north',  lon: 107.05, lat: 20.75, color: '#0ea5e9', ta: 'end',   dx: -7, dy: 12 },
  { id: 'ninh-binh', name: 'ניין בינה',   region: 'north',  lon: 105.97, lat: 20.25, color: '#14b8a6', ta: 'end',   dx: -7, dy: 3 },
  // Center
  { id: 'hue',       name: 'הואה',        region: 'center', lon: 107.59, lat: 16.46, color: '#f59e0b', ta: 'end',   dx: -7, dy: 3 },
  { id: 'danang',    name: 'דה נאנג',     region: 'center', lon: 108.21, lat: 16.07, color: '#f97316', ta: 'start', dx: 7,  dy: 3 },
  { id: 'my-son',    name: 'מי שון',       region: 'center', lon: 107.86, lat: 15.77, color: '#d946ef', ta: 'end',   dx: -7, dy: 3 },
  { id: 'hoi-an',    name: 'הוי אן',      region: 'center', lon: 108.33, lat: 15.88, color: '#ec4899', ta: 'start', dx: 7,  dy: 12 },
  { id: 'quy-nhon',  name: 'קוי נהון',    region: 'center', lon: 109.22, lat: 13.77, color: '#8b5cf6', ta: 'end',   dx: -7, dy: 3 },
  // South
  { id: 'hcmc',      name: "הו צ'י מין",  region: 'south',  lon: 106.66, lat: 10.82, color: '#ef4444', ta: 'end',   dx: -7, dy: 3 },
  { id: 'mui-ne',    name: 'מוי נה',       region: 'south',  lon: 108.29, lat: 10.94, color: '#f43f5e', ta: 'start', dx: 7,  dy: 3 },
  { id: 'vung-tau',  name: 'וונג טאו',     region: 'south',  lon: 107.08, lat: 10.35, color: '#fb923c', ta: 'start', dx: 7,  dy: -4 },
  { id: 'phu-quoc',  name: 'פו קווק',      region: 'south',  lon: 103.96, lat: 10.22, color: '#10b981', ta: 'middle',dx: 0,  dy: 13 },
  { id: 'mekong',    name: 'מקונג',         region: 'south',  lon: 105.68, lat: 10.03, color: '#16a34a', ta: 'end',   dx: -7, dy: 3 },
  { id: 'con-dao',   name: 'קון דאו',       region: 'south',  lon: 106.62, lat: 8.69,  color: '#c084fc', ta: 'end',   dx: -7, dy: 3 },
];

const regionHighlights = {
  north: "M 14,49 L 88,20 L 129,65 L 146,81 L 152,97 L 143,100 L 132,113 L 107,130 L 102,130 L 88,130 L 50,130 L 33,97 L 25,65 Z",
  center: "M 102,130 L 107,130 L 132,113 L 143,100 L 152,97 L 170,256 L 179,263 L 158,270 L 143,276 L 138,260 L 124,243 L 116,211 L 96,195 L 88,163 L 88,130 Z",
  south: "M 91,325 L 149,325 L 152,293 L 170,256 L 179,263 L 189,293 L 206,358 L 200,390 L 192,406 L 179,423 L 152,439 L 138,448 L 69,494 L 55,471 L 55,448 L 63,439 L 69,423 L 77,390 L 83,358 Z",
};

const regionHighlightColors = { north: '#10b981', center: '#f59e0b', south: '#ef4444' };

export default function VietnamMap({ activeRegion, baseHref }) {
  const highlightColor = regionHighlightColors[activeRegion] || '#c9a84c';

  return (
    <div>
      <svg
        viewBox="0 0 220 520"
        className="w-full max-w-[190px] mx-auto drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vietnam outline */}
        <path
          d="M 14,49 L 88,20 L 129,65 L 146,81 L 152,97 L 143,100 L 132,113 L 107,130 L 102,146 L 104,178 L 110,195 L 138,211 L 149,243 L 170,256 L 179,263 L 189,293 L 206,358 L 200,390 L 192,406 L 179,423 L 152,439 L 138,448 L 69,494 L 55,471 L 55,448 L 63,439 L 69,423 L 77,390 L 83,358 L 91,325 L 149,325 L 152,293 L 143,276 L 138,260 L 124,243 L 116,211 L 96,195 L 88,163 L 50,130 L 33,97 L 25,65 Z"
          fill="#0f2030"
          stroke="#1e3a50"
          strokeWidth="1.5"
        />
        {/* Phu Quoc island */}
        <ellipse cx="50" cy="445" rx="4" ry="7" fill="#0f2030" stroke="#1e3a50" strokeWidth="1" />

        {/* Region highlight */}
        {activeRegion && regionHighlights[activeRegion] && (
          <path d={regionHighlights[activeRegion]} fill={highlightColor} fillOpacity="0.15" />
        )}

        {/* Inactive destinations — colored dots */}
        {allDestinations
          .filter((d) => d.region !== activeRegion)
          .map((d) => (
            <a key={d.id} href={`/destinations/${d.region}/${d.id}`}>
              <circle
                cx={toX(d.lon)}
                cy={toY(d.lat)}
                r="3.5"
                fill={d.color}
                opacity="0.45"
                stroke="#0f1923"
                strokeWidth="0.5"
                style={{ cursor: 'pointer' }}
              />
            </a>
          ))}

        {/* Active destinations — larger marker + label */}
        {allDestinations
          .filter((d) => d.region === activeRegion)
          .map((d) => {
            const cx = toX(d.lon);
            const cy = toY(d.lat);
            return (
              <a key={d.id} href={`/destinations/${d.region}/${d.id}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="6"
                  fill={d.color}
                  stroke="white"
                  strokeWidth="1.5"
                  style={{ cursor: 'pointer', filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.25))' }}
                />
                <circle cx={cx} cy={cy} r="2.5" fill="white" />
                <text
                  x={cx + d.dx}
                  y={cy + d.dy}
                  fontSize="6"
                  textAnchor={d.ta}
                  fill={d.color}
                  stroke="#0a1520"
                  strokeWidth="2.5"
                  paintOrder="stroke"
                  fontWeight="bold"
                  style={{ cursor: 'pointer' }}
                >
                  {d.name}
                </text>
              </a>
            );
          })}

        {/* Compass */}
        <text x="200" y="18" fontSize="9" fill="#c9a84c" fontWeight="bold">N</text>
        <text x="201" y="27" fontSize="7" fill="#c9a84c">↑</text>
      </svg>

      {/* Clickable legend below map */}
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-4 justify-center">
        {allDestinations
          .filter((d) => d.region === activeRegion)
          .map((d) => (
            <a
              key={d.id}
              href={`/destinations/${d.region}/${d.id}`}
              className="flex items-center gap-1.5 text-xs group"
            >
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
              <span className="hover:underline transition-colors" style={{ color: d.color }}>
                {d.name}
              </span>
            </a>
          ))}
      </div>
    </div>
  );
}

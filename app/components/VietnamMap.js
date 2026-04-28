// SVG map of Vietnam with destination markers
// Coordinate system: lon 102-110°E → x 0-220, lat 8-24°N → y 0-520 (inverted)

const toX = (lon) => ((lon - 102) / 8) * 220;
const toY = (lat) => ((24 - lat) / 16) * 520;

const allDestinations = {
  north: [
    { id: 'ha-giang', name: 'הא גיאנג', lon: 104.98, lat: 22.82 },
    { id: 'sapa',     name: 'סאפה',      lon: 103.84, lat: 22.34 },
    { id: 'hanoi',    name: 'האנוי',     lon: 105.85, lat: 21.03 },
    { id: 'halong',   name: 'הלונג ביי', lon: 107.12, lat: 20.91 },
    { id: 'catba',    name: 'קאט בה',    lon: 107.05, lat: 20.75 },
    { id: 'ninh-binh',name: 'ניין בינה', lon: 105.97, lat: 20.25 },
  ],
  center: [
    { id: 'hue',    name: 'הואה',    lon: 107.59, lat: 16.46 },
    { id: 'danang', name: 'דה נאנג', lon: 108.21, lat: 16.07 },
    { id: 'hoi-an', name: 'הוי אן',  lon: 108.33, lat: 15.88 },
  ],
  south: [
    { id: 'hcmc',      name: "הו צ'י מין", lon: 106.66, lat: 10.82 },
    { id: 'mui-ne',    name: 'מוי נה',      lon: 108.29, lat: 10.94 },
    { id: 'phu-quoc',  name: 'פו קווק',     lon: 103.96, lat: 10.22 },
    { id: 'mekong',    name: 'מקונג',        lon: 105.68, lat: 10.03 },
  ],
};

const regionColors = { north: '#10b981', center: '#f59e0b', south: '#ef4444' };

export default function VietnamMap({ activeRegion, baseHref }) {
  const active = allDestinations[activeRegion] || [];
  const color = regionColors[activeRegion] || '#c9a84c';

  return (
    <div className="relative flex justify-center">
      <svg
        viewBox="0 0 220 520"
        className="w-full max-w-[200px] drop-shadow-xl"
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
        {activeRegion === 'north' && (
          <path
            d="M 14,49 L 88,20 L 129,65 L 146,81 L 152,97 L 143,100 L 132,113 L 107,130 L 102,130 L 88,130 L 50,130 L 33,97 L 25,65 Z"
            fill={color}
            fillOpacity="0.15"
          />
        )}
        {activeRegion === 'center' && (
          <path
            d="M 102,130 L 107,130 L 132,113 L 143,100 L 152,97 L 170,256 L 179,263 L 158,270 L 143,276 L 138,260 L 124,243 L 116,211 L 96,195 L 88,163 L 88,130 Z"
            fill={color}
            fillOpacity="0.15"
          />
        )}
        {activeRegion === 'south' && (
          <path
            d="M 91,325 L 149,325 L 152,293 L 170,256 L 179,263 L 189,293 L 206,358 L 200,390 L 192,406 L 179,423 L 152,439 L 138,448 L 69,494 L 55,471 L 55,448 L 63,439 L 69,423 L 77,390 L 83,358 Z"
            fill={color}
            fillOpacity="0.15"
          />
        )}

        {/* Inactive markers */}
        {Object.entries(allDestinations).map(([region, dests]) =>
          region !== activeRegion
            ? dests.map((d) => (
                <circle
                  key={d.id}
                  cx={toX(d.lon)}
                  cy={toY(d.lat)}
                  r="3"
                  fill="#4a5568"
                  stroke="#2d3748"
                  strokeWidth="0.5"
                />
              ))
            : null
        )}

        {/* Active markers */}
        {active.map((d) => (
          <g key={d.id}>
            <circle
              cx={toX(d.lon)}
              cy={toY(d.lat)}
              r="6"
              fill={color}
              stroke="white"
              strokeWidth="1.5"
              style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }}
            />
            <circle cx={toX(d.lon)} cy={toY(d.lat)} r="2.5" fill="white" />
          </g>
        ))}

        {/* Compass */}
        <text x="195" y="18" fontSize="10" fill="#c9a84c" fontWeight="bold">N</text>
        <text x="196" y="27" fontSize="7" fill="#c9a84c">↑</text>
      </svg>

      {/* Legend */}
      <div className="absolute right-0 top-0 flex flex-col gap-2">
        {active.map((d) => (
          <a
            key={d.id}
            href={`${baseHref}/${d.id}`}
            className="flex items-center gap-1.5 text-xs group"
          >
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: color }}
            />
            <span className="text-[#f5f0e8]/70 group-hover:text-white transition-colors whitespace-nowrap">
              {d.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

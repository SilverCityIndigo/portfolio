export default function TorontoSkyline() {
  return (
    <svg
      className="skyline"
      viewBox="0 0 1200 280"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4D9FFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#4D9FFF" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2535" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0d1117" stopOpacity="1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Sky wash */}
      <rect x="0" y="0" width="1200" height="280" fill="url(#skyGrad)" />

      {/* ── Background buildings (right cluster) ── */}
      <rect x="820" y="140" width="28" height="140" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="852" y="120" width="22" height="160" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="878" y="150" width="30" height="130" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="912" y="130" width="25" height="150" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="940" y="160" width="35" height="120" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="978" y="110" width="20" height="170" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="1000" y="140" width="40" height="140" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="1044" y="125" width="28" height="155" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="1075" y="155" width="32" height="125" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="1110" y="135" width="24" height="145" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="1138" y="165" width="40" height="115" fill="url(#buildingGrad)" opacity="0.5" />

      {/* ── Background buildings (left cluster) ── */}
      <rect x="50" y="170" width="30" height="110" fill="url(#buildingGrad)" opacity="0.4" />
      <rect x="85" y="145" width="22" height="135" fill="url(#buildingGrad)" opacity="0.4" />
      <rect x="112" y="165" width="28" height="115" fill="url(#buildingGrad)" opacity="0.4" />
      <rect x="144" y="150" width="20" height="130" fill="url(#buildingGrad)" opacity="0.4" />
      <rect x="168" y="170" width="35" height="110" fill="url(#buildingGrad)" opacity="0.4" />

      {/* ── Mid buildings ── */}
      {/* Scotia Plaza */}
      <rect x="310" y="90" width="42" height="190" fill="url(#buildingGrad)" opacity="0.85" />
      <rect x="316" y="82" width="30" height="16" fill="url(#buildingGrad)" opacity="0.85" />
      {/* First Canadian Place */}
      <rect x="368" y="60" width="38" height="220" fill="url(#buildingGrad)" opacity="0.9" />
      <rect x="373" y="52" width="28" height="14" fill="url(#buildingGrad)" opacity="0.9" />
      {/* Commerce Court */}
      <rect x="420" y="105" width="44" height="175" fill="url(#buildingGrad)" opacity="0.8" />
      {/* Bay Adelaide */}
      <rect x="478" y="80" width="36" height="200" fill="url(#buildingGrad)" opacity="0.85" />
      <polygon points="478,80 514,80 496,62" fill="url(#buildingGrad)" opacity="0.85" />
      {/* RBC */}
      <rect x="528" y="98" width="40" height="182" fill="url(#buildingGrad)" opacity="0.8" />
      {/* CIBC Square */}
      <rect x="585" y="72" width="45" height="208" fill="url(#buildingGrad)" opacity="0.9" />
      <rect x="590" y="64" width="35" height="12" fill="url(#buildingGrad)" opacity="0.9" />
      {/* TD Tower */}
      <rect x="645" y="85" width="40" height="195" fill="url(#buildingGrad)" opacity="0.85" />
      {/* Brookfield Place */}
      <rect x="700" y="100" width="48" height="180" fill="url(#buildingGrad)" opacity="0.8" />
      <rect x="705" y="92" width="38" height="12" fill="url(#buildingGrad)" opacity="0.8" />
      {/* Misc right */}
      <rect x="762" y="118" width="34" height="162" fill="url(#buildingGrad)" opacity="0.75" />
      <rect x="800" y="132" width="28" height="148" fill="url(#buildingGrad)" opacity="0.7" />

      {/* ── CN Tower ── */}
      {/* Base legs */}
      <polygon points="218,280 228,180 236,280" fill="url(#buildingGrad)" opacity="1" />
      <polygon points="258,280 268,180 278,280" fill="url(#buildingGrad)" opacity="1" />
      {/* Main shaft */}
      <rect x="231" y="40" width="34" height="240" fill="url(#buildingGrad)" opacity="1" />
      {/* Pod */}
      <rect x="218" y="110" width="60" height="28" rx="4" fill="#131b26" opacity="1" />
      <rect x="222" y="106" width="52" height="8" rx="2" fill="#1a2535" opacity="1" />
      {/* Neck above pod */}
      <rect x="234" y="40" width="28" height="72" fill="url(#buildingGrad)" opacity="1" />
      {/* Antenna */}
      <rect x="246" y="2" width="4" height="42" fill="#1a2535" opacity="0.9" />
      {/* Antenna tip glow */}
      <circle cx="248" cy="4" r="2.5" fill="#4D9FFF" opacity="0.9" filter="url(#glow)" />
      <circle cx="248" cy="4" r="1.2" fill="#a0d4ff" opacity="1" />

      {/* ── Window lights scattered across buildings ── */}
      {[
        [320,100],[325,115],[330,130],[322,145],[328,160],
        [375,70],[380,85],[385,100],[378,118],[382,133],
        [432,118],[437,133],[442,148],[435,163],
        [486,92],[491,107],[484,124],[489,140],
        [536,110],[541,125],[546,140],[538,155],
        [593,82],[598,97],[603,112],[596,128],[601,143],
        [652,97],[657,112],[662,127],[655,143],
        [708,112],[713,127],[718,142],[711,158],
        [768,128],[773,143],[766,158],
      ].map(([x, y], i) => (
        <rect
          key={i}
          x={x} y={y}
          width="3" height="2"
          fill="#4D9FFF"
          opacity={0.15 + (i % 4) * 0.1}
        />
      ))}

      {/* Ground line */}
      <rect x="0" y="278" width="1200" height="2" fill="var(--border)" opacity="0.6" />

      {/* Water reflection shimmer */}
      <rect x="0" y="270" width="1200" height="10" fill="url(#skyGrad)" opacity="0.3" />
    </svg>
  );
}
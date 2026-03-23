export default function TorontoSkyline() {
  return (
    <svg
      className="skyline"
      viewBox="0 0 1200 300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4D9FFF" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#4D9FFF" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2535" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0d1117" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2d40" stopOpacity="1" />
          <stop offset="100%" stopColor="#0d1117" stopOpacity="1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softglow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Sky wash */}
      <rect x="0" y="0" width="1200" height="300" fill="url(#skyGrad)" />

      {/* ─── LEFT CLUSTER ─── */}
      {/* Far left small buildings */}
      <rect x="20" y="220" width="25" height="80" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="48" y="200" width="20" height="100" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="71" y="215" width="28" height="85" fill="url(#buildingGrad)" opacity="0.55" />
      <rect x="102" y="195" width="22" height="105" fill="url(#buildingGrad)" opacity="0.6" />
      <rect x="127" y="210" width="18" height="90" fill="url(#buildingGrad)" opacity="0.55" />

      {/* Left mid buildings */}
      <rect x="148" y="175" width="30" height="125" fill="url(#buildingGrad)" opacity="0.7" />
      <rect x="148" y="165" width="30" height="14" fill="url(#buildingGrad)" opacity="0.7" />
      {/* Antenna */}
      <rect x="161" y="148" width="2" height="18" fill="url(#buildingGrad)" opacity="0.7" />

      <rect x="181" y="155" width="35" height="145" fill="url(#buildingGrad)" opacity="0.75" />
      {/* Stepped top */}
      <rect x="185" y="145" width="27" height="14" fill="url(#buildingGrad)" opacity="0.75" />
      <rect x="189" y="136" width="19" height="12" fill="url(#buildingGrad)" opacity="0.75" />

      <rect x="219" y="170" width="28" height="130" fill="url(#buildingGrad)" opacity="0.7" />
      <rect x="250" y="160" width="22" height="140" fill="url(#buildingGrad)" opacity="0.72" />
      <rect x="250" y="150" width="22" height="14" fill="url(#buildingGrad)" opacity="0.72" />

      <rect x="275" y="140" width="40" height="160" fill="url(#buildingGrad)" opacity="0.8" />
      <rect x="279" y="128" width="32" height="16" fill="url(#buildingGrad)" opacity="0.8" />
      <rect x="283" y="118" width="24" height="14" fill="url(#buildingGrad)" opacity="0.8" />
      {/* Antenna */}
      <rect x="294" y="100" width="2" height="20" fill="url(#buildingGrad)" opacity="0.8" />

      <rect x="318" y="155" width="32" height="145" fill="url(#buildingGrad)" opacity="0.75" />
      <rect x="353" y="165" width="26" height="135" fill="url(#buildingGrad)" opacity="0.72" />
      <rect x="382" y="148" width="38" height="152" fill="url(#buildingGrad)" opacity="0.78" />
      <rect x="386" y="136" width="30" height="16" fill="url(#buildingGrad)" opacity="0.78" />

      <rect x="423" y="130" width="44" height="170" fill="url(#buildingGrad)" opacity="0.82" />
      <rect x="427" y="118" width="36" height="16" fill="url(#buildingGrad)" opacity="0.82" />
      <rect x="431" y="108" width="28" height="13" fill="url(#buildingGrad)" opacity="0.82" />
      {/* Antenna */}
      <rect x="444" y="90" width="2" height="20" fill="url(#buildingGrad)" opacity="0.82" />

      <rect x="470" y="145" width="36" height="155" fill="url(#buildingGrad)" opacity="0.78" />
      <rect x="509" y="125" width="42" height="175" fill="url(#buildingGrad)" opacity="0.85" />
      <rect x="513" y="113" width="34" height="16" fill="url(#buildingGrad)" opacity="0.85" />

      {/* ─── CN TOWER (CENTER) ─── */}
      {/* Slim straight base - slightly tapered */}
      <polygon points="583,300 592,175 608,175 617,300" fill="url(#towerGrad)" opacity="1" />
      {/* Main shaft - slim and tall */}
      <rect x="595" y="45" width="10" height="132" fill="url(#towerGrad)" opacity="1" />
      {/* Pod lower ring */}
      <ellipse cx="600" cy="110" rx="26" ry="8" fill="#0f1c2e" opacity="1" />
      {/* Pod main body */}
      <rect x="576" y="96" width="48" height="18" rx="2" fill="#111e2e" opacity="1" />
      {/* Pod upper rim */}
      <ellipse cx="600" cy="96" rx="22" ry="6" fill="#162030" opacity="1" />
      {/* Pod window lights */}
      {[580,588,596,604,612,620].map((x, i) => (
        <rect key={i} x={x} y="101" width="3" height="4" rx="1" fill="#4D9FFF" opacity="0.28" />
      ))}
      {/* Pod highlight ring */}
      <ellipse cx="600" cy="96" rx="22" ry="4" fill="none" stroke="#4D9FFF" strokeWidth="0.8" opacity="0.35" />
      {/* Shaft above pod - long section below needle */}
      <rect x="596" y="45" width="8" height="53" fill="url(#towerGrad)" opacity="1" />
      {/* Needle - long and sharp */}
      <polygon points="599,45 600,4 601,45" fill="#162030" opacity="1" />
      {/* Needle tip glow */}
      <circle cx="600" cy="5" r="2.5" fill="#4D9FFF" opacity="0.95" filter="url(#glow)" />
      <circle cx="600" cy="5" r="1.2" fill="#a0d4ff" opacity="1" />
      {/* Subtle tower glow */}
      <ellipse cx="600" cy="108" rx="40" ry="15" fill="#4D9FFF" opacity="0.04" filter="url(#softglow)" />

      {/* ─── RIGHT CLUSTER ─── */}
      <rect x="651" y="125" width="42" height="175" fill="url(#buildingGrad)" opacity="0.85" />
      <rect x="655" y="113" width="34" height="16" fill="url(#buildingGrad)" opacity="0.85" />

      <rect x="696" y="145" width="36" height="155" fill="url(#buildingGrad)" opacity="0.78" />
      <rect x="735" y="128" width="40" height="172" fill="url(#buildingGrad)" opacity="0.82" />
      <rect x="739" y="116" width="32" height="16" fill="url(#buildingGrad)" opacity="0.82" />
      <rect x="743" y="106" width="24" height="13" fill="url(#buildingGrad)" opacity="0.82" />
      {/* Antenna */}
      <rect x="754" y="88" width="2" height="20" fill="url(#buildingGrad)" opacity="0.82" />

      <rect x="778" y="148" width="38" height="152" fill="url(#buildingGrad)" opacity="0.78" />
      <rect x="782" y="136" width="30" height="16" fill="url(#buildingGrad)" opacity="0.78" />

      <rect x="819" y="165" width="26" height="135" fill="url(#buildingGrad)" opacity="0.72" />
      <rect x="848" y="155" width="32" height="145" fill="url(#buildingGrad)" opacity="0.75" />

      <rect x="883" y="130" width="44" height="170" fill="url(#buildingGrad)" opacity="0.82" />
      <rect x="887" y="118" width="36" height="16" fill="url(#buildingGrad)" opacity="0.82" />
      <rect x="891" y="108" width="28" height="13" fill="url(#buildingGrad)" opacity="0.82" />
      {/* Antenna */}
      <rect x="904" y="90" width="2" height="20" fill="url(#buildingGrad)" opacity="0.82" />

      <rect x="930" y="148" width="36" height="152" fill="url(#buildingGrad)" opacity="0.75" />
      <rect x="969" y="140" width="35" height="160" fill="url(#buildingGrad)" opacity="0.78" />
      <rect x="973" y="128" width="27" height="16" fill="url(#buildingGrad)" opacity="0.78" />

      <rect x="1007" y="155" width="28" height="145" fill="url(#buildingGrad)" opacity="0.72" />
      <rect x="1038" y="170" width="30" height="130" fill="url(#buildingGrad)" opacity="0.7" />
      <rect x="1038" y="158" width="30" height="16" fill="url(#buildingGrad)" opacity="0.7" />
      {/* Antenna */}
      <rect x="1052" y="142" width="2" height="18" fill="url(#buildingGrad)" opacity="0.7" />

      <rect x="1071" y="175" width="22" height="125" fill="url(#buildingGrad)" opacity="0.65" />
      <rect x="1096" y="190" width="28" height="110" fill="url(#buildingGrad)" opacity="0.6" />
      <rect x="1127" y="205" width="20" height="95" fill="url(#buildingGrad)" opacity="0.55" />
      <rect x="1150" y="215" width="25" height="85" fill="url(#buildingGrad)" opacity="0.5" />
      <rect x="1178" y="225" width="22" height="75" fill="url(#buildingGrad)" opacity="0.45" />

      {/* ─── Window lights ─── */}
      {[
        [158,178],[163,193],[170,208],
        [190,158],[195,173],[188,190],
        [284,143],[290,158],[284,174],
        [432,133],[438,148],[432,164],
        [516,128],[522,143],[516,160],
        [658,128],[664,143],[658,160],
        [742,132],[748,147],[742,164],
        [890,133],[896,148],[890,165],
        [976,143],[982,158],[976,175],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="3" height="2" fill="#4D9FFF" opacity={0.12 + (i % 3) * 0.07} />
      ))}

      {/* Ground line */}
      <rect x="0" y="298" width="1200" height="2" fill="#4D9FFF" opacity="0.08" />
    </svg>
  );
}
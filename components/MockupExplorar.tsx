export default function MockupExplorar() {
  return (
    <div className="ruti-phone">
      <div className="screen">
        <div className="dynamic-island"></div>

        <div className="status-bar">
          <div className="status-left">
            <span>11:41</span>
          </div>
          <div className="status-right">
            <svg width="18" height="10" viewBox="0 0 18 10" fill="currentColor">
              <circle cx="2" cy="5" r="1.3" opacity="0.4" />
              <circle cx="6" cy="5" r="1.3" opacity="0.4" />
              <circle cx="10" cy="5" r="1.3" opacity="0.4" />
              <circle cx="14" cy="5" r="1.3" opacity="0.4" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
              <path d="M8 11.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zM8 6.2c1.5 0 2.9.5 4 1.5l1.1-1.1C11.6 5.2 9.9 4.5 8 4.5s-3.6.7-5.1 2.1L4 7.7C5.1 6.7 6.5 6.2 8 6.2zM8 1.5C10.8 1.5 13.4 2.6 15.3 4.5l1.1-1.1C14.2 1.2 11.2 0 8 0S1.8 1.2-.4 3.4l1.1 1.1C2.6 2.6 5.2 1.5 8 1.5z" />
            </svg>
            <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
              <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" opacity="0.4" />
              <rect x="2" y="2" width="19" height="8" rx="1.5" fill="currentColor" />
              <rect x="23.5" y="4" width="1.5" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
            </svg>
          </div>
        </div>

        <div className="explorar-map">
          <svg viewBox="0 0 400 540" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="540" fill="#eef0eb" />

            <rect x="0" y="0" width="120" height="120" fill="#e5e8d8" opacity="0.55" />
            <rect x="200" y="20" width="200" height="110" fill="#e5e8d8" opacity="0.5" />
            <rect x="20" y="220" width="150" height="170" fill="#e5e8d8" opacity="0.55" />
            <rect x="220" y="240" width="180" height="160" fill="#e5e8d8" opacity="0.5" />
            <rect x="0" y="440" width="180" height="100" fill="#e5e8d8" opacity="0.6" />
            <rect x="240" y="460" width="160" height="80" fill="#e5e8d8" opacity="0.55" />

            <path d="M -10 165 Q 80 155 180 165 T 410 170" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M -10 425 Q 120 415 240 425 T 410 420" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M 90 -10 L 80 550" stroke="#fff" strokeWidth="4" fill="none" opacity="0.9" />
            <path d="M 230 -10 L 220 550" stroke="#fff" strokeWidth="2.5" fill="none" opacity="0.6" />
            <path d="M 320 -10 L 310 550" stroke="#fff" strokeWidth="2.5" fill="none" opacity="0.5" />

            <path d="M 130 110 Q 132 200 145 290 Q 160 380 200 430" stroke="#00B45C" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 200 430 Q 260 432 320 432" stroke="#1f4d8c" strokeWidth="6" fill="none" strokeLinecap="round" />

            <g transform="translate(130,95)">
              <rect x="-22" y="-13" width="44" height="16" rx="6" fill="#00B45C" />
              <text x="0" y="-2" textAnchor="middle" fontFamily="-apple-system, sans-serif" fontSize="9" fontWeight="700" fill="#fff">Inicio</text>
              <circle cx="0" cy="14" r="9" fill="#00B45C" stroke="#fff" strokeWidth="2.5" />
              <circle cx="0" cy="14" r="3" fill="#fff" />
            </g>

            <g transform="translate(75,195)">
              <rect x="-28" y="-14" width="56" height="18" rx="6" fill="#00B45C" />
              <text x="0" y="-1" textAnchor="middle" fontFamily="-apple-system, sans-serif" fontSize="9" fontWeight="700" fill="#fff">Sube aquí</text>
              <g transform="translate(0,22)">
                <circle r="13" fill="#fff" stroke="#00B45C" strokeWidth="3" />
                <path d="M 0 -6 L -5 1 L -2 1 L -2 6 L 2 6 L 2 1 L 5 1 Z" fill="#00B45C" />
              </g>
            </g>

            <g transform="translate(200,415)">
              <rect x="-30" y="-13" width="60" height="16" rx="6" fill="#3949ab" />
              <text x="0" y="-2" textAnchor="middle" fontFamily="-apple-system, sans-serif" fontSize="9" fontWeight="700" fill="#fff">Baja aquí</text>
              <g transform="translate(0,22)">
                <circle r="13" fill="#fff" stroke="#3949ab" strokeWidth="3" />
                <path d="M 0 6 L -5 -1 L -2 -1 L -2 -6 L 2 -6 L 2 -1 L 5 -1 Z" fill="#3949ab" />
              </g>
            </g>

            <g transform="translate(330,395)">
              <rect x="-30" y="-13" width="60" height="16" rx="6" fill="#3949ab" />
              <text x="0" y="-2" textAnchor="middle" fontFamily="-apple-system, sans-serif" fontSize="9" fontWeight="700" fill="#fff">Baja aquí</text>
              <g transform="translate(0,22)">
                <circle r="13" fill="#fff" stroke="#3949ab" strokeWidth="3" />
                <path d="M 0 6 L -5 -1 L -2 -1 L -2 -6 L 2 -6 L 2 -1 L 5 -1 Z" fill="#3949ab" />
              </g>
            </g>

            <g transform="translate(348,440)">
              <rect x="-24" y="-3" width="48" height="16" rx="6" fill="#dc2626" />
              <text x="0" y="8" textAnchor="middle" fontFamily="-apple-system, sans-serif" fontSize="9" fontWeight="700" fill="#fff">Destino</text>
              <circle cx="0" cy="28" r="10" fill="#dc2626" stroke="#fff" strokeWidth="2.5" />
              <circle cx="0" cy="28" r="3" fill="#fff" />
            </g>
          </svg>

          <div className="explorar-back-fab">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>

          <div className="explorar-header-card">
            <div className="explorar-label">EXPLORAR TRAYECTO</div>
            <div className="explorar-route">Terminal Tlaxcalancingo <span className="arrow">→</span> Imperator 5887</div>
          </div>
        </div>

        <div className="explorar-bottom-sheet">
          <div className="sheet-handle"></div>

          <div className="explorar-title">
            Terminal Tlaxcalancingo <span className="arrow">→</span><br />Imperator 5887
          </div>

          <div className="explorar-divider"></div>

          <div className="explorar-stats">
            <div className="explorar-stat">
              <div className="stat-label">DURACIÓN</div>
              <div className="stat-value">31 min</div>
            </div>
            <div className="explorar-stat">
              <div className="stat-label">CAMINATA</div>
              <div className="stat-value">10 min</div>
              <div className="stat-sub">810 m</div>
            </div>
            <div className="explorar-stat">
              <div className="stat-label">EN CAMIÓN</div>
              <div className="stat-value">21 min</div>
              <div className="stat-sub">5.8 km</div>
            </div>
          </div>
        </div>

        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

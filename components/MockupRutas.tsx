export default function MockupRutas() {
  return (
    <div className="ruti-phone">
      <div className="screen">
        <div className="dynamic-island"></div>

        <div className="status-bar">
          <div className="status-left">
            <span>11:40</span>
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

        <div className="rutas-content">
          <div className="rutas-heading">
            <h1>Tus rutas,</h1>
            <h1 className="rutas-heading-soft">de siempre.</h1>
          </div>
          <p className="rutas-sub">Desliza un trayecto para eliminarlo.</p>

          <div className="filter-row">
            <span className="filter-chip active">Todos</span>
            <span className="filter-chip">Diario</span>
            <span className="filter-chip">Mañana</span>
            <span className="filter-chip">Tardes</span>
            <span className="filter-chip">Fin de semana</span>
          </div>

          <div className="saved-route">
            <div className="saved-route-map">
              <svg viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice">
                <rect width="320" height="160" fill="#eaecde" />

                <rect x="0" y="0" width="120" height="55" fill="#dde0d2" opacity="0.5" />
                <rect x="210" y="0" width="110" height="55" fill="#dde0d2" opacity="0.5" />
                <rect x="0" y="115" width="140" height="45" fill="#dde0d2" opacity="0.55" />
                <rect x="220" y="105" width="100" height="55" fill="#dde0d2" opacity="0.5" />

                <path d="M -10 32 Q 80 22 160 30 T 330 38" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" />
                <path d="M -10 92 Q 120 82 200 96 T 330 92" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" />
                <path d="M -10 136 Q 120 130 220 140 T 330 136" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.85" />
                <path d="M 70 -10 L 60 170" stroke="#fff" strokeWidth="3" fill="none" opacity="0.85" />
                <path d="M 175 -10 L 165 170" stroke="#fff" strokeWidth="2.5" fill="none" opacity="0.65" />
                <path d="M 270 -10 L 258 170" stroke="#fff" strokeWidth="2.5" fill="none" opacity="0.65" />

                <path d="M 95 45 Q 100 75 110 100 Q 125 130 158 130" stroke="#00B45C" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M 158 130 Q 200 130 230 110 Q 248 92 245 60" stroke="#1f4d8c" strokeWidth="5" fill="none" strokeLinecap="round" />

                <g transform="translate(95,38)">
                  <rect x="-21" y="-16" width="42" height="16" rx="6" fill="#00B45C" />
                  <text x="0" y="-4" textAnchor="middle" fontSize="9" fontFamily="-apple-system, sans-serif" fontWeight="700" fill="#fff">Inicio</text>
                  <circle cx="0" cy="8" r="8" fill="#00B45C" stroke="#fff" strokeWidth="2.5" />
                </g>

                <g transform="translate(158,130)">
                  <circle cx="0" cy="0" r="10" fill="#fff" stroke="#1f4d8c" strokeWidth="2.5" />
                  <svg x="-6" y="-6" width="12" height="12" viewBox="0 0 24 24" fill="#1f4d8c">
                    <path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </g>

                <g transform="translate(245,52)">
                  <rect x="-24" y="-16" width="48" height="16" rx="6" fill="#dc2626" />
                  <text x="0" y="-4" textAnchor="middle" fontSize="9" fontFamily="-apple-system, sans-serif" fontWeight="700" fill="#fff">Destino</text>
                  <circle cx="0" cy="8" r="8" fill="#dc2626" stroke="#fff" strokeWidth="2.5" />
                </g>
              </svg>

              <div className="saved-route-bus">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#00B45C">
                  <path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>

            <div className="saved-route-body">
              <div className="saved-route-title">
                Terminal Tlaxcalancingo <span className="arrow">→</span><br />Imperator 5887
              </div>
              <div className="saved-route-via">Tlaxcalancingo · El Vergel · Veinte de Noviembre · 1 transbordo</div>

              <div className="saved-route-stats">
                <div className="saved-stat">
                  <div className="stat-label">DURACIÓN</div>
                  <div className="stat-value">31 min</div>
                </div>
                <div className="saved-stat">
                  <div className="stat-label">LÍNEAS</div>
                  <div className="stat-value">2</div>
                  <div className="stat-sub">1 transbordo</div>
                </div>
                <div className="saved-stat">
                  <div className="stat-label">INICIADO</div>
                  <div className="stat-value">1×</div>
                  <div className="stat-sub">hace 20 h</div>
                </div>
              </div>

              <div className="saved-route-actions">
                <button className="action-icon-btn" aria-label="Ver mapa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                    <line x1="8" y1="2" x2="8" y2="18"></line>
                    <line x1="16" y1="6" x2="16" y2="22"></line>
                  </svg>
                </button>
                <button className="action-btn-secondary">Editar</button>
                <button className="action-btn-primary">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                  Iniciar
                </button>
              </div>
            </div>
          </div>

          <div className="capture-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Capturar nuevo trayecto
          </div>
        </div>

        <div className="tab-bar">
          <div className="tab">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </div>
          <div className="tab">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Familia</span>
          </div>
          <div className="tab" style={{ visibility: 'hidden' }}><span>.</span></div>
          <div className="tab active">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
            <span>Planear</span>
            <div className="active-dot"></div>
          </div>
          <div className="tab">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span>Config</span>
          </div>

          <div className="sos-btn">SOS</div>
          <div className="sos-label">Pánico</div>
        </div>

        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

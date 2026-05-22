export default function MockupBuscar() {
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

        <div className="buscar-map">
          <svg viewBox="0 0 400 380" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="380" fill="#eaece0" />

            <rect x="0" y="0" width="140" height="110" fill="#dfe2d3" opacity="0.55" />
            <rect x="200" y="20" width="200" height="100" fill="#dfe2d3" opacity="0.5" />
            <rect x="20" y="190" width="140" height="120" fill="#dfe2d3" opacity="0.55" />
            <rect x="220" y="200" width="180" height="180" fill="#dfe2d3" opacity="0.5" />
            <rect x="0" y="330" width="200" height="50" fill="#dfe2d3" opacity="0.45" />

            <path d="M -20 130 Q 110 115 220 135 T 420 145" stroke="#ffffff" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M 0 240 Q 150 230 280 240 T 420 235" stroke="#ffffff" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M -10 330 Q 120 325 240 335 T 420 330" stroke="#ffffff" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8" />
            <path d="M 150 -10 L 140 390" stroke="#ffffff" strokeWidth="3.5" fill="none" />
            <path d="M 290 -10 L 280 390" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M 50 -10 L 40 390" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.6" />

            <path d="M 80 145 Q 120 150 160 160 Q 210 175 260 195 Q 310 215 345 240" stroke="#ea580c" strokeWidth="6" fill="none" strokeLinecap="round" />
            <g fill="#ea580c">
              <polygon points="155,150 165,160 155,170" opacity="0.9" />
              <polygon points="225,180 235,190 225,200" opacity="0.9" />
              <polygon points="295,210 305,220 295,230" opacity="0.9" />
            </g>

            <text x="40" y="220" fontFamily="-apple-system, sans-serif" fontSize="11" fill="#3a3a3a" opacity="0.62" fontWeight="700">San Bernardino</text>
            <text x="40" y="234" fontFamily="-apple-system, sans-serif" fontSize="11" fill="#3a3a3a" opacity="0.62" fontWeight="700">Tlaxcalancingo</text>
            <text x="218" y="58" fontFamily="-apple-system, sans-serif" fontSize="10" fill="#3a3a3a" opacity="0.55" fontWeight="700">ESTRELLAS DEL SUR</text>

            <g transform="translate(80,145)">
              <circle cx="0" cy="0" r="11" fill="#00B45C" stroke="#fff" strokeWidth="3" />
            </g>
            <g transform="translate(115,155)">
              <circle cx="0" cy="0" r="11" fill="#fff" stroke="#1f4d8c" strokeWidth="2.8" />
              <svg x="-6" y="-6" width="12" height="12" viewBox="0 0 24 24" fill="#1f4d8c">
                <path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10z" />
              </svg>
            </g>
            <g transform="translate(140,165)">
              <circle cx="0" cy="0" r="11" fill="#fff" stroke="#ea580c" strokeWidth="2.8" />
              <svg x="-6" y="-6" width="12" height="12" viewBox="0 0 24 24" fill="#ea580c">
                <path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10z" />
              </svg>
            </g>
            <g transform="translate(330,225)">
              <circle cx="0" cy="0" r="11" fill="#fff" stroke="#ea580c" strokeWidth="2.8" />
              <svg x="-6" y="-6" width="12" height="12" viewBox="0 0 24 24" fill="#ea580c">
                <path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10z" />
              </svg>
            </g>
            <g transform="translate(355,250)">
              <circle cx="0" cy="0" r="12" fill="#dc2626" stroke="#fff" strokeWidth="3" />
            </g>
          </svg>

          <div className="map-fab-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
          <div className="map-fab-locate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="8" />
              <line x1="12" y1="1" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="23" />
              <line x1="1" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="23" y2="12" />
            </svg>
            <div className="locate-dot"></div>
          </div>
        </div>

        <div className="buscar-sheet">
          <div className="sheet-handle"></div>

          <div className="sheet-header">
            <div className="sheet-title">5 rutas encontradas</div>
            <div className="sort-btn">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="10" y1="18" x2="14" y2="18" />
              </svg>
              Ordenar
            </div>
          </div>

          <div className="route-option">
            <div className="route-option-head">
              <div className="route-tags">
                <span className="tag tag-green">Recomendada</span>
                <span className="tag tag-soft">Sin transbordos</span>
              </div>
              <div className="route-time">55 min</div>
            </div>
            <div className="route-steps">
              <span className="step-walk">
                <svg width="9" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" /></svg>
                9 min
              </span>
              <span className="step-arrow">›</span>
              <span className="step-bus">Tlaxcal... 20 min</span>
              <span className="step-arrow">›</span>
              <span className="step-walk">
                <svg width="9" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" /></svg>
                16 min
              </span>
            </div>
            <div className="route-meta">Sale 17:40 · Directo · $10 aprox</div>
          </div>

          <div className="route-option selected">
            <div className="route-option-head">
              <div className="route-tags">
                <span className="tag tag-orange">Más rápida</span>
                <span className="tag tag-soft">Menos caminata</span>
              </div>
              <div className="route-time">46 min</div>
            </div>
            <div className="route-steps">
              <span className="step-walk">
                <svg width="9" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" /></svg>
                2 min
              </span>
              <span className="step-arrow">›</span>
              <span className="step-bus">L1 4 min</span>
              <span className="step-arrow">›</span>
              <span className="step-walk">
                <svg width="9" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg>
                2 min
              </span>
              <span className="step-arrow">›</span>
              <span className="step-bus step-bus-orange">Suburba... 8 min</span>
            </div>
            <div className="route-meta">Sale 17:40 · 1 transbordo · $20 aprox</div>
          </div>

          <div className="route-option">
            <div className="route-option-head">
              <div className="route-tags">
                <span className="tag tag-soft">Sin transbordos</span>
              </div>
              <div className="route-time">60 min</div>
            </div>
            <div className="route-steps">
              <span className="step-walk">
                <svg width="9" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg>
                9 min
              </span>
              <span className="step-arrow">›</span>
              <span className="step-bus">Malacat... 20 min</span>
              <span className="step-arrow">›</span>
              <span className="step-walk">
                <svg width="9" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg>
                21 min
              </span>
            </div>
            <div className="route-meta">Sale 17:40 · Directo · $10 aprox</div>
          </div>

          <div className="select-route-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            Seleccionar ruta
          </div>
        </div>

        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

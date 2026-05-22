export default function MockupApp() {
  return (
    <div className="ruti-phone">
      <div className="screen">
          
          <div className="dynamic-island"></div>

          <div className="status-bar">
            <div className="status-left">
              <span>4:11</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                <line x1="2" y1="2" x2="22" y2="22" />
              </svg>
            </div>
            <div className="status-right">
              <svg width="18" height="10" viewBox="0 0 18 10" fill="currentColor">
                <circle cx="2" cy="5" r="1.3" opacity="0.4" />
                <circle cx="6" cy="5" r="1.3" opacity="0.4" />
                <circle cx="10" cy="5" r="1.3" opacity="0.4" />
                <circle cx="14" cy="5" r="1.3" opacity="0.4" />
              </svg>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" style={{ transform: 'translate(0.3px)' }}>
                <path d="M8 11.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zM8 6.2c1.5 0 2.9.5 4 1.5l1.1-1.1C11.6 5.2 9.9 4.5 8 4.5s-3.6.7-5.1 2.1L4 7.7C5.1 6.7 6.5 6.2 8 6.2zM8 1.5C10.8 1.5 13.4 2.6 15.3 4.5l1.1-1.1C14.2 1.2 11.2 0 8 0S1.8 1.2-.4 3.4l1.1 1.1C2.6 2.6 5.2 1.5 8 1.5z" />
              </svg>
              <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
                <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" opacity="0.4" />
                <rect x="2" y="2" width="19" height="8" rx="1.5" fill="currentColor" />
                <rect x="23.5" y="4" width="1.5" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
          </div>

          <div className="screen-content">
            <div className="header">
              <div className="greeting">
                <h1>Hola, Angel</h1>
                <div className="meta">Puebla · 24°C</div>
              </div>
              <div className="bell">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </div>
            </div>

            <div className="map">
              <svg className="map-svg" viewBox="0 0 400 210" preserveAspectRatio="xMidYMid slice">
                <rect x="0" y="0" width="400" height="210" fill="#e8e7e0" />
                <rect x="30" y="20" width="90" height="60" fill="#eeece3" opacity="0.8" />
                <rect x="250" y="30" width="110" height="70" fill="#eeece3" opacity="0.6" />
                <rect x="40" y="130" width="120" height="70" fill="#eeece3" opacity="0.7" />
                <rect x="230" y="140" width="140" height="60" fill="#eeece3" opacity="0.6" />

                <path d="M -20 60 Q 150 50 220 80 T 420 90" stroke="#ffffff" strokeWidth="10" fill="none" strokeLinecap="round" />
                <path d="M 0 160 Q 120 155 250 165 T 420 155" stroke="#ffffff" strokeWidth="8" fill="none" strokeLinecap="round" />
                <path d="M 180 -10 L 170 220" stroke="#ffffff" strokeWidth="3" fill="none" />
                <path d="M 320 -10 L 300 220" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.8" />
                <path d="M 80 -10 Q 90 100 70 220" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.8" />

                <text x="40" y="55" fontFamily="-apple-system, sans-serif" fontSize="9" fill="#555" opacity="0.75" transform="rotate(-8 40 55)">Cam. Real A San Andrés</text>
                <text x="230" y="90" fontFamily="-apple-system, sans-serif" fontSize="8" fill="#555" opacity="0.7" transform="rotate(6 230 90)">Carr Izúcar de Matamo</text>
                <text x="40" y="120" fontFamily="-apple-system, sans-serif" fontSize="9" fill="#444" opacity="0.65" fontWeight="600">SAN BERNARDINO</text>
                <text x="40" y="132" fontFamily="-apple-system, sans-serif" fontSize="9" fill="#444" opacity="0.65" fontWeight="600">LA TRINIDAD</text>
                <text x="270" y="175" fontFamily="-apple-system, sans-serif" fontSize="8" fill="#444" opacity="0.6" fontWeight="600">RINCONADA</text>
                <text x="280" y="186" fontFamily="-apple-system, sans-serif" fontSize="8" fill="#444" opacity="0.6" fontWeight="600">SANTA FE</text>
                <text x="265" y="35" fontFamily="-apple-system, sans-serif" fontSize="8" fill="#444" opacity="0.6" fontWeight="600">VISTAS DEL</text>
                <text x="275" y="45" fontFamily="-apple-system, sans-serif" fontSize="8" fill="#444" opacity="0.6" fontWeight="600">ÁNGEL</text>
              </svg>

              <div className="user-dot"></div>

              <div className="map-controls">
                <div className="map-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8" strokeLinejoin="round">
                    <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
                    <polyline points="2 15.5 12 22 22 15.5" />
                  </svg>
                </div>
                <div className="map-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="2" fill="#16a34a" />
                    <line x1="12" y1="1" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="23" />
                    <line x1="1" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="23" y2="12" />
                  </svg>
                </div>
              </div>

              <div className="safe-zone-pill">Zona segura</div>
            </div>

            <div className="search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" placeholder="¿A dónde vamos?" readOnly />
            </div>

            <button className="add-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Agregar
            </button>

            <div className="route-card">
              <div className="avatar">M</div>
              <div className="route-info">
                <div className="title">María va a casa</div>
                <div className="subtitle">Ruta 81 · llega en 12 min</div>
              </div>
              <svg className="chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            <div className="section-label">Cerca de ti</div>
            <div className="nearby-row">
              <div className="place-card">
                <div className="place-icon cafe">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                </div>
                <div className="place-info">
                  <div className="name">Café Punta</div>
                  <div className="detail">2x1 · 120 m</div>
                </div>
              </div>
              <div className="place-card">
                <div className="place-icon oxxo">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="place-info">
                  <div className="name">OXXO</div>
                  <div className="detail safe">Punto seguro</div>
                </div>
              </div>
            </div>

          </div>

          <div className="tab-bar">
            <div className="tab active">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3l9 8h-2.5v9H14v-6h-4v6H5.5v-9H3l9-8z" />
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
            <div className="tab" style={{ visibility: 'hidden' }}>
              <span>.</span><span>.</span>
            </div>
            <div className="tab">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
              <span>Planear</span>
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

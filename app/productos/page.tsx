import Link from 'next/link';
import Image from 'next/image';
import MockupApp from '../../components/MockupApp';
import './page.css';

export default function Productos() {
  return (
    <main className="content">
      <div className="product-featured">
        <div>
          <div className="product-header">
            <div className="product-logo">
              <Image src="/ruti_logo.svg" alt="Ruti Logo" width={32} height={32} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>
            <h2 className="product-title">RuTi App</h2>
          </div>

          <p className="product-intro">
            RuTi es la app de transporte público que te mueve con confianza. Olvídate de adivinar qué camión tomar o preocuparte por tu familia mientras viaja. Planea, viaja y llega seguro.
          </p>

          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                  <line x1="9" y1="3" x2="9" y2="18"></line>
                  <line x1="15" y1="6" x2="15" y2="21"></line>
                </svg>
              </div>
              <div className="feature-title">Rutas Inteligentes</div>
              <div className="feature-desc">Encuentra la mejor ruta con tiempos reales, costos y autocompletado de tus lugares frecuentes.</div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div className="feature-title">Botón SOS</div>
              <div className="feature-desc">Botón de pánico accesible al instante para actuar rápidamente en caso de cualquier emergencia.</div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="feature-title">Sistema Familiar</div>
              <div className="feature-desc">Monitorea el viaje de tus seres queridos y recibe notificaciones cuando llegan a su destino.</div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="feature-title">Confianza Total</div>
              <div className="feature-desc">Transporte público más fácil y seguro, reduciendo la incertidumbre diaria de tus trayectos.</div>
            </div>
          </div>

          <Link href="/#contacto" className="btn-primary">Más información</Link>
        </div>

        <div className="preview-phones">
          <MockupApp />
        </div>
      </div>
    </main>
  );
}

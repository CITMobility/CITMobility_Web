import dynamic from 'next/dynamic';
import Image from 'next/image';
import './page.css';

// Importaciones dinámicas sin SSR para componentes con canvas/video
// Evita el "hydration mismatch" que causa pantalla blanca en Vercel
const HeroCanvas     = dynamic(() => import('../components/HeroCanvas'),      { ssr: false });
const ScrollAnimations = dynamic(() => import('../components/ScrollAnimations'), { ssr: false });
const RobotMascot    = dynamic(() => import('../components/RobotMascot'),      { ssr: false });
const RutaAnimada    = dynamic(() => import('../components/RutaAnimada'),      { ssr: false });

export default function Home() {
  return (
    <main>
      <ScrollAnimations />

      {/* ── HERO SECTION ──────────────────────────────────────────── */}
      <section className="main-wrapper">
        <div className="hero-content reveal-left">
          <h1 className="hero-title" data-text="CIT Mobility" style={{ fontSize: 'clamp(50px, 8vw, 130px)', letterSpacing: '-4px' }}>
            CIT <span className="accent">Mobility</span>
          </h1>
          <p className="hero-slogan reveal" data-delay="150" style={{ fontSize: '24px', fontWeight: 400 }}>
            Seguridad inteligente parada a parada
          </p>
        </div>

        <div className="hero-canvas-container reveal-right">
          <HeroCanvas />
        </div>

        <div className="stats-container reveal" data-delay="200">
          <div className="stats">
            <div className="stat-item">
              <div className="stat-label" style={{ marginTop: 0, marginBottom: '6px' }}>MONITOREO EN</div>
              <div className="stat-value" style={{ fontSize: '24px' }}>Tiempo real</div>
            </div>
            <div className="stat-item">
              <div className="stat-label" style={{ marginTop: 0, marginBottom: '6px' }}>VIAJA CON</div>
              <div className="stat-value" style={{ fontSize: '24px' }}>Seguridad</div>
            </div>
            <div className="stat-item">
              <div className="stat-label" style={{ marginTop: 0, marginBottom: '6px' }}>GESTIÓN DE RUTAS CON</div>
              <div className="stat-value" style={{ fontSize: '24px' }}>Algoritmos IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Robot anclado al primer pantallazo (100vh) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', pointerEvents: 'none', zIndex: 100, overflow: 'hidden' }}>
        <RobotMascot />
      </div>

      {/* ── DEGRADADO: HERO → IDENTIDAD ─────────────────────────── */}
      <div style={{
        height: '350px',
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #d4d8d5 15%, #9aa39e 30%, #4a5652 50%, #1a2220 70%, #0d1412 85%, #07090A 100%)',
        flexShrink: 0,
      }} aria-hidden="true" />

      {/* ── NOSOTROS: Ruta Animada ─────────────────────────────────── */}
      <RutaAnimada />

      {/* ── DEGRADADO: IDENTIDAD → EQUIPO (blanco) ─────────────── */}
      <div style={{
        height: '350px',
        background: 'linear-gradient(to bottom, #07090A 0%, #0d1412 15%, #1a2220 30%, #4a5652 50%, #9aa39e 70%, #d4d8d5 85%, #FFFFFF 100%)',
        flexShrink: 0,
      }} aria-hidden="true" />

      {/* ── NOSOTROS / EQUIPO SECTION ──────────────────────────────── */}
      <section id="nosotros" className="equipo-section">
        <div className="equipo-inner">
          <div className="equipo-header reveal">
            <span className="equipo-eyebrow">Nuestro Equipo</span>
            <h2 className="equipo-headline">
              Conoce a las <em>personas</em> detrás de la innovación
            </h2>
          </div>

          <div className="equipo-grid">
            {/* Miembro 1 */}
            <div className="equipo-card reveal" data-delay="0">
              <div className="equipo-photo-wrap">
                <Image src="/damiannosotros.jpg" alt="Damián" fill className="equipo-photo" />
              </div>
              <span className="equipo-role">CEO &amp; Fundador</span>
              <h3 className="equipo-name">Damián Peralta</h3>
              <p className="equipo-bio">Visionario con experiencia liderando equipos innovadores y transformando ideas en soluciones de movilidad inteligente.</p>
            </div>

            {/* Miembro 2 */}
            <div className="equipo-card reveal" data-delay="80">
              <div className="equipo-photo-wrap">
                <Image src="/angelnosotros.jpg" alt="Ángel" fill className="equipo-photo" />
              </div>
              <span className="equipo-role">Director de Tecnología</span>
              <h3 className="equipo-name">Ángel</h3>
              <p className="equipo-bio">Experto en arquitectura de software y desarrollo ágil, construyendo soluciones escalables y robustas para el transporte.</p>
            </div>

            {/* Miembro 3 — placeholder hasta foto */}
            <div className="equipo-card reveal" data-delay="160">
              <div className="equipo-photo-wrap">
                <Image src="/damiannosotros.jpg" alt="Miembro" fill className="equipo-photo" />
              </div>
              <span className="equipo-role">Directora Creativa</span>
              <h3 className="equipo-name">Por Confirmar</h3>
              <p className="equipo-bio">Diseñadora apasionada por crear experiencias visuales memorables que conectan emocionalmente con los usuarios.</p>
            </div>

            {/* Miembro 4 — placeholder hasta foto */}
            <div className="equipo-card reveal" data-delay="240">
              <div className="equipo-photo-wrap">
                <Image src="/angelnosotros.jpg" alt="Miembro" fill className="equipo-photo" />
              </div>
              <span className="equipo-role">Directora de Marketing</span>
              <h3 className="equipo-name">Por Confirmar</h3>
              <p className="equipo-bio">Estratega digital con enfoque centrado en datos para impulsar el crecimiento y la presencia de marca.</p>
            </div>

            {/* Miembro 5 — placeholder hasta foto */}
            <div className="equipo-card reveal" data-delay="320">
              <div className="equipo-photo-wrap">
                <Image src="/damiannosotros.jpg" alt="Miembro" fill className="equipo-photo" />
              </div>
              <span className="equipo-role">Director de Operaciones</span>
              <h3 className="equipo-name">Por Confirmar</h3>
              <p className="equipo-bio">Optimizador nato que asegura la eficiencia operativa y el cumplimiento de objetivos estratégicos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEGRADADO: EQUIPO → CONTACTO ─────────────────────────── */}
      {/* ── DEGRADADO: EQUIPO → CONTACTO ─────────────────────────── */}
      <div style={{
        height: '350px',
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #d4d8d5 15%, #9aa39e 30%, #4a5652 50%, #1a2220 70%, #0d1412 85%, #07090A 100%)',
        flexShrink: 0,
      }} aria-hidden="true" />

      {/* ── CONTACTO SECTION ──────────────────────────────────────── */}
      <section id="contacto" className="contacto-section">
        <div className="contacto-wrapper">
          <div className="contacto-content reveal-left">
            <div className="contacto-tag">Contáctanos</div>
            <h2 className="contacto-title">¿Listo para transformar tu ciudad?</h2>
            <p className="contacto-desc">Escríbenos y un asesor CIT Mobility te contactará para mostrarte cómo podemos modernizar el transporte de tu municipio.</p>

            <div className="contacto-info">
              <div className="info-item reveal" data-delay="100">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span className="info-text">citmobility@gmail.com</span>
              </div>
              <div className="info-item reveal" data-delay="200">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="info-text">Puebla, Puebla</span>
              </div>
            </div>
          </div>

          <div className="contacto-visual reveal-right" data-delay="200">
            <div className="contacto-visual-circle">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

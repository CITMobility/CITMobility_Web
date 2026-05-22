import Image from 'next/image';
import CTASection from '../../components/CTASection';
import './page.css';

const SCREENS = [
  {
    title: 'Tus rutas favoritas',
    subtitle: 'Siempre a la mano',
    desc: 'Guarda los trayectos que usas cada día. Filtra por horario, revisa duración y transbordos, y arranca con un solo click.',
    image: '/mockup-02.webp',
    alt: 'Pantalla de rutas guardadas en RuTi',
  },
  {
    title: 'Compara y elige',
    subtitle: 'La mejor ruta para cada momento',
    desc: 'RuTi te muestra todas las opciones. Tiempo, costo y transbordos a simple vista. Tu elijes cuando llegar',
    image: '/mockup-03.webp',
    alt: 'Pantalla de resultados de búsqueda de rutas en RuTi',
  },
  {
    title: 'Guía paso a paso',
    subtitle: 'Nunca pierdes la parada',
    desc: 'Instrucciones en tiempo real durante el viaje: cuándo abordar, cuántas paradas faltan y dónde bajar. Tu camión, sin sustos.',
    image: '/mockup-04.webp',
    alt: 'Pantalla de navegación activa en RuTi',
  },
  {
    title: 'Explora antes de salir',
    subtitle: 'Conoce cada metro del recorrido',
    desc: 'Visualiza el trayecto completo: puntos de subida y bajada, segmentos a pie y en camión. Llegas preparado, sin sorpresas.',
    image: '/mockup-05.webp',
    alt: 'Pantalla de exploración de trayecto en RuTi',
  },
];

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
              <div className="feature-title">Rutas Inteligentes</div>
              <div className="feature-desc">Encuentra la mejor ruta con tiempos reales, costos y autocompletado de tus lugares frecuentes.</div>
            </div>

            <div className="feature-item">
              <div className="feature-title">Botón SOS</div>
              <div className="feature-desc">Botón de pánico accesible al instante para actuar rápidamente en caso de cualquier emergencia.</div>
            </div>

            <div className="feature-item">
              <div className="feature-title">Sistema Familiar</div>
              <div className="feature-desc">Monitorea el viaje de tus seres queridos y recibe notificaciones cuando llegan a su destino.</div>
            </div>

            <div className="feature-item">
              <div className="feature-title">Confianza Total</div>
              <div className="feature-desc">Transporte público más fácil y seguro, reduciendo la incertidumbre diaria de tus trayectos.</div>
            </div>
          </div>

        </div>

        <div className="preview-phones">
          <div className="mockup-shell hero-mockup">
            <Image
              src="/mockup-02.webp"
              alt="Pantalla de rutas guardadas en RuTi"
              width={642}
              height={1280}
              className="mockup-image"
              priority
            />
          </div>
        </div>
      </div>

      <section className="screens-showcase">
        <div className="showcase-head">
          <h2 className="showcase-title">
            Cada pantalla, <em>un propósito.</em>
          </h2>
          <p className="showcase-lead">
            Desde planear tu trayecto hasta llegar a destino. RuTi acompaña cada paso del viaje.
          </p>
        </div>

        <div className="screens-grid">
          {SCREENS.map((s, i) => (
            <article key={i} className="screen-card">
              <div className="screen-frame">
                <div className="mockup-shell">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={642}
                    height={1280}
                    className="mockup-image"
                  />
                </div>
              </div>
              <div className="screen-meta">
                <h3 className="screen-title">{s.title}</h3>
                <div className="screen-subtitle">{s.subtitle}</div>
                <p className="screen-desc">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}

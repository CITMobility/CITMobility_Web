'use client';
import { useEffect, useRef, useState } from 'react';
import './RutaAnimada.css';

const ROUTE_STOPS = [
  {
    label: 'Misión',
    text: 'Transformar cada unidad de transporte en un nodo de seguridad activa. Reducimos riesgos y aseguramos respuesta inmediata ante cualquier eventualidad en el trayecto.',
  },
  {
    label: 'Visión',
    text: 'Ciudades donde la información en tiempo real optimiza cada recurso. Un futuro donde la seguridad y la movilidad inteligente son el estándar, no el lujo.',
  },
];

const FEATURES = [
  {
    num: '01',
    label: 'Monitoreo en tiempo real',
    text: 'Seguimiento GPS al segundo. Siempre sabes dónde está cada unidad de tu flota.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
  },
  {
    num: '02',
    label: 'Seguridad inteligente',
    text: 'Alertas automáticas, validación de operadores y reportes de incidencias desde la app.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: '03',
    label: 'Datos para operadores',
    text: 'Panel de control con métricas de rendimiento, rutas y ocupación de unidades.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 17.5h7M17.5 14v7" />
      </svg>
    ),
  },
  {
    num: '04',
    label: 'Ruti App',
    text: 'El puente entre usuario y nube en tiempo real.',
    action: {
      label: 'Más detalles',
      href: '/productos',
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
];

// SVG path: 2 paradas en viewBox 0 0 40 500
// Misión: Y=80, Visión: Y=380
const PATH_D = 'M20,60 C40,150 0,220 20,300 C40,350 5,360 20,420';
const STOP_Y = [60, 300];
const SVG_H = 480;

export default function RutaAnimada() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pinsRef = useRef<(SVGGElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    const section = sectionRef.current;
    if (!path || !section) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    const activated = new Array(STOP_Y.length).fill(false);
    let maxProgress = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const startY = windowH * 0.95;
      const endY = windowH * 0.05;
      const raw = (startY - rect.top) / (startY - endY);
      const progress = Math.max(0, Math.min(1, raw));

      if (progress > maxProgress) maxProgress = progress;

      path.style.strokeDashoffset = `${totalLength * (1 - maxProgress)}`;

      STOP_Y.forEach((y, i) => {
        if (activated[i]) return;
        const stopProgress = (y - 20) / (SVG_H - 20);
        if (maxProgress >= stopProgress) {
          activated[i] = true;
          const pin = pinsRef.current[i];
          if (pin) { pin.style.opacity = '1'; pin.style.transform = 'scale(1)'; }
          const card = cardsRef.current[i];
          if (card) { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }
        }
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <section id="nosotros" className="ruta-section" ref={sectionRef}>

      {/* ── Parte superior: Headline + Ruta ── */}
      <div className="ruta-container">

        {/* Left: headline */}
        <div className="ruta-left">
          <span className="ruta-eyebrow">Nuestra identidad</span>
          <h2 className="ruta-headline">
            Hacemos que el<br />transporte<br />público{' '}
            <em>funcione<br />mejor</em>
          </h2>
          <p className="ruta-sub">
            Somos la Célula de Inteligencia de Transporte, un equipo dedicado a revolucionar la movilidad pública mediante tecnología y seguridad
          </p>
        </div>

        {/* Right: SVG + Misión & Visión cards en fila vertical */}
        <div className="ruta-right">

          {/* SVG path vertical */}
          <div className="ruta-svg-wrap" aria-hidden="true">
            <svg viewBox="0 0 40 480" className="ruta-svg" preserveAspectRatio="xMidYMid meet">
              <path d={PATH_D} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" strokeLinecap="round" />
              <path
                ref={pathRef}
                d={PATH_D}
                fill="none"
                stroke="#00D46A"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 5px rgba(0,212,106,0.7))' }}
              />
              {STOP_Y.map((y, i) => (
                <g
                  key={i}
                  ref={(el) => { pinsRef.current[i] = el; }}
                  style={{
                    opacity: 0,
                    transform: 'scale(0)',
                    transformOrigin: `20px ${y}px`,
                    transition: 'opacity 0.35s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  <circle cx="20" cy={y} r="8" fill="rgba(0,212,106,0.15)" stroke="rgba(0,212,106,0.3)" strokeWidth="1" />
                  <circle cx="20" cy={y} r="3.5" fill="#00D46A" />
                </g>
              ))}
            </svg>
          </div>

          {/* Cards en fila vertical con espacio igual al SVG */}
          <div className="ruta-cards">
            {ROUTE_STOPS.map((stop, i) => (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="ruta-card"
                style={{
                  opacity: 0,
                  transform: 'translateY(16px)',
                  transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s`,
                }}
              >
                <strong className="ruta-card-title">{stop.label}</strong>
                <p className="ruta-card-text">{stop.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Parte inferior: Feature cards interactivas ── */}
      <div className="ruta-features-wrap">
        <div className="ruta-features">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`ruta-feat-card ${activeFeature === i ? 'ruta-feat-card--active' : ''}`}
              onMouseEnter={() => setActiveFeature(i)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="ruta-feat-icon">{f.icon}</div>
              <span className="ruta-feat-num">{f.num}</span>
              <strong className="ruta-feat-title">{f.label}</strong>
              {f.text && <p className="ruta-feat-text">{f.text}</p>}
              {f.action && (
                <a href={f.action.href} className="ruta-feat-action">
                  {f.action.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              )}
              <div className="ruta-feat-glow" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

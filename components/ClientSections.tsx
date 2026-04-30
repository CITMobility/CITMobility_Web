'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// ssr: false solo puede usarse en Client Components (Next.js App Router)
const HeroCanvas      = dynamic(() => import('./HeroCanvas'),       { ssr: false });
const ScrollAnimations = dynamic(() => import('./ScrollAnimations'), { ssr: false });
const RobotMascot     = dynamic(() => import('./RobotMascot'),      { ssr: false });
const RutaAnimada     = dynamic(() => import('./RutaAnimada'),      { ssr: false });

interface TeamMember {
  src: string;
  alt: string;
  role: string;
  name: string;
  bio: string;
  delay: number;
}

const TEAM: TeamMember[] = [
  { src: '/damiannosotros.jpg', alt: 'Damián', role: 'CEO & Fundador',           name: 'Damián Peralta',  bio: 'Visionario con experiencia liderando equipos innovadores y transformando ideas en soluciones de movilidad inteligente.', delay: 0 },
  { src: '/angelnosotros.jpg',  alt: 'Ángel',  role: 'Director de Tecnología',   name: 'Ángel',           bio: 'Experto en arquitectura de software y desarrollo ágil, construyendo soluciones escalables y robustas para el transporte.', delay: 80 },
  { src: '/damiannosotros.jpg', alt: 'Miembro', role: 'Directora Creativa',      name: 'Por Confirmar',   bio: 'Diseñadora apasionada por crear experiencias visuales memorables que conectan emocionalmente con los usuarios.', delay: 160 },
  { src: '/angelnosotros.jpg',  alt: 'Miembro', role: 'Directora de Marketing',  name: 'Por Confirmar',   bio: 'Estratega digital con enfoque centrado en datos para impulsar el crecimiento y la presencia de marca.', delay: 240 },
  { src: '/damiannosotros.jpg', alt: 'Miembro', role: 'Director de Operaciones', name: 'Por Confirmar',   bio: 'Optimizador nato que asegura la eficiencia operativa y el cumplimiento de objetivos estratégicos.', delay: 320 },
];

export function ClientHero() {
  return (
    <>
      <ScrollAnimations />
      <div className="hero-canvas-container reveal-right">
        <HeroCanvas />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', pointerEvents: 'none', zIndex: 100, overflow: 'hidden' }}>
        <RobotMascot />
      </div>
    </>
  );
}

export function ClientRutaAnimada() {
  return <RutaAnimada />;
}

export function ClientEquipo() {
  return (
    <section id="nosotros" className="equipo-section">
      <div className="equipo-inner">
        <div className="equipo-header reveal">
          <span className="equipo-eyebrow">Nuestro Equipo</span>
          <h2 className="equipo-headline">
            Conoce a las <em>personas</em> detrás de la innovación
          </h2>
        </div>
        <div className="equipo-grid">
          {TEAM.map((m, i) => (
            <div key={i} className="equipo-card reveal" data-delay={String(m.delay)}>
              <div className="equipo-photo-wrap">
                <Image src={m.src} alt={m.alt} fill sizes="(max-width: 768px) 50vw, 20vw" className="equipo-photo" />
              </div>
              <span className="equipo-role">{m.role}</span>
              <h3 className="equipo-name">{m.name}</h3>
              <p className="equipo-bio">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

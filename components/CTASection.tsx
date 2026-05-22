'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const PROXIMITY_PX = 30; // screen-space radius around marker center

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const dot = section.querySelector<SVGCircleElement>('.route-traveler');
    const markers = Array.from(
      section.querySelectorAll<SVGGElement>('.marker')
    );
    if (!dot || markers.length === 0) return;

    // getBoundingClientRect is expensive — 15fps is enough for proximity detection
    const FRAME_MS = 1000 / 15;
    let rafId = 0;
    let lastCheck = 0;

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);
      if (now - lastCheck < FRAME_MS) return;
      lastCheck = now;

      const dotRect = dot.getBoundingClientRect();
      // Before SMIL begins (dot opacity 0) the rect may collapse to 0×0.
      if (dotRect.width === 0 || dotRect.height === 0) {
        for (const m of markers) m.classList.remove('marker-active');
        return;
      }

      const dotCx = dotRect.left + dotRect.width / 2;
      const dotCy = dotRect.top + dotRect.height / 2;

      for (const marker of markers) {
        const r = marker.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dist = Math.hypot(dotCx - cx, dotCy - cy);
        marker.classList.toggle('marker-active', dist < PROXIMITY_PX);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section ref={sectionRef} className="cta-section">
      <div className="cta-content">
        <span className="cta-eyebrow">Listos para movernos contigo</span>
        <h2 className="cta-title">
          Súbete a<br />
          <em>RuTi</em>
        </h2>
        <Link href="/#contacto" className="cta-button">
          Más información
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>

      <div className="cta-illustration" aria-hidden="true">
        <svg viewBox="0 0 420 500" className="cta-route">
          <defs>
            <radialGradient id="ctaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D46A" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#00D46A" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B45C" />
              <stop offset="100%" stopColor="#00D46A" />
            </linearGradient>
            <path
              id="ctaPath"
              d="M 300 70 C 380 160, 360 240, 305 290 C 250 335, 200 370, 130 430"
            />
          </defs>

          <ellipse cx="220" cy="260" rx="200" ry="220" fill="url(#ctaGlow)" />

          {/* Path shadow */}
          <use
            href="#ctaPath"
            stroke="#00B45C"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
            opacity="0.08"
          />

          {/* Main path with draw animation */}
          <use
            href="#ctaPath"
            stroke="url(#routeGrad)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            pathLength="1"
            className="route-line"
          />

          {/* INICIO marker — proximity-driven highlight */}
          <g transform="translate(300,70)">
            <g className="marker marker-inicio">
              <circle r="13" fill="#00B45C" stroke="#fff" strokeWidth="3.5" />
              <circle r="4" fill="#fff" />
            </g>
          </g>
          <text
            x="322"
            y="76"
            fontFamily="DM Sans, sans-serif"
            fontSize="12"
            fontWeight="700"
            letterSpacing="1.4"
            fill="#0a0a0a"
          >
            INICIO
          </text>

          {/* TRANSBORDO marker */}
          <g transform="translate(305,290)">
            <g className="marker marker-transbordo">
              <circle r="11" fill="#ffffff" stroke="#00B45C" strokeWidth="3.5" />
              <circle r="3.5" fill="#00B45C" />
            </g>
          </g>
          <text
            x="325"
            y="296"
            fontFamily="DM Sans, sans-serif"
            fontSize="12"
            fontWeight="700"
            letterSpacing="1.4"
            fill="#3E5240"
          >
            TRANSBORDO
          </text>

          {/* DESTINO marker */}
          <g transform="translate(130,430)">
            <g className="marker marker-destino">
              <circle r="13" fill="#00B45C" stroke="#fff" strokeWidth="3.5" />
              <circle r="4" fill="#fff" />
            </g>
          </g>
          <text
            x="152"
            y="436"
            fontFamily="DM Sans, sans-serif"
            fontSize="12"
            fontWeight="700"
            letterSpacing="1.4"
            fill="#0a0a0a"
          >
            DESTINO
          </text>

          {/* Moving traveler dot */}
          <circle
            r="6"
            fill="#fff"
            stroke="#00B45C"
            strokeWidth="2.5"
            className="route-traveler"
          >
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              rotate="auto"
              begin="2.4s"
            >
              <mpath href="#ctaPath" />
            </animateMotion>
          </circle>
        </svg>
      </div>
    </section>
  );
}

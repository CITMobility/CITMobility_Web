'use client';
import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // ── 1. Reveal on scroll ───────────────────────────────────────────────
    // rootMargin top generoso: revela los elementos antes de que entren
    // completamente al viewport, evitando el blanco al hacer scroll rápido hacia arriba.
    const revealEls = document.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${el.dataset.delay ?? '0'}ms`;
            el.classList.add('visible');
            revealObserver.unobserve(el);
          }
        });
      },
      // rootMargin '120px 0px -20px 0px': detecta elementos 120px ANTES de entrar
      // por arriba, y solo 20px antes del borde inferior. Evita el blanco al bajar
      // y volver rápido hacia arriba.
      { threshold: 0.05, rootMargin: '120px 0px -20px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // ── 2. Section progress lines ─────────────────────────────────────────
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('line-animate'); });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll<HTMLElement>('.section-progress-line').forEach((line) => {
      const section = line.closest('.section-divider')?.nextElementSibling;
      if (section) sectionObs.observe(section);
    });

    // ── 3. Stat pop ────────────────────────────────────────────────────────
    const statsObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-item').forEach((item, i) => {
              setTimeout(() => (item as HTMLElement).classList.add('stat-pop'), i * 120);
            });
            statsObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) statsObs.observe(statsContainer);

    // ── 4. 3-D card tilt ──────────────────────────────────────────────────
    const cards = document.querySelectorAll<HTMLElement>('.card');
    const tiltCleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const onEnter = () => { card.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease'; };
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        card.style.transform = `perspective(600px) rotateX(${-dy * 8}deg) rotateY(${dx * 8}deg) translateY(-4px)`;
        card.style.boxShadow = `${-dx * 8}px ${-dy * 8}px 24px rgba(0,212,106,0.18)`;
      };
      const onLeave = () => {
        card.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease';
        card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)';
        card.style.boxShadow = '';
      };
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      tiltCleanups.push(() => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    });

    // NOTA: El canvas de partículas del hero YA está gestionado por HeroCanvas.tsx
    // como un componente React. No se crea aquí para evitar duplicados en el DOM
    // que causaban el pantallado en blanco al re-renderizar.

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      revealObserver.disconnect();
      sectionObs.disconnect();
      statsObs.disconnect();
      tiltCleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
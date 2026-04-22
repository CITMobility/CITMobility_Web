'use client';
import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // ── 1. Reveal on scroll ───────────────────────────────────────────────
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // ── 2. Section progress lines ─────────────────────────────────────────
    document.querySelectorAll<HTMLElement>('.section-progress-line').forEach((line) => {
      const section = line.closest('.section-divider')?.nextElementSibling;
      if (!section) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => { if (e.isIntersecting) line.classList.add('line-animate'); });
        },
        { threshold: 0.1 }
      );
      obs.observe(section);
    });

    // ── 3. Stat pop ────────────────────────────────────────────────────────
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.querySelectorAll('.stat-item').forEach((item, i) => {
                setTimeout(() => (item as HTMLElement).classList.add('stat-pop'), i * 120);
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(statsContainer);
    }

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

    // ── 5. Network particle canvas in hero ────────────────────────────────
    const hero = document.querySelector<HTMLElement>('.main-wrapper');
    let heroCanvas: HTMLCanvasElement | null = null;
    let heroCtx: CanvasRenderingContext2D | null = null;
    let particleRaf: number;

    if (hero) {
      heroCanvas = document.createElement('canvas');
      heroCanvas.className = 'hero-particle-canvas';
      hero.appendChild(heroCanvas);
      heroCtx = heroCanvas.getContext('2d');

      interface Particle {
        x: number; y: number;
        vx: number; vy: number;
        r: number; opacity: number;
      }

      const PARTICLE_COUNT = 38;
      const MAX_DIST = 140;
      let W = hero.offsetWidth, H = hero.offsetHeight;
      heroCanvas.width = W;
      heroCanvas.height = H;

      const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }));

      const resizeHeroCanvas = () => {
        W = hero.offsetWidth;
        H = hero.offsetHeight;
        if (heroCanvas) { heroCanvas.width = W; heroCanvas.height = H; }
      };
      window.addEventListener('resize', resizeHeroCanvas);

      const drawParticles = () => {
        if (!heroCtx || !heroCanvas) return;
        heroCtx.clearRect(0, 0, W, H);

        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;

          heroCtx!.beginPath();
          heroCtx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          heroCtx!.fillStyle = `rgba(0,212,106,${p.opacity})`;
          heroCtx!.fill();
        });

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MAX_DIST) {
              const alpha = (1 - dist / MAX_DIST) * 0.25;
              heroCtx!.beginPath();
              heroCtx!.moveTo(particles[i].x, particles[i].y);
              heroCtx!.lineTo(particles[j].x, particles[j].y);
              heroCtx!.strokeStyle = `rgba(0,212,106,${alpha})`;
              heroCtx!.lineWidth = 1;
              heroCtx!.stroke();
            }
          }
        }
        particleRaf = requestAnimationFrame(drawParticles);
      };
      drawParticles();
    }

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      revealObserver.disconnect();
      cancelAnimationFrame(particleRaf);
      tiltCleanups.forEach((fn) => fn());
      heroCanvas?.remove();
    };
  }, []);

  return null;
}

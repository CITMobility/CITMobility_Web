'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Cuando se llega a "/" con un hash (#nosotros, #contacto), hacer scroll suave al target
  useEffect(() => {
    if (pathname !== '/') return;
    const hash = window.location.hash;
    if (!hash) return;

    // Esperar a que el DOM esté listo antes de hacer scroll
    const tryScroll = (attempts = 0) => {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          const pos = el.getBoundingClientRect().top + window.scrollY;
          smoothScrollTo(pos);
          // Limpiar el hash de la URL sin recargar
          history.replaceState(null, '', '/');
        }, 100);
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 150);
      }
    };
    tryScroll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const smoothScrollTo = (targetPosition: number, duration: number = 600) => {
    const startPosition = window.scrollY;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuActive(false);

    if (pathname !== '/') {
      // Navegación suave via router (sin reload de página completa)
      router.push(`/${targetId}`);
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetPosition);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      setMenuActive(false);
      smoothScrollTo(0);
    }
  };

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo" onClick={handleLogoClick}>
        <div className="logo-img">
          <Image src="/logo-cit.png" alt="CIT" width={80} height={44} style={{ filter: 'sepia(1) saturate(4) hue-rotate(95deg)', objectFit: 'contain', width: 'auto' }} />
        </div>
      </Link>
      <button className="menu-toggle" aria-label="Abrir menú" onClick={() => setMenuActive(!menuActive)}>
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
        <li><a href="#nosotros" onClick={(e) => handleSmoothScroll(e, '#nosotros')}>Acerca de nosotros</a></li>
        <li><Link href="/productos" onClick={() => setMenuActive(false)}>Productos</Link></li>
        <li><a href="#contacto" className="nav-cta" onClick={(e) => handleSmoothScroll(e, '#contacto')}>Contáctanos</a></li>
      </ul>
    </nav>
  );
}


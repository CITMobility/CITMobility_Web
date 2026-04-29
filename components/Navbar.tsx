'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuActive(false);
    
    if (pathname !== '/') {
      window.location.href = `/${targetId}`;
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      const startPosition = window.scrollY;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      const duration = 600;
      let startTime: number | null = null;

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function
        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
        
        window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      requestAnimationFrame(animation);
    }
  };

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
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

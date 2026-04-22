'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

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
        <li><Link href="/#nosotros" onClick={() => setMenuActive(false)}>Acerca de nosotros</Link></li>
        <li><Link href="/productos" onClick={() => setMenuActive(false)}>Productos</Link></li>
        <li><Link href="/#contacto" className="nav-cta" onClick={() => setMenuActive(false)}>Contáctanos</Link></li>
      </ul>
    </nav>
  );
}

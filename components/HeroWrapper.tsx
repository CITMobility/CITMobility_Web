'use client';
import { usePathname } from 'next/navigation';
import HeroCanvas from './HeroCanvas';

export default function HeroWrapper() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  
  if (!isHome) return null;
  
  return <HeroCanvas />;
}
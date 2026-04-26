import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoPreloader from '../components/VideoPreloader';
import HeroWrapper from '../components/HeroWrapper';

export const metadata: Metadata = {
  title: 'CIT Mobility',
  description: 'Célula de Inteligencia de Transporte',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <VideoPreloader />
        <Navbar />
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', minHeight: '100vh', pointerEvents: 'none', zIndex: 0 }}>
            <HeroWrapper />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

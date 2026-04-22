import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">CIT <span>Mobility</span> — Célula de Inteligencia de Transporte</div>
      <div className="footer-copy">© {new Date().getFullYear()} CIT Mobility. Todos los derechos reservados.</div>
    </footer>
  );
}

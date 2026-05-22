# CIT Mobility — Sitio Web Oficial

Sitio web presentacional de **CIT Mobility** (Célula de Inteligencia de Transporte). Construido con Next.js 16 App Router.

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + TypeScript
- **Estilos:** CSS Modules por componente
- **Fuentes:** Syne + DM Sans via `next/font` (self-hosted, sin requests externos)
- **Deploy:** Netlify + `@netlify/plugin-nextjs`

---

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## Build de producción

```bash
npm run build
npm run start
```

---

## Despliegue en Netlify

### Primera vez (conectar repo)

1. Entra a [app.netlify.com](https://app.netlify.com) con la cuenta de CITMobility
2. **Add new site → Import an existing project**
3. Conecta con GitHub y selecciona `CITMobility_Web`
4. Netlify detecta automáticamente la configuración desde `netlify.toml`
5. Clic en **Deploy site**

No se requiere configuración manual — `netlify.toml` ya define el build command, publish directory y el plugin de Next.js.

### Deploys automáticos

Cada `git push` a `main` lanza un deploy automático en Netlify.

### Variables de entorno

Si en el futuro se agregan variables de entorno:

- **Nunca** commitear archivos `.env` (ya están en `.gitignore`)
- Configurarlas en: Netlify → Site configuration → Environment variables
- Variables expuestas al cliente deben tener prefijo `NEXT_PUBLIC_`
- Variables sin ese prefijo solo son accesibles en el servidor

---

## Estructura del proyecto

```
cit_web/
├── app/
│   ├── layout.tsx          # Layout raíz, fuentes, metadata global
│   ├── page.tsx            # Home: hero, identidad, equipo, contacto
│   ├── globals.css
│   ├── page.css
│   └── productos/
│       ├── page.tsx        # Página de productos (RuTi App)
│       └── page.css
├── components/
│   ├── Navbar.tsx / .css
│   ├── Footer.tsx / .css
│   ├── HeroCanvas.tsx      # Canvas animado con mapa de ciudad
│   ├── RobotMascot.tsx     # Mascota animada con chroma-key
│   ├── RutaAnimada.tsx     # Sección storytelling con SVG animado
│   ├── ScrollAnimations.tsx
│   ├── CTASection.tsx
│   └── Mockup*.tsx         # Mockups de la app (WIP)
├── public/                 # Assets estáticos
├── netlify.toml            # Configuración de Netlify
├── next.config.ts          # Configuración de Next.js (headers de seguridad, imágenes)
└── tsconfig.json
```

---

## Seguridad

Los headers HTTP de seguridad están configurados en `next.config.ts`:

- **CSP** — sin `unsafe-eval` en producción
- **HSTS** — fuerza HTTPS con preload
- **X-Frame-Options** — previene clickjacking
- **Permissions-Policy** — bloquea cámara, micrófono y pagos
- **Referrer-Policy** — `strict-origin-when-cross-origin`

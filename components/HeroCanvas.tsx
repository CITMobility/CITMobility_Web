'use client';
import { useEffect, useRef, useState } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const v1Ref = useRef<HTMLVideoElement>(null);
  const v2Ref = useRef<HTMLVideoElement>(null);
  const v3Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mCanvas = document.createElement('canvas');
    const mCtx = mCanvas.getContext('2d');
    if (!mCtx) return;

    let W: number, H: number;

    const C = {
      bg: '#FFFFFF',
      bg2: '#F5F7F5',
      surface: '#F9FBF9',
      surface2: '#EBF0EC',
      green: '#00D46A',
      black: '#080C09'
    };

    const SCALE = 0.8;
    const SW = 22 * SCALE;

    let vX_px: number[] = [];
    let hY_px: number[] = [];

    function calcGrid() {
      const bw_px = 120 * SCALE;
      const bh_px = 120 * SCALE;

      vX_px = [];
      hY_px = [];

      for (let x = 30; x < W + bw_px; x += bw_px) vX_px.push(x);
      for (let y = 30; y < H + bh_px; y += bh_px) hY_px.push(y);
    }

    function resizeCanvas() {
      if (!wrapper || !canvas) return;
      W = wrapper.clientWidth;
      H = wrapper.clientHeight;
      canvas.width = W;
      canvas.height = H;
      mCanvas.width = W;
      mCanvas.height = H;
      calcGrid();
    }

    resizeCanvas();

    let processedBus: HTMLCanvasElement | null = null;
    let busLoaded = false;
    let bgImage: HTMLImageElement | null = null;
    let bgLoaded = false;

    const videos: HTMLVideoElement[] = [];

    function loadVideos() {
      const refs = [v1Ref.current, v2Ref.current, v3Ref.current];
      refs.forEach(vid => {
        if (vid) {
          // Forzar la reproducción asincrónica para evitar bloqueos
          vid.play().catch(() => {});
          videos.push(vid);
        }
      });
    }

    function removeBackground(img: HTMLImageElement, threshold: number) {
      const off = document.createElement('canvas');
      off.width = img.naturalWidth;
      off.height = img.naturalHeight;
      const oc = off.getContext('2d');
      if (!oc) return null;
      oc.drawImage(img, 0, 0);
      const id = oc.getImageData(0, 0, off.width, off.height);
      const d = id.data;
      for (let i = 0; i < d.length; i += 4) {
        const lum = d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114;
        if (lum > threshold) {
          d[i + 3] = 0;
        } else if (lum > threshold - 35) {
          d[i + 3] = Math.round(((threshold - lum) / 35) * d[i + 3]);
        }
      }
      oc.putImageData(id, 0, 0);
      return off;
    }

    function loadImages() {
      return new Promise<void>(resolve => {
        let done = 0;
        const check = () => { if (++done === 2) resolve(); };

        const bi = new Image();
        bi.onload = () => { 
          const result = removeBackground(bi, 150);
          if (result) processedBus = result; 
          busLoaded = true; 
          check(); 
        };
        bi.onerror = () => { busLoaded = false; check(); };
        bi.src = '/bus-cit.jpg';

        const bg = new Image();
        bg.onload = () => { bgImage = bg; bgLoaded = true; check(); };
        bg.onerror = () => { bgLoaded = false; check(); };
        bg.src = '/fondo-monitores.jpg';
      });
    }

    function rr(targetCtx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
      r = r || 0;
      targetCtx.beginPath();
      targetCtx.moveTo(x + r, y);
      targetCtx.lineTo(x + w - r, y); targetCtx.quadraticCurveTo(x + w, y, x + w, y + r);
      targetCtx.lineTo(x + w, y + h - r); targetCtx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      targetCtx.lineTo(x + r, y + h); targetCtx.quadraticCurveTo(x, y + h, x, y + h - r);
      targetCtx.lineTo(x, y + r); targetCtx.quadraticCurveTo(x, y, x + r, y);
      targetCtx.closePath();
    }

    function drawMap(boxW: number, boxH: number) {
      if (!ctx) return;
      ctx.fillStyle = C.bg;
      ctx.fillRect(0, 0, boxW, boxH);

      const pad = 7 * SCALE, gap = 5 * SCALE;
      const bW = 16 * SCALE, bH = 20 * SCALE;

      for (let i = 0; i < hY_px.length - 1; i++) {
        for (let j = 0; j < vX_px.length - 1; j++) {
          const bx = vX_px[j] + SW / 2, by = hY_px[i] + SW / 2;
          const bw = vX_px[j + 1] - vX_px[j] - SW, bh = hY_px[i + 1] - hY_px[i] - SW;
          if (bx > boxW || by > boxH) continue;

          ctx.fillStyle = C.bg2; rr(ctx, bx, by, bw, bh, 3 * SCALE); ctx.fill();
          ctx.fillStyle = C.surface;

          const cols = Math.floor((bw - pad * 2) / (bW + gap));
          const rows = Math.floor((bh - pad * 2) / (bH + gap));
          for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
            const ex = bx + pad + c * (bW + gap), ey = by + pad + r * (bH + gap);
            if (ex + bW > bx + bw - pad || ey + bH > by + bh - pad) continue;
            rr(ctx, ex, ey, bW, bH, 2 * SCALE); ctx.fill();
            ctx.fillStyle = 'rgba(0,212,106,0.15)';
            ctx.fillRect(ex + 2 * SCALE, ey + 3 * SCALE, 4 * SCALE, 3 * SCALE);
            ctx.fillRect(ex + 8 * SCALE, ey + 3 * SCALE, 4 * SCALE, 3 * SCALE);
            ctx.fillRect(ex + 2 * SCALE, ey + 10 * SCALE, 4 * SCALE, 3 * SCALE);
            ctx.fillRect(ex + 8 * SCALE, ey + 10 * SCALE, 4 * SCALE, 3 * SCALE);
            ctx.fillStyle = C.surface;
          }
        }
      }

      ctx.shadowColor = 'rgba(0,212,106,0.2)'; ctx.shadowBlur = 8;
      ctx.fillStyle = '#EBF0EC';
      hY_px.forEach(yf => { if (yf < boxH) ctx.fillRect(0, yf - SW / 2, boxW, SW); });
      vX_px.forEach(xf => { if (xf < boxW) ctx.fillRect(xf - SW / 2, 0, SW, boxH); });
      ctx.shadowBlur = 0;

      ctx.strokeStyle = 'rgba(0,212,106,0.4)'; ctx.lineWidth = 1.5;
      hY_px.forEach(yf => { if (yf < boxH) { ctx.beginPath(); ctx.moveTo(0, yf); ctx.lineTo(boxW, yf); ctx.stroke(); } });
      vX_px.forEach(xf => { if (xf < boxW) { ctx.beginPath(); ctx.moveTo(xf, 0); ctx.lineTo(xf, boxH); ctx.stroke(); } });

      ctx.strokeStyle = 'rgba(0,212,106,0.3)'; ctx.lineWidth = 1; ctx.setLineDash([7, 11]);
      hY_px.forEach(yf => { if (yf < boxH) { ctx.beginPath(); ctx.moveTo(0, yf); ctx.lineTo(boxW, yf); ctx.stroke(); } });
      vX_px.forEach(xf => { if (xf < boxW) { ctx.beginPath(); ctx.moveTo(xf, 0); ctx.lineTo(xf, boxH); ctx.stroke(); } });
      ctx.setLineDash([]);

      ctx.fillStyle = 'rgba(0,212,106,0.2)';
      hY_px.forEach(yf => vX_px.forEach(xf => { if (xf < boxW && yf < boxH) { ctx.beginPath(); ctx.arc(xf, yf, SW / 2 + 1, 0, Math.PI * 2); ctx.fill(); } }));
    }

    const ROT: Record<number, number> = { 0: Math.PI / 2, 1: Math.PI, 2: -Math.PI / 2, 3: 0 };
    const BUS_H = 180 * SCALE;

    function drawBus(cx: number, cy: number, dir: number) {
      if (!ctx) return;
      
      // Forzar coordenadas enteras para evitar el parpadeo de sub-píxeles (anti-aliasing jitter)
      cx = Math.round(cx);
      cy = Math.round(cy);

      if (busLoaded && processedBus) {
        const aspect = processedBus.width / processedBus.height;
        const bh = BUS_H, bw = bh * aspect;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ROT[dir] || 0);

        const padW = -305 * SCALE;
        const padH = -110 * SCALE;
        const borderRadius = 10 * SCALE;
        const baseW = Math.max(bw + padW, borderRadius * 2);
        const baseH = Math.max(bh + padH, borderRadius * 2);

        ctx.fillStyle = C.bg;
        rr(ctx, -baseW / 2, -baseH / 2, baseW, baseH, borderRadius);
        ctx.fill();

        ctx.shadowColor = 'rgba(0, 212, 106, 0.4)';
        ctx.shadowBlur = 15 * SCALE;

        ctx.drawImage(processedBus, -bw / 2, -bh / 2, bw, bh);

        ctx.shadowBlur = 0;
        ctx.restore();

      } else {
        const isH = dir === 0 || dir === 2;
        const bw = (isH ? 54 : 28) * SCALE, bh = (isH ? 28 : 54) * SCALE;
        ctx.save(); ctx.translate(cx, cy);
        ctx.shadowColor = 'rgba(0,0,0,0.1)'; ctx.shadowBlur = 15;
        ctx.fillStyle = C.surface2; rr(ctx, -bw / 2, -bh / 2, bw, bh, 5 * SCALE); ctx.fill();
        ctx.shadowBlur = 10;
        ctx.strokeStyle = C.green; ctx.lineWidth = 1.5; rr(ctx, -bw / 2, -bh / 2, bw, bh, 5 * SCALE); ctx.stroke();
        ctx.fillStyle = C.green;
        if (dir === 0) { ctx.beginPath(); ctx.moveTo(bw / 2, -bh / 2); ctx.lineTo(bw / 2, bh / 2); ctx.lineTo(bw / 2 + 8 * SCALE, 0); ctx.closePath(); ctx.fill(); }
        if (dir === 1) { ctx.beginPath(); ctx.moveTo(-bw / 2, bh / 2); ctx.lineTo(bw / 2, bh / 2); ctx.lineTo(0, bh / 2 + 8 * SCALE); ctx.closePath(); ctx.fill(); }
        if (dir === 2) { ctx.beginPath(); ctx.moveTo(-bw / 2, -bh / 2); ctx.lineTo(-bw / 2, bh / 2); ctx.lineTo(-bw / 2 - 8 * SCALE, 0); ctx.closePath(); ctx.fill(); }
        ctx.restore();
      }
    }

    function drawFeed(targetCtx: CanvasRenderingContext2D, points: {x:number, y:number}[], idx: number) {
      targetCtx.save();
      targetCtx.beginPath();
      targetCtx.moveTo(points[0].x, points[0].y);
      targetCtx.lineTo(points[1].x, points[1].y);
      targetCtx.lineTo(points[2].x, points[2].y);
      targetCtx.lineTo(points[3].x, points[3].y);
      targetCtx.closePath();
      targetCtx.clip();

      const minX = Math.min(...points.map(p => p.x));
      const maxX = Math.max(...points.map(p => p.x));
      const minY = Math.min(...points.map(p => p.y));
      const maxY = Math.max(...points.map(p => p.y));
      const fw = maxX - minX;
      const fh = maxY - minY;
      const fx = minX;
      const fy = minY;

      targetCtx.fillStyle = '#FFFFFF';
      targetCtx.fillRect(fx, fy, fw, fh);

      const vid = videos[idx];
      if (vid && vid.readyState >= 2) {
        const overflow = 4;
        targetCtx.drawImage(vid, fx - overflow, fy - overflow, fw + (overflow * 2), fh + (overflow * 2));
      }

      targetCtx.fillStyle = 'rgba(0, 212, 106, 0.10)';
      targetCtx.fillRect(fx, fy, fw, fh);

      targetCtx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      targetCtx.lineWidth = 1.5;
      for (let l = 0; l < fh; l += 4) {
        targetCtx.beginPath();
        targetCtx.moveTo(fx, fy + l);
        targetCtx.lineTo(fx + fw, fy + l);
        targetCtx.stroke();
      }

      if (Math.floor(Date.now() / 600) % 2 === 0) {
        targetCtx.fillStyle = '#ff2020';
        targetCtx.beginPath();
        targetCtx.arc(points[1].x - 20, points[1].y + 20, 4, 0, Math.PI * 2);
        targetCtx.fill();
      }
      targetCtx.restore();
    }

    function drawMonitors(mX: number, mY: number, monitorScale: number) {
      if (!bgLoaded || !bgImage || !mCtx || !ctx) return;

      mCtx.clearRect(0, 0, W, H);
      mCtx.save();

      mCtx.fillStyle = '#FFFFFF';
      mCtx.strokeStyle = 'rgba(0,212,106,0.3)';
      mCtx.lineWidth = 4;
      rr(mCtx, 0, 0, W, H, 30);
      mCtx.fill();
      mCtx.stroke();
      mCtx.clip();

      mCtx.drawImage(bgImage, 0, 0, W, H);

      const leftMonitor = [
        { x: W * 0.029, y: H * 0.220 },
        { x: W * 0.338, y: H * 0.231 },
        { x: W * 0.338, y: H * 0.604 },
        { x: W * 0.030, y: H * 0.635 }
      ];

      const centerMonitor = [
        { x: W * 0.347, y: H * 0.231 },
        { x: W * 0.663, y: H * 0.231 },
        { x: W * 0.663, y: H * 0.604 },
        { x: W * 0.347, y: H * 0.604 }
      ];

      const rightMonitor = [
        { x: W * 0.662, y: H * 0.231 },
        { x: W * 0.974, y: H * 0.220 },
        { x: W * 0.970, y: H * 0.645 },
        { x: W * 0.662, y: H * 0.604 }
      ];

      drawFeed(mCtx, leftMonitor, 0);
      drawFeed(mCtx, centerMonitor, 1);
      drawFeed(mCtx, rightMonitor, 2);

      mCtx.globalCompositeOperation = 'destination-out';
      const blurSize = Math.min(W, H) * 0.05;
      mCtx.shadowColor = 'black';
      mCtx.shadowBlur = blurSize;
      mCtx.fillStyle = 'black';

      mCtx.beginPath();
      mCtx.moveTo(-W, -H);
      mCtx.lineTo(W * 2, -H);
      mCtx.lineTo(W * 2, H * 2);
      mCtx.lineTo(-W, H * 2);
      mCtx.closePath();
      mCtx.moveTo(0, 0);
      mCtx.lineTo(0, H);
      mCtx.lineTo(W, H);
      mCtx.lineTo(W, 0);
      mCtx.closePath();

      mCtx.fill();
      mCtx.restore();

      ctx.save();
      ctx.translate(mX, mY);
      ctx.scale(monitorScale, monitorScale);

      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
      ctx.shadowBlur = 30;
      ctx.shadowOffsetX = 10;
      ctx.shadowOffsetY = 10;

      ctx.drawImage(mCanvas, 0, 0);

      ctx.shadowBlur = 0;
      ctx.restore();
    }

    interface Bus {
      speed: number;
      path: {c:number, r:number}[];
      target: number;
      px: number;
      py: number;
      dir: number;
    }

    const busesList: Bus[] = [
      { speed: 0.5 * SCALE, path: [{ c: 0, r: 0 }, { c: 2, r: 0 }, { c: 2, r: 1 }, { c: 0, r: 1 }], target: 1, px: 0, py: 0, dir: 0 },
      { speed: 0.4 * SCALE, path: [{ c: 3, r: 0 }, { c: 4, r: 0 }, { c: 4, r: 1 }, { c: 3, r: 1 }], target: 1, px: 0, py: 0, dir: 0 },
      { speed: 0.6 * SCALE, path: [{ c: 0, r: 2 }, { c: 2, r: 2 }, { c: 2, r: 3 }, { c: 0, r: 3 }], target: 1, px: 0, py: 0, dir: 0 }
    ];

    function setDirection(bus: Bus, from: {c:number,r:number}, to: {c:number,r:number}) {
      if (to.c > from.c) bus.dir = 0;
      else if (to.c < from.c) bus.dir = 2;
      else if (to.r > from.r) bus.dir = 1;
      else if (to.r < from.r) bus.dir = 3;
    }

    function initBuses() {
      calcGrid();
      busesList.forEach(b => {
        const safeC = Math.min(b.path[0].c, vX_px.length - 1);
        const safeR = Math.min(b.path[0].r, hY_px.length - 1);
        b.px = vX_px[safeC];
        b.py = hY_px[safeR];
        setDirection(b, b.path[0], b.path[1]);
      });
    }

    function updateBuses(dt: number) {
      // Limit dt to prevent giant jumps if tab is inactive
      if (dt > 3) dt = 3;

      busesList.forEach(b => {
        const tPoint = b.path[b.target];
        const safeC = Math.min(tPoint.c, vX_px.length - 1);
        const safeR = Math.min(tPoint.r, hY_px.length - 1);

        const tx = vX_px[safeC];
        const ty = hY_px[safeR];

        const dx = tx - b.px;
        const dy = ty - b.py;
        const dist = Math.hypot(dx, dy);

        const moveAmount = b.speed * dt;

        if (dist <= moveAmount) {
          b.px = tx;
          b.py = ty;
          const currentTarget = b.target;
          b.target = (b.target + 1) % b.path.length;
          setDirection(b, b.path[currentTarget], b.path[b.target]);
        } else {
          b.px += (dx / dist) * moveAmount;
          b.py += (dy / dist) * moveAmount;
        }
      });
    }

    let animationId: number;
    let lastTime = performance.now();
    let isRunning = false;

    function render(time: number) {
      if (!ctx) return;
      const dt = (time - lastTime) / (1000 / 60);
      lastTime = time;
      ctx.clearRect(0, 0, W, H);
      updateBuses(dt);
      ctx.save();
      rr(ctx, 0, 0, W, H, 20);
      ctx.clip();
      ctx.translate(0, 0);
      drawMap(W, H);
      busesList.forEach(b => drawBus(b.px, b.py, b.dir));
      const monitorScale = W < 768 ? 0.56 : 0.38;
      const mWidth = W * monitorScale;
      const mHeight = H * monitorScale;
      drawMonitors(W - mWidth - 25, H - mHeight - 25, monitorScale);
      ctx.restore();
      animationId = requestAnimationFrame(render);
    }

    function startLoop() {
      if (isRunning) return;
      isRunning = true;
      lastTime = performance.now();
      animationId = requestAnimationFrame(render);
    }

    function stopLoop() {
      isRunning = false;
      cancelAnimationFrame(animationId);
    }

    // Pausa cuando la pestaña no está activa
    const handleVisibility = () => {
      if (document.hidden) stopLoop(); else startLoop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Pausa cuando el canvas sale del viewport
    const visObs = new IntersectionObserver(
      (entries) => { entries[0].isIntersecting ? startLoop() : stopLoop(); },
      { threshold: 0 }
    );
    if (wrapper) visObs.observe(wrapper);

    loadVideos();

    loadImages().then(() => {
      initBuses();
      startLoop();
      setLoaded(true);
    });

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibility);
      visObs.disconnect();
      stopLoop();
      videos.forEach(v => v.pause());
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
      {!loaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F5F7F5',
          color: '#00D46A',
          fontSize: '14px',
          fontFamily: 'system-ui'
        }}>
          Cargando...
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      <div style={{ display: 'none' }}>
        <video ref={v1Ref} src="/v1-opt.mp4" muted loop autoPlay playsInline crossOrigin="anonymous" />
        <video ref={v2Ref} src="/v2-opt.mp4" muted loop autoPlay playsInline crossOrigin="anonymous" />
        <video ref={v3Ref} src="/v3-opt.mp4" muted loop autoPlay playsInline crossOrigin="anonymous" />
      </div>
    </div>
  );
}

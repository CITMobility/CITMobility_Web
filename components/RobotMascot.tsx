'use client';
import { useEffect, useRef, useState } from 'react';
import './RobotMascot.css';

export default function RobotMascot() {
  const [visible, setVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState<'up' | 'down' | 'idle'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const lastScrollY = useRef(0);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Canvas chroma-key: remove white background frame by frame ──
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const startDrawing = () => {
      // Render at half resolution to cut chroma-key pixel processing by 75%
      const SCALE = 0.5;
      const W = Math.round((video.videoWidth || 640) * SCALE);
      const H = Math.round((video.videoHeight || 640) * SCALE);
      canvas.width = W;
      canvas.height = H;

      // Cap at 24fps — robot animation doesn't need 60fps
      const TARGET_FPS = 24;
      const FRAME_MS = 1000 / TARGET_FPS;
      let lastDraw = 0;

      const drawFrame = (now: number) => {
        rafRef.current = requestAnimationFrame(drawFrame);
        if (now - lastDraw < FRAME_MS) return;
        lastDraw = now;

        if (video.readyState >= 2) {
          ctx.drawImage(video, 0, 0, W, H);
          const frame = ctx.getImageData(0, 0, W, H);
          const d = frame.data;

          for (let i = 0; i < d.length; i += 4) {
            const r = d[i], g = d[i + 1], b = d[i + 2];
            if (r > 220 && g > 220 && b > 220) {
              d[i + 3] = 0;
            } else if (r > 190 && g > 190 && b > 190) {
              const brightness = (r + g + b) / 3;
              d[i + 3] = Math.round(((255 - brightness) / 65) * 255);
            }
          }
          ctx.putImageData(frame, 0, 0);
        }
      };
      rafRef.current = requestAnimationFrame(drawFrame);
    };

    video.addEventListener('loadedmetadata', () => {
      video.play().catch(() => {});
      startDrawing();
    });

    if (video.readyState >= 1) {
      video.play().catch(() => {});
      startDrawing();
    }

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── Visibility on load ──
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`robot-mascot ${visible ? 'robot-visible' : ''}`}
      role="img"
      aria-label="Mascota CIT Mobility"
    >
      <div className="robot-physics-container">
        {/* Hidden video source */}
        <video
          ref={videoRef}
          src="/robot-opt.mp4"
          loop
          muted
          autoPlay
          playsInline
          style={{ display: 'none' }}
        />
        {/* Canvas renders video with transparent background */}
        <canvas ref={canvasRef} className="robot-canvas" />
      </div>
    </div>
  );
}

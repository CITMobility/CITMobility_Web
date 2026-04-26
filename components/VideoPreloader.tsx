'use client';
import { useEffect, useRef } from 'react';

export default function VideoPreloader() {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const videos = [
      '/v1-opt.mp4',
      '/v2-opt.mp4',
      '/v3-opt.mp4',
      '/bus-cit.jpg',
      '/fondo-monitores.jpg',
    ];

    videos.forEach((src) => {
      if (src.endsWith('.jpg')) {
        const img = new Image();
        img.src = src;
      } else {
        const video = document.createElement('video');
        video.preload = 'auto';
        video.muted = true;
        video.src = src;
      }
    });
  }, []);

  return null;
}
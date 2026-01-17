import React, { useEffect, useRef } from 'react';
import './IntroLite.css';

type Props = {
  text: string;
  duration?: number; // ms
  onComplete?: () => void;
};

const IntroLite: React.FC<Props> = ({ text, duration = 3000, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // offscreen canvas used for text mask
    const mask = document.createElement('canvas');
    mask.width = w;
    mask.height = h;
    const mctx = mask.getContext('2d')!;

    const DPR = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    mask.width = w * DPR;
    mask.height = h * DPR;
    mctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    // text sizing
    const fontSize = Math.min(160, Math.floor(w / Math.max(6, text.length * 0.6)));
    const font = `bold ${fontSize}px system-ui, -apple-system, 'Segoe UI', Roboto`;
    mctx.clearRect(0, 0, w, h);
    mctx.fillStyle = '#fff';
    mctx.textAlign = 'center';
    mctx.textBaseline = 'middle';
    mctx.font = font;
    mctx.fillText(text, w / 2, h / 2);

    // pre-render a blurred glow for behind text
    const glow = document.createElement('canvas');
    glow.width = w * DPR;
    glow.height = h * DPR;
    const gctx = glow.getContext('2d')!;
    gctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    gctx.fillStyle = '#fff';
    gctx.font = font;
    gctx.textAlign = 'center';
    gctx.textBaseline = 'middle';
    gctx.fillText(text, w / 2, h / 2);
    // apply blur via shadow
    gctx.globalCompositeOperation = 'source-in';
    gctx.fillStyle = 'rgba(255,40,40,0.12)';
    gctx.fillRect(0, 0, w, h);

    let start = performance.now();
    const endTime = start + duration;

    const beams = Array.from({ length: 6 }).map((_, i) => ({
      offset: (i / 6) * w,
      speed: 0.6 + Math.random() * 1.2,
      hue: 0 + i * 30,
      thickness: 0.08 + Math.random() * 0.25,
    }));

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function draw(now: number) {
      if (!ctx) return;
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, w, h);

      // dark background
      ctx.fillStyle = '#080808';
      ctx.fillRect(0, 0, w, h);

      // faint glow behind text
      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.drawImage(glow, 0, 0, w, h);
      ctx.restore();

      // draw moving prismatic beams onto an offscreen buffer
      const beamsCanvas = document.createElement('canvas');
      beamsCanvas.width = w * DPR;
      beamsCanvas.height = h * DPR;
      const bctx = beamsCanvas.getContext('2d')!;
      bctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      beams.forEach((b, idx) => {
        const pos = ((t * b.speed * 300) + b.offset) % (w * 2) - w;
        const bw = w * b.thickness;
        const grad = bctx.createLinearGradient(pos - bw, 0, pos + bw, 0);
        // RGB split
        grad.addColorStop(0, `hsla(${b.hue - 20},100%,60%,0)`);
        grad.addColorStop(0.45, `hsla(${b.hue - 10},100%,60%,0.8)`);
        grad.addColorStop(0.5, `hsla(${b.hue},100%,65%,1)`);
        grad.addColorStop(0.55, `hsla(${b.hue + 10},100%,60%,0.8)`);
        grad.addColorStop(1, `hsla(${b.hue + 20},100%,60%,0)`);
        bctx.fillStyle = grad;
        // add gaussian-ish vertical variation
        bctx.beginPath();
        bctx.moveTo(pos - bw, 0);
        bctx.lineTo(pos + bw, 0);
        bctx.lineTo(pos + bw, h);
        bctx.lineTo(pos - bw, h);
        bctx.closePath();
        bctx.fill();
      });

      // mask beams with text shape: draw beams then keep only where mask has pixels
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      // draw the beams onto main canvas
      ctx.drawImage(beamsCanvas, 0, 0, w, h);
      // mask: keep only areas where mask has text (destination-in)
      ctx.globalCompositeOperation = 'destination-in';
      ctx.drawImage(mask, 0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';

      // subtle white center for contrast
      ctx.save();
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.font = font;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, w / 2, h / 2);
      ctx.restore();

      // fade out toward the end
      const remaining = endTime - now;
      if (remaining < 500) {
        const fade = Math.max(0, remaining / 500);
        ctx.fillStyle = `rgba(8,8,8,${1 - fade})`;
        ctx.fillRect(0, 0, w, h);
      }

      if (!reduced && now < endTime) {
        rafRef.current = requestAnimationFrame(draw);
      } else {
        // finish quickly if reduced motion
        if (reduced) {
          // show a static masked beam briefly
          setTimeout(() => onComplete && onComplete(), 300);
        } else {
          // call onComplete after short delay to let fade finish
          setTimeout(() => onComplete && onComplete(), 120);
        }
      }
    }

    rafRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [text, duration, onComplete]);

  return (
    <div className="intro-lite-root">
      <canvas ref={canvasRef} className="intro-lite-canvas" />
    </div>
  );
};

export default IntroLite;

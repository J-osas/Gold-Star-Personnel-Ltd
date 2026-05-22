import React, { useEffect, useRef } from 'react';

export function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      isStar: boolean;
      pulsate: number;
      pulsateSpeed: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
      canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create single particle
    const createParticle = (isInitial = false) => {
      return {
        x: Math.random() * canvas.width,
        y: isInitial ? Math.random() * canvas.height : canvas.height + 20,
        size: Math.random() * 1.5 + 1, // small elegant dots
        speedY: -(Math.random() * 0.35 + 0.15),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.4 + 0.1,
        isStar: Math.random() < 0.15, // 15% stars
        pulsate: Math.random() * Math.PI,
        pulsateSpeed: Math.random() * 0.02 + 0.01
      };
    };

    // Populate particles
    const particleCount = 40;
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true));
    }

    const drawStar = (context: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      context.beginPath();
      context.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
      context.lineTo(cx, cy - outerRadius);
      context.closePath();
      context.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulsate += p.pulsateSpeed;

        // Pulsate opacity for breathing star effect
        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulsate));

        ctx.shadowBlur = p.isStar ? 6 : 2;
        ctx.shadowColor = '#C9A84C';
        ctx.fillStyle = `rgba(201, 168, 76, ${currentOpacity})`;

        if (p.isStar) {
          drawStar(ctx, p.x, p.y, 5, p.size * 3.5, p.size * 1.5);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Reset shadow for performance
        ctx.shadowBlur = 0;

        // Reset offscreen particles
        if (p.y < -20 || p.x < -10 || p.x > canvas.width + 10) {
          particles[i] = createParticle(false);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="gold-star-particles"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70 mix-blend-screen z-0"
    />
  );
}

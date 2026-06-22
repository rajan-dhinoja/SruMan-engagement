"use client";

import React, { useEffect, useRef } from "react";

interface SparklesCanvasProps {
  density?: number;
}

export default function SparklesCanvas({ density = 60 }: SparklesCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle Classes
    class GoldSparkle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      alphaSpeed: number;
      angle: number;
      angleSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.7 + 0.2;
        this.alphaSpeed = Math.random() * 0.01 + 0.003;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.angle) * 0.1;
        this.angle += this.angleSpeed;

        // Fade in and out
        this.opacity += this.alphaSpeed;
        if (this.opacity > 0.95 || this.opacity < 0.15) {
          this.alphaSpeed = -this.alphaSpeed;
        }

        // Wrap around screens
        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;

        // Interaction with mouse
        if (mouseRef.current.active) {
          const dx = this.x - mouseRef.current.x;
          const dy = this.y - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = `rgba(187, 107, 217, ${Math.max(0, Math.min(1, this.opacity))})`;
        c.shadowBlur = this.size * 5;
        c.shadowColor = "#bb6bd9";
        c.fill();
        c.restore();
      }
    }

    class Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      swayWidth: number;
      swaySpeed: number;
      swayOffset: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height; // Start above screen
        this.size = Math.random() * 8 + 6;
        this.speedY = Math.random() * 0.8 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.015;
        this.swayWidth = Math.random() * 1.5 + 0.5;
        this.swaySpeed = Math.random() * 0.01 + 0.005;
        this.swayOffset = Math.random() * 100;
        
        // Beautiful soft royal purple / lavender palette
        const colors = [
          "rgba(219, 175, 227, 0.45)", // Soft lavender
          "rgba(142, 53, 167, 0.35)",  // Royal purple
          "rgba(245, 238, 245, 0.55)", // Pale lilac
          "rgba(214, 168, 83, 0.35)"   // Pale gold sparkle accent
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.swayOffset + this.y * this.swaySpeed) * this.swayWidth;
        this.rotation += this.rotationSpeed;

        if (this.y > height + 20) {
          this.y = -20;
          this.x = Math.random() * width;
          this.speedY = Math.random() * 0.8 + 0.5;
        }

        // Interaction with mouse
        if (mouseRef.current.active) {
          const dx = this.x - mouseRef.current.x;
          const dy = this.y - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 200) {
            const force = (200 - dist) / 200;
            this.x += (dx / dist) * force * 2.0;
            this.y += (dy / dist) * force * 1.0;
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rotation);
        c.beginPath();
        // Create organic cherry blossom / rose petal leaf shape
        c.moveTo(0, 0);
        c.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, this.size / 3, 0, this.size);
        c.bezierCurveTo(this.size, this.size / 3, this.size / 2, -this.size / 2, 0, 0);
        c.fillStyle = this.color;
        c.shadowBlur = 4;
        c.shadowColor = "rgba(142, 53, 167, 0.15)";
        c.fill();
        c.restore();
      }
    }

    const particles: (GoldSparkle | Petal)[] = [];
    
    const initParticles = () => {
      particles.length = 0;
      // Gold sparkles density
      const sparkleCount = Math.floor(density * 1.2);
      for (let i = 0; i < sparkleCount; i++) {
        particles.push(new GoldSparkle());
      }
      // Falling petals density
      const petalCount = Math.floor(density * 0.4);
      for (let i = 0; i < petalCount; i++) {
        particles.push(new Petal());
      }
    };

    initParticles();

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    // Mouse Move Handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}

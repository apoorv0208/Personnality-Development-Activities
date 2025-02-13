import React, { useEffect, useRef } from "react";

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.radius = 2;
      }

      move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= width) this.vx *= -1;
        if (this.y <= 0 || this.y >= height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#facc15";
        ctx.fill();
      }
    }

    function createParticles(num) {
      particles = [];
      for (let i = 0; i < num; i++) {
        particles.push(new Particle(Math.random() * width, Math.random() * height));
      }
    }

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "rgba(250, 204, 21, 0.3)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.move();
        particle.draw();
      });
      drawLines();
      requestAnimationFrame(animate);
    }

    createParticles(80);
    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles(80);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
  );
};

export default BackgroundAnimation;
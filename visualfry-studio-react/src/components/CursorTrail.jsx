import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const dotsRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotsPos = useRef([]);

  useEffect(() => {
    // Create 8 dots for the trail
    const dotCount = 8;
    const dots = [];
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      dot.className = 'cursor-trail-dot';
      document.body.appendChild(dot);
      dots.push(dot);
    }
    dotsRef.current = dots;

    // Initialize positions
    dotsPos.current = Array(dotCount).fill({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      let x = mousePos.current.x;
      let y = mousePos.current.y;

      dotsRef.current.forEach((dot, index) => {
        // Each dot follows the previous one with a slight delay
        const pos = dotsPos.current[index];

        // Lerp (Linear Interpolation) for smooth following
        const nextX = pos.x + (x - pos.x) * 0.3;
        const nextY = pos.y + (y - pos.y) * 0.3;

        dotsPos.current[index] = { x: nextX, y: nextY };

        dot.style.transform = `translate(${nextX}px, ${nextY}px)`;
        // Scale dots down as they go further back in the trail
        dot.style.opacity = (1 - index / dotCount).toString();
        dot.style.width = `${(1 - index / dotCount) * 10}px`;
        dot.style.height = `${(1 - index / dotCount) * 10}px`;

        x = nextX;
        y = nextY;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      dotsRef.current.forEach(dot => document.body.removeChild(dot));
    };
  }, []);

  return null; // Component handles DOM manipulation directly for performance
};

export default CursorTrail;

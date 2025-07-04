// src/components/GlowingCursorTrail.js
import React, { useEffect, useState } from 'react';
import './GlowingCursorTrail.css';

const TRAIL_LENGTH = 4;

const GlowingCursorTrail = () => {
  const [trail, setTrail] = useState(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = [...trail];
      newTrail[0] = { x: e.clientX, y: e.clientY };

      for (let i = 1; i < TRAIL_LENGTH; i++) {
        newTrail[i] = {
          x: newTrail[i].x + (newTrail[i - 1].x - newTrail[i].x) * 0.25,
          y: newTrail[i].y + (newTrail[i - 1].y - newTrail[i].y) * 0.25,
        };
      }

      setTrail(newTrail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [trail]);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={index}
          className={`trail-dot fade-${index}`}
          style={{
            transform: `translate3d(${point.x}px, ${point.y}px, 0)`,
          }}
        />
      ))}
    </>
  );
};

export default GlowingCursorTrail;

import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  animation: string;
}

const Bubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const bubbleCount = window.innerWidth < 768 ? 10 : 20;
    const initialBubbles: Bubble[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      initialBubbles.push({
        id: i,
        size: Math.random() * 30 + 10, // 10-40px
        x: Math.random() * 100, // 0-100%
        y: Math.random() * 100, // 0-100%
        speed: Math.random() * 4 + 6, // 6-10s
        opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
        animation: ['float', 'float-slow', 'float-slower'][Math.floor(Math.random() * 3)]
      });
    }

    setBubbles(initialBubbles);

    // Handle window resize
    const handleResize = () => {
      const newBubbleCount = window.innerWidth < 768 ? 10 : 20;
      if (newBubbleCount !== bubbles.length) {
        const newBubbles: Bubble[] = [];
        for (let i = 0; i < newBubbleCount; i++) {
          newBubbles.push({
            id: i,
            size: Math.random() * 30 + 10,
            x: Math.random() * 100,
            y: Math.random() * 100,
            speed: Math.random() * 4 + 6,
            opacity: Math.random() * 0.3 + 0.1,
            animation: ['float', 'float-slow', 'float-slower'][Math.floor(Math.random() * 3)]
          });
        }
        setBubbles(newBubbles);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full bg-tertiary animate-${bubble.animation}`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            opacity: bubble.opacity,
            animationDuration: `${bubble.speed}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;